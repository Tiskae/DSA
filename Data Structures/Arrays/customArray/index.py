class MyList:
        def __init__(self):
            self.data = {}
            self.length = 0
        
        def get(self, index):
            return self.data[index]
        
        def push(self, item):
             self.data[self.length] = item
             self.length += 1

        def pop(self):
             deleted_val = self.data[self.length - 1]
             del self.data[self.length - 1]
             self.length -= 1
             return deleted_val

        def delete(self, index):
             item = self.data[index]
             self.shift_items(index)
        
        def shift_items(self, index):
             length = self.length
             for i in list(range(index, length - 1)):
                  self.data[i] = self.data[i + 1]
             del self.data[length - 1]
             self.length -= 1

newList = MyList()
newList.push("a")
newList.push("b")
newList.push("c")
newList.push("d")
newList.push("e")
newList.push("f")
newList.push("g")
newList.push("h")
newList.push("i")
newList.push("j")
newList.push("k")
newList.pop()
newList.pop()
newList.delete(4)
print(newList.data, newList.length)