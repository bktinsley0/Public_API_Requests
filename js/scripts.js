// fetching data from '"https://randomuser.me/api/?results=12&nat=us"' and displaying it on the page
// https://dimitripavlutin.com/javascript-fetch-async-await/
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

const galleryDisplay = document.getElementById("gallery");
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

  // helper function to get the birthday
  let birthday = new Date(employees.dob.date)
    .toLocaleDateString("en-US")
    .split("/"); //splitting the date to get the month, day and year

  const modal = employees.map(
    (employee) => `
   <div class="modal-container">
   <div class="modal">
   <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
   <div class="modal-info-container">
       <img class="modal-img" src="${
         employee.picture.thumbnail
       }" alt="profile picture">
       <h3 id="name" class="modal-name cap">${employee.name.first} ${
      employee.name.last
    }</h3>
       <p class="modal-text">${employee.email}</p>
       <p class="modal-text cap">${employee.location.city}</p>
       <hr>
       <p class="modal-text">${employee.cell}</p>
       <p class="modal-text">${employee.location.street.number} ${
      employee.location.street.name
    },${employee.location.city} ${employee.location.state} ${
      employee.location.postcode
    }</p>
       <p class="modal-text">Birthday:  ${
         birthday[0] + "/" + birthday[1] + "/" + birthday[2]
       }</p>
   </div>
    </div>
    `
  );
  galleryDisplay.insertAdjacentHTML("afterend", modal);
}
