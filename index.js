const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router =require("./routers/index");


const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);

async function start () {
    try {
        await mongoose.connect('mongodb+srv://mrlomer777:WFzgtpQc9ykqNa68@cluster0.6ti5r3q.mongodb.net/', {
        });

        app.listen(PORT, () => {
            console.log(PORT);
            
        });
    } catch (err) {
        console.log(err);
    }
}

start();
