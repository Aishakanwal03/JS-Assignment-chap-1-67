// *****CHAPTER 38-42*****

// Question # 1

// function power(a , b){
//     var result = 1;
//     for(i = 1 ; i <= b ; i++){
        
//         result = result * a;
//     }
//     return result
// }
// document.write(power(3 , 3))

// Question # 2

// function leapYear(year){
//     if (year % 4 == 0){
//         document.write(year + " is a Leap Year")
//     }else {
//         document.write(year + " is not a Leap Year")
//     }
// }
// year = prompt("Enter any year")
// leapYear(year)


// Question # 3

// function areaOfTriangle(a, b ,c){
//     var area;
//     function S(){
//        var s = (a + b + c)/2
//        return s
//     }
//     var d = S()
//     area = d*(d - a)*(d - b)*(d - c)
//     return area
//     // return d
// }
// document.write(areaOfTriangle(2, 3 ,4))

// Question # 4

// function result(mark1, mark2, mark3){
//     function average(){
//         var average = (mark1 + mark2 + mark3)/3
//         return average
//     }
//     function percentage(){
//         var percentage = (mark1 + mark2 + mark3)*100/150
//         return percentage
//     }
//     // var average = average()
//     // var percentage = percentage()
//     document.write(average() + "<br>" ) 
//     document.write(percentage())
// }

// var mark1 = parseInt(prompt("Enter Marks of First subject"))
// var mark2 = parseInt(prompt("Enter Marks of Second subject"))
// var mark3 = parseInt(prompt("Enter Marks of Third subject"))
// result(mark1 , mark2, mark3)

// Question # 5


// function indexOf(){

//     var word = prompt("Enter word or paragraph:")

//     var character = prompt("Enter Character")

//     for(i=0 ; i<= word.length ; i++){

//         if(word[i] == character){

//             document.write("Index of " + character + " is " + i)

//             break
//         }
//     }
// }

// indexOf()

// Question # 6

// var sentence;

// function removeVowels(sentence){
//     var sen = sentence.toLowerCase()
//     var ne = ""
//     for(i = 0 ; i < sentence.length ; i++){

//         if(sen[i] != "a" && sen[i] != "e" && sen[i] != "i" && sen[i] != "o" && sen[i] != "u"){
//             ne += sentence[i]
//         }
//     }
//     return ne
// }

// sentence = prompt("Enter a sentence:")
// document.write(removeVowels(sentence))

// Question # 7

// var sentence = "Pleases read this application and give me gratuity"

// function occuranceOfTwoVowels(sentence){
//     var lower = sentence.toLowerCase()
//     var count = 0
//     var list =[]
//     for(i = 0 ; i< sentence.length ; i++){
//         var sen = ""
//         var first = lower[i]
//         switch(first){
//             case "a":
//                 sen += "a"
//                 break
//             case "e":
//                 sen += "e"
//                 break
//             case "i":
//                 sen += "i"
//                 break
//             case "o":
//                 sen += "o"
//                 break

//             case "u":
//                 sen += "u"
//                 break
//         }
//         var second = lower[i+1]
//         switch(second){
//             case "a":
//                 sen += "a"
//                 break
//             case "e":
//                 sen += "e"
//                 break
//             case "i":
//                 sen += "i"
//                 break
//             case "o":
//                 sen += "o"
//                 break

//             case "u":
//                 sen += "u"
//                 break
//         }

//         if(sen.length == 2){
//             count += 1
//             list.push(sen)
//         }        
//     }
    
//     document.write("There are " +count+ " occurrences of any two vowels in succession <br>")
//     document.write(list + "<br>")
// }

// sentence = prompt("Enter any sentence:")
// occuranceOfTwoVowels(sentence)


// Question # 8

// function kilometerToMeter(distance){
//     var meter = distance * 1000
//     return meter
// }

// function kilometerToFeet(distance){
//     var feet = distance * 3280.8399
//     return feet
// }

// function kilometerToInch(distance){
//     var inch = distance * 39370.0787
//     return inch
// }

// function kilometerToCentimeter(distance){
//     var cm= distance * 100000
//     return cm
// }

// function distanceConversion(distance){
//     meter =  kilometerToMeter(distance) 
//     feet = kilometerToFeet(distance)
//     inch = kilometerToInch(distance)
//     cm = kilometerToCentimeter(distance)
//     document.write("<b>Kilometer to Meter:</b> " + distance + " kilometer is equal to " +meter+ " meters<br>")
//     document.write("<b>Kilometer to Feet:</b> " + distance + " kilometer is equal to " +feet+ " feets<br>")
//     document.write("<b>Kilometer to Inches:</b> " + distance + " kilometer is equal to " +inch+ " inches<br>")
//     document.write("<b>Kilometer to Centimeter:</b> " + distance + " kilometer is equal to " +cm+ " centimeters<br>")
// }

// var distance = parseInt(prompt("Enter distance in kilometer:"))
// distanceConversion(distance)


// Question # 9

// var hours = prompt("enter working hours:")
// if (hours > 40){
//     hours = hours -40
//     var pay = hours * 12
// }

// document.write("Over time pay: " +pay)

// Question # 10

// function currencyNotes(amount){

//     var tens = amount[amount.length - 2] % 5
//     var hundreds = amount.slice(0, amount.length - 2)
//     if (amount[amount.length - 2] >= 5){
//         var fifty = 1
//     }else{
//         var fifty = 0
//     }
//     document.write("You will have " + hundreds + " hundred notes " + fifty + " fifty note and " + tens + " ten notes")
// }

