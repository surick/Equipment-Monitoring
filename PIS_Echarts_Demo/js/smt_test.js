/**
 * 设备监控：SMT产线
 * @desc GitHub#(https://github.com/surick/Equipment-Monitoring)
 * @author JinG (godcoder1996@gmail.com)
 */

// AMD标准模块需使用esl加载
// 路径配置
require.config({
	paths : {
		
		// 如需布置在内网无外部网络连接，切换服务器本地资源，否则静态资源使用CDN加速
		 'echarts' : 'js/echarts',
		 'echarts/chart/map' : 'js/map'
		
		// 如需布置在内网无外部网络连接，使用服务器本地资源，否则静态资源使用CDN加速
		// 采用CDN加速静态资源
		//'echarts' : 'https://cdn.bootcss.com/echarts/2.2.7/echarts',
		//'echarts/chart/map' : 'https://cdn.bootcss.com/echarts/2.2.7/chart/map'
	}
});

// 使用
require(
		// 按需加载
		[ 'echarts', 'echarts/chart/map'],

		function(ec) {
			require('echarts/util/mapData/params').params.demo1 = {
				getGeoJson : function(callback) {
					$.ajax({
						url : "svg/smt.svg",
						dataType : 'xml',
						success : function(xml) {
							callback(xml)
						}
					});
				},
			}

			// 基于准备好的DOM，初始化图表
			var myChart = ec.init(document.getElementById('main'), null, 'svg');

			// 自适应
			/* window.onresize = function(){
			   myChart.resize();
			}; */
			var geo = {};
			//var geo1 = {};
			$.ajax({
				method : 'GET',
				url : 'test1.jsp',
				async:false,
				success : function(res) {
							  console.log(res);
					 		  var Data = $.parseJSON(res);
					 		  console.log(Data[1]);
							  //geo1["上海"] = [ 120.13,33.38 ];
					 		  for (var i = 0;i <= Data.length; i++){
					 			  geo[Data[i-2]] = [Data[i-1],Data[i]];
					 		  }
							  console.log(geo);
						}
			});
			console.log(geo);
			
			var point = [];
			$.ajax({
				method : 'GET',
				url : 'http://192.168.123.30/PIS/GetStationStatus.aspx?Line=SMT',
				success : function(result) {
							  // console.info(result);
							  var jsonObj = $.parseJSON(result);
							  for (var i = 0; i < jsonObj.data.length; i++) {
									  point.push(jsonObj.data[i]);
								      //console.info(JSON.stringify(point));
							  }
						}
			});
			console.log(point);

			// 配置项
			var option = {
				backgroundColor : '#ffffff',
				/*title : {
					text : '设备监控',
					textStyle : {
						color : '#009900',
					}
				},*/
				tooltip : {
					trigger : 'item',
					//hideDelay : 200,
					textStyle : {
						color : '#a1eafb',
						fontFamily : 'Arial',
						fontStyle : 'oblique'
					},
					// 0表示IDEL,1表示运行，2表示告警，3表示错误停机
					formatter : function(obj) {
									if (obj[2] === 0)
										return 	 'Name:'
												+ obj[1]
												+ '</br>Status:IDEL</br>'
												+ new Date().toLocaleTimeString();
									if (obj[2] === 1)
										return 	  'Name:'
												+ obj[1]
												+ '</br>Status:运行</br>'
												+ new Date().toLocaleTimeString();
									if (obj[2] === 2)
										return 	  'Name:'
												+ obj[1]
												+ '</br>Status:告警</br>'
												+ new Date().toLocaleTimeString();
									if (obj[2] === 3)
										return 	  'Name:'
												+ obj[1]
												+ '</br>Status:停机</br>'
												+ new Date().toLocaleTimeString();
								}
				},
				/*	color: ['#000066'],
				 legend: {
				 	show: false,
				     data: ['SMT产线'],
				     textStyle: {
				         color: '#009900'
				     }
				 }, */
				toolbox : {
					show : true,
					feature : {
						//restore : {show: true},
						// 多图联动
						/* magicType: {
						    show : true,
						    title : {
						        line : '折线图切换',
						        bar : '柱形图切换',
						        pie: '饼图切换',
						    },
						    option: {
						        // line: {...},
						        // bar: {...},
						        // pie: {...},
						    },
						    type : ['line', 'bar','pie']
						}, */
						saveAsImage : {
							show : true
						},
					}
				},
				series : [
					{
						//name: 'IDEL'
						type : 'map',
						mapType : 'demo1',
						roam : true,
						data : [],
						markPoint : {
							symbol : 'circle',
							data : []
						}
					}, 
					{
						//name: '运行'
						type : 'map',
						mapType : 'demo1',
						roam : true,
						data : [],
						markPoint : {
							symbol : 'circle',
							data : []
						}
					}, 
					{
						//name: '报警'
						type : 'map',
						mapType : 'demo1',
						roam : true,
						data : [],
						markPoint : {
							symbol : 'circle',
							/*effect : {
								show : true,
								color : '#ffcd00'
							},*/
						data : []
						}
					}, 
					{
						//name: '故障'
						type : 'map',
						mapType : 'demo1',
						roam : true,
						data : [],
						markPoint : {
							symbol : 'circle',
							/*effect : {
								show : true,
								color : '#cb0101'
							},*/
						data : []
						}
					}, 
					{
						name : 'SMT产线',
						type : 'map',
						mapType : 'demo1',
						roam : true,
						itemStyle : {
							//normal:{label:{show:true}},
							//emphasis:{label:{show:true}}
						},
						tooltip : {
							show : false,
							trigger : 'item',
							borderRadius : 5,
							formatter : '{a}' + '</br>' + '{b}',

						},
						data : [],
						geoCoord :geo,
						markPoint : {
							symbolSize : 0,
							data : point,
						}
					} 
				]
			};
			console.log(geo);

			// 为echarts对象加载数据
			myChart.setOption(option);

			// 加载动画
			//myChart.showLoading();

			// 根据抓取数据动态更新
			$.ajax({
				method : 'GET',
				url : 'http://192.168.123.30/PIS/GetStationStatus.aspx?Line=SMT',
				success : function(result) {
							  // console.info(result);
							  var jsonObj = $.parseJSON(result);
							  var obj0 = [], 
								  obj1 = [], 
								  obj2 = [], 
								  obj3 = [];
							  // console.info(jsonObj.data.length);
							  
							  // 根据value状态重组json
							  for (var i = 0; i < jsonObj.data.length; i++) {
								  if (jsonObj.data[i].value === 0)
									  obj0.push(jsonObj.data[i]);
								  if (jsonObj.data[i].value === 1)
									  obj1.push(jsonObj.data[i]);
								  if (jsonObj.data[i].value === 2)
									  obj2.push(jsonObj.data[i]);
								  if (jsonObj.data[i].value === 3)
									  obj3.push(jsonObj.data[i]);
								  // console.info(JSON.stringify(obj4));
							  }
							  
							  if (obj3.length > 0){
								  var audio = document.createElement('audio');
								  var source= document.createElement('source');
								  if (audio.canPlayType('audio/mpeg;')) {
								      source.type= 'audio/mpeg';
								      source.src= 'sound/mp3/alarm.mp3';
								  } else {
								      source.type= 'audio/wav';
								      source.src= 'sound/wav/alarm.wav';
								  }
								  audio.appendChild(source);
								  audio.play();
								  /*$('#alarm').attr("src","sound/mp3/alarm.mp3");*/
							  }
							  
							  myChart.showLoading();
							  myChart.setOption({
		                            series:[
		                            	{
		            						//name: 'IDEL'
		            						type : 'map',
		            						mapType : 'demo1',
		            						roam : true,
		            						data : [],
		            						markPoint : {
		            							symbol : 'circle',
		      								  	symbolSize : 6,
		      								  	itemStyle : {
		      								  		normal : {
		      								  			color : '#6f6f6f',
		      								  			// borderColor: '#6f6f6f',
		      								  			borderWidth : 1,
		      								  			label : {show : false}
		      								  		},
		      								  		// emphasis:{label:{show:true}}
		      								  	},
		      								  	data : obj0,
		            						}
		            					}, 
		            					{
		            						//name: '运行'
		            						type : 'map',
		            						mapType : 'demo1',
		            						roam : true,
		            						data : [],
		            						markPoint : {
		            							symbol : 'circle',
		      								  	symbolSize : 6,
		      								  	itemStyle : {
		      								  		normal : {
		      								  			color : '#4ef037',
		      								  			borderWidth : 1,
		      								  			label : {show : false}
		      								  		},
		      								  	},
		      								  	data : obj1,
		            						}
		            					}, 
		            					{
		            						//name: '报警'
		            						type : 'map',
		            						mapType : 'demo1',
		            						roam : true,
		            						data : [],
		            						markPoint : {
		            							symbol : 'circle',
		      								  	symbolSize : 8,
		      								  	itemStyle : {
		      								  		normal : {
		      								  			color : '#ffaf00',
		      								  			borderWidth : 1,
		      								  			label : {show : false}
		      								  		},
		      								  	},
		      								  	data : obj2,
		            						}
		            					}, 
		            					{
		            						//name: '故障'
		            						type : 'map',
		            						mapType : 'demo1',
		            						roam : true,
		            						data : [],
		            						markPoint : {
		            							symbol : 'circle',
		      								  	symbolSize : 8,
		      								  	itemStyle : {
		      								  		normal : {
		      								  			color : '#FF0000',
		      								  			borderWidth : 1,
		      								  			label : {show : false}
		      								  		},
		      								  	},
		      								  	data : obj3,
		            						}
		            					}, 
		                             ]
		                        });
							  myChart.hideLoading();
						}
			});
});