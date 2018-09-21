var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let end = Node(value);
    if (list.tail != null) {
        list.tail.next = end;
      }
    if (list.head === null) {
        list.head = end;
    }
    list.tail = end;
  };

  list.removeHead = function() {
    let start = list.head;
    delete list.head;
    list.head = list.tail;
    return start.value;
  };

  list.contains = function(target) {
  if ((target === list.head.value) || (target === list.tail.value)) {
  return true} 
    else {
  return false}
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
