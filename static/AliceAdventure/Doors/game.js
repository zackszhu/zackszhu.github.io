
document.addEventListener('contextmenu', e => e.preventDefault());
//===============create Game==================
myGame.init(1024,576,5);

//===============add Sound==================
myGame.soundManager.load('correct_2', './Resources/Assets/correct.mp3');
myGame.soundManager.load('wrong_3', './Resources/Assets/wrong.wav');
myGame.soundManager.load('lock_4', './Resources/Assets/lock.wav');
myGame.soundManager.load('unlock_5', './Resources/Assets/unlock.wav');
myGame.soundManager.load('put_6', './Resources/Assets/put.wav');
myGame.soundManager.load('win_7', './Resources/Assets/win.wav');
myGame.soundManager.load('door_8', './Resources/Assets/door.wav');
myGame.soundManager.load('meow_1_9', './Resources/Assets/meow_happy.wav');
myGame.soundManager.load('meow_2_10', './Resources/Assets/meow_unhappy.wav');

//===============create Scene================
myGame.sceneManager.createScenes(7);

narrative0showed = false;
myGame.eventSystem.addSceneTransitEvent(0, function(){
  if (!narrative0showed) {
    myGame.messageBox.startConversation(['Start the game by going through the door. You will escape the building with continuous rooms, look around to find any clue to solve the puzzle!'], null);
    narrative0showed = true;
  }
});
narrative1showed = false;
myGame.eventSystem.addSceneTransitEvent(1, function(){
  if (!narrative1showed) {
    myGame.messageBox.startConversation(['To unlock a door, you always need a key.'], null);
    narrative1showed = true;
  }
});
narrative2showed = false;
myGame.eventSystem.addSceneTransitEvent(2, function(){
  if (!narrative2showed) {
    myGame.messageBox.startConversation(['Sometimes, even an unlocked door, you need to find some way to go through it...'], null);
    narrative2showed = true;
  }
});
narrative3showed = false;
myGame.eventSystem.addSceneTransitEvent(3, function(){
  if (!narrative3showed) {
    myGame.messageBox.startConversation(['Sometimes, you cannot find the key directly...'], null);
    narrative3showed = true;
  }
});
narrative4showed = false;
myGame.eventSystem.addSceneTransitEvent(4, function(){
  if (!narrative4showed) {
    myGame.messageBox.startConversation(['Sometimes, a key might not literally be a "key"...'], null);
    narrative4showed = true;
  }
});
narrative5showed = false;
myGame.eventSystem.addSceneTransitEvent(5, function(){
  if (!narrative5showed) {
    myGame.messageBox.startConversation(['Sometimes, you might not want to exit the room from a door... and sometimes, you might find many things that unrelated to the puzzle...'], null);
    narrative5showed = true;
  }
});
narrative6showed = false;
myGame.eventSystem.addSceneTransitEvent(6, function(){
  if (!narrative6showed) {
    myGame.messageBox.startConversation(['You win!'], null);
    narrative6showed = true;
  }
});const reaction = myGame.reactionSystem;
const puzzle = myGame.puzzleSystem;

//===============create Objects==================

var _Backdrop_12= Alice.Object.fromImage('./Resources/Assets/room_basic.png');
_Backdrop_12.name = 'Backdrop';
_Backdrop_12.anchor.set(0.5, 0.5);
_Backdrop_12.x = 512;
_Backdrop_12.y = 288;
_Backdrop_12.scale.set(0.8, 0.8);
reaction.makeUnClickable( _Backdrop_12 );
reaction.makeUnDraggable( _Backdrop_12 );
myGame.scene(0).addChild(_Backdrop_12);

var _Door_13= Alice.Object.fromImage('./Resources/Assets/door.png');
_Door_13.name = 'Door';
_Door_13.anchor.set(0.5, 0.5);
_Door_13.x = 513;
_Door_13.y = 353;
_Door_13.scale.set(0.5, 0.5);
reaction.makeClickable( _Door_13 );
reaction.makeUnDraggable( _Door_13 );
myGame.scene(0).addChild(_Door_13);

var _Backdrop_20= Alice.Object.fromImage('./Resources/Assets/room_basic.png');
_Backdrop_20.name = 'Backdrop';
_Backdrop_20.anchor.set(0.5, 0.5);
_Backdrop_20.x = 512;
_Backdrop_20.y = 288;
_Backdrop_20.scale.set(0.8, 0.8);
reaction.makeUnClickable( _Backdrop_20 );
reaction.makeUnDraggable( _Backdrop_20 );
myGame.scene(1).addChild(_Backdrop_20);

var _Door_21= Alice.Object.fromImage('./Resources/Assets/door.png');
_Door_21.name = 'Door';
_Door_21.anchor.set(0.5, 0.5);
_Door_21.x = 514;
_Door_21.y = 353;
_Door_21.scale.set(0.5, 0.5);
reaction.makeClickable( _Door_21 );
reaction.makeUnDraggable( _Door_21 );
myGame.scene(1).addChild(_Door_21);

