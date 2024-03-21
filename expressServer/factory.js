
class ShootingCreator {
    constructor() {}

    erstellen() {}
}


class Tiershooting extends ShootingCreator {
    constructor() {
        super();
    }

    erstellen() {
        return new TierShoot();
    }
}


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


class Shooting {
    constructor() {}
}


class TierShoot extends Shooting {
    constructor() {
        super();
    }

    shooten() {
        console.log("Das Tier wird geshootet");
    }
}


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
