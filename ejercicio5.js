// 5.Escribe una función que reciba un número como parámetro y determine si es un número primo. Devuelve true si es primo y false si no lo es. 

function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true ;
}
console.log(esPrimo(6));