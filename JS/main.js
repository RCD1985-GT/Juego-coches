


//AQUI SE DECLARA LA CLASE COCHE
class Coche {
   
    constructor(modelo, marca) {
        this.modelo = modelo;
        this.marca = marca;
        this.metros = 0;
    }
  
    acelerar() {
        return this.metros += 30;
    }

    frenar() {
        return this.metros ;
    }

};

// AQUI SE CREAN LOS DIFERENTES COCHES 
let coche1 = new Coche("Kart1","Marca1");
let coche2 = new Coche("Kart2","Marca2");
let coche3 = new Coche("Kart3","Marca3");
let coche4 = new Coche("Kart4","Marca4");
let coche5 = new Coche("Kart5","Marca5");
let coche6 = new Coche("Kart6","Marca6");
let coche7 = new Coche("Kart7","Marca7");
let coche8 = new Coche("Kart8","Marca8");

//Generando variables básicas de entorno
let player1 = "";//SACARLO A 

let player2 = "";

let ganador = "";

//FUNCION SELECCION DE COCHE
const selectCar1 = () => {
 if (player1 == "") {
    player1 = coche1;
 } else if (player1 != "") {
    player2 = coche1;
    }
    console.log("Kart1 seleccionado");
}

const selectCar2 = () => {
    if (player1 == "") {
       player1 = coche2;
    } else if (player1 != "") {
       player2 = coche2;
    }
    console.log("Kart2 seleccionado");
   }
   
   const selectCar3 = () => {
    if (player1 == "") {
       player1 = coche3;
    } else if (player1 != "") {
       player2 = coche3;
    }
    console.log("Kart3 seleccionado");
   }
   
   const selectCar4 = () => {
    if (player1 == "") {
       player1 = coche4;
    } else if (player1 != "") {
       player2 = coche4;
    }
    console.log("Kart4 seleccionado");
   }
   
   const selectCar5 = () => {
    if (player1 == "") {
       player1 = coche5;
    } else if (player1 != "") {
       player2 = coche5;
    }
    console.log("Kart5 seleccionado");
   }
   
   const selectCar6 = () => {
    if (player1 == "") {
       player1 = coche6;
    } else if (player1 != "") {
       player2 = coche6;
    }
    console.log("Kart6 seleccionado");
   }
   
   const selectCar7 = () => {
    if (player1 == "") {
       player1 = coche7;
    } else if (player1 != "") {
       player2 = coche7;
    }
    console.log("Kart7 seleccionado");
   }
   
   const selectCar8 = () => {
    if (player1 == "") {
       player1 = coche8;
    } else if (player1 != "") {
       player2 = coche8;
    }
    console.log("Kart8 seleccionado");
   }
 
let screen1 = document.getElementById("pantalla1");
let screen2 = document.getElementById("pantalla2");
let screen3 = document.getElementById("pantalla3");
let screen4 = document.getElementById("pantalla4");



/* FUNCION QUE CAMBIA A PANTALLA 2 DE LA CARRERA*/

const cambiarPantalla2 = () => {
    screen1.style.display = "none";
    screen2.style.display = "block"
}


/* FUNCION QUE CAMBIA A PANTALLA 3 DE LA CARRERA*/
const cambiarPantalla3 = () => {
    screen2.style.display = "none";
    screen3.style.display = "block"
}

/* FUNCION QUE CAMBIA A PANTALLA 4 DE LA CARRERA*/
const cambiarPantalla4 = () => {
    screen3.style.display = "none";
    screen4.style.display = "block"
}


/* FUNCION SACAR IMAGEN COCHE1 PUESTA CON ONCLICK EN screen3A*/

let fotoCoche1 = document.getElementById(coche1);


