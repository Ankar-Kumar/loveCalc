

function checkLove(){
    const name=document.querySelector('#name').value;
    const lname=document.querySelector('#lname').value;

    if(name=="" || lname==""){
        alert("please enter name")
    }else if(name.length<=2 || lname.length<=2){
        alert("enter atleast 3 charecter");
    }else if((!isNaN(name)) || (!isNaN(lname))){
        alert("number is not allowed");
    }else{
        let val=Math.floor(Math.random()*100)+1;
        if(val+50<100) val=50+val;
        document.querySelector('.love').innerHTML=`${val}%`;
    }
   
}