var check = 0;
document.getElementsByClassName("clickable")[0].onclick=function(){
    if(check == 1){
        var change = document.getElementsByClassName("followers")[0].innerHTML;
        var up = parseInt(change,10) - 1 ; 
        document.getElementsByClassName("followers")[0].innerHTML = up;
        this.innerHTML="Follow";
        --check;
        return;
    }
    var change = document.getElementsByClassName("followers")[0].innerHTML;
    var up = parseInt(change,10) + 1 ; 
    document.getElementsByClassName("followers")[0].innerHTML = up;
    this.innerHTML="Following";
    ++check;
};

document.getElementsByClassName("btn")[1].onclick = function(){
    alert("This feature is not available!");
}