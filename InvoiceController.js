var app =  angular.module('currencyConvert',[])

app.controller('InvoiceController',['currencyConverterService',function InvoiceController(currencyConverterService) {
	self=this;
	self.qty =1;
	self.cost = 2;
	self.inCurr = 'EUR';
	self.curr = currencyConverterService.currencies;
	
	self.total = function total(outCurr){
		return currencyConverterService.convert(self.qty*self.cost,self.inCurr,outCurr);
	};
	self.pay = function pay(){
		window.alert("success");
	};
	}]);

app.factory('currencyConverterService',function currencyConverter() {
		var currency = ['USD','EUR','CNY'];
		var foreignRates = {
		USD : 1,
		EUR : 0.86,
		CNY : 0.7
		};
		var convert = function(amount, inCurr, outCurr) {
      		return amount * foreignRates[outCurr] / foreignRates[inCurr];
    	};
     

    return {
 		currencies: currency,
        convert: convert
    };
});
hgfhgfhgfhgf