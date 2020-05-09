
document.addEventListener('contextmenu', e => e.preventDefault());
//===============create Game==================
myGame.init(1024,576,5);

//===============add Sound==================
myGame.soundManager.load('correct_32', './Resources/Assets/correct.mp3');
myGame.soundManager.load('wrong_33', './Resources/Assets/wrong.wav');
myGame.soundManager.load('lock_34', './Resources/Assets/lock.wav');
myGame.soundManager.load('unlock_35', './Resources/Assets/unlock.wav');
myGame.soundManager.load('put_36', './Resources/Assets/put.wav');
myGame.soundManager.load('win_37', './Resources/Assets/win.wav');
myGame.soundManager.load('door_38', './Resources/Assets/door.wav');
myGame.soundManager.load('meow_1_39', './Resources/Assets/meow_happy.wav');
myGame.soundManager.load('meow_2_40', './Resources/Assets/meow_unhappy.wav');

//===============create Scene================
myGame.sceneManager.createScenes(3);
const reaction = myGame.reactionSystem;
const puzzle = myGame.puzzleSystem;

//===============create Objects==================

var _Backdrop_52= Alice.Object.fromImage('./Resources/Assets/classroom.png');
_Backdrop_52.name = 'Backdrop';
_Backdrop_52.anchor.set(0.5, 0.5);
_Backdrop_52.x = 512;
_Backdrop_52.y = 288;
_Backdrop_52.scale.set(0.8, 0.8);
reaction.makeUnClickable( _Backdrop_52 );
reaction.makeUnDraggable( _Backdrop_52 );
myGame.scene(0).addChild(_Backdrop_52);

var _Monster_53= Alice.Object.fromImage('./Resources/Assets/monster2.png');
_Monster_53.name = 'Monster';
_Monster_53.anchor.set(0.5, 0.5);
_Monster_53.x = 278;
_Monster_53.y = 368;
_Monster_53.scale.set(0.5, 0.5);
reaction.makeClickable( _Monster_53 );
reaction.makeUnDraggable( _Monster_53 );
myGame.scene(0).addChild(_Monster_53);

var _Monster_54= Alice.Object.fromImage('./Resources/Assets/Monster4.png');
_Monster_54.name = 'Monster';
_Monster_54.anchor.set(0.5, 0.5);
_Monster_54.x = 729;
_Monster_54.y = 380;
_Monster_54.scale.set(1.1, 0.83);
reaction.makeClickable( _Monster_54 );
reaction.makeUnDraggable( _Monster_54 );
myGame.scene(0).addChild(_Monster_54);

var _Wizardstudent_55= Alice.Object.fromImage('./Resources/Assets/wizard_student3.png');
_Wizardstudent_55.name = 'Wizard student';
_Wizardstudent_55.anchor.set(0.5, 0.5);
_Wizardstudent_55.x = 561;
_Wizardstudent_55.y = 425;
_Wizardstudent_55.scale.set(0.5, 0.5);
reaction.makeClickable( _Wizardstudent_55 );
reaction.makeUnDraggable( _Wizardstudent_55 );
myGame.scene(0).addChild(_Wizardstudent_55);

var _Hole_57= Alice.Object.fromImage('./Resources/Assets/Hole2.png');
_Hole_57.name = 'Hole';
_Hole_57.anchor.set(0.5, 0.5);
_Hole_57.x = 495;
_Hole_57.y = 157;
_Hole_57.scale.set(0.5, 0.5);
reaction.makeClickable( _Hole_57 );
reaction.makeUnDraggable( _Hole_57 );
myGame.scene(0).addChild(_Hole_57);

var _Backdrop_59= Alice.Object.fromImage('./Resources/Assets/wood_room.png');
_Backdrop_59.name = 'Backdrop';
_Backdrop_59.anchor.set(0.5, 0.5);
_Backdrop_59.x = 512;
_Backdrop_59.y = 288;
_Backdrop_59.scale.set(0.5333333333333333, 0.5333333333333333);
reaction.makeUnClickable( _Backdrop_59 );
reaction.makeUnDraggable( _Backdrop_59 );
myGame.scene(1).addChild(_Backdrop_59);

var _Wizardstudent_60= Alice.Object.fromImage('./Resources/Assets/wizard_student.png');
_Wizardstudent_60.name = 'Wizard student';
_Wizardstudent_60.anchor.set(0.5, 0.5);
_Wizardstudent_60.x = 407;
_Wizardstudent_60.y = 398;
_Wizardstudent_60.scale.set(0.5, 0.5);
reaction.makeClickable( _Wizardstudent_60 );
reaction.makeUnDraggable( _Wizardstudent_60 );
myGame.scene(1).addChild(_Wizardstudent_60);

var _Wizardstudent_61= Alice.Object.fromImage('./Resources/Assets/wizard_student2.png');
_Wizardstudent_61.name = 'Wizard student';
_Wizardstudent_61.anchor.set(0.5, 0.5);
_Wizardstudent_61.x = 153;
_Wizardstudent_61.y = 314;
_Wizardstudent_61.scale.set(0.5, 0.5);
reaction.makeClickable( _Wizardstudent_61 );
reaction.makeUnDraggable( _Wizardstudent_61 );
myGame.scene(1).addChild(_Wizardstudent_61);

