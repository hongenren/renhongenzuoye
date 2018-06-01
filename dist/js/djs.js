
												setInterval(function(){
													function getDiffDays(date1,date2){
														var ss = Math.abs(date1-date2)/1000;
														
//														var days = Math.floor(ss/24/3600);
														var hours = Math.floor(ss/3600);
														var minutes = Math.floor(ss/60%60);
														var seconds = Math.floor(ss%60);
														
														
														return "<span>剩余:</span><i>"+hours+"</i>小时<i>"+minutes+"</i>分<i>"+seconds+"</i>秒";
														
													}
													var racetime=document.getElementsByClassName("racetime")
														var data1=new Date()
													
														var data2 = new Date("2018/6/01 12:12:12");
														var gete= getDiffDays(data2,data1)
														for(var i=0;i<racetime.length;i++){
															
														
														racetime[i].innerHTML=gete
														}
//														console.log(racetime)
														},1000)
												
												<!--倒计时结束-->
