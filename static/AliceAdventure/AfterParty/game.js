
document.addEventListener('contextmenu', e => e.preventDefault());
//===============create Game==================
myGame.init(1024,576,5);

//===============add Sound==================
myGame.soundManager.load('correct_3', './Resources/Assets/correct.mp3');
myGame.soundManager.load('wrong_4', './Resources/Assets/wrong.wav');
myGame.soundManager.load('lock_5', './Resources/Assets/lock.wav');
myGame.soundManager.load('unlock_6', './Resources/Assets/unlock.wav');
myGame.soundManager.load('put_7', './Resources/Assets/put.wav');
myGame.soundManager.load('win_8', './Resources/Assets/win.wav');
myGame.soundManager.load('door_9', './Resources/Assets/door.wav');
myGame.soundManager.load('meow_1_10', './Resources/Assets/meow_happy.wav');
myGame.soundManager.load('meow_2_11', './Resources/Assets/meow_unhappy.wav');

//===============create Scene================
myGame.sceneManager.createScenes(5);

narrative0showed = false;
myGame.eventSystem.addSceneTransitEvent(0, function(){
  if (!narrative0showed) {
    myGame.messageBox.startConversation(['...Where am I? I just remembered I was drunk during the party... Anyway, I must leave here.'], null);
    narrative0showed = true;
  }
});
narrative1showed = false;
myGame.eventSystem.addSceneTransitEvent(1, function(){
  if (!narrative1showed) {
    myGame.messageBox.startConversation(['Oh, another room.'], null);
    narrative1showed = true;
  }
});
narrative2showed = false;
myGame.eventSystem.addSceneTransitEvent(2, function(){
  if (!narrative2showed) {
    myGame.messageBox.startConversation(['I heard someone"s talking...'], null);
    narrative2showed = true;
  }
});
narrative3showed = false;
myGame.eventSystem.addSceneTransitEvent(3, function(){
  if (!narrative3showed) {
    myGame.messageBox.startConversation(['A monster!!! I need to hide.'], null);
    narrative3showed = true;
  }
});
narrative4showed = false;
myGame.eventSystem.addSceneTransitEvent(4, function(){
  if (!narrative4showed) {
    myGame.messageBox.startConversation(['I am outside now!'], null);
    narrative4showed = true;
  }
});const reaction = myGame.reactionSystem;
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

var _Table_44= Alice.Object.fromImage('./Resources/Assets/table.png');
_Table_44.name = 'Table';
_Table_44.anchor.set(0.5, 0.5);
_Table_44.x = 345;
_Table_44.y = 429;
_Table_44.scale.set(0.5, 0.5);
reaction.makeClickable( _Table_44 );
reaction.makeUnDraggable( _Table_44 );
myGame.scene(0).addChild(_Table_44);

var _Calendar_45= Alice.Object.fromImage('./Resources/Assets/calendar.png');
_Calendar_45.name = 'Calendar';
_Calendar_45.anchor.set(0.5, 0.5);
_Calendar_45.x = 294;
_Calendar_45.y = 320;
_Calendar_45.scale.set(0.3, 0.3);
reaction.makeClickable( _Calendar_45 );
reaction.makeUnDraggable( _Calendar_45 );
myGame.scene(0).addChild(_Calendar_45);
_Calendar_45.description = 'A calendar. The date "April 22" is circled.';
reaction.showObjectDescription(_Calendar_45);

var _Note_46= Alice.Object.fromImage('./Resources/Assets/post-it.png');
_Note_46.name = 'Note';
_Note_46.anchor.set(0.5, 0.5);
_Note_46.x = 449;
_Note_46.y = 173;
_Note_46.scale.set(0.35, 0.35);
reaction.makeClickable( _Note_46 );
reaction.makeUnDraggable( _Note_46 );
myGame.scene(0).addChild(_Note_46);
_Note_46.description = 'It says "The password for the door is an important date".';
reaction.showObjectDescription(_Note_46);

var _Door_47= Alice.Object.fromImage('./Resources/Assets/door.png');
_Door_47.name = 'Door';
_Door_47.anchor.set(0.5, 0.5);
_Door_47.x = 713;
_Door_47.y = 353;
_Door_47.scale.set(0.5, 0.5);
reaction.makeClickable( _Door_47 );
reaction.makeUnDraggable( _Door_47 );
myGame.scene(0).addChild(_Door_47);
_Door_47.description = 'The door is locked by a 4-digit combination lock. On the lock it says "MM/DD".';
reaction.showObjectDescription(_Door_47);

