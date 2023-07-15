// 6.	Escribe una función que reciba un número como parámetro y devuelva el factorial de ese número. El factorial de un número se obtiene multiplicando todos los números enteros desde 1 hasta el número dado. 


function factorial (n) {
	let total = 1; 
	for (i = 1; i <= n; i++) {
		total = total * i; 
        console.log(total);
	}
	return total; 
}
console.log(factorial(3));