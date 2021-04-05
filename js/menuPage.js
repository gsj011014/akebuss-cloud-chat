// H5 plus事件处理
function plusReady(){
	//参数：dark - 黑色; light - 白色
	plus.navigator.setStatusBarStyle('light');
	//设置系统状态栏背景色
	// plus.navigator.setStatusBarBackground('#6495ED');
}
if(window.plus){
	plusReady();
}else{
	document.addEventListener('plusready', plusReady, false);
}
 // document.addEventListener("plusready", function() {
 //        // 注册返回按键事件
 //        plus.key.addEventListener('backbutton', function() {
 //        // 事件处理
 //            plus.nativeUI.confirm("退出程序？", function(event) {
 //                if (event.index) {
 //                    plus.runtime.quit();
 //                }
 //            }, null, ["确定", "取消"]);
 //        }, false);
 //    });
    // document.addEventListener("plusready", function() {
    //     // 注册返回按键事件
    //     plus.key.addEventListener('backbutton', function() {
    //         // 事件处理
    //         window.history.back();
    //     }, false);
    // });