const imprimeCoche1  = () => {

   switch (player1) {
        case coche1:
            console.log("aparece kart1");// NO TRAE LA FOTO
            break;
        
        case coche2:
            console.log("aparece kart2");
            break;

        case coche3:
            console.log("aparece kart3");
            break;
       
        case coche4:
            console.log("aparece kart4");
            break;
        
        case coche5:
            console.log("aparece kart5");
            break;

        case coche6:
            console.log("aparece kart6");
            break;   

        case coche7:
            console.log("aparece kart7");
            break;

        case coche8:
             console.log("aparece kart8");
            break;
      }
    }
    
   


/* FUNCION SACAR IMAGEN COCHE2 PUESTA CON ONCLICK EN screen3C1 */
const imprimeCoche2  = () => {

    switch (player2) {
         case coche1:
             console.log("aparece 1")
             break;
         
         case coche2:
             console.log("aparece kart2");
             break;
 
         case coche3:
             console.log("aparece kart3");
             break;
        
         case coche4:
             console.log("aparece kart4");
             break;
         
         case coche5:
             console.log("aparece kart5");
             break;
 
         case coche6:
             console.log("aparece kart6");
             break;   
 
         case coche7:
             console.log("aparece kart7");
             break;
 
         case coche8:
              console.log("aparece kart8");
             break;
       }
     }
     
    
    

/*FUNCION DE CARRERA*/
const minMaxRoundedRandom = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

let random ;
const correr = () => {
    if (ganador == "") {
            random = minMaxRoundedRandom(0,1)
        if (random == 0) {
            player1.acelerar();
            player2.frenar();
        } else if (random == 1) {
            player1.frenar();
            player2.acelerar();
        }
        console.log(player1.metros,player2.metros) /* conseguir sacarlo en texto a la pantalla de la carrea,cada uno en su lado*/
        if (player1.metros >= 500) {
            ganador = player1.modelo/* esto se tiene que mostrar en la pantalla 4*/
        }else if (player2.metros >=500) {
            ganador = player2.modelo
        }
    }
}

/*FUNCIONES coche1*/
function cambiaColorOver1() {
    document.getElementById("coche1").style.backgroundColor = "white";
}

function cambiaColorOut1() {
    document.getElementById("coche1").style.backgroundColor = "black";
}

/*FUNCIONES coche2*/
function cambiaColorOver2() {
    document.getElementById("coche2").style.backgroundColor = "white";
}

function cambiaColorOut2() {
    document.getElementById("coche2").style.backgroundColor = "black";
}

/*FUNCIONES coche3*/
function cambiaColorOver3() {
    document.getElementById("coche3").style.backgroundColor = "white";
}

function cambiaColorOut3() {
    document.getElementById("coche3").style.backgroundColor = "black";
}

/*FUNCIONES coche4*/
function cambiaColorOver4() {
    document.getElementById("coche4").style.backgroundColor = "white";
}

function cambiaColorOut4() {
    document.getElementById("coche4").style.backgroundColor = "black";
}


/*FUNCIONES coche5*/
function cambiaColorOver5() {
    document.getElementById("coche5").style.backgroundColor = "white";
}

function cambiaColorOut5() {
    document.getElementById("coche5").style.backgroundColor = "black";
}
/*FUNCIONES coche6*/
function cambiaColorOver6() {
    document.getElementById("coche6").style.backgroundColor = "white";
}

function cambiaColorOut6() {
    document.getElementById("coche6").style.backgroundColor = "black";
}
/*FUNCIONES coche7*/
function cambiaColorOver7() {
    document.getElementById("coche7").style.backgroundColor = "white";
}

function cambiaColorOut7() {
    document.getElementById("coche7").style.backgroundColor = "black";
}
/*FUNCIONES coche8*/
function cambiaColorOver8() {
    document.getElementById("coche8").style.backgroundColor = "white";
}

function cambiaColorOut8() {
    document.getElementById("coche8").style.backgroundColor = "black";
}

/*FUNCION CREAR ALERTA*/

function alertaPantalla2() {
    alert("Selecciona 2 jugadores y pulsa el mando para jugar");
};



