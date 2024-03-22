
class AnfrageDetails {
    constructor() {
        this.kategorie = "";
    }

    isIndividuell() {}
    getDetails() {}
}


class TierAnfrageDetails extends AnfrageDetails {
    constructor() {
        super();
        this.kategorie = "Tier";
    }

    isIndividuell() {
        return true;
    }

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

    isIndividuell() {

        return true;
    }

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

    isIndividuell() {
        return true;
    }

    getDetails() {
        return {
            art: "Auto",
            motiv: "in Bewegung"

        };
    }
}

class AnfrageErsteller {
    constructor() {}

    erstellen() {}
}

class AllgAnfrageDetails extends AnfrageDetails {
    constructor() {
        super();
        this.kategorie = "Allgemein";
    }

    isIndividuell() {
        return false;
    }

    getDetails() {
        return {
            art: "Allgemeine Anfrage",
            wuensche: "Keine speziellen Wünsche",

        };
    }
}


class IndividuelleAnfrageFabrik extends AnfrageErsteller {
    constructor(isTier) {
        super();
        this.isTier = isTier;
    }

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

    erstellen() {
        return new AllgAnfrageDetails();
    }
}


const anfrageFabrik = new IndividuelleAnfrageFabrik(true);
const tierAnfrage = anfrageFabrik.erstellen();

console.log(tierAnfrage.isIndividuell());
console.log(tierAnfrage.kategorie);
console.log(tierAnfrage.getDetails());

const anfrageFabrik2 = new AllgemeineAnfrageFabrik();
const autoAnfrage = anfrageFabrik2.erstellen();

console.log(autoAnfrage.isIndividuell());
console.log(autoAnfrage.kategorie);
console.log(autoAnfrage.getDetails());
