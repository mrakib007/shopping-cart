document.getElementById('plus-btn').addEventListener('click',function(){
    let phonePlus = document.getElementById('phone-quantity').value;
    let newCount = parseInt(phonePlus) + 1;
    document.getElementById('phone-quantity').value =  parseInt(newCount);
    document.getElementById('phone-price').innerText = newCount * 1219;
    calculation();
 });
 document.getElementById('minus-btn').addEventListener('click',function(){
 let phoneMinus = document.getElementById('phone-quantity').value;
 let newCount = 0;
 if(parseInt(phoneMinus)>0){
 newCount = parseInt(phoneMinus)-1;
 }
 document.getElementById('phone-quantity').value =  parseInt(newCount);
 document.getElementById('phone-price').innerText = newCount * 1219;
 calculation();
});

document.getElementById('case-plus').addEventListener('click',function(){
    let casePlus = document.getElementById('case-quantity').value;
    let newCount = parseInt(casePlus) + 1;
    document.getElementById('case-quantity').value =  parseInt(newCount);
    document.getElementById('case-price').innerText = newCount * 59;
    calculation();
 });
 document.getElementById('case-minus').addEventListener('click',function(){
 let caseMinus = document.getElementById('case-quantity').value;
 let newCount = 0;
 if(parseInt(caseMinus)>0){
 newCount = parseInt(caseMinus)-1;
 }
 document.getElementById('case-quantity').value =  parseInt(newCount);
 document.getElementById('case-price').innerText = newCount * 59;
 calculation();
});
function calculation(){
  let phone = parseInt( document.getElementById('phone-quantity').value);
  let caseQ = parseInt( document.getElementById('case-quantity').value);
  let calculation1 = phone*1219 + caseQ*59;
  let tax = parseInt(phone*1219*0.1 + caseQ*59*0.1) ; 
  document.getElementById('subtotal').innerText = calculation1;
  document.getElementById('tax').innerText = tax;
  document.getElementById('grand-total').innerText = calculation1 + tax;
}