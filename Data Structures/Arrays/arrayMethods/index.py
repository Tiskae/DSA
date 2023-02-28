strings = ["a", "b", "c", "d", "e"]

# accessing
strings[0] # O(1)

# appending
strings.append("f") # O(1)

# popping
strings.pop() # O(1)

# inserting
strings.insert(0, "alien") # O(n)

print(strings)