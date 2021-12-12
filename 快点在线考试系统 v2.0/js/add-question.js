var addSure = document.querySelector('#addSure');

function funSure(){
	var addTitle = document.querySelector('#questionTitle').value;// 题目标题
	var tiType = document.getElementById('optionValue').value; // 题型
	var tiItems = document.getElementById('questNumber').value; // 题目数量
	var tixing; //题型参数
	if(addTitle != "" && tiItems != ""){
		switch(tiType){
			case '1' : 
				// 单选
				tixing = "radio";
				addQuestionItems(4,tiItems,tixing,"单选题");
				break;

			case '2' : 
				// 多选
				tixing = "checkbox";
				addQuestionItems(3,tiItems,tixing,"多选题");
				break;

			case '3' :
				// 判断
				tixing = "radio";
				addQuestionItems(2,tiItems,tixing,"判断题");
				break;

			case '4' : 
				//填空和简答
				addQuestionItems(1,tiItems,tixing,"主观题");
				break;
		}
	}
	else{
		alert("请注意标题和题目数量是否输入！");
	}
	
}


function addQuestionItems(num,shu,tx,typeString){
	shu = shu - 0;
	num = num - 0;
	var addAll = document.getElementById('addQuestion')
	for(var i = 0 ; i < shu ; i++){
		var ol1 = document.createElement('ol');

		// 添加题目属性
		ol1.setAttribute("id","questionItems");
		ol1.setAttribute("name","itemnumber");

		// 存放题目
		var lis1 = new Array();

		for( var j = 0 ; j < shu ; j++){

			// 存放题目内容以及选项
			var lis2 = new Array();
			var ols2 = document.createElement('ol');

			// 题目内容属性
			ols2.setAttribute("name","itemOption");
			
			// 按照所选题型设置选项个数
			console.log(num);
			if(num == 4){
				ols2.setAttribute("type","A");
				for(var i = 1 ; i < num + 1 ; i++){
					var li = document.createElement("li");
					var inputs = document.createElement('input');
					inputs.setAttribute('name','questItems');
					inputs.className = "one";
					li.appendChild(inputs);
					lis2[i] = li;
				}
			}
			else if(num == 3){
				ols2.setAttribute("type","A");
				for(var i = 0 ; i < num + 2 ; i++){
					var li = document.createElement("li");
					var inputs = document.createElement('input');
					inputs.setAttribute('name','questItems');
					inputs.className = "more";
					li.appendChild(inputs);
					lis2[i] = li;
				}
			}
			else if(num == 2){
				ols2.setAttribute("type","A");
				for(var i = 1 ; i < num + 1 ; i++){
					var li = document.createElement("li");
					var inputs = document.createElement('input');
					inputs.setAttribute('name','questItems');
					inputs.className = "judge";
					li.appendChild(inputs);
					lis2[i] = li;
				}
			}
			else{
				ols2.setAttribute("type","A");
				for(var i = 1 ; i < num + 1 ; i++){
					var li = document.createElement("li");
					var selectinputs = document.createElement("textarea");
					selectinputs.className = "self_mind";
					selectinputs.setAttribute("id","self_mind");
					selectinputs.style.display = "none";
					if(tx != ""){
						selectinputs.type = tx;
					}
					li.appendChild(selectinputs);
					lis2[i] = li;
				}
			}

			// 题目h5
			var h5 = document.createElement('h5');
			// 题目内容输入框
			var h5texteare = document.createElement('textarea');
			// 设置题目内容name属性
			h5texteare.setAttribute('name','question_title_content');
			h5.appendChild(h5texteare);
			lis2[0] = h5;

			// 存储
			
			for (var i = 0 ; i < lis2.length ; i++){
				if(tx != ""){
					ols2.appendChild(lis2[i]);
					lis1[j] = ols2;
				}
			}
			
		}
		var lis0 = new Array();
		for(var i = 0 ; i < lis1.length ; i++){
			var li0 = document.createElement('li');
			li0.appendChild(lis1[i])
			ol1.appendChild(li0);
		}
		var h4 = document.createElement("h4");
		h4.className = "h4s";
		h4.innerHTML = typeString;
		addAll.appendChild(h4);
		addAll.appendChild(ol1);
	}



	var addAll = document.getElementById('addQuestion')	
	var addBtn = document.createElement('button');
	addBtn.innerHTML = "提交";
	addBtn.setAttribute("id","getSubmitQuest");
	addBtn.setAttribute("class","addbtnlist");
	addBtn.setAttribute("onclick","getAddQuestions()");
	var addbtnlist = document.getElementsByClassName('addbtnlist');

	// 每添加一种类型的题型，去掉多余的确认按钮
	for(var a = 0 ; a < addbtnlist.length  ; a++){
		addAll.removeChild(addbtnlist[a]);
	}

	addAll.appendChild(addBtn);
}


var h4sArray = new Array();
var questionArray = new Array();
var answerItemsArray = new Array();

