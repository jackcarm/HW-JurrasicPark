const Park = function (name, price) {
    this.name = name;
    this.price = price;
    this.dinosaurs = [];

};


Park.prototype.addDino = function (dino) {
    this.dinosaurs.push(dino)
};

Park.prototype.removeDino = function (dino) {
    this.dinosaurs.pop(dino)
};

// Park.prototype.mostVisited = function () {
// };

// Park.prototype.visitorsPerDay = function () {

// };

Park.prototype.annualVisitors = function () {
    return visitorsPerDay * 365;
};



module.exports = Park;