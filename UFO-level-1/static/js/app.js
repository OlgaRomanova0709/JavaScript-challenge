// from data.js
var tableData = data;
var tbody=d3.select("tbody");

//Initial input//
tableData.forEach((i) => {
    var tr=tbody.append("tr")
    Object.entries(i).forEach(([key,value]) => {
        var td=tr.append("td");
        td.text(value);
    })
})

var filter_btn=d3.select("#filter-btn")

//How to perform filter function//

filter_btn.on("click",function() {
    var search_date=d3.select(".form-control").property("value");
    var filterData=tableData.filter(i => i.datetime===search_date);
    tbody.text("");
    filterData.forEach((i) => {
        var tr=tbody.append("tr")
        Object.entries(i).forEach(([key,value]) => {
            var td=tr.append("td");
            td.text(value);
        });
    });
});


