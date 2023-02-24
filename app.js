// document.getElementById('loan-form').addEventListener('submit' , calculateResult);

document.getElementById('loan-form').addEventListener('submit' , function(e){

    document.getElementById('results').style.display = 'none';

    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResult , 2000);

    e.preventDefault();
});

function showLoader(){
    document.getElementById('loading').style.display = 'bloack';
}

function checkAmountValue(val){
    if(val>1000000 && val<0){
        alert('Please Enter value in Between Range 1 to 10lakh');
    }else if(val == ''){
        alert('Please Enter a amount value');
    }else if(val=="^[0-9]+$"){
        alert('please enter only numbers');
    }else{
        console.log('correct');
    }
}

function checkInterestvalue(val){
  if(val == ''){
    alert('Please enter a interest value');
  }else if(val<0 && val>12){
    alert('Please enter a value in between 1 to 12');
  }else{
    console.log('correct');
  }
}

function checkYearvalue(val){
    if(val == ''){
        alert('please give a value');
    }else if(val < 1 && val>5){
        alert('I provide loan in between 1 to 5 year');
    }else{
        console.log('correct');
    }
}



function calculateResult(e){
    let amount = document.getElementById('amount');
    let interest = document.getElementById('interest');
    let year = document.getElementById('years');
    // console.log(typeof(year.value));

    checkAmountValue(amount.value);
    checkInterestvalue(interest.value);
    checkYearvalue(year.value);

    amount = parseInt(amount.value);
    interest = parseInt(interest.value);
    year = parseInt(year.value);
 
    // console.log(typeof(year));

    let totalAmount = amount;
    
    for(let i =  0 ; i<year ; i++ ){
        totalAmount += (totalAmount*(interest))/100;
        // console.log(typeof(year.value));
    }
    // console.log(totalAmount);
    
    const totalPayment = document.getElementById('total-payment');
    totalPayment.value = totalAmount.toFixed(2);

    const monthlyPayment = document.getElementById('monthly-payment');
    monthlyPayment.value = (totalAmount/(year*12)).toFixed(2);

    const ExtraPay = document.getElementById('total-interest');
    ExtraPay.value = (totalAmount - amount).toFixed(2);

    document.getElementById('results').style.display = 'block';
    document.getElementById('loading').style.display = 'none';

    
    // e.preventDefault();

}