var _Backdrop_50= Alice.Object.fromImage('./Resources/Assets/room_blue.png');
_Backdrop_50.name = 'Backdrop';
_Backdrop_50.anchor.set(0.5, 0.5);
_Backdrop_50.x = 512;
_Backdrop_50.y = 288;
_Backdrop_50.scale.set(0.8, 0.8);
reaction.makeUnClickable( _Backdrop_50 );
reaction.makeUnDraggable( _Backdrop_50 );
myGame.scene(1).addChild(_Backdrop_50);

var _Door_51= Alice.Object.fromImage('./Resources/Assets/door.png');
_Door_51.name = 'Door';
_Door_51.anchor.set(0.5, 0.5);
_Door_51.x = 297;
_Door_51.y = 353;
_Door_51.scale.set(0.5, 0.5);
reaction.makeClickable( _Door_51 );
reaction.makeUnDraggable( _Door_51 );
myGame.scene(1).addChild(_Door_51);
_Door_51.description = 'This door can take me back to the brown room.';
reaction.showObjectDescription(_Door_51);

var _Vent3_53= Alice.Object.fromImage('./Resources/Assets/Vent3.png');
_Vent3_53.name = 'Vent3';
_Vent3_53.anchor.set(0.5, 0.5);
_Vent3_53.x = 712;
_Vent3_53.y = 168;
_Vent3_53.scale.set(0.2, 0.2);
reaction.makeClickable( _Vent3_53 );
reaction.makeUnDraggable( _Vent3_53 );
myGame.scene(1).addChild(_Vent3_53);

var _Ladder2_54= Alice.Object.fromImage('./Resources/Assets/Ladder2.png');
_Ladder2_54.name = 'Ladder2';
_Ladder2_54.anchor.set(0.5, 0.5);
_Ladder2_54.x = 452;
_Ladder2_54.y = 369;
_Ladder2_54.scale.set(0.45, 0.45);
reaction.makeClickable( _Ladder2_54 );
reaction.makeUnDraggable( _Ladder2_54 );
myGame.scene(1).addChild(_Ladder2_54);
_Ladder2_54.description = 'A ladder.';
reaction.showObjectDescription(_Ladder2_54);

var _Backdrop_58= Alice.Object.fromImage('./Resources/Assets/room_basic.png');
_Backdrop_58.name = 'Backdrop';
_Backdrop_58.anchor.set(0.5, 0.5);
_Backdrop_58.x = 512;
_Backdrop_58.y = 288;
_Backdrop_58.scale.set(0.8, 0.8);
reaction.makeUnClickable( _Backdrop_58 );
reaction.makeUnDraggable( _Backdrop_58 );
myGame.scene(2).addChild(_Backdrop_58);

var _Vent3_60= Alice.Object.fromImage('./Resources/Assets/Vent3.png');
_Vent3_60.name = 'Vent3';
_Vent3_60.anchor.set(0.5, 0.5);
_Vent3_60.x = 740;
_Vent3_60.y = 368;
_Vent3_60.scale.set(0.23, 0.23);
reaction.makeClickable( _Vent3_60 );
reaction.makeUnDraggable( _Vent3_60 );
myGame.scene(2).addChild(_Vent3_60);
_Vent3_60.description = 'I can go back to the blue room through this vent.';
reaction.showObjectDescription(_Vent3_60);

var _Bookshelf_61= Alice.Object.fromImage('./Resources/Assets/bookshelf.png');
_Bookshelf_61.name = 'Bookshelf';
_Bookshelf_61.anchor.set(0.5, 0.5);
_Bookshelf_61.x = 347;
_Bookshelf_61.y = 326;
_Bookshelf_61.scale.set(0.5, 0.5);
reaction.makeClickable( _Bookshelf_61 );
reaction.makeUnDraggable( _Bookshelf_61 );
myGame.scene(2).addChild(_Bookshelf_61);
_Bookshelf_61.description = 'A bookshelf!';
reaction.showObjectDescription(_Bookshelf_61);

