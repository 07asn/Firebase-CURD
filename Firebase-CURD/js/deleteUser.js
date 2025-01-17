// (1) Imports
import { database } from "./config.js";
import { ref, remove } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";


// (2) Function to send data into Firebase
function deleteUser(userId) {
    remove(ref(database, 'users/' + userId))
    .then(() => {
        alert("User Deleted Successfully!");
    })
    .catch((error) => {
        alert(error);
    })
}


// (3) Handle Form in HTML
document.getElementById('deleteUserForm').addEventListener('submit', (event) =>{
    event.preventDefault();
    const userId = document.getElementById('userId').value;
    deleteUser(userId);
})
