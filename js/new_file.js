//seach 搜索的借口
	var atxt=document.getElementsByClassName("seach-fm")[0];
	var alist=document.getElementsByClassName("seach-jk")[0];
		atxt.oninput=function(){
			var script=document.createElement("script");
			
			script.src="http://list.jiuxian.com/assKeyWords.htm?t=1527407450687&callback=jsonp&wd="+atxt.value+"&area=2&searchUserKey=ff0ae2d3-f488-163f-9f50-58e0042f5548&randomTest=0.7064751299023635&_=1527407312986";	
			document.body.appendChild(script);
			document.body.removeChild(script);
			alist.style.display="block"
	}
	
		
	
	function jsonp(data){
			var str="";
			var ara=[];
			var arr=data.resultList;
			console.log(arr)
		if(data.resultList){
			
	
		for(var i=0;i<arr.length;i++){
			str+="<li><p><a href='list.jiuxian.com/search.htm?key="+arr[i].word+"'>"+arr[i].word+"</a></p><p>约"+arr[i].count+"件商品</p></li>"
			
		}
			console.log(str)
			alist.innerHTML=str;	
		}
		
	}
		atxt.onmouseover=function(){
			alist.style.display="none"
		}
//seach 搜索的借口结束

//轮播图效果

//结束