console.log('Tis working good sir');
// garage array
var garage=[];


var addCar = function() {
  console.log('in addCar');
  // get user input
  // create car object
  var newCar = {
    year: document.getElementById('yearIn').value,
    make: document.getElementById('makeIn').value,
    model: document.getElementById('modelIn').value,
    picture: document.getElementById('pictureIn').value,
    description: document.getElementById('descriptionIn').value,
  }; //end newCar
  console.log(newCar);
  // push car into garage
  garage.push(newCar);
  // display cars
  displayCars();
}; //end addCar

var displayCars = function(){
  console.log('in displayCars');
  console.log(garage);
  // empty our ul element (do this so that your don't constantly add the same car every single time you add a new car... it reiterates over itself!)
  document.getElementById('allCars').innerHTML='';
  //for each car in the garage, add a list item with year, make, and modelIn
  for (var i = 0; i < garage.length; i++) {
    // car information (year, make, model)
    var carInfo = garage[i].year + ' ' + garage[i].make + ' ' + garage[i].model;
    // put carInfo inside a list item through a textNode
    // 1st step, create the li
    var listItem = document.createElement('li');
    // 2nd step, create the textNode
    var textNode = document.createTextNode(carInfo);
    // 3rd step, append textNode as child to li
    listItem.appendChild(textNode);
    //append li to the ul
    document.getElementById( 'allCars').appendChild(listItem);
    console.log(carInfo);
  }
};// end displayCars
