var name = prompt("what is your name")

alert("Hey, Wlecome to my Website " + name )

var favPhone = prompt("what is you fav Phone?")


<<<<<<< HEAD
if(confirm(favPhone == "iphone")){
=======
if(favPhone == "iphone"){
>>>>>>> 56420a919363321f743485ea562a95cade51c81b
document.write(
  "<div>" + "<h3>" + favPhone+"</h3>"
+ "<img  src='iphone.jfif' width='100' height='100'     />" + "</div>")
}
else if (favPhone =="samsung"){
document.write(
  "<div>" + "<h3>" + favPhone+"</h3>"
+ "<img  src='samsung.jfif' width='100' height='100'     />" + "</div>")
}
else if(favPhone =="huawei"){
document.write(
  "<div>" + "<h3>" + favPhone+"</h3>"
+ "<img  src='huawei.jfif' width='100' height='100'     />" + "</div>")
}
else if(favPhone =="Redmi"){
document.write(
  "<div>" + "<h3>" + favPhone+"</h3>"
+ "<img  src='Redmi.jfif' width='100' height='100'     />" + "</div>")
}
else{
  alert('we donot have this Phone')
}