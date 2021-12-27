
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
myGame.sceneManager.createScenes(3);

narrative0showed = false;
myGame.eventSystem.addSceneTransitEvent(0, function(){
  if (!narrative0showed) {
    myGame.messageBox.startConversation(['A normal room. How can I get out of here?'], null);
    narrative0showed = true;
  }
});
narrative1showed = false;
myGame.eventSystem.addSceneTransitEvent(1, function(){
  if (!narrative1showed) {
    myGame.messageBox.startConversation(['Oh, it connects to a space station...'], null);
    narrative1showed = true;
  }
});
narrative2showed = false;
myGame.eventSystem.addSceneTransitEvent(2, function(){
  if (!narrative2showed) {
    myGame.messageBox.startConversation(['Another "normal room".'], null);
    narrative2showed = true;
  }
});const reaction = myGame.reactionSystem;
const puzzle = myGame.puzzleSystem;

//===============create Objects==================

var _Backdrop_25= Alice.Object.fromImage('./Resources/Assets/scifi_indoor.png');
_Backdrop_25.name = 'Backdrop';
_Backdrop_25.anchor.set(0.5, 0.5);
_Backdrop_25.x = 512;
_Backdrop_25.y = 288;
_Backdrop_25.scale.set(0.5333333333333333, 0.5333333333333333);
reaction.makeUnClickable( _Backdrop_25 );
reaction.makeUnDraggable( _Backdrop_25 );
myGame.scene(1).addChild(_Backdrop_25);

var _Door4_26= Alice.Object.fromImage('./Resources/Assets/Door4.png');
_Door4_26.name = 'Door4';
_Door4_26.anchor.set(0.5, 0.5);
_Door4_26.x = 515;
_Door4_26.y = 245;
_Door4_26.scale.set(0.81, 0.81);
reaction.makeClickable( _Door4_26 );
reaction.makeUnDraggable( _Door4_26 );
myGame.scene(1).addChild(_Door4_26);
_Door4_26.description = 'I should inspect this door carefully.';
reaction.showObjectDescription(_Door4_26);

var _Coin_27= Alice.Object.fromImage('./Resources/Assets/Coin2.png');
_Coin_27.name = 'Coin';
_Coin_27.anchor.set(0.5, 0.5);
_Coin_27.x = 0;
_Coin_27.y = 0;
_Coin_27.scale.set(1, 1);
reaction.makeClickable( _Coin_27 );
reaction.makeUnDraggable( _Coin_27 );

var _Whitepaint_30= Alice.Object.fromImage('./Resources/Assets/whitepaint.png');
_Whitepaint_30.name = 'Whitepaint';
_Whitepaint_30.anchor.set(0.5, 0.5);
_Whitepaint_30.x = 858;
_Whitepaint_30.y = 485;
_Whitepaint_30.scale.set(0.5, 0.5);
reaction.makeClickable( _Whitepaint_30 );
reaction.makeUnDraggable( _Whitepaint_30 );
myGame.scene(1).addChild(_Whitepaint_30);
_Whitepaint_30.description = 'I can\'t use hand to investigate the paint. I should find something long.';
reaction.showObjectDescription(_Whitepaint_30);

var _Sword_33= Alice.Object.fromImage('./Resources/Assets/sword.png');
_Sword_33.name = 'Sword';
_Sword_33.anchor.set(0.5, 0.5);
_Sword_33.x = 0;
_Sword_33.y = 0;
_Sword_33.scale.set(1, 1);
reaction.makeClickable( _Sword_33 );
reaction.makeUnDraggable( _Sword_33 );

var _Redcone_34= Alice.Object.fromImage('./Resources/Assets/redcone.png');
_Redcone_34.name = 'Redcone';
_Redcone_34.anchor.set(0.5, 0.5);
_Redcone_34.x = 218;
_Redcone_34.y = 425;
_Redcone_34.scale.set(1.3, 1.3);
reaction.makeClickable( _Redcone_34 );
reaction.makeUnDraggable( _Redcone_34 );
myGame.scene(1).addChild(_Redcone_34);
_Redcone_34.description = 'I should check if there\'s something under the cone.';
reaction.showObjectDescription(_Redcone_34);

