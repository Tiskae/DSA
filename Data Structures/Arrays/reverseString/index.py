def reverse_string(str):
    # Invalid param
    # if type(str) != "str":
        # return

    # Empty strings and single chars are palindromes
    if len(str) < 2:
        return str
    
    reversed_str_arr = []

    for i in list(range(len(str) - 1, -1, -1)):
        reversed_str_arr.append(str[i])

    return "".join(reversed_str_arr)

print(reverse_string("h"))
print(reverse_string("!hayoZ uoy evol I"))
