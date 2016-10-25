QUnit.module('Calculator Test Suite', { beforeEach: function (assert) { initialize(); } });

QUnit.test("Initialize Test", function (assert) {
    assert.expect(2);
    //txtInput.value = '0';
    //txtResult.value = '0';
    var expected = '0';
    assert.equal(txtInput.val(), expected, 'Expected value: ' + expected + '  Actual value: ' + txtInput.value);
    assert.equal(txtResult.val(), expected, 'Expected value: ' + expected + '  Actual value: ' + txtResult.value);
});



QUnit.test("Button Click Test", function (assert) {
    var buttonQuantity = 10;
    assert.expect(buttonQuantity * 2);
    for (var i = 0; i < buttonQuantity; i++) {
        var btn = document.getElementById('btn' + i);
        //QUnit.triggerEvent(btn, "click");
        $('#btn'+i).triggerHandler('click');
        var result = txtInput.val()[txtInput.val().length-1];
        var expected = String(i);
        assert.equal(result, expected, 'Expected value: ' + expected + '  Actual value: ' + result);
        var expectedLength = i < 2 ? 1 : i;
        assert.equal(txtInput.val().length, expectedLength, 'Expected string length: ' 
            + expectedLength 
            + '  Actual value: ' 
            + txtInput.val().length);
    }
});

QUnit.test("Add Test", function (assert) {
    assert.expect(2);
    txtInput.val('10');
    txtResult.val('20');
    var btnPlus = document.getElementById('btnPlus');
    //QUnit.triggerEvent(btnPlus, "click");
    $('#btnPlus').triggerHandler('click');
    var expected = '30';
    assert.equal(txtResult.val(), expected, 'Expected value: ' + expected +
        '  Actual value: ' + txtResult.val());
    expected = '0';
    assert.equal(txtInput.val(), expected, 'Expected value: ' + expected + '  Actual value: ' + txtInput.val());
});

QUnit.test("Subtract Test", function (assert) {
    assert.expect(2);
    txtInput.val('10');
    txtResult.val('20');
    var btnMinus = document.getElementById('btnMinus');
    //QUnit.triggerEvent(btnMinus, "click");
    $('#btnMinus').triggerHandler('click');
    var expected = '10';
    assert.equal(txtResult.val(), expected, 'Expected value: ' + expected +
        '  Actual value: ' + txtResult.val());
    expected = '0';
    assert.equal(txtInput.val(), expected, 'Expected value: ' + expected + '  Actual value: ' + txtInput.val());
});

QUnit.test("Clear Entry Test", function (assert) {
    assert.expect(1);
    txtInput.val('10');
    //Unit.triggerEvent(btnClearEntry, "click");
    $('#btnClearEntry').triggerHandler('click');
    var expected = '0';
    assert.equal(txtInput.val(), expected, 'Expected value: ' + expected + '  Actual value: ' + txtInput.val());
});

QUnit.test("Clear Test", function (assert) {
    assert.expect(2);
    txtInput.val( '10' );
    txtResult.val( '20' );
    //QUnit.triggerEvent(btnClear, "click");
     $('#btnClear').triggerHandler('click');
    var expected = '0';
    assert.equal(txtInput.val(), expected, 'Expected value: ' + expected + '  Actual value: ' + txtInput.val());
    assert.equal(txtResult.val(), expected, 'Expected value: ' + expected + '  Actual value: ' + txtResult.val());
});




