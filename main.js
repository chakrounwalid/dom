let likes = document.getElementsByClassName("like");
 
   for (let i = 0 ; i < likes.length; i++) {
      let f = likes[i];
        f.addEventListener("click",function(){
           if( f.style.color =="red"){
            f.style.color ="black";
           }
           else{
            f.style.color ="red";
           }
       
        }); 
      
     }
  

   let del = document.getElementsByClassName('delete')

       for (let j = 0 ; j < del.length ; j++) {
          let d= del[j]
          d.addEventListener("click" , function(){  
          d.parentElement.remove()
          sum();
    });
}

let pluss = document.getElementsByClassName('plus-btn')

for ( let a = 0 ; a < pluss.length ; a++) {
   let p = pluss[a]
   p.addEventListener("click" , function(){  
   p.previousElementSibling.value++
   sum();
}); 
}

let minuss = document.getElementsByClassName('minus-btn')

for ( let b = 0 ; b < minuss.length ; b++) {
   let  m = minuss[b];
    m.addEventListener("click" , function(){
      
       if(m.nextElementSibling.value>1){  
        m.nextElementSibling.value--;
        sum();
       }
}); 
}

 var items = document.getElementsByClassName('Item');
 var total = document.getElementById('finalPrice');

 function sum(){
  let  s = 0 ;
   for ( let i=0 ; i < items.length; i++){
   let item = items[i];
   s =
    s + 
   item.querySelector(".price").innerText * item.querySelector(".Quant").value;
 }
 return total.value=s;
}
sum();
