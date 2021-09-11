// Ejercicio 1
alert('EJERCICIO 1');
let ingreseNumero = parseInt(prompt('Ingrese un numero'));

for (ingreseNumero=ingreseNumero; ingreseNumero<=10; ingreseNumero++) {
console.log(ingreseNumero);
}

// Ejercicio 2
alert('EJERCICIO 2');
let producto = prompt('¿Qué te apetece comer? \n\nPizza \nSpaghetti \nEnsalada');
if (producto ==='ESC') {
    alert('Error');
    console.log('Error ESC');
} else if (producto==='Pizza' || producto==='Spaghetti' || producto==='Ensalada'){
    alert('¿' + producto + '?' + '\n¡Buena elección!');
    let unidades = parseInt(prompt('¿Cuantas unidades quieres?'));
    let nombreUsuario = prompt('¿Como te llamas?');
        if (unidades===0 && (producto==='Pizza' || producto==='Ensalada' || producto==='Spaghetti')) {
            alert('¿No tienes hambre ' + nombreUsuario + ' ?');
            console.log('Ningun dato insertado');
        } else if (unidades>1 && producto==='Pizza') {
            alert('¡Ya van las Pizzas! ' + nombreUsuario + '!');
            console.log(unidades + ' Pizzas para ' + nombreUsuario);
        } else if (unidades>1 && producto==='Ensalada') {
            alert('¡Ya van las Ensaladas ' + nombreUsuario + '!');
            console.log(unidades + ' Ensaladas para ' + nombreUsuario);
        } else if (unidades===1 && (producto==='Pizza' || producto==='Ensalada')) {
            alert('¡Ya va la ' + producto + ' ' + nombreUsuario + '!');
            console.log(unidades + ' ' + producto + ' para ' + nombreUsuario);
        } else if (unidades>=1 && producto==='Spaghetti') {
            alert('¡Ya van los Spaghetti ' + nombreUsuario + '!');
            console.log(unidades + ' Spaghetti para ' + nombreUsuario);
        }
} else if (producto!='Pizza' || producto!='Spaghetti' || producto!='Ensalada') {
    alert('Insertar algo');
}



// Ejercicio 3
alert('EJERCICIO 3');
let numeroHola = parseInt(prompt('¿Cuantas veces quieres que te salude?'));
for (let i=1; i<=numeroHola; i++) {
  alert('Hola ' + i)
}