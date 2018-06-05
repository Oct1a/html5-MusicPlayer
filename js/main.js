	//点击喜欢按钮
	$('.love').on("click",function(){
		if($('.love').hasClass('fa-heart-o')){
			$('.love').removeClass('fa-heart-o').addClass('fa-heart');
		}else{
			$('.love').removeClass('fa-heart').addClass('fa-heart-o');
		}
	});
	//点击播放按钮
	var music = $('.music')[0];
	$('.pause').on("click",function(){
		if($('.pause').hasClass('fa-play-circle-o')){
			music.play();
			$('#disc_bg img').css("-webkit-animation","disc linear 6s infinite"); //控制碟片旋转
			$('.pause').removeClass('fa-play-circle-o').addClass('fa-pause-circle-o'); //控制播放图标
		}else{
			music.pause();
			$('.pause').removeClass('fa-pause-circle-o').addClass('fa-play-circle-o');
			$('#disc_bg img').css("-webkit-animation","none");
		}
	});	
	//进度时间显示
	music.ondurationchange= function () {  
		$('#time_length').text(function(n,c){
			return c = ((music.duration/60).toFixed(2)).replace(".",":") ;
		});
	} 
	//移动音量条
	$('.volume_bg').mousedown(function(e){
		music.volume = e.offsetX/100;
		if(music.volume ==0){ //如果音量为零则切图标
			$('.volume_btn').removeClass('fa-volume-up').addClass('fa-volume-off');
		}
	});
	//动态移动播放条
	$('.disc_progress').mousedown(function(e){
			$('.progress').width(function(n,c){
				console.log(e.offsetX);
				music.currentTime = e.offsetX /650 * music.duration;
				return c = e.offsetX + 'px';
		});
	});
	//检测音乐是否开始播放
	music.volume = 0.5 //设置加载后音量为0.5
	if(music.paused){
		//自定义进度条
		setInterval(function(){
			$('.progress').width(function(n,c){
					return c = (music.currentTime / music.duration) * 100 + '%';
			});
			//音量进度条
			$('.volume').width(function(n,c){
					return c = (music.volume /1 ) *100 +'%';
			});
			//自定义播放时间
			$('#time_of').text(function(n,c){
					return c =   ((music.currentTime/60).toFixed(2)).replace(".",":") ;
			});
		},1000);
	}
	//快进10Sx
	$('.fast').on("click",function(){
		music.currentTime +=10;
		console.log(music.currentTime);
	});
	//点击音量图标
	$('.volume_btn').on("click",function(){
		if(!music.muted){
			music.muted = true;
			$('.volume_btn').removeClass('fa-volume-up').addClass('fa-volume-off');
		}else{
			music.muted = false;
			$('.volume_btn').removeClass('fa-volume-off').addClass('fa-volume-up');
		}
	})
	//点击分享
	$('.share').on("click",function(){
		pic = $("#disc_bg img").attr("src");
		title = $('.disc_title h3').text();
		user_id = 5225554208;
		window.open("http://service.weibo.com/share/share.php?title=" +
		title + "%0d%0a♪小木豆的云音乐♪&url=" + window.location.href + "&pic=" + pic+'&ralateUid='+user_id);
	});
	
//歌曲控制

//点击歌词按钮
		$('.lrc_btn').on("click",function(){
			if($('.lrc_btn').hasClass('lrc_open')){
				location.reload();
			}else{
				$('.lrc_btn').addClass('lrc_open');
				$('.container').css("background","rgba(255,255,255,1)");
				$('.container').css("max-height","650px");
				$('#disc_bg').css("display","none");
				$('.play_pause').css("margin-top",'13px');
				$('.disc_progress').css("margin-top","10px");
				$('.disc_progress').css("height","15px");
				$(".disc_title").css("margin-top","50px");
				$(".disc_title h3").css("font-size","24px");
				$(".disc_title h3").css("color","rgba(255,0,0,0.5)");
				$(".disc_title p").css("font-size","16px");
				$('.lrc').css("display","block");
				$('.lrc').css("margin-top","-100px");
			}
		});
		var musics = [{
			name: "RYTHEM-20粒のココロ",
			src: "audio/1.mp3",
			cover: "cover/1.jpg",
			lrc: "lrc/RYTHEM-20粒のココロ.lrc",
			author:"RYTHEM",
		},
		{
			name: "许茹芸-独角戏 ",
			src: "audio/2.mp3",
			cover: "cover/2.jpg",
			author:"许茹芸",
		},
		{
			name: "Selena Gomez-Kill",
			src: 'audio/3.mp3',
			cover: 'cover/3.jpg',
			author:"Selena",
		},
		{  
			name: "The One-听海",
			src: 'audio/The One-听海.mp3',
			cover: "cover/4.jpg",
			lrc:'lrc/The One-听海.lrc',
			author:"郑淳元",
		}
	];
	//下一首
	var index =0;
	function nextMusic(){
		if(index+1>(musics.length-1)){
			index = 0;
		}else{
			index+=1;
		}
		return index;
	}
	//上一首
	function trackMusic(){
		if(index-1<0){
			index = musics.length-1;
		}else{
			index-=1;
		}
		return index;
	}
	//切换歌曲更改的参数
	function change(){
		$(".disc_title h3").text(musics[index].name);
		$("#author").text("演唱者："+musics[index].author);
		$('#disc_bg img').attr("src",musics[index].cover);
	}
	//点击下一首按钮
	$('.next').on("click",function(){
		change();
		music.src =musics[nextMusic()].src;
		music.autoplay = true;
	});
	//上一首按钮
	$('.track').on("click",function(){
		change();
		music.src =musics[trackMusic()].src;
		music.autoplay = true;
	})