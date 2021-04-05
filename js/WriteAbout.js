const interface_url = 'http://www.gmll.xyz/AkebussCloudChatInterface/';
var WriteAbout = document.getElementById('WriteAbout'),
	rows = 1;
	WriteAbout.oninput = function(){
		// console.log(WriteAbout.value);
		if(WriteAbout.value.length % 36 == 0){
			rows += 1;
			WriteAbout.rows = rows;
		}
	}
	window.onload = function(){
		WriteAbout.innerText = null;
	}
	window.onkeydown = function(e){
		if(e.keyCode == 8){
			if(WriteAbout.value.length%36 == 0){
				rows -= 1;
				WriteAbout.rows = rows;
			}
		}
		if(WriteAbout.value.length == 0){
			WriteAbout.rows = 1;
		}
	}
	window.onkeypress = function(e){
		if(e.keyCode == 8){
			if(WriteAbout.value.length%36 == 0){
				rows -= 1;
				WriteAbout.rows = rows;
			}
		}
		if(WriteAbout.value.length == 0){
			WriteAbout.rows = 1;
		}
	}
	window.onkeyup = function(e){
		if(e.keyCode == 8){
			if(WriteAbout.value.length%36 == 0){
				rows -= 1;
				WriteAbout.rows = rows;
			}
		}
		if(WriteAbout.value.length == 0){
			WriteAbout.rows = 1;
		}
	}
	$(function(){
		var idIndex = 0;
		$('#cancel').click(function(){
			ClosePage('zoom-fade-in');
		});
		$('#publish').click(function(){
			if(WriteAbout.value == ''){
				alert('发表内容不能为空!');
			}else{
				$.ajax(interface_url + 'php/WriteAbout.php',{
					data:{
						selectMax:true
					},
					dataType:'json',//服务器返回json格式数据
					type:'GET',//HTTP请求类型
					timeout:10000,//超时时间设置为10秒；
					success:function(data){
						// console.log(data[0]);
						if(data[0] == undefined){
							InsertInformation(idIndex)
						}else{
							idIndex = data[0].id;
							idIndex ++;
							// console.log(idIndex);
							InsertInformation(idIndex)
						}
					},
					error:function(xhr,type,errorThrown){
						if(xhr.readyState == 0){
							alert('请检查您的网络,发表失败!')
						}
					}
				});
			}
		});
	});
	function InsertInformation(index){
		$.ajax(interface_url + 'php/WriteAbout.php',{
			data:{
				publish:true,
				id:index,
				WriteAboutContent:WriteAbout.value,
				user:localStorage.getItem("name"),
				time:GetTimeNow()
			},
			//dataType:'json',//服务器返回json格式数据
			type:'GET',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
				if(data == 'true'){
					WriteAboutRefresh();
					// WriteAboutSpace();
					setTimeout(function(){
						// ClosePage('zoom-fade-in');
						alert("发表成功!");
					},200);
				}else{
					alert("发表失败!");
				}
			},
			error:function(xhr,type,errorThrown){
				if(xhr.readyState == 0){
					alert('请检查您的网络,发表失败!')
				}
			}
		});
	}
	function GetTimeNow(){
		var date = new Date(),
		h = date.getHours(),
		m = date.getMinutes();
		if(m < 10){
			return '今天 ' + h+':0'+m;
		}else{
			return '今天 ' + h+':'+m;
		}
	}
	$('#Say-btn').click(function(){
		VoiceSmartDiscernChinese();
	});
	function VoiceSmartDiscernChinese(){
		var options = {
			engine: 'baidu'
		};
		console.log('开始语音识别：');
		plus.speech.startRecognize(options, function(s){
			// console.log(s);
			document.getElementById('WriteAbout').value += s;
		}, function(e){
			console.log('语音识别失败：'+JSON.stringify(e));
		} );
	}
	function WriteAboutRefresh(){
		$.ajax(interface_url + 'php/WriteAbout.php',{
			data:{
				WriteAboutRefresh:true,
				issueTime:parseInt(UpdateTime())
			},
			// dataType:'json',//服务器返回json格式数据
			type:'GET',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
				// alert(data);
				console.log(data);
			},
			error:function(xhr,type,errorThrown){
				if(xhr.readyState == 0){
					alert('请检查您的网络!');
				}
			}
		});
	}
	//如果有新的说说发布就刷新空间
	function UpdateTime(){
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