// Linked List - each item points to the next one in the list

function createNode(value) {
  return {
    value,
    next: null
  }
}

function createLinkedList() {
  return {
    head: null,
    tail: null,
    length: 0,

    push(value) {
      const node = createNode(value)

      // if no head, list is empty
      if (this.head === null) {
        this.head = node
        this.tail = node
        this.length++
        return node
      }

      // if list not empty, our new node becomes the next elem of existing tail
      this.tail.next = node
      // and now we update the tail to become our new node
      this.tail = node
      // and increment the length
      this.length++

      return node
    },

    pop() {
      // empty list
      if (this.isEmpty()) {
        return null
      }

      const node = this.tail

      // a list of only 1 elem
      if (this.head === this.tail) {
        this.head = null
        this.tail = null
        this.length--
        return node
      }

      // all other lists
      // we need to set the item before our tail (the penultimate item) as the new tail with its next value set to null
      let current = this.head
      let penultimate
      while (current) {
        if (current.next === this.tail) {
          penultimate = current
          break
        }

        current = current.next
      }

      penultimate.next = null
      this.tail = penultimate
      this.length--

      return node
    },

    get(index) {
      if (index < 0 || index > this.length - 1) {
        return null
      }

      if (index === 0) {
        return this.head
      }

      let current = this.head
      let i = 0
      while (i < index) {
        i++
        current = current.next
      }

      return current
    },

    delete(index) {
      if (index < 0 || index > this.length - 1) {
        return null
      }

      if (index === 0) {
        const deleted = this.head

        this.head = this.head.next
        this.length--

        return deleted
      }

      let current = this.head
      let previous
      let i = 0

      while (i < index) {
        i++
        previous = current
        current = current.next
      }

      const deleted = current
      previous.next = current.next

      if (previous.next === null) {
        this.tail = previous
      }

      this.length--

      return deleted
    },

    isEmpty() {
      return this.length === 0
    },

    print() {
      const values = []
      let current = this.head

      while (current) {
        values.push(current.value)
        current = current.next
      }

      return values.join(' => ')
    }
  }
}

const list = createLinkedList()
const values = ['a', 'b', 'c', 'd', 'e']
const nodes = values.map(val => list.push(val))

list.pop()
console.log(list.delete(1))
console.log(list.print())

exports.createNode = createNode
exports.createLinkedList = createLinkedList

/* Linked lists are very slow when searching for an item at a particular index.

An array, by comparison, has quick gets when searching for an index, but a linked list must start at the beginning, often called the "head", and loop through each item's next property until we arrive at the item.

This makes gets in a linked list an operation that takes O(n) time. */