$(function () {
  // snow effect
  $("#bg").append('<canvas id="canvas_bg"></canvas>');
  var cobj = $('#canvas_bg');
  var wid = document.documentElement.clientWidth || document.body.clientWidth
  var hei = window.innerHeight;
  cobj.width(wid);
  cobj.height(hei);
  canvas = cobj[0];
  var ctx=canvas.getContext('2d'),color='#ffffff';canvas.width=wid;canvas.height=hei;canvas.style.display='block';ctx.fillStyle=color;ctx.lineWidth=.1;ctx.strokeStyle=color;var dots={nb:500,distance:80,d_radius:150,array:[]};function Dot() {this.x=Math.random()*canvas.width;this.y=Math.random()*canvas.height;this.vx=-.5+Math.random();this.vy=-.5+Math.random();this.radius=Math.random();}Dot.prototype={create:function(){ctx.beginPath();ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);ctx.fill();}};function makeDots(){for(i=0;i<dots.nb;i++){dots.array.push(new Dot());}}function moveDots(){for(i=0;i<dots.nb;i++){var dot=dots.array[i];if(dot.y<0||dot.y>canvas.height){dot.vx=dot.vx;dot.vy=-dot.vy;}else if(dot.x<0||dot.x>canvas.width){dot.vx=-dot.vx;dot.vy=dot.vy;}dot.x+=dot.vx;dot.y+=dot.vy;}}function animateDots(){ctx.clearRect(0, 0, canvas.width, canvas.height);for(i=0;i<dots.nb;i++){dot = dots.array[i];dot.create();}moveDots();}makeDots();setInterval(animateDots, 1000 / 30);
  $(window).resize(function() { cobj.width(document.documentElement.clientWidth || document.body.clientWidth); cobj.height(window.innerHeight); });
});
