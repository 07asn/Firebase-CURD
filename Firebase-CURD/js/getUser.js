// (1) Imports
import { database } from "./config.js";
import { ref, get } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";


// (2) Function to send data into Firebase
function getUserData(userId) {
    get(ref(database, 'users/' + userId))
        .then((user) => {
            if (user.exists()) {
                const firstName = user.val().firstName;
                const lastName = user.val().lastName;
                alert(`User Found: ${firstName} ${lastName}`);
            } else {
                alert('User Not Found');
            }
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}

// (3) Handle Form in HTML
document.getElementById('getUserForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const userId = document.getElementById('userId').value;
    getUserData(userId);
});
