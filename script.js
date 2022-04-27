

function checkLove(){
    let val=Math.floor(Math.random()*100)+1;
    if(val+50<100) val=50+val;
    document.querySelector('#love').value=val+"%";
}