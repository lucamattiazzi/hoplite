google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
  var histogram_values = 
  var histogram_data = google.visualization.arrayToDataTable(histogram_values);
  var pie_values = 
  var pie_data = google.visualization.arrayToDataTable(pie_values);


  var histogram_options = {
    title: 'Distribuzione Panoplie',
  };
  var pie_options = {
    title: 'Distribuzione Vendite',
    is3D: true,
  };



  var histogram = new google.visualization.BarChart(document.getElementById('histogram_container'));
  histogram.draw(histogram_data, histogram_options);


  var pie = new google.visualization.PieChart(document.getElementById('pie_container'));
  pie.draw(pie_data, pie_options);
}
