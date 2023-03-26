const multer = require("multer");
const router = require("express").Router();
const { SMTPClient } = require("emailjs");
const stripe = require("stripe")("sk_test_51MgNGvSJuddPqKFR2LBYHiEBkIZZbIxcihG8xn8ZK3t6mxxfmNr302jubWmRjx27MtoN77dhLkjtkZdpRKUykPYn00isrhKV0o");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./static/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const myStorage = multer({ storage: storage });

router.post("/uploadfile", myStorage.single("myfile"), (req, res) => {
  res.status(200).json({ status: "success" });
});

const initMail = () => {
  return new SMTPClient({
    user: "investupwithus@gmail.com",
    password: "zrfdrttirfdhslti",
    host: "smtp.gmail.com",
    ssl: true,
  });
};

const client = initMail();
const sendMail = (to, subject, text) => {
  client.send(
    {
      text: text,
      from: "investupwithus@gmail.com",
      to: to,

      cc: "",
      subject: subject,
    },
    (err, message) => {
      console.log(err || message);
    }
  );
};

router.post("/sendmail", (req, res) => {
  const data = req.body;
  sendMail(data.to, data.subject, data.text);
  res.status(200).json({ message: "mail sent successfully" });
});

router.get("/getpaymentdetails/:sessionid", async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.params.sessionid);
  res.json(session);
});

module.exports = router;
