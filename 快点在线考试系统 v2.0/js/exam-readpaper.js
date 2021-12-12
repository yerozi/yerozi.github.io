var show1 = document.getElementById('show1');
var show2 = document.getElementById('show2');
function showScore1(me){
	show1.innerHTML = me.value;
}
function showScore2(me){
	show2.innerHTML = me.value;
}


// 将缓存区的数据提取出来
function getStuAnswers(){

	// 提取学生客观题分数
	document.getElementById('objective').innerHTML = localStorage.getItem("scoreAll");

	// 获取主观题题目

	// 获取class值为questionList的元素
	var questionLists = document.getElementsByClassName('questionList');

	// 将缓存区的数据添加到题目位置
	for(var i = 0 ; i < questionLists.length ; i++){

		// 设置缓存区对应的变量
		var item = "questionList" + (i + 9);

		// 将缓存区的数据添加到class值为questionList的元素中
		questionLists[i].innerHTML = localStorage.getItem(item);
	}

	// 将学生填写的主观题答案添加到对应的元素中
	document.getElementById('full_space1').innerHTML = localStorage.getItem("full_space1");
	document.getElementById('full_space2').innerHTML = localStorage.getItem("full_space2");
	document.getElementById('short_answer1').innerHTML = localStorage.getItem("textareas1");
	document.getElementById('short_answer2').innerHTML = localStorage.getItem("textareas2");
	document.getElementById('objective').innerHTML = localStorage.getItem("scoreAll");
}

// 计算得分
{
	// 分数输入判断
	function outMouseOut(numberIsOk){
		//判断是否在正确范围值
		if ((numberIsOk.value - 0) >= (numberIsOk.min - 0 ) && (numberIsOk.value - 0) <= (numberIsOk.max - 0 )){
			numberIsOk.style.border = "2px solid #2BDE73";

			// 判断输入框内的值是否为空
			if(numberIsOk.value == undefined || numberIsOk.value == "" || numberIsOk.value == null){
				numberIsOk.style.border = "2px solid #FF9900";
			}
		}
		else{
			numberIsOk.style.border = "2px solid red";
		}
	}
		
	// 获取总分数
	function getSelfMind(){
		// 获取元素
		var scores = document.getElementsByTagName('input');

		// 获取缓存区分数
		var totleScore = localStorage.getItem("scoreAll");

		// 将类型为string的分数转换成number类型
		totleScore = (totleScore - 0);

		for(var i = 0 ; i < scores.length ; i++){

			// 主观题和客观题分数相加
			totleScore = totleScore + (scores[i].value - 0);
		}
		alert("暂时没写完点击这个按钮判断是否全部赋分的功能！"+
			"\n但是可以通过输入框颜色判断！"+
			"\n绿色表示输入的是正常值，黄色表示为空，红色表示为规定数值之外的不合法的数值！");
		localStorage.setItem("totleScore",totleScore);
	}




}

