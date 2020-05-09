
document.addEventListener('contextmenu', e => e.preventDefault());
//===============create Game==================
myGame.init(1024,576,5);

//===============add Sound==================
myGame.soundManager.load('correct_52', './Resources/Assets/correct.mp3');
myGame.soundManager.load('wrong_53', './Resources/Assets/wrong.wav');
myGame.soundManager.load('lock_54', './Resources/Assets/lock.wav');
myGame.soundManager.load('unlock_55', './Resources/Assets/unlock.wav');
myGame.soundManager.load('put_56', './Resources/Assets/put.wav');
myGame.soundManager.load('win_57', './Resources/Assets/win.wav');
myGame.soundManager.load('door_58', './Resources/Assets/door.wav');
myGame.soundManager.load('meow_1_59', './Resources/Assets/meow_happy.wav');
myGame.soundManager.load('meow_2_60', './Resources/Assets/meow_unhappy.wav');

//===============create Scene================
myGame.sceneManager.createScenes(2);

narrative0showed = false;
myGame.eventSystem.addSceneTransitEvent(0, function(){
  if (!narrative0showed) {
    myGame.messageBox.startConversation(['the man who betrayed the avengers.'], null);
    narrative0showed = true;
  }
});const reaction = myGame.reactionSystem;
const puzzle = myGame.puzzleSystem;

//===============create Objects==================

var _Backdrop_62= Alice.Object.fromImage('./Resources/Assets/room_basic.png');
_Backdrop_62.name = 'Backdrop';
_Backdrop_62.anchor.set(0.5, 0.5);
_Backdrop_62.x = 512;
_Backdrop_62.y = 288;
_Backdrop_62.scale.set(0.8, 0.8);
reaction.makeUnClickable( _Backdrop_62 );
reaction.makeUnDraggable( _Backdrop_62 );
myGame.scene(0).addChild(_Backdrop_62);

var _Door_73= Alice.Object.fromImage('./Resources/Assets/door.png');
_Door_73.name = 'Door';
_Door_73.anchor.set(0.5, 0.5);
_Door_73.x = 329;
_Door_73.y = 301;
_Door_73.scale.set(0.85, 0.73);
reaction.makeClickable( _Door_73 );
reaction.makeUnDraggable( _Door_73 );
myGame.scene(0).addChild(_Door_73);

var _Vent_74= Alice.Object.fromImage('./Resources/Assets/Vent3.png');
_Vent_74.name = 'Vent';
_Vent_74.anchor.set(0.5, 0.5);
_Vent_74.x = 794;
_Vent_74.y = 60;
_Vent_74.scale.set(0.21, 0.2);
reaction.makeClickable( _Vent_74 );
reaction.makeUnDraggable( _Vent_74 );
myGame.scene(0).addChild(_Vent_74);

var _Safe_75= Alice.Object.fromImage('./Resources/Assets/Safe.png');
_Safe_75.name = 'Safe';
_Safe_75.anchor.set(0.5, 0.5);
_Safe_75.x = 532;
_Safe_75.y = 410;
_Safe_75.scale.set(0.86, 0.98);
reaction.makeClickable( _Safe_75 );
reaction.makeUnDraggable( _Safe_75 );
myGame.scene(0).addChild(_Safe_75);

var _Starrylightpainting_77= Alice.Object.fromImage('./Resources/Assets/starrylight_painting.png');
_Starrylightpainting_77.name = 'Starrylight painting';
_Starrylightpainting_77.anchor.set(0.5, 0.5);
_Starrylightpainting_77.x = 533;
_Starrylightpainting_77.y = 229;
_Starrylightpainting_77.scale.set(0.5, 0.5);
reaction.makeClickable( _Starrylightpainting_77 );
reaction.makeUnDraggable( _Starrylightpainting_77 );
myGame.scene(0).addChild(_Starrylightpainting_77);

