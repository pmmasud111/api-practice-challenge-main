const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"],
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"],
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ],
};

const firstPerson = () => {
  const name = document.getElementById("name1");
  name.innerText = `${
    person.result[0].name.fullName[0] + " " + person.result[0].name.fullName[1]
  }`;

  const age = document.getElementById("age1");
  age.innerText = `${person.result[0].age}`;

  const address = document.getElementById("address1");
  address.innerText = `street: ${person.result[0].address.street}, House: ${person.result[0].address.house}`;
};
firstPerson();

const firstPerson2 = () => {
  const name = document.getElementById("name2");
  name.innerText = `${
    person.result[1].name.fullName[0] + " " + person.result[1].name.fullName[1]
  }`;

  const age = document.getElementById("age2");
  age.innerText = `${person.result[1].age}`;

  const address = document.getElementById("address2");
  address.innerText = `street: ${person.result[1].address.street}, House: ${person.result[1].address.house}`;
};
firstPerson2();
