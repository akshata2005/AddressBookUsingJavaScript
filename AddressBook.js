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
        let firstNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (firstNameRegex.test(firstName)) {
            this._firstName = firstName;
        }
        else { throw "Invalid First Name"; }
    }
    get lastName() { return this._lastName; }
    set lastName(lastName) {
        let lastNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (lastNameRegex.test(lastName)) {
            this._lastName = lastName;
        }
        else { throw "Invalid Last name"; }
    }
    get address() { return this._address; }
    set address(address) {
        let addressRegex = RegExp("^[A-Za-z]{4,}$");
        if (addressRegex.test(address)) {
            this._address = address;
        }
        else { throw "Invalid Address"; }
    }
    get city() { return this._city; }
    set city(city) {
        let cityRegex = RegExp("^[A-Za-z]{4,}$");
        if (cityRegex.test(city)) {
            this._city = city;
        }
        else { throw "Invalid City name"; }
    }
    get state() { return this._state; }
    set state(state) {
        let stateRegex = RegExp("^[A-Za-z]{4,}$");
        if (stateRegex.test(state)) {
            this._state = state;
        }
        else { throw "Invalid State name"; }
    }
    get zip() { return this._zip; }
    set zip(zip) {
        let zipRegex = RegExp("^[0-9]{3}[ ]?[0-9]{3}$");
        if (zipRegex.test(zip)) {
            this._zip = this.zip;
        }
        else { throw "Invalid Zipcode"; }
    }
    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp("^([0-9]{2}[ ])?[6-9]{1}[0-9]{9}$");
        if (phoneNumberRegex.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        }
        else { throw "Invalid Phone Number"; }
    }
    get email() { return this._email; }
    set email(email) {
        let emailRegex = RegExp("^([a-z]){1,}[a-z0-9]*([.+_-]){0,1}[0-9a-z]+(@){1}([0-9a-z]+)(\\.([a-z]){2,}){1}(\\.[a-z]{2,})?$");
        if (emailRegex.test(email)) {
            this._email = email;
        }
        else { throw "Invalid Email" }
    }
    //To string method for displaying contacts
    toString() {
        return "\nFirst Name: " + this.firstName + " \nLast Name: " + this.lastName + " \nAddress: " + this.address + " \nCity: " + this.city
            + " \nState: " + this.state + " \nZipcode: " + this.zip + " \nPhone Number: " + this.phoneNumber + " \nEmail: " + this.email;
    }
}
// Created Address Book Array to store contacts.
let AddressBook = new Array();
//UC3 Add new contact.
function AddContact(firstName, lastName, address, city, state, zip, phoneNumber, email) {
    try {
        let newcontact = new Contact(firstName, lastName, address, city, state, zip, phoneNumber, email);
        // UC7 Checks for Duplicate contacts.
        if (AddressBook.find(person => person.firstName == newcontact.firstName && person.email == newcontact.email)) {
            throw "Contact Already Exists.";
        } else {
            AddressBook.push(newcontact);
            console.log("Contact Added Successfully.");
        }
    }
    catch (e) {
        console.error(e);
    }
}
// UC5 Delete Contact
function DeleteContact(firstName, mobileNumber) {
    for (let index = 0; index < AddressBook.length; index++) {
        if (AddressBook[index].firstName == firstName && AddressBook[index].phoneNumber == mobileNumber) {
            AddressBook.splice(index, 1);
        }
    }
}
// UC6 Gets Count of Contact in Address Book.
function CountContact() {
    let addressBookCount = AddressBook.reduce((count) => count = count + 1, 0);
    console.log("Contact Count is: " + addressBookCount);
}
function Main() {
    console.log("Welcome to address book");
    // UC3 Adds new contact in AddressBook Array.
    AddContact("Akshata", "Sawant", "viman nagar", "Pune", "Maharashtra", "400084", "7896543254", "akshata@gmail.com");
    AddContact("Gauravi", "Sharma", "Malad", "Mumbai", "Maharashtra", "400028", "9856201452", "gauravi@gmail.com");
    AddContact("Rohit", "Mehta", "Vasantkunj", "Delhi", "Delhi", "110023", "7452654852", "rohit@gmail.com");
    //Printing Array
    AddressBook.forEach(contact => console.log(contact.toString()));
    // UC4 Edit Contact by name.
    AddressBook.filter(contact => contact.firstName == "Akshata" && contact.phoneNumber == "7896543254").forEach(contact => { contact.address = "Kisan"; contact.city = "Banagalore"; contact.state = "Karnataka" })
    AddressBook.forEach(contact => console.log(contact.toString()));
    // UC5 Deletes the contact from AddressBook Array.
    DeleteContact("Akshata", "7896543254");
    AddressBook.forEach(contact => console.log(contact.toString()));
}
Main();
CountContact();