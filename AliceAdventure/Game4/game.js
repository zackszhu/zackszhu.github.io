
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
myGame.sceneManager.createScenes(4);
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

var _Door_13= Alice.Object.fromImage('./Resources/Assets/door.png');
_Door_13.name = 'Door';
_Door_13.anchor.set(0.5, 0.5);
_Door_13.x = 654;
_Door_13.y = 352;
_Door_13.scale.set(0.5, 0.5);
reaction.makeClickable( _Door_13 );
reaction.makeUnDraggable( _Door_13 );
myGame.scene(0).addChild(_Door_13);

var _Table_15= Alice.Object.fromImage('./Resources/Assets/table.png');
_Table_15.name = 'Table';
_Table_15.anchor.set(0.5, 0.5);
_Table_15.x = 464;
_Table_15.y = 504;
_Table_15.scale.set(0.3127413127413127, 0.4228187919463087);
reaction.makeClickable( _Table_15 );
reaction.makeUnDraggable( _Table_15 );
myGame.scene(0).addChild(_Table_15);

var _Safe_16= Alice.Object.fromImage('./Resources/Assets/Safe.png');
_Safe_16.name = 'Safe';
_Safe_16.anchor.set(0.5, 0.5);
_Safe_16.x = 430;
_Safe_16.y = 413;
_Safe_16.scale.set(0.63, 0.63);
reaction.makeClickable( _Safe_16 );
reaction.makeUnDraggable( _Safe_16 );
myGame.scene(0).addChild(_Safe_16);

var _Coin2_17= Alice.Object.fromImage('./Resources/Assets/Coin2.png');
_Coin2_17.name = 'Coin2';
_Coin2_17.anchor.set(0.5, 0.5);
_Coin2_17.x = 0;
_Coin2_17.y = 0;
_Coin2_17.scale.set(1, 1);
reaction.makeClickable( _Coin2_17 );
reaction.makeUnDraggable( _Coin2_17 );

var _Bookshelf_18= Alice.Object.fromImage('./Resources/Assets/bookshelf.png');
_Bookshelf_18.name = 'Bookshelf';
_Bookshelf_18.anchor.set(0.5, 0.5);
_Bookshelf_18.x = 258;
_Bookshelf_18.y = 323;
_Bookshelf_18.scale.set(0.5, 0.5);
reaction.makeClickable( _Bookshelf_18 );
reaction.makeUnDraggable( _Bookshelf_18 );
myGame.scene(0).addChild(_Bookshelf_18);

var _Envelope_19= Alice.Object.fromImage('./Resources/Assets/envelope.png');
_Envelope_19.name = 'Envelope';
_Envelope_19.anchor.set(0.5, 0.5);
_Envelope_19.x = 0;
_Envelope_19.y = 0;
_Envelope_19.scale.set(1, 1);
reaction.makeClickable( _Envelope_19 );
reaction.makeUnDraggable( _Envelope_19 );

var _Key2_20= Alice.Object.fromImage('./Resources/Assets/Key2.png');
_Key2_20.name = 'Key2';
_Key2_20.anchor.set(0.5, 0.5);
_Key2_20.x = 817;
_Key2_20.y = 462;
_Key2_20.scale.set(0.15234375, 0.1015625);
reaction.makeClickable( _Key2_20 );
reaction.makeUnDraggable( _Key2_20 );
myGame.scene(0).addChild(_Key2_20);

var _Hero4_21= Alice.Object.fromImage('./Resources/Assets/hero4.png');
_Hero4_21.name = 'Hero4';
_Hero4_21.anchor.set(0.5, 0.5);
_Hero4_21.x = 665;
_Hero4_21.y = 400;
_Hero4_21.scale.set(0.5, 0.5);
reaction.makeClickable( _Hero4_21 );
reaction.makeUnDraggable( _Hero4_21 );
myGame.scene(0).addChild(_Hero4_21);

var _Backdrop_26= Alice.Object.fromImage('./Resources/Assets/room_blue.png');
_Backdrop_26.name = 'Backdrop';
_Backdrop_26.anchor.set(0.5, 0.5);
_Backdrop_26.x = 512;
_Backdrop_26.y = 288;
_Backdrop_26.scale.set(0.8, 0.8);
reaction.makeUnClickable( _Backdrop_26 );
reaction.makeUnDraggable( _Backdrop_26 );
myGame.scene(1).addChild(_Backdrop_26);

