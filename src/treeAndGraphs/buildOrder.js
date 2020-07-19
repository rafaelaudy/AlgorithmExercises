// a ---depends on---> d
// b ---depends on---> d
// c ---depends on--->
// d ---depends on---> c
// e ---depends on--->
// f ---depends on---> b,a

// d,a
// d,a,b
// d,a,b
// c,d,a,b
// c,d,a,b,e
// c,d,a,b,e,f

// project not in queue
//      add to bottom of queue

// dependency not in queue
//      add to start of queue

// dependency in queue
//   and project in queue
//   and dependency after project
//      dependency moved before project

class Project {
  constructor(name, dependencies = []) {
    this.name = name;
    this.dependencies = dependencies;
  }
}

const buildOrder = (projects) => {
  let buildOrder = [];
  const isProjectOnQueue = (toFind) =>
    buildOrder.findIndex(({ name }) => name === toFind);

  projects.forEach((project) => {
    const projectQueueIndex = isProjectOnQueue(project.name);
    if (projectQueueIndex === -1) {
      buildOrder.push(project);
    }

    project.dependencies.forEach((dependency) => {
      const dependencyQueueIndex = isProjectOnQueue(dependency.name);
      if (dependencyQueueIndex === -1) {
        buildOrder.unshift(dependency);
      }

      if (
        dependencyQueueIndex !== -1 &&
        projectQueueIndex !== -1 &&
        dependencyQueueIndex > projectQueueIndex
      ) {
        buildOrder = [
          ...buildOrder.slice(0, projectQueueIndex),
          dependency,
          project,
          ...buildOrder.slice(
            projectQueueIndex + 1,
            dependencyQueueIndex - projectQueueIndex
          ),
          ...buildOrder.slice(dependencyQueueIndex + 1),
        ];
      }
    });
  });

  return buildOrder;
};

const { assert } = require("chai");

// a ---depends on---> b,d
// b ---depends on---> d
// c ---depends on--->
// d ---depends on---> c
// e ---depends on--->
// f ---depends on---> b,a

// c,d,b,a,e,f

const prepareProjects = () => {
  const e = new Project("e", []);
  const c = new Project("c", []);
  const d = new Project("d", [c]);
  const b = new Project("b", [d]);
  const a = new Project("a", [b, d]);
  const f = new Project("f", [b, a]);

  return [a, b, c, d, e, f];
};

describe("buildOrder", () => {
  it.only("Should compile on the correct build order", () => {
    const projects = prepareProjects();
    const [a, b, c, d, e, f] = projects;
    assert.deepEqual(buildOrder(projects), [c, d, b, a, e, f]);
  });
});
