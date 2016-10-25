/*Verifica del funzionamento delle classi private / public*/

function Classe (){
	var a = 1;
	this.get = function() { return a; };
	this.b = 2;
}

//Classe.prototype.get() = function() { return a; };
function Factory(){
	var res = new Object();
	res.a = 1;
	res.get = function(){ return res.a;};
	return res;
}

var Literal = {
	a: 1,
	get:function(){return this.a; }
};


QUnit.test('Classi', function(assert) {
	var oggetto = new Classe();
	assert.expect(3);

	assert.equal(oggetto.get(), 1, 'E\' possibile accedere ai metodi');

	assert.notEqual(oggetto.a, 1, 'NON è possibile accedere agli attributi privati');
	assert.equal(oggetto.b, 2, 'è possibile accedere agli attributi pubblici');

	
});

QUnit.test('Factory', function(assert) {
	assert.expect(2);

	var oggetto = Factory();
	
	assert.equal(oggetto.a, 1, 'E\' possibile accedere agli attributi');
	assert.equal(oggetto.get(), 1, 'E\' possibile accedere ai metodi');
});

QUnit.test('Literal', function(assert) {
	assert.expect(2);
	assert.equal(Literal.a, 1, 'E\' possibile accedere agli attributi');
	assert.equal(Literal.get(), 1, 'E\' possibile accedere ai metodi');
});