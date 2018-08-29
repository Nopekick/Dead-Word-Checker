
const deadWords = ["about", "how","a lot","always","and so on",
  "and etc.","anything","bad","because","cause","could of","cuz","due to",
"etc.","everything","forever","get","getting","good","got","gotten","had of","here are",
"here is","I believe","I think","in conclusion","in my opinion","just","kind of",
"like","lottsa","major","majorly","might of","never","nice","nothing","ok","pretty",
"really","should of","shows","shows that","so","something","somewhat","sorta","sort of",
"so yeah","stuff","talks about","there are","there is","thing","til","till","to me",
"try and","very","would of","you","yours","Because","In conclusion","Well","appear","appears","appeared",
"keep","keeps","kept","resemble","resembles","resembled","stay","stays","stayed","become",
"becomes","became","look","looks","looked","seem","seems","seemed","taste","tastes",
"tasted","feel","feels","felt","prove","proves","proved","smell","smells","smelled",
"turn","turns","turned","grow","grows","grew","remain","remains","remained","sound",
"sounds","sounded","be","am","is","are","was","were","been","being"]

let input = document.querySelector("#input")
let checked = document.querySelector("#checker")
let button = document.querySelector("button")

button.addEventListener("click", function(e){
  let string = input.value;

  deadWords.forEach(function(a){
           string = string.split(RegExp("\\b"+a+"\\b","i")).join("<mark>"+a+"</mark>");
  });
  checked.innerHTML = string;

})
