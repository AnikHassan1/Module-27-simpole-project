document.getElementById('btn-withdew').addEventListener('click',function(){
// step 1 : set the input value field 
 const withdewfield=document.getElementById('withdraw-amout');
 const withdrewAmout=withdewfield.value;
  const withdewAmoutString=parseFloat(withdrewAmout);



//   step 2: withdew text

const withdewElement=document.getElementById('withdraw-total');
const withdrew=withdewElement.innerText;
const withdewString=parseFloat(withdrew);



const withDrewCurren=withdewAmoutString + withdewString;
withdewElement.innerText=withDrewCurren;
// step 3: Balance theke Addscture

const BalanceField=document.getElementById('Balance');
const ballansevalue=BalanceField.innerText;
const ballanceString=parseFloat(ballansevalue);

const TotalBallanc=ballanceString - withdewAmoutString;
BalanceField.innerText=TotalBallanc;
// step 4 : clear The Input Value
withdewfield.value='';
})