/***** Exemplo 1 *****/
function teste() {
    console.log(this);
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }
    
    // Method instance
    aumentaVolume() {
        this.volume += 2;
    }
    
    diminuirVolume() {
        this.volume -= 2;
    }

    // Method static
    static trocaPilha() {
        console.log('Ok, vou trocar.');
        console.log(this);
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentaVolume();
controle1.aumentaVolume();
controle1.aumentaVolume();
controle1.aumentaVolume();
console.log(controle1);

/***** Exemplo 2 *****/
// Métodos estáticos são métodos referentes apenas a class e não a instância da class

ControleRemoto.trocaPilha();