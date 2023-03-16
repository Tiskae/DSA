counter = 0


def inception():
    global counter
    if counter > 5:
        return "Done"

    print("Weeee!")
    counter += 1
    return inception()


print(inception())
