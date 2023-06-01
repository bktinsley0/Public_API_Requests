// fetching data from 'https://randomuser.me/api/' and displaying it on the page

async function getEmployees() {
  const response = await fetch("https://randomuser.me/api/?results=12");
  const data = await response.json();
  displayEmployees(data.results);
}
getEmployees();

const galleryDisplay = document.getElementById("gallery");

// function to display the fetched data on the page
function displayEmployees(data) {
  const employees = data;
  employees.forEach((employee) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <div class="card-img-container">
            <img class="card-img" src="${employee.picture.large}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${employee.name.first} ${employee.name.last}</h3>
            <p class="card-text">${employee.email}</p>
            <p class="card-text cap">${employee.location.city}, ${employee.location.state}</p>
        </div>
        `;

    galleryDisplay.appendChild(card);
  });
}

// function to display the modal window when a card is clicked

function displayModal(data) {
