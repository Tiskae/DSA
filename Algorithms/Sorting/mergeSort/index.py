def merge_sort(arr):
    if len(arr) == 1:
        return arr

    middle = len(arr) // 2
    left = arr[:middle:]
    right = arr[middle::]

    return merge(merge_sort(left), merge_sort(right))


def merge(left, right):
    result = []
    leftIdx = 0
    rightIdx = 0

    while leftIdx < len(left) and rightIdx < len(right):
        if left[leftIdx] < right[rightIdx]:
            result.append(left[leftIdx])
            leftIdx += 1
        else:
            result.append(right[rightIdx])
            rightIdx += 1

    result.extend(left[leftIdx::])
    result.extend(right[rightIdx::])
    return result


print(merge_sort([1, 4, 7, 2, 5, 10, 9, 8, 2005, 1, 17]))
