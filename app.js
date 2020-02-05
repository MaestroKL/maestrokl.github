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

const Season  = ()=>{
    $(".tip").text("Season Winning Percentage: Regular season wins divided by losses.");
    $(".NE h1").text("Patriots")
    $(".KC p").text("12-4");
    $(".NE p").text("12-4");
    $(".SF p").text("13-3");
    $(".KC #KC1").text("")
    $(".KC #KC2").text("")
    $(".KC #KC3").text("")
    $(".NE #NE1").text("")
    $(".NE #NE2").text("")
    $(".NE #NE3").text("");
    $(".SF #SF1").text("")
    $(".SF #SF2").text("")
    $(".SF #SF3").text("");
    };

const HeadtoHead  = ()=>{
    $(".tip").text("Head-to-head match in 2019-2020 season.");
    $(".NE h1").text("Victory: SF")
    $(".KC p").text("17");
    $(".NE p").text("49ers WIN");
    $(".SF p").text("27");
    };
    
const CoachRanking  = ()=>{
    $(".tip").text("Coach ranking by the end of 2019-2020 regular season.");
    $(".NE h1").text("Patriots")
    $(".KC p").text("Andy Reid #5");
    $(".NE p").text("Bill Belichick #1");
    $(".SF p").text("Kyle Shanahan #14");
    };

// let QbRanking = function (){
//     $(".tip p").text("QB ranking at the end of 2019-2020 regular season");
//     $(".KC p").text("Patrick Hahomes: #1");
//     $(".NE p").text("Tom Brady: #3");
//     $(".SF p").text("Jimmy Garoppolo: #15");
//     };

const QbRanking = ()=> {
    $(".tip").text("QB ranking at the end of 2019-2020 regular season.");
    $(".NE h1").text("Patriots")
    $(".KC p").text("Patrick Hahomes: #1");
    $(".NE p").text("Tom Brady: #3");
    $(".SF p").text("Jimmy Garoppolo: #15");
    };
    
const Offense  = ()=>{
    $(".tip").text("Selected notable factors: (1)First Downs, (2)Offensive yards per play, (3)Total Touchdowns.");
    $(".NE h1").text("Patriots")
    $(".KC p").text("");
    $(".NE p").text("");
    $(".SF p").text("");
    $(".KC #KC1").text("Number of First Downs: " + chiefs[0].FirstDowns)
    $(".KC #KC2").text("Number of Offensive Yards Per Play: " + chiefs[0].OffensiveYardsPerPlay)
    $(".KC #KC3").text("Total Touchdowns: " + chiefs[0].Touchdowns)
    $(".NE #NE1").text("Number of First Downs: " + patriots[0].FirstDowns)
    $(".NE #NE2").text("Number of Offensive Yards Per Play: " + patriots[0].OffensiveYardsPerPlay)
    $(".NE #NE3").text("Total Touchdowns: " + patriots[0].Touchdowns)
    $(".NE #NE1").text("Number of First Downs: " + niners[0].FirstDowns)
    $(".SF #SF2").text("Number of Offensive Yards Per Play: " + niners[0].OffensiveYardsPerPlay)
    $(".SF #SF3").text("Total Touchdowns: " + niners[0].Touchdowns)
    };

const Defense = ()=>{
    $(".tip").text("Selected notable factors: (1)Opponent's First Downs, (2)Opponent's Offensive yards per play, (3)Opponent Touchdowns allowed");
    $(".KC p").text("");
    $(".NE p").text("");
    $(".SF p").text("");
    $(".NE h1").text("Patriots")
    $(".KC #KC1").text("Total Opponent First Downs: " + chiefs[0].OpponentFirstDowns)
    $(".KC #KC2").text("Frequency of opponent plays allowed: " + chiefs[0].OpponentOffensivePlays)
    $(".KC #KC3").text("Allowed touchdowns: " + chiefs[0].OpponentTouchdowns)
    $(".NE #NE1").text("Total Opponent First Downs: " + patriots[0].OpponentFirstDowns)
    $(".NE #NE2").text("Frequency of opponent  plays allowed: " + patriots[0].OpponentOffensivePlays)
    $(".NE #NE3").text("Allowed  touchdowns: " + patriots[0].OpponentTouchdowns);
    $(".SF #SF1").text("Total Opponent First Downs: " + niners[0].OpponentFirstDowns)
    $(".SF #SF2").text("Frequency of opponent plays allowed: " + niners[0].OpponentOffensivePlays)
    $(".SF #SF3").text("Allowed touchdowns: " + niners[0].OpponentTouchdowns);
    };
    
// Carousel function: 
let i = 0; 


let changeSlide = ()=> {
    let slideShowSlides = [Season, HeadtoHead, QbRanking, CoachRanking, Offense, Defense];
        if(i <(slideShowSlides.length-1)){
            i++;
            console.log(i);
            slideShowSlides[i];
        
        } else {
            i = 0;
        }

}

// Button Listeners
// $('#nextBtn').on('click', changeSlide)


container = 0;

$('#nextBtn').on('click', ()=>{
    
    container++
    if (container === 1 ){
        Season()
        console.log("season hit")
    }
    else if (container === 2 ){
        HeadtoHead()
        console.log("head hit")
    }
    else if (container === 3 ){
       QbRanking()
        console.log("qb hit")
    }
    else if (container === 4 ){
       CoachRanking()
        console.log("coach hit")
    }
    else if (container === 5 ){
        Offense()
         console.log("offense hit")
    }     
    else if (container === 6 ){
        Defense()
        console.log("defense hit")
    }
    else {container = 1
        Season()
    }
})




};
});

