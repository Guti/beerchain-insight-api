const mongoose = require('mongoose');

const contractCodeSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
        index: true
    },
    source: {
        type: String,
        required: true
    },
    abi: {
        type: String,
        required: true
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const ContractCode = mongoose.model('ContractCode', contractCodeSchema);

module.exports = ContractCode;