var _Key_22= Alice.Object.fromImage('./Resources/Assets/key.png');
_Key_22.name = 'Key';
_Key_22.anchor.set(0.5, 0.5);
_Key_22.x = 259;
_Key_22.y = 510;
_Key_22.scale.set(0.24, 0.24);
reaction.makeClickable( _Key_22 );
reaction.makeUnDraggable( _Key_22 );
myGame.scene(1).addChild(_Key_22);

var _Backdrop_23= Alice.Object.fromImage('./Resources/Assets/room_blue.png');
_Backdrop_23.name = 'Backdrop';
_Backdrop_23.anchor.set(0.5, 0.5);
_Backdrop_23.x = 512;
_Backdrop_23.y = 288;
_Backdrop_23.scale.set(0.8, 0.8);
reaction.makeUnClickable( _Backdrop_23 );
reaction.makeUnDraggable( _Backdrop_23 );
myGame.scene(2).addChild(_Backdrop_23);

var _Backdrop_24= Alice.Object.fromImage('./Resources/Assets/pixel_indoor_env.png');
_Backdrop_24.name = 'Backdrop';
_Backdrop_24.anchor.set(0.5, 0.5);
_Backdrop_24.x = 512;
_Backdrop_24.y = 288;
_Backdrop_24.scale.set(0.9990243902439024, 1);
reaction.makeUnClickable( _Backdrop_24 );
reaction.makeUnDraggable( _Backdrop_24 );
myGame.scene(3).addChild(_Backdrop_24);

var _Backdrop_25= Alice.Object.fromImage('./Resources/Assets/room_basic.png');
_Backdrop_25.name = 'Backdrop';
_Backdrop_25.anchor.set(0.5, 0.5);
_Backdrop_25.x = 512;
_Backdrop_25.y = 288;
_Backdrop_25.scale.set(0.8, 0.8);
reaction.makeUnClickable( _Backdrop_25 );
reaction.makeUnDraggable( _Backdrop_25 );
myGame.scene(4).addChild(_Backdrop_25);

var _Backdrop_26= Alice.Object.fromImage('./Resources/Assets/room_blue.png');
_Backdrop_26.name = 'Backdrop';
_Backdrop_26.anchor.set(0.5, 0.5);
_Backdrop_26.x = 512;
_Backdrop_26.y = 288;
_Backdrop_26.scale.set(0.8, 0.8);
reaction.makeUnClickable( _Backdrop_26 );
reaction.makeUnDraggable( _Backdrop_26 );
myGame.scene(5).addChild(_Backdrop_26);

var _Backdrop_27= Alice.Object.fromImage('./Resources/Assets/night.png');
_Backdrop_27.name = 'Backdrop';
_Backdrop_27.anchor.set(0.5, 0.5);
_Backdrop_27.x = 512;
_Backdrop_27.y = 288;
_Backdrop_27.scale.set(0.8, 0.8);
reaction.makeUnClickable( _Backdrop_27 );
reaction.makeUnDraggable( _Backdrop_27 );
myGame.scene(6).addChild(_Backdrop_27);

var _Dooropen_30= Alice.Object.fromImage('./Resources/Assets/door_open.png');
_Dooropen_30.name = 'Door open';
_Dooropen_30.anchor.set(0.5, 0.5);
_Dooropen_30.x = 505;
_Dooropen_30.y = 354;
_Dooropen_30.scale.set(0.5, 0.5);
reaction.makeClickable( _Dooropen_30 );
reaction.makeUnDraggable( _Dooropen_30 );
myGame.scene(2).addChild(_Dooropen_30);

var _Monster2_31= Alice.Object.fromImage('./Resources/Assets/monster2.png');
_Monster2_31.name = 'Monster2';
_Monster2_31.anchor.set(0.5, 0.5);
_Monster2_31.x = 508;
_Monster2_31.y = 398;
_Monster2_31.scale.set(0.31, 0.31);
reaction.makeClickable( _Monster2_31 );
reaction.makeUnDraggable( _Monster2_31 );
myGame.scene(2).addChild(_Monster2_31);
_Monster2_31.description = 'A monster!';
reaction.showObjectDescription(_Monster2_31);
_Monster2_31.conversation = 'I want money!';
reaction.showObjectConversation(_Monster2_31);

var _Money_32= Alice.Object.fromImage('./Resources/Assets/money.png');
_Money_32.name = 'Money';
_Money_32.anchor.set(0.5, 0.5);
_Money_32.x = 244;
_Money_32.y = 493;
_Money_32.scale.set(0.5, 0.5);
reaction.makeClickable( _Money_32 );
reaction.makeUnDraggable( _Money_32 );
myGame.scene(2).addChild(_Money_32);

