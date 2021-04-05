// // H5 plus事件处理
// function plusReady(){
// 	//参数：dark - 黑色; light - 白色
// 	// plus.navigator.setStatusBarStyle('dark');
// 	//设置系统状态栏背景色
// 	// plus.navigator.setStatusBarBackground('#6495ED');
// }
// if(window.plus){
// 	plusReady();
// }else{
// 	document.addEventListener('plusready', plusReady, false);
// }
//扫描二维码
var blist = [];
function scaned(t, r, f){
	var d = new Date();
	var h=d.getHours(),m=d.getMinutes(),s=d.getSeconds(),ms=d.getMilliseconds();
	if(h < 10){ h='0'+h; }
	if(m < 10){ m='0'+m; }
	if(s < 10){ s='0'+s; }
	if(ms < 10){ ms='00'+ms; }
	else if(ms < 100){ ms='0'+ms; }
	var ts = '['+h+':'+m+':'+s+'.'+ms+']';
	var li=null,result = document.getElementById('result');
	if(blist.length > 0){
		
	} else{
		result = document.getElementById('result');
	}
	result.id = blist.length;
	// var html = '['+h+':'+m+':'+s+'.'+ms+']'+'　　'+t+'码:';
	// html += r;
	result.innerHTML = r;
	blist[blist.length] = {type:t,result:r,file:f};
	// update(t, r, f);调用加载二维码图片
}
function selected(id){
	var h = blist[id];
	update( h.type, h.result, h.file );
	if(h.result.indexOf('http://')==0  || h.result.indexOf('https://')==0){
		plus.nativeUI.confirm(h.result, function(i){
			if(i.index == 0){
				plus.runtime.openURL(h.result);
			}
		}, '', ['打开', '取消']);
	} else{
		plus.nativeUI.alert(h.result);
	}
}
// function update(t, r, f){加载二维码图片
// 	// alert('扫描成功：');
// 	// alert(t);
// 	// alert(r);
// 	// alert('\n图片地址：'+f);
// 	if(!f || f=='null'){
		
// 	} else{
// 		plus.io.resolveLocalFileSystemURL(f, function(entry){
// 			document.getElementById('erweiImg').src = '';
// 			document.getElementById('erweiImg').src = entry.toLocalURL();
// 		});
// 	}
// }