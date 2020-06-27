const LinkedList = require("../linkedListsExercises/linkedList");

// c d c d d

class QueuedAnimal {
  constructor(name, queueNumber) {
    this.name = name;
    this.queueNumber = queueNumber;
  }
}

class AnimalShelter {
  constructor() {
    this.animalQueueNumber = 0;
    this.catQueue = new LinkedList();
    this.dogQueue = new LinkedList();
  }
  dequeueAny() {
    const dogTailQueue =
      this.dogQueue.tail && this.dogQueue.tail.value.queueNumber;
    const catTailQueue =
      this.catQueue.tail && this.catQueue.tail.value.queueNumber;

    if (!dogTailQueue && !catTailQueue) {
      return undefined;
    }

    if (!catTailQueue || dogTailQueue < catTailQueue) {
      return this.dequeueDog();
    } else {
      return this.dequeueCat();
    }
  }

  dequeueDog() {
    const dog = this.dogQueue.removeTail();
    return dog && dog.name;
  }

  dequeueCat() {
    const cat = this.catQueue.removeTail();
    return cat && cat.name;
  }

  // check name
  // increase counter
  // add to the correct list

  enqueue(name, isDog) {
    if (typeof name !== "string" || !name.length) {
      throw new Exception("Provide a name for the animal.");
    }

    this.animalQueueNumber++;
    const animal = new QueuedAnimal(name, this.animalQueueNumber);
    if (isDog) {
      this.dogQueue.addToHead(animal);
    } else {
      this.catQueue.addToHead(animal);
    }
  }
}

const { assert } = require("chai");

const enqueAnimalsHelper = () => {
  const animalShelter = new AnimalShelter();
  animalShelter.enqueue("d1", true);
  animalShelter.enqueue("c1", false);
  animalShelter.enqueue("c2", false);
  animalShelter.enqueue("d2", true);
  animalShelter.enqueue("d3", true);
  animalShelter.enqueue("c3", false);
  animalShelter.enqueue("d4", true);
  animalShelter.enqueue("c4", false);
  return animalShelter;
};

describe("AnimalShelter", () => {
  it("Should enqueue", () => {
    const animalShelter = enqueAnimalsHelper();
    assert.equal(animalShelter.dequeueAny(), "d1");
  });
  it("Should dequeueAny", () => {
    const animalShelter = enqueAnimalsHelper();
    assert.equal(animalShelter.dequeueAny(), "d1");
    assert.equal(animalShelter.dequeueAny(), "c1");
    assert.equal(animalShelter.dequeueAny(), "c2");
    assert.equal(animalShelter.dequeueAny(), "d2");
    assert.equal(animalShelter.dequeueAny(), "d3");
    assert.equal(animalShelter.dequeueAny(), "c3");
    assert.equal(animalShelter.dequeueAny(), "d4");
    assert.equal(animalShelter.dequeueAny(), "c4");
    assert.equal(animalShelter.dequeueAny(), undefined);
  });
  it("Should dequeueCat", () => {
    const animalShelter = enqueAnimalsHelper();
    assert.equal(animalShelter.dequeueCat(), "c1");
    assert.equal(animalShelter.dequeueDog(), "d1");
    assert.equal(animalShelter.dequeueCat(), "c2");
    assert.equal(animalShelter.dequeueCat(), "c3");
    assert.equal(animalShelter.dequeueAny(), "d2");
    assert.equal(animalShelter.dequeueCat(), "c4");
    assert.equal(animalShelter.dequeueCat(), undefined);
    assert.equal(animalShelter.dequeueAny(), "d3");
    assert.equal(animalShelter.dequeueDog(), "d4");
  });
  it("Should dequeueDog", () => {
    const animalShelter = enqueAnimalsHelper();
    assert.equal(animalShelter.dequeueDog(), "d1");
    assert.equal(animalShelter.dequeueCat(), "c1");
    assert.equal(animalShelter.dequeueDog(), "d2");
    assert.equal(animalShelter.dequeueDog(), "d3");
    assert.equal(animalShelter.dequeueAny(), "c2");
    assert.equal(animalShelter.dequeueDog(), "d4");
    assert.equal(animalShelter.dequeueDog(), undefined);
    assert.equal(animalShelter.dequeueAny(), "c3");
    assert.equal(animalShelter.dequeueCat(), "c4");
  });
});
