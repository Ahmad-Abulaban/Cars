function intersted_in_phones(){
var p = prompt("Do you like phones? , please type yes or no . You should type yes to contion")
while(p != "yes"){
  p = prompt("Do you like phones? , please type yes or no . You should type yes to continue")
}
}

var name = prompt("what is your name")

alert("Hey, Wlecome to my Website " + name)

intersted_in_phones()


var favPhone = prompt("what is you fav Phone? , please choose one of these ; iphone , samsung , huawei , Redmi ")

while (favPhone != "iphone" && favPhone != "samsung" && favPhone != "huawei" && favPhone != "Redmi") {

  favPhone = prompt("what is you fav Phone? , please choose one of these ; iphone , samsung , huawei , Redmi ")

}


var numberOfPic = prompt("how many times you wish to see it ")

while (numberOfPic > 15) {
  numberOfPic = prompt("please enter number less than 15!")
}




if (favPhone == "iphone") {
  for (var i = 0; i < numberOfPic; i++)
    document.write(
      "<div>" + "<h3>" + favPhone + "</h3>"
      + "<img  src='Images/iphone.jfif' width='150' height='150'     />" + "</div>") 
}
else if (favPhone == "samsung") {
  for (var i = 0; i < numberOfPic; i++)
    document.write(
      "<div>" + "<h3>" + favPhone + "</h3>"
      + "<img  src='Images/samsung.jfif' width='150' height='150'     />" + "</div>")
}
else if (favPhone == "huawei") {
  for (var i = 0; i < numberOfPic; i++)
    document.write(
      "<div>" + "<h3>" + favPhone + "</h3>"
      + "<img  src='Images/huawei.jfif' width='150' height='150'     />" + "</div>")
}
else if (favPhone == "Redmi") {
  for (var i = 0; i < numberOfPic; i++)
    document.write(
      "<div>" + "<h3>" + favPhone + "</h3>"
      + "<img  src='Images/Redmi.jfif' width='150' height='150'     />" + "</div>")
}
else {
  alert('we donot have this Phone')
}