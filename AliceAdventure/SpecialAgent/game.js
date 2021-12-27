
document.addEventListener('contextmenu', e => e.preventDefault());
//===============create Game==================
myGame.init(1024,576,5);

//===============add Sound==================
myGame.soundManager.load('correct_17', './Resources/Assets/correct.mp3');
myGame.soundManager.load('wrong_18', './Resources/Assets/wrong.wav');
myGame.soundManager.load('lock_19', './Resources/Assets/lock.wav');
myGame.soundManager.load('unlock_20', './Resources/Assets/unlock.wav');
myGame.soundManager.load('put_21', './Resources/Assets/put.wav');
myGame.soundManager.load('win_22', './Resources/Assets/win.wav');
myGame.soundManager.load('door_23', './Resources/Assets/door.wav');
myGame.soundManager.load('meow_1_24', './Resources/Assets/meow_happy.wav');
myGame.soundManager.load('meow_2_25', './Resources/Assets/meow_unhappy.wav');

//===============create Scene================
myGame.sceneManager.createScenes(3);

narrative0showed = false;
myGame.eventSystem.addSceneTransitEvent(0, function(){
  if (!narrative0showed) {
    myGame.messageBox.startConversation(['You have sneaked in the evil company. Find out the envelope and give it to your partner outside!'], null);
    narrative0showed = true;
  }
});
narrative1showed = false;
myGame.eventSystem.addSceneTransitEvent(1, function(){
  if (!narrative1showed) {
    myGame.messageBox.startConversation(['You entered the second room. There is a guard in front of the door.'], null);
    narrative1showed = true;
  }
});
narrative2showed = false;
myGame.eventSystem.addSceneTransitEvent(2, function(){
  if (!narrative2showed) {
    myGame.messageBox.startConversation(['You are now outside of the company. There comes your partner!'], null);
    narrative2showed = true;
  }
});const reaction = myGame.reactionSystem;
const puzzle = myGame.puzzleSystem;

//===============create Objects==================

var _Backdrop_27= Alice.Object.fromImage('./Resources/Assets/room_blue.png');
_Backdrop_27.name = 'Backdrop';
_Backdrop_27.anchor.set(0.5, 0.5);
_Backdrop_27.x = 512;
_Backdrop_27.y = 288;
_Backdrop_27.scale.set(0.8, 0.8);
reaction.makeUnClickable( _Backdrop_27 );
reaction.makeUnDraggable( _Backdrop_27 );
myGame.scene(0).addChild(_Backdrop_27);

var _Table_28= Alice.Object.fromImage('./Resources/Assets/table.png');
_Table_28.name = 'Table';
_Table_28.anchor.set(0.5, 0.5);
_Table_28.x = 569;
_Table_28.y = 425;
_Table_28.scale.set(0.5, 0.5);
reaction.makeClickable( _Table_28 );
reaction.makeUnDraggable( _Table_28 );
myGame.scene(0).addChild(_Table_28);

var _Box_29= Alice.Object.fromImage('./Resources/Assets/box1.png');
_Box_29.name = 'Box';
_Box_29.anchor.set(0.5, 0.5);
_Box_29.x = 651;
_Box_29.y = 325;
_Box_29.scale.set(0.5, 0.5);
reaction.makeClickable( _Box_29 );
reaction.makeUnDraggable( _Box_29 );
myGame.scene(0).addChild(_Box_29);
_Box_29.description = 'There seems to be something in this box.';
reaction.showObjectDescription(_Box_29);

var _Safe_30= Alice.Object.fromImage('./Resources/Assets/Safe.png');
_Safe_30.name = 'Safe';
_Safe_30.anchor.set(0.5, 0.5);
_Safe_30.x = 497;
_Safe_30.y = 330;
_Safe_30.scale.set(0.5, 0.5);
reaction.makeClickable( _Safe_30 );
reaction.makeUnDraggable( _Safe_30 );
myGame.scene(0).addChild(_Safe_30);
_Safe_30.description = 'The safe is locked by passcode.';
reaction.showObjectDescription(_Safe_30);

