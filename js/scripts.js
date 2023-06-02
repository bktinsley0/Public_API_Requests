// fetching data from 'https://randomuser.me/api/' and displaying it on the page

// async function getEmployees(url) {
//   const response = await fetch(url);
//   const data = await response.json();
//   const employees = data.results;
//   return employees;
// }
fetch("https://randomuser.me/api/?results=12&nat=us")
  .then((response) => response.json())
  .then((data) => displayEmployees(data.results))
  .catch((error) => console.log(error));

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
// function displayModal(data, i) {
//   const employees = data;
//   let birthday = new Date(employees.dob.date)
//     .toLocaleDateString("en-US")
//     .split("/"); //splitting the date to get the month, day and year

//   const modal = `
//    <div class="modal-container">
//    <div class="modal">
//    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
//    <div class="modal-info-container">
//        <img class="modal-img" src="${
//          employees.picture.thumbnail
//        }" alt="profile picture">
//        <h3 id="name" class="modal-name cap">${employees.name.first} ${
//     employees.name.last
//   }</h3>
//        <p class="modal-text">${employees.email}</p>
//        <p class="modal-text cap">${employees.location.city}</p>
//        <hr>
//        <p class="modal-text">${data.cell}</p>
//        <p class="modal-text">${data.location.street.number} ${
//     data.location.street.name
//   },${data.location.city} ${data.location.state} ${data.location.postcode}</p>
//        <p class="modal-text">Birthday:  ${
//          birthday[0] + "/" + birthday[1] + "/" + birthday[2]
//        }</p>
//    </div>
//     </div>
//     `;
//   galleryDisplay.insertAdjacentHTML("afterend", modal);

// }
