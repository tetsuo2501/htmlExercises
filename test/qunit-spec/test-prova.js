/*Verifica del funzionamento delle classi private / public*/

var Classe = (function(){
	function Classe (){
		var a = 1;
		this.get = function() { return a; };
		this.b = 2;
	};

	Classe.prototype.funzione = function (){
		return this.b +5;	
	};

	return Classe;

})();


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

var EreditatoSenzaPrototipo = ( function (padre){
			function EreditatoSenzaPrototipo(){
				padre.call(this);				
			}
			return EreditatoSenzaPrototipo;
	}
	)(Classe);

var EreditatoConPrototipo = ( function(padre){
	
	function EreditatoConPrototipo(){
		padre.call(this);	}

	EreditatoConPrototipo.prototype = new Classe();
	EreditatoConPrototipo.prototype.constructor = EreditatoConPrototipo;
	return EreditatoConPrototipo;
})(Classe);



QUnit.test('Classi', function(assert) {
	var oggetto = new Classe();
	assert.expect(4);

	assert.equal(oggetto.get(), 1, 'E\' possibile accedere ai metodi');

	assert.notEqual(oggetto.a, 1, 'NON è possibile accedere agli attributi privati');
	assert.equal(oggetto.b, 2, 'è possibile accedere agli attributi pubblici');
	assert.equal(oggetto.funzione(), 7, 'message');
	
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

QUnit.test('Ereditarietà', function(assert) {
	assert.expect(3);
	var a = new EreditatoSenzaPrototipo();
	assert.equal(a.b, 2, 'Eredita attributo');
	assert.equal(a.get(),1, 'Eredita metodi');
	assert.notOk(a.funzione,  'NON Ha eseguito una funzione importata nel prototype');
});

QUnit.test('Ereditarietà con i prototipi', function(assert) {
	assert.expect(3);
	var a = new EreditatoConPrototipo();
	assert.equal(a.b, 2, 'Accesso ad attributo padre');
	assert.equal(a.get(), 1, 'Accesso a metodi padre');
	assert.equal(a.funzione(), 7, 'Accesso a prototype padre');
});