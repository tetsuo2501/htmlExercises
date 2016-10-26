function addNumber(){
	var x = $('#x').val();
	var y = $('#y').val();
	var res = $('#result');
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open('GET', '/addiction?x='+x+'&y='+y,false);
	xmlhttp.send();
	var json = JSON.parse(xmlhttp.response);
	result.val(json.result);
}