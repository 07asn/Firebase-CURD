// (1) Imports
import { database } from "./config.js";
import { ref, update } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";


// (2) Function to send data into Firebase
function updateUserData(userId, firstName, lastName) {
    update(ref(database, 'users/' + userId), {
        firstName: firstName,
        lastName: lastName,
    })
    .then(() => {
        alert('User updated successfully!');
    })
    .catch((error) => {
        console.error('Error updating data:', error);
    });
}

// (3) Handle Form in HTML
document.getElementById('updateUserForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const userId = document.getElementById('updateUserId').value;
    const firstName = document.getElementById('updateFname').value;
    const lastName = document.getElementById('updateLname').value;
    updateUserData(userId, firstName, lastName);
});
