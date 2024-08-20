const select = document.getElementById('form');
const display = document.getElementById('display');
const additional = document.getElementById('add')

function Select(){
    if(select.value === "business" || select.value === "pro" || select.value === "medics"){
        additional.disabled = false;
        display.innerHTML = select.value;
    }else{
        additional.disabled = true;
    }
}