import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';  // 1. to spport .env variables

import postRoutes from './routes/posts.js';

dotenv.config();  // 2. to spport .env variables
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors()); // this code need to place before app.use('/path', routes);
app.use('/posts', postRoutes);
app.use('/', (req, res) => { res.send('Welcome! This is stories API.') });

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => { console.log(`Server is listening on port ${PORT}`) });

const mongodb_connect_url = process.env.MONGODB_CONNECT_URL;
mongoose.connect(mongodb_connect_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');

}).catch(error => {
    console.error('Error in connecting to MongoDB:', error);
});
// mongoose.set('useFindAndModify', false); // There is an error about this code