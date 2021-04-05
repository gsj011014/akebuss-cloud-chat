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
	if(isset($_GET['publish'])){
		try{
			$pdo = new PDO($dsn,$user,$pwd);
			$query = "insert into publish(id,announce,user,postedtime) values ("."'".$_GET['id']."'".','."'".$_GET['WriteAboutContent']."'".','."'".$_GET['user']."'".','."'".$_GET['time']."'".")";//定义SQL语句
			$result = $pdo->exec($query);
			if($result >= 1){
				echo "true";
			}else{
				echo "false";
			}
		}catch(PDOException $e){
			echo $e->getMessage();
			echo "Failed to add information";
		}
		$pdo = null;
	}
	if(isset($_GET['selectMax'])){
		try{
			$pdo = new PDO($dsn,$user,$pwd);
			$query = "select * from publish where id=(select max(id) from publish)";
			$result = $pdo->prepare($query);
			$result->execute();
			$res = $result->fetchAll(PDO::FETCH_ASSOC);
			echo '[';
			for($i = 0;$i < count($res);$i++){
				echo '{'.'"'.'id'.'"'.':'.'"'.$res[$i]["id"].'"'.'}';
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
	if(isset($_GET['WriteAboutRefresh'])){
		try{
			$pdo = new PDO($dsn,$user,$pwd);
			$query = "update refresh set MySpaceNewDataTime = ".'"'.$_GET['issueTime'].'"';
			$result = $pdo->exec($query);
			if($result >= 1){
				echo "true";
			}else{
				echo "false";
			}
		}catch(PDOException $e){
			echo $e->getMessage();
			echo "Failed to add information";
		}
		$pdo = null;
	}
?>