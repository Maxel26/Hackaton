// 1.	Escribe una función que reciba una cadena de texto como parámetro y verifique si cumple con los siguientes criterios: debe tener al menos 8 caracteres, contener al menos una letra mayúscula, una letra minúscula y un número. 


function verify(arr) {
    let contMayus = 0;
    let contMinus = 0;
    let num = 0;
    if(arr.length >= 8)
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == arr[i].toUpperCase()){
            contMayus++
        };
        if(arr[i] != arr[i].toUpperCase()){
            contMinus++
        };
        if(arr[i] > '0' && arr[i] < '9' ){
            num++
        };
    }
    if(contMayus > 0 && contMayus > 0 && num > 0){
        return true
    }else{
        return false
    }
}
console.log(verify('axelaA1a'));




