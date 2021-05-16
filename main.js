function setup() {
  canvas = createCanvas(400, 400);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
console.log("version" , ml5.version)
  classifier=ml5.imageClassifier( 'MobileNet' , modelloaded)
}
function modelloaded(){
  console.log("model loaded and ready for use");
}
function draw(){
image(video ,0 ,0,400,400);
classifier.classify(video , object)
}
function object( error , results){
if(error){
console.error(error);
}
else{
console.log(results);
document.getElementById("obj").innerHTML=result[0].label;
document.getElementById("acc").innerHTML=result[0].confidence.toFixed(2);
}
}

