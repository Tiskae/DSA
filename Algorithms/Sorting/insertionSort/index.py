def insertion_sort(arr):
    if len(arr) < 2:
        return arr

    for i in list(range(1, len(arr))):
        curr_el = arr[i]

        if curr_el < arr[0]:
            arr.insert(0, arr.pop(i))
        else:
            for j in list(range(0, i)):
                if curr_el < arr[j] and curr_el > arr[j - 1]:
                    arr.insert(j, arr.pop(i))

    return arr


print(insertion_sort([1, 4, 7, 2, 5, 10, 9, 8, 2005]))
print(insertion_sort([1, 2, 4, 5, 7, 8, 9, 10, 2005]))
print(insertion_sort([9, 8, 7, 6, 5, 4, 3, 2, 1]))
