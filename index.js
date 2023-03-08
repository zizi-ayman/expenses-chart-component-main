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
    
    new Chart("myChart", {
      type: "bar",
      data: {
          labels: xvalue,
          datasets: [{
            data: yvalue
          }]
      },
      options: {}
    });
  })

