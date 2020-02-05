    // https://api.sportsdata.io/v3/nfl/scores/xml/TeamSeasonStats/REG2019

    // Ocp-Apim-Subscription-Key: {key}
        // not sure what this is but it was labelled:
        // "This is the documentation for SportsDataIO's NFL API. All of our API endpoints can be accessed via an HTTP GET request using your API key. The API key can be passed either as a query parameter or using the following HTTP request header.
        // Ocp-Apim-Subscription-Key: {key} "//


    // API Key: e901378c0864450f84cb2993bd089fa7
    // Login: leikevy@//gaproject1
// console.log('app.js')
$(()=>{
    let allTeams = [];
    
    $.ajax({
        url: "https://api.sportsdata.io/v3/nfl/scores/json/TeamSeasonStats/REG2019?key=e901378c0864450f84cb2993bd089fa7"
    }).then(
        (data)=>{
            for (let i=0; i<data.length; i++){
            allTeams.push(data[i])
            }
        renderTeams(data)    
        },
        ()=>{
        console.log("bad request");
        }
    );
// Correctly able to bring all teams into allTeams variable. allTeams is an Array)
console.log(allTeams)



// Entire data set exists in renderTeams function: Do everything in this container
// Created array-nestedObject of each team
function renderTeams(data){
    
    let patriots = allTeams.filter(function(data){
        return data.Team == "NE" 
    });
    console.log(patriots)
 
    let chiefs = allTeams.filter(function(data){
        return data.Team == "KC" 
    });
    console.log(chiefs)

    let niners = allTeams.filter(function(data){
        return data.Team == "SF" 
    });



// Created divs for carousel and final output in HTML and CSS. These are the carousel slides with: 
//  factors = {
//     SeasonWinningPercentage: Patriots: 12-4, Chiefs: 12-4, Niners: 13-3
// 
//     RegularHeadtoHead: Chiefs 17 49ers 27
// 
//     QbRanking: Tom Brady: #3, Patrick Hahomes: #1, Jimmy Garoppolo: #15
// 
//     CoachRanking: Bill Belichick #1, Andy Reid #5, Kyle Shanahan #14
// 
//     Offense: [FirstDowns, OffensiveYardsPerPlay, Touchdowns
//     ], 
// 
//     Defense: [OpponentFirstDowns, OpponentOffensivePlay, OpponentTouchdowns]
//     ],  
// }


// Each variable in slidesShowSlides will insert 1) Insert new API info 2) text to class=TIP 

let Season = function (){
    $(".tip").replaceWith("<div>" + "Season Winning Percentage" + "</div>");
    $(".KC").replaceWith("12-4");
    $(".NE").replaceWith("12-4");
    $(".SF").replaceWith("13-3");
    };
console.log(Season)

let HeadtoHead = function (){
    $tip.text("Head to head in 2019-2020 season");
    $KC.text("17");
    $NE.text("SF WIN");
    $SF.text("27");
    };
    
let CoachRanking = function (){
    $tip.text("Coach ranking at the end of 2019=2020 regular season");
    $KC.text("Andy Reid #5");
    $NE.text("Bill Belichick #1");
    $SF.text("Kyle Shanahan #14");
    };

let QbRanking = function (){
    $tip.text("QB ranking at the end of 2019-2020 regular season");
    $KC.text("Patrick Hahomes: #1");
    $NE.text("Tom Brady: #3");
    $SF.text("Jimmy Garoppolo: #15");
    };
    
let Offense = function (){
    $tip.text("Factors include First Downs, Offensive yards per play, total TouchDowns");
    $KC.text(chiefs[0].FirstDowns + chiefs[0].OffensiveYardsPerPlay + chiefs[0].Touchdowns);
    $NE.text(patriots[0].FirstDowns + patriots[0].OffensiveYardsPerPlay + patriots[0].Touchdowns);
    $SF.text(niners[0].FirstDowns + niners[0].OffensiveYardsPerPlay + niners[0].Touchdowns);
    };

let Defense = function (){
    $tip.text("Factors include keeping Opponent's First Downs, Keeping Offensive yards per play, total TouchDowns allowed");
    $KC.text(chiefs[0].OpponentFirstDowns + chiefs[0].OpponentOffensivePlays + chiefs[0].OpponentTouchdowns);
    $NE.text(patriots[0].OpponentFirstDowns + patriots[0].OpponentOffensivePlays + patriots[0].OpponentTouchdowns);
    $SF.text(niners[0].OpponentFirstDowns + niners[0].OpponentOffensivePlays + niners[0].OpponentTouchdowns);
    };
    
// Carousel function: 
let i = 0; 
let slideShowSlides = [Season, HeadtoHead, QbRanking, CoachRanking, Offense, Defense];



console.log(Season)

// let function changeSlide (){
//     document.slide.src = slideShowSlides[i];
//         if(i <slideShowSlides.length-1){
//             i++;
//         } else {
//             i = 0;
//         }

// }
// // Button Listeners
// nxtBtn.addEventListener('click', ()=>{
//     car
// })






};
});

