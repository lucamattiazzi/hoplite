function showGraphs(){
    google.charts.setOnLoadCallback(drawCharts);

    function drawCharts() {
      var histogram_values = document.histogram
      var histogram_data = google.visualization.arrayToDataTable(histogram_values);
      var pie_values = document.pie
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
};

$(function(){
	if($('#charts').length){
	  showGraphs();
	}
});