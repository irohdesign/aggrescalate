// setting up profanity API
var client = Algorithmia.client('sim7Mx4n9rMzOwk+kcUidmfnlKs1');
var profApiKey = "simN6+IoTAeS3mFDo3rCfA4lnxv1";

// setting up sentiment API



// global variable
var profCount = 0;

// grabbing text

$("#userSubmit").on("click", function() {
//     // grabbing values and clearing form
    var userEntry = document.getElementById("userEntry").value;
    $("#userEntry").val("");

    
//     // profanity API work
//     var input = [userEntry,[],false];
// Algorithmia.client(profApiKey)
//     .algo("nlp/ProfanityDetection/1.0.0")
//     .pipe(input)
//     .then(function(output) {
//         var objResult = output.result;

//         // profanity total
//         var profTotal = 0;

//         var objectProps = Object.getOwnPropertyNames(objResult);
//         console.log(objectProps);

        
//         $.each(objectProps, function(index, value) {
            
//             var num = output.result[objectProps[index]]
//             console.log(objectProps[index]);
//             console.log(num);
//             profTotal += num;

//         })
//         var returnText = $("<div>");
//         var returnInfo;

//         profCount = objectProps.length;
//         console.log(profTotal);

//         if(profCount == 1) {
//             profSyntax = "profanity"
//         } else {
//             profSyntax = "profanities"
//         }

//         if(profCount < 2) {
//             returnInfo = `You've used ${profCount} unique ${profSyntax}. Maybe add some variation to get the message across.`;
//         } else {
//             returnInfo = `You've used ${profCount} unique ${profSyntax}, maybe chill out.`;
//         } 
//         $(returnText).text(returnInfo);
//         $("#results").append(returnText);
//     });

    // sentiment API work
    var params = {
        "documents": [
            {
                "id": "1",
                "score": 0.92014169692993164
            },
            {
                "id": "2",
                "score": 0.05087512731552124
            },
            {
                "id": "3",
                "score": 0.80231726169586182
            },
            {
                "id": "4",
                "score": 0.21357250213623047
            },
            {
                "id": "5",
                "score": 0.94849288463592529
            }
        ],
        "errors": []
}

var textExample = {
    id: 1,
    string: "I want to kill you."
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
    "data": `{\n        \"documents\":[\n            {\n                \"language\": \"en\",\n                \"id\": \"${textExample.id}\",\n                \"text\": \"${textExample.string}\"\n            },\n            {\n                \"language\": \"en\",\n                \"id\": \"2\",\n                \"text\": \"Poorly marked trails! I thought we were goners. Worst hike ever.\"\n            },\n            {\n                \"language\": \"en\",\n                \"id\": \"3\",\n                \"text\": \"Everyone in my family liked the trail but thought it was too challenging for the less athletic among us. Not necessarily recommended for small children.\"\n            },\n            {\n                \"language\": \"en\",\n                \"id\": \"4\",\n                \"text\": \"It was foggy so we missed the spectacular views, but the trail was ok. Worth checking out if you are in the area.\"\n            },                \n            {\n                \"language\": \"en\",\n                \"id\": \"5\",\n                \"text\": \"This is my favorite trail. It has beautiful views and many places to stop and rest\"\n            }\n        ]\n    }`
  }
$.ajax(settings).done(function (response) {
            console.log(response);
          }); 
});



