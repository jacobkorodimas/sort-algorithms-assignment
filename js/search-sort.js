// Library of Search & Sort Functions

// Use Bubble Sort algorithm to sort array argument
function bubbleSort(anArray) {
    //loop array length - 1 times.
    for (let i = 0; i < anArray.length - 1; i++) {
        // Compare loop (unsorted array length - 1).
        for (let n = 0; n < anArray.length - i - 1; n++) {
            // Check if val 1 is bigger than val 2.
            if (anArray[n] > anArray[n + 1]) {
                // swap
                let temp = anArray[n];
                anArray[n] = anArray[n + 1];
                anArray[n + 1] = temp;
            }
        }
    }
}

// Use Selection Sort algorithm to sort array argument
function selectionSort(anArray) {
    for (let i = 0; i < anArray.length - 1; i++) {
        // Set minimum index to minimum position
        let mindex = i;
        // loop through every element after mindex.
        for (let n = i + 1; n < anArray.length; n++) {
            // Check if any value is smaller than value at mindex
            if (anArray[n] < anArray[mindex]) {
                // replace mindez with new minimum index
                mindex = n;
            }
        }
        // if mindex changed, swap values at index i and mindex
        if (anArray[mindex] !== anArray[i]) {
            let temp = anArray[i];
            anArray[i] = anArray[mindex];
            anArray[mindex] = temp;
        }
    }
}

// Use Insertion Sort algorithm to sort array argument
function insertionSort(anArray) {
    // loop entire array
    for (let i = 1; i < anArray.length; i++) {
        // set value and insert position
        let value = anArray[i];
        let insertposition = i - 1;
        // while there is an element on the left and the element is larger than current value
        while (insertposition >= 0 && anArray[insertposition] > value) {
            anArray[insertposition + 1] = anArray[insertposition];
            insertposition--;
        }
        anArray[insertposition + 1] = value;
    }
}