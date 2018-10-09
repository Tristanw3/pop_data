var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["2011", "2016", "2021", "2026", "2031", "2036"],
        datasets: [{
            label: "Low Series Projection",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 150, 132)',
            data: [7218550, 7709400, 8194450, 8633200, 9030000, 9379600],
        }, {
            label: "Main Series Projection",
            backgroundColor: 'rgb(100,100,100)',
            borderColor: 'rgb(0,0,0)',
            data: [7218550, 7748000, 8297500, 8844700, 9386850, 9925550]
        }, {
            label: "High Series Projection",
            backgroundColor: 'rgb(50,250,100)',
            borderColor: 'rgb(0,0,0)',
            data: [7218550, 7795300, 8414700, 9068950, 9752050, 10467100]
        }]
    },

    // Configuration options go here
    options: {}
});

