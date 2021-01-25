// Delay navBar if table is slow
function show() {
    AB = document.getElementById('navBar');
    AB.style.display = 'flex';
}
setTimeout("show()", 0);
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