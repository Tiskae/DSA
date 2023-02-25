def bubble_sort(arr):
    # loop through the arr
    arr_length = len(arr)

    def swap_arr_els(idx1, idx2, arr):
        if arr[idx1] > arr[idx2]:
            # print("Outer")
            temp = arr[idx1]
            arr[idx1] = arr[idx2]
            arr[idx2] = temp

            no_swaps = False

    for i in list(range(arr_length - 1)):
        # inner loop
        for j in list(range(i, arr_length - 1)):
            # print("inner")
            swap_arr_els(i, j + 1, arr)


    print(arr)

bubble_sort([9, 76, 3, 5, 7, 8, 9])
