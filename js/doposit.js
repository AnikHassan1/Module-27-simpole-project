document.getElementById('btn-deposit').addEventListener('click',function(){

    const depositField=document.getElementById('Deposit-amount');
    const newDepositAmout=depositField.value;

    const newDepositvalue=parseFloat(newDepositAmout);

    const  depositTotalElement=document.getElementById('deposit-total');
    const  priviusDepositTotalString=depositTotalElement.innerText;
    const priviusTotal=parseFloat(priviusDepositTotalString);
// step 6  : add numbers set the total deposit amout
const currentAmount=priviusTotal+newDepositvalue;
depositTotalElement.innerText=currentAmount;
// step5: get Ballance Add Deposit
const BallanceTotalElement=document.getElementById('Balance');
const totalBallanceString=BallanceTotalElement.innerText;
const totalBallanc=parseFloat(totalBallanceString);
const depositTotalBallance= totalBallanc+newDepositvalue;
BallanceTotalElement.innerText= depositTotalBallance;
    // step &: clear the deposit field
    depositField.value='';
})