function onCalcBtnClick(event) {
    let inputExp = document.querySelector('.formControl');
    inputExp.value = inputExp.value + event.target.innerText;
}

function clean(event) {
    let inputExp = document.querySelector('.formControl');
    inputExp.value = inputExp.value + event.target.innerText;
    if(event.target.innerText == 'C'){
        inputExp.value = "";
    }
}

function back(event) {
    let inputExp = document.querySelector('.formControl');
    inputExp.value = inputExp.value + event.target.innerText;
    if(event.target.innerText == '<'){
        let exp = inputExp.value;
        inputExp.value = exp.substring(0, exp.length-2);
    }
}

function OnCalcExpr(event) {
    var inputExp = document.querySelector('.formControl');
    var result = eval(inputExp.value);
    inputExp.value = result;
}

function documentReady() {
    let allCalcButtons = document.getElementsByClassName('calculator__button');
    for(let i = 0; i < allCalcButtons.length; ++i){
        allCalcButtons[i].addEventListener('click', onCalcBtnClick);
    }
    let btnAdd = document.getElementById('result');
    btnAdd.addEventListener('click', OnCalcExpr);

    let btnClean = document.getElementById('clean');
    btnClean.addEventListener('click', clean);

    let btnBack = document.getElementById('back');
    btnBack.addEventListener('click', back);
}

document.addEventListener('DOMContentLoaded', documentReady);