
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
myGame.sceneManager.createScenes(2);
const reaction = myGame.reactionSystem;
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

var _Door_28= Alice.Object.fromImage('./Resources/Assets/door.png');
_Door_28.name = 'Door';
_Door_28.anchor.set(0.5, 0.5);
_Door_28.x = 726;
_Door_28.y = 355;
_Door_28.scale.set(0.5, 0.5);
reaction.makeClickable( _Door_28 );
reaction.makeUnDraggable( _Door_28 );
myGame.scene(0).addChild(_Door_28);

var _Vent_30= Alice.Object.fromImage('./Resources/Assets/Vent3.png');
_Vent_30.name = 'Vent';
_Vent_30.anchor.set(0.5, 0.5);
_Vent_30.x = 263;
_Vent_30.y = 110;
_Vent_30.scale.set(0.5, 0.5);
reaction.makeClickable( _Vent_30 );
reaction.makeUnDraggable( _Vent_30 );
myGame.scene(0).addChild(_Vent_30);

var _Backdrop_32= Alice.Object.fromImage('./Resources/Assets/Hill.png');
_Backdrop_32.name = 'Backdrop';
_Backdrop_32.anchor.set(0.5, 0.5);
_Backdrop_32.x = 512;
_Backdrop_32.y = 288;
_Backdrop_32.scale.set(0.5333333333333333, 0.5333333333333333);
reaction.makeUnClickable( _Backdrop_32 );
reaction.makeUnDraggable( _Backdrop_32 );
myGame.scene(1).addChild(_Backdrop_32);

var _Ladder_37= Alice.Object.fromImage('./Resources/Assets/Ladder2.png');
_Ladder_37.name = 'Ladder';
_Ladder_37.anchor.set(0.5, 0.5);
_Ladder_37.x = 267;
_Ladder_37.y = 317;
_Ladder_37.scale.set(0.51, 0.73);
reaction.makeClickable( _Ladder_37 );
reaction.makeUnDraggable( _Ladder_37 );
myGame.scene(0).addChild(_Ladder_37);

var _Alicestanding_39= Alice.Object.fromImage('./Resources/Assets/alice_standing.png');
_Alicestanding_39.name = 'Alice standing';
_Alicestanding_39.anchor.set(0.5, 0.5);
_Alicestanding_39.x = 831;
_Alicestanding_39.y = 376;
_Alicestanding_39.scale.set(0.26, 0.27);
reaction.makeClickable( _Alicestanding_39 );
reaction.makeUnDraggable( _Alicestanding_39 );
myGame.scene(0).addChild(_Alicestanding_39);
_Alicestanding_39.conversation = 'escape';
reaction.showObjectConversation(_Alicestanding_39);


//================puzzle=====================
puzzle.passwordLockDoorPuzzle(1, _Vent_30, 'escape', true, null);
myGame.start(0);