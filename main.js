var valueArray = [];
var zs = /^[0-9]*[1-9][0-9]*$/; 
function renderDiv (){
	var divs = document.getElementsByTagName("div");
	divs[0].innerHTML = "";
	for (var i = 0; i < valueArray.length; i++) {
		divs[0].innerHTML = divs[0].innerHTML + "<li>" + valueArray[i] + "</li>";
		}
}
function initIuput (){
	alert("请输入正整数！");
		document.getElementById("in").value = "";
		document.getElementById("in").focus();
}
function leftIn() {
	var inputValue = document.getElementById("in").value.trim();
	if (!zs.test(inputValue)) {
		initIuput();
	} else {
		valueArray.unshift(inputValue);
		renderDiv();	
	}
		
}
function leftOut() {
	var inputValue = document.getElementById("in").value.trim();
	if (!zs.test(inputValue)) {
		initIuput();
	} else {
		valueArray.shift();
		renderDiv();
	}		
}
function rightIn() {
	var inputValue = document.getElementById("in").value.trim();
	if (!zs.test(inputValue)) {
		initIuput();
	} else {
		valueArray.push(inputValue);
		renderDiv();
	}				
}
function rightOut() {
	var inputValue = document.getElementById("in").value.trim();
	if (!zs.test(inputValue)) {
		initIuput();
	} else {
		valueArray.pop();
		renderDiv();
	}
}				
	
buttons = document.getElementsByTagName("button");
window.onload = function(){
	buttons[0].onclick = leftIn;
	buttons[1].onclick = rightIn;
	buttons[2].onclick = leftOut;
	buttons[3].onclick = rightOut;
};	