// var amount = prompt("Enter amount to withdraw:")
// currencyNotes(amount)

// document.write(tens + " " + hundreds)

 
// *****CHAPTER 43-48*****

// Question # 1

// function link(){
//     alert("This link is not available right now")
// }

// Question # 2

// function link(){
//     alert('Thanks for purchasing a phone from us')
// }

// Question # 3

// var index , table = document.getElementById("table")
// for (i = 1 ; i < table.rows.length ; i++){
//     table.rows[i].cells[3].onclick = function(){
//         index = this.parentElement.rowIndex
//         table.deleteRow(index)
//         for (i = 1 ; i < table.rows.length ; i++){
//             table.rows[i].cells[0].innerHTML = i
//         }
//     }
// }


// Question # 4

// function imgChange(){
//    var img = document.getElementById("change")
//    img.src = "images/img2.jfif"
// }
// function imgchange2(){
//    var img = document.getElementById("change")
//    img.src = "images/img1.jfif"
// }
  

// Question # 5


// function increase(){

//   var count =  document.getElementById("counter")

//   count.innerHTML++
// }
// function decrease(){

//    var count =  document.getElementById("counter")
 
//    count.innerHTML--
//  }
 
// *****CHAPTER 49-52*****

// Question # 1


// function content(){
//     var name = document.getElementById("name").value
//     var email = document.getElementById("email").value
//     var password = document.getElementById("pswd").value
//     document.write("Name: "  + name+ "<br>")
//     document.write("Email: " + email + "<br>")
//     document.write("password: " + password + "<br>")    

// }

// Question # 2

// function para(){

// var para = document.getElementById("para")

// para.innerHTML = " In previous assignment you have created a tabular data using javascript. Let’s modify that. Create a form which takes student’s details and show each student detail in table. Each row of table must contain a delete button and an edit button. On click on delete button entire row should be deleted. On click on edit button, a hidden form will appear with the values of that row."

// var link = document.getElementById("link")

// link.innerHTML = "read less"
// }

// Question # 3

// var selectedRow = null

// function onSubmit(){
//     var formData = getFormData()
//     if(selectedRow == null){
//     insertNewRecord(formData)
//     }else{
//         updateRecord(formData)
//     }
//     resetForm()
// }
// function getFormData(){
//     var formData = {}
//     formData["name"] = document.getElementById("name").value
//     formData["class"] = document.getElementById("class").value
//     return formData
// }

// function insertNewRecord(data){
//     var table = document.getElementById("table")
//     var newRow = table.insertRow(table.length)
//     var cell0 = newRow.insertCell(0)
//     cell0.innerHTML = table.rows.length -1
//     var cell1 = newRow.insertCell(1)

//     cell1.innerHTML = data.name
//     var cell2 = newRow.insertCell(2)
//     cell2.innerHTML = data.class
//     var cell3 = newRow.insertCell(3)
//     cell3.innerHTML = "<button onclick = 'onEdit(this)'>Edit</button> <button onclick = 'onDelete(this)'>Delete</button>"
    
// }

// function resetForm(){
//     document.getElementById("name").value = ""
//     document.getElementById("class").value = ""
//     selectedRow = null
// }
// function onEdit(td){
//     selectedRow = td.parentElement.parentElement
//     document.getElementById("name").value = selectedRow.cells[1].innerHTML
//     document.getElementById("class").value = selectedRow.cells[2].innerHTML
// }
// function updateRecord(formData){
//     selectedRow.cells[1].innerHTML = formData.name
//     selectedRow.cells[2].innerHTML = formData.class
// }
// function onDelete(td){
//     row = td.parentElement.parentElement
//     document.getElementById("table").deleteRow(row.rowIndex)
//     for (i = 1 ; i < table.rows.length ; i++){
//         table.rows[i].cells[0].innerHTML = i
//     }
//     resetForm()
// }


// *****CHAPTER 58 - 67*****

// Question # 1
// part # 1

// var main = document.getElementById("main-content")

// part # 2

// var main = document.getElementById("main-content")
// console.log(main.childNodes) 

// part # 3

// var main = document.getElementById("main-content")
// var child = main.innerHTML
// var text = main.textContent
// console.log(text)

// part # 4

// var firstNmae = document.getElementById("first-name").value = "Aasma"

// // part # 5

// var lastName = document.getElementById("last-name").value = "Kanwal"
// var email= document.getElementById("email").value = "aasmakanwal921@gmail.com"

// Question # 2
// part # 1

// var fo = document.getElementById("form-content").nodeType
// alert(fo)

// part # 2

var lastName = document.getElementById("last-name")
alert(lastName.nodeType)
var child = lastName.childNodes
alert(child.nodeType)

// part # 3

// var lastname = document.getElementById("last-name").value = "Batool"

// part # 4

// var main = document.getElementById("main-content")
//  var first = main.firstChild
// console.log(first)
// var last  = main.lastChild
// console.log(last)

// part # 5

// var lastName = document.getElementById("last-name")
// var previus = lastName.previousSibling
// console.log(previus)

// var next = lastName.nextSibling
// console.log(next)

// part # 6

// var email = document.getElementById("email")
// console.log(email.nodeType)
// var parent = email.parentNode
// console.log(parent)