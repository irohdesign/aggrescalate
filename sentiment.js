$("#userSubmit").on("click", function () {
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

    let rawScore = (response.documents[0].score * 100).toFixed(4);

    let scorePercent = `${Math.floor(response.documents[0].score * 100)}%`;

    let scoreMessage;

    if (rawScore > 85) {
      scoreMessage = "Your score was very positive!";
      scoreMessaging(scoreMessage);
    } else if (85 > rawScore >= 60) {
      scoreMessage = "Your score was positive.";
      scoreMessaging(scoreMessage);
    } else if (60 > rawScore >= 45) {
      scoreMessage = "Your score was slightly positive.";
      scoreMessaging(scoreMessage);
    } else if (45 > rawScore > 30) {
      scoreMessage = "Your score was slightly negative.";
      scoreMessaging(scoreMessage);
    } else if (30 >= rawScore >= 10) {
      scoreMessage = "Your score was negative.";
      scoreMessaging(scoreMessage);
    } else if (rawScore < 10) {
      scoreMessage = "Your score was very negative!";
      scoreMessaging(scoreMessage);
    }

    function scoreMessaging(e) {
      console.log(e, scorePercent);
    }

    var scoreDiv = $("<h3>");
    scoreDiv.text(`Your score was ${rawScore}%.`);
    $("#results").append(scoreDiv);

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
        'threshold': 0.3
      })
    }

  ).then(r => r.json())
    .then(response => {

      let emotionArr = [];

      anger = Math.floor(response.results.anger * 100);
      joy = Math.floor(response.results.joy * 100);
      fear = Math.floor(response.results.fear * 100);
      sadness = Math.floor(response.results.sadness * 100);
      surprise = Math.floor(response.results.surprise * 100);

      console.log(response.results);
      if (response.results.hasOwnProperty('anger')) {
        anger == true;
        emotionArr.push(`Anger ${anger}%`)
      } else if (response.results.hasOwnProperty('joy')) {
        joy == true;
        emotionArr.push(`Joy ${joy}%`)
      } else if (response.results.hasOwnProperty('fear')) {
        fear == true;
        emotionArr.push(`Fear ${fear}%`)
      } else if (response.results.hasOwnProperty('sadness')) {
        sadness == true;
        emotionArr.push(`Sadness ${sadness}%`)
      } else if (response.results.hasOwnProperty('surprise')) {
        surprise == true;
        emotionArr.push(`Surprise ${surprise}%`)
      }

      console.log(emotionArr);

    });


});

// add toggle functionality for ability to become more or less positive