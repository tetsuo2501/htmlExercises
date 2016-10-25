// Definisco un namespace
 var calculatorNamespace = (function(){
    //var calculatorNamespace
    
    //this.calculatorNamespace = this.calculatorNamespace || {};
     //calculatorNamespace = {};
    var ns = {};//calculatorNamespace;
    

    ns.initialize = function () {
        var calculator = new ns.Calculator(); 
        $('button[id^="btnNumber"]').on('click', calculator.numberClick);   
       
        //txtResult = $('#txtResult');//document.getElementById('txtResult');

        //document.getElementById('btnPlus').addEventListener('click', plusClick, false);
        $('#btnPlus').on('click', calculator.plusClick);
        //document.getElementById('btnMinus').addEventListener('click', minusClick, false);
        $('#btnMinus').on('click',calculator.minusClick);
        //document.getElementById('btnClearEntry').addEventListener('click', clearEntry, false);
        $('#btnClearEntry').on('click',calculator.clearEntry);
        //document.getElementById('btnClear').addEventListener('click', clear, false);
        $('#btnClear').on('click',calculator.clear);
        calculator.clear();

    };

    ns.Calculator = (function(){
        function Calculator(){        
        }

        Calculator.prototype.numberClick = function() {
            $('#txtInput').val($('#txtInput').val() == '0' ? this.innerText : $('#txtInput').val() + this.innerText );
        };

        Calculator.prototype.plusClick = function() {
            $('#txtResult').val( Number($('#txtResult').val()) + Number($('#txtInput').val()) );
            Calculator.prototype.clearEntry();
        };

        Calculator.prototype.minusClick = function() {
            $('#txtResult').val( Number($('#txtResult').val()) - Number($('#txtInput').val()) );
            Calculator.prototype.clearEntry();
        };

        Calculator.prototype.clearEntry = function() {
            $('#txtInput').val('0');
        };

        Calculator.prototype.clear = function() {
            Calculator.prototype.clearEntry();
            $('#txtResult').val('0');
        };

        return Calculator;   
    })();
    return ns;
})() || {};