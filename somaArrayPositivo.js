let array = [-2, 4, 3, -5, 6];
/* let soma = 0;
for(let i = 0; i < array.length;i++){
    if(array[i] > 0){
        soma = soma + array[i];
    }
}
console.log(soma); */
function somaPositivo(array){
    let soma = 0;
    for(let i = 0; i < array.length;i++){
        if(array[i] > 0){
            soma = soma + array[i];
        }
    }
    return soma;
}
console.log(somaPositivo(array));