var _Door3_33= Alice.Object.fromImage('./Resources/Assets/Door3.png');
_Door3_33.name = 'Door3';
_Door3_33.anchor.set(0.5, 0.5);
_Door3_33.x = 201;
_Door3_33.y = 373;
_Door3_33.scale.set(0.5, 0.5);
reaction.makeClickable( _Door3_33 );
reaction.makeUnDraggable( _Door3_33 );
myGame.scene(3).addChild(_Door3_33);

var _Lever3_34= Alice.Object.fromImage('./Resources/Assets/Lever3.png');
_Lever3_34.name = 'Lever3';
_Lever3_34.anchor.set(0.5, 0.5);
_Lever3_34.x = 350;
_Lever3_34.y = 416;
_Lever3_34.scale.set(0.26, 0.26);
reaction.makeClickable( _Lever3_34 );
reaction.makeUnDraggable( _Lever3_34 );
myGame.scene(3).addChild(_Lever3_34);

var _Lockedbox2_35= Alice.Object.fromImage('./Resources/Assets/Locked Box2.png');
_Lockedbox2_35.name = 'Locked box2';
_Lockedbox2_35.anchor.set(0.5, 0.5);
_Lockedbox2_35.x = 809;
_Lockedbox2_35.y = 456;
_Lockedbox2_35.scale.set(0.75, 0.75);
reaction.makeClickable( _Lockedbox2_35 );
reaction.makeUnDraggable( _Lockedbox2_35 );
myGame.scene(3).addChild(_Lockedbox2_35);

var _Key2_36= Alice.Object.fromImage('./Resources/Assets/Key2.png');
_Key2_36.name = 'Key2';
_Key2_36.anchor.set(0.5, 0.5);
_Key2_36.x = 0;
_Key2_36.y = 0;
_Key2_36.scale.set(1, 1);
reaction.makeClickable( _Key2_36 );
reaction.makeUnDraggable( _Key2_36 );

var _Door4_37= Alice.Object.fromImage('./Resources/Assets/Door4.png');
_Door4_37.name = 'Door4';
_Door4_37.anchor.set(0.5, 0.5);
_Door4_37.x = 510;
_Door4_37.y = 352;
_Door4_37.scale.set(0.5, 0.5);
reaction.makeClickable( _Door4_37 );
reaction.makeUnDraggable( _Door4_37 );
myGame.scene(4).addChild(_Door4_37);
_Door4_37.description = 'A futuristic door without a key hole.';
reaction.showObjectDescription(_Door4_37);

var _Box4_38= Alice.Object.fromImage('./Resources/Assets/Box4.png');
_Box4_38.name = 'Box4';
_Box4_38.anchor.set(0.5, 0.5);
_Box4_38.x = 258;
_Box4_38.y = 452;
_Box4_38.scale.set(0.5, 0.5);
reaction.makeClickable( _Box4_38 );
reaction.makeUnDraggable( _Box4_38 );
myGame.scene(4).addChild(_Box4_38);
_Box4_38.description = 'This box is locked by password.';
reaction.showObjectDescription(_Box4_38);

var _Blackboard_39= Alice.Object.fromImage('./Resources/Assets/blackboard.png');
_Blackboard_39.name = 'Blackboard';
_Blackboard_39.anchor.set(0.5, 0.5);
_Blackboard_39.x = 727;
_Blackboard_39.y = 344;
_Blackboard_39.scale.set(0.2, 0.2);
reaction.makeClickable( _Blackboard_39 );
reaction.makeUnDraggable( _Blackboard_39 );
myGame.scene(4).addChild(_Blackboard_39);
_Blackboard_39.description = 'It says "2460".';
reaction.showObjectDescription(_Blackboard_39);

var _Door_40= Alice.Object.fromImage('./Resources/Assets/door.png');
_Door_40.name = 'Door';
_Door_40.anchor.set(0.5, 0.5);
_Door_40.x = 690;
_Door_40.y = 354;
_Door_40.scale.set(0.5, 0.5);
reaction.makeClickable( _Door_40 );
reaction.makeUnDraggable( _Door_40 );
myGame.scene(5).addChild(_Door_40);
_Door_40.description = 'It is blocked by a big rock.';
reaction.showObjectDescription(_Door_40);

var _Oldphoto_46= Alice.Object.fromImage('./Resources/Assets/old_photo.png');
_Oldphoto_46.name = 'Old photo';
_Oldphoto_46.anchor.set(0.5, 0.5);
_Oldphoto_46.x = 773;
_Oldphoto_46.y = 423;
_Oldphoto_46.scale.set(0.5, 0.5);
reaction.makeClickable( _Oldphoto_46 );
reaction.makeUnDraggable( _Oldphoto_46 );
myGame.scene(5).addChild(_Oldphoto_46);

