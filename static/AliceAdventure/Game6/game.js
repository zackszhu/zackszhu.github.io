
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
myGame.sceneManager.createScenes(5);
const reaction = myGame.reactionSystem;
const puzzle = myGame.puzzleSystem;

//===============create Objects==================

var _Backdrop_13= Alice.Object.fromImage('./Resources/Assets/room_basic.png');
_Backdrop_13.name = 'Backdrop';
_Backdrop_13.anchor.set(0.5, 0.5);
_Backdrop_13.x = 512;
_Backdrop_13.y = 288;
_Backdrop_13.scale.set(0.8, 0.8);
reaction.makeUnClickable( _Backdrop_13 );
reaction.makeUnDraggable( _Backdrop_13 );
myGame.scene(0).addChild(_Backdrop_13);

var _Wizardstudent_14= Alice.Object.fromImage('./Resources/Assets/wizard_student3.png');
_Wizardstudent_14.name = 'Wizard student';
_Wizardstudent_14.anchor.set(0.5, 0.5);
_Wizardstudent_14.x = 398;
_Wizardstudent_14.y = 330;
_Wizardstudent_14.scale.set(0.5, 0.5);
reaction.makeClickable( _Wizardstudent_14 );
reaction.makeUnDraggable( _Wizardstudent_14 );
myGame.scene(0).addChild(_Wizardstudent_14);
_Wizardstudent_14.conversation = 'Thank you for coming. I need you help to get the Two keys needed to unlock this door.They\'re so in the two portals at the edges of the corners.';
reaction.showObjectConversation(_Wizardstudent_14);

var _Portal_15= Alice.Object.fromImage('./Resources/Assets/Portal2.png');
_Portal_15.name = 'Portal';
_Portal_15.anchor.set(0.5, 0.5);
_Portal_15.x = 777;
_Portal_15.y = 356;
_Portal_15.scale.set(0.5, 0.5);
reaction.makeClickable( _Portal_15 );
reaction.makeUnDraggable( _Portal_15 );
myGame.scene(0).addChild(_Portal_15);

var _Portal_16= Alice.Object.fromImage('./Resources/Assets/Portal2.png');
_Portal_16.name = 'Portal';
_Portal_16.anchor.set(0.5, 0.5);
_Portal_16.x = 252;
_Portal_16.y = 356;
_Portal_16.scale.set(0.5, 0.5);
reaction.makeClickable( _Portal_16 );
reaction.makeUnDraggable( _Portal_16 );
myGame.scene(0).addChild(_Portal_16);

var _Backdrop_19= Alice.Object.fromImage('./Resources/Assets/river.png');
_Backdrop_19.name = 'Backdrop';
_Backdrop_19.anchor.set(0.5, 0.5);
_Backdrop_19.x = 512;
_Backdrop_19.y = 288;
_Backdrop_19.scale.set(0.5333333333333333, 0.5333333333333333);
reaction.makeUnClickable( _Backdrop_19 );
reaction.makeUnDraggable( _Backdrop_19 );
myGame.scene(1).addChild(_Backdrop_19);

var _Door_23= Alice.Object.fromImage('./Resources/Assets/Door3.png');
_Door_23.name = 'Door';
_Door_23.anchor.set(0.5, 0.5);
_Door_23.x = 600;
_Door_23.y = 356;
_Door_23.scale.set(0.5, 0.5);
reaction.makeClickable( _Door_23 );
reaction.makeUnDraggable( _Door_23 );
myGame.scene(0).addChild(_Door_23);

var _Key_25= Alice.Object.fromImage('./Resources/Assets/key.png');
_Key_25.name = 'Key';
_Key_25.anchor.set(0.5, 0.5);
_Key_25.x = 0;
_Key_25.y = 0;
_Key_25.scale.set(1, 1);
reaction.makeClickable( _Key_25 );
reaction.makeUnDraggable( _Key_25 );

var _Orangecat_27= Alice.Object.fromImage('./Resources/Assets/orange_cat.png');
_Orangecat_27.name = 'Orange cat';
_Orangecat_27.anchor.set(0.5, 0.5);
_Orangecat_27.x = 132;
_Orangecat_27.y = 241;
_Orangecat_27.scale.set(0.5, 0.5);
reaction.makeClickable( _Orangecat_27 );
reaction.makeUnDraggable( _Orangecat_27 );
myGame.scene(1).addChild(_Orangecat_27);

var _Portal_32= Alice.Object.fromImage('./Resources/Assets/Portal.png');
_Portal_32.name = 'Portal';
_Portal_32.anchor.set(0.5, 0.5);
_Portal_32.x = 923;
_Portal_32.y = 173;
_Portal_32.scale.set(0.64, 0.64);
reaction.makeClickable( _Portal_32 );
reaction.makeUnDraggable( _Portal_32 );
myGame.scene(1).addChild(_Portal_32);

