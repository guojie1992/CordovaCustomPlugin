function success(str){
alert(str);
}

function error(str){
alert(str);
}
document.getElementById("demo").onclick=function(){
window.cordova.plugins.test.coolMethod1("This is a Demo",success,error);
};