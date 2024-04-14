# Brewery Search App

My  README provides detailed information about the Brewery Search App, its functionality, and usage.

# Overview
The Brewery Search App is a web application that allows users to search for breweries using a search input. It utilizes the Open Brewery DB API to fetch brewery data based on the user's search input and displays the results on the page. Users can view details about each brewery, including its location on a map, and share brewery information on social media platforms.

## Setup
To use the Brewery Search App, follow these steps:
1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser.

## Features
## Search Breweries
The `searchBreweries` function is responsible for handling the search input and fetching brewery data from the Open Brewery DB API. It utilizes `fetch` to make an asynchronous API call and `setTimeout` to delay the API request until the user stops typing. If the search input is empty, no API request is made.

## Display Breweries
The `displayBreweries` function takes the retrieved brewery data and dynamically creates HTML elements to display the brewery names, locations, and types. It also adds event listeners to allow users to view details and location of each brewery.

## Display Brewery Details
The `displayBreweryDetails` function creates a detailed view of a brewery, including its name, location, type, and website. It also includes social sharing buttons for Facebook, Twitter, and LinkedIn.

## Display Brewery Location
The `displayBreweryLocation` function embeds a map of the brewery's location using OpenStreetMap.

### Social Sharing
Functions like `shareOnFacebook`, `shareOnTwitter`, and `shareOnLinkedIn` are responsible for opening shareable links for the respective social media platforms. These functions are invoked when users click on the social sharing buttons.

## Brewery Details and User Interaction
The `BreweryDetails` function populates the details of a brewery, including its address, contact information, opening hours, and description. It also includes a photo gallery and a section for user reviews. Additionally, there are functions for submitting comments and saving user profiles.

# Example Usage
To use the Brewery Search App, follow these steps:
1. Enter the name of a brewery in the search input.
2. Wait for the search results to display, and if it takes too long for the results to be displayed on the webpage then it means that we couldnt find the brewery ehich you were searching for.
3. Click on a brewery to view its details and double click to view its location on the map.
4. You can Share brewery information on social media using the provided buttons.

# Additional Notes
- The Brewery Search App includes sample data for a brewery and user profile data to demonstrate its functionality.
- The app provides interactive features for user engagement, such as submitting comments and saving user profiles.

# Conclusion
The Brewery Search App is a user-friendly web application that allows users to discover and explore breweries with ease. Its intuitive interface and interactive features make it a valuable tool for brewery enthusiasts and casual users alike.

For more detailed information, refer to the JavaScript code in the repository.
