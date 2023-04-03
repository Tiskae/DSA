def add_to_80(n):
    print("Long process")
    return 80 + n


def memoize_add_to_80():
    cache = {}

    def new(n):
        if not cache.get(n):
            print("Long process")
            cache[n] = 80 + n
        return cache[n]
    return new


memoize = memoize_add_to_80()


print(memoize(70))
print(memoize(170))
print(memoize(70))
