// fetching data from '"https://randomuser.me/api/?results=12&nat=us"' and displaying it on the page
// https://dimitripavlutin.com/javascript-fetch-async-await/

const galleryDisplay = document.getElementById("gallery");
const body = document.querySelector("body");

async function fetchData() {
  const response = await fetch("https://randomuser.me/api/?results=12&nat=us");
  const data = await response.json();
  return data;
}

fetchData()
  .then((data) => {
    displayEmployees(data.results);
  })
  .catch((error) => {
    console.log(error);
  });

// function to display the fetched data on the page
function displayEmployees(data) {
  const cards = data.map(
    (employee) =>
      `
    <div class="card">
          <div class="card-img-container">
              <img class="card-img" src="${employee.picture.large}" alt="profile picture">
          </div>
          <div class="card-info-container">
              <h3 id="name" class="card-name cap">${employee.name.first} ${employee.name.last}</h3>
              <p class="card-text">${employee.email}</p>
              <p class="card-text cap">${employee.location.city}, ${employee.location.state}</p>
          </div>
      </div>
          `
  );
  galleryDisplay.insertAdjacentHTML("beforeend", cards);
}

// function to display the modal window when a card is clicked
function displayModal(data) {
  const employees = data;
  // Helper Functions for bithday and cell number

  const employee = `
 <div class='modal-container'>
 <div class="modal">
 <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
 <div class="modal-info-container">
     <img class="modal-img" src="${employees.picture.thumbnail}" alt="profile picture">
     <h3 id="name" class="modal-name cap">${employees.name.first} ${employees.name.last}</h3>
     <p class="modal-text">${employees.email}</p>
     <p class="modal-text cap">${employees.location.city}</p>
     <hr>
     <p class="modal-text">${employees.cell}</p>
     <p class="modal-text">${employees.location.street.number} ${employees.location.street.name},${employees.location.city} ${employees.location.state} ${employees.location.postcode}</p>

 </div>
 </div>
    `;
  body.insertAdjacentHTML("afterbegin", employee);
}

// adding event listener to the galleryDisplay
// https://stackoverflow.com/questions/14258787/javascript-click-event-listener-on-class
galleryDisplay.addEventListener("click", (e) => {
  if (e.target.closest(".card") !== null) {
    const card = e.target.closest(".card");
    const index = [...card.parentNode.children].indexOf(card);
  }})
  
body.addEventListener("click", (e) => {
  if (e.target.className === ".modal-close-btn") {
    console.log(e.target.className);
    const modal = document.querySelector(".modal-container");
    modal.classList.add("hidden");
  }
});
