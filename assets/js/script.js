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
const ab = addRandomNumberBesideLine("lineAB");
const ae = addRandomNumberBesideLine("lineAE");
const ag = addRandomNumberBesideLine("lineAG");
const be = addRandomNumberBesideLine("lineBE");
const bg = addRandomNumberBesideLine("lineBG");
const bc = addRandomNumberBesideLine("lineBC");
const cf = addRandomNumberBesideLine("lineCF");
const gc = addRandomNumberBesideLine("lineGC");
const cd = addRandomNumberBesideLine("lineCD");
const ef = addRandomNumberBesideLine("lineEF");
const fd = addRandomNumberBesideLine("lineFD");
const gd = addRandomNumberBesideLine("lineGD");

// Penggunaan addEdge
let graph = new Graph();
// route
graph.addEdge("A", "B", ab);
graph.addEdge("A", "E", ae);
graph.addEdge("A", "G", ag);
graph.addEdge("B", "E", be);
graph.addEdge("B", "G", bg);
graph.addEdge("B", "C", bc);
graph.addEdge("C", "F", cf);
graph.addEdge("G", "C", gc);
graph.addEdge("C", "D", cd);
graph.addEdge("E", "F", ef);
graph.addEdge("F", "D", fd);
graph.addEdge("G", "D", gd);
// route reverse
graph.addEdge("B", "A", ab);
graph.addEdge("E", "A", ae);
graph.addEdge("G", "A", ag);
graph.addEdge("E", "B", be);
graph.addEdge("G", "B", bg);
graph.addEdge("C", "B", bc);
graph.addEdge("F", "C", cf);
graph.addEdge("C", "G", gc);
graph.addEdge("D", "C", cd);
graph.addEdge("F", "E", ef);
graph.addEdge("D", "F", fd);
graph.addEdge("D", "G", gd);