function getAddQuestions(){

	// 试卷名称
	var paper_name = document.getElementById('questionTitle').value;


	// 题型
	var h4s = document.getElementsByClassName('h4s');
	for(var i = 0 ; i < h4s.length ; i++){
		h4sArray[i] = h4s[i].innerHTML;
	}

	// 题目内容
	var titles = document.getElementsByName('question_title_content');
	for(var i = 0 ; i < titles.length ; i++){
		questionArray[i] = titles[i].value;
	}

	// 题目的选项
	for(var i = 0 ; i < h4s.length ; i++){
		var items = document.getElementsByClassName('items');
		// answerItemsArray[i-1] = items[i-1]

		if(h4s[i].innerHTML == "单选题"){
			// 创建存放单选题的数组
			var one_Array = new Array();
			var one = document.getElementsByClassName("one");
			for(var j = 0 ; j < one.length ; j++){
				one_Array[j] = one[j].value;
			}
			answerItemsArray[i] = one_Array;
		}
		else if(h4s[i].innerHTML == "多选题"){
			// 创建存放多选题的数组
			var more_Array = new Array();
			var more = document.getElementsByClassName("more");
			for(var j = 0 ; j < more.length ; j++){
				more_Array[j] = more[j].value;
			}
			answerItemsArray[i] = more_Array;
		}
		else if(h4s[i].innerHTML == "判断题"){
			// 创建存放判断题的数组
			var judge_Array = new Array();
			var judges = document.getElementsByClassName("judge");
			for(var j = 0 ; j < judges.length ; j++){
				judge_Array[j] = judges[j].value;
			}
			answerItemsArray[i] = judge_Array;
		}
		else{
			// 创建存放主观题的数组
			var self_mind_Array = new Array();
			var self_mind_s = document.getElementsByClassName("self_mind");
			console.log("---+++++-----" + self_mind_s[0]);
			for(var j = 0 ; j < self_mind_s.length ; j++){
				self_mind_Array[j] = self_mind_s[j].value;

			}
			answerItemsArray[i] = self_mind_Array;
		}
	}
	console.log(answerItemsArray);
	console.log(answerItemsArray.length);


	// 使用对象来存储题目相关信息
	var Agroup = {

		paper_name:paper_name, // 题目标题

		questionArray:questionArray, // 题目内容

		answerItemsArray:answerItemsArray, // 题目选项

		h4sTypeArray:h4sArray // 题目类型
	}
	console.log("rrrr");
	try {
		if(ItemsArray_S["questionArray"][0]) throw "TypeError: Cannot read properties of null (reading 'questionArray')";
	}
	catch(err){
		// alert(err);
		if(err == "TypeError: Cannot read properties of null (reading 'questionArray')"){
			localStorage.setItem("ItemsArray_S",JSON.stringify(Agroup));//存储数据
			location.reload();
		}
		else{
			var a = confirm("点击确定覆盖原题目。");
			localStorage.setItem("ItemsArray_S",JSON.stringify(Agroup));//存储数据
			location.reload();
		}
	}
	finally {
		localStorage.setItem("ItemsArray_S",JSON.stringify(Agroup));//存储数据
			location.reload();
	}
	

}

function loadQuestion(paper_name,type){
	var tab = document.getElementById('question_bank_TK');

	// 题库表头
	var parem = [paper_name,type];
	var trs = document.createElement('tr');
	for(var i = 0 ; i < 3 ; i++){
		if(i < 2){
			var tds = document.createElement('td');
			tds.innerHTML = "<a href='javascript:;' onclick='showAnswer();'>" + parem[i] + "</a>";
			trs.appendChild(tds);
		}
		else{
			var tds = document.createElement('td');
			tds.innerHTML = "<a href='javascript:;' onclick='setAnswer()'>设置答案</a>"+"<span>&nbsp;&nbsp;</span>"
							+ "<a href='javascript:;' onclick='showAddDeitail()'>其他</a>"+"<span>&nbsp;&nbsp;</span>"
							+ "<a href='javascript:;' onclick='deleteMe()'>删除</a>";
			trs.appendChild(tds);
		}
	}
	var tbody = document.querySelector('#question_bank_TK tbody');
	tbody.appendChild(trs);
}

var ItemsArray_S = localStorage.getItem("ItemsArray_S");
ItemsArray_S = JSON.parse(ItemsArray_S);
function showAddDeitail(){
	alert("标题：" + ItemsArray_S["paper_name"] +
		 "\n题型：" + ItemsArray_S["h4sTypeArray"] +
		 "\n题量：" + ItemsArray_S["questionArray"].length);
}

function deleteMe(){
	if(window.confirm('你确定要删除吗？')){
    	ItemsArray_S = null;
    	localStorage.setItem("ItemsArray_S",JSON.stringify(ItemsArray_S));
    	location.reload();
        return true;
    }
    else{
        return false;
    }
}


function setAnswer(){
	var flag = 0;
	var answer;
	var answer_list = new Array();
	while(!flag){
		answer = prompt("请输入答案（使用逗号“，”分隔），如: A,B,D,A","");
		for(var i = 0 ; i < ItemsArray_S["questionArray"].length ; i++){
			if(i % 2 == 0){
				answer_list += answer[i];
			}
		}
		if(answer.length < ItemsArray_S["questionArray"].length){

		}
		console.log(answer.length);
		console.log(answer_list);
		console.log(ItemsArray_S["questionArray"].length);
		flag = 1;

	}
	
	localStorage.setItem("ItemsArray_S_answer",JSON.stringify(answer_list));//存储数据
}

function showAnswer(){
	var ItemsArray_S_answer = localStorage.getItem("ItemsArray_S_answer");
	ItemsArray_S_answer = JSON.parse(ItemsArray_S_answer);
	alert("答案: " + ItemsArray_S_answer);
}