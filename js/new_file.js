
	var atxt=document.getElementsByClassName("seach-fm")[0];
	var alist=document.getElementsByClassName("seach-jk")[0];
		atxt.oninput=function(){
			var script=document.createElement("script");
			
			script.src="http://list.jiuxian.com/assKeyWords.htm?t=1527407450687&callback=jsonp&wd="+atxt.value+"&area=2&searchUserKey=ff0ae2d3-f488-163f-9f50-58e0042f5548&randomTest=0.7064751299023635&_=1527407312986";	
			document.body.appendChild(script);
			document.body.removeChild(script);
	}
	function jsonp(data){
			var str="";
			var ara=[];
			var arr=data.resultList;
			console.log(arr)
		if(data.resultList){
			
	
		for(var i=0;i<arr.length;i++){
			str+="<p>"+arr[i].word+"</p><p>约"+arr[i].count+"件商品</p>"
			
		}
			console.log(str)
			alist.innerHTML=str;	
		}
		
	}