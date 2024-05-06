

let button = document.getElementById('boton');

button.addEventListener('click', () => {
    const altura = parseInt(document.getElementById('altura').value);
    const peso = parseInt(document.getElementById('peso').value);
    const result = document.getElementById('resultado');
    let EstadoAltura=false, EstadoPeso=false;

    // Altura

    if(altura === '' || isNaN(altura) || (altura <= 0)) {
        document.getElementById('ErrorAltura').innerHTML = "Por favor, introduzca un número válido para la altura"
    }else{
        document.getElementById('ErrorAltura').innerHTML = '';
        EstadoAltura=true;
    }

    // Peso

    if(peso === '' || isNaN(peso) || (peso <= 0)) {
        document.getElementById('ErrorPeso').innerHTML = "Por favor, introduzca un número válido para el peso"
    }else{
        document.getElementById('ErrorPeso').innerHTML = '';
        EstadoPeso=true;
    }

    // Cálculo

    if(EstadoAltura && EstadoPeso){
        const imc = (peso / ((altura*altura)/10000)).toFixed(1);

    // Resultados
    if (imc < 18.6) {
        result.innerHTML = 'Bajo peso: ' + imc;
        console.log('Bajo peso: ' + imc);
    } else if (imc >= 18.6 && imc < 24.9) {
        result.innerHTML = 'Peso normal: ' + imc;
        console.log('Peso normal: ' + imc);
    } else {
        result.innerHTML = 'Sobrepeso: ' + imc;
        console.log('Sobrepeso: ' + imc);
    }
} else {
    alert('El formulario contiene algún error');
    result.innerHTML = '';
    console.log('El formulario contiene algún error');
}
});