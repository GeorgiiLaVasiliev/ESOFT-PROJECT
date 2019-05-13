<?php
	session_start();
	$user = $_SESSION['user'];
	if (empty($user)){
		echo "session is empty";
	}
	else {
		$connect=mysqli_connect('localhost', 'root', '', 'creatures');

		$query=mysqli_query($connect,"SELECT simplename FROM `elfes` WHERE firstname='{$user}'");
	    $num_row=mysqli_num_rows($query);

	    if ($num_row == 0){
	    	$query2=mysqli_query($connect,"SELECT simplename FROM `dwarf` WHERE firstname='{$user}'");
	   		$num_row2=mysqli_num_rows($query2);
	   		if ($num_row2 == 0) 
	   			echo "no user in db";

	   		else {
		   		$value_sql_name=mysqli_fetch_row($query2);

				$query_pass=mysqli_query($connect,"SELECT pass FROM `dwarf` WHERE firstname='{$user}'");
				$value_sql_pass=mysqli_fetch_row($query_pass);

		   		$datauser = array(
		   			'hello' => $user,
		   			'name' => $value_sql_name[0],
		   			'login' => $user,
		   			'pass' => $value_sql_pass[0],
		   		);
				echo json_encode($datauser);
	   		}
			
	    }
	    else {
			$value_sql_name=mysqli_fetch_row($query);

			$query_pass=mysqli_query($connect,"SELECT pass FROM `elfes` WHERE firstname='{$user}'");
			$value_sql_pass=mysqli_fetch_row($query_pass);

	   		$datauser = array(
	   			'hello' => $user,
	   			'name' => $value_sql_name[0],
	   			'login' => $user,
	   			'pass' => $value_sql_pass[0],
	   		);
			echo json_encode($datauser);
	    }
	}
	

?>