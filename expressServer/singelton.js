const EmailSingleton = (function () {
    let instance;
    let email;

    function setEmail(newEmail) {
        email = newEmail;
    }

    function getEmail() {
        return email;
    }

    return {
        getInstance: function () {
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


const emailInstance = EmailSingleton.getInstance();

emailInstance.setEmail("samuelhilpert@web.de");

console.log(emailInstance.getEmail());


const secondEmailInstance = EmailSingleton.getInstance();

console.log(secondEmailInstance.getEmail());
console.log(emailInstance === secondEmailInstance);