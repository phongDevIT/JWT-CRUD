const mongoose = require("mongoose");

async function connectDatabase() {
    try {
        await mongoose.connect(
            `mongodb://127.0.0.1:${process.env.PORT_MONGO}/${process.env.DATABASE_NAME}`
        );
        console.log("connect database success");
    } catch (err) {
        console.log("data base fail", err);
    }
}
module.exports = connectDatabase;
