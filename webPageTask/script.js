window.addEventListener('load', ()=>{
    var factorialNumForm = document.getElementById('factorial-num');
        factorialNumForm.addEventListener('submit', factorialNumber)

    var evNumOfOcc = document.getElementById('even-num');
    evNumOfOcc.addEventListener('submit', evenNumOcc)

    var palindromeCheckForm = document.getElementById('palindrome');
    palindromeCheckForm.addEventListener('submit', palindromeCheck)

})


function factorialNumber(event){
    event.preventDefault();
    var parent = event.target;
    var input = parent.querySelector('#input-form-field').value.trim()
   var pEl = parent.querySelector('.result-container');

    input = Number(input)
    var answer = 1;
    if(input < 1 || Number.isNaN(input)){
        parent.reset();
        pEl.textContent = '';
        return;
    }

    for(var i=input; i>=1;i--){
        answer *= i;
    }
    pEl.textContent = answer;
    
}   


function evenNumOcc(event){
    event.preventDefault();
    var parent = event.target;
    var input = parent.querySelector('#input-form-field').value.trim().toLowerCase();
   var pEl = parent.querySelector('.result-container');

    var answer = {};
    if(input.length <= 0){
        parent.reset();
        pEl.textContent = '';
        return;
    }

    for(var i=0; i<input.length;i++){
        if(!answer[input[i]]){
            answer[input[i]] = 1;
        }else {
            answer[input[i]]++;
        }
    }

    for(var key in answer){
        var count = answer[key];
        console.log(count);
        if(count % 2 == 1){
            pEl.textContent ='false'
            return;
        }
    }
    pEl.textContent = 'true';
    
}   


function palindromeCheck(event){
    event.preventDefault();
    var parent = event.target;
    var input = parent.querySelector('#input-form-field').value.trim();
   var pEl = parent.querySelector('.result-container');
   if(input.length == 0 || input.length == 1){
    parent.reset();
    pEl.textContent = '';
    return;
   }
    var reversed = input.split('').reverse().join('');
    if(reversed == input){
        pEl.textContent = 'true';

    }else {
        pEl.textContent = 'false'
    }
    
}   