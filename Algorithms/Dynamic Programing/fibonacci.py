calculations = 0


def fibonacci_recursive(n):
    if n < 2:
        return n

    global calculations
    calculations += 1
    return fibonacci_recursive(n-1) + fibonacci_recursive(n-2)


def memoized_fibonacci():
    cache = {}

    def fib(n):
        if cache.get(n):
            return cache[n]
        else:
            if n < 2:
                return n
            else:
                global calculations
                calculations += 1
                result = fib(n-1) + fib(n-2)
                cache[n] = result
                return result

    return fib


faster_fibonacci = memoized_fibonacci()
fib_large_num = faster_fibonacci(700)

print(fib_large_num)
print(f"It took {calculations} calculations")
