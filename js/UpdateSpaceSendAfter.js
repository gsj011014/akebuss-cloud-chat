	function WriteAboutSpace(){
		$.ajax('http://192.168.1.101:8848/致冉冉/php/Myspace.php',{
					data:{
						renewal:true,
					},
					dataType:'json',//服务器返回json格式数据
					type:'GET',//HTTP请求类型
					timeout:10000,//超时时间设置为10秒；
					success:function(data){
						// console.log(data);
						for(var i = 0;i < data.length;i++){
							// console.log(data[i]);
							// $('.Space-dynamic-state').append('<span><div class="user-information"><p><img src="../img/Myspace/user.jpg" ></p><p>谷世杰</p><p>'+data[i].发表时间+'</p></div><div class="Send-Content"><p>'+data[i].发表内容+'</p></div></span>');
							$('.Space-dynamic-state').prepend('<span id='+data[i].id+'><div class="user-information"><p><img src="../img/Myspace/user.jpg" ></p><p>'+data[i].用户+'</p><p>'+data[i].发表时间+'</p></div><div class="Send-Content"><p>'+data[i].发表内容+'</p></div><img class="delete-logo" src="../img/Myspace/delete.png" ></span>');
						}
					},
					error:function(xhr,type,errorThrown){
						if(xhr.readyState == 0){
							alert('请检查您的网络,刷新失败!')
						}
					}
		});
	}