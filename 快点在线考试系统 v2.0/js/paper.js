// 单选
var s_c_value1 = document.getElementsByName('single_choice-1');
var s_c_value2 = document.getElementsByName('single_choice-2');
var s_c_value3 = document.getElementsByName('single_choice-3');

// 多选
var multiple_choice1 = document.getElementsByName('multiple_choice-1');
var multiple_choice2 = document.getElementsByName('multiple_choice-2');

// 判断
var judge1 = document.getElementsByName('judge-1');
var judge2 = document.getElementsByName('judge-2');
var judge3 = document.getElementsByName('judge-3');

// 填空
var full_space1 = document.getElementsByName('fullSpace-1');
var full_space2 = document.getElementsByName('fullSpace-2');

//简答题
var textareas = document.getElementsByTagName('textarea');

// console.log(typeof textareas);

var scoreAll = 0;

// 交卷按钮
function countScore(){

	if(s_c_value1[0].checked){scoreAll = scoreAll + 5;}//A
	if(s_c_value2[3].checked){scoreAll = scoreAll + 5;}//D
	if(s_c_value3[2].checked){scoreAll = scoreAll + 5;}//C

	if(multiple_choice1[1].checked && multiple_choice1[2].checked && !multiple_choice1[0].checked && !multiple_choice1[3].checked){scoreAll = scoreAll + 10;}//BC
	if(multiple_choice2[0].checked && multiple_choice2[3].checked && !multiple_choice2[1].checked && !multiple_choice2[2].checked){scoreAll = scoreAll + 10;}//AD

	if(judge1[1].checked){scoreAll = scoreAll + 5;}//错
	if(judge2[0].checked){scoreAll = scoreAll + 5;}//对
	if(judge3[1].checked){scoreAll = scoreAll + 5;}//错

	// if(full_space1[0].value == "尺子"){scoreAll = scoreAll + 10;}
	// if(full_space2[0].value == "20-20000"){scoreAll = scoreAll + 10;}

	// if (textareas[0].value == "琵琶行") {scoreAll = scoreAll + 15;}
	// if (textareas[1].value == "出师表") {scoreAll = scoreAll + 15;}

	alert("您本次测试\n客观题成绩为： " + scoreAll + "分。\n" + "主观题成绩请等待教师阅卷评分！");

	// 存储


	localStorage.setItem("full_space1", full_space1[0].value);
	localStorage.setItem("full_space2", full_space2[0].value);
	localStorage.setItem("textareas1", textareas[0].value);
	localStorage.setItem("textareas2", textareas[1].value);
	localStorage.setItem("scoreAll", scoreAll);

	scoreAll = 0;
}

function getQuestionList(){

	//获取各题目编号
	var lis = document.getElementsByTagName("li");
	for( var i = 0 ; i < lis.length ; i++){

		// alert(lis[i].firstElementChild.innerHTML);

		var delBeforeText = new RegExp(/<input/);
		var delAfterText = new RegExp(/>/);

		//去掉题目中包含的代码
		if(delBeforeText.test(lis[i].firstElementChild.innerHTML) && delAfterText.test(lis[i].firstElementChild.innerHTML)){

			//将代码替换为下划线
			lis[i].firstElementChild.innerHTML = lis[i].firstElementChild.innerHTML.replace(/<input.*>/,"____");

			//将题目存入临时区域
			localStorage.setItem(("questionList" + (i + 1)) , lis[i].firstElementChild.innerHTML)
		}

		//将题目存入临时区域
		localStorage.setItem(("questionList" + (i + 1)) , lis[i].firstElementChild.innerHTML)
	}
}



