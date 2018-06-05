### 使用：Html5+css3+JQuery实现

## -------------------实现功能-------------------

- [x] **播放暂停（点击后切换状态）**
- [x] **上一首（切换上一首歌曲）**
- [x] **下一首（切换下一首歌曲）**
- [x] **音量调节（鼠标移入滑动设置音量大小）**
- [x] **歌曲进度条（可点击切换进度直接跳，也可以点击小圆点拖拽切换进度）**
- [ ] **歌词（点击词，切换歌词界面，根据实时进度自动滚动歌词）**
- [x] **喜欢 (有浮出爱心效果)**
- [x] **分享（调用分享）**


## -------------------audio 标签的使用-------------------

- **`autoplay` 自动播放**
- **`loop` 循环播放**
- **`volume` 音量设置**
- **`currentTime` 当前播放位置**
- **`duration` 音频的长度**
- **`pause` 暂停**
- **`play` 播放**
- **`ended` 返回音频是否已结束**

## -------------------播放暂停的使用-------------------

```	
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

```
## -------------------分享功能的使用-------------------
```
$('.share').on("click",function(){
		pic = $("#disc_bg img").attr("src");
		title = $('.disc_title h3').text();
		user_id = 5225554208;
		window.open("http://service.weibo.com/share/share.php?title=" +
		title + "%0d%0a♪小木豆的云音乐♪&url=" + window.location.href + "&pic=" + pic+'&ralateUid='+user_id);
	});
```

## -------------------移动音量条-------------------
```

```




## -------------------效果展示-------------------

![首页效果](.\img\Snipaste_2018-06-05_15-04-34.png)

![点击歌词效果](.\img\Snipaste_2018-06-05_15-05-03.png)