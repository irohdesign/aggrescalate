// setting up API
var client = Algorithmia.client('sim7Mx4n9rMzOwk+kcUidmfnlKs1');
var apiKey = "simN6+IoTAeS3mFDo3rCfA4lnxv1";

// global variable
var profCount = 0;

// grabbing text

$("#userSubmit").on("click", function() {
    // grabbing values and clearing form
    var userEntry = document.getElementById("userEntry").value;
    $("#userEntry").val("");

    profCount = 0;

    // profanity API work
    var input = [userEntry,[],false];
Algorithmia.client(apiKey)
    .algo("nlp/ProfanityDetection/1.0.0")
    .pipe(input)
    .then(function(output) {
        var result = output.result;

        var objectProps = Object.getOwnPropertyNames(result);
        // console.log(objectProps[0]);
        console.log(result);
        
        $.each(objectProps, function(index, value) {
            console.log(value);
            profCount++;
        })

        var returnText = $("<div>");
        var returnInfo;
        if(profCount > 1) {
            profSyntax = "profanities"
        } else {
            profSyntax = "profanity"
        }

        if(profCount < 2) {
            returnInfo = `You've used ${profCount} unique ${profSyntax}. Maybe add some variation to get the message across.`;
        } else {
            returnInfo = `You've used ${profCount} unique ${profSyntax}, maybe chill out.`;
        } 
        $(returnText).text(returnInfo);
        $("#results").append(returnText);
    });

    // sentiment API work
    
    
});



