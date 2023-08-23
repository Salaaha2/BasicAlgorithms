//Falsy Bouncer
function bouncer(arr){
    function truthy(value) {
      return value;
    }
    var filtered = arr.filter(truthy);
    return filtered;
  }
  
  bouncer([7, "ate", "", false, 9]);

  // Chunky Monkey
  function chunkArrayInGroups(arr, size) {
    let newArray = [];
    for(let i = 0; i < arr.length; i += size) {
      newArray.push(arr.slice(i, i + size))
    }
  
    return newArray;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);