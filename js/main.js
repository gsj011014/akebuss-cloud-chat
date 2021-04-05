// H5 plus事件处理
function plusReady(){
	//参数：dark - 黑色; light - 白色
	// plus.navigator.setStatusBarStyle('dark');
	//设置系统状态栏背景色
	// plus.navigator.setStatusBarBackground('#6495ED');
}
if(window.plus){
	plusReady();
}else{
	document.addEventListener('plusready', plusReady, false);
}
var openw=true;//防止快速点击
function OpenPage(url,openStyle,timer){//打开窗口
	if(!openw){
		return;
	}
	openw=false;
	setTimeout(function(){
		openw=true;
	},1000);
	plus.webview.open(url,null,null,openStyle,timer,null);//创建并显示Webview窗口，用于加载新的HTML页面，可通过styles设置Webview窗口的样式，创建完成后自动将Webview窗口显示出来。 
}
function ClosePage(closeStyle,timer){//关闭窗口
	if(!openw){
		return;
	}
	openw=false;
	setTimeout(function(){
		openw=true;
	},1000);
	var ws=plus.webview.currentWebview();//获取当前页面所属的Webview窗口对象
		plus.webview.close(ws,closeStyle,timer,true);//关闭已经打开的Webview窗口，需先获取窗口对象或窗口id，并可指定关闭窗口的动画及动画持续时间。 
}
// if(){
// 	//设置系统状态栏背景色
// 	alert(2);
// }else{
// 	alert(1);
// }
// $(function(){
// 	var u = navigator.userAgent;
// 	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
// 	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
// 	// alert('是否是Android：'+isAndroid);
// 	// alert('是否是iOS：'+isiOS);
// 	if(isiOS){
// 		$('.loginPage-bg').css('display','none');
// 	}
// });
// var _openw=null;
// function OpenNewPage(Url,TitleText,OpenStyle,TitlebackgroundColor,TitleColor){//固定打开页面
// 	if(_openw){return;}  // 防止快速点击
// 	_openw=plus.webview.create(Url, TitleText, {
// 		backButtonAutoControl: 'close',
// 		titleNView: {
// 			autoBackButton: true,//返回页面显示
// 			backgroundColor: TitlebackgroundColor != null ? TitlebackgroundColor : 'rgb(1,93,168)',
// 			titleColor: TitleColor != null ? TitleColor : '#ffffff',
// 			titleText: TitleText,
// 			buttons: [{
// 				// type: 'share',
// 				// onclick: 'javascript:share()'
// 				//右侧logo 分享
// 			}]
// 		}
// 	});
// 	_openw.addEventListener('close', function(){
// 		_openw=null;
// 	}, false);
// 	_openw.show(OpenStyle);
// }
