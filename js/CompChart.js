var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["C#", "Javascript", "AngularJS", "SQL", "Autres"],
        datasets: [{
            data: [25, 7, 7,2, 1],
            backgroundColor: [
                'rgba(161, 72, 72, 0.2)',
                'rgba(17, 131, 109, 0.2)',
                'rgba(31, 118, 176, 0.2)',
                'rgba(44, 62, 80, 0.2)',
                'rgba(243, 156, 18, 0.2)'
            ],
            borderColor: [
                'rgba(161, 72, 72, 1)',
                'rgba(17, 131, 109, 1)',
                'rgba(31, 118, 176, 1)',
                'rgba(44, 62, 80, 1)',
                'rgba(243, 156, 18, 1)'
                
            ],
            borderWidth: 1
        }]
    },
    options:{
        onClick: graphClickEvent,
        tooltips: {
            enabled: false
       },
       legend: {
        onClick: undefined
       }
    },
});

function graphClickEvent(event, array){
    if(array[0]){
        var href = array[0]._model.label+".html"
        window.location.href = href;
        if (array[0]._model.label == "C#") {
            window.location.href ="CSharp.html";
        }
    }
}