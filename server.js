// // setting up profanity API
// var client = Algorithmia.client('sim7Mx4n9rMzOwk+kcUidmfnlKs1');
// var profApiKey = "simN6+IoTAeS3mFDo3rCfA4lnxv1";

// // setting up sentiment API



// // global variable
// var profCount = 0;

// // grabbing text

// $("#userSubmit").on("click", function() {
// //     // grabbing values and clearing form
//     var userEntry = document.getElementById("userEntry").value;
//     $("#userEntry").val("");

    
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
//             console.log(`You've said ${objectProps[index]} ${num} times.`);
//             profTotal += num;

//         })
//         var returnText = $("<div>");
//         var returnInfo;

//         profCount = objectProps.length;
//         console.log(`You've used ${profTotal
//     } profanities in total.`);

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

//     // sentiment API work

// // var dataBody = {
// //     id: 1,
// //     string: userEntry
// // }

// // var settings = {
// //     "async": true,
// //     "crossDomain": true,
// //     "url": "https://eastus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment",
// //     "method": "POST",
// //     "headers": {
// //       "Ocp-Apim-Subscription-Key": "196582ad71c843a4bc3577a865665b8b",
// //       "Content-Type": "application/json",
// //       "Accept": "application/json",
// //       "cache-control": "no-cache",
// //       "Postman-Token": "8df21c0e-7667-4e28-a39d-3a2d1ec37e62"
// //     },
// //     "processData": false,
// //     "data": `{\n        \"documents\":[\n            {\n                \"language\": \"en\",\n                \"id\": \"${dataBody.id}\",\n                \"text\": \"${dataBody.string}\"\n            }`
// //   }
// // $.ajax(settings).done(function (response) {
// //             console.log(response.documents[0].score);

// //             var scoreDiv = $("<h3>");
// //             scoreDiv.text(`Your score was ${response.documents[0].score}.`);
// //             $("#results").append(scoreDiv);

// //             // $("#results").css
// //           }); 
// });



