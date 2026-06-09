class Person {
  constructor() {
    this.addressStreet = '';
    this.city = '';
    this.postalCode = '';
    this.company = '';
    this.position = '';
    this.annualSalary = 0;
  }

  toString() {
    return `Person lives at ${this.addressStreet}, ${this.city}, ${this.postalCode} and works at ${this.company} as ${this.position}, earning ${this.annualSalary}`;
  }
}

class PersonBuilder {
  constructor(person = new Person()) {
    this.person = person;
  }

  get lives() {
    return new PersonAddressBuilder(this.person);
  }

  get works() {
    return new PersonJobBuilder(this.person);
  }

  build() {
    return this.person;
  }
}

class PersonAddressBuilder extends PersonBuilder {
  at(addressStreet) {
    this.person.addressStreet = addressStreet;
    return this;
  }

  in(city) {
    this.person.city = city;
    return this;
  }

  withPostalCode(postalCode) {
    this.person.postalCode = postalCode;
    return this;
  }
}

class PersonJobBuilder extends PersonBuilder {
  at(company) {
    this.person.company = company;
    return this;
  }

  as(position) {
    this.person.position = position;
    return this;
  }

  earns(annualSalary) {
    this.person.annualSalary = annualSalary;
    return this;
  }
}

const person = new PersonBuilder()
  .lives.at('Abkari Road').in('Lahore').withPostalCode('54000')
  .works.at('Ravi Scientific Traders').as('Developer').earns(120000)
  .build();

console.log(person.toString());