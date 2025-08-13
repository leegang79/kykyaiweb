var cont2 = document.getElementsByClassName('popularProducts-cont')[0];
var ul2 = document.getElementsByClassName('popularProducts-cont-ul')[0];
var ulul2 = document.getElementsByClassName('popularProducts-cont-ulul')[0];
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