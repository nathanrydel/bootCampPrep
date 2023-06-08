/** Declare a function 'Directory', which takes in no arguments and returns an instance of a 'Directory' object when invoked with the 'new' keyword. Directory should function similarly to objects - i.e. they will store values at key-value pairs.
All Directory objects should contain their own 'contains' property. 'contains' is an object with 2 properties (called 'files' and 'folders') to keep track of the number of files and folders in the Directory. When a Directory is first created, it should initialize both the files and folders to 0.
- Task 1: Declare a function 'new', which is accessible to ALL instances of 'Directory'. 'new' should take in 2 arrays of strings (called 'path' and 'items'). 'path' is a link to the destination folder where all files in the 'items' should be stored. If any folder does not exist, create a new one with the same name. When the 'new' is invoked, should add all files to the destination as objects with the key is the file name in the 'items' array and the corresponding value is the length of the name.
If the 'items' is empty, add a new empty folder (represented as an empty object) to the destination under the default name 'New Folder (#)'. Update the number of files and folders properly and return the number of total items (both folders and files).
- Task 2: Declare a function 'remove', which is accessible to ALL instances of 'Directory'. 'remove' should take in 2 arrays of strings (called 'path' and 'items'). 'path' is a link to the destination folder where all files in the 'items' should be removed. When the 'remove' is invoked, should remove all files in the 'items' array from the 'path'. If at any point in the 'path', the folder does not exist, return the message "Wrong path. Please check again!". Otherwise, update the number of items properly and return the number of files has been removed.
- Task 3: Declare a function 'move', which is accessible to ALL instances of 'Directory'. 'move' should take in 3 arrays of strings (called 'items', 'from', and 'to'). When the 'move' is invoked, should move all files in the 'items' array from the 'from' path to the 'to' path. If at any point there's a folder that does not exist in the 'from' path, return "Wrong path. Please check again!". And if at any point there's a folder that does not exist in the 'to' path, create a new folder with the same name. Update the number of items properly and return the message "*file1*, *file2*, *ect* is/are now in a new place!".
- Task 4: Declare a function 'check', which is accessible to ALL instances of 'Directory'. 'check' should take in a string (called 'fileName') as a single argument, and when invoked on a Directory instance, should check if the 'fileName' exists somewhere in the Directory. If so, return any path leads to the 'fileName' in the format (folder 1 > folder 2 > folder 3 > . . . > fileName). Otherwise, return the message "*fileName* doesn't exist!".
- Task 5: Declare a function 'select', which is accessible to ALL instances of 'Directory'. 'select' should take in no arguments, and when invoked on a Directory instance, should return an array of empty folders.
- Task 6: Declare a function 'getLargestFolder', which is accessible to ALL instances of 'Directory'. 'getLargestFolder' should take in no arguments, and when invoked on a Directory instance, should return the folder with the most items inside. If there's more than one valid item, return any of them. */

// declare a class Directory
class Directory {
  // initialize the constructor
  constructor() {
    // declare a key, contains: obj
    this.contains = {
      // initialze keys files: number and folders: number to 0;
      files: 0,
      folders: 0,
    };
  }

  // declare a function new that takes path: array and items: array
  // path is a link to the destination folder where items is stored
  new(path, items) {
    // use recursion in a helper function to create folders
    // set it to take in a pathArr: array and the currentDir
    function createFolders(pathArr, currentDir) {
      // check if pathArr is 0
      if (pathArr.length === 0) {
        // if so, return currentDir
        return currentDir;
      }

      // declare a variable folderName and set equal to first item of pathArr
      const folderName = pathArr.shift();
      // check if NOT currentDir at folderName
      if (!currentDir[folderName]) {
        // if so, create a new Directory
        currentDir[folderName] = new Directory();
        // increment number of folders
        currentDir.contains.folders++;
      }
      // return recursive call of createFolders with pathArr and currentDir[foldername]
      return createFolders(pathArr, currentDir[folderName]);
    }
    // declare new constant destination and set equal evaluated result of createFolders passing in path and this
    const destination = createFolders(path, this);

    // for each item in items
    items.forEach((item) => {
      // update the item length at the item in destination
      destination[item] = item.length;
      // increment number of files
      destination.contains.files++;
    });
  }
}

const dir = new Directory();
dir.new(["hey", "follow", "me", "to", "find"], ["WannaCry.exe", "readme.txt"]);
dir.new(
  ["hey", "follow", "me", "to", "debug"],
  ["source.js", "index.js", "solution.js"]
);
dir.new(["hey", "follow"], ["Tarzan.rar"]);
dir.new(["this", "path", "leads", "to", "empty", "folders"], []);
dir.new(["this", "path", "leads", "to", "empty", "folders"], []);
dir.new(["this", "path", "leads", "to", "empty", "folders"], []);
dir.new(["this", "path", "leads", "to"], ["somewhere.png"]);
dir.new(["this", "path", "leads", "to"], ["NewYork.pdf"]);
dir.new(["all", "roads", "lead", "to"], ["Rome.jpg"]);

console.log(dir);
/*
Directory { hey: { follow: { me: { to: { find: { WannaCry.exe: 12, readme.txt: 10 }, debug: { source.js: 9, index.js: 8, solution.js: 11 } } }, Tarzan.rar: 10 } }, this: { path: { leads: { to: { empty: { folders: { New Folder (1): { }, New Folder (2): { }, New Folder (3): { } } }, somewhere.png: 13, NewYork.pdf: 11 } } } }, all: { roads: { lead: { to: { Rome.jpg: 8 } } } } }
*/

console.log(
  dir.move(
    ["source.js", "index.js"],
    ["hey", "follow", "me", "to", "debug"],
    ["this", "path", "leads", "to", "a", "new", "place"]
  )
); // -> 'source.js, index.js are now in a new place!'
/*
Directory { hey: { follow: { me: { to: { find: { WannaCry.exe: 12, readme.txt: 10 }, debug: { solution.js: 11 } } }, Tarzan.rar: 10 } }, this: { path: { leads: { to: { empty: { folders: { New Folder (1): { }, New Folder (2): { }, New Folder (3): { } } }, somewhere.png: 13, NewYork.pdf: 11, a: { new: { place: { source.js: 9, index.js: 8 } } } } } } }, all: { roads: { lead: { to: { Rome.jpg: 8 } } } } }
*/

console.log(dir.check("NewYork.pdf")); // -> 'this > path > leads > to > NewYork.pdf'
