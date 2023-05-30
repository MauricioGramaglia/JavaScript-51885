//DECLARO VARIABLE PARA GUARDAR EL TOTAL GASTADO POR EL USUARIO
let totalsup = 0;

function Usuario(userName,password,email)
{
    this.userName = userName;
    this.password = password;
    this.email = email;

}

//ARRAY DE ZAPATILLAS CREADA PARA GUARDAR INFORMACIÓN A UTILIZAR
const zapatillas = [
    {
        id: 1,
        title: 'CLASICAS 450',
        price: 199,
    },
    {
        id: 2,
        title: 'RUNNING 350',
        price: 299,
    },
    {
        id: 3,
        title: 'TRAINNING 500',
        price: 399,
    },
    {
        id: 4,
        title: 'EXCLUSIVAS 550',
        price: 499,
    },        

];



function iniciarTienda()
{
    //MENU INICIAR, CONTIENE LA VARIABLE NOMBRE QUE PREGUNTA ANTES DE EJECUTAR ESTA FUNCION.
    alert('SNAKERS CALZADOS \n BIENVENIDO '+newUser.userName+' \n LA MEJOR EXPERIENCIA DE COMPRA EN LÍNEA LA ENCONTRARÁS AQUÍ');


    let op = prompt('MENU TIENDA \n 1) COMPRAR ZAPATILLAS \n 2) DATOS DEL USUARIO \n 3) BUSCAR O FILTRAR \n 4) SALIR \n HAS GASTADO: $'+totalsup+' USD' );

    while(op == 1){

        // SEGUNDO MENÚ QUE PERMITE SELECCIONAR DISTINTAS OPCIONES CON DISTINTOS VALORES A COBRAR.

        for (const zapatilla of zapatillas) {
            alert(' ZAPATILLAS \n OPCIÓN '+zapatilla.id+' '+zapatilla.title+' \n Valor: '+zapatilla.price+' ');
        }
        
        let opz = prompt(' * \n 1) CLASICAS 450 $199 USD \n 2) RUNNING 350 $299 USD \n 3) TRAINNING 500 $399 USD \n 4) EXCLUSIVAS 550 $499 USD \n ESCOJE UNA OPC.');
        if(opz == 1){

            let val = prompt(' PAGAR)  * \n TOTAL $199 USD, INGRESA CON CUANTO PAGAS');

            let val2 = 199;

            if(val2 > val){

                alert('DINERO NO SUFICIENTE.');

            }else{
                let total = val - val2;
                totalsup = totalsup+val2;
                alert('VUELTO: $'+total+' USD / TOTAL: $'+val2+' USD');

                let op = prompt(' OPCIONES) \n TOTAL GASTADO: $'+totalsup+' USD \n 1) SEGUIR COMPRANDO \n 2) SALIR');

                if(op == 1){

                    //VUELVE A EJECUTARSE LA TIENDA
                    iniciarTienda();
                }
            }
        }
        if(opz == 2){
            let val = prompt(' PAGAR \n TOTAL $299 USD, INGRESA CON CUANTO PAGAS');

            let val2 = 299;

            if(val2 > val){

                alert('DINERO NO SUFICIENTE.');
            }else{

                let total = val - val2;
                totalsup = totalsup+val2;
                alert('VUELTO: '+total+' / TOTAL: '+val2);

                let op = prompt(' OPCIONES) \n TOTAL GASTADO: $'+totalsup+' USD \n 1) SEGUIR COMPRANDO \n 2) SALIR');
                if(op == 1){

                    //VUELVE A EJECUTARSE LA TIENDA
                    iniciarTienda();
                }
            }

        }
        if(opz == 3){
            let val = prompt(' PAGAR \n TOTAL $399 USD, INGRESA CON CUANTO PAGAS');

            let val2 = 399;

            if(val2 > val){

                alert('DINERO NO SUFICIENTE.');
            }else{

                let total = val - val2;
                totalsup = totalsup+val2;
                alert('VUELTO: '+total+' / TOTAL: '+val2);

                let op = prompt(' OPCIONES \n TOTAL GASTADO: $'+totalsup+' USD \n 1) SEGUIR COMPRANDO \n 2) SALIR');
                if(op == 1){

                    iniciarTienda();
                }
            }
        }if(opz == 4){
            let val = prompt(' PAGAR \n TOTAL $499 USD, INGRESA CON CUANTO PAGAS');

            let val2 = 499;

            if(val2 > val){

                alert('DINERO NO SUFICIENTE.');
            }else{

                let total = val - val2;
                totalsup = totalsup+val2;
                alert('VUELTO: '+total+' / TOTAL: '+val2);

                let op = prompt(' OPCIONES \n TOTAL GASTADO: $'+totalsup+' USD \n 1) SEGUIR COMPRANDO \n 2) SALIR');
                if(op == 1){

                    //VUELVE A EJECUTARSE LA TIENDA
                    iniciarTienda();
                }
            }
        }else{

        }
        break;
    }
    if(op==2){
        //MUESTRA LOS DATOS GUARDADOS DEL OBJETO USUARIO.
        alert(" TU CUENTA \n NOMBRE DE USUARIO: "+newUser.userName+" \n PASSWORD: "+newUser.password+" \n EMAIL: "+newUser.email);
        iniciarTienda();
    }
    if(op==3){
        let opx = prompt(" BUSCAR O FILTRAR \n OPCIONES: \n 1)FILTRAR ZAPATILLAS X PRECIO \n 2)BUSCAR POR NOMBRE ");
        if(opx == 1){
        let preciox = prompt(" FILTRAR X PRECIO \n INGRESE EL VALOR MAXIMO A MOSTRAR \n ADVERTENCIA: DE INGRESAR VALORES MUY BAJOS, NO MOSTRARÁ NADA.");
        if(preciox < 199){
            alert(" FILTRAR X PRECIO \n VALOR INGRESADO INFERIOR AL MINIMO DE NUESTRAS ZAPATILLAS.")
        }else{
        let baratas = zapatillas.filter(zapatilla => zapatilla.price <= preciox);
        for (const zapatilla of baratas) {
            alert(' ZAPATILLAS \n OPCIÓN '+zapatilla.id+' \n '+zapatilla.title+' \n Valor: '+zapatilla.price+' ');
        }
        }
        iniciarTienda();
            
        }else if(opx == 2){
        let nombrex = prompt(" BUSCAR X NOMBRE \n INGRESE EL NOMBRE A BUSCAR \n ADVERTENCIA: EL NOMBRE DEBE ESTAR ESCRITO TAL CUAL APARECE EN NUESTRO SISTEMA. \n EJ: 'CLASICAS 450'");

        let resultadox = zapatillas.find((el) => el.title == nombrex);     
            if(resultadox == undefined){
                alert("NO EXISTEN COINICIDENCIAS");
                iniciarTienda();
            }else{
            alert(" RESULTADOS \n ID:"+resultadox.id+" \n NOMBRE: "+resultadox.title+" \n PRECIO: "+resultadox.price+" \n");
            iniciarTienda();
        }        
        }else{
            alert("OPCIÓN INGRESADA NO VÁLIDA, SE VOLVERÁ AL MENÚ");
            iniciarTienda();   
        }

    }

}

let userName = prompt('Hola! Bienvenido a SNAKERS CALZADOS, Te registraremos, ¿Cómo quieres que te llamemos?');

if(userName == ''){
    userName= 'Invitado';
}
alert('Genial '+userName+'! , así te llamaremos ahora.');

if(userName == 'Invitado'){
    var password = '';
    var email = 'No Registrado';
}else{
    var password = prompt('Ingresa tu contraseña, para que guardemos tu cuenta.');
    var email = prompt('Muy bien, ahora ingresa tu email.');
    if(password == ''){
        password = 'Falta actualizar contraseña.';
    }
    if(email == ''){
        email = 'No registrado.';
    }
    
}
//CREACIÓN DE UN USUARIO EN BASE A LOS DATOS INGRESADOS POR LA PERSONA.
const newUser = new Usuario(userName,password,email);
iniciarTienda();
alert("SNAKERS CALZADOS \n GRACIAS POR PREFERIR SNAKERS CALZADOS");