var _Wizardstudent_62= Alice.Object.fromImage('./Resources/Assets/wizard_student.png');
_Wizardstudent_62.name = 'Wizard student';
_Wizardstudent_62.anchor.set(0.5, 0.5);
_Wizardstudent_62.x = 227;
_Wizardstudent_62.y = 396;
_Wizardstudent_62.scale.set(0.5, 0.5);
reaction.makeClickable( _Wizardstudent_62 );
reaction.makeUnDraggable( _Wizardstudent_62 );
myGame.scene(2).addChild(_Wizardstudent_62);
_Wizardstudent_62.description = 'An...apprentice magician? (Oh it\'s so crazy.)';
reaction.showObjectDescription(_Wizardstudent_62);
_Wizardstudent_62.conversation = 'Can you help me to recharge my robot? He use coin as energy. I can give you a magic wand that can make someone sleepy!';
reaction.showObjectConversation(_Wizardstudent_62);

var _Robot_63= Alice.Object.fromImage('./Resources/Assets/robot.png');
_Robot_63.name = 'Robot';
_Robot_63.anchor.set(0.5, 0.5);
_Robot_63.x = 438;
_Robot_63.y = 406;
_Robot_63.scale.set(1.13, 1.13);
reaction.makeClickable( _Robot_63 );
reaction.makeUnDraggable( _Robot_63 );
myGame.scene(2).addChild(_Robot_63);
_Robot_63.description = 'A...robot! (Oh it\'s so crazy.)';
reaction.showObjectDescription(_Robot_63);

var _Door3_65= Alice.Object.fromImage('./Resources/Assets/Door3.png');
_Door3_65.name = 'Door3';
_Door3_65.anchor.set(0.5, 0.5);
_Door3_65.x = 580;
_Door3_65.y = 343;
_Door3_65.scale.set(0.43, 0.43);
reaction.makeClickable( _Door3_65 );
reaction.makeUnDraggable( _Door3_65 );
myGame.scene(2).addChild(_Door3_65);

var _Backdrop_67= Alice.Object.fromImage('./Resources/Assets/room_basic.png');
_Backdrop_67.name = 'Backdrop';
_Backdrop_67.anchor.set(0.5, 0.5);
_Backdrop_67.x = 512;
_Backdrop_67.y = 288;
_Backdrop_67.scale.set(0.8, 0.8);
reaction.makeUnClickable( _Backdrop_67 );
reaction.makeUnDraggable( _Backdrop_67 );
myGame.scene(3).addChild(_Backdrop_67);

var _Dooropen_69= Alice.Object.fromImage('./Resources/Assets/door_open.png');
_Dooropen_69.name = 'Door open';
_Dooropen_69.anchor.set(0.5, 0.5);
_Dooropen_69.x = 317;
_Dooropen_69.y = 299;
_Dooropen_69.scale.set(0.79, 0.79);
reaction.makeClickable( _Dooropen_69 );
reaction.makeUnDraggable( _Dooropen_69 );
myGame.scene(3).addChild(_Dooropen_69);
_Dooropen_69.description = 'Looks like it\'s the way out.';
reaction.showObjectDescription(_Dooropen_69);

var _Monster1_68= Alice.Object.fromImage('./Resources/Assets/monster1.png');
_Monster1_68.name = 'Monster1';
_Monster1_68.anchor.set(0.5, 0.5);
_Monster1_68.x = 325;
_Monster1_68.y = 406;
_Monster1_68.scale.set(0.5, 0.5);
reaction.makeClickable( _Monster1_68 );
reaction.makeUnDraggable( _Monster1_68 );
myGame.scene(3).addChild(_Monster1_68);
_Monster1_68.description = 'A monster. How can I deal with it?';
reaction.showObjectDescription(_Monster1_68);
_Monster1_68.conversation = 'Going back, or Getting eatten.';
reaction.showObjectConversation(_Monster1_68);

var _Lockedbox2_70= Alice.Object.fromImage('./Resources/Assets/Locked Box2.png');
_Lockedbox2_70.name = 'Locked box2';
_Lockedbox2_70.anchor.set(0.5, 0.5);
_Lockedbox2_70.x = 715;
_Lockedbox2_70.y = 449;
_Lockedbox2_70.scale.set(0.5, 0.5);
reaction.makeClickable( _Lockedbox2_70 );
reaction.makeUnDraggable( _Lockedbox2_70 );
myGame.scene(1).addChild(_Lockedbox2_70);
_Lockedbox2_70.description = 'A beautiful matal case. Looks like it\'s locked.';
reaction.showObjectDescription(_Lockedbox2_70);

