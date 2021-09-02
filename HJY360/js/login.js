var logina = $('[name=login]');
var register = $('[name=register]');
var odiv = $('.odiv');
var loginD = $('.loginD');
var shopD = $('.shopD');
var nexta = $('.nexta');
var nextb = $('.nextb');
var huad = $('.huad');
var xhuad = $('.xhuad');
var dx,dy;
var ex = huad.offsetWidth - xhuad.offsetWidth;
var ey = huad.offsetHeight - xhuad.offsetHeight;
var userA = $('.userA');
var passA = $('.passA');
var code = $('.code');
var userB = $('.userB');
var passB = $('.passB');
var loginB = $('[name=loginB]');
var shopB = $('[name=shopB]');
var u_reg = /^[\w$]{6,12}$/;
var p_reg = /^[\da-zA-Z]{6,8}$/;
var flag = false;

// 登录注册显示隐藏
logina.onclick = function(){
	loginD.style.opacity = 1;
	loginD.style.zIndex = 70;
	shopD.style.zIndex = 50;
	shopD.style.opacity = 0;
}
register.onclick = function(){
	shopD.style.opacity = 1;
	shopD.style.zIndex = 70;
	loginD.style.zIndex = 50;
	loginD.style.opacity = 0;
}
nexta.onclick = function(){
	loginD.style.opacity = 0;
}
nextb.onclick = function(){
	shopD.style.opacity = 0;
}

// 注册页的解锁
xhuad.onmousedown = function(e){
	dx = e.clientX - xhuad.offsetLeft;
	dy = e.clientY - xhuad.offsetTop;
	xhuad.onmousemove = function(e){
		xhuad.style.left = e.clientX - dx + 'px';
		xhuad.style.top = e.clientY - dy + 'px';
		if(xhuad.offsetLeft < 0){
			xhuad.style.left = 0;
		}
		if(xhuad.offsetTop < 0){
			xhuad.style.top = 0;
		}
		if(xhuad.offsetLeft > ex){
			xhuad.style.left = ex + 'px'
		}
		if(xhuad.offsetTop > ey){
			xhuad.style.top = ey + 'px'
		}
	}
	xhuad.onmouseup = function(){
		if(xhuad.offsetLeft >= ex){
			xhuad.style.left = ex + 'px';
			huad.innerText = '已验证';
			huad.style.color = 'green';
		}
		if(xhuad.offsetLeft < ex){
			xhuad.style.left = 0;
		}
		xhuad.onmousemove = null;
	}
}

// 文本框的输出格式
userB.onkeyup = function(){
	this.value = this.value.replace(/[^\w$]/,'');
}
passB.onkeyup = function(){
	this.value = this.value.replace(/[^\da-zA-Z]/,'');
}
userB.onchange = function(){
	if(u_reg.test(this.value)){
		userB.innerText = '';
	}else{
		userB.innerText = '用户名格式错误！';
	}
}
passB.onchange = function(){
	if(p_reg.test(this.value)){
		passB.innerText = '';
	}else{
		passB.innerText = '密码格式错误！';
	}
}
loginB.onclick = function(){
	flag = false;
	if(userA.value === '' || passA.value === ''){
		if(userA.value === ''){
			alert('用户名不能为空！');
		}
		if(passA.value === ''){
			alert('密码不能为空！');
		}
		return;
	}
	for(var i=0;i<shop_arr.length;i++){
		if(userA.value === shop_arr[i].username && passA.value == shop_arr[i].password){
			flag = true;
			break;
		}
		if(!!flag){
			alert('登录成功！');
		}else{
			alert('你还没有注册，请先注册');
		}
	}
	if(userA.value!==''&&passA.value!==''&&code.vlaue!==''){
		if(code.value==passA.value){
			loginD.style.opacity = 0;
		}else{
			alert('两次密码输入不一致，请重新输入');
		}
	}
}
shopB.onclick = function(){
	flag = false;
	if(userB.value === '' || passB.value === ''){
		if(userB.value === ''){
			alert('用户名不能为空！');
		}
		if(passB.value === ''){
			alert('密码不能为空！');
		}
		return;
	}
	if(!u_reg.test(userB.value)||!p_reg.test(passB.value)){
		if(!u_reg.test(userB.value)){
			alert('用户名格式不对！');
		}
		if(!p_reg.test(passB.value)){
			alert('密码格式不对！');
		}
		return;
	}
	if(userB!==''&&passB!==''){
		if(huad.innerText!=='已验证'){
			alert('请滑入验证');
		}else{
			shopD.style.opacity = 0;
			alert('注册成功，请登录');
			flag = false;
		}
		if(flag){
			alert('用户名已经存在!');
			return;
		}
	}
	for(var i=0;i<shop_arr.length;i++){
		if(shop_arr[i].username === userB.value){
			flag = true;
			break;
		}
	}
	shop_arr.push({
		username : userB.value,
		password : passB.value
	});
	cookie.set('username',userB.value);
	cookie.set('password',passB.value);
}