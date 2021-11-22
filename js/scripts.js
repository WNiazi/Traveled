//Business Logic for Places Traveled 
function PlacesTraveled (){ 
  this.locations={};
  this.currentID=0 
}
PlacesTraveled.prototype.assignId=function () {
  this.currentID += 1; 
  return this.currentID;
}
PlacesTraveled.prototype.addLocation =function(location){ 
  location.id=this.assignId(); 
  this.locations[location.id]=location;  
}
//Business Logic for Locations 
function Location (country, city, times, length){
  this.country=country; 
  this.city=city; 
  this.times=times; 
  this.length=length; 
}
Location.prototype.countryCity = function() {
  return this.country + " ," + this.city;
};

let placesTraveled = new PlacesTraveled();

//User Logic 
$document.ready (function(){ 
  
  $("form#new-places").submit(function(event) {
    event.preventDefault();
  const inputtedCountry =$("input#new-country").val(); 
  const inputtedCity =$("input#new-city").val(); 
  const inputtedtimes =$("input#new-times").val(); 
  const inputtedlength =$("input#new-length").val(); 
  let newLocation = new Location(inputtedCountry, inputtedCity, inputtedtimes, inputtedlength);
  
  // on click "submit"
  placesTraveled.addLocation(newLocation);

  // let location1= new Location("Germany", "Berlin", "November", 5);
  // let location2= new Location("Italy", "Florence", "February", 10);
  // let location3= new Location("Cambodia", "Phnom Penh", "March", 3);
  // let location4= new Location("Vietnam", "Da Nang", "June", 5);
  // let location5= new Location("Mexico", "Mexico City", "June", 12);

  $("#output")=text.(function(PlacesTraveled));
  $("#output").show(); 
}


