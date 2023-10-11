document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector('.header .navbar');
  

  // Function to open the mobile menu
  const openMenu = () => {
    navbar.classList.add('active');
  };

  // Function to close the mobile menu
  const closeMenu = () => {
    navbar.classList.remove('active');
  };

  // Open the mobile menu when the menu button is clicked
  menuButton.onclick = openMenu;

  // Close the mobile menu when the close button is clicked
  closeNavbar.onclick = closeMenu;

  // Close the mobile menu if the user clicks outside the menu
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuButton.contains(e.target)) {
      closeMenu();
    }
  });
});

   // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCtbkkscM_8XwBToDJ_UgXTvqKzeUBQ_QA",
    authDomain: "scsvmvcultural.firebaseapp.com",
    databaseURL: "https://scsvmvcultural-default-rtdb.firebaseio.com",
    projectId: "scsvmvcultural",
    storageBucket: "scsvmvcultural.appspot.com",
    messagingSenderId: "209291109952",
    appId: "1:209291109952:web:b482c3cfcd044b6dd761a5"



  };
   firebase.initializeApp(firebaseConfig);
  const scsvmvculturalDB = firebase.database().ref('scsvmvcultural');
  function saveMessage(name, email, mobileNumber, registerno,year) {
    const newAdmissionForm = scsvmvculturalDB.push();
      newAdmissionForm.set({
        name: name,
        email: email,
        mobilenumber: mobileNumber,
        registerno: registerno,
        year:year,
       
    }, (error) => {
        if (error) {
          console.error('Error saving data:', error);
        } else {
          // Show the success message
          const successMessage = document.getElementById('success-message');
          successMessage.style.display = 'block';
          setTimeout(() => {
            successMessage.style.display = 'none';
          }, 10000);
        }
      });
    }
    
   
  // Handle form submission
  document.getElementById('admission-form').addEventListener("submit", (e) => {
    e.preventDefault();
  
    const name = getElementVal('name');
    const email = getElementVal('email');
    const mobilenumber = getElementVal('mobilenumber');
    const registerno = getElementVal('registerno');
    const year = document.getElementById('year').value;
   

  
    
  
    if (name.trim() === '' ||email.trim() === ''|| mobilenumber.trim() === '' || registerno.trim() === ''|| year === '' ) {
      alert("Please fill in all the required fields.");
    } else {
      saveMessage(name, email, mobilenumber, registerno,year);
      window.location.href = 'poster.html';
    }
  });
  
  
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

  
  
  
  