const makeGraph = (constraints: boolean[][]) => {
  let nodes: number[][] = [];

  const fromSource = constraints.map((_, i) => 2 * (i + 1));
  nodes.push(fromSource);

  nodes.push([]); // sink

  const fromGivers = constraints.map((constraintsForGiver) =>
    constraintsForGiver
      .map((allowed, i) => ({ allowed, index: i }))
      .filter((constraint) => constraint.allowed)
      .map((constraint) => 2 * (constraint.index + 1) + 1)
  );

  const fromReceivers = constraints.map(() => [1]);

  for (let i = 0; i < constraints.length; ++i) {
    nodes.push(fromGivers[i]);
    nodes.push(fromReceivers[i]);
  }

  return nodes;
};

const findPath = (nodes: number[][]) => {
  const visited = Array(nodes.length).fill(false);
  const previous = Array(nodes.length).fill(null);

  const queue = [0]; // start with source
  visited[0] = true;

  while (queue.length > 0) {
    let current = queue.shift();

    if (current === 1) {
      // sink reached
      const path = [1];
      while (current !== 0) {
        path.push(previous[current!]);
        current = previous[current!];
      }

      path.reverse();
      return path;
    }

    for (const destination of nodes[current!]) {
      if (!visited[destination]) {
        queue.push(destination);
        visited[destination] = true;
        previous[destination] = current;
      }
    }
  }

  return null;
};

const flipEdges = (nodes: number[][], path: number[]) => {
  for (let i = 1; i < path.length; ++i) {
    nodes[path[i - 1]] = nodes[path[i - 1]].filter((to) => to !== path[i]);
    nodes[path[i]].push(path[i - 1]);
  }
};

const printGraph = (nodes: number[][]) => {};

export const findAssignments = (constraints: boolean[][]) => {
  const nodes = makeGraph(constraints);
  console.log(nodes);
  let path = findPath(nodes);
  console.log(path);
  while (path !== null) {
    flipEdges(nodes, path);
    path = findPath(nodes);
    console.log(nodes);
  }

  if (nodes[1].length < constraints.length) {
    console.log("ASSIGNMENT IMPOSSIBLE!");
    return null;
  }

  const assignments = [];
  for (let i = 0; i < constraints.length; ++i) {
    const giver = 2 * (i + 1);
    for (let j = 0; j < constraints.length; ++j) {
      const receiver = 2 * (j + 1) + 1;
      if (nodes[receiver].includes(giver)) {
        assignments.push(j);
      }
    }
  }

  console.log(assignments);
  return assignments;
};

export const shuffle = (array: any[]) => {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
