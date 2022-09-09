function delate(){
document.getElementById("myResult").value =""
}
function Calculator (newValue){
    document.getElementById("myResult").value += newValue //this is += concat keyValue add; value is a attrubute this is create value attrubute 
}
function finalAnswer (){
    let a = document.getElementById("myResult").value;
    let b = eval(a);//eval is a calculat stringValue and convert any string to number this is convert only NumberString like "22 + 22" after conver 22 + 22 = 44 
    document.getElementById("myResult").value = b;
}

