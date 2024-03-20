const EmailSingleton = (function() {
    let instance;
    let email;

    function setEmail(newEmail) {
        email = newEmail;
    }

    function getEmail() {
        return email;
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = {
                    setEmail,
                    getEmail
                };
            }
            return instance;
        }
    };
})();

// Verwendung des Singletons
const emailInstance = EmailSingleton.getInstance();

emailInstance.setEmail("samuelhilpert@web.de");

console.log(emailInstance.getEmail()); // Ausgabe: example@example.com

// Versuch, eine zweite Instanz zu erstellen, die fehlschlagen sollte
const secondEmailInstance = EmailSingleton.getInstance();

console.log(secondEmailInstance.getEmail()); // Ausgabe: example@example.com (gleiche E-Mail wie vorherige Instanz)
console.log(emailInstance === secondEmailInstance); // Ausgabe: true (es wird nur eine Instanz erstellt)