class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.prev = None


class LinkedList:
    def __init__(self, value):
        self.head = Node(value)
        self.tail = self.head
        self.length = 1

    def print_list(self):
        curr_node = self.head
        items_list = []

        while True:
            items_list.append(curr_node.value)
            curr_node = curr_node.next

            if not (curr_node):
                break

        print(items_list)

    def traverse_to_index(self, index):
        curr_node = self.head
        counter = 0

        while counter < index:
            curr_node = curr_node.next
            counter += 1

        return curr_node

    def append(self, value):
        new_node = Node(value)
        new_node.prev = self.tail
        self.tail.next = new_node
        self.tail = new_node
        self.length += 1

    def prepend(self, value):
        new_node = Node(value)
        self.head.prev = new_node
        new_node.next = self.head
        self.head = new_node
        self.length += 1

    def insert(self, index, value):
        if index >= self.length:
            raise IndexError("List index out of range")

        if index == 0:
            return self.prepend(value)

        if index == self.length - 1:
            return self.append(value)

        leader = self.traverse_to_index(index - 1)
        follower = leader.next
        new_node = Node(value)
        leader.next = new_node
        follower.prev = new_node
        new_node.prev = leader
        new_node.next = follower

        self.length += 1

    def remove(self, index):
        if index >= self.length:
            raise IndexError("List index out of range")

        if index == 0:
            self.head = self.head.next
            self.head.prev = None
        else:
            leader = self.traverse_to_index(index - 1)
            unwanted_node = leader.next
            leader.next = unwanted_node.next
            if (index != self.length - 1):
                leader.next.prev = leader

        self.length -= 1


my_linked_list = LinkedList(4)
my_linked_list.append(6)
my_linked_list.append(8)
my_linked_list.prepend(1)
# my_linked_list.prepend("Zoyah")
my_linked_list.prepend("you")
my_linked_list.prepend("love")
my_linked_list.prepend("I")
my_linked_list.insert(6, "not")
my_linked_list.remove(4)
my_linked_list.print_list()
