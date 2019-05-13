$(document).ready(function() {
	$.ajax({
		type: "POST",
	   	url: "users_array.php",
	   	dataType: "html",
	   	success: function(data){    	
	   		var res = JSON.parse(data);
	   		console.log(res[0].log);

	   		var str;
			for(var i in res){
				str += '<tr>';
			  	str += '<td>'+res[i].log+'</td>';
			  	str += '<td>'+res[i].reg+'</td>';
			  	str += '<td>'+res[i].auto+'</td>';
			  	str += '</tr>';
			}
			
			$('.tab .left').append(str);
	   		
   		}

	});	
	$.ajax({
		type: "POST",
	   	url: "users_array2.php",
	   	dataType: "html",
	   	success: function(data){    		
	   		var res = JSON.parse(data);
	  		var str;
			for(var i in res){
				str += '<tr>';
			  	str += '<td>'+res[i].log+'</td>';
			  	str += '<td>'+res[i].reg+'</td>';
			  	str += '<td>'+res[i].auto+'</td>';
			  	str += '</tr>';
			}
			
			$('.tab .right').append(str);
   		}

	});	
});