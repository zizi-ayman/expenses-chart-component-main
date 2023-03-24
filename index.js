// read local JSON file in javascript
fetch("./data.json")
  .then(function (response) {
    return response.json();
  }).then(function (json) {
    
    xvalue = [];
    yvalue = [];

    json.forEach(element => {
      xvalue.push(element.day);
      yvalue.push(element.amount);
    });
    
    var ctx = document.getElementById('myChart').getContext('2d');
    new Chart( ctx, {
      type: "bar",
      data: {
          labels: xvalue,
          datasets: [{
            data: yvalue,
            backgroundColor: function(context) {
              var index = context.dataIndex;
              var value = context.dataset.data[index];
              return index === new Date().getDay() ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)';
            }
          }]
      },
      options: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Spending - Last 7 days',
          fontSize: 17,
          fontColor: 'black'
        },
        scales: {
          xAxes: [{
              gridLines: {
                  display: false, // turn off x-axis grid lines
              }
          }],
          yAxes: [{
              display: false, // turn off the y-axis
              gridLines: {
                  display: false, // turn off y-axis grid lines
              }
          }]
        },
      }
    });
  })

