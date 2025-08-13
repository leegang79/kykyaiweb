/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
	// getConfig()
	var $window = $(window),
		$body = $('body'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: [null, '480px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Mobile?
	if (browser.mobile)
		$body.addClass('is-mobile');
	else {
		breakpoints.on('>medium', function () {
			$body.removeClass('is-mobile');
		});

		breakpoints.on('<=medium', function () {
			$body.addClass('is-mobile');
		});

	}

	// Scrolly.
	$('.scrolly')
		.scrolly({
			speed: 1500,
			offset: $header.outerHeight()
		});

	// Menu.
	$('#menu')
		.append('<a href="#menu" class="close"></a>')
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'right',
			target: $body,
			visibleClass: 'is-menu-visible'
		});

	// Header.
	if ($banner.length > 0 && $header.hasClass('alt')) {
		$window.on('resize', function () { $window.trigger('scroll'); });
		$banner.scrollex({
			bottom: $header.outerHeight() + 1,
			terminate: function () { $header.removeClass('alt') },
			enter: function () { $header.addClass('alt') },
			leave: function () { $header.removeClass('alt') }
		});
	}

	const device_width = document.documentElement.clientWidth;
	const device_height = document.documentElement.clientHeight;

	// console.log("width=========>", device_width, device_height)

	// var video = document.getElementById("myvideo");
	// console.log("video=========>",video)
	// if (device_width > device_height && device_width < 768) {
	// 	video.src = "https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/bg-dark.mp4"
	// 	$("#special1").addClass("special1").removeClass("lefttitle1")
	// 	$("#special2").addClass("special2").removeClass("lefttitle2")
	// }
	// 竖屏
	// else if (device_width < device_height) {
	// 	video.src = "https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/bg-s-s.mp4"
	// 	$("#special1").addClass("vertical1")
	// 	$("#special2").addClass("vertical2")
	// 	// $('.video_wrap').css('width', '100vw')
	// }
	// else {
	// 	video.src = "https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/bg-dark.mp4"
	// }

	//中英切换
	// var lan = false
	$("#change_btn").click(function () {
		window.location.href = "index-en.html";
		// if (lan == true) {
		// 	var tran = new Translater({
		// 		lang: "cn"
		// 	});
		// } else {
		// 	var tran = new Translater({
		// 		lang: "en"
		// 	});
		// }
		// lan = !lan
	})

	$("#change_btn-en").click(function () {
		window.location.href = "index.html";
		// if (lan == true) {
		// 	var tran = new Translater({
		// 		lang: "cn"
		// 	});
		// } else {
		// 	var tran = new Translater({
		// 		lang: "en"
		// 	});
		// }
		// lan = !lan
	})

	//当手机旋转的时候，触发“orientationchange”该事件
	window.addEventListener("orientationchange", hengshuping, false);
	function hengshuping() {
		//横屏
		if (window.orientation == 90 || window.orientation == -90) {
			var fromShu = window.localStorage.getItem('name')
			if (fromShu == 'a') {
				window.location.reload(true);
				window.localStorage.setItem('name', 'b');
			}
			return false;
		}
		//竖屏
		else if (window.orientation == 0 || window.orientation == 180) {
			var fromHeng = window.localStorage.getItem('name');
			if (fromHeng === 'b') {
				window.location.reload(true);
			}
			window.localStorage.setItem('name', 'a');
			return false;
		}
	}

	//判断是否为手机微信浏览器
	function isWeixin() {
		var ua = navigator.userAgent.toLowerCase();
		if (ua.match(/MicroMessenger/i) == "micromessenger") {
			return true
		} else {
			return false
		}
	}

	//如果是手机微信浏览器，则点击任意位置播放视频
	if (isWeixin()) {
		document.addEventListener("click", () => {
			video.play()
		}, true)
	}

	//滕王阁滚动报道
	var cont = document.getElementsByClassName('popularProducts-cont')[0];
	var ul = document.getElementsByClassName('popularProducts-cont-ul')[0];
	var ulul = document.getElementsByClassName('popularProducts-cont-ulul')[0];
	//图片地址
	var linkUrl = ['https://mp.weixin.qq.com/s/QCTv52y__Nm7hty5fxw9cQ', 'http://wx0970ecdf50b47253.h2.0791look.com/app/?p=cloud&id=949387',
		'https://mp.weixin.qq.com/s/03vz4t5icZfC1r03WwBo4g', 'https://www.thepaper.cn/newsDetail_forward_22915007',
		'https://www.ncnews.com.cn/xwzx/ncxw/jrnc/202304/t20230429_1962618.html', 'https://baijiahao.baidu.com/s?id=1764949469196855975&wfr=spider&for=pc',
		'https://www.163.com/dy/article/I3J4PSAH0514VRU5.html', 'https://new.qq.com/rain/a/20230501A03E8C00',
		'https://baijiahao.baidu.com/s?id=1764836824594988365&wfr=spider&for=pc', 'https://www.163.com/dy/article/I3SMF3BE0550TYQ0.html',
		'https://www.sohu.com/a/672186970_121119239', 'https://news.dayoo.com/society/202305/01/140000_54466764.htm'
	]
	//创建两个虚空盒子，让li添加进来再一次一起挂在到dom上，优化性能
	var frag = document.createDocumentFragment();
	var fragfrag = document.createDocumentFragment();
	//创建两组相同的图片，当第一组图片全都移动到左边后，再让其返回最右边，来回移动达到无限循环效果
	for (let i = 0; i < linkUrl.length; i++) {
		let li = document.createElement('li');
		li.className = "popularProducts-cont-li";
		let a = document.createElement('a')
		a.href = linkUrl[i]
		a.target = '_blank'
		let img = document.createElement('img');
		img.className = "popularProducts-cont-img";
		img.alt = "图片加载失败";
		img.src = "https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/twg_media_list/" + i + ".png";
		a.appendChild(img)
		li.appendChild(a);
		frag.appendChild(li);
	}
	for (let i = 0; i < linkUrl.length; i++) {
		let li = document.createElement('li');
		li.className = "popularProducts-cont-li";
		let a = document.createElement('a')
		a.href = linkUrl[i]
		a.target = '_blank'
		let img = document.createElement('img');
		img.className = "popularProducts-cont-img";
		img.alt = "图片加载失败";
		img.src = "https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/twg_media_list/" + i + ".png";
		a.appendChild(img);
		li.appendChild(a);
		fragfrag.appendChild(li);
	}
	ul.appendChild(frag);
	ulul.appendChild(fragfrag);

	//无限循环移动
	//ulul.offsetLeft获取第二组图片的位置值,这第二是相对于前一组图片的位置
	//所以ulul.style.left值与ulul.offsetLeft不同,前者为0px，后者则是第一组图片的宽度值
	//而第一组图片的offsetLeft值与style.left是同样的
	var ss = ulul.offsetLeft;
	function move() {
		ul.style.left = (ul.offsetLeft - 1) + "px";
		ulul.style.left = (ulul.offsetLeft - 1) - ss + "px";
		//当哪一组图片全都超出div左边时就让其回到最右边
		if (ul.offsetLeft <= -ss) { ul.style.left = ss + "px"; }
		if (ulul.offsetLeft <= -ss) { ulul.style.left = 0 + "px"; }
	}
	var time;
	function set() {
		time = setInterval(e => {
			move();
		}, 20)
	}
	set();//开启循环
	//鼠标移入暂停
	cont.onmouseenter = function () {
		clearInterval(time);
	}
	//鼠标移出开启
	cont.onmouseleave = function () {
		set();
	}


	//律时滚动报道
	var cont2 = document.getElementsByClassName('popularProducts-cont')[1];
	var ul2 = document.getElementsByClassName('popularProducts-cont-ul')[1];
	var ulul2 = document.getElementsByClassName('popularProducts-cont-ulul')[1];
	//图片地址
	var linkUrl2 = ['http://www.mzyfz.com/html/2166/2023-05-23/content-1591811.html', 'https://jxcbw.cn/newsContentM?newsid=1659380993926176770',
		'http://www.jnds.com.cn/system/2023/05/19/030227756.shtml', 'http://www.jxxw.com.cn/index.php/welcome/index?spm=vbckcyetcl.0.0.1.iDA8bM&channelId=10099',
		'https://mp.weixin.qq.com/s/jTXwv5a02lJixkFIlBqhgQ', 'https://www.toutiao.com/article/7234791157681668663/?app=news_article&timestamp=1684552023&use_new_style=1&req_id=2023052011070371300D11C202FF44D765&group_id=7234791157681668663&share_token=6DAFE56C-BFD2-44A0-98B7-F0E4621638DD&tt_from=weixin&utm_source=weixin&utm_medium=toutiao_ios&utm_campaign=client_share&wxshare_count=1&source=m_redirect&wid=1685080501500',
	]
	//创建两个虚空盒子，让li添加进来再一次一起挂在到dom上，优化性能
	var frag2 = document.createDocumentFragment();
	var ffragfrag2 = document.createDocumentFragment();
	//创建两组相同的图片，当第一组图片全都移动到左边后，再让其返回最右边，来回移动达到无限循环效果
	for (let i = 0; i < linkUrl2.length; i++) {
		let li = document.createElement('li');
		li.className = "popularProducts-cont-li";
		let a = document.createElement('a')
		a.href = linkUrl2[i]
		a.target = '_blank'
		let img = document.createElement('img');
		img.className = "popularProducts-cont-img";
		img.alt = "图片加载失败";
		img.src = "https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/lvshi_media_list/" + i + ".png";
		a.appendChild(img)
		li.appendChild(a);
		frag2.appendChild(li);
	}
	for (let i = 0; i < linkUrl2.length; i++) {
		let li = document.createElement('li');
		li.className = "popularProducts-cont-li";
		let a = document.createElement('a')
		a.href = linkUrl2[i]
		a.target = '_blank'
		let img = document.createElement('img');
		img.className = "popularProducts-cont-img";
		img.alt = "图片加载失败";
		img.src = "https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/lvshi_media_list/" + i + ".png";
		a.appendChild(img)
		li.appendChild(a);
		ffragfrag2.appendChild(li);
	}
	ul2.appendChild(frag2);
	ulul2.appendChild(ffragfrag2);

	//无限循环移动
	//ulul2.offsetLeft获取第二组图片的位置值,这第二是相对于前一组图片的位置
	//所以ulul.style.left值与ulul.offsetLeft不同,前者为0px，后者则是第一组图片的宽度值
	//而第一组图片的offsetLeft值与style.left是同样的
	var ss2 = ulul2.offsetLeft;
	function move2() {
		ul2.style.left = (ul2.offsetLeft - 1) + "px";
		ulul2.style.left = (ulul2.offsetLeft - 1) - ss2 + "px";
		//当哪一组图片全都超出div左边时就让其回到最右边
		if (ul2.offsetLeft <= -ss2) { ul2.style.left = ss2 + "px"; }
		if (ulul2.offsetLeft <= -ss2) { ulul2.style.left = 0 + "px"; }
	}
	var time2;
	function set2() {
		time2 = setInterval(e => {
			move2();
		}, 20)
	}
	set2();//开启循环
	//鼠标移入暂停
	cont2.onmouseenter = function () {
		clearInterval(time2);
	}
	//鼠标移出开启
	cont2.onmouseleave = function () {
		set2();
	}


	$('#lawyer_index').click(() => {
		window.open('https://www.kykyai.com/lawyer_web/demo/')
	})

	//广告视频模式
	const ob = new IntersectionObserver(
		(entries) => {
			// console.log(entries)
			const entry = entries[0];
			const vdo = entry.target;
			if (entry.isIntersecting) {
				vdo.play()
			} else {
				vdo.pause();
			}

		}, {
		threshold: 0.8
	})
	// ob.observe(document.querySelector('#myvideo'))
	ob.observe(document.querySelector('#video1'))
	ob.observe(document.querySelector('#video2'))
	ob.observe(document.querySelector('#video3'))
	ob.observe(document.querySelector('#video4'))
	ob.observe(document.querySelector('#video5'))
	ob.observe(document.querySelector('#video6'))
	// ob.observe(document.querySelector('#video7'))

})(jQuery);

