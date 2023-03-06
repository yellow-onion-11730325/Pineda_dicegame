function roll(){
    var val = parseInt(Math.random()*6)+1;
    document.getElementById("dface").innerHTML=val;

    if(val > 3){
        document.getElementById("dmsg").innerHTML = 'You rolled '+val+'. You <span class="text-primary">win</span>!';
    } else{
        document.getElementById('dmsg').innerHTML = 'You rolled '+val+'. You <span class="text-danger">lose</span>!';
    }
}