// 4.	Escribe una función que reciba una cadena de texto como parámetro y devuelva la cantidad de vocales que contiene. 


function contarVocales(vocales){
    vocales = vocales.toLowerCase();
    let contador = 0;
    for (let i = 0; i < vocales.length; i++) {
        if(vocales.charAt(i) == 'a'|| vocales.charAt(i) == 'e' || vocales.charAt(i) == 'i' || vocales.charAt(i) == 'o' || vocales.charAt(i) == 'u' )
        contador++ ;
    }    
    return contador;
}
console.log(contarVocales('Aeiou'));
console.log(contarVocales('Hola'));