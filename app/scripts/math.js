function addNumber(){
	var x = $('#x').val();
	var y = $('#y').val();
	var res = $('#result');
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open('GET', '/addiction?x='+x+'&y='+y,false);
	xmlhttp.send();
	var response = xmlhttp.response;
	console.log(response);
	var json = JSON.parse(response);
	console.log(json);
	console.log(json.result);
	$('#result').val(json.result);
}