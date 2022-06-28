function status(){
    var output = document.getElementById("input").value;
    // console.log(output)
if(output == 'open'){
    document.getElementById('command').innerHTML = "We are Open";

}
else{
    document.getElementById('command').innerHTML = "We are Close";

}
}
var button = document.getElementById('submit');
button.addEventListener('click', status)
