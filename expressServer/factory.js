// Abstrakte Fabrik
class ShootingCreator {
    constructor() {}

    // Abstrakte Methode zur Erstellung eines Fahrzeugs
    erstellen() {}
}

// Konkrete Fabrik für Autos
class Tiershooting extends ShootingCreator {
    constructor() {
        super();
    }

    erstellen() {
        return new TierShoot();
    }
}

// Konkrete Fabrik für Fahrräder
class Menschshooting extends ShootingCreator {
    constructor() {
        super();
    }

    erstellen() {
        return new MenschShoot();
    }
}
class Autoshooting extends ShootingCreator {
    constructor() {
        super();
    }

    erstellen() {
        return new AutoShoot();
    }
}

// Basisklasse für Fahrzeuge
class Shooting {
    constructor() {}
}

// Konkrete Klasse für Autos
class TierShoot extends Shooting {
    constructor() {
        super();
    }

    shooten() {
        console.log("Das Tier wird geshootet");
    }
}

// Konkrete Klasse für Fahrräder
class MenschShoot extends Shooting {
    constructor() {
        super();
    }

    shooten() {
        console.log("Der Mensch wird geshootet!");
    }
}

class AutoShoot extends Shooting {
    constructor() {
        super();
    }

    shooten() {
        console.log("Das Auto wird geshootet!");
    }
}


const fabrik = new Tiershooting();
const tier = fabrik.erstellen();
tier.shooten();


const fabrik2 = new Menschshooting();
const mensch = fabrik2.erstellen();
mensch.shooten();

const fabrik3 = new Autoshooting();
const auto = fabrik3.erstellen();
auto.shooten();
