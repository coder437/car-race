var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["65793861-9b5c-4464-bec3-5edbd401a379","fcd21572-1c95-4e89-8834-67f0d76fd5d4","90ff6862-adce-4e61-b7ef-c5f6dae0bc20","1a475373-e275-4117-b35c-42257833a6f6","4a9a2018-2c23-47fc-8fc7-6baaea28ecb2","16f0ea12-51d2-43e3-b8d1-b4714767cf9f","fc643ca3-25ce-400b-9688-1889ffa785db","f91cde93-9ef5-403a-badc-dd70e3962fc2","8a071f05-eb9e-4848-8d0d-b1c6643c91dd"],"propsByKey":{"65793861-9b5c-4464-bec3-5edbd401a379":{"name":"track.png_1","sourceUrl":null,"frameSize":{"x":840,"y":650},"frameCount":2,"looping":true,"frameDelay":12,"version":"n7F4cUd9818Iq9Tuw5Ph28nvb4u7y3KP","loadedFromSource":true,"saved":true,"sourceSize":{"x":840,"y":1300},"rootRelativePath":"assets/65793861-9b5c-4464-bec3-5edbd401a379.png"},"fcd21572-1c95-4e89-8834-67f0d76fd5d4":{"name":"car3.png_1","sourceUrl":"assets/v3/animations/yiHOWqMFJV29pg-vdbp-YGZvYKIgqddRJxiQaT3AhHo/fcd21572-1c95-4e89-8834-67f0d76fd5d4.png","frameSize":{"x":51,"y":96},"frameCount":1,"looping":true,"frameDelay":4,"version":"IJMcKOHJO9gWCoKcpxrF3n_wbXLF0K_f","loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":96},"rootRelativePath":"assets/v3/animations/yiHOWqMFJV29pg-vdbp-YGZvYKIgqddRJxiQaT3AhHo/fcd21572-1c95-4e89-8834-67f0d76fd5d4.png"},"90ff6862-adce-4e61-b7ef-c5f6dae0bc20":{"name":"track1.png","sourceUrl":"assets/v3/animations/yiHOWqMFJV29pg-vdbp-YGZvYKIgqddRJxiQaT3AhHo/90ff6862-adce-4e61-b7ef-c5f6dae0bc20.png","frameSize":{"x":800,"y":800},"frameCount":1,"looping":true,"frameDelay":4,"version":"3Bw6KGeRbCD5LwSDCCmQ5PjmpHaX0Cs7","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/v3/animations/yiHOWqMFJV29pg-vdbp-YGZvYKIgqddRJxiQaT3AhHo/90ff6862-adce-4e61-b7ef-c5f6dae0bc20.png"},"1a475373-e275-4117-b35c-42257833a6f6":{"name":"car3","sourceUrl":"assets/v3/animations/yiHOWqMFJV29pg-vdbp-YGZvYKIgqddRJxiQaT3AhHo/1a475373-e275-4117-b35c-42257833a6f6.png","frameSize":{"x":51,"y":96},"frameCount":1,"looping":true,"frameDelay":4,"version":"VctURtKP69Cl3CRU.DtlWfWiKuWEl4NY","loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":96},"rootRelativePath":"assets/v3/animations/yiHOWqMFJV29pg-vdbp-YGZvYKIgqddRJxiQaT3AhHo/1a475373-e275-4117-b35c-42257833a6f6.png"},"4a9a2018-2c23-47fc-8fc7-6baaea28ecb2":{"name":"car1","sourceUrl":"assets/v3/animations/yiHOWqMFJV29pg-vdbp-YGZvYKIgqddRJxiQaT3AhHo/4a9a2018-2c23-47fc-8fc7-6baaea28ecb2.png","frameSize":{"x":51,"y":96},"frameCount":1,"looping":true,"frameDelay":4,"version":"sA1D098zQrZwr7ARSFw17aJMQfThetkE","loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":96},"rootRelativePath":"assets/v3/animations/yiHOWqMFJV29pg-vdbp-YGZvYKIgqddRJxiQaT3AhHo/4a9a2018-2c23-47fc-8fc7-6baaea28ecb2.png"},"16f0ea12-51d2-43e3-b8d1-b4714767cf9f":{"name":"car2","sourceUrl":"assets/v3/animations/yiHOWqMFJV29pg-vdbp-YGZvYKIgqddRJxiQaT3AhHo/16f0ea12-51d2-43e3-b8d1-b4714767cf9f.png","frameSize":{"x":51,"y":96},"frameCount":1,"looping":true,"frameDelay":4,"version":".LMXOOeWfAdrHNBtEiVs2QLVLyRp6qp0","loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":96},"rootRelativePath":"assets/v3/animations/yiHOWqMFJV29pg-vdbp-YGZvYKIgqddRJxiQaT3AhHo/16f0ea12-51d2-43e3-b8d1-b4714767cf9f.png"},"fc643ca3-25ce-400b-9688-1889ffa785db":{"name":"track - Copy.png_1","sourceUrl":"assets/v3/animations/yiHOWqMFJV29pg-vdbp-YGZvYKIgqddRJxiQaT3AhHo/fc643ca3-25ce-400b-9688-1889ffa785db.png","frameSize":{"x":840,"y":650},"frameCount":1,"looping":true,"frameDelay":4,"version":"YttcVuUW0TKp_kTOosQQpME.ZgymnAOi","loadedFromSource":true,"saved":true,"sourceSize":{"x":840,"y":650},"rootRelativePath":"assets/v3/animations/yiHOWqMFJV29pg-vdbp-YGZvYKIgqddRJxiQaT3AhHo/fc643ca3-25ce-400b-9688-1889ffa785db.png"},"f91cde93-9ef5-403a-badc-dd70e3962fc2":{"name":"heart.png_1","sourceUrl":null,"frameSize":{"x":1083,"y":1024},"frameCount":1,"looping":true,"frameDelay":12,"version":"AIOfDawswwZaQxRJCLc8m5n6JfQyIMW9","loadedFromSource":true,"saved":true,"sourceSize":{"x":1083,"y":1024},"rootRelativePath":"assets/f91cde93-9ef5-403a-badc-dd70e3962fc2.png"},"8a071f05-eb9e-4848-8d0d-b1c6643c91dd":{"name":"restart.png_1","sourceUrl":null,"frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":12,"version":"8AGVwvh2PwW55hZo27Sm3eBVI_YuPkVF","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/8a071f05-eb9e-4848-8d0d-b1c6643c91dd.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var PLAY = 1;
var END = 0;
var gameState = PLAY;

 ;var track1 = createSprite(200,250);
track1.setAnimation("track.png_1");
track1.scale = 0.70;

var track = createSprite(200,0);
track.setAnimation("track.png_1");
track.scale = 0.70;
 track.velocityY = 8;
 
var car1 = createSprite(150, 300);
car1.setAnimation("car3.png_1");
car1.velocityY=0;
car1.setCollider("circle",0,0,30);

var count = 0;

var ObstaclesGroup = createGroup();

/* var heart1 = createSprite(10,10);
heart1.setAnimation("heart.png_1");
heart1.scale= 0.02;
 var heart2 = createSprite(40,10);
heart2.setAnimation("heart.png_1");
heart2.scale= 0.02;
 var heart3 = createSprite(70,10);
heart3.setAnimation("heart.png_1");
heart3.scale= 0.02;
 var heart4 = createSprite(100,10);
heart4.setAnimation("heart.png_1");
heart4.scale= 0.02;
 var heart5 = createSprite(130,10);
heart5.setAnimation("heart.png_1");
heart5.scale= 0.02;*/


 
function draw() {
  background("white");
  
  createEdgeSprites();
  if ( gameState === PLAY){
  count = count+Math.round(World.frameCount%10 === 0);
 if (track.y === 200) {
   track.y = 0;
 }
 if (keyDown("RIGHT_ARROW")){
   car1.velocityX = 3;
 }
 if (keyDown("LEFT_ARROW")){
   car1.velocityX = -3;
 }
car1.bounceOff(edges);
  
 if (ObstaclesGroup.isTouching(car1)){
  // track.velocityY = 0;
   ObstaclesGroup.setVelocityYEach(0);
    ObstaclesGroup.setLifetimeEach(-1);
    car1.velocityX=0;
    count = count-10;
    ObstaclesGroup.destroyEach();
    //heart1.visible = false;
    //heart2.visible = false;
  //  heart3.visible = false;
   // heart4.visible = false;
    //heart5.visible = false;
    
 }
  }
 

 
spawnObstacles();
 
 
 
 drawSprites();
 fill(rgb(255, 255, 255));
 textSize(25);
 text("Score = "+count,250,30);
}
 
 function spawnObstacles() {
  if(World.frameCount % 35 === 0) {
    var obstacle = createSprite(400,365);
    obstacle.velocityY = (10 + 5*count/50);
    
    //generate random obstacles
    var rand = randomNumber(1,3);
    var randd = randomNumber(50,350);
    obstacle.y = 0;
    obstacle.x = randd;
    obstacle.setAnimation("car" + rand);
    
    //assign scale and lifetime to the obstacle         
    obstacle.scale = 1;
    obstacle.lifetime = 70;
   
   //add each obstacle to the group
   ObstaclesGroup.add(obstacle);
  }
}
                                         

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
