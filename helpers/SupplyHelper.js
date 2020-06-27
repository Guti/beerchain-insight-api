var BigNumber = require('bignumber.js');

module.exports = {
    /**
     *
     * @param {Number} height
     * @return {BigNumber}
     */
    getTotalSupplyByHeight: function (height) {

    	var premine = 1050000;

    	if(height <= 2) {
    		return (new BigNumber(0)).plus(height * premine);
    	}

        return (new BigNumber(0)).plus(height * 25).plus(2 * premine);
    }

};