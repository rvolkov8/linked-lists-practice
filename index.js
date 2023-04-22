class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
    this.length = 0;
  }

  append(value) {
    const node = new Node(value);
    if (this.headNode === null) {
      this.headNode = node;
      this.tailNode = node;
    } else {
      this.tailNode.nextNode = node;
      this.tailNode = node;
    }
    this.length++;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.headNode === null) {
      this.headNode = node;
      this.tailNode = node;
    } else {
      node.nextNode = this.headNode;
      this.headNode = node;
    }
    this.length++;
  }

  size() {
    return this.length;
  }

  head() {
    return this.headNode;
  }

  tail() {
    return this.tailNode;
  }

  at(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Invalid index");
    }
    let currentNode = this.headNode;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  pop() {
    if (this.headNode === null) {
      throw new Error("List is empty");
    }
    let currentNode = this.headNode;
    let prevNode = null;
    while (currentNode.nextNode !== null) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    if (prevNode === null) {
      this.headNode = null;
      this.tailNode = null;
    } else {
      prevNode.nextNode = null;
      this.tailNode = prevNode;
    }
    this.length--;
    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.headNode;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    let currentNode = this.headNode;
    for (let i = 0; i < this.length; i++) {
      if (currentNode.value === value) {
        return i;
      }
      currentNode = currentNode.nextNode;
    }
    return null;
  }

  toString() {
    let str = "";
    let currentNode = this.headNode;
    while (currentNode !== null) {
      str += `(${currentNode.value}) ->`;
      currentNode = currentNode.nextNode;
    }
    str += "null";
    return str;
  }

  insertAt(value, index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Invalid index");
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === this.length) {
      this.append(value);
      return;
    }
    const node = new Node(value);
    let currentNode = this.headNode;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    node.nextNode = currentNode.nextNode;
    currentNode.nextNode = node;
    this.length++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Invalid index");
    }
    if (index === 0) {
      this.headNode = this.headNode.nextNode;
      if (this.headNode === 0) {
        this.tailNode = null;
      }
      this.length--;
      return;
    }
    let currentNode = this.headNode;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = currentNode.nextNode.nextNode;
    if (currentNode.nextNode === null) {
      this.tailNode = currentNode;
    }
    this.length--;
  }
}

class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}
