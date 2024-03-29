from math import sin


def fibonacci_iterative(index):
    if index < 0:
        return None

    if index < 2:
        return index

    fib_nums = [0, 1]

    for i in list(range(2, index+1)):
        next_num = fib_nums[i - 1] + fib_nums[i - 2]
        fib_nums.append(next_num)

    return fib_nums[-1]


def fibonacci_recursive(index):
    if index < 2:
        return index

    return fibonacci_recursive(index - 2) + fibonacci_recursive(index - 1)


# print(fibonacci_iterative(9))
# print(fibonacci_recursive(9))

print([1, 2, 3] * 3)

my_list = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
my_list2 = [1, 5, 23, 11, 45, 7, 8]
print(sorted(my_list2))
