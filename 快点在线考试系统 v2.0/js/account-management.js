// 获取用户数据
var ulists = localStorage.getItem("us");
// 讲数据类型为String的数据转换成Object类型的数据
ulists = JSON.parse(ulists);

// 学生用户全选
function checkAll_stuUsers(ck){
	var arr = document.getElementsByName('good');
	var ck = document.getElementById('ck');
	for (i in arr){
		arr[i].checked = ck.checked;
	}
}

// 学生权限全选
function checkAll(ck){
	var arr = document.getElementsByName('good_p');
	var ck = document.getElementById('ck_p');
	for (i in arr){
		arr[i].checked = ck.checked;
	}
}

// 导航切换
// 显示基本信息
function showBaseMsg(){
	document.getElementById('b_g').style.display = 'block';
	document.getElementById('s_u').style.display = 'none';
	document.getElementById('s_p').style.display = 'none';
}

// 显示学生账号
function showStudentsId(){
	document.getElementById('b_g').style.display = 'none';
	document.getElementById('s_u').style.display = 'block';
	document.getElementById('s_p').style.display = 'none';
}

// 显示学生权限
function showStudentsPrivilege(){
	document.getElementById('b_g').style.display = 'none';
	document.getElementById('s_u').style.display = 'none';
	document.getElementById('s_p').style.display = 'block';
}



// 学生账号
window.onload = function(){

	var ulists = localStorage.getItem("us");
		// 讲数据类型为String的数据转换成Object类型的数据
	ulists = JSON.parse(ulists);

	var stu_info = [
		"<input name='good' type='checkbox'  value='' />",
		0,
		0,
		,
		"男",
		"计算机工程技术学院",
		"2021亿网通云计算架构项目班",
		"stu",
		"",
		"<a href='javascript:;'>详细信息</a>",
		"无"
	]
	var input_checkbox = document.createElement("input");
	input_checkbox.name = "good";
	input_checkbox.type = "checkbox";

	loadStudentInfo();

	function loadStudentInfo(){
		var users_tableInfo = document.querySelector(".users_table");
		var users_tableTbody = document.querySelector(".users_table tbody");
		var s = 0;
		for (var i = 0 ; i < ulists.user.length ; i++){
			var trs = document.createElement("tr");
			for(var j = 0 ; j < stu_info.length ; j++){
				var tds = document.createElement("td");
				stu_info[1] = i + 1;
				stu_info[2] = 100000 + i;
				stu_info[3] = ulists.user[i]["userName"];
				stu_info[8] = ulists.user[i]["psd"];
				tds.innerHTML = stu_info[j];
				trs.appendChild(tds);
			}
			users_tableTbody.appendChild(trs);
			console.log(trs);
		}

		// 计算页数
		var page = Math.ceil(ulists.user.length / 10);
		var u1 = document.createElement("ul");
		var user_page = document.getElementById('user_page');
		for(var a = 1 ; a < page + 1; a++){
			var l1 = document.createElement("li");
			l1.innerHTML = "" + a;
			u1.appendChild(l1);
		}
		var l1 = document.createElement("li");
		var i1 = document.createElement("input");
		l1.appendChild(i1);
		u1.appendChild(l1);
		
		user_page.appendChild(u1);
	}
	var searchInfo = document.getElementById('search');
	var searchBtn = document.getElementById('search_btn');

	// 搜索按钮点击事件
	searchBtn.onclick = function(){
		console.log(searchInfo.value);
		IndexInfo(searchInfo.value);
		showStudentsId();
	}

	// userName检索
	var ifStuId = /^[0-9]{6}$/; // 学号正则
	function IndexInfo(what){
		stuName = what;
		var flag1 = 0;
		console.log(ifStuId.test(stuName));

		for( i in ulists.user){
			if (stuName == ulists.user[i]["userName"]){
				console.log("ok");
				flag1 = 1;
				break;
			}
			else if (stuName == ulists.user[i]["userId"]) {
				console.log("ok2");
				flag1 = 1;
				break;
			}
			else {
				flag = 0;
			}
		}
		if (flag1 == 0) {
			alert("抱歉！没有找到:" + stuName);
		}
		else{
			shou_and_hiddent(stuName);
		}
	}
	function shou_and_hiddent(types){
		types = types;
		// 获取表格的用户名
		// 获取表格中姓名一列
		var td_number = document.querySelectorAll('.users_table tr td:nth-child(3)');
		// 获取表格中姓名一列
		var td_name = document.querySelectorAll('.users_table tr td:nth-child(4)');
		var hidTr = document.querySelectorAll('.users_table tr');
		if(ifStuId.test(stuName)){
			sh(td_number);
		}
		else{
			sh(td_name);
		}
		function sh(e){
			// 先隐藏全部行
			for (var j = 1 ; j < hidTr.length ; j++){
				if (j < hidTr.length){
					hidTr[j].style.display = "none";
				}
			}
			// 匹配成功的数据显示
			for(var i = 1 ; i < e.length ; i++){
				if (types == e[i].innerHTML){
					hidTr[i].style.display = "";
				}
			}
		}
	}
}


