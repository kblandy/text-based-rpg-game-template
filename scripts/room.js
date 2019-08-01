//Room class
//Rooms can be places or literal rooms within another structures

class Room {
    constructor(name, description, linkedRooms, character, item, flags) {
        this.name = name;
        this.description = description;
        this.linkedRooms = linkedRooms;
        this.character = character;
        this.item = item;
        this.flags = flags; 
    }
    
    //searches for "locked" in room.flags, returns true if so, false if not
    get is_locked() {
        if (this.flags.includes("locked")) {
            return true;
        } else {
            return false;
        }
    }

    //removes "locked" flag
    // get unlock() {
    //     var flag_index = this.flags.indexOf("locked");
    //     this.flags.splice(flag_index, 1);
    // }
    
}
//removes any specified flag from any specified room
function removeFlag(targetedRoom, flagToBeRemoved) {
    var flag_index = targetedRoom.flags.indexOf(flagToBeRemoved);
    targetedRoom.flags.splice(flag_index, 1);
}

//adds any specified flag to any specified room
function addFlag(targetedRoom2, flagToBeAdded) {
    targetedRoom2.flags.push(flagToBeAdded);
}

//example of how to form room with lists/objects compared to Python version
const doomRoom = new Room('Doom Room', 'The room of doom.', {}, [], [], ["dark", "another flag"]);
console.log(doomRoom.flags);
console.log(doomRoom.is_locked);  //value should be false

addFlag(doomRoom, "locked");  //adds "locked" flag to flag list
console.log(doomRoom.flags); //shows flags
console.log(doomRoom.is_locked); //value should be true

// doomRoom.unlock; //should remove "locked" flag
// console.log(doomRoom.flags); 
// console.log(doomRoom.is_locked); //should be false

removeFlag(doomRoom, "locked");
console.log(doomRoom.flags);
console.log(doomRoom.is_locked);