var _Blackboard_27= Alice.Object.fromImage('./Resources/Assets/blackboard.png');
_Blackboard_27.name = 'Blackboard';
_Blackboard_27.anchor.set(0.5, 0.5);
_Blackboard_27.x = 512;
_Blackboard_27.y = 288;
_Blackboard_27.scale.set(0.5, 0.5);
reaction.makeClickable( _Blackboard_27 );
reaction.makeUnDraggable( _Blackboard_27 );
myGame.scene(1).addChild(_Blackboard_27);

var _Postit_29= Alice.Object.fromImage('./Resources/Assets/post-it.png');
_Postit_29.name = 'Post-it';
_Postit_29.anchor.set(0.5, 0.5);
_Postit_29.x = 0;
_Postit_29.y = 0;
_Postit_29.scale.set(1, 1);
reaction.makeClickable( _Postit_29 );
reaction.makeUnDraggable( _Postit_29 );
_Postit_29.description = '1234';
reaction.showObjectDescription(_Postit_29);

var _Box3_30= Alice.Object.fromImage('./Resources/Assets/Box3.png');
_Box3_30.name = 'Box3';
_Box3_30.anchor.set(0.5, 0.5);
_Box3_30.x = 809;
_Box3_30.y = 421;
_Box3_30.scale.set(0.48, 0.48);
reaction.makeClickable( _Box3_30 );
reaction.makeUnDraggable( _Box3_30 );
myGame.scene(1).addChild(_Box3_30);

var _Key_31= Alice.Object.fromImage('./Resources/Assets/key.png');
_Key_31.name = 'Key';
_Key_31.anchor.set(0.5, 0.5);
_Key_31.x = 0;
_Key_31.y = 0;
_Key_31.scale.set(1, 1);
reaction.makeClickable( _Key_31 );
reaction.makeUnDraggable( _Key_31 );

var _Door_32= Alice.Object.fromImage('./Resources/Assets/door.png');
_Door_32.name = 'Door';
_Door_32.anchor.set(0.5, 0.5);
_Door_32.x = 241;
_Door_32.y = 351;
_Door_32.scale.set(0.5, 0.5);
reaction.makeClickable( _Door_32 );
reaction.makeUnDraggable( _Door_32 );
myGame.scene(1).addChild(_Door_32);

var _Backdrop_37= Alice.Object.fromImage('./Resources/Assets/kitchen.png');
_Backdrop_37.name = 'Backdrop';
_Backdrop_37.anchor.set(0.5, 0.5);
_Backdrop_37.x = 512;
_Backdrop_37.y = 288;
_Backdrop_37.scale.set(0.8, 0.8);
reaction.makeUnClickable( _Backdrop_37 );
reaction.makeUnDraggable( _Backdrop_37 );
myGame.scene(2).addChild(_Backdrop_37);

var _Door_41= Alice.Object.fromImage('./Resources/Assets/door.png');
_Door_41.name = 'Door';
_Door_41.anchor.set(0.5, 0.5);
_Door_41.x = 242;
_Door_41.y = 350;
_Door_41.scale.set(0.5, 0.5);
reaction.makeClickable( _Door_41 );
reaction.makeUnDraggable( _Door_41 );
myGame.scene(2).addChild(_Door_41);

var _milkbox_42= Alice.Object.fromImage('./Resources/Assets/refrigerator.png');
_milkbox_42.name = 'milk box';
_milkbox_42.anchor.set(0.5, 0.5);
_milkbox_42.x = 897;
_milkbox_42.y = 447;
_milkbox_42.scale.set(0.5, 0.5);
reaction.makeClickable( _milkbox_42 );
reaction.makeUnDraggable( _milkbox_42 );
myGame.scene(2).addChild(_milkbox_42);

var _Milk_43= Alice.Object.fromImage('./Resources/Assets/milk.png');
_Milk_43.name = 'Milk';
_Milk_43.anchor.set(0.5, 0.5);
_Milk_43.x = 0;
_Milk_43.y = 0;
_Milk_43.scale.set(1, 1);
reaction.makeClickable( _Milk_43 );
reaction.makeUnDraggable( _Milk_43 );

