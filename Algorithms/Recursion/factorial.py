# Non recursive function
def non_recursive_factorial(num):
    answer = 1

    for num in list(range(num, 1, -1)):
        answer *= num

    return answer


# Recursive function
def recursive_factorial(num):
    # Base case
    if num == 2:
        return 2
    elif num < 2:
        return 1

    # Recursive case
    return num * recursive_factorial(num - 1)


print(non_recursive_factorial(5))
print(recursive_factorial(1))
