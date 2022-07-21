var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

img_id = "";

function start()
{
    recognition.start();

    recognition.onresults = function(event){
        console.log(event);
        var Content = event.results[0][0].transcript;
        if(Content == "take my selfie"){
            speak();
        }
    }
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    if(Content == "take my selfie"){
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    setTimeout(function(){

        image_id = "one";
        take_snapshot();
        speak_data = "Taking your Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

    }, 5000);

    setTimeout(function(){

        image_id = "two";
        take_snapshot();
        speak_data = "Taking your next Selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

    }, 10000);

    setTimeout(function(){

        image_id = "three";
        take_snapshot();
        speak_data = "Taking your last Selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

    }, 15000);
}
function take_snapshot(){
    console.log(img_id);

    Webcam.snap(function(data_uri){
        if(img_id == "one"){
            document.getElementById("img1").innerHTML = '<img id="img1" src="'+data_uri+'"/>';
        }
        if(img_id == "two"){
            document.getElementById("img2").innerHTML = '<img id="img2" src="'+data_uri+'"/>';
        }
        if(img_id == "three"){
            document.getElementById("img3").innerHTML = '<img id="img3" src="'+data_uri+'"/>';
        }
    })
}