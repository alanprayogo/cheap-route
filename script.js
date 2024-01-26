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

// Contoh penggunaan
const ab = addRandomNumberBesideLine("lineAB");
const ae = addRandomNumberBesideLine("lineAE");
const ag = addRandomNumberBesideLine("lineAG");
const bf = addRandomNumberBesideLine("lineBF");
const bg = addRandomNumberBesideLine("lineBG");
const bc = addRandomNumberBesideLine("lineBC");
const cf = addRandomNumberBesideLine("lineCF");
const gc = addRandomNumberBesideLine("lineCG");
const cd = addRandomNumberBesideLine("lineCD");
const ef = addRandomNumberBesideLine("lineEF");
const fd = addRandomNumberBesideLine("lineFD");

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
  const inputAnswer = document.getElementById("inputAnswer");
  const resultSpan = document.querySelector(".result");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman formulir standar

    // Mendapatkan jawaban dari input dan mengubah ke huruf besar secara otomatis
    const userAnswer = inputAnswer.value.toUpperCase();

    // Memeriksa apakah jawaban pengguna sesuai dengan hasil yang diharapkan
    if (userAnswer === result.path.join("")) {
      // Jika sesuai
      resultSpan.innerHTML = `Correct Answer <br> The shortest route from city ${startNode} to city ${goalNode} <br> Is ${result.path} <br> Cost: ${result.cost}`;
    } else {
      // Jika tidak sesuai
      resultSpan.innerHTML = `Wrong Answer <br> The shortest route from city ${startNode} to city ${goalNode} <br> Is ${result.path} <br> Cost: ${result.cost}`;
    }

    // Menampilkan hasil pada console
    console.log(result);
  });

  // Menambahkan event listener pada input untuk otomatis uppercase
  inputAnswer.addEventListener("input", function () {
    this.value = this.value.toUpperCase();
  });
});

// Contoh penggunaan:
let graph = new Graph();
graph.addEdge("A", "B", ab);
graph.addEdge("A", "E", ae);
graph.addEdge("A", "G", ag);
graph.addEdge("B", "F", bf);
graph.addEdge("B", "G", bg);
graph.addEdge("B", "C", bc);
graph.addEdge("C", "F", cf);
graph.addEdge("G", "C", gc);
graph.addEdge("C", "D", cd);
graph.addEdge("E", "F", ef);
graph.addEdge("F", "D", fd);

let startNode = "A";
let goalNode = "D";
let result = ucs(graph.graph, startNode, goalNode);
console.log(
  `Rute terpendek dari ${startNode} ke ${goalNode}: ${result.path}, Cost: ${result.cost}`
);
