def first_recurring_number(list):
    if not (list) or len(list) == 1:
        return None

    nums_dict = {}

    for num in list:
        if nums_dict.get(num):
            return num
        nums_dict[num] = 1

    return None


print(first_recurring_number([1, 2, 1, 3, 4, 5, 6]))
