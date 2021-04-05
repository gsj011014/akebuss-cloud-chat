const interface_url = 'http://www.gmll.xyz/AkebussCloudChatInterface/';
  // document.addEventListener("plusready", function() {
  //       // 注册返回按键事件
  //       plus.key.addEventListener('backbutton', function() {
  //           // 事件处理
  //           window.history.back();
  //       }, false);
  //   });
$(function(){
	$(document).ready(function(){ 
		refreshSpace();
	});
});
function refreshSpace(){
	$.ajax(interface_url + 'php/Myspace.php',{
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
						$('.Space-dynamic-state').prepend('<span id='+data[i].id+'><div class="user-information"><p><img src="../img/Myspace/user.jpg" ></p><p>'+data[i].user+'</p><p>'+data[i].postedtime+'</p></div><div class="Send-Content"><p>'+data[i].announce+'</p></div><img class="delete-logo" src="../img/Myspace/delete.png" ></span>');
						var SpaceSpan = document.getElementsByClassName('Space-dynamic-state')[0].getElementsByTagName('span');
						var deleteLogo = document.getElementsByClassName('delete-logo');
						for(var k = 0;k < deleteLogo.length;k++){
							(function(j){
								deleteLogo[j].onclick = function(){
									DeleteWrite(this.parentNode.id);
									this.parentNode.remove();
									// console.log(this.parentNode.id);
								}
							})(k);
						}	
					}
				},
				error:function(xhr,type,errorThrown){
					if(xhr.readyState == 0){
						alert('请检查您的网络,刷新失败!')
					}
				}
	});
}
function DeleteWrite(id){
	$.ajax(interface_url + 'php/Myspace.php',{
		data:{
			DeleteWrite:true,
			DeleteIndex:id
		},
		// dataType:'json',//服务器返回json格式数据
		type:'GET',//HTTP请求类型
		timeout:10000,//超时时间设置为10秒；
		success:function(data){
			// alert(data);
			if(data == 1){
				alert('删除成功!');
			}else{
				alert('删除失败!');
			}
		},
		error:function(xhr,type,errorThrown){
			if(xhr.readyState == 0){
				alert('请检查您的网络,刷新失败!')
			}
		}
	});
}
//如果有新的说说发布就刷新空间
function UpdateTime() {
	var myDate = new Date();
	//获取当前年
	var year = myDate.getFullYear();
	//获取当前月
	var month = myDate.getMonth() + 1;
	//获取当前日
	var date = myDate.getDate();
	var h = myDate.getHours(); //获取当前小时数(0-23)
	var m = myDate.getMinutes(); //获取当前分钟数(0-59)
	var s = myDate.getSeconds();
	var ms = myDate.getMilliseconds();
	//获取当前时间
	var now = conver(h)  + conver(m) +  conver(s);
	//console.log("now:"+now);
	return now;
}
//日期时间处理
function conver(s) {
	return (s < 10 ? '0' + s : s).toString();
}

//毫秒处理
function converMs(s) {
	if (s < 10) {
		_s = '00' + s;
	} else if (s < 100) {
		_s = '0' + s;
	} else {
		_s = s;
	}
	return _s.toString();
}
$(function(){
	var interval1 = setInterval(detectionNew,1500);
});
function detectionNew(){
	var isrefreshSuccess = true;
		$.ajax(interface_url + 'php/Myspace.php',{
			data:{
				isrefresh:true
			},
			// dataType:'json',//服务器返回json格式数据
			type:'GET',//HTTP请求类型
			timeout:1500,//超时时间设置为10秒；
			success:function(data){
				if(parseInt(data) == parseInt(UpdateTime()) || parseInt(UpdateTime()) - parseInt(data) <= 2){
					// console.log(parseInt(data));
					// console.log(parseInt(UpdateTime()));
					//刷新页面
					$('.Space-dynamic-state').empty();
					refreshSpace();
					console.log('正在刷新');
				}else{
					if(parseInt(UpdateTime()) - parseInt(data) <= 3){
						$('.Space-dynamic-state').empty();
						refreshSpace();
					}
					//无需刷新
					console.log('无需刷新页面');
					// console.log(parseInt(UpdateTime()));
				}
			}
		});
}