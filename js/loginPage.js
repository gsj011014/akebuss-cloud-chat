const interface_url = 'http://www.gmll.xyz/AkebussCloudChatInterface/';
// H5 plus事件处理
function plusReady(){
	//参数：dark - 黑色; light - 白色
	plus.navigator.setStatusBarStyle('dark');
	//设置系统状态栏背景色
	// plus.navigator.setStatusBarBackground('#6495ED');
}
if(window.plus){
	plusReady();
}else{
	document.addEventListener('plusready', plusReady, false);
}
	//获得焦点
	var RoomName = document.getElementById('RoomName'),
		PassWord = document.getElementById('PassWord');
		RoomName.onfocus = function(){
			if(RoomName.value == "请输入用户名..."){
				RoomName.value = '';
				RoomName.style.color = 'black';
				LineLong(0);
			}else{
			
			}
		}
		RoomName.onblur = function(){
			if(RoomName.value == ''){
				RoomName.value = "请输入用户名...";
				RoomName.style.color = 'darkgray';
				LineShort(0);
			}else{
				LineLong(0);
			}
		}
		PassWord.onfocus = function(){
			PassWord.type = 'password';
			if(PassWord.value == "请输入密码..."){
				PassWord.value = '';
				PassWord.style.color = 'black';
				LineLong(1);
			}else{
				
			}
		}
		PassWord.onblur = function(){
			if(PassWord.value == ''){
				PassWord.value = "请输入密码...";
				PassWord.style.color = 'darkgray';
				PassWord.type = 'text';
				LineShort(1);
			}else{
				LineLong(1);
			}
		}
		function LineLong(index){//线变长
			var line = document.getElementsByClassName('line')[index],
				borderLine = document.getElementsByClassName('border-line')[index];
			line.style.width = 100 + '%';
			borderLine.style.width = 0 +'px';
			
		}
		function LineShort(index){//线变短
			var line = document.getElementsByClassName('line')[index],
			borderLine = document.getElementsByClassName('border-line')[index];
			line.style.width = 0 + 'px';
			borderLine.style.width = 100 +'%';
		}
		//ajax账号登录
		$(function(){
			var isCancel = false,
				settimeout1 = null,
				settimeout2 = null;
			$('#login-btn').click(function(){//点击登录按钮
				var RN = $('#RoomName').val(),
					PW = $('#PassWord').val();
					console.log(RN,PW);
					if(RN == '请输入用户名...' || PW == '请输入密码...'){
						alert('请将用户名 密码填写完整!')
					}else{
						$.ajax(interface_url + 'php/loginPage.php',{
							data:{
								VerifyAccount:true,
								RoomName:RN,
								PassWord:PW
							},
							dataType:'json',//服务器返回json格式数据
							type:'GET',//HTTP请求类型
							timeout:10000,//超时时间设置为10秒；
							success:function(data){
								if(!data){
										alert('用户名信息不正确!')
									}else{
										// console.log(result[0].昵称); 
										localStorage.setItem("name",data[0].昵称);
										$('.blur').css('filter','blur(5px)');
											$('.mask').css('display','block');
										settimeout2 = setTimeout(function(){
												OpenPage('plus/menuPage.html','pop-in');
												settimeout1 = setTimeout(function(){
													$('.blur').css('filter','blur(0px)');
													$('.mask').css('display','none');
												},1000);
											},6000);
									}
							},
							error:function(xhr,type,errorThrown){
								console.log(xhr.readyState);
								if(xhr.readyState == 0){
									alert("请检查您的网络设置!");
								}
							}
						});
					}
			});
			$('#cancel-btn').click(function(){//点击取消登录
				$('.blur').css('filter','blur(0px)');
				$('.mask').css('display','none');
				clearInterval(settimeout2);
			});
		});