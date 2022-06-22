const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function () {

  let park;
  let dino1
  let dino2
  let dino3
  let dinosaurs = [];

  beforeEach(function () {
    park = new Park('Dinomania', 5.00, [])
    dino1 = new Dinosaur('Trex', 'carnivore', 100)
    dino2 = new Dinosaur('Pterodactyl', 'carnivore', 70)
    dino3 = new Dinosaur('Triceratops', 'herbivore', 75)


  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Dinomania')
  });

  it('should have a ticket price', function () {
    const actual = park.price;
    assert.strictEqual(actual, 5.00)
  });

  it('should have a collection of dinosaurs', function () {
    const expected = []
    assert.deepStrictEqual(park.dinosaurs, expected)
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDino(dino1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dino1])
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDino(dino2);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  // it('should be able to find the dinosaur that attracts the most visitors', function () {

  // });

  // it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day', function () {
    const actual = park.visitorsPerDay();

    assert.strictEqual(actual, 100);
  });

  // it('should be able to calculate the total number of visitors per year');

  // it('should be able to calculate total revenue for one year');

});
