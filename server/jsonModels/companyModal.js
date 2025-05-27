const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
    companyId: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: false,
    },
    userName: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: false,
    },
    document: {
        type: String,
        required: false,
    },
});

module.exports = mongoose.model("company", CompanySchema);
