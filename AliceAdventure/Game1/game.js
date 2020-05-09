
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
const reaction = myGame.reactionSystem;
const puzzle = myGame.puzzleSystem;

//===============create Objects==================

var _Backdrop_12= Alice.Object.fromImage('./Resources/Assets/room_blue.png');
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
_Door_13.x = 665;
_Door_13.y = 357;
_Door_13.scale.set(0.5, 0.5);
reaction.makeClickable( _Door_13 );
reaction.makeUnDraggable( _Door_13 );
myGame.scene(0).addChild(_Door_13);
_Door_13.description = 'This is a Door';
reaction.showObjectDescription(_Door_13);

var _Key_14= Alice.Object.fromImage('./Resources/Assets/key.png');
_Key_14.name = 'Key';
_Key_14.anchor.set(0.5, 0.5);
_Key_14.x = 345;
_Key_14.y = 483;
_Key_14.scale.set(0.2, 0.16);
reaction.makeClickable( _Key_14 );
reaction.makeUnDraggable( _Key_14 );
myGame.scene(0).addChild(_Key_14);
_Key_14.description = 'This is a key that goes into a door';
reaction.showObjectDescription(_Key_14);

var _Backdrop_16= Alice.Object.fromImage('./Resources/Assets/pixel_indoor_env.png');
_Backdrop_16.name = 'Backdrop';
_Backdrop_16.anchor.set(0.5, 0.5);
_Backdrop_16.x = 512;
_Backdrop_16.y = 288;
_Backdrop_16.scale.set(0.9990243902439024, 1);
reaction.makeUnClickable( _Backdrop_16 );
reaction.makeUnDraggable( _Backdrop_16 );
myGame.scene(1).addChild(_Backdrop_16);

var _Vent_18= Alice.Object.fromImage('./Resources/Assets/Vent2.png');
_Vent_18.name = 'Vent';
_Vent_18.anchor.set(0.5, 0.5);
_Vent_18.x = 834;
_Vent_18.y = 155;
_Vent_18.scale.set(0.5, 0.5);
reaction.makeClickable( _Vent_18 );
reaction.makeUnDraggable( _Vent_18 );
myGame.scene(1).addChild(_Vent_18);

var _Box_19= Alice.Object.fromImage('./Resources/Assets/box1.png');
_Box_19.name = 'Box';
_Box_19.anchor.set(0.5, 0.5);
_Box_19.x = 168;
_Box_19.y = 463;
_Box_19.scale.set(1.03, 0.8);
reaction.makeClickable( _Box_19 );
reaction.makeUnDraggable( _Box_19 );
myGame.scene(1).addChild(_Box_19);
_Box_19.description = 'This is a Box. there is a note that says "Password:Locked Box';
reaction.showObjectDescription(_Box_19);

var _Button_20= Alice.Object.fromImage('./Resources/Assets/Button3.png');
_Button_20.name = 'Button';
_Button_20.anchor.set(0.5, 0.5);
_Button_20.x = 174;
_Button_20.y = 371;
_Button_20.scale.set(0.5, 0.5);
reaction.makeClickable( _Button_20 );
reaction.makeUnDraggable( _Button_20 );
myGame.scene(1).addChild(_Button_20);
_Button_20.description = 'This button might activate something';
reaction.showObjectDescription(_Button_20);

var _Backdrop_22= Alice.Object.fromImage('./Resources/Assets/library.png');
_Backdrop_22.name = 'Backdrop';
_Backdrop_22.anchor.set(0.5, 0.5);
_Backdrop_22.x = 512;
_Backdrop_22.y = 288;
_Backdrop_22.scale.set(0.8, 0.8);
reaction.makeUnClickable( _Backdrop_22 );
reaction.makeUnDraggable( _Backdrop_22 );
myGame.scene(2).addChild(_Backdrop_22);

var _Lockedbox2_31= Alice.Object.fromImage('./Resources/Assets/Locked Box2.png');
_Lockedbox2_31.name = 'Locked box2';
_Lockedbox2_31.anchor.set(0.5, 0.5);
_Lockedbox2_31.x = 392;
_Lockedbox2_31.y = 322;
_Lockedbox2_31.scale.set(0.66, 0.5);
reaction.makeClickable( _Lockedbox2_31 );
reaction.makeUnDraggable( _Lockedbox2_31 );
myGame.scene(2).addChild(_Lockedbox2_31);
_Lockedbox2_31.description = 'There is a locked box on the shelf. It looks like it needs a passwordmaybe in one of the other rooms.';
reaction.showObjectDescription(_Lockedbox2_31);

var _Wallet_32= Alice.Object.fromImage('./Resources/Assets/wallet.png');
_Wallet_32.name = 'Wallet';
_Wallet_32.anchor.set(0.5, 0.5);
_Wallet_32.x = 0;
_Wallet_32.y = 0;
_Wallet_32.scale.set(1, 1);
reaction.makeClickable( _Wallet_32 );
reaction.makeUnDraggable( _Wallet_32 );

var _Vent_35= Alice.Object.fromImage('./Resources/Assets/Vent2.png');
_Vent_35.name = 'Vent';
_Vent_35.anchor.set(0.5, 0.5);
_Vent_35.x = 762;
_Vent_35.y = 50;
_Vent_35.scale.set(0.5, 0.5);
reaction.makeClickable( _Vent_35 );
reaction.makeUnDraggable( _Vent_35 );
myGame.scene(2).addChild(_Vent_35);

_Lockedbox2_31.content = [_Wallet_32]


//================puzzle=====================
puzzle.keyLockDoorPuzzle(1, _Door_13, _Key_14, undefined, null);
puzzle.switchDoorPuzzle(2, _Vent_18, _Button_20, undefined, null);
puzzle.getItemPuzzle(_Key_14, undefined, null);
puzzle.getItemFromPasswordLockContainerPuzzle(_Wallet_32, _Lockedbox2_31, 'Locked Box', true, null);
puzzle.doorPuzzle(1, _Vent_35, undefined, null);
myGame.start(0);