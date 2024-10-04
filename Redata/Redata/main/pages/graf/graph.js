function sampleChart(canvas) {
  var xValues = [50,60,70,80];
var yValues = [7,8,10,11,11];

new Chart(canvas, {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]  
  },
  options: {
    legend: {display: false},
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2.5,
  }
});
}

sampleChart(document.getElementById('myChart'))
