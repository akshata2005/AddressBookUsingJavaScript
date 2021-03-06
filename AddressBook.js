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
    console.log("Contact Count in AddressBook is: " + addressBookCount);
}
// UC8 Search by city and state
function SearchByCity(city) {
    let sortByCity = AddressBook.filter(contact => contact.city == city);
    return sortByCity;
}
function SearchByState(state) {
    let sortByState = AddressBook.filter(contact => contact.state == state);
    return sortByState;
}
// UC9 Displays Contact By City.
function ViewContactByCity()
{
    AddressBook.filter((contact) => contactsCityMap.set(contact.city, SearchByCity(contact.city)));
    return contactsCityMap;
}
// UC9 Displays Contact By State.
function ViewContactByState(){
    AddressBook.filter((contact) => contactsStateMap.set(contact.state, SearchByState(contact.state)));
    return contactsStateMap;
}
// UC10 Get Contact Count by city.
function ContactCountByCity(){
    AddressBook.filter((contact) => countCityMap.set(contact.city, SearchByCity(contact.city).length));
    return countCityMap;
}
// UC10 Get Contact Count by state.
function ContactCountByState(){
    AddressBook.filter((contact) => countStateMap.set(contact.state, SearchByState(contact.state).length));
    return countStateMap;
}
// UC11 Sort Contacts by name.
function SortContactsByName(){
    AddressBook.sort((person1, person2) => (person1.firstName).localeCompare(person2.firstName));
    console.log(AddressBook);
}
// UC12 Sort Contact by City, State and Zipcode.
function SortContact(property)
{
    //console.log("Sort Contacts By:- ")
    //console.log("\n1. City. \n2. State \n3. Zipcode.")
    switch(property){
        case "city":
            AddressBook.sort((person1, person2) => (person1.city).localeCompare(person2.city));
            console.log(AddressBook);
        break;
        case "state":
            AddressBook.sort((person1, person2) => (person1.state).localeCompare(person2.state));
            console.log(AddressBook);
        break;
        case "zip":
            AddressBook.sort((person1, person2) => (person1.zip).localeCompare(person2.zip));
            console.log(AddressBook);
        break;
        default:
            console.log("Enter Valid Property.");
    }
}
function Main() {
    console.log("Welcome to address book");
    // UC3 Adds new contact in AddressBook Array.
    AddContact("Akshata", "Sawant", "viman nagar", "Pune", "Maharashtra", "400084", "7896543254", "akshata@gmail.com");
    AddContact("Gauravi", "Sharma", "Malad", "Mumbai", "Maharashtra", "400028", "9856201452", "gauravi@gmail.com");
    AddContact("Rohit", "Mehta", "Vasantkunj", "Delhi", "Delhi", "110023", "7452654852", "rohit@gmail.com");
    AddContact("Shubham", "Patil", "JPnagar", "Bangalore", "Karnataka", "500094", "8542102563", "shubham@gmail.com")
    //Printing Array
    AddressBook.forEach(contact => console.log(contact.toString()));
    // UC4 Edit Contact by name.
    AddressBook.filter(contact => contact.firstName == "Chetan" && contact.phoneNumber == "7896543254").forEach(contact => { contact.address = "Kisan"; contact.city = "Banagalore"; contact.state = "Karnataka" })
    AddressBook.forEach(contact => console.log(contact.toString()));
    // UC5 Deletes the contact from AddressBook Array.
    DeleteContact("Akshata", "7896543254");
    AddressBook.forEach(contact => console.log(contact.toString()));
    // UC8 Prints Contact by city.
    console.log(SearchByCity("Mumbai"));
    // UC8 Prints Contact by state.
    console.log(SearchByState("Karnataka"));
    console.log("---- UC9 ViewsContacts By City----");
    console.log(ViewContactByCity());
    console.log("---- UC9 ViewsContacts By State----");
    console.log(ViewContactByState());
    console.log("----UC10 Contact count by City----");
    console.log(ContactCountByCity());
    console.log("----UC10 Contact count by State----");
    console.log(ContactCountByState());

}
// Created Address Book Array to store contacts.
let AddressBook = new Array();
// Map to get Contacts by city.
let contactsCityMap = new Map();
// Map to get Contacts by state.
 let contactsStateMap = new Map();
 // Map to get contacts count by city.
 let countCityMap = new Map();
 // Map to get contacts count by state.
 let countStateMap = new Map();
Main();
CountContact();
SortContactsByName();
console.log("Contacts Sorted by City");
SortContact("city");
console.log("Contacts Sorted by State");
SortContact("state");