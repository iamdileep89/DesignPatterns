// This is structural pattern where interface of one class is transferred into another
// This pattern lets classes work together
// This is used to create wrappers for new API's so the old API's still work with them

/*
In this example, we have an old API, i.e. OldCalculator class, and a new API, i.e. NewCalculator class. The OldCalculator class provides an operationmethod for both addition and subtraction, while the NewCalculator provides separate methods for addition and subtraction. The Adapter class CalcAdapterwraps the NewCalculator to add the operation method to the public-facing API while using its own addition and subtraction implementation under the hood.
*/


// old interface
class OldCalculator {
    constructor(){
        this.operations = function(term1, term2, operation){
            switch (operation){
                case 'add':
                    return term1+term2;
                case 'sub':
                    return term1-term2;
                default:
                    return NaN;
            }
        }
    }
}


// New Interface
class NewCalculator{
    constructor(){
        this.add = function(term1, term2){
            return term1+term2
        }
        this.sub = function(term1, term2){
            return term1-term2
        }
    }
}


// Adapter class
class CalcAdapter {
    constructor(){
        const newCalc = new NewCalculator();
        this.operations = function(term1, term2, operation){
            switch (operation){
                case 'add':
                    return newCalc.add(term1, term2)
                case 'sub':
                    return newCalc.sub(term1, term2)
                default:
                    return NaN
            }
        }
    }
}

//usage

const oldcalc = new OldCalculator()
console.log(oldcalc.operations(10, 5, 'add'))


const newCalc = new NewCalculator()
console.log(newCalc.add(10,5))


const adapterCalc = new CalcAdapter()
console.log(adapterCalc.operations(10, 5, 'add'))
