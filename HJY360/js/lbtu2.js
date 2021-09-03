function lbtu2(){
	//精选好货
	var ajxhh = document.querySelectorAll(".divb23-1")
	var tt;
	index = -1
	function jxhhxh(){
		for(var i=0;i<ajxhh.length;i++){
			ajxhh[i].style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)"
		}
		ajxhh[index].style.boxShadow = "5px 5px 5px 5px rgba(0,0,0,0.6)"
	}
	jxhhplay()
	function jxhhplay(){
		clearInterval(tt)
		tt = setInterval(function(){
			index++
			if(index>ajxhh.length-1){index=0}
			jxhhxh()
		},1500)
	}
}