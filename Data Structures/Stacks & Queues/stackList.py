# Implementation of a stack using a list
# LIFO

class Stack:
    def __init__(self):
        self.data = []

    def is_empty(self):
        return len(self.data) == 0

    def peek(self):
        if self.is_empty():
            return None

        return self.data[len(self.data) - 1]

    def push(self, item):
        self.data.append(item)

    def pop(self):
        if self.is_empty():
            return None

        else:
            return self.data.pop()


my_stack = Stack()
my_stack.push("Coding")
my_stack.push("is")
my_stack.push("really")
my_stack.push("difficult")
my_stack.pop()
my_stack.push("easy")
print(my_stack.data)
