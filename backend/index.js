const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

// const userRouter = require('./routers/userRouter');
const adminRouter = require('./routers/adminRouter');
const startupRouter = require('./routers/startupRouter');
const investorRouter = require('./routers/investorRouter');
const campaignRouter = require('./routers/campaignRouter');
const NewsRouter = require('./routers/NewsRouter');
const BlogRouter = require('./routers/BlogRouter');
const FeedbackRouter = require('./routers/FeedbackRouter');
const SubscriptionRouter = require('./routers/SubscriptionRouter');
const utilRouter = require('./routers/utils');
const contactRouter = require('./routers/contactRouter');

const cors = require('cors');
const { PORT } = require('./config');

const app = express();

const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: ['http://localhost:3000', 'http://localhost:3001'], } });

io.on("connection", (socket) => {
    console.log('client connected');

    socket.on('sendmsg', (data) => {
        console.log(data);
        data.sent = false;
        socket.broadcast.emit('recmsg', data);
    })
});


app.use(express.json());
// app.use(express.urlencoded({extended : true}));
app.use(cors(
    {
        origin: ['http://localhost:3000', 'http://localhost:3001'],
        credentials: true
    },
));
// app.use('/user', userRouter);
app.use('/admin', adminRouter);
app.use('/startup', startupRouter);
app.use('/investor', investorRouter);
app.use('/campaign', campaignRouter);
app.use('/News', NewsRouter);
app.use('/Blog', BlogRouter);
app.use('/feedback', FeedbackRouter);
app.use('/Subscription', SubscriptionRouter);
app.use('/util', utilRouter);
app.use('/contact', contactRouter);


app.use(express.static('./static/uploads'));


app.get('/', (req, res) => {
    console.log('Request at index');
    res.status(299).send('Working Perfectly!!');
})

httpServer.listen(PORT, () => console.log(`Express server has started at ${PORT}`));