// Array de objetos de usuarios
const usuarios = [
    //0
    {
        nombre: "Mei Lin", //0
        numeroDeIdentidad: 8910, //1
        contrasena: 789, //2
        tipoDeUsuario: "cliente", //3
    },
    //1
    {
        nombre: "Nemo Cinfuentes de Agua", //0
        numeroDeIdentidad: 4567, //1
        contrasena: 6789, //2
        tipoDeUsuario: "cliente", //3
    },
    //2
    {
        nombre: "Winnie Pooh", //0
        numeroDeIdentidad: 1314, //1
        contrasena: 1213, //2
        tipoDeUsuario: "administrador", //3
    },
    //4
    {
        nombre: "Eren Yeager", //0
        numeroDeIdentidad: 1112, //1
        contrasena: 1011, //2
        tipoDeUsuario: "administrador", //3
    }

];

//Array de objetos de billetes

const billetesColombianos = [
    {
        valor: 5000,
        cantidad: 0,
    },
    {
        valor: 10000,
        cantidad: 0,
    },
    {
        valor: 20000,
        cantidad: 0,
    },
    {
        valor: 50000,
        cantidad: 0,
    },
    {
        valor: 100000,
        cantidad: 0,
    }
];



const ingresoDeUsuario = () => {

    let usuarioValidado = {};

    for (let repetirPregunta = true; repetirPregunta;) {
        const preguntaDocumento = prompt("Digite el número de su documento");
        const preguntaClave = prompt("Digite su clave");

        usuarios.find(e => {
            if (e.numeroDeIdentidad == preguntaDocumento) {
                if (e.contrasena == preguntaClave) {
                    usuarioValidado = e.tipoDeUsuario;
                    repetirPregunta = false;
                }
            }
        }
        );
        if (repetirPregunta == true) {
            alert("El usuario no existe, ingresa de nuevo");
        }
    };

    return {
        usuarioValidado,
    }

};

//console.log(ingresoDeUsuario()); //para comprobar que datos me arrojaba


const cajeroElectronico = () => {

    let iniciaUsuario = ingresoDeUsuario().usuarioValidado; //Llama la función para validar que el tipo de usuario sea el correcto

    if (iniciaUsuario == "administrador") { //Si es administrador, entonces haga el deposito
        alert("Bienvenido(a), administrador(a)");

        let sumaCajeroTotal = 0;

        billetesColombianos.forEach(e => {
            e.cantidad += parseInt(prompt("Ingrese el monto a depositar " + e.valor));
            let denominacion = e.valor * e.cantidad;
            sumaCajeroTotal += denominacion;

            console.log("La suma por denominación de ", e.valor, " es de ", denominacion); //Suma por denominación
        }
        );
        console.log("Por lo que la suma total en el cajero es de ", sumaCajeroTotal); //Suma en total que va al cajero
    }
    else if (iniciaUsuario == "cliente") { //Si es cliente, proceda con el retiro
        alert("Bienvenido(a), cliente(a)");

        //Hasta aquí pude llegar   
    };

    ingresoDeUsuario();
    cajeroElectronico();

};

cajeroElectronico();



