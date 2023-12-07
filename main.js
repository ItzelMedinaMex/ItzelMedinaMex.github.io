let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #1A66CC;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #1A66CC;">Este cerebro mío es meramente mortal como el tiempo demostrará.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
