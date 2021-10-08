class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let parent = new Node("USA");
parent.left = new Node("CAN");
parent.right = new Node("MEX");
parent.right.right = new Node("BLZ");
parent.right.left = new Node("GTM");
parent.right.left.left = new Node("SLV");
parent.right.left.right = new Node("HND");
parent.right.left.right.left = new Node("NIC");
parent.right.left.right.left.left = new Node("CRI");
parent.right.left.right.left.left.left = new Node("PAN");

function analyzeInput() {
  let path = [];
  let res = findPath(parent, path);

  if(res) {
    displayTree(path);
  } else {
    document.getElementById("result").innerHTML = "";
  }
}

function findPath(node, path) {
  let target = document.querySelector("#user-input").value;

  if (node == null) {
    return false;
  }
  
  path.push(node.val);

  if (node.val == target) {
    return true;
  }

  if (findPath(node.left, path) || findPath(node.right, path)) {
    return true;
  }

  path.pop();

  return false;
}

function displayTree(path) {
  let str = "";
  let result = document.getElementById("result");

  for(let i=0; i < path.length-1; i++) {
    console.log(path[i]);
    str += path[i] + "<br>";
  }
  str += path[path.length-1];

  result.innerHTML = str;
}
