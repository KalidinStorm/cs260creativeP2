document.getElementById("SubmitNum").addEventListener("click", function (event) {
    document.getElementById("Results").innerHTML = "";
    event.preventDefault();
    var results = "";
    const url = "https://api.kanye.rest";  
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            results += '<p>' + json.quote + '</p>';
            results += '<hl />';
            document.getElementById("Results").innerHTML = results;
        });

});

