const getVideo = function(playVideo) {

    console.log("function was called");
    fetch("https://www.youtube.com/watch?v=Hc10febKlX8").then(function(response){
        console.log("resp");
    })
    .then(
        playVideo()
    )

}



getVideo();