function createRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addRandomNumberBesideLine(lineId) {
  const line = document.getElementById(lineId);
  const randomNumber = createRandomNumber(1, 22);

  const numberDiv = document.createElement("div");
  numberDiv.className = "random-number";
  numberDiv.textContent = randomNumber;

  // Menentukan posisi angka random di sebelah garis
  const topPosition = parseInt(line.style.top) + parseInt(line.style.width) / 2;
  const leftPosition =
    parseInt(line.style.left) + parseInt(line.style.width) / 2;

  numberDiv.style.position = "absolute";
  numberDiv.style.top = `${topPosition}px`;
  numberDiv.style.left = `${leftPosition}px`;

  line.appendChild(numberDiv);
  return randomNumber;
}

class Graph {
  constructor() {
    this.graph = {};
  }

  addEdge(start, end, cost) {
    if (!(start in this.graph)) {
      this.graph[start] = [];
    }
    this.graph[start].push({ node: end, cost: cost });
  }
}

function ucs(graph, start, goal) {
  let visited = new Set();
  let queue = [{ cost: 0, node: start, path: [] }];

  while (queue.length > 0) {
    let { cost, node, path } = queue.shift();

    if (!visited.has(node)) {
      visited.add(node);
      path = path.concat([node]);

      if (node === goal) {
        return { path: path, cost: cost };
      }

      for (let i = 0; i < graph[node].length; i++) {
        let { node: neighbor, cost: edgeCost } = graph[node][i];
        if (!visited.has(neighbor)) {
          queue.push({ cost: cost + edgeCost, node: neighbor, path: path });
          queue.sort((a, b) => a.cost - b.cost);
        }
      }
    }
  }

  return { path: [], cost: 0 };
}

// Menambahkan event listener pada formulir
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const inputStart = document.getElementById("inputStart");
  const inputGoal = document.getElementById("inputGoal");
  const resultSpan = document.querySelector(".result");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman formulir standar

    // Mendapatkan jawaban dari input dan mengubah ke huruf besar secara otomatis
    const userStart = inputStart.value.toUpperCase();
    const userGoal = inputGoal.value.toUpperCase();

    console.log(userStart);
    console.log(userGoal);

    // Menjalankan algoritma UCS dengan parameter dari inputan user
    let result = ucs(graph.graph, userStart, userGoal);

    console.log(
      `Rute terpendek dari ${userStart} ke ${userGoal}: ${result.path}, Cost: ${result.cost}`
    );

    // Menampilkan hasil pada span
    resultSpan.innerHTML = `Shortest route <br> from city ${userStart} to city ${userGoal} <br> adalah ${result.path} <br> Cost: ${result.cost}`;
  });

  // Menambahkan event listener pada input untuk otomatis uppercase
  inputStart.addEventListener("input", function () {
    this.value = this.value.toUpperCase();
  });

  inputGoal.addEventListener("input", function () {
    this.value = this.value.toUpperCase();
  });
});

// Penggunaan addRandom
// path1
// const ab = addRandomNumberBesideLine("lineAB");
// const ae = addRandomNumberBesideLine("lineAE");
// const ag = addRandomNumberBesideLine("lineAG");
// const be = addRandomNumberBesideLine("lineBE");
// const bg = addRandomNumberBesideLine("lineBG");
// const bc = addRandomNumberBesideLine("lineBC");
// const cf = addRandomNumberBesideLine("lineCF");
// const gc = addRandomNumberBesideLine("lineGC");
// const cd = addRandomNumberBesideLine("lineCD");
// const ef = addRandomNumberBesideLine("lineEF");
// const fd = addRandomNumberBesideLine("lineFD");
// const gd = addRandomNumberBesideLine("lineGD");

// path2
const ah = addRandomNumberBesideLine("lineAH");
const ag = addRandomNumberBesideLine("lineAG");
const ab = addRandomNumberBesideLine("lineAB");
const bg = addRandomNumberBesideLine("lineBG");
const be = addRandomNumberBesideLine("lineBE");
const cg = addRandomNumberBesideLine("lineCG");
const cd = addRandomNumberBesideLine("lineCD");
const cb = addRandomNumberBesideLine("lineCB");
const dg = addRandomNumberBesideLine("lineDG");
const df = addRandomNumberBesideLine("lineDF");
const dk = addRandomNumberBesideLine("lineDK");
const ef = addRandomNumberBesideLine("lineEF");
const ei = addRandomNumberBesideLine("lineEI");
const fc = addRandomNumberBesideLine("lineFC");
const hi = addRandomNumberBesideLine("lineHI");
const ij = addRandomNumberBesideLine("lineIJ");
const jk = addRandomNumberBesideLine("lineJK");

// Penggunaan addEdge
let graph = new Graph();
// route path1
// graph.addEdge("A", "B", ab);
// graph.addEdge("A", "E", ae);
// graph.addEdge("A", "G", ag);
// graph.addEdge("B", "E", be);
// graph.addEdge("B", "G", bg);
// graph.addEdge("B", "C", bc);
// graph.addEdge("C", "F", cf);
// graph.addEdge("G", "C", gc);
// graph.addEdge("C", "D", cd);
// graph.addEdge("E", "F", ef);
// graph.addEdge("F", "D", fd);
// graph.addEdge("G", "D", gd);
// route reverse path1
// graph.addEdge("B", "A", ab);
// graph.addEdge("E", "A", ae);
// graph.addEdge("G", "A", ag);
// graph.addEdge("E", "B", be);
// graph.addEdge("G", "B", bg);
// graph.addEdge("C", "B", bc);
// graph.addEdge("F", "C", cf);
// graph.addEdge("C", "G", gc);
// graph.addEdge("D", "C", cd);
// graph.addEdge("F", "E", ef);
// graph.addEdge("D", "F", fd);
// graph.addEdge("D", "G", gd);

// route path1
graph.addEdge("A", "H", ah);
graph.addEdge("A", "G", ag);
graph.addEdge("A", "B", ab);
graph.addEdge("B", "G", bg);
graph.addEdge("B", "E", be);
graph.addEdge("C", "G", cg);
graph.addEdge("C", "D", cd);
graph.addEdge("C", "B", cb);
graph.addEdge("D", "G", dg);
graph.addEdge("D", "F", df);
graph.addEdge("D", "K", dk);
graph.addEdge("E", "F", ef);
graph.addEdge("E", "I", ei);
graph.addEdge("F", "C", fc);
graph.addEdge("H", "I", hi);
graph.addEdge("I", "J", ij);
graph.addEdge("J", "K", jk);
// route reverse path2
graph.addEdge("H", "A", ah);
graph.addEdge("G", "A", ag);
graph.addEdge("B", "A", ab);
graph.addEdge("G", "B", bg);
graph.addEdge("G", "C", cg);
graph.addEdge("D", "C", cd);
graph.addEdge("G", "D", dg);
graph.addEdge("F", "D", df);
graph.addEdge("K", "D", dk);
graph.addEdge("I", "E", ei);
graph.addEdge("I", "H", hi);
graph.addEdge("J", "I", ij);
graph.addEdge("K", "J", jk);
