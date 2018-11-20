let n;

let data = [
  [[0,1,1,0,0,0,0,1], [1,0,0,0,0,0,0,0]], //a
  [[0,1,1,1,0,0,1,1], [0,0,1,0,0,0,0,0]], //s
  [[0,1,1,0,1,0,1,1], [0,1,0,0,0,0,0,0]], //k
  [[0,1,1,1,1,0,1,0], [0,0,0,1,0,0,0,0]] //k
]

let points;

function setup(){

  //Create neural network
  n = new neuralNetwork([8, 5, 8]);

  //Train beforehand on the data so we can do drawing only in draw.
  for(let j = 0; j < 100; j++){
    for(let i = 0; i < data.length; i++){
      n.train(data[i][0], data[i][1]);
    }
  }
  console.log(n);

  //Create canvas
  createCanvas(400,400);
  pg = createGraphics(width, height);
  background(100);



}

function draw(){
  background(200);
  image(n.visualise(pg), 0,0);
}

//Round off to 2 decimal places
function roundDecimal(d){
  return (Math.round(d*1000) /1000);
}
