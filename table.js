// Create table
var table = new Tabulator("#resources-table", {
    ajaxLoader: false,
    data: JSONdata,
    layout: "fitColumns",
    resizableColumns: false,
    responsiveLayout: "hide",
    placeholder: placeholder,
    layoutColumnsOnNewData: true,
    headerFilterLiveFilterDelay: 0,
    height: "90vh",
    pagination: "local",
    paginationSize: 500,
    headerFilterPlaceholder: "Filter",
    columnHeaderVertAlign: "middle",
    initialSort: [
        { column: "Subject", dir: "des" },
    ],
    groupBy: "Subject",
    columns: [
        { title: "Year", field: "Year", width: 125, sorter: "number", responsive: 2, headerFilter: "input", headerFilterPlaceholder: "Filter by Year", headerFilterFunc: "=" },
        { title: "Subject", field: "Subject", width: 265, sorter: "string", responsive: 2 }, //headerFilter:true,headerFilterPlaceholder:"Filter by Subject"
        { title: "Date Created", field: "Date_Created", width: 200, responsive: 3 }, //, headerFilter:true, headerFilterPlaceholder:"Filter by Date"
        { title: "Title", field: "Title", minWidth: 220, formatter: "textarea", responsive: 0 }, //, headerFilter:"input", headerFilterPlaceholder:"Filter by Title"
        { title: "Source", field: "Source", width: 250, formatter: "textarea", sorter: "string", responsive: 2 }, //, headerFilter:true, headerFilterPlaceholder:"Filter by Source"
        { title: "Link", field: "Link", formatter: "link", formatterParams: { label: "Download", target: "_blank", rel: "noreferrer" }, width: 115, responsive: 0, headerSort: false },
        { title: "Size (MB)", field: "Size_(MB)", formatter: "money", width: 150, responsive: 4 },
        { title: "File Type", field: "File_Type", width: 135, responsive: 2, headerFilter: true, headerFilterPlaceholder: "Filter by Type" },
        { title: "ID", field: "ID", width: 99, sorter: "number", responsive: 1, headerFilter: true, headerFilterPlaceholder: "Filter by ID", headerFilterFunc: "=" }
    ],
});
window.addEventListener('resize', function () {
    table.redraw();
});
// Search
const input = document.getElementById("resourceSearch");
input.addEventListener("keyup", function () {
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
