$("#userSubmit").on("click", function() {
    //     // grabbing values and clearing form
        var userEntry = document.getElementById("userEntry").value;


// sentiment
var dataBody = {
    id: 1,
    string: userEntry
}

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://eastus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment",
    "method": "POST",
    "headers": {
      "Ocp-Apim-Subscription-Key": "196582ad71c843a4bc3577a865665b8b",
      "Content-Type": "application/json",
      "Accept": "application/json",
      "cache-control": "no-cache",
      "Postman-Token": "8df21c0e-7667-4e28-a39d-3a2d1ec37e62"
    },
    "processData": false,
    "data": `{\n        \"documents\":[\n            {\n                \"language\": \"en\",\n                \"id\": \"${dataBody.id}\",\n                \"text\": \"${dataBody.string}\"\n            }`
  }
$.ajax(settings).done(function (response) {
            console.log(response.documents[0].score);

            var scoreDiv = $("<h3>");
            scoreDiv.text(`Your score was ${response.documents[0].score}.`);
            $("#results").append(scoreDiv);

            // $("#results").css
          }); 

var anger;
var joy;
var fear;
var sadness;
var surprise;
// emotion
    fetch(
    'https://apiv2.indico.io/emotion', {
        method: 'POST',
        body: JSON.stringify({
            'api_key': "472f187a7c554f42d719990a387ff96c",
            'data': `${userEntry}`,
            'threshold' : 0.3
          })
    }
    
  ).then(r => r.json())
  .then(response => { 

  if (response.results.hasOwnProperty('anger')) {
    anger == true;
    console.log("Anger");
  }
  
  if (response.results.hasOwnProperty('joy')) {
    joy == true;
    console.log("Joy");
  }
  
  if (response.results.hasOwnProperty('fear')) {
    fear == true;
    console.log("Fear");
  } 
  
  if (response.results.hasOwnProperty('sadness')) {
    sadness == true;
    console.log("Sadness");
  } 
  
  if (response.results.hasOwnProperty('surprise')) {
    surprise == true;
    console.log("Surprise");
  } 
  
    console.log(response.results);
    console.log(response)

  });


});

// add toggle functionality for ability to become more or less positive