function getConfig() {
	const shareImgUrl = 'https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/ky_index.png'
	const url = 'https://t21pub.kykyai.com/wxapi/get_sign'
	let _url = window.location.href
	//传入当前url(返回基础配置信息)
	axios.post(url, { url: _url }, {
		headers: {
			'token': 'cccccccc'
		}
	}).then(res => {
		if (!res.data.flag) {
			alert(JSON.stringify(res))
		}
		if (res.data && res.data.data && res.data.data.appid) {
			wx.config({
				debug: false,
				appId: res.data.data.appid,
				timestamp: res.data.data.timestamp, //生成签名的时间戳
				nonceStr: res.data.data.nonceStr, //生成签名的随机串
				signature: res.data.data.signature, //签名
				// 需要授权的api接口
				jsApiList: [
					'startRecord', 'stopRecord', 'uploadVoice', 'onVoiceRecordEnd'
				]
			});

			wx.ready(function () {
				wx.onMenuShareTimeline({
					title: '快语科技', // 分享标题
					desc: '快语科技官网', // 分享描述
					link: _url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl: shareImgUrl, // 分享图标
					success: function () {
						// 用户点击了分享后执行的回调函数
					}
				});
				wx.onMenuShareAppMessage({
					title: '快语科技', // 分享标题
					desc: '快语科技官网', // 分享描述
					link: _url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl: shareImgUrl, // 分享图标
					type: '', // 分享类型,music、video或link，不填默认为link
					dataUrl: shareImgUrl, // 如果type是music或video，则要提供数据链接，默认为空
					success: function () {
						// 用户点击了分享后执行的回调函数
					}
				});
				wx.updateAppMessageShareData({
					title: '快语科技', // 分享标题
					desc: '快语科技官网', // 分享描述
					link: _url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl: shareImgUrl, // 分享图标
					success: function () {
						// 设置成功
					},
				});
				wx.updateTimelineShareData({
					title: '快语科技', // 分享标题
					desc: '快语科技官网', // 分享描述
					link: _url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl: shareImgUrl, // 分享图标
					success: function () {
						// 设置成功
					}
				})
			});
		};

	});
	wx.error(function (res) {    //授权失败
		alert("授权失败")
		alert(JSON.stringify(res));
	});
}



