// Declare a variable to store the ID of the timeout

let timeoutId;
// Function to search breweries based on user input
async function searchBreweries() {
   // Get the search input value and trim any whitespace
  const searchInput = document.getElementById('searchInput').value.trim();
  // If the search input is empty, return
  if (searchInput === '') {
    return;
  }
// If there is an existing timeout, clear it
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
 // Set a new timeout to fetch brewery data after 500ms of user inactivity
  timeoutId = setTimeout(async () => {
    const response = await fetch(`https://api.openbrewerydb.org/breweries?by_name=${searchInput}`);
    const data = await response.json();
    displayBreweries(data);
  }, 500);
}
// Function to display a list of breweries
function displayBreweries(breweries) {
  const breweryList = document.getElementById('breweryList');
  breweryList.innerHTML = '';
   // Loop through each brewery and create a div element for it
  breweries.forEach(brewery => {
    const breweryDiv = document.createElement('div');
    breweryDiv.innerHTML = `
      <h3>${brewery.name}</h3>
      <p>${brewery.city}, ${brewery.state}</p>
      <p>Type: ${brewery.brewery_type}</p>
    `;
     // Add click and double click event listeners to show details and location respectively
    breweryDiv.addEventListener('click', () => {
      displayBreweryDetails(brewery);
    });
    breweryDiv.addEventListener('dblclick', () => {
      displayBreweryLocation(brewery);
    });
    breweryList.appendChild(breweryDiv);
  });
}
// Function to display detailed information about a brewery
function displayBreweryDetails(brewery) {
   // Create a div element to display brewery details
  const detailsDiv = document.createElement('div');
  detailsDiv.innerHTML = `
    <h2>${brewery.name}</h2>
    <p>City: ${brewery.city}</p>
    <p>State: ${brewery.state}</p>
    <p>Type: ${brewery.brewery_type}</p>
    <p>Website: <a href="${brewery.website_url}" target="_blank">${brewery.website_url}</a></p>
  `;
  
  // Clear existing details before displaying new details
  const existingDetails = document.getElementsByClassName('brewery-details');
  if (existingDetails.length > 0) {
    existingDetails[0].remove();
  }
  // Add a class to the details div and append it to the brewery list
  detailsDiv.classList.add('brewery-details');
  document.getElementById('breweryList').appendChild(detailsDiv);
}
// Function to display a map location of the brewery
function displayBreweryLocation(brewery) {
   // Create a div element to display the map
  const mapDiv = document.createElement('div');
  mapDiv.innerHTML = `
    <iframe
      width="600"
      height="450"
      frameborder="0"
      style="border:0"
      src="https://www.openstreetmap.org/export/embed.html?bbox=${brewery.longitude},${brewery.latitude},${brewery.longitude},${brewery.latitude}&layer=mapnik"
      allowfullscreen
    ></iframe>
  `;
  
  // Clear existing map before displaying new map
  const existingMap = document.getElementsByClassName('brewery-map');
  if (existingMap.length > 0) {
    existingMap[0].remove();
  }
  // Add a class to the map div and append it to the brewery list
  mapDiv.classList.add('brewery-map');
  document.getElementById('breweryList').appendChild(mapDiv);
}
// Add event listener to the search input to trigger brewery search
document.getElementById('searchInput').addEventListener('input', searchBreweries);
// Functions for social sharing on Facebook, Twitter, and LinkedIn
function shareOnFacebook(breweryName) {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=Check out ${breweryName} on Brewery Search App!`;
    window.open(url, '_blank');
  }
  
  function shareOnTwitter(breweryName) {
    const url = `https://twitter.com/intent/tweet?text=Check out ${breweryName} on Brewery Search App!&url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  }
  
  function shareOnLinkedIn(breweryName) {
    const url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=Check out ${breweryName} on Brewery Search App!`;
    window.open(url, '_blank');
  }
  
  function displaySocialSharingButtons(breweryName) {
    const socialButtonsDiv = document.createElement('div');
    
    const facebookButton = document.createElement('button');
    facebookButton.textContent = 'Share on Facebook';
    facebookButton.addEventListener('click', () => shareOnFacebook(breweryName));
    
    const twitterButton = document.createElement('button');
    twitterButton.textContent = 'Share on Twitter';
    twitterButton.addEventListener('click', () => shareOnTwitter(breweryName));
    
    const linkedInButton = document.createElement('button');
    linkedInButton.textContent = 'Share on LinkedIn';
    linkedInButton.addEventListener('click', () => shareOnLinkedIn(breweryName));
    
    socialButtonsDiv.appendChild(facebookButton);
    socialButtonsDiv.appendChild(twitterButton);
    socialButtonsDiv.appendChild(linkedInButton);
    
    document.getElementById('breweryList').appendChild(socialButtonsDiv);
  }
  
  // Call this function when displaying brewery details
  function displayBreweryDetails(brewery) {
    const detailsDiv = document.createElement('div');
    detailsDiv.innerHTML = `
      <h2>${brewery.name}</h2>
      <p>City: ${brewery.city}</p>
      <p>State: ${brewery.state}</p>
      <p>Type: ${brewery.brewery_type}</p>
      <p>Website: <a href="${brewery.website_url}" target="_blank">${brewery.website_url}</a></p>
    `;
    
    // Clear existing details before displaying new details
    const existingDetails = document.getElementsByClassName('brewery-details');
    if (existingDetails.length > 0) {
      existingDetails[0].remove();
    }
    
    detailsDiv.classList.add('brewery-details');
    document.getElementById('breweryList').appendChild(detailsDiv);
    
    displaySocialSharingButtons(brewery.name);
  }// Sample data for a brewery
const breweryData = {
    name: "My Brewery Project",
    address: "123 Main St, Cityville",
    contact: "555-123-4567",
    hours: "Mon-Fri: 12pm-8pm, Sat-Sun: 10am-10pm",
    description: "This is a sample description of the brewery.",
};

// Function to display brewery details on the page

function BreweryDetails(breweryData) {
    const breweryDetails = document.getElementById('breweryDetails2');
    breweryDetails.innerHTML = `
        <h2>${breweryData.name}</h2>
        <p><strong>Address:</strong> ${breweryData.address}</p>
        <p><strong>Contact:</strong> ${breweryData.contact}</p>
        <p><strong>Opening Hours:</strong> ${breweryData.hours}</p>
        <p>${breweryData.description}</p>
        
        <div id="photoGallery">
            <!-- Add photo gallery images here -->
        </div>

        <div id="reviews">
            <h3>Reviews</h3>
            <div id="userReviews">
                <!-- User reviews will be populated here -->
            </div>

            <h3>Submit a Review</h3>
            <form id="reviewForm">
                <input type="text" placeholder="Your Name" id="userName">
                <textarea placeholder="Write your review here" id="reviewContent"></textarea>
                <input type="number" placeholder="Rating (1-5)" id="reviewRating">
                <button type="button" onclick="submitReview()">Submit Review</button>
            </form>
        </div>
    `;
}
BreweryDetails(breweryData);


// Call the function to display brewery details when the page loads


// Sample user profile data


// Call functions to handle user interactions when the page loads
window.onload = function() {
    // Example: Call login function to authenticate user
    login();
    // Example: Call function to handle social interactions
    handleSocialInteractions();
}

function submitComment(event) {
    event.preventDefault();
    const name = document.getElementById("nameInput").value;
    const brewery = document.getElementById("breweryInput").value;
    const rating = document.getElementById("ratingInput").value;
    const comment = document.getElementById("commentInput").value;
  
    const commentInfo = {
        name: name,
        brewery: brewery,
        rating: rating,
        comment: comment
    };
  
    // Display the comment on the webpage
    const commentsSection = document.getElementById("comments");
    const commentElement = document.createElement("div");
    commentElement.innerHTML = `<strong>${name}</strong> commented about <em>${brewery}</em> and rated it ${rating}/5: "${comment}"`;
    commentsSection.appendChild(commentElement);
    
    // Clear the input fields
    document.getElementById("nameInput").value = "";
    document.getElementById("breweryInput").value = "";
    document.getElementById("ratingInput").value = "";
    document.getElementById("commentInput").value = "";
  }
  function displayMessage(message) {
    document.getElementById("message").innerText = message;
  }
  

function saveProfile(event) {
    event.preventDefault();
    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;
  
    // Check if the user is a first-time user or a common user
    const storedPassword = localStorage.getItem("password");
    if (storedPassword === null) {
        // First-time user
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        displayMessage("Profile created successfully!");
    } else {
        // Common user
        if (password === storedPassword) {
            displayMessage("Welcome back, " + username + "!");
        } else {
            displayMessage("Incorrect password. Please try again or create a new profile.");
        }
    }
  }
  document.getElementById("saveProfileButton").addEventListener("click", saveProfile);
  
