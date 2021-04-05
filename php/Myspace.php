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
	if(isset($_GET['renewal'])){//更新空间内容
		try{
			$pdo = new PDO($dsn,$user,$pwd);
			$query = "select * from publish";
			$result = $pdo->prepare($query);
			$result->execute();
			$res = $result->fetchAll(PDO::FETCH_ASSOC);
			echo '[';
			for($i = 0;$i < count($res);$i++){
				echo '{'.'"'.'id'.'"'.':'.'"'.$res[$i]["id"].'"'.','.'"'.'announce'.'"'.':'.'"'.$res[$i]["announce"].'"'.','.'"'.'user'.'"'.':'.'"'.$res[$i]["user"].'"'.','.'"'.'postedtime'.'"'.':'.'"'.$res[$i]["postedtime"].'"'.'}';
				if($i != count($res)-1){
					echo ',';
				}
			}
			echo ']';
		}catch(PDOException $e){
			echo $e->getMessage();
		}
		$pdo = null;
	}
	if(isset($_GET['DeleteWrite'])){//删除说说
		try{
			$pdo = new PDO($dsn,$user,$pwd);
			$query = "delete from publish where id = ". "'" .$_GET['DeleteIndex']."'";//定义SQL语句
			$result = $pdo->exec($query);
			// echo $result;
			if($result >= 1){
				echo 1;
			}else{
				echo 0;
			}
		}catch(PDOException $e){
			echo $e->getMessage();
			$pdo = null;
		}
	}
	if(isset($_GET['isrefresh'])){
		try{
			$pdo = new PDO($dsn,$user,$pwd);
			$query = "select MySpaceNewDataTime from refresh";
			$result = $pdo->prepare($query);
			$result->execute();
			$res = $result->fetchAll(PDO::FETCH_ASSOC);
			for($i = 0;$i < count($res);$i++){
				echo $res[$i]["MySpaceNewDataTime"];
			}
		}catch(PDOException $e){
			echo $e->getMessage();
		}
		$pdo = null;
	}
?>