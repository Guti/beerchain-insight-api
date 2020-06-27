const mongoose = require('mongoose');
const ContractCode = require('../models/ContractCode');

function ContractCodeRepository () {}

ContractCodeRepository.prototype.getContractCode = function (address, next) {

    return ContractCode.findOne({address: address}, function(err, row) {
        return next(err, row);
    });
};

module.exports = ContractCodeRepository;
