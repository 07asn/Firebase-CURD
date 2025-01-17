// (1) Imports
import { database } from "./config.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";


// (2) Function to send data into Firebase
        function createUser(userId, firstName, lastName) {
            set(ref (database, 'users/' + userId),{   
                firstName: firstName,
                lastName: lastName,
            })
            .then(() => {
                alert('Data saved successfully!');
            })
            .catch((error) => {
                console.error('Error saving data:', error);
            });
        }


// (3) Handle Form in HTML
        document.getElementById('createUserForm').addEventListener('submit', (event) => {
            event.preventDefault(); 
            const firstName = document.getElementById('fname').value;
            const lastName = document.getElementById('lname').value;
            const userId = new Date().getTime().toString();
            createUser(userId, firstName, lastName);
        });