<?php
	header('Access-Control-Allow-Origin:*');//允许所有来源访问
	header('Access-Control-Allow-Method:POST,GET,OPTIONS');//允许访问的方式
	// header("Content-Type:application/json;charset=utf-8");
	$dbms='mysql';
	$dbName='3h9gvz828s223';
	$user='3h9gvz828s223';
	$pwd='Gu13120011014';
	$host='localhost';
	$dsn="$dbms:host=$host;dbname=$dbName";
	//验证账号密码
	if(isset($_GET['VerifyAccount'])){
		try{
			$pdo = new PDO($dsn,$user,$pwd);//实例化一个pdo对象
			$query = 'select * from loveranran where roomname = '."'".$_GET['RoomName']."'".'and password = '."'".$_GET['PassWord']."'";//定义查询语句
			$result = $pdo->prepare($query);//准备执行查询语句
			$result->execute();//执行查询语句
			$res = $result->fetchAll(PDO::FETCH_ASSOC);//返回结果集
			if(count($res) == null){
				echo 'false';
			}else{
				// echo 'true';
				echo '[';
				for($i = 0;$i < count($res);$i++){
					echo '{'.'"'.'昵称'.'"'.':'.'"'.$res[$i]["name"].'"'.'}';
					if($i != count($res)-1){
						echo ',';
					}
				}
				echo ']';
			}
		}catch(PDOException $e){
			echo $e->getMessage();
		}
		$pdo = null;
	}