var _Coin_71= Alice.Object.fromImage('./Resources/Assets/Coin.png');
_Coin_71.name = 'Coin';
_Coin_71.anchor.set(0.5, 0.5);
_Coin_71.x = 0;
_Coin_71.y = 0;
_Coin_71.scale.set(1, 1);
reaction.makeClickable( _Coin_71 );
reaction.makeUnDraggable( _Coin_71 );
_Coin_71.description = 'A coin.';
reaction.showObjectDescription(_Coin_71);

var _Button3_72= Alice.Object.fromImage('./Resources/Assets/Button3.png');
_Button3_72.name = 'Button3';
_Button3_72.anchor.set(0.5, 0.5);
_Button3_72.x = 771;
_Button3_72.y = 211;
_Button3_72.scale.set(0.29, 0.29);
reaction.makeClickable( _Button3_72 );
reaction.makeUnDraggable( _Button3_72 );
myGame.scene(2).addChild(_Button3_72);
_Button3_72.description = 'A button connect to somewhere...';
reaction.showObjectDescription(_Button3_72);

var _Key2_73= Alice.Object.fromImage('./Resources/Assets/Key2.png');
_Key2_73.name = 'Key2';
_Key2_73.anchor.set(0.5, 0.5);
_Key2_73.x = 316;
_Key2_73.y = 307;
_Key2_73.scale.set(0.09, 0.09);
reaction.makeClickable( _Key2_73 );
reaction.makeUnDraggable( _Key2_73 );
myGame.scene(2).addChild(_Key2_73);

var _Backdrop_75= Alice.Object.fromImage('./Resources/Assets/night.png');
_Backdrop_75.name = 'Backdrop';
_Backdrop_75.anchor.set(0.5, 0.5);
_Backdrop_75.x = 512;
_Backdrop_75.y = 288;
_Backdrop_75.scale.set(0.8, 0.8);
reaction.makeUnClickable( _Backdrop_75 );
reaction.makeUnDraggable( _Backdrop_75 );
myGame.scene(4).addChild(_Backdrop_75);

var _Door3_78= Alice.Object.fromImage('./Resources/Assets/Door3.png');
_Door3_78.name = 'Door3';
_Door3_78.anchor.set(0.5, 0.5);
_Door3_78.x = 718;
_Door3_78.y = 328;
_Door3_78.scale.set(0.5, 0.5);
reaction.makeClickable( _Door3_78 );
reaction.makeUnDraggable( _Door3_78 );
myGame.scene(3).addChild(_Door3_78);

var _Magicwand_81= Alice.Object.fromImage('./Resources/Assets/magicwand.png');
_Magicwand_81.name = 'Magicwand';
_Magicwand_81.anchor.set(0.5, 0.5);
_Magicwand_81.x = 0;
_Magicwand_81.y = 0;
_Magicwand_81.scale.set(1, 1);
reaction.makeClickable( _Magicwand_81 );
reaction.makeUnDraggable( _Magicwand_81 );

var _Coin2_92= Alice.Object.fromImage('./Resources/Assets/Coin2.png');
_Coin2_92.name = 'Coin2';
_Coin2_92.anchor.set(0.5, 0.5);
_Coin2_92.x = 0;
_Coin2_92.y = 0;
_Coin2_92.scale.set(1, 1);
reaction.makeClickable( _Coin2_92 );
reaction.makeUnDraggable( _Coin2_92 );

_Robot_63.content = [_Magicwand_81]

_Lockedbox2_70.content = [_Coin_71, _Coin2_92]


//================puzzle=====================
puzzle.passwordLockDoorPuzzle(1, _Door_47, '0422', undefined, 'meow_1_10');
puzzle.doorPuzzle(0, _Door_51, undefined, 'door_9');
puzzle.keyLockDoorPuzzle(2, _Vent3_53, _Ladder2_54, undefined, null);
puzzle.getItemPuzzle(_Ladder2_54, undefined, null);
puzzle.getItemFromKeyLockContainerPuzzle(_Coin_71, _Lockedbox2_70, _Key2_73, undefined, null);
puzzle.doorPuzzle(1, _Vent3_60, undefined, null);
puzzle.switchDoorPuzzle(3, _Door3_65, _Button3_72, undefined, null);
puzzle.doorPuzzle(2, _Door3_78, undefined, null);
puzzle.getItemFromTradeCharacterPuzzle(_Magicwand_81, _Robot_63, _Coin_71, undefined, undefined);
puzzle.bribeGuardDoorPuzzle(4, _Dooropen_69, _Monster1_68, _Magicwand_81, true, null);
puzzle.getItemPuzzle(_Key2_73, undefined, null);
myGame.start(0);