var _Rock_41= Alice.Object.fromImage('./Resources/Assets/Button.png');
_Rock_41.name = 'Rock';
_Rock_41.anchor.set(0.5, 0.5);
_Rock_41.x = 688;
_Rock_41.y = 397;
_Rock_41.scale.set(1.62, 1.62);
reaction.makeClickable( _Rock_41 );
reaction.makeUnDraggable( _Rock_41 );
myGame.scene(5).addChild(_Rock_41);
_Rock_41.description = 'A big rock!';
reaction.showObjectDescription(_Rock_41);

var _Vent3_42= Alice.Object.fromImage('./Resources/Assets/Vent3.png');
_Vent3_42.name = 'Vent3';
_Vent3_42.anchor.set(0.5, 0.5);
_Vent3_42.x = 231;
_Vent3_42.y = 405;
_Vent3_42.scale.set(0.24, 0.24);
reaction.makeClickable( _Vent3_42 );
reaction.makeUnDraggable( _Vent3_42 );
myGame.scene(5).addChild(_Vent3_42);
_Vent3_42.description = 'I need a knife to ';
reaction.showObjectDescription(_Vent3_42);

var _Locker_43= Alice.Object.fromImage('./Resources/Assets/locker.png');
_Locker_43.name = 'Locker';
_Locker_43.anchor.set(0.5, 0.5);
_Locker_43.x = 373;
_Locker_43.y = 403;
_Locker_43.scale.set(0.5, 0.5);
reaction.makeClickable( _Locker_43 );
reaction.makeUnDraggable( _Locker_43 );
myGame.scene(5).addChild(_Locker_43);
_Locker_43.description = 'A locker!';
reaction.showObjectDescription(_Locker_43);

var _Knife_45= Alice.Object.fromImage('./Resources/Assets/knife.png');
_Knife_45.name = 'Knife';
_Knife_45.anchor.set(0.5, 0.5);
_Knife_45.x = 0;
_Knife_45.y = 0;
_Knife_45.scale.set(1, 1);
reaction.makeClickable( _Knife_45 );
reaction.makeUnDraggable( _Knife_45 );

var _Shopper_44= Alice.Object.fromImage('./Resources/Assets/shopper.png');
_Shopper_44.name = 'Shopper';
_Shopper_44.anchor.set(0.5, 0.5);
_Shopper_44.x = 502;
_Shopper_44.y = 352;
_Shopper_44.scale.set(0.5, 0.5);
reaction.makeClickable( _Shopper_44 );
reaction.makeUnDraggable( _Shopper_44 );
myGame.scene(5).addChild(_Shopper_44);
_Shopper_44.description = 'A girl.';
reaction.showObjectDescription(_Shopper_44);
_Shopper_44.conversation = 'I can\'t find my parent\'s photo. If you can find it for me I can give you this knife!';
reaction.showObjectConversation(_Shopper_44);

var _Idcard_51= Alice.Object.fromImage('./Resources/Assets/ID Card.png');
_Idcard_51.name = 'Id card';
_Idcard_51.anchor.set(0.5, 0.5);
_Idcard_51.x = 0;
_Idcard_51.y = 0;
_Idcard_51.scale.set(1, 1);
reaction.makeClickable( _Idcard_51 );
reaction.makeUnDraggable( _Idcard_51 );

_Lockedbox2_35.content = [_Key2_36]

_Box4_38.content = [_Idcard_51]

_Shopper_44.content = [_Knife_45]


//================puzzle=====================
puzzle.doorPuzzle(1, _Door_13, undefined, null);
puzzle.keyLockDoorPuzzle(2, _Door_21, _Key_22, undefined, null);
puzzle.bribeGuardDoorPuzzle(3, _Dooropen_30, _Monster2_31, _Money_32, undefined, null);
puzzle.keyLockDoorPuzzle(4, _Door3_33, _Key2_36, undefined, null);
puzzle.keyLockDoorPuzzle(5, _Door4_37, _Idcard_51, undefined, null);
puzzle.keyLockDoorPuzzle(6, _Vent3_42, _Knife_45, true, null);
puzzle.getItemPuzzle(_Key_22, undefined, null);
puzzle.getItemPuzzle(_Money_32, undefined, null);
puzzle.getItemFromSwitchContainerPuzzle(_Key2_36, _Lockedbox2_35, _Lever3_34, undefined, null);
puzzle.getItemFromPasswordLockContainerPuzzle(_Idcard_51, _Box4_38, '2460', undefined, null);
puzzle.getItemPuzzle(_Oldphoto_46, undefined, null);
puzzle.getItemFromTradeCharacterPuzzle(_Knife_45, _Shopper_44, _Oldphoto_46, undefined, undefined);
myGame.start(0);