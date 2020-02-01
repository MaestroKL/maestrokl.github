    // https://api.sportsdata.io/v3/nfl/scores/xml/TeamSeasonStats/REG2019

    // Ocp-Apim-Subscription-Key: {key}
        // not sure what this is but it was labelled:
        // "This is the documentation for SportsDataIO's NFL API. All of our API endpoints can be accessed via an HTTP GET request using your API key. The API key can be passed either as a query parameter or using the following HTTP request header.
        // Ocp-Apim-Subscription-Key: {key} "//


    // API Key: e901378c0864450f84cb2993bd089fa7
    // Login: leikevy@//gaproject1

(()=>{

    $.ajax({
        url: "https://api.sportsdata.io/v3/nfl/scores/xml/TeamSeasonStats/REG2019?key=e901378c0864450f84cb2993bd089fa7",
        success: function(data){
            console.log(data)
        }, 
        error: ()=>{
            console.log("bad")
        }
    })

})






