var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["C#", "Js", "SQL"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options:{
        onClick: graphClickEvent
    }
});

function graphClickEvent(event, array){
    if(array[0] && array[0]._view.backgroundColor == 'rgba(255, 99, 132, 0.2)'){
        window.location.href = "Compétences.html";
    }
    else if(array[0] && array[0]._view.backgroundColor == 'rgba(54, 162, 235, 0.2)'){
        window.location.href = "Compétences.html";
    }
    else if(array[0] && array[0]._view.backgroundColor == 'rgba(255, 206, 86, 0.2)'){
        window.location.href = "Compétences.html";
    }
}