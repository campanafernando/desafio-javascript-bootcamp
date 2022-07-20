var numeroatualWrapper = document.getElementById('numeroatual');
var numeroatual = 0;

function increment() {
    numeroatual = numeroatual + 1;
    numeroatualWrapper.innerHTML = numeroatual;
    
    
}

function decrement() {
    numeroatual = numeroatual - 1;
    numeroatualWrapper.innerHTML = numeroatual;
   
}

