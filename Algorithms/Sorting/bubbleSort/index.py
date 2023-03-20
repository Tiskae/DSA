def bubble_sort(arr):
    for i in list(range(len(arr) - 1)):
        for j in list(range(len(arr) - 1 - i)):
            if arr[j] > arr[j+1]:
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp

    return arr


print(bubble_sort([1, 4, 7, 2, 5, 10, 9, 8, 2005]))
print(bubble_sort([1, 2, 4, 5, 7, 8, 9, 10, 2005]))
print(bubble_sort([9, 8, 7, 6, 5, 4, 3, 2, 1]))
