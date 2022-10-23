var getVideo = function() {
    console.log("function was called");
    fetch("https://www.youtube.com/watch?v=Hc10febKlX8").then(function(response){
        console.log("response");
    });
    console.log("response");
}

getVideo();