var _Fish_28= Alice.Object.fromImage('./Resources/Assets/Fish.png');
_Fish_28.name = 'Fish';
_Fish_28.anchor.set(0.5, 0.5);
_Fish_28.x = 473;
_Fish_28.y = 365;
_Fish_28.scale.set(0.5, 0.5);
reaction.makeClickable( _Fish_28 );
reaction.makeUnDraggable( _Fish_28 );
myGame.scene(1).addChild(_Fish_28);

var _Backdrop_33= Alice.Object.fromImage('./Resources/Assets/library.png');
_Backdrop_33.name = 'Backdrop';
_Backdrop_33.anchor.set(0.5, 0.5);
_Backdrop_33.x = 512;
_Backdrop_33.y = 288;
_Backdrop_33.scale.set(0.8, 0.8);
reaction.makeUnClickable( _Backdrop_33 );
reaction.makeUnDraggable( _Backdrop_33 );
myGame.scene(2).addChild(_Backdrop_33);

var _Computer_34= Alice.Object.fromImage('./Resources/Assets/computer.png');
_Computer_34.name = 'Computer';
_Computer_34.anchor.set(0.5, 0.5);
_Computer_34.x = 665;
_Computer_34.y = 185;
_Computer_34.scale.set(0.5, 0.5);
reaction.makeClickable( _Computer_34 );
reaction.makeUnDraggable( _Computer_34 );
myGame.scene(2).addChild(_Computer_34);

var _Starrylightpainting_35= Alice.Object.fromImage('./Resources/Assets/starrylight_painting.png');
_Starrylightpainting_35.name = 'Starrylight painting';
_Starrylightpainting_35.anchor.set(0.5, 0.5);
_Starrylightpainting_35.x = 672;
_Starrylightpainting_35.y = 378;
_Starrylightpainting_35.scale.set(0.82, 0.77);
reaction.makeClickable( _Starrylightpainting_35 );
reaction.makeUnDraggable( _Starrylightpainting_35 );
myGame.scene(2).addChild(_Starrylightpainting_35);

var _Vent_36= Alice.Object.fromImage('./Resources/Assets/Vent3.png');
_Vent_36.name = 'Vent';
_Vent_36.anchor.set(0.5, 0.5);
_Vent_36.x = 0;
_Vent_36.y = 0;
_Vent_36.scale.set(1, 1);
reaction.makeClickable( _Vent_36 );
reaction.makeUnDraggable( _Vent_36 );

var _Vent_42= Alice.Object.fromImage('./Resources/Assets/Vent.png');
_Vent_42.name = 'Vent';
_Vent_42.anchor.set(0.5, 0.5);
_Vent_42.x = 493;
_Vent_42.y = 406;
_Vent_42.scale.set(0.22, 0.2);
reaction.makeClickable( _Vent_42 );
reaction.makeUnDraggable( _Vent_42 );
myGame.scene(0).addChild(_Vent_42);

var _Box_44= Alice.Object.fromImage('./Resources/Assets/box2.png');
_Box_44.name = 'Box';
_Box_44.anchor.set(0.5, 0.5);
_Box_44.x = 405;
_Box_44.y = 309;
_Box_44.scale.set(0.5, 0.5);
reaction.makeClickable( _Box_44 );
reaction.makeUnDraggable( _Box_44 );
myGame.scene(2).addChild(_Box_44);

var _Key_45= Alice.Object.fromImage('./Resources/Assets/key.png');
_Key_45.name = 'Key';
_Key_45.anchor.set(0.5, 0.5);
_Key_45.x = 0;
_Key_45.y = 0;
_Key_45.scale.set(1, 1);
reaction.makeClickable( _Key_45 );
reaction.makeUnDraggable( _Key_45 );

_Orangecat_27.content = [_Key_25]

_Starrylightpainting_35.content = [_Vent_36]

_Box_44.content = [_Key_45]


//================puzzle=====================
puzzle.doorPuzzle(1, _Portal_15, undefined, null);
puzzle.doorPuzzle(2, _Portal_16, undefined, null);
puzzle.keyLockDoorPuzzle(3, _Door_23, _Key_25, undefined, null);
puzzle.getItemFromTradeCharacterPuzzle(_Key_25, _Orangecat_27, _Fish_28, undefined, undefined);
puzzle.getItemPuzzle(_Fish_28, undefined, null);
puzzle.doorPuzzle(4, _Starrylightpainting_35, undefined, null);
puzzle.getItemPuzzle(_Starrylightpainting_35, undefined, null);
puzzle.doorPuzzle(2, _Vent_42, undefined, null);
puzzle.doorPuzzle(0, _Portal_32, undefined, null);
myGame.start(0);