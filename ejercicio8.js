// 8.	Escribe una función que reciba una cadena de texto como parámetro y determine si es un palíndromo. Un palíndromo es una palabra o frase que se lee igual de izquierda 

function palindromo(word) {
    let spl = word.split('')
    spl.reverse();
    let neWord = ''
    spl.forEach(element => {
        neWord += element
    });
    if(neWord == word){
        return true
    }else {
       return false
    }
}
console.log(palindromo('oso'));
