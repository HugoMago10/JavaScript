/*
    Funciones:
    Una funcion es un bloque de codigo que realiza cierto proceso, se llama y se ejectuta su código
    El nombre de una funcion se escribe inmediatamente después de la palabra function. No pueden haber dos funciones
    con el mismo nombre. El código de la funcion va entre llaves.
*/
function saludo (){ //declarando a la funcion
    console.log ("Hola");
}

saludo (); //Llamando a la funcion

//Funcion de valor absoluto
function valor_absoluto ( valor ){
    return valor < 0 ? -valor : valor; //Operador ternario
}

console.log ( valor_absoluto ( -33 ) );

//************************** Funcion que regresa n / (2^h + 1) *****************************************************

function evalua ( n, h ){
    // 6 / ( 2**3 + 1 ) -> 6/9
    return n / denominador( h );
}

function denominador ( h ){
    return Math.pow (2, h ) + 1;
}

console.log ( evalua (6, 3 ) );

//*************************** Variables Locales *******************************************************/
function despedida (){
    let message = 'Adios!';

    console.log ( message );
}

despedida ();

//***************** Parametros con textos predeterminados */
function punto ( x = 10, y = 20 ){
    console.log ("Posicion: x: " + x + " y: " + y );
}

punto ();

//*************************** undefined *******************/
//Una funcion que no regresa nada es lo mismo que regrese undefined
console.log ( punto() ); //punto regresa undefined

//**********************************verifica si es primo*************************************************/
function numPrimos ( n ){
    listaPrimos = new Array();

    for ( i = 0; i < n; i++ ){
        if ( !isPrimo ( i ) )
            continue;
        listaPrimos.push ( i )
    }
    listaPrimos.forEach(element => console.log ( element ) );
}

function isPrimo ( n ){
    for ( let i = 2; i < n; i++ ){
        if ( n % i == 0 )//si el numero tiene varias divisores.
            return false;
        return true;
    }
}

numPrimos ( 17 );