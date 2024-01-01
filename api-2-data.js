const data = [
  {
    _id: "60795d4e0489a32f948c4167",
    name: "Honda Sedan",
    price: "132",
    description:
      "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
    imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
  },
  {
    _id: "60795e440489a32f948c4168",
    name: "MitoSedan",
    price: "221",
    description:
      "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
    imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
  },
  {
    _id: "60795fc20489a32f948c4169",
    name: "Isuzu Tacoma",
    price: "105",
    description:
      "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
    imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
  },
  {
    _id: "6079615d0489a32f948c416a",
    name: "Chevrolet Crossover",
    price: "434",
    description:
      "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic",
    imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
  },
];

const challenge2API = (data) => {
  data.forEach((element) => {
    const cardDiv = document.getElementById("card-div");
    const div = document.createElement("div");
    div.classList.add("div");
    div.innerHTML = ` 
    <div id="" class="card" style="width: 18rem;">
        <img class="p-2" src="${element.imageURL}" class="card-img-top" alt="...">
        <div id="card-body" class="card-body">
            <h2 id="card-title" class="card-title text-xl font-semibold">Model: ${element.name}</h2>
            <p id="card-text" class="card-text mb-2">${element.description}</p>
            <a id="card-btn" href="#" class="btn btn-primary">Price: $${element.price}</a>
        </div>
    </div>`;
    console.log(element.name);
    cardDiv.appendChild(div);
  });
};
challenge2API(data);
