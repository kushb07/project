console.log("Welcome to Spotify");

//intialising the index -->
let index  =0;
let AudioElement = new Audio('1.mp3');
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("progressBar");
let gif = document.getElementById('gif');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let songitemplay = Array.from(document.getElementsByClassName('songitemPlay'));
let next = document.getElementById("next");
let previous = document.getElementById("previous");
let songnamemaster = document.getElementById('songnamemaster');

let songs = [
    {songName :"we dont talk anymore" , filepath: "1.mp3"}, 
    {songName :"Brown Munde" , filepath: "2.mp3"}, 
    {songName :"I am albatraoz" , filepath: "3.mp3"}, 
    {songName :"Animals - martin garrix" , filepath: "4.mp3"}, 
    {songName :"Sadi gali" , filepath: "5.mp3"}, 
    {songName :"NaJa - hardy sandhu" , filepath: "6.mp3"}, 
    {songName :"Shape of you" , filepath: "7.mp3"}, 
    {songName :"Kya baat ay" , filepath: "8.mp3"}, 
    {songName :"Believer" , filepath: "9.mp3"}, 
]

// AudioElement.play();
masterPlay.addEventListener("click" , ()=>{
        if(AudioElement.paused || AudioElement.currentTime<=0)
        {
        AudioElement.play();
        
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else
    {
        AudioElement.pause();
        
        masterPlay.classList.remove('fa-pause-circle'); 
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        }
   
})

//listen to events-->
AudioElement.addEventListener("timeupdate" , ()=>{
    // console.log("timeupdate");

    //update seek bar-->
    progress = parseInt((AudioElement.currentTime/AudioElement.duration)*100);
    //is se hamra range wale input ki value change hoti rahegi acc. to the song play
    progressBar.value = progress;
})




progressBar.addEventListener('change' , ()=>{
    //derived from above exp. in which we have calculated the progress
    AudioElement.currentTime = (progressBar.value * AudioElement.duration)/100;
})



songitem.forEach((element, i)=>{
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})


const makeallPlay =()=>
{
    songitemplay.forEach((element)=>
    {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

songitemplay.forEach((elements)=>{
    elements.addEventListener('click' ,(e)=>{
        makeallPlay();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        AudioElement.src = `${index+1}.mp3`;
        //naya gana lagne par shuru se chalu hona chhiye-->
        AudioElement.currentTime = 0;
        AudioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})


next.addEventListener("click" ,(element)=>{
    if(index==8)
    {
        index=0;
    }
    else
    {
        index +=1;
    }

    AudioElement.src = `${index+1}.mp3`;
    songnamemaster.innerText =songs[index].songName ;
    //naya gana lagne par shuru se chalu hona chhiye-->
    AudioElement.currentTime = 0;
    AudioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');



})

previous.addEventListener("click" ,()=>{
    if(index==0)
    {
        index=8;
    }
    else
    {
        index -=1;
    }

    AudioElement.src = `${index+1}.mp3`;
    //naya gana lagne par shuru se chalu hona chhiye-->
    songnamemaster.innerText = songs[index].songName;
    AudioElement.currentTime = 0;
    AudioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})


