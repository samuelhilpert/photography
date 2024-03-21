
class Shooting {
    cost() {
        return 200;
    }

    description() {
        return 'Shooting';
    }
}


class ShootingDecorator {
    constructor(shooting) {
        this.shooting = shooting;
    }

    cost() {
        return this.shooting.cost();
    }

    description() {
        return this.shooting.description();
    }
}


class einfaches extends Shooting {}


class TierDecorator extends ShootingDecorator {
    cost() {
        return this.shooting.cost() + 100;
    }

    description() {
        return this.shooting.description() + ', Tier';
    }
}
class AutoDecorator extends ShootingDecorator {
    cost() {
        return this.shooting.cost() + 150;
    }

    description() {
        return this.shooting.description() + ', Auto';
    }
}

class MenschDecorator extends ShootingDecorator {
    cost() {
        return this.shooting.cost() + 50;
    }

    description() {
        return this.shooting.description() + ', Mensch';
    }
}

const EinfachesShooting = new einfaches();

console.log(EinfachesShooting.description(), 'Cost:', EinfachesShooting.cost());

const TierShooting = new TierDecorator(EinfachesShooting);

console.log(TierShooting.description(), 'Cost:', TierShooting.cost());

const AutoShooting = new AutoDecorator(EinfachesShooting);

console.log(AutoShooting.description(), 'Cost:', AutoShooting.cost());

const MenschShooting = new MenschDecorator(EinfachesShooting);

console.log(MenschShooting.description(), 'Cost:', MenschShooting.cost());