var _Door_31= Alice.Object.fromImage('./Resources/Assets/door.png');
_Door_31.name = 'Door';
_Door_31.anchor.set(0.5, 0.5);
_Door_31.x = 284;
_Door_31.y = 354;
_Door_31.scale.set(0.5, 0.5);
reaction.makeClickable( _Door_31 );
reaction.makeUnDraggable( _Door_31 );
myGame.scene(0).addChild(_Door_31);
_Door_31.description = 'The door is locked by a key.';
reaction.showObjectDescription(_Door_31);

var _Key_32= Alice.Object.fromImage('./Resources/Assets/key.png');
_Key_32.name = 'Key';
_Key_32.anchor.set(0.5, 0.5);
_Key_32.x = 240;
_Key_32.y = 512;
_Key_32.scale.set(0.19, 0.19);
reaction.makeClickable( _Key_32 );
reaction.makeUnDraggable( _Key_32 );
myGame.scene(0).addChild(_Key_32);
_Key_32.description = 'A key. Maybe it can open a key lock.';
reaction.showObjectDescription(_Key_32);

var _Postit_33= Alice.Object.fromImage('./Resources/Assets/post-it.png');
_Postit_33.name = 'Post-it';
_Postit_33.anchor.set(0.5, 0.5);
_Postit_33.x = 755;
_Postit_33.y = 176;
_Postit_33.scale.set(0.17, 0.17);
reaction.makeClickable( _Postit_33 );
reaction.makeUnDraggable( _Postit_33 );
myGame.scene(0).addChild(_Postit_33);
_Postit_33.description = 'A sticky note. It says: 2019.';
reaction.showObjectDescription(_Postit_33);

var _Backdrop_35= Alice.Object.fromImage('./Resources/Assets/room_basic.png');
_Backdrop_35.name = 'Backdrop';
_Backdrop_35.anchor.set(0.5, 0.5);
_Backdrop_35.x = 512;
_Backdrop_35.y = 288;
_Backdrop_35.scale.set(0.8, 0.8);
reaction.makeUnClickable( _Backdrop_35 );
reaction.makeUnDraggable( _Backdrop_35 );
myGame.scene(1).addChild(_Backdrop_35);

var _Dooropen_36= Alice.Object.fromImage('./Resources/Assets/door_open.png');
_Dooropen_36.name = 'Door open';
_Dooropen_36.anchor.set(0.5, 0.5);
_Dooropen_36.x = 687;
_Dooropen_36.y = 356;
_Dooropen_36.scale.set(0.5, 0.5);
reaction.makeClickable( _Dooropen_36 );
reaction.makeUnDraggable( _Dooropen_36 );
myGame.scene(1).addChild(_Dooropen_36);
_Dooropen_36.description = 'The door you came from.';
reaction.showObjectDescription(_Dooropen_36);

var _Door_37= Alice.Object.fromImage('./Resources/Assets/door.png');
_Door_37.name = 'Door';
_Door_37.anchor.set(0.5, 0.5);
_Door_37.x = 322;
_Door_37.y = 353;
_Door_37.scale.set(0.5, 0.5);
reaction.makeClickable( _Door_37 );
reaction.makeUnDraggable( _Door_37 );
myGame.scene(1).addChild(_Door_37);
_Door_37.description = 'A door, but guarded by the guard.';
reaction.showObjectDescription(_Door_37);

var _Boy_38= Alice.Object.fromImage('./Resources/Assets/boy.png');
_Boy_38.name = 'Boy';
_Boy_38.anchor.set(0.5, 0.5);
_Boy_38.x = 419;
_Boy_38.y = 368;
_Boy_38.scale.set(0.5, 0.5);
reaction.makeClickable( _Boy_38 );
reaction.makeUnDraggable( _Boy_38 );
myGame.scene(1).addChild(_Boy_38);
_Boy_38.description = 'A guard.';
reaction.showObjectDescription(_Boy_38);
_Boy_38.conversation = 'I won\'t let you go, unless you can...';
reaction.showObjectConversation(_Boy_38);

