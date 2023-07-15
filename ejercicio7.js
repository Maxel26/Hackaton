// 7.	Escribe una función que reciba una cadena de texto como parámetro y devuelva la palabra más larga encontrada en la cadena. 

function palabraLarga(word) {
    let sepEspa = word.split(' ')
    let masLarga = sepEspa[0]
    for (const palabra of sepEspa) {
        if (palabra.length >= masLarga.length) {
            masLarga = palabra;
        }
    }
    return masLarga ;
}

console.log(palabraLarga('Hola Mundo je'));
console.log(palabraLarga('Programacion orienta a'));