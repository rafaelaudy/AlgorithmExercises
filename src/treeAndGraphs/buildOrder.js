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

// a ---depends on---> b,d
// b ---depends on---> d
// c ---depends on--->
// d ---depends on---> c
// e ---depends on--->
// f ---depends on---> b,a

// c,d,b,a,e,f

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
  const buildOrder = [];
  const isProjectOnQueue = (toFind) =>
    buildOrder.find(({ name }) => name === toFind);

  for (project in projects) {
    const isProjectAlreadyOnQueue = isProjectOnQueue(project.name);
    if (!isProjectAlreadyOnQueue) {
      // add to the bottom
    }

    for (dependency in projects.dependencies) {
      const isDependencyAlreadyOnQueue = isProjectOnQueue(dependency.name);
      if (!isDependencyAlreadyOnQueue) {
        // add to the top
      }

      if (isDependencyAlreadyOnQueue && isProjectAlreadyOnQueue) {
        // move dependency before project
      }
    }
  }
};

const { assert } = require("chai");

const prepareProjects = () => {};

describe("buildOrder", () => {
  beforeEach(prepareProjects);

  it("Should compile on the correct build order", () => {});
});
