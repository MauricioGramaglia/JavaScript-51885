//DECLARO VARIABLE PARA GUARDAR EL TOTAL GASTADO POR EL USUARIO
let totalsup = 0;


function iniciarTienda()
{
    //MENU INICIAR, CONTIENE LA VARIABLE NOMBRE QUE PREGUNTA ANTES DE EJECUTAR ESTA FUNCION.
    alert('SNAKERS CALZADOS \n BIENVENIDO '+nombre+' \n LA MEJOR EXPERIENCIA DE COMPRA EN LÍNEA LA ENCONTRARÁS AQUÍ');

    //GUARDAMOS LA OPCIÓN QUE INGRESARÁ PARA NAVEGAR EN LA TIENDA, SI ES '1', ENTRARÁ EN EL WHILE Y SE EJECUTARÁ EL CÓDIGO, SI NO, SALDRÁ Y TERMINARÁ LA EJECUCIÓN.
    // ADEMÁS MUESTRO EL TOTAL QUE GASTARÁ EL USUARIO EN LA TIENDA.
    let op = prompt('MENU TIENDA \n 1) COMPRAR ZAPATILLAS \n 2) SALIR \n HAS GASTADO: $'+totalsup+' USD' );

    while(op == 1){

        // SEGUNDO MENÚ QUE PERMITE SELECCIONAR DISTINTAS OPCIONES CON DISTINTOS VALORES A COBRAR.
        let opz = prompt('*ZAPATILLAS* \n 1) CLASICAS 450 $199 USD \n 2) RUNNING 350 $299 USD \n 3) EXCLUSIVAS 500 $399 USD \n ESCOJE UNA OPC.');

        if(opz == 1){
            // DINERO DEL USUARIO
            let val = prompt('PAGAR \n TOTAL $199 USD, INGRESA CON CUANTO PAGAS');

            // VALOR DEL PRODUCTO SELECCIONADO
            let val2 = 199;

            // COMPROBACIÓN DE SI EL DINERO ALCANZA PARA COMPRAR EL PRODUCTO.
            if(val2 > val){

                // ALERTA INDICANDO QUE EL DINERO NO ES SUFICIENTE, DESPUÉS DE ESTO EL PROGRAMA TERMINARÁ.
                alert('DINERO NO SUFICIENTE.');

            }else{
                // DECLARAMOS EL TOTAL DEL VUELTO, Y ADEMÁS LA VARIABLE QUE MOSTRARÁ EL TOTAL QUE HEMOS GASTADO EN LA TIENDA.
                let total = val - val2;
                totalsup = totalsup+val2;
                alert('VUELTO: $'+total+' USD / TOTAL: $'+val2+' USD');

                //VOLVEMOS A MOSTRAR UN MENÚ, SI EL USUARIO INGRESA '1', SE VUELVE A EJECUTAR LA FUNCIÓN Y VUELVE A CARGAR LA TIENDA.
                let op = prompt('OPCIONES \n TOTAL GASTADO: $'+totalsup+' USD \n 1) SEGUIR COMPRANDO \n 2) SALIR');

                if(op == 1){

                    //VUELVE A EJECUTARSE LA TIENDA
                    iniciarTienda();
                }
            }
        }
        if(opz == 2){
            // DINERO DEL USUARIO
            let val = prompt('PAGAR \n TOTAL $299 USD, INGRESA CON CUANTO PAGAS');

            // VALOR DEL PRODUCTO SELECCIONADO
            let val2 = 299;

            // COMPROBACIÓN DE SI EL DINERO ALCANZA PARA COMPRAR EL PRODUCTO.
            if(val2 > val){

                // ALERTA INDICANDO QUE EL DINERO NO ES SUFICIENTE, DESPUÉS DE ESTO EL PROGRAMA TERMINARÁ.
                alert('DINERO NO SUFICIENTE.');
            }else{

                // DECLARAMOS EL TOTAL DEL VUELTO, Y ADEMÁS LA VARIABLE QUE MOSTRARÁ EL TOTAL QUE HEMOS GASTADO EN LA TIENDA.
                let total = val - val2;
                totalsup = totalsup+val2;
                alert('VUELTO: '+total+' / TOTAL: '+val2);

                //VOLVEMOS A MOSTRAR UN MENÚ, SI EL USUARIO INGRESA '1', SE VUELVE A EJECUTAR LA FUNCIÓN Y VUELVE A CARGAR LA TIENDA.
                let op = prompt('OPCIONES \n TOTAL GASTADO: $'+totalsup+' USD \n 1) SEGUIR COMPRANDO \n 2) SALIR');
                if(op == 1){

                    //VUELVE A EJECUTARSE LA TIENDA
                    iniciarTienda();
                }
            }

        }
        if(opz == 3){
            // DINERO DEL USUARIO
            let val = prompt('PAGAR \n TOTAL $399 USD, INGRESA CON CUANTO PAGAS');

            // VALOR DEL PRODUCTO SELECCIONADO
            let val2 = 399;

            // COMPROBACIÓN DE SI EL DINERO ALCANZA PARA COMPRAR EL PRODUCTO.
            if(val2 > val){

                // ALERTA INDICANDO QUE EL DINERO NO ES SUFICIENTE, DESPUÉS DE ESTO EL PROGRAMA TERMINARÁ.
                alert('DINERO NO SUFICIENTE.');
            }else{

                // DECLARAMOS EL TOTAL DEL VUELTO, Y ADEMÁS LA VARIABLE QUE MOSTRARÁ EL TOTAL QUE HEMOS GASTADO EN LA TIENDA.
                let total = val - val2;
                totalsup = totalsup+val2;
                alert('VUELTO: '+total+' / TOTAL: '+val2);

                //VOLVEMOS A MOSTRAR UN MENÚ, SI EL USUARIO INGRESA '1', SE VUELVE A EJECUTAR LA FUNCIÓN Y VUELVE A CARGAR LA TIENDA.
                let op = prompt('OPCIONES) \n TOTAL GASTADO: $'+totalsup+' USD \n 1) SEGUIR COMPRANDO \n 2) SALIR');
                if(op == 1){
                    

                    //VUELVE A EJECUTARSE LA TIENDA
                    iniciarTienda();
                }
            }
        }else{

        }
        break;
    }
    alert("SNAKERS CALZADOS \n GRACIAS POR PREFERIR SNAKERS CALZADOS");
}

const nombre = prompt('Hola! Bienvenido a SNAKERS CALZADOS, ¿Cómo te llamas?');
alert('Hola '+nombre+' ¿Cómo estás?');
iniciarTienda();