// Basisklasse "Shooting", die die Grundfunktionen für ein Shooting bereitstellt.
class Shooting {
    // Gibt die Standardkosten für ein Shooting zurück.
    cost() {
        return 200;
    }

    // Gibt die Standardbeschreibung für ein Shooting zurück.
    description() {
        return 'Shooting';
    }
}

// Abstrakte Dekoratorklasse "ShootingDecorator", die die gleichen Methoden wie die Basisklasse implementiert.
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

// Konkrete Basisklasse, die von "Shooting" erbt.
class einfaches extends Shooting {
}

// Konkrete Dekoratorklassen, die von "ShootingDecorator" erben und zusätzliche Funktionalität hinzufügen.
class TierDecorator extends ShootingDecorator {
    // Verändert die Kosten, indem die Kosten des übergeordneten Shootings erhöht werden.
    cost() {
        return this.shooting.cost() + 100;
    }

    // Ergänzt die Beschreibung um das Wort 'Tier'.
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

// Erstellen von Instanzen und Anwendung der Dekoratoren.

// Erstellen eines einfachen Shootings.
const EinfachesShooting = new einfaches();
console.log(EinfachesShooting.description(), 'Cost:', EinfachesShooting.cost());

// Hinzufügen des Tier-Dekorators zum einfachen Shooting.
const TierShooting = new TierDecorator(EinfachesShooting);
console.log(TierShooting.description(), 'Cost:', TierShooting.cost());

// Hinzufügen des Auto-Dekorators zum einfachen Shooting.
const AutoShooting = new AutoDecorator(EinfachesShooting);
console.log(AutoShooting.description(), 'Cost:', AutoShooting.cost());

// Hinzufügen des Mensch-Dekorators zum einfachen Shooting.
const MenschShooting = new MenschDecorator(EinfachesShooting);
console.log(MenschShooting.description(), 'Cost:', MenschShooting.cost());
