$(document).ready(function() {
   //alert("ПРЕДУПРЕЖДЕНИЕ!!!\n\nМожно обновить только все поля одновременно!");
///////////////////////////////////////////////////////////////////////////////
	$.ajax({ 
   	type: "POST",
   	url: "user.php",
   	dataType: "html",
   	success: function(data){ 
         if (data == "session is empty"){
            window.location = "auto.html";
         }
         else {
            if (data == "no user in db") window.location = "auto.html";
            else {
               var result = JSON.parse(data);
               $('#welcome1').val(result.hello);
               $('#name').val(result.name);
               $('#login').val(result.login);
               //$('#pass').val(result.pass);
               //console.log(result);      
            }   
         }
         
         
   	}
	});
///////////////////////////////////////////////////////////////////////////////
   $("#exit").click(function(){
      $.ajax({ 
      type: "POST",
      url: "exit.php",
      dataType: "html",
      success: function(data){ 
         if (data=="ok") {
            console.log(data);
            alert("Вы вышли из своего аккаунта");
            window.location = "auto.html";
         }
      }
      })
   });
///////////////////////////////////////////////////////////////////////////////
   $("#update").click(function(){
      $.ajax({ 
      type: "POST",
      url: "update.php",
      dataType:"html",
      data: $('#form3').serialize(),
      success: function(data){ 
         if (data=="update ok"){
            //alert("Сейчас обновится страница");
            console.log(data);
            window.location.reload();
         }
         else  {
            alert(data);
         }
      }
      });
   });
///////////////////////////////////////////////////////////////////////////////   
});
   
