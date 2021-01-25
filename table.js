// Create table
var table = new Tabulator("#resources-table", {
    ajaxLoader: false,
    data:JSONdata,
    layout:"fitColumns",
    resizableColumns:false,
    responsiveLayout:"hide", 
    placeholder: "No Data",
    layoutColumnsOnNewData:true,
    height:"90vh",
    pagination:"local",
    paginationSize:200,
    groupBy:"Subject",
    initialSort:[             
        {column:"Year", dir:"asc"},
    ],
    columns:[
        {title:"Year", field:"Year", width:85, sorter:"number",responsive: 2},
        {title:"Subject", field:"Subject", width:245, sorter:"string", responsive: 2},
        {title:"Date Created", field:"Date_Created", width:160, responsive:3, headerSort:false},
        {title:"Title", field:"Title", minWidth:220, responsive:0, formatter: 'textarea', headerSort:false},
        {title:"Link", field:"Link", formatter:"link", formatterParams:{label:"Download", target:"_blank", rel:"noreferrer"}, width:115, responsive:0, headerSort:false},
        {title:"Size (MB)", field:"Size_(MB)", width:150, responsive:4},
        {title:"File Type", field:"File_Type", width:135, responsive:2},
        {title:"ID", field:"ID", width:69, sorter:"number", responsive:1}
    ],
});
window.addEventListener('resize', function(){
    table.redraw();
});
// Search
const input = document.getElementById("resourceSearch");
input.addEventListener("keyup", function() {
    table.setFilter(matchAny, { value: input.value });
    if (input.value == " ") {
        table.clearFilter()
    }
});
function matchAny(data, filterParams) {
    var match = false;
    const regex = RegExp(filterParams.value, 'i');
    for (var key in data) {
        if (regex.test(data[key]) == true) {
            match = true;
        }
    }
    return match;
};