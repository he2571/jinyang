function byrx(){
	var ali = document.querySelectorAll(".cc1")
	var lis = [
		{jj:"女装新品热卖"},
		{jj:"男装新品热卖"},
		{jj:"雪纺衫新品热卖"},
		{jj:"蕾丝材质女装"},
		{jj:"连衣裙特价"},
		{jj:"当季流行小西装"},
		{jj:"短靴特卖"},
		{jj:"运动鞋特卖"},
		{jj:"打底衫热卖"},
		{jj:"短外套特卖"},
		{jj:"卫衣新品"},
		{jj:"打底裤特价"}
	]
	for(var i=0;i<ali.length;i++){
		var str = ''
		str += '<img src="img/2/c/0'+(i+1)+'.png"/><p class="cc1-p">'+lis[i].jj+'</p><a class="cc1-2" href="#">立即抢购</a>'
		ali[i].innerHTML = str
	}
}