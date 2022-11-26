const mongoose = require("mongoose");

const subscribersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subscribedToChannel: {
        type: String,
        required: false,
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

module.exports = mongoose.model("Subscriber", subscribersSchema);
