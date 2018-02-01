/**
 * 设备监控：SMT产线
 * @desc GitHub#(https://github.com/surick/Equipment-Monitoring)
 * @author JinG (godcoder1996@gmail.com)
 */

// AMD标准模块需使用esl加载
// 路径配置
require.config({
	paths : {
		
		// 如需布置在内网无外部网络连接，使用服务器本地资源，否则静态资源使用CDN加速
		// 采用CDN加速静态资源
		'echarts' : 'https://cdn.bootcss.com/echarts/2.2.7/echarts',
		'echarts/chart/map' : 'https://cdn.bootcss.com/echarts/2.2.7/chart/map'
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

			// 配置项
			var option = {
				backgroundColor : '#f3ecc8',
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
							symbol : 'emptyCircle',
							effect : {
								show : true,
								color : '#6f6f6f'
							},
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
							symbol : 'emptyCircle',
							effect : {
								show : true,
								color : '#41c5d3'
							},
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
							symbol : 'emptyCircle',
							effect : {
								show : true,
								color : '#ffaf00'
							},
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
							symbol : 'emptyCircle',
							effect : {
								show : true,
								color : '#cb0101'
							},
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
						geoCoord : {
							'BOX_LNB_DTV_L-Band_2#' 	      : [ 960, 1000 ],
							'BOX_LNB_HWAS_GPADC_Test_02#'     : [ 695, 1000 ],
							'BOX_LNB_HWAS_GPADC_Test_03#' 	  : [ 730, 1000 ],
							'BOX_LNB_HWAS_GPADC_Test_04#' 	  : [ 762, 1000 ],
							'BOX_LNB_HWAS_MOCA_Test_01#' 	  : [ 793, 1000 ],
							'BOX_LNB_DTV_L-Band_3#' 		  : [ 990, 1000 ],
							'BOX_LNB_HWAS_MOCA_Test_02#' 	  : [ 826, 1000 ],
							'BOX_74IFPCBA_Testing_Path_2#' 	  : [ 598, 1000 ],
							'BOX_74IFPCBA_Testing_Path_1#' 	  : [ 630, 1000 ],
							'BOX_LNB_DTV_L-Band_5#' 		  : [ 1055, 1000 ],
							'BOX_74IFPCBA_Testing_Voltage_1#' : [ 565, 1000 ],
							'BOX_LNB_3S_CSSATS_LBAND_1#' 	  : [ 1185, 1000 ],
							'BOX_LNB_DTV_L-Band_1#' 		  : [ 928, 1000 ],
							'BOX_LNB_DTV_L-Band_7#' 		  : [ 1120, 1000 ],
							'BOX_LNB_HEAS_GPADC_Test_03#' 	  : [ 730, 980 ],
							'BOX_LNB_HEAS_MOCA_Test_01#' 	  : [ 793, 980 ],
							'BOX_LNB_HEAS_GPADC_Test_02#' 	  : [ 695, 980 ],
							'BOX_LNB_HEAS_MOCA_Test_02#' 	  : [ 826, 980 ],
							'BOX_LNB_HEAS_MOCA_Test_03#' 	  : [ 860, 980 ],
							'BOX_IFPCBA_72_EC_Testing_01#' 	  : [ 565, 980 ],
							'BOX_IFPCBA_73_E_Testing_01#' 	  : [ 630, 980 ],
							'BOX_LNB_3S_CSSATS_LBAND_2#' 	  : [ 1218, 1000 ],
							'BOX_LNB_DTV_L-Band_6#' 		  : [ 1089, 1000 ],
							'BOX_LNB_HEAS_GPADC_Test_01#'  	  : [ 664, 980 ],
							'BOX_IFPCBA_73_E_Testing_02#' 	  : [ 598, 980 ],
							'BOX_LNB_DTV_L-Band_4#' 	  	  : [ 1023, 1000 ],
							'BOX_LNB_DTV_L-Band_8#' 		  : [ 1153, 1000 ],
							'BOX_LNB_HWAS_GPADC_Test_01#' 	  : [ 664, 1000 ],
							'BOX_IFPCBA_72_EC_Testing_02#' 	  : [ 595, 420 ],
							'BOX_LNB_HEAS_GPADC_Test_04#' 	  : [ 762, 980 ],
							'BOX_LNB_HWAS_MOCA_Test_03#' 	  : [ 860, 1000 ],
							'BOX_Nokia_RFB_Test_1#' 		  : [ 780, 930 ],
							'NXT5' 							  : [ 175, 425 ],
							'NXT6' 							  : [ 185, 513 ],
							'YS_L04_01' 					  : [ 446, 345 ],
							'NXT2' 							  : [ 72, 470 ],
							'NXT1' 							  : [ 40, 360 ],
							'YS24_L2_02' 					  : [ 446, 405 ],
							'YS_L2_03' 						  : [ 446, 455 ],
							'NXTA' 							  : [ 595, 360 ],
							'NXTB' 							  : [ 685, 350 ],
							'XPFB1' 						  : [ 685, 410 ],
							'NXTC' 							  : [ 813, 350 ],
							'XPFC' 							  : [ 813, 410 ],
							'NXTD' 							  : [ 940, 350 ],
							'XPFD' 							  : [ 945, 410 ],
							'YS_L03_01' 					  : [ 317, 345 ],
							'YS_L03_02' 					  : [ 317, 405 ],
							'YS_L03_03' 					  : [ 317, 452 ],
							'YS_L04_02' 					  : [ 446, 375 ],
							'YS_L04_03' 					  : [ 446, 540 ],
							'NXT3' 							  : [ 165, 360 ],
							'YV_L1_02' 						  : [ 317, 375 ],
							'NXT4' 							  : [ 165, 385 ],
							'YS_L1_03' 						  : [ 317, 535 ],
							'XPFB2' 						  : [ 685, 480 ],
						},
						markPoint : {
							symbolSize : 0,
							data : [ 
								{name : 'BOX_LNB_DTV_L-Band_2#'},
								{name : 'BOX_LNB_HWAS_GPADC_Test_02#'},
								{name : 'BOX_LNB_HWAS_GPADC_Test_03#'},
								{name : 'BOX_LNB_HWAS_GPADC_Test_04#'},
								{name : 'BOX_LNB_HWAS_MOCA_Test_01#'},
								{name : 'BOX_LNB_DTV_L-Band_3#'}, 
								{name : 'BOX_LNB_HWAS_MOCA_Test_02#'},
								{name : 'BOX_74IFPCBA_Testing_Path_2#'},
								{name : 'BOX_74IFPCBA_Testing_Path_1#'},
								{name : 'BOX_LNB_DTV_L-Band_5#'}, 
								{name : 'BOX_74IFPCBA_Testing_Voltage_1#'},
								{name : 'BOX_LNB_3S_CSSATS_LBAND_1#'},
								{name : 'BOX_LNB_DTV_L-Band_1#'},
								{name : 'BOX_LNB_DTV_L-Band_7#'},
								{name : 'BOX_LNB_HEAS_GPADC_Test_03#'},
								{name : 'BOX_LNB_HEAS_MOCA_Test_01#'},
								{name : 'BOX_LNB_HEAS_GPADC_Test_02#'},
								{name : 'BOX_LNB_HEAS_MOCA_Test_02#'},
								{name : 'BOX_LNB_HEAS_MOCA_Test_03#'},
								{name : 'BOX_IFPCBA_72_EC_Testing_01#'},
								{name : 'BOX_IFPCBA_73_E_Testing_01#'},
								{name : 'BOX_LNB_3S_CSSATS_LBAND_2#'},
								{name : 'BOX_LNB_DTV_L-Band_6#'},
								{name : 'BOX_LNB_HEAS_GPADC_Test_01#'},
								{name : 'BOX_IFPCBA_73_E_Testing_02#'},
								{name : 'BOX_LNB_DTV_L-Band_4#'},
								{name : 'BOX_LNB_DTV_L-Band_8#'},
								{name : 'BOX_LNB_HWAS_GPADC_Test_01#'},
								{name : 'BOX_IFPCBA_72_EC_Testing_02#'},
								{name : 'BOX_LNB_HEAS_GPADC_Test_04#'},
								{name : 'BOX_LNB_HWAS_MOCA_Test_03#'},
								{name : 'BOX_Nokia_RFB_Test_1#'},
								{name : 'NXT5'},
								{name : 'NXT6'},
								{name : 'YS_L04_01'},
								{name : 'NXT2'},
								{name : 'NXT1'},
								{name : 'YS24_L2_02'},
								{name : 'YS_L2_03'},
								{name : 'NXTA'},
								{name : 'NXTB'},
								{name : 'XPFB1'},
								{name : 'NXTC'},
								{name : 'XPFC'},
								{name : 'NXTD'},
								{name : 'XPFD'},
								{name : 'YS_L03_01'},
								{name : 'YS_L03_02'},
								{name : 'YS_L03_03'},
								{name : 'YS_L04_02'},
								{name : 'YS_L04_03'},
								{name : 'NXT3'},
								{name : 'YV_L1_02'},
								{name : 'NXT4'},
								{name : 'YS_L1_03'},
								{name : 'XPFB2'},
							]
						}
					} 
				]
			};

			// 为echarts对象加载数据
			myChart.setOption(option);

			// 加载动画
			//myChart.showLoading();

			// 根据抓取数据动态更新
			$.ajax({
				method : 'GET',
				url : 'http://localhost:3596/PISWebSite/GetStationStatus.aspx?Line=SMT',
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

							  // 根据重组的json加载markpoint,刷新状态
							  var idle = {
								  // symbol: 'image://./img/1.png',
								  symbol : 'emptyCircle',
								  symbolSize : 4,
								  /*itemStyle : {
									  normal : {
										  color : '#6f6f6f',
										  // borderColor: '#6f6f6f',
										  borderWidth : 1,
										  label : {show : false}
									  },
									  // emphasis:{label:{show:true}}
								  },*/
								  effect : {
									  show : true,
									  color : '#6f6f6f'
								  },
								  data : obj0,
							  };
							  var run = {
								  symbol : 'emptyCircle',
								  symbolSize : 4,
								  /*itemStyle : {
									  normal : {
										  color : '#388e3c',
										  borderWidth : 1,
										  label : {show : false}
									  },
								  },*/
								  effect : {
									  show : true,
									  color : '#388e3c'
								  },
								  data : obj1,
							  };
							  var alarm = {
								  symbol : 'emptyCircle',
								  symbolSize : 4,
								  /*itemStyle : {
									  normal : {
										  color : '#ffaf00',
										  borderWidth : 1,
										  label : {show : false}
									  },
								  },*/
								  effect : {
									  show : true,
									  color : '#ffaf00'
								  },
								  data : obj2,
							  };
							  var breakdown = {
								  symbol : 'emptyCircle',
								  symbolSize : 5,
								  /*itemStyle : {
									  normal : {
										  color : '#FF0000',
										  borderWidth : 1,
										  label : {show : false}
									  },
								  },*/
								  effect : {
									  show : true,
									  color : '#cb0101'
								  },
								  data : obj3,
							  };

							  // 加载动画
							  myChart.showLoading();

							  myChart.addMarkPoint(0, idle);
							  myChart.addMarkPoint(1, run);
							  myChart.addMarkPoint(2, alarm);
							  myChart.addMarkPoint(3, breakdown);

							  // 结束加载
							  myChart.hideLoading();
						}
			});
});