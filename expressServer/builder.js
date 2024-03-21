
class Shooting {
    constructor() {
        this.kategorie = "";
        this.motiv = "";
        this.bilder = "";
        this.stunden = "";
    }

    toString() {
        return `Shooting: Kategorie: ${this.kategorie}, Motiv: ${this.motiv}, Bilder: ${this.bilder}, Stunden: ${this.stunden}`;
    }
}


class ShootingCreator {
    constructor() {
        this.shooting = new Shooting();
    }

    selectKategorie() {}

    selectMotiv() {}

    selectBilder() {}

    selectStunden() {}

    getResult() {
        return this.shooting;
    }
}


class KundeAShootingCreator extends ShootingCreator {
    selectKategorie() {
        this.shooting.kategorie = "Tier";
    }

    selectMotiv() {
        this.shooting.motiv = "in Bewegung";
    }

    selectStunden() {
        this.shooting.stunden = "2";
    }

    selectBilder() {
        this.shooting.bilder = "3";
    }
}


class ShootingDirector {
    constructor(shootingCreator) {
        this.shootingCreator = shootingCreator;
    }

    createShooting() {
        this.shootingCreator.selectKategorie();
        this.shootingCreator.selectMotiv();
        this.shootingCreator.selectStunden();
        this.shootingCreator.selectBilder();
    }
}


const KundeA = new KundeAShootingCreator();
const director = new ShootingDirector(KundeA);

director.createShooting();
const ShootingKundeA = KundeA.getResult();

console.log(ShootingKundeA.toString());
