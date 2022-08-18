google.charts.load("current", {packages:["corechart"]});
let somedata = [
    ["eng",60,"C4"],
    ["social",80,"A1"],
    ["Maths",70,"B2"],
    ["history",65,"B2"],
    ["biology",75,"A1"],
    ["physics",55,"c5"],
    ["chemistry",85,"A1"],
    ["government",45,"f9"],
];

function getScore(grade){
    switch(grade){
        case 1:
         return 85;
        case 2: 
         return 75;
        case 3:
         return 67;
        case 4:
         return 63;
        case 5:
         return 57;
        case 6:
         return 52;
        case 7:
         return 47;    
        case 8:
         return 42; 
        case 9:
         return 37;
        default :
         return 0;

    }
}

function getColor(grade){
    switch(grade){
        case 1:
         return "green";
        case 2: 
         return "darkgreen";
        case 3:
         return "greenyellow";
        case 4:
         return "dodgerblue";
        case 5:
         return "darkblue";
        case 6:
         return "blue";
        case 7:
         return "cornflowerblue";    
        case 8:
         return "crimson"; 
        case 9:
         return "red";
        default :
         return "black";

    }
}

fetch('/users/grades',{
    method:"GET"
}).then(response=>response.json()).then(
    result=>{
        let data = result.split(",");
        let newdata = data.map(elem=>elem.split("="));
        newdata.map(elem=>{
            elem.push(getScore(parseInt(elem[1])));
            elem.push(getColor(parseInt(elem[1])));
        })

    
        google.charts.setOnLoadCallback(()=>drawChart(newdata));
    }
    
).catch(err=>{
    console.log(err);
});


function drawChart(data) {
    var data = google.visualization.arrayToDataTable([
    ["Subject", "Score", { role: "style" },{role:'annotation'} ],
    [`${data[0][0]}`,data[0][2],`color:${data[0][3]};margin:10px`,`${data[0][2]}`],
    [`${data[1][0]}`,data[1][2],`color:${data[1][3]};margin:10px`,`${data[1][2]}`],
    [`${data[2][0]}`,data[2][2],`color:${data[2][3]};margin:10px`,`${data[2][2]}`],
    [`${data[3][0]}`,data[3][2],`color:${data[3][3]};margin:10px`,`${data[3][2]}`],
    [`${data[4][0]}`,data[4][2],`color:${data[4][3]};margin:10px`,`${data[4][2]}`],
    [`${data[5][0]}`,data[5][2],`color:${data[5][3]};margin:10px`,`${data[5][2]}`],
    [`${data[6][0]}`,data[6][2],`color:${data[6][3]};margin:10px`,`${data[6][2]}`],
    [`${data[7][0]}`,data[7][2],`color:${data[7][3]};margin:10px`,`${data[7][2]}`]
    
    // ["GKA",45,'color:brown',"E8"]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,2,3]);

    var options = {
    title: "WASSCE GRADES",
    width: 800,
    height: 600,
    titleTextStyle:{
        fontSize:24
    },
    bar: {groupWidth: "90%",gap: "10%"},
    legend: { position: "none" },
    };
    
    var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
    chart.draw(view, options);
}
