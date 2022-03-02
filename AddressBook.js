class Contact {
    /// Constructor
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    // Getter & Setter method
    get firstName() { return this._firstName; }
    set firstName(firstName) {
        let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (firstNameRegex.test(firstName))
            this._firstName = firstName;
        else throw "Invalid First name";
    }
    get lastName() { return this._lastName; }
    set lastName(lastName) {
        let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (lastNameRegex.test(lastName))
            this._lastName = lastName;
        else throw "Invalid Last name";
    }
    get address() { return this._address; }
    set address(address) {
        let addressRegex = RegExp('^\d+\s[A-z]+\s[A-z]+$');
        if (addressRegex.test(address))
            this._address = address;
        else throw "Invalid address";
    }
    get city() { return this._city; }
    set city(city) {
        let cityRegex = RegExp('^[A-Za-z]{4,}$');
        if (cityRegex.test(city))
            this._city = city;
        else throw "Invalid City name";
    }
    get state() { return this._state; }
    set state(state) {
        let stateRegex = RegExp('^[A-Za-z]{4,}$');
        if (stateRegex.test(state))
            this._state = state;
        else throw "Invalid State name";

    }
    get zip() { return this._zip; }
    set zip(zip) {
        let zipRegex = RegExp('^[0-9]{3}[ ]?[0-9]{3}$');
        if (zipRegex.test(zip))
            this._zip = this.zip;
        else throw "Invalid Zipcode";
    }
    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('^([0-9]{2}[ ])?[6-9]{1}[0-9]{9}$');
        if (phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw "Invalid Phone Number";
    }
    get email() { return this._email; }
    set email(email) {
        let emailRegex = RegExp('^[a-zA-Z0-9_+&*#$^!-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$');
        if (emailRegex.test(this.email))
            this._email = email;
        else throw "Invalid Email";
    }
    //To string method for displaying contacts
    toString() {
        return "First Name: " + this.firstName + " Last Name: " + this.lastName + " Address: " + this.address + " City: " + this.city
            + " State: " + this.state + " Zipcode: " + this.zip + " Phone Number: " + this.phoneNumber + " Email: " + this.email;
    }
}