var _Bookshelf_78= Alice.Object.fromImage('./Resources/Assets/bookshelf.png');
_Bookshelf_78.name = 'Bookshelf';
_Bookshelf_78.anchor.set(0.5, 0.5);
_Bookshelf_78.x = 764;
_Bookshelf_78.y = 329;
_Bookshelf_78.scale.set(0.5, 0.5);
reaction.makeClickable( _Bookshelf_78 );
reaction.makeUnDraggable( _Bookshelf_78 );
myGame.scene(0).addChild(_Bookshelf_78);

var _Postit_79= Alice.Object.fromImage('./Resources/Assets/post-it.png');
_Postit_79.name = 'Post-it';
_Postit_79.anchor.set(0.5, 0.5);
_Postit_79.x = 0;
_Postit_79.y = 0;
_Postit_79.scale.set(1, 1);
reaction.makeClickable( _Postit_79 );
reaction.makeUnDraggable( _Postit_79 );

var _Key_81= Alice.Object.fromImage('./Resources/Assets/key.png');
_Key_81.name = 'Key';
_Key_81.anchor.set(0.5, 0.5);
_Key_81.x = 0;
_Key_81.y = 0;
_Key_81.scale.set(1, 1);
reaction.makeClickable( _Key_81 );
reaction.makeUnDraggable( _Key_81 );

var _Switch_85= Alice.Object.fromImage('./Resources/Assets/Switch.png');
_Switch_85.name = 'Switch';
_Switch_85.anchor.set(0.5, 0.5);
_Switch_85.x = 637;
_Switch_85.y = 315;
_Switch_85.scale.set(0.5, 0.5);
reaction.makeClickable( _Switch_85 );
reaction.makeUnDraggable( _Switch_85 );
myGame.scene(0).addChild(_Switch_85);

var _Backdrop_92= Alice.Object.fromImage('./Resources/Assets/backdrop.png');
_Backdrop_92.name = 'Backdrop';
_Backdrop_92.anchor.set(0.5, 0.5);
_Backdrop_92.x = 512;
_Backdrop_92.y = 288;
_Backdrop_92.scale.set(0.8, 0.8);
reaction.makeUnClickable( _Backdrop_92 );
reaction.makeUnDraggable( _Backdrop_92 );
myGame.scene(1).addChild(_Backdrop_92);

var _Squarrel_93= Alice.Object.fromImage('./Resources/Assets/Squarrel.png');
_Squarrel_93.name = 'Squarrel';
_Squarrel_93.anchor.set(0.5, 0.5);
_Squarrel_93.x = 751;
_Squarrel_93.y = 439;
_Squarrel_93.scale.set(0.5, 0.5);
reaction.makeClickable( _Squarrel_93 );
reaction.makeUnDraggable( _Squarrel_93 );
myGame.scene(1).addChild(_Squarrel_93);

var _Balloon_94= Alice.Object.fromImage('./Resources/Assets/Balloon.png');
_Balloon_94.name = 'Balloon';
_Balloon_94.anchor.set(0.5, 0.5);
_Balloon_94.x = 223;
_Balloon_94.y = 147;
_Balloon_94.scale.set(0.5, 0.5);
reaction.makeClickable( _Balloon_94 );
reaction.makeUnDraggable( _Balloon_94 );
myGame.scene(1).addChild(_Balloon_94);

var _Idcard_96= Alice.Object.fromImage('./Resources/Assets/ID Card.png');
_Idcard_96.name = 'Id card';
_Idcard_96.anchor.set(0.5, 0.5);
_Idcard_96.x = 0;
_Idcard_96.y = 0;
_Idcard_96.scale.set(1, 1);
reaction.makeClickable( _Idcard_96 );
reaction.makeUnDraggable( _Idcard_96 );

_Vent_74.content = [_Idcard_96]

_Safe_75.content = [_Key_81]

_Bookshelf_78.content = [_Postit_79]


//================puzzle=====================
puzzle.getItemFromKeyLockContainerPuzzle(_Key_81, _Safe_75, _Idcard_96, undefined, null);
puzzle.getItemFromSwitchContainerPuzzle(_Idcard_96, _Vent_74, _Switch_85, undefined, null);
puzzle.keyLockDoorPuzzle(1, _Door_73, _Key_81, true, null);
myGame.start(0);