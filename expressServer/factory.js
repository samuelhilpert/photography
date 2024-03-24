// Basisklasse "AnfrageDetails", die die Grundstruktur für Anfrage-Details definiert.
class AnfrageDetails {
    constructor() {
        this.kategorie = "";
    }

    // Methode zur Überprüfung, ob die Anfrage individuell ist.
    isIndividuell() {}

    // Methode zur Rückgabe der Anfrage-Details.
    getDetails() {}
}

// Konkrete Klassen, die von "AnfrageDetails" erben und spezifische Anfrage-Details für verschiedene Kategorien bereitstellen.

class TierAnfrageDetails extends AnfrageDetails {
    constructor() {
        super();
        this.kategorie = "Tier";
    }

    // Die Anfrage ist individuell für Tier.
    isIndividuell() {
        return true;
    }

    // Gibt spezifische Details für Tier-Anfragen zurück.
    getDetails() {
        return {
            art: "Tier",
            motiv: "in Bewegung",
        };
    }
}

class MenschAnfrageDetails extends AnfrageDetails {
    constructor() {
        super();
        this.kategorie = "Mensch";
    }

    // Die Anfrage ist individuell für Mensch.
    isIndividuell() {
        return true;
    }

    // Gibt spezifische Details für Mensch-Anfragen zurück.
    getDetails() {
        return {
            art: "Mensch",
            motiv: "Porträt",
        };
    }
}

class AutoAnfrageDetails extends AnfrageDetails {
    constructor() {
        super();
        this.kategorie = "Auto";
    }

    // Die Anfrage ist individuell für Auto.
    isIndividuell() {
        return true;
    }

    // Gibt spezifische Details für Auto-Anfragen zurück.
    getDetails() {
        return {
            art: "Auto",
            motiv: "in Bewegung",
        };
    }
}

class AllgAnfrageDetails extends AnfrageDetails {
    constructor() {
        super();
        this.kategorie = "Allgemein";
    }

    // Die Anfrage ist nicht individuell.
    isIndividuell() {
        return false;
    }

    // Gibt allgemeine Details für nicht individuelle Anfragen zurück.
    getDetails() {
        return {
            art: "Allgemeine Anfrage",
            wuensche: "Keine speziellen Wünsche",
        };
    }
}

// Abstrakte Fabrikklasse "AnfrageErsteller", die die Methode zum Erstellen von Anfrage-Details definiert.
class AnfrageErsteller {
    constructor() {}

    // Abstrakte Methode zur Erstellung von Anfrage-Details.
    erstellen() {}
}

// Konkrete Fabriken, die von "AnfrageErsteller" erben und spezifische Anfrage-Details erstellen.

class IndividuelleAnfrageFabrik extends AnfrageErsteller {
    constructor(isTier) {
        super();
        this.isTier = isTier;
    }

    // Erstellt individuelle Anfrage-Details basierend auf dem übergebenen Parameter.
    erstellen() {
        if (this.isTier) {
            return new TierAnfrageDetails();
        } else if (this.isMensch) {
            return new MenschAnfrageDetails();
        } else {
            return new AutoAnfrageDetails();
        }
    }
}

class AllgemeineAnfrageFabrik extends AnfrageErsteller {
    constructor() {
        super();
    }

    // Erstellt allgemeine Anfrage-Details.
    erstellen() {
        return new AllgAnfrageDetails();
    }
}

// Verwendung der Fabriken, um spezifische Anfrage-Details zu erstellen.

// Erstellt eine individuelle Anfrage-Fabrik für Tier.
const anfrageFabrik = new IndividuelleAnfrageFabrik(true);
// Erstellt Tier-Anfrage-Details mit der erstellten Fabrik.
const tierAnfrage = anfrageFabrik.erstellen();

// Gibt Informationen zu den erstellten Tier-Anfrage-Details aus.
console.log(tierAnfrage.isIndividuell());
console.log(tierAnfrage.kategorie);
console.log(tierAnfrage.getDetails());

// Erstellt eine allgemeine Anfrage-Fabrik.
const anfrageFabrik2 = new AllgemeineAnfrageFabrik();
// Erstellt allgemeine Anfrage-Details mit der erstellten Fabrik.
const autoAnfrage = anfrageFabrik2.erstellen();

// Gibt Informationen zu den erstellten allgemeinen Anfrage-Details aus.
console.log(autoAnfrage.isIndividuell());
console.log(autoAnfrage.kategorie);
console.log(autoAnfrage.getDetails());
