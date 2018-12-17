// Queue Data Structure (FIFO)

function createQueue() {
  const queue = []

  return {
    enqueue(x) {
      queue.unshift(x)
    },
    dequeue() {
      if (queue.length === 0) {
        return undefined
      }
      return queue.pop()
    },
    peek() {
      if (queue.length === 0) {
        return undefined
      }
      return queue[queue.length - 1]
    },
    get length() {
      return queue.length
    },
    isEmpty() {
      return queue.length === 0
    }
  }
}


const q = createQueue()

// console.log(q.length) // 0
// console.log(q.isEmpty()) // true

q.enqueue('Make an egghead lesson')
q.enqueue('Help others learn')
q.enqueue('Be happy')

// console.log(q.peek()) // Make an egghead lesson

q.dequeue()
// console.log(q.peek()) // Help others learn

q.dequeue()
// console.log(q.peek()) // Be happy

// console.log(q.length) // 1

exports.createQueue = createQueue

