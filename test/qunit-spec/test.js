QUnit.module('Calculator Test Suite', { beforeEach: function (assert) { initialize(); } });

QUnit.test("Initialize Test", function (assert) {
    assert.expect(2);
    txtInput.value = '0';
    txtResult.value = '0';
    var expected = '0';
    assert.equal(txtInput.value, expected, 'Expected value: ' + expected + '  Actual value: ' + txtInput.value);
    assert.equal(txtResult.value, expected, 'Expected value: ' + expected + '  Actual value: ' + txtResult.value);
});



QUnit.test("Button Click Test", function (assert) {
    var buttonQuantity = 10;
    assert.expect(buttonQuantity * 2);
    for (var i = 0; i < buttonQuantity; i++) {
        var btn = document.getElementById('btn' + i);
        //QUnit.triggerEvent(btn, "click");
        $('#btn'+i).trigger('click');
        var result = txtInput.value[txtInput.value.length-1];
        var expected = String(i);
        assert.equal(result, expected, 'Expected value: ' + expected + '  Actual value: ' + result);
        var expectedLength = i < 2 ? 1 : i;
        assert.equal(txtInput.value.length, expectedLength, 'Expected string length: ' + expectedLength +
            '  Actual value: ' + txtInput.value.length);
    }
});

QUnit.test("Add Test", function (assert) {
    assert.expect(2);
    txtInput.value = '10';
    txtResult.value = '20';
    var btnPlus = document.getElementById('btnPlus');
    //QUnit.triggerEvent(btnPlus, "click");
    $('#btnPlus').trigger('click');
    var expected = '30';
    assert.equal(txtResult.value, expected, 'Expected value: ' + expected +
        '  Actual value: ' + txtResult.value);
    expected = '0';
    assert.equal(txtInput.value, expected, 'Expected value: ' + expected + '  Actual value: ' + txtInput.value);
});

QUnit.test("Subtract Test", function (assert) {
    assert.expect(2);
    txtInput.value = '10';
    txtResult.value = '20';
    var btnMinus = document.getElementById('btnMinus');
    //QUnit.triggerEvent(btnMinus, "click");
    $('#btnMinus').trigger('click');
    var expected = '10';
    assert.equal(txtResult.value, expected, 'Expected value: ' + expected +
        '  Actual value: ' + txtResult.value);
    expected = '0';
    assert.equal(txtInput.value, expected, 'Expected value: ' + expected + '  Actual value: ' + txtInput.value);
});

QUnit.test("Clear Entry Test", function (assert) {
    assert.expect(1);
    txtInput.value = '10';
    //Unit.triggerEvent(btnClearEntry, "click");
    $('#btnClearEntry').trigger('click');
    var expected = '0';
    assert.equal(txtInput.value, expected, 'Expected value: ' + expected + '  Actual value: ' + txtInput.value);
});

QUnit.test("Clear Test", function (assert) {
    assert.expect(2);
    txtInput.value = '10';
    txtResult.value = '20';
    //QUnit.triggerEvent(btnClear, "click");
     $('#btnClear').trigger('click');
    var expected = '0';
    assert.equal(txtInput.value, expected, 'Expected value: ' + expected + '  Actual value: ' + txtInput.value);
    assert.equal(txtResult.value, expected, 'Expected value: ' + expected + '  Actual value: ' + txtResult.value);
});