var _Wizardstudent_62= Alice.Object.fromImage('./Resources/Assets/wizard_student3.png');
_Wizardstudent_62.name = 'Wizard student';
_Wizardstudent_62.anchor.set(0.5, 0.5);
_Wizardstudent_62.x = 666;
_Wizardstudent_62.y = 322;
_Wizardstudent_62.scale.set(0.5, 0.5);
reaction.makeClickable( _Wizardstudent_62 );
reaction.makeUnDraggable( _Wizardstudent_62 );
myGame.scene(1).addChild(_Wizardstudent_62);

var _Wizardstudent_63= Alice.Object.fromImage('./Resources/Assets/wizard_student.png');
_Wizardstudent_63.name = 'Wizard student';
_Wizardstudent_63.anchor.set(0.5, 0.5);
_Wizardstudent_63.x = 946;
_Wizardstudent_63.y = 394;
_Wizardstudent_63.scale.set(0.5, 0.5);
reaction.makeClickable( _Wizardstudent_63 );
reaction.makeUnDraggable( _Wizardstudent_63 );
myGame.scene(1).addChild(_Wizardstudent_63);

var _Key_64= Alice.Object.fromImage('./Resources/Assets/key.png');
_Key_64.name = 'Key';
_Key_64.anchor.set(0.5, 0.5);
_Key_64.x = 0;
_Key_64.y = 0;
_Key_64.scale.set(1, 1);
reaction.makeClickable( _Key_64 );
reaction.makeUnDraggable( _Key_64 );

var _Lockedbox2_65= Alice.Object.fromImage('./Resources/Assets/Locked Box2.png');
_Lockedbox2_65.name = 'Locked box2';
_Lockedbox2_65.anchor.set(0.5, 0.5);
_Lockedbox2_65.x = 215;
_Lockedbox2_65.y = 478;
_Lockedbox2_65.scale.set(1.37, 1.44);
reaction.makeClickable( _Lockedbox2_65 );
reaction.makeUnDraggable( _Lockedbox2_65 );
myGame.scene(1).addChild(_Lockedbox2_65);

var _Key_66= Alice.Object.fromImage('./Resources/Assets/Key2.png');
_Key_66.name = 'Key';
_Key_66.anchor.set(0.5, 0.5);
_Key_66.x = 0;
_Key_66.y = 0;
_Key_66.scale.set(1, 1);
reaction.makeClickable( _Key_66 );
reaction.makeUnDraggable( _Key_66 );

var _Portal_67= Alice.Object.fromImage('./Resources/Assets/Portal2.png');
_Portal_67.name = 'Portal';
_Portal_67.anchor.set(0.5, 0.5);
_Portal_67.x = 322;
_Portal_67.y = 202;
_Portal_67.scale.set(0.5, 0.5);
reaction.makeClickable( _Portal_67 );
reaction.makeUnDraggable( _Portal_67 );
myGame.scene(1).addChild(_Portal_67);

var _Backdrop_69= Alice.Object.fromImage('./Resources/Assets/river.png');
_Backdrop_69.name = 'Backdrop';
_Backdrop_69.anchor.set(0.5, 0.5);
_Backdrop_69.x = 512;
_Backdrop_69.y = 288;
_Backdrop_69.scale.set(0.5333333333333333, 0.5333333333333333);
reaction.makeUnClickable( _Backdrop_69 );
reaction.makeUnDraggable( _Backdrop_69 );
myGame.scene(2).addChild(_Backdrop_69);

var _Wallet_70= Alice.Object.fromImage('./Resources/Assets/wallet.png');
_Wallet_70.name = 'Wallet';
_Wallet_70.anchor.set(0.5, 0.5);
_Wallet_70.x = 0;
_Wallet_70.y = 0;
_Wallet_70.scale.set(1, 1);
reaction.makeClickable( _Wallet_70 );
reaction.makeUnDraggable( _Wallet_70 );

var _Box_71= Alice.Object.fromImage('./Resources/Assets/box2.png');
_Box_71.name = 'Box';
_Box_71.anchor.set(0.5, 0.5);
_Box_71.x = 512;
_Box_71.y = 288;
_Box_71.scale.set(3.13, 3.01);
reaction.makeClickable( _Box_71 );
reaction.makeUnDraggable( _Box_71 );
myGame.scene(2).addChild(_Box_71);

_Wizardstudent_62.content = [_Key_66]

_Lockedbox2_65.content = [_Key_64]

_Box_71.content = [_Wallet_70]


//================puzzle=====================
puzzle.doorPuzzle(1, _Hole_57, undefined, null);
puzzle.getItemFromContainerPuzzle(_Key_66, _Wizardstudent_62, undefined, null);
puzzle.keyLockDoorPuzzle(2, _Portal_67, _Key_66, undefined, null);
puzzle.getItemFromContainerPuzzle(_Wallet_70, _Box_71, true, null);
myGame.start(0);