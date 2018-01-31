var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["C#", "JavaScript", "SQL"],
        datasets: [{
            data: [12, 12, 12],
            backgroundColor: [
                'rgba(255, 99, 140, 0.2)',
                'rgba(54, 162, 140, 0.2)',
                'rgba(255, 206, 140, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,140,1)',
                'rgba(54, 162, 140, 1)',
                'rgba(255, 206, 140, 1)',
            ],
            borderWidth: 1
        }]
    },
    options:{
        onClick: graphClickEvent
    }
});

function graphClickEvent(event, array){
    if(array[0]){
        window.location.href = array[0]._model.label+".html";
    }
    
    if(array[0] && array[0]._model.backgroundColor == 'rgba(255, 99, 140, 0.2)'){
    }
    else if(array[0] && array[0]._view.backgroundColor == 'rgba(54, 162, 140, 0.2)'){
        window.location.href = "Compétences.html";
    }
    else if(array[0] && array[0]._view.backgroundColor == 'rgba(255, 206, 140, 0.2)'){
        window.location.href = "Compétences.html";
    }
}