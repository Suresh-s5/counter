const btn=document.querySelectorAll('.btn');
const number=document.getElementById('h3');
let count=0;
btn.forEach(function(btn){
    btn.addEventListener("click",function(e){
        // console.log(e.currentTarget.classList);
       const classlist= e.currentTarget.classList;
    //    console.log(classlist);
       if(classlist.contains("decrease")){
        count--;

       }
       else if(classlist.contains("increase")){
        count++;

       }
       else{
        count==0;

       }
       
       number.textContent=count;
    })
})