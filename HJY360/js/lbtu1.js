function lbtu1(){
	//轮播图区域
	var olis = document.querySelector(".lbt-lis")
	var albt = document.querySelectorAll(".lbt-lis li")
	var oleft = document.querySelector(".aa1-left")
	var oright = document.querySelector(".aa1-right")
	var add = document.querySelectorAll(".dd li")
	var tt = null,index = 0;
	//可以调用的图片轮播 函数
	function lbtp(){
		for(var i=0;i<albt.length;i++){
			albt[i].style.display = "none"
			add[i].style.background = "#fff"
		}
		albt[index].style.display = "block"
		add[index].style.background = "#ff5550"
	}
	oright.onclick = function(){
		index++
		if(index>albt.length-1){index=0}
		lbtp()
	}
	oleft.onclick = function(){
		index--
		if(index<0){index=albt.length-1}
		lbtp()
	}
	for(var i=0;i<add.length;i++){
		add[i].setAttribute("xb",i) //给 dd 里的所有 li 添加 xb属性  属性值为 i
		add[i].onclick = function(){
			index = this.getAttribute("xb")*1 //点击那个小圆点 index 就等于这个小圆点属性 xb 的值
			lbtp()
		}
	}
	autoplay()
	//定时器
	function autoplay(){
		clearInterval(tt)
		tt = setInterval(function(){
			index++
			if(index>albt.length-1){index=0}
			lbtp()
		},3000)
	}
	//划入划出控制定时器
	//划入
	olis.onmouseover = function(){
		clearInterval(tt)
	}
	//划出
	olis.onmouseout = function(){
		autoplay()
	}
}
