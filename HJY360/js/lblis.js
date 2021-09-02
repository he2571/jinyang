function lblis(){
	var alia = document.querySelectorAll(".aa33 li")
	var arr = ["女装1折","男装1折","韩版女装","时尚女鞋","品牌手机","低价好货","零食饮品","礼物精选"]
	for(var i=0;i<alia.length;i++){
		var str = ''
		str += '<img src="img/2/a/00'+(i+1)+'.png" alt="图片加载失败"/>'
		str += '<span>'+arr[i]+'</span>'
		alia[i].innerHTML = str
	}
}