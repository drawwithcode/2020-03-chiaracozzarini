var welcome = "Welcome to your new session of ASTROTHERAPY";
var welcome2 = "Let the stars guide you in a universe of fake realities where you can find superficial and temporary relief from the harshness of the real world."
var instructions = "Click on your zodiac sign to listen to a message from the stars"
let button;
let mySigns = [];
let vid;
var soundtrack;
let buttonsigns = [];
let count = 0;

function preload(){
  bg = loadImage('assets/nightsky.jpg');
  soundtrack = loadSound('assets/soundtrack.mp3');
  welcomeaudio = loadSound('assets/astrotherapy.mp3');
  beep = loadSound('assets/beep.mp3');
  ariesth = loadSound('assets/ariesth.mp3');
  leoth = loadSound('assets/leoth.mp3');
  saggitariusth = loadSound('assets/saggitariusth.mp3');
  geminith = loadSound('assets/saggitariusth.mp3');
  acquariusth = loadSound('assets/acquariusth.mp3');
  librath = loadSound('assets/acquariusth.mp3');
  cancerth = loadSound('assets/cancerth.mp3');
  scorpioth = loadSound('assets/cancerth.mp3');
  piscesth = loadSound('assets/piscesth.mp3');
  capricornth = loadSound('assets/capricornth.mp3');
  virgoth = loadSound('assets/virgoth.mp3');
  taurusth = loadSound('assets/taurusth.mp3');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bg);

  button = createButton('get started');
  button.size(100,50);
  button.position(windowWidth/2-50, windowHeight/2+50);
  button.style('font-family','Share Tech Mono');
  typeWriter(welcome, 0, windowWidth/6, windowHeight/2, 70);


  textFont("Share Tech Mono");
  textSize(15);
  fill('white');
  text(welcome2, windowWidth/11, (windowHeight/4)*3-40);

  soundtrack.setVolume(0.10);
  soundtrack.play();
  soundtrack.loop();
  welcomeaudio.setVolume(1.5);
  welcomeaudio.play();
}

function draw(){
  if(count>1){
    buildSigns();
    for(j=0;j<=mySigns.length;j++){
      mySigns[j].display();
    }
  }
}

function typeWriter(sentence, n, x, y, speed) {
  if (n < (sentence.length)) {
    textFont('Share Tech Mono');
    textSize(40);
    fill('white');
    text(sentence.substring(0, n+1), x, y);
    n++;
    setTimeout(function() {
      typeWriter(sentence, n, x, y, speed)
    }, speed);
  }
}

function buildSigns(){
  Aries = new ZodiacSign(150, 100, 'assets/aries.png', ariesth);
  mySigns.push(Aries);
  Leo = new ZodiacSign(450, 100, 'assets/leo.png', leoth);
  mySigns.push(Leo);
  Saggitarius = new ZodiacSign(750, 100, 'assets/saggittario.png', saggitariusth);
  mySigns.push(Saggitarius);
  Gemini = new ZodiacSign(1050, 100, 'assets/gemini.png', geminith);
  mySigns.push(Gemini);
  Acquarius = new ZodiacSign(150, 350, 'assets/acquarius.png', acquariusth);
  mySigns.push(Acquarius);
  Libra = new ZodiacSign(450, 350, 'assets/libra.png', librath);
  mySigns.push(Libra);
  Cancer = new ZodiacSign(750, 350, 'assets/cancer.png', cancerth);
  mySigns.push(Cancer);
  Scorpio = new ZodiacSign(1050, 350, 'assets/scorpio.png', scorpioth);
  mySigns.push(Scorpio);
  Pisces = new ZodiacSign(150, 600, 'assets/pisces.png', piscesth);
  mySigns.push(Pisces);
  Capricorn = new ZodiacSign(450, 600, 'assets/capricorn.png', capricornth);
  mySigns.push(Capricorn);
  Virgo = new ZodiacSign(750, 600, 'assets/virgo.png', virgoth);
  mySigns.push(Virgo);
  Taurus = new ZodiacSign(1050, 600, 'assets/taurus.png', taurusth);
  mySigns.push(Taurus);
}

function ZodiacSign(xpos, ypos, sign, therapy){
    this.x = xpos;
    this.y = ypos;
    this.sign = sign;
    this.th = therapy;

   this.display = function(){
    button = createImg(this.sign);
    button.size(125,75);
    button.position(this.x, this.y);
    noFill();
    noStroke();
    ellipse(this.x+55, this.y+50, 130);
  }

  this.clicked = function(){
    var d = dist(mouseX, mouseY, this.x+55, this.y+50);
    if (d<65){
      this.th.play();
    }
  }
}

function mousePressed(){
  count+=1;
  if(count==1){
    button.hide();
    background(bg);
    beep.play();
    welcomeaudio.stop();
    textFont('Share Tech Mono');
    textSize(20);
    fill('white');
    text(instructions, windowWidth/4, windowHeight/2);
    button = createButton('im ready');
    button.size(100,50);
    button.position(windowWidth/2-50, windowHeight/2+50);
    button.style('font-family','Share Tech Mono');
  }
  if(count==2){
    button.hide();
    background(bg);
    beep.play();
  }
  if(count>2){
    for(j=0;j<=mySigns.length;j++){
      mySigns[j].clicked();
    }
  }
}
