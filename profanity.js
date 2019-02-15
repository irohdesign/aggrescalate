// setting up profanity API
var client = Algorithmia.client('sim7Mx4n9rMzOwk+kcUidmfnlKs1');
var profApiKey = "simN6+IoTAeS3mFDo3rCfA4lnxv1";

// global variable
var profCount = 0;

$("#userSubmit").on("click", function() {
//     // grabbing values and clearing form
    var userEntry = document.getElementById("userEntry").value;
    $("#userEntry").val("");

    
    // profanity API work
    var input = [userEntry,[],false];
Algorithmia.client(profApiKey)
    .algo("nlp/ProfanityDetection/1.0.0")
    .pipe(input)
    .then(function(output) {
        var objResult = output.result;

        // profanity total
        var profTotal = 0;

        var objectProps = Object.getOwnPropertyNames(objResult);
        console.log(objectProps);

        
        $.each(objectProps, function(index, value) {
            
            var num = output.result[objectProps[index]]
            console.log(objectProps[index]);
            console.log(`You've said ${objectProps[index]} ${num} times.`);
            profTotal += num;

        })
        var returnText = $("<div>");
        var returnInfo;

        profCount = objectProps.length;
        console.log(`You've used ${profTotal
    } profanities in total.`);

        if(profCount == 1) {
            profSyntax = "profanity"
        } else {
            profSyntax = "profanities"
        }

        if(profCount < 2) {
            returnInfo = `You've used ${profCount} unique ${profSyntax}. Maybe add some variation to get the message across.`;
        } else {
            returnInfo = `You've used ${profCount} unique ${profSyntax}, maybe chill out.`;
        } 
        $(returnText).text(returnInfo);
        $("#results").append(returnText);

    });
});

// add toggle functionality for de-escalating vs escalating