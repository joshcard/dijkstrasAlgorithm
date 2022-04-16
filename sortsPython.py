#BubbleSort 

def bubble_sort(list):
    unsorted_until_index = len(list) - 1
    sorted = False

    while not sorted:
        sorted = True
        for i in range(unsorted_until_index):
            if list[i] > list[i+1]:
                list[i], list[i+1] = list[i+1], list[i]
                sorted = False
        unsorted_until_index -= 1

    return list

#selection sort
def selection_sort (array):
    for i in range(1, len(array)):
        lowest_index = i

        for j in range(j, len(array)):
            if array[j] < array[lowest_index]:
                lowest_index = j
            
    if (lowest_index != i):
        temp = array[i]
        array[i] = array[lowest_index]
        array[lowest_index] = temp 

    
    return print(array)



#InsertionSort

def insertion_sort(array):
  for index in range(1, len(array)):

    temp_value = array[index]
    position = index - 1

    while position >= 0:
      if array[position] > temp_value:
        array[position + 1] = array[position]
        position = position - 1
      else:
        break

    array[position + 1] = temp_value

  return array


#Quicksort 

def partition(arr, low, high):
	i = (low-1)		 # index of smaller element
	pivot = arr[high]	 # pivot

	for j in range(low, high):
		if arr[j] <= pivot:
			i = i+1
			arr[i], arr[j] = arr[j], arr[i]
	arr[i+1], arr[high] = arr[high], arr[i+1]
	return (i+1)

def quickSort(arr, low, high):
	if len(arr) == 1:
		return arr
	if low < high:
		pi = partition(arr, low, high)
		quickSort(arr, low, pi-1)
		quickSort(arr, pi+1, high)
