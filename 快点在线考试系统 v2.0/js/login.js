{
			var container = document.getElementsByClassName('container')[0];
			var h3 = document.getElementsByTagName('h3')[0];

			//获取数据
			var ItemsArray_S = localStorage.getItem("ItemsArray_S");
			ItemsArray_S = JSON.parse(ItemsArray_S);
			}
			{
				//整张试卷的题目顺序
				var paper_count = document.createElement("ol");
				//存放题目包括题目和选项
				var ol_li = document.createElement("li");
				// 容纳问题以及选项的容器
				var ol_li_ol = document.createElement("ol");
				ol_li_ol.className = "ol_li_ol";
				// 为选项绑定表单事件
				var ol_li_ol_form = document.createElement("form");
				for(var i = 0 ; i < ItemsArray_S["questionArray"].length ; i++){
					// 每个题目的问题
					var ol_li_ol_h6 = document.createElement("h6");
					ol_li_ol_h6.innerHTML = ItemsArray_S["questionArray"][i]
					// 为选项绑定表单事件
					var ol_li_ol_form = document.createElement("form");
					ol_li_ol_form.className = "ol_li_ol_form";
					ol_li_ol_form.appendChild(ol_li_ol_h6);
					ol_li_ol.appendChild(ol_li_ol_form);
				}
				ol_li.appendChild(ol_li_ol);
				paper_count.appendChild(ol_li);
				container.appendChild(paper_count);

				//选项数组个数
				var ol_li_ol_form_li_label_items = new Array();
				var count_item_number = 0;
				for(var i = 0 ; i < ItemsArray_S["answerItemsArray"].length - 1 ; i++){
					for(var j = 0 ; j < ItemsArray_S["answerItemsArray"][i].length ; j++){
						ol_li_ol_form_li_label_items += ItemsArray_S["answerItemsArray"][i][j];
					}
				}
				var one_count_number = ((ItemsArray_S["answerItemsArray"][0].length / 4) * 4) - 1; // 单选
				var more_count_number = one_count_number + (ItemsArray_S["answerItemsArray"][1].length / 4) * 4; // 多选
				var judge_count_number = more_count_number + (ItemsArray_S["answerItemsArray"][2].length / 2) * 2; // 判断

				for(var y = 0 ; y < (one_count_number + 1) / 4 ; y++){
					var ol_li_ol_from_class_name = "ol_li_ol_form_" + y; 
					ol_li_ol_form.className = ol_li_ol_from_class_name;
				}

				var one_flag = one_count_number + 1;
				var more_flag = more_count_number + 1 - one_flag;
				var judge_flag = judge_count_number + 1 - more_flag - one_flag;

				for(var x = 0 ; x < ol_li_ol_form_li_label_items.length ; x++){
					if(x >= 0 && x <= one_count_number){
						console.log("单选");
						add_question_to_ol_li_ol_form_li(x,4);
					}
					else if(x > one_count_number && x <= more_count_number){
						console.log("多选");
						add_question_to_ol_li_ol_form_li(x,4);
					}
					else{
						console.log("判断");
						add_question_to_ol_li_ol_form_li(x,2);
					}
					function add_question_to_ol_li_ol_form_li(x,question_counts_number){
						// console.log("-----" + x);
						//为选项绑定焦点事件
						var ol_li_ol_form_li_label = document.createElement("label");
						ol_li_ol_form_li_label.innerHTML = ol_li_ol_form_li_label_items[x]
						//选项
						var ol_li_ol_form_li_label_input = document.createElement("input");
						ol_li_ol_form_li_label.appendChild(ol_li_ol_form_li_label_input);
						//每个问题的选项
						var ol_li_ol_form_li = document.createElement("li");
						ol_li_ol_form_li.appendChild(ol_li_ol_form_li_label);
						ol_li_ol_form.appendChild(ol_li_ol_form_li);

						var ol_li_ol_form_class = document.getElementsByClassName('ol_li_ol_form');
						for(var y = 0 ; y < ol_li_ol_form_class.length ; y++){
							console.log("--++---" + ol_li_ol_form_class[y].length);
						}
					}
					// console.log("-----------------------" + one_flag);
					// console.log("-----------------------" + more_flag);
					// console.log("-----------------------" + judge_flag);
					
				}
				
			}
			var h6s = document.getElementsByTagName('h6');
			console.log(h6s.length);