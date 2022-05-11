 
var arr = [];

console.log(document.querySelector('#submitBtn'))

let submitBtn= document.querySelector('#submitBtn');
var number = 0
submitBtn.addEventListener('click', e =>{
    e.preventDefault();
    const text = document.querySelector('#text-input').value
    // const newTime = document.querySelector('#text-time').value

    const newTime = document.getElementById('text-time').value = 
    new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit', second:'2-digit'});
   const checkBox = document.querySelector('#check').checked
   
  
    const newLi = document.createElement('li')
    newLi.setAttribute('class', 'h1 list-group-item')
    const newGettime = document.createElement('span')
    newGettime.setAttribute('class','h3 color-grey')
    const delBtn = document.createElement('button')
    delBtn.setAttribute('class','ml-6 btn btn-danger')
    delBtn.setAttribute('id','delBtn1')
    newGettime.textContent = newTime
    newLi.textContent = text;
     newLi.appendChild(newGettime)
     delBtn.innerText = ('Delete');
     newLi.appendChild(delBtn)
     setTimeout(()=>{colorCh(newLi,checkBox)},0)
     document.querySelector('ul').appendChild(newLi)
 // delete item from list
     function delItem(){
       newLi.parentNode.removeChild(newLi);
     }
     delBtn.addEventListener('click', delItem)
 })
    function colorCh(newLi,checkbox){
    if(checkbox){
    newLi.classList.add('plus')
    }else{
    newLi.classList.add('minus')
    }}
    
//     function delBtn(arr){
//       arr.filter((key,index) => {
//         return index !== arr.key
//       })
//     }
    
//     if(document.getElementById('#delBtn1')){
//       document.getElementById('#delBtn1').addEventListener('click',()=>{
//         return 
//       })
//     }

    

   
       
