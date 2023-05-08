const main = document.querySelector('.main');



let i = 0;
let sum = 0;

for(i=0; i <= 100; i++){
    sum+=i
}

main.textContent = sum;