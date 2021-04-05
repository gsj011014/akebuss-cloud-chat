<!-- <div class="Wrapper-bg">
			<span></span>
			<span></span>
			<span></span>
		</div> -->
		.Wrapper-bg{
			position: absolute;
			top: 0;
			left: 0;
			width: 300%;
			height: 300px;
			transition: all 1s ease-in-out 0s;
		}
		.Wrapper-bg span{
			display: inline-block;
			width: 100%;
			height: 100%;
			float: left;
			width: calc(100%/3);
		}
		.Wrapper-bg span{
			background-image: url(../img/414020.jpg);
			background-size: cover;
		}
		/* .Wrapper-bg span:nth-child(1){
			background-image: url(../img/brittani-burns.jpg);
			background-size: cover;
		}
		.Wrapper-bg span:nth-child(2){
			background-image: url(../img/brittani-burns2.jpg);
			background-size: cover;
		}
		.Wrapper-bg span:nth-child(3){
			background-image: url(../img/naveen-kumar-7sBeKoJbn6I-unsplash.jpg);
			background-size: cover;
		} */
		// //背景图片的切换
		// var WrapperBg = document.getElementsByClassName('Wrapper-bg')[0],
		// 	interval1 = null,
		// 	index = 0,
		// 	BgWidth = WrapperBg.getElementsByTagName('span')[0].offsetWidth,
		// 	isLeft = 1;
		// 	interval1 = setInterval(function(){
		// 		 if(isLeft == 1){
		// 			WrapperBg.style.left = WrapperBg.offsetLeft - BgWidth+'px';
		// 			index++;
		// 			if(index == 3){
		// 				isLeft = 2;
		// 			}
		// 		 }
		// 		 if(isLeft == 2){
		// 			 WrapperBg.style.left = WrapperBg.offsetLeft + BgWidth +'px';
		// 			 index--;
		// 			 if(index == 1){
		// 				 isLeft = 1;
		// 				 index = 0;
		// 			 }
		// 		 }
		// 	},5000);