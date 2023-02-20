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
const SubscriptionRouter = require('./routers/SubscriptionRouter');
const utilRouter = require('./routers/utils');


const cors = require('cors');
const { PORT } = require('./config');

const app = express();


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
app.use('/Subscription', SubscriptionRouter);
app.use('/util', utilRouter);




app.get('/', (req, res) => {
    console.log('Request at index');
    res.status(299).send('Working Perfectly!!');
})

app.listen(PORT, () => console.log(`Express server has started at ${PORT}`));