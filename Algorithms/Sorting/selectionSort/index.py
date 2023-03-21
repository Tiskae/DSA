def selection_sort(lst):
    for i in list(range(len(lst))):
        min_idx = i

        for j in list(range(i, len(lst))):
            if lst[j] < lst[min_idx]:
                min_idx = j

        if min_idx != i:
            temp = lst[i]
            lst[i] = lst[min_idx]
            lst[min_idx] = temp

    return lst


print(selection_sort([1, 4, 7, 2, 5, 10, 9, 8, 2005]))
print(selection_sort([1, 2, 4, 5, 7, 8, 9, 10, 2005]))
print(selection_sort([9, 8, 7, 6, 5, 4, 3, 2, 1]))
