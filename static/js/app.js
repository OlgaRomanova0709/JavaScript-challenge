// from data.js
var tableData = data;
var tbody=d3.select("tbody");
var filter_btn=d3.select("#filter-btn")
var initial_btn=d3.select("#filter-btn2")

function getOption() {
    var obj = document.getElementById("mySelect");
    var choice=obj.options[obj.selectedIndex].text;
    console.log(choice);
    search_date=d3.select(".form-control").property("value","");
    if (choice==="city") {
        d3.select(".form-control").attr("placeholder","el cajon");
    }
    else if (choice==="state") {
        d3.select(".form-control").attr("placeholder","ca");
    }
    else if (choice==="country") {
        d3.select(".form-control").attr("placeholder","us");
    }
    else if (choice==="shape") {
        d3.select(".form-control").attr("placeholder","triangle");
    }
}
//Initial input//
initial_btn.on("click",function() {
    tableData.forEach((i) => {
        var tr=tbody.append("tr")
        Object.entries(i).forEach(([key,value]) => {
            var td=tr.append("td");
            td.text(value);
        })
    })
})
//How to perform filter function//
var tableDataWork=tableData;
filter_btn.on("click",function() {
    var search_date=d3.select(".form-control").property("value");
    var obj = document.getElementById("mySelect");
    var choice=obj.options[obj.selectedIndex].text;
    var filterData=tableDataWork.filter(i => i[choice]===search_date);
    
    tbody.text("");
    filterData.forEach((i) => {
        var tr=tbody.append("tr")
        Object.entries(i).forEach(([key,value]) => {
            var td=tr.append("td");
            td.text(value);
        });
    });
    tableDataWork=filterData;
});


