var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calclulateLateFee(daysLate) {
            return daysLate * 0.25;
        }
        Fees.calclulateLateFee = calclulateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function maxBooksAllowed(age) {
        return age < 12 ? 3 : 10;
    }
    Utility.maxBooksAllowed = maxBooksAllowed;
    function privateFunc() {
        console.log('This is a private function');
    }
})(Utility || (Utility = {}));
/// <reference path="utility-functions.ts" />
console.log(Utility.maxBooksAllowed(30));
var util = Utility.Fees;
var result2 = util.calclulateLateFee(10);
console.log(result2);
