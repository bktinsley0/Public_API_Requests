// fetching data from 'https://randomuser.me/api/' and displaying it on the page

async function getEmployees() {
  const response = await fetch("https://randomuser.me/api/?results=12");
  const data = await response.json();
  const employees = data.results;
  for (let i = 0; i < employees.length; i++) {
    displayEmployees(employees[i]);
    displayModal(employees[i], i);
  }
}
getEmployees();

const galleryDisplay = document.getElementById("gallery");
const body = document.querySelector("body");
// function to display the fetched data on the page
function displayEmployees(data) {
  const employees = data;

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
        <div class="card-img-container">
            <img class="card-img" src="${employees.picture.large}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${employees.name.first} ${employees.name.last}</h3>
            <p class="card-text">${employees.email}</p>
            <p class="card-text cap">${employees.location.city}, ${employees.location.state}</p>
        </div>
        `;

  galleryDisplay.insertAdjacentHTML("beforeend", card.outerHTML);
}

// function to display the modal window when a card is clicked
function displayModal(data, i) {
  const employees = data;
  let birthday = new Date(employees.dob.date)
    .toLocaleDateString("en-US")
    .split("/"); //splitting the date to get the month, day and year

  const modal = `
   <div class="modal-container">
   <div class="modal">
   <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
   <div class="modal-info-container">
       <img class="modal-img" src="${
         employees.picture.thumbnail
       }" alt="profile picture">
       <h3 id="name" class="modal-name cap">${employees.name.first} ${
    employees.name.last
  }</h3>
       <p class="modal-text">${employees.email}</p>
       <p class="modal-text cap">${employees.location.city}</p>
       <hr>
       <p class="modal-text">${data.cell}</p>
       <p class="modal-text">${data.location.street.number} ${
    data.location.street.name
  },${data.location.city} ${data.location.state} ${data.location.postcode}</p>
       <p class="modal-text">Birthday:  ${
         birthday[0] + "/" + birthday[1] + "/" + birthday[2]
       }</p>
   </div>
    </div>
    `;
  galleryDisplay.insertAdjacentHTML("afterend", modal);


}
