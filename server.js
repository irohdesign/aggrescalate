// setting up API
var client = Algorithmia.client('sim7Mx4n9rMzOwk+kcUidmfnlKs1');
var apiKey = "simN6+IoTAeS3mFDo3rCfA4lnxv1";

// grabbing text

$("#userSubmit").on("click", function() {
    var userEntry = document.getElementById("userEntry").value;
    console.log(userEntry);

    var input = [userEntry,[],false];
Algorithmia.client(apiKey)
    .algo("nlp/ProfanityDetection/1.0.0")
    .pipe(input)
    .then(function(output) {
        console.log(output);
    });
})


