//Bubble Sort
function bubbleSort(array){
    for(var i = 0; i < array.length; i++){ 
      for(var j = 0; j < ( array.length - i -1 ); j++){

        if(array[j] > array[j+1]){
          var temp = array[j]
          array[j] = array[j + 1]
          array[j+1] = temp
        }
      }
    }

    console.log(array);
   }
     
     

   var array = [8,4,0,15,1,16,5,26,2,84,12,48,99,33];
     
     

bubbleSort(array);



//Selection Sort
function selectionSort(array) {
  for(let i = 0; i < array.length - 1; i++) {
    let lowestNumberIndex = i;
    for(let j = i + 1; j < array.length; j++) {
      if(array[j] < array[lowestNumberIndex]) {
        lowestNumberIndex = j;
      }
    }
 
    if(lowestNumberIndex != i) {
      let temp = array[i];
      array[i] = array[lowestNumberIndex];
      array[lowestNumberIndex] = temp;
    }
  }
  return array;

}

//Insertion Sort
function insertion_sort(array)
    {
        for (let i=1;i < array.length; i++)
        {
            temp_value = array[i]
            position = i - 1

            while (position >= 0)
            {
                if (array[position] > temp_value)
                {
                    array[position + 1] = array[position]
                    position = position - 1
                }
                else
                {
                    break 
                }
                    
            }
            
            array[position + 1] = temp_value

        }
        return console.log(array)
    }


array = [ 7, 6, 5, 4, 3, 2, 1]

insertion_sort(array)

//QuickSort
function quicksort(array_values) {
    
    
	if (array_values.length <= 1) { 
		return array_values;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = array_values.pop();
		var length = array_values.length;

		for (var i = 0; i < length; i++) {
			if (array_values[i] >= pivot) {
				left.push(array_values[i]);
			} else {
				right.push(array_values[i]);
			}
		}

		return newArray.concat(quicksort(left), pivot, quicksort(right));
	}
}
quicksort(array)