var _Pineapplebox_45= Alice.Object.fromImage('./Resources/Assets/box1.png');
_Pineapplebox_45.name = 'Pineapple box';
_Pineapplebox_45.anchor.set(0.5, 0.5);
_Pineapplebox_45.x = 675;
_Pineapplebox_45.y = 482;
_Pineapplebox_45.scale.set(0.5, 0.5);
reaction.makeClickable( _Pineapplebox_45 );
reaction.makeUnDraggable( _Pineapplebox_45 );
myGame.scene(2).addChild(_Pineapplebox_45);

var _Sodabox_46= Alice.Object.fromImage('./Resources/Assets/box1.png');
_Sodabox_46.name = 'Soda box';
_Sodabox_46.anchor.set(0.5, 0.5);
_Sodabox_46.x = 410;
_Sodabox_46.y = 487;
_Sodabox_46.scale.set(0.5, 0.5);
reaction.makeClickable( _Sodabox_46 );
reaction.makeUnDraggable( _Sodabox_46 );
myGame.scene(2).addChild(_Sodabox_46);

var _Soda_47= Alice.Object.fromImage('./Resources/Assets/soda.png');
_Soda_47.name = 'Soda';
_Soda_47.anchor.set(0.5, 0.5);
_Soda_47.x = 0;
_Soda_47.y = 0;
_Soda_47.scale.set(1, 1);
reaction.makeClickable( _Soda_47 );
reaction.makeUnDraggable( _Soda_47 );

var _Pineapple_48= Alice.Object.fromImage('./Resources/Assets/Pineapple.png');
_Pineapple_48.name = 'Pineapple';
_Pineapple_48.anchor.set(0.5, 0.5);
_Pineapple_48.x = 0;
_Pineapple_48.y = 0;
_Pineapple_48.scale.set(1, 1);
reaction.makeClickable( _Pineapple_48 );
reaction.makeUnDraggable( _Pineapple_48 );

var _Backdrop_54= Alice.Object.fromImage('./Resources/Assets/library.png');
_Backdrop_54.name = 'Backdrop';
_Backdrop_54.anchor.set(0.5, 0.5);
_Backdrop_54.x = 512;
_Backdrop_54.y = 288;
_Backdrop_54.scale.set(0.8, 0.8);
reaction.makeUnClickable( _Backdrop_54 );
reaction.makeUnDraggable( _Backdrop_54 );
myGame.scene(3).addChild(_Backdrop_54);

var _Cat_56= Alice.Object.fromImage('./Resources/Assets/cat.png');
_Cat_56.name = 'Cat';
_Cat_56.anchor.set(0.5, 0.5);
_Cat_56.x = 407;
_Cat_56.y = 277;
_Cat_56.scale.set(0.3183856502242152, 0.31496062992125984);
reaction.makeClickable( _Cat_56 );
reaction.makeUnDraggable( _Cat_56 );
myGame.scene(2).addChild(_Cat_56);
_Cat_56.conversation = 'I am hungry';
reaction.showObjectConversation(_Cat_56);

_Safe_16.content = [_Coin2_17]

_Bookshelf_18.content = [_Envelope_19]

_Blackboard_27.content = [_Postit_29]

_Box3_30.content = [_Key_31]

_milkbox_42.content = [_Milk_43]

_Pineapplebox_45.content = [_Pineapple_48]

_Sodabox_46.content = [_Soda_47]


//================puzzle=====================
puzzle.getItemFromKeyLockContainerPuzzle(_Coin2_17, _Safe_16, _Key2_20, undefined, null);
puzzle.getItemPuzzle(_Key2_20, undefined, null);
puzzle.getItemFromContainerPuzzle(_Envelope_19, _Bookshelf_18, undefined, null);
puzzle.bribeGuardDoorPuzzle(1, _Door_13, _Hero4_21, _Coin2_17, undefined, null);
puzzle.getItemFromPasswordLockContainerPuzzle(_Key_31, _Box3_30, '1234', undefined, null);
puzzle.getItemFromContainerPuzzle(_Postit_29, _Blackboard_27, undefined, null);
puzzle.keyLockDoorPuzzle(2, _Door_32, _Key_31, undefined, null);
puzzle.getItemFromContainerPuzzle(_Milk_43, _milkbox_42, undefined, null);
puzzle.getItemFromContainerPuzzle(_Pineapple_48, _Pineapplebox_45, undefined, null);
puzzle.getItemFromContainerPuzzle(_Soda_47, _Sodabox_46, undefined, null);
puzzle.bribeGuardDoorPuzzle(3, _Door_41, _Cat_56, _Milk_43, true, null);
myGame.start(0);