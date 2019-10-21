// export const mergeSort = array => {
//     // return the same array if it has 1 value or less
//     if(array.length <= 1) return array;
//     const middleIdx = Math.floor(array.length / 2);
//     const firstSide = mergeSort(array.slice(0, middleIdx));
//     const secondSide = mergeSort(array.slice(middleIdx));
//     let sortedArray = [];

//     let i =0; let j= 0;
//     while(i < firstSide.length && j < secondSide.length) {
//         if(firstSide[i] < secondSide[j]) {
//             sortedArray.push(firstSide[i++]);
//         } else {
//             sortedArray.push(secondSide[j++]);
//         }
//     }
//     while(i < firstSide.length) sortedArray.push(firstSide[i++]);
//     while(j < secondSide.length) sortedArray.push(secondSide[j++]);

//     return sortedArray;
// }



// export function mergeSort(array) {
//     const animations = [];
//     if (array.length <= 1) return array;
//     const auxiliaryArray = array.slice();
//     mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
//     return animations;
// }
// function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {

//     if (startIdx === endIdx) return;
//     const middleIdx = Math.floor((startIdx + endIdx) / 2);
//     mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
//     mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
//     doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);

// }
// function doMerge(mainArray, startIdx, middelIdx, endIdx, auxiliaryArray, animations) {

//     let i = startIdx;
//     let k = endIdx;
//     let j = middelIdx + 1;

//     while(i <= middelIdx && j <= middelIdx) {
//         const animation = [];
//         animation.comparison = [i, j];
//         if(auxiliaryArray[i] <= auxiliaryArray[j]) {
//             animation.swap = [k, i];
//             mainArray[k++] = auxiliaryArray[i++];
//         } else {
//             animation.swap = [k, j];
//             mainArray[k++] = auxiliaryArray[j++];
//         }
//         animations.push(animation);
//     }
//     while(i <= middelIdx) {
//         animations.push(comparison[i, i], swap[k, i]);
//         mainArray[k++] = auxiliaryArray[i++];
//     }
//     while(j <= endIdx) {
//         animations.push(comparison[j, j], swap[k, j]);
//         mainArray[k++] = auxiliaryArray[j++];
//     }

// }


export function SortMergeAlgo(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }