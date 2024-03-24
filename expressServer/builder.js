// Definiere eine Klasse "Shooting", die als Produkt dient und die Attribute eines Fotoshootings speichert.
class Shooting {
    constructor() {
        // Initialisiere die Attribute mit leeren Werten.
        this.kategorie = "";
        this.motiv = "";
        this.bilder = "";
        this.stunden = "";
    }

    // Eine Methode, die eine textuelle Darstellung des Shootings zurückgibt.
    toString() {
        return `Shooting: Kategorie: ${this.kategorie}, Motiv: ${this.motiv}, Bilder: ${this.bilder}, Stunden: ${this.stunden}`;
    }
}

// Definiere eine abstrakte Klasse "ShootingCreator", die das Erstellen von Shootings koordiniert.
class ShootingCreator {
    constructor() {
        // Initialisiere das Shooting-Objekt.
        this.shooting = new Shooting();
    }

    // Methoden, die von konkreten Erstellern implementiert werden müssen.
    selectKategorie() {}
    selectMotiv() {}
    selectBilder() {}
    selectStunden() {}

    // Eine Methode, die das fertige Shooting zurückgibt.
    getResult() {
        return this.shooting;
    }
}

// Definiere eine konkrete Klasse "KundeAShootingCreator", die spezifische Optionen für den Kunden A festlegt.
class KundeAShootingCreator extends ShootingCreator {
    // Implementiere Methoden, um die Attribute des Shootings entsprechend den Anforderungen von Kunde A festzulegen.
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

// Definiere eine Klasse "ShootingDirector", die den Erstellungsprozess des Shootings steuert.
class ShootingDirector {
    constructor(shootingCreator) {
        // Initialisiere den Direktor mit einem konkreten Ersteller.
        this.shootingCreator = shootingCreator;
    }

    // Eine Methode, die den Erstellungsprozess des Shootings durch den Ersteller ausführt.
    createShooting() {
        this.shootingCreator.selectKategorie();
        this.shootingCreator.selectMotiv();
        this.shootingCreator.selectStunden();
        this.shootingCreator.selectBilder();
    }
}

// Erstelle eine Instanz des konkreten Erstellers für Kunde A.
const KundeA = new KundeAShootingCreator();

// Erstelle eine Instanz des Shooting-Direktors und übergebe den konkreten Ersteller.
const director = new ShootingDirector(KundeA);

// Führe den Erstellungsprozess aus.
director.createShooting();

// Hole das fertige Shooting von Kunde A.
const ShootingKundeA = KundeA.getResult();

// Gib die Details des fertigen Shootings aus.
console.log(ShootingKundeA.toString());
