
//var numberOfBottles = 99;

function bootleLyrics (numberOfBottles) {

  while (numberOfBottles >= 1) {
    var bottleWord = "bottles";
    if (numberOfBottles === 1) {
        bottleWord = "bottle";
    }

    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around.");
	numberOfBottles--;

	if (numberOfBottles === 0) {
    console.log("No more bottles of beer on the wall.");
	}

  }
  
}

bootleLyrics (99);

