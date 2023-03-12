# Queue - FIFO
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class Queue:
    def __init__(self):
        self.first = None
        self.queue = None
        self.length = 0

    # returns the first element of the queue
    def peek(self):
        return self.first

    # add element to the end of the queue
    def enqueue(self, item):
        new_node = Node(item)

        if self.length == 0:
            self.first = new_node
            self.last = new_node
        else:
            self.last.next = new_node
            self.last = new_node

        self.length += 1

    # remove the first element of the queue and then returns it
    def dequeue(self):
        if self.length == 0:
            return None

        if self.length == 1:
            self.last = None

        holding_pointer = self.first
        self.first = self.first.next

        self.length -= 1
        return holding_pointer


my_queue = Queue()
my_queue.enqueue(1)
my_queue.enqueue(2)
my_queue.enqueue(3)
my_queue.enqueue(4)
my_queue.enqueue(5)
my_queue.enqueue(6)
my_queue.dequeue()
my_queue.dequeue()
my_queue.dequeue()
my_queue.dequeue()

print(my_queue.first, my_queue.last, my_queue.length)
