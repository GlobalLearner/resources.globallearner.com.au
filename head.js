function showNavBar() {
    AB = document.getElementById('navBar');
    AB.style.display = 'flex';
}
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
var JSONdata = [];
