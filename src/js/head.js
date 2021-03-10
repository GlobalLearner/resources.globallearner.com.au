// Enable NavBar onLoad
function showNavBar() {
    AB = document.getElementById('navBar');
    AB.style.display = 'flex';
}

// Load tabulator with empty JSON and placeholder. Avoids initial delay.
var JSONdata = [];
var placeholder = "Fetching data...";
function changePlaceholder () {
    placeholderText.innerHTML = "No results found.";
};

//var placeholder = document.getElementById('placeholderText').textContent;

// Fetch JSON and change placeholder
const getJSON = async url => {
    try {
        const response = await fetch(url);
        if(!response.ok) 
        throw new Error(response.statusText);
        const data = await response.json();
        return data; 
    } catch(error) {
        return error;
    }
};