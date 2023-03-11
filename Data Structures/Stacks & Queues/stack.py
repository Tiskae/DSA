class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class Stack:
    def __init__(self):
        self.top = None
        self.bottom = None
        self.length = 0

    def peek(self):
        return self.head

    def push(self, item):
        new_node = Node(item)

        if self.is_empty():
            self.top = new_node
            self.bottom = new_node
        else:
            new_node.next = self.top
            self.top = new_node

        self.length += 1

    def pop(self):
        if self.is_empty():
            return None

        if (self.length == 1):
            self.bottom = None

        holding_pointer = self.top
        self.top = holding_pointer.next

        self.length -= 1

        return holding_pointer

    def is_empty(self):
        return self.length == 0


my_stack = Stack()
my_stack.push("Part 1")
my_stack.push("Part 2")
my_stack.push("Part 3")
my_stack.push("Part 3b")
my_stack.pop()
print(my_stack.peek())