var _Backdrop_40= Alice.Object.fromImage('./Resources/Assets/library.png');
_Backdrop_40.name = 'Backdrop';
_Backdrop_40.anchor.set(0.5, 0.5);
_Backdrop_40.x = 512;
_Backdrop_40.y = 288;
_Backdrop_40.scale.set(0.8, 0.8);
reaction.makeUnClickable( _Backdrop_40 );
reaction.makeUnDraggable( _Backdrop_40 );
myGame.scene(2).addChild(_Backdrop_40);

var _Safe_45= Alice.Object.fromImage('./Resources/Assets/Safe.png');
_Safe_45.name = 'Safe';
_Safe_45.anchor.set(0.5, 0.5);
_Safe_45.x = 656;
_Safe_45.y = 224;
_Safe_45.scale.set(1.33, 1.33);
reaction.makeClickable( _Safe_45 );
reaction.makeUnDraggable( _Safe_45 );
myGame.scene(2).addChild(_Safe_45);
_Safe_45.description = '"COUNT THE BOOK"';
reaction.showObjectDescription(_Safe_45);

var _Money_46= Alice.Object.fromImage('./Resources/Assets/money.png');
_Money_46.name = 'Money';
_Money_46.anchor.set(0.5, 0.5);
_Money_46.x = 0;
_Money_46.y = 0;
_Money_46.scale.set(1, 1);
reaction.makeClickable( _Money_46 );
reaction.makeUnDraggable( _Money_46 );

var _Backdrop_49= Alice.Object.fromImage('./Resources/Assets/room_basic.png');
_Backdrop_49.name = 'Backdrop';
_Backdrop_49.anchor.set(0.5, 0.5);
_Backdrop_49.x = 512;
_Backdrop_49.y = 288;
_Backdrop_49.scale.set(0.8, 0.8);
reaction.makeUnClickable( _Backdrop_49 );
reaction.makeUnDraggable( _Backdrop_49 );
myGame.scene(0).addChild(_Backdrop_49);

var _Starrylightpainting_52= Alice.Object.fromImage('./Resources/Assets/starrylight_painting.png');
_Starrylightpainting_52.name = 'Starrylight painting';
_Starrylightpainting_52.anchor.set(0.5, 0.5);
_Starrylightpainting_52.x = 652;
_Starrylightpainting_52.y = 240;
_Starrylightpainting_52.scale.set(1.07, 1.07);
reaction.makeClickable( _Starrylightpainting_52 );
reaction.makeUnDraggable( _Starrylightpainting_52 );
myGame.scene(0).addChild(_Starrylightpainting_52);
_Starrylightpainting_52.description = 'Starry Night';
reaction.showObjectDescription(_Starrylightpainting_52);

var _Door_53= Alice.Object.fromImage('./Resources/Assets/door.png');
_Door_53.name = 'Door';
_Door_53.anchor.set(0.5, 0.5);
_Door_53.x = 342;
_Door_53.y = 355;
_Door_53.scale.set(0.5, 0.5);
reaction.makeClickable( _Door_53 );
reaction.makeUnDraggable( _Door_53 );
myGame.scene(0).addChild(_Door_53);
_Door_53.description = 'A door. I cannot open it.';
reaction.showObjectDescription(_Door_53);

_Whitepaint_30.content = [_Coin_27]

_Redcone_34.content = [_Sword_33]

_Safe_45.content = [_Money_46]


//================puzzle=====================
puzzle.keyLockDoorPuzzle(2, _Door4_26, _Coin_27, undefined, null);
puzzle.getItemFromKeyLockContainerPuzzle(_Coin_27, _Whitepaint_30, _Sword_33, undefined, null);
puzzle.getItemFromContainerPuzzle(_Sword_33, _Redcone_34, undefined, null);
puzzle.getItemFromPasswordLockContainerPuzzle(_Money_46, _Safe_45, '8446', true, null);
puzzle.doorPuzzle(1, _Starrylightpainting_52, undefined, null);
myGame.start(0);