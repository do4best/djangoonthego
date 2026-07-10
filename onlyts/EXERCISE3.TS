class Stack<T> {
  private stack: Array<T>;
  private maxSize: number;
  private top: number;

  constructor(maxSize: number = 100) {
    this.stack = [];
    this.maxSize = maxSize;
    this.top = -1;
  }

  pushIt(value: T): boolean {
    if (this.isFull()) {
      return false;
    }
    this.top++;
    this.stack[this.top] = value;
    return true;
  }

  private isFull(): boolean {
    return this.top === this.maxSize - 1;
  }

  pop(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    this.top--;
    const value: T | undefined = this.stack.pop();
    return value ?? null;
  }

  private isEmpty(): boolean {
    return this.top === -1;
  }

  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack[this.top];
  }
}
const stack1 = new Stack()
stack1.pushIt("God")
console.log(stack1)