var _Money_39= Alice.Object.fromImage('./Resources/Assets/money.png');
_Money_39.name = 'Money';
_Money_39.anchor.set(0.5, 0.5);
_Money_39.x = 0;
_Money_39.y = 0;
_Money_39.scale.set(1, 1);
reaction.makeClickable( _Money_39 );
reaction.makeUnDraggable( _Money_39 );

var _Envelope_40= Alice.Object.fromImage('./Resources/Assets/envelope.png');
_Envelope_40.name = 'Envelope';
_Envelope_40.anchor.set(0.5, 0.5);
_Envelope_40.x = 0;
_Envelope_40.y = 0;
_Envelope_40.scale.set(1, 1);
reaction.makeClickable( _Envelope_40 );
reaction.makeUnDraggable( _Envelope_40 );

var _Backdrop_42= Alice.Object.fromImage('./Resources/Assets/Hill.png');
_Backdrop_42.name = 'Backdrop';
_Backdrop_42.anchor.set(0.5, 0.5);
_Backdrop_42.x = 512;
_Backdrop_42.y = 288;
_Backdrop_42.scale.set(0.5333333333333333, 0.5333333333333333);
reaction.makeUnClickable( _Backdrop_42 );
reaction.makeUnDraggable( _Backdrop_42 );
myGame.scene(2).addChild(_Backdrop_42);

var _Hero_44= Alice.Object.fromImage('./Resources/Assets/hero2.png');
_Hero_44.name = 'Hero';
_Hero_44.anchor.set(0.5, 0.5);
_Hero_44.x = 323;
_Hero_44.y = 357;
_Hero_44.scale.set(0.5, 0.5);
reaction.makeClickable( _Hero_44 );
reaction.makeUnDraggable( _Hero_44 );
myGame.scene(2).addChild(_Hero_44);
_Hero_44.conversation = 'Hey, you got the envelope?';
reaction.showObjectConversation(_Hero_44);

var _Medal_51= Alice.Object.fromImage('./Resources/Assets/Coin.png');
_Medal_51.name = 'Medal';
_Medal_51.anchor.set(0.5, 0.5);
_Medal_51.x = 0;
_Medal_51.y = 0;
_Medal_51.scale.set(1, 1);
reaction.makeClickable( _Medal_51 );
reaction.makeUnDraggable( _Medal_51 );

var _Door_53= Alice.Object.fromImage('./Resources/Assets/Door4.png');
_Door_53.name = 'Door';
_Door_53.anchor.set(0.5, 0.5);
_Door_53.x = 63;
_Door_53.y = 298;
_Door_53.scale.set(0.08, 0.08);
reaction.makeClickable( _Door_53 );
reaction.makeUnDraggable( _Door_53 );
myGame.scene(2).addChild(_Door_53);
_Door_53.description = 'The door of the evil company';
reaction.showObjectDescription(_Door_53);

_Box_29.content = [_Envelope_40]

_Safe_30.content = [_Money_39]

_Hero_44.content = [_Medal_51]


//================puzzle=====================
puzzle.getItemPuzzle(_Key_32, undefined, null);
puzzle.getItemFromContainerPuzzle(_Envelope_40, _Box_29, undefined, null);
puzzle.keyLockDoorPuzzle(1, _Door_31, _Key_32, undefined, null);
puzzle.bribeGuardDoorPuzzle(2, _Door_37, _Boy_38, _Money_39, undefined, null);
puzzle.getItemFromPasswordLockContainerPuzzle(_Money_39, _Safe_30, '2019', undefined, null);
puzzle.doorPuzzle(0, _Dooropen_36, undefined, null);
puzzle.getItemFromTradeCharacterPuzzle(_Medal_51, _Hero_44, _Envelope_40, true, undefined);
puzzle.doorPuzzle(1, _Door_53, undefined, null);
myGame.start(0);