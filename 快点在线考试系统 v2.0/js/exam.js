var TIME_LONG = 40;     //考试时长
var TOTLE_TIME = TIME_LONG * 60;
// var delay_time = setInterval(function(){ calculateTime() },1000);
var now = TOTLE_TIME;
var m,s;

// 计时器
function calculateTime(){
    now = now - 1;
    m = Math.ceil(now / 60);  //向上取整
    document.getElementById('minutes').innerHTML = m - 1;
    s = now % 60
    document.getElementById('second').innerHTML = s;
}

// 每秒钟更新一次计时器
function countTime(){
    document.getElementById('time_meter').style.display = 'block';
    var delay_time = setInterval(function(){ calculateTime() },1000);
}


// 显示计时器
function doPaper(){
	document.getElementById('exam_contents').style.display = 'block';
}

// 隐藏开始答题按钮
function hidThis(){
	document.getElementById('do_paper').style.display = 'none';
}

// 交卷停止计时
function stopCountTime(){
	document.getElementById('time_meter').style.display = 'none';
}

// dump_top
var dumpTop = document.getElementsByClassName('dump_top')[0];



var ItemsArray = localStorage.getItem("ItemsArray_S");
ItemsArray = JSON.parse(ItemsArray);


function doPaper2(me){
    console.log(typeof ItemsArray["paper_name"]);
    // button1.innerHTML = ItemsArray['title'];
    console.log(ItemsArray["questTitle"]);  //题目数组
    console.log(ItemsArray["questAnswer"]); // 选项数组
    doPaper(me);
    hidThis(me);
}