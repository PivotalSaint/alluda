const getVideo = function(playVideo) {

    console.log("function was called");
    fetch("https://www.youtube.com/watch?v=Hc10febKlX8").then(function(response){
        console.log("resp");
    })
    .then(
        playVideo()
    )

}

<<<<<<< HEAD


=======
>>>>>>> 78084f7c9c83f34090165d1726ebd9aa52c5b9bb
getVideo();