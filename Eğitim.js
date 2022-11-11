alert("Hoşgeldiniz.") ;
console.warn("UYARI");
console.error("HATA");
console.clear();
//Yorum Satırı

/* 


-var-
Normal değişken tanımlama 

-let-
var ile arasındaki farklar:
bi kere tanımlanınca tekrar tanımlayamazsın



-const-
var ile arasındaki farklar:
Bir kere değeri verilince bir daha değiştirilmiyor.
Oluşturulurken değerinin verilmesi gerekir.
not:MÜLAKATLARDA SIKÇA SORULUR- Ama örneğin bir array de değeri push etmek istiyosun sorun olmuyor çünkü instence'ın tuttuğu adres değerini değiştirmiyorsun.










number
string
boolean
object(JS'de null da object dir)

var tanımlanan instence ın herhangi bir değeri yoksa undefined der tipinde

Referans tipler birer objedir array class vs.
Date bir objedir
*/
var a = 10.2;
console.log(typeof a);


var numbers = [1,2,3];
console.log(numbers[0]);

var person = 
{
    name: "Emin",
    age: 25
}
console.log(person);
console.log(typeof person);

var date = Date();

console.log(date);

var fnc = function(){
    console.log("abcdef");
}

console.log(fnc);
console.log(typeof fnc);

var z ;
console.log(typeof z);
console.log(z);


//Veri tiplerini birbirine dönüştürme

let value;
value = String(123);
value = String(true);
value = String(function() {console.log()} );
value = String([1,2,3,4]);
value =(123).toString();//Aynısı.
  
value = Number("123");
value = Number(null );
//eğer number olmayanları çevirmeye kalkarsak tipinde değişir ama değeri yazdırmak istediğinde NaN (not a number) yazar ekrana.
//Array ve fonksiyonlar dahil.

const t = "hello world " + 10;
//otomatik olarak string tanımlar bunu.
 
const num = Number("56") + 32;
//Number olarak tanımlar ve toplar.


//OPERATORLER 
let vala;
vala = 1 + 2;
vala = 1 - 2;
vala = 1 * 2;
vala = 1 / 2;
vala = 1 % 2; //Kalanı verir


//Math operations
vala = Math.PI;
vala = Math.E;
vala = Math.round(3.7); // NORMAL YUVARLAR.
vala = Math.ceil(3.7); // üste YUVARLAR.
vala = Math.floor(3.7); //aşağı YUVARLAR.
vala = Math.sqrt(10); // KAREKÖK ALIR
vala = Math.abs(-10); // MUTLAK DEĞER ALIR
vala = Math.pow(3,2); // 3 üzeri 2
vala = Math.max(3,7,2,98); // maxı verir.
vala = Math.min(3,7,2,98); // min verir.
vala = Math.random(); // 0 ile 1 arasında değerler üretir 1 dahil değilir 0 dahildir.





let rand;
const k = "String";
rand = k.indexOf("a")//a'nın hangi indexte olduğunu gösterir. yoksa -1 yazar.
rand = k.charAt(0);//girilen değerdeki indexi getirir
rand = k.indexOf("i");//hangi indexte olduğunu verir o değerin
rand = k.toLowerCase();
rand = k.toUpperCase();
k.split(",");// virgüle göre ayırır stringi ve diziye döndürür
rand = k.replace("a","b")//a gördüğün yeri b yap
k.includes("a")//a yı içeriyorsa true döner 
rand = `String:${k}`;  ``// ** alt gr ve noktalı virgüle iki kere basınca oluşur **

console.log(rand);

function b(){return "Hello bro";}

const html = `
          <ul>
          <li> String:${k} </li>
          <li> Number:${10 / 4} </li>
          <li> Function:${b()} </li>
          <li> ${String([1,2,3,4])}</li>
          </ul>



`;

//Body e gönderildi.
//document.body.innerHTML = html;  // html e gömmek için.



// - ARRAYS -
// diziye eleman eklerken push ama başına eklemek istersek unshift ile ekleriz.
// pop sondaki elemanı çıkartır shift ile baştaki elemanı çıkartır.
// splice ile belirli alandaki elamnları getirir. 0 ile 3.indexteki gibi.
// reverse metodu ile terine çevrilir.
// sort metodu ile sayının ilk elemanına bakılır ve ona göre sıralanır.
const m = [3,1,5,2,9,4];

rand = m.sort(function(x,y){return x-y;}); //küçükten büyüğe
rand = m.sort(function(x,y){return y-x;}); //büyükten küçüğe
console.log(rand);



//  - OBJELER -

//JSON gibi yazılıyor.
const programmer = {
    username : "Yokedici123",
    addres : {
           neighborhood: "abc mahallesi",
           street:"abc caddesi"
    },

    work : function(){
        return  "Programcı çalışıyor.";
    },

    langs : ["C","C+","Java"]
}


rand = programmer;


console.log(programmer);

// - operatörler -
// ===  hem değer eşitmi hemde tip eşitmi dye bakıyor. bu genelde tercih edilir.
// !==  üstteki nin değildir versiyonu.


// if Kısayolu 
console.log( num === 100 ? "sayı 100 dür" : "sayı 100 değildir.");




//fonksiyon tanımlama   deafult değerler eğer yoksa bunlar gözükür
function merhaba(name="Bilgi yok",age="Bilgi yok"){
    console.log(`Name:${name} Age:${age}`);
}



merhaba("Emin",30);

// Undefined olur değerler.
merhaba();



// - Döngüler -
const programmers =[
   {username:"abc"},
   {username:"cba"}




]

let names = programmers.map(function(programmer){
    return programmer.username;
})

console.log(names);

// buraya bak.
let user = 
{
    a:"öyle",
    b:"böyle"
}

for(let key in user){
    console.log(key,user[key]);
}

// - Window object -
console.log(this);
console.log(window);// this bunu çağırır
//let cevap = confirm("Are you sure?");//evet hayır alır.
//cevap = prompt("2 + 2 = ");
cevap =  this.location;
cevap =  this.location.host;
//window.location.reload();// sayfayı yeniler.
cevap = window.outerHeight; // anlık pencere uzunluğu genişliği
window.innerHeight; // anlık içeriğin olduğu kısımdaki uzunluğu verir.
cevap = window.scrollX; // x eksenindeki scrolun anlık konumunu verir



console.log(cevap);


// !!!!!!! VAR KULLANMA önemli !!!!!

//klasik js get metotları
cevap = document.getElementsByClassName("abc");
cevap = document.getElementById("abc");
cevap = document.getElementsByTagName("h1");


// QuerySelector - css selector - Tek bir element
let element = document.querySelector("#abc");// css gibi yazılıyor




// Tüm elementleri seç.
let answers = document.querySelectorAll(".abc"); //node list dönüyor

answers.forEach(function(answer){
   console.log(answer);
});


// Elementleri seçme 
element.id;
element.className;
element.classList;// indexte seçilebilir dizi
element.textContent;// element içinde ki text i alır;
element.innerHTML; // text dahil diğer htmlleri de alır.
element.href = "www.google.com";// linkini alır eğer bir link i yoksa anasayfanın linki gelir.
element.style.color = "#156";
element.style.backgroundColor = "#000";
element.target = "_blank";  // yen sayfada açmak için tıklanıldığında
element.innerHTML = "<span style = 'color:green'> innerhtmldenemesi </span>"
element.background = ""; // doğrusuna bak.


console.log(cevap);

document.querySelector("li:last-child"); // son çocuğu alır yani son li
document.querySelector("li:first-child"); // ilk li yi alır.
document.querySelector("li:nth-child(n)"); // n inci li yi alır.
document.querySelectorAll("li:nth-child(odd)"); // 1,3,5,vs.  inci li leri alır.
document.querySelectorAll("li:nth-child(even)"); // 2,4,6,vs.  inci li leri alır.



// DOM elementleri üzerinde gezinme 
element = document.querySelector(".abc"); 
element.childNodes; // text dahil çocuklarını alır.
element.children; // sadece elementleri alır.index verilebilir array gibi.
element.children[element.children.length-1]; // son elemanı verir.
element.children[element.children.length-1].textContent = "abc"; // son elemanın text ini değiştirir.
element.children[element.children.length-1].children[1]; // gibi gezinebliriz
element.children[element.children.length-1].firstElementChild; // ilk childi getirir.
element.children[element.children.length-1].lastElementChild; // son childi getirir.
element.children[element.children.length-1].childElementCount; // child sayısını getirir.

element.parentElement; // üst teki elementi getirir.

element.previousElementSibling; // bir önceki kardeşi getirir.
element.nextElementSibling; // bir sonraki kardeşi getirir.


// Dinamik element oluşturma 
const newLink = document.createElement("a"); // <a></a> oluşturdu.
let abc = document.getElementsByClassName("abc"); // class ı abc olanı getirdi.
 
abc.color; // renk vs ayarlanabilir id ve classı da 

//textContent; // bunu kullanmak çok mantıklı değil a nin içinde icon varsa mesela onuda siler ve direkt o elemente text i atar.

//bu yüzden bu şekil tercih edilir
let text = document.createTextNode("naber1");
//abc.appendChild(text); // tam olarak abc nin son childinden sonra ekler.

 

console.log(newLink);

// Dinamik element silme.

//abc[0].remove(); // ilk elemanı siliyo.

//abc.removeChild(abc.lastElementChild); // abc nin son elemanını siler.


// Elementleri değiştirme
//abc.replaceChild(newChild,oldChild); // değiştirme


// Dinamik attribute değiştirme ekleme silme

//abc.classList.add("newClass"); // abc elementine class ekledik.
//abc.classList.remove("newClass"); // abc elementinin classını sildik.
//abc.setAttribute("id","yeniId"); // id sini set ettik
// setAttribute le olmayan özelliğide ekleyebiliriz.
//abc.hasAttribute("id"); // id özelliği var ise true.
//abc.removeAttribute("name"); // name özellğini siler.






// EVENTLER DOM(Document Object Model) 

//bir inputa yazı yazmak için tıkladğında orda focus eventi oluyor.
// bir kullanım

abc = document.querySelector("#inputExample");
console.log(abc);
abc.onfocus = function(){
    console.log("focuslandı");
}
// daha basic
abc.addEventListener("focus",function(e){
  console.log("focuslandı");
  console.log(e);
  console.log(e.type);
  console.log(e.target.placeholder);
  console.log(e.target.className);

});

let abd = document.querySelector("#abd");
console.log(abd);

//abd.addEventListener("submit",submitForm); // Form olmadığı için sorun yaratıyor.


function submitForm(e){
    console.log(e.type);
    e.preventDefault();// normalde form submit edilir sayfa yenilir bu ise deafultunu 0 lar ve sayfa yenilenmez
    }

// Klavye Eventleri

// keypress
//document.addEventListener("keypress",run);
//function run(e){
    //console.log(e.which);//bastığımız harf ve sayıların asci deki karşılığını yazar.
    //console.log(e.key);//bastığımız harf ve sayılar yazar.
  
  // shift enter vs. algılamaz.

//}

// keydown
//document.addEventListener("keydown",run);
//function run(e){
  //  console.log(e.which);//bastığımız tuşların asci karşılığı
  // console.log(e.key);//bastığımız tuşları yazar.


//}

//keyup

// Aynısı ama tuştan bırakınca yapıyor.

// bir inputa girilen değeri anlık olarak texte göndermek için kullanılabilir mesela
abd = document.querySelector("#changeMe");



let d = document.querySelector("#inputExample");
d.addEventListener("keyup",changeTextButton);
function changeTextButton(e){
  // console.log(e.target.value);
  
   abd.textContent= e.target.value;
}

// Mouse Eventleri

document.addEventListener("click",run);
function run(e){
    console.log(e.type);
    // dblclick, mousedown(tıklayıp basılı tuttuğumuzda), mouseup(tıklayıp çekince çalışır), mouseover(üstünde gelince işaretçi çalışır), mouseout(işaretçi üzerinden ayrıldığında)
    // mouseenter ve mouseleave sadece ama sadece belirtilen elemente gelip gidince çalışır

}

//  Input eventleri
// DOMContentLoaded sayfa yüklenme eventi
// blur eventi focustan çıkınca olur.
// paste eventi paste ctrl+v olunca olur
// copy eventi ctrl+c olunca olur 
// cut eventi ise kes işlemi ile ctrl+x olunca olur
// select eventi seçme işemi yapınca olur.



// Event Capturing ve Bubbling Olayları

// Bubbling dediğimiz şey mesela h1 de click var ve onu kapsayan body de var 
// ilk başta h1 sonra body çalışıcak deniz yüzeyine çıkan baloncuk misali

// Capturing veya Delegation ise mesela body nin içinde bir element var sen body ye click ekledin 
// o elemente tıklarsan body deki click çalışır buna denir e.target ile  hangi elemente tıklanıldığını anlayabilirsin.



//  Tarayıcı depolama alanlar
// Local ve Session

//  Session Storage
// sadece sekme açık olduğunda burda ki bilgiler kalıyor.

// sessionStorage.setItem(key,value); ile eklenir
// sessionStorage.removeItem(key); ile silinir
// sessionStorage.clear(); session storage i temizler 


//  Local Storage
// Değerler string olarak eklenir. Ve sekme kapanınca silinmez durur.



// localStorage.setItem(key,value); ile ekler
// localStorage.getItem(key); ile getirir
// localStorage.clear();
// localStorage.removeItem(key);

// localStorage.setItem(key,JSON.stringify(arrayValue)); ile arrayi string gibi değil array gibi tutar.
// JSON.parse(localStorage.getItem(key)); String olarak geleni array e çevirir.

// submit eventinde normalde kendi sayfamıza gideriz bunu engellemek için e.preventDefault(); yazarız.




// ES6+ ÖZELLİKLERİ

//  Destructing

// const numbers = {a:2, b:5, c:9, d:1};
// const {a:kullanmak istediğin değişken adını gir,c,b} = numbers;
// console.log(kullanmak istediğin değişken adını gir); çıktısı 2 dir.


//  Arrow Function

// const merhaba = (firstName,lastName) => {
// console.log("Merhaba",firstName,lastName) } 
// tek parametreli olursa paranteze de gerek yok.
// tek satırsa köşeli paranteze de gerek yok.


// Spread Operator

// console.log("ab",...array); başına ab yi ekler sonra bu diziyi aralarında bi boşluk bırakarak yazdırır.
// ...array aslında dizi deki elemanları gönderir veya getirir.


// For In Ve For Of Döngüleri

// For in

// for(let prop in person) {
// console.log(prop,person[prop]);
// } 
// person özelliklerini teker teker bastırır.

// array olsaydı index üzerinden olurdu prop yerine.

// For of

// obje üzerinde gezinemeyiz array e benzeyen yapılarda işe yarar.
// burada direkt indexe değil değere ulaşır 
//  for(let value of array){console.log(value);}


// Maps

// let myMap = new Map();
// const key1 = "abc";
// const key2 = {a:1,b:2};
// const key3 = () => 2; return yazmak şart değil tek satırsa.
//  set 
// myMap.set(key1,"x");
// myMap.set(key2,"xy");
// myMap.set(key3,"xyz");
//  get
// myMap.get(key1);
// myMap.get(key1);
// myMap.get(key1);
// .size ile boyutunu verir.
// Map lerde foreach ile gezebiliriz value key leri parametre vererek.
// for of ile gezilebilir ama value yazarsan çıktı key ve value yu array olarak verir.
// bu yüzden value yerine [key,value] dersek ayrı ayrı yazabiliriz.
// .keys ile sadece keyleri alır.
// .values ile sadece value ları alır.

// arraylerden map oluşturulabilir. 
// const mapcik = new Map(array); 

// Array.from(cities);
// [[key1,value1],[key2,value2],[key3,value3]] gibi bir array oluşur.


// Sets

// arraylere benzer ama içeride eklenmek istenen eleman varsa eklemez.
// const mySet = new Set();
// new Set(array); olarakta oluşturulabilir.
// mySet.add(eleman);  
// .size , .delete(eleman), .has(eleman) //var ise true döner








// OOP ES6+ ÖNCESİ

// js de bizim global scope ta ki en temel objemiz windowdur this bunu gösterir ama değiştiricez.
// js de class yoktur. Prototype vardır.


// ad özelliği olan bir product nesnesi oluşturduk constructor ile
function Product(name){
    this.name = name;
}

Product.prototype.toString = () => {console.log(this.name + "Productı");}

const product1 = Product("oyuncak");
console.log(product1.toString());

// bizim her objemizin prototype özelliği vardır.
// iki tane product new leyelim bunların prototype i aynıdır.

//  objelerimizin metotlarını onların prototype ine yaz ki bellekten tasarruf edesin.
 

// Kalıtım

// const Admin.prototype = Object.create(User.prototype); ile Admin nesnemizin prototype inde User field ve metotları bulunur onunda prototype ınde user ların protosu onunda prototype inde temel object prototype ı bulunur.



// Call,Apply,Bind 

const obj1 = {
    number1:10,
    number2:20
}
const obj2 = {
    number1:30,
    number2:40
}

function addNumbers(number3,number4){
    console.log(this.number1+this.number2+number3+number4);
}

addNumbers.call(obj1,100,200);
addNumbers.apply(obj1,[100,200]);

function getNumbersTotal(number3,number4){
   return this.number1+this.number2+number3+number4;
}

const copyFunc1 = getNumbersTotal.bind(obj1);
const copyFunc2 = getNumbersTotal.bind(obj2);

console.log(copyFunc1(100,200));
console.log(copyFunc2(100,200));



// ES6+ SONRASI

class Employee {

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

     showInfos() {
        console.log(`İsim:${this.name} Yaş:${this.age}`);
    }

    statMethot() {console.log("Statik metot çalıştı.")}
}

const employee = new Employee(amed,12);

employee.showInfos();

// Statik Metotlar

class StaticTrying {
 static staticMethot() {console.log("Statik metot çalıştı.")}
}

statMethot(); // objeye gerek kalmadan kullanabiliriz ve obje oluşturup bu metotu kullanamayız.
// prototype ine yazılmıyor ondan objelerde kullanamıyoruz.


// Kalıtım

class Person { // Super Class, Base Class
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    showInfos(){console.log(`İsim:${this.name} Yaş:${this.age}`);}
}


class Admin extends Person {// Derived class, Sub Class, Child Class
    constructor(name,age,salary){
       // this.name = name;
       //this.age = age;
        super(name,age);
        this.salary = salary;
    }
 
    showInfos(){console.log(`İsim:${this.name} Yaş:${this.age} Maaş:${this.salary}`);}
    //Override

}




// ASENKRON PROGRAMLAMA 

//setInterval ve setTimeOut metotları

setTimeOut(function(){
    console.log("Bu 2 saniye sonra çalışacak.") // bunun fonksiyonun çalışma süresi + 2 saniye 
},2000);


let setınterval = setInterval(function(){
    // Her 1 saniye de burası çalışır.
},1000);

clearInterval(value);

// callBack

// asenkron işlemlerimizi senkron haline getirmek için kullanabiliriz
// aşağıda normalde ard arda yazsak ilk 2 ve 1 saniye sonra 1 gelicekti ama burda 1 den sonra 2 saniye bekliyor ve çalışıyor.

function process1(callback){
    setTimeout(() => {
        console.log("process 1");
        callback();
    }, 3000);
}

function process2(){
    setTimeout(()=>{
        console.log("process 2");
    },2000);
}

process1(process2);

// ÖNEMLİ

// Arrow function larda fonksiyonun sonunda .bind(this); yazılmış gibi davranır
// bir obje içindeki fonksiyonda arrow functionla yazılırsa this o objeyi değil bir üstündeki objeyi gösterir.window
let person = {
    age : 20,
    tellAge : () => {
        console.log(this);
    }
}


// AJAX CALLBACK ES6 ÖNCESİ

// class Request {

//     constructor(){
//         return this.xhr = new XMLHttpRequest();
//     }

     
//     get(url,callback){
//         this.xhr.open("GET",url); // bağlantı açık

//         this.xhr.onload(function(){
//              if(this.status === 200){
//                 callback(null,this.responseText);
//              }
//              else{
//                 callback("GET Bir hata oluştu.",null);
//              }
//         });


//         this.xhr.send(); // veri olsaydı içine parametre olarak gönderirdik.
//     }


//     post(url,data,callback){
//         this.xhr.open("POST",url);
//         this.xhr.setRequestHeader("Content-type","application/json"); // JSON verisi

//         this.xhr.onload(function(){
//             if(this.status === 201){
//                 callback(null,this.responseText);
//              }
//              else{
//                 callback("POST Bir hata oluştu.",null);
//              }
//         });

//         this.xhr.send(JSON.stringify(data));
//       }

//     put(url,data,callback){
//         this.xhr.open("PUT",url);
//         this.xhr.setRequestHeader("Content-type","application/json"); // JSON verisi

//         this.xhr.onload(function(){
//             if(this.status === 200){
//                 callback(null,this.responseText);
//              }
//              else{
//                 callback("PUT Bir hata oluştu.",null);
//              }
//         });

//         this.xhr.send(JSON.stringify(data));
//     }

//     delete(url,callback){
//         this.xhr.open("DELETE",url);

//         this.xhr.onload(function(){
//             if(this.status === 200){
//                 callback(null,this.responseText);
//              }
//              else{
//                 callback("DELETE Bir hata oluştu.",null);
//              }
//         });

//         this.xhr.send();
//     }


    

// }


// const callBack = function(err,response){

//     if(err === null){
//         console.log(response);
//      }
//      else 
//      {
//         console.log(err);
//      }

// }

// const request = Request();

// request.get("url",callBack);
// request.post("url",data,callBack); // data = {userId:2,tittle:"abc"} 
// request.put("url",data,callBack); // URL nin sonundaki id li nesneyi günceller.
// request.delete("url",callBack); // URL nin sonundaki id ye göre nesneyi siler.



// ES6 SONRASI PROMISE VE FETCH 

// class Request{

//     get(url){
   
//    return new Promise(function(resolve,reject){
//        fetch(url)
//        .then(response => response.json())
//        .then(data => resolve(data))
//        .catch(err => reject(err));
//    });

//    }

//    post(url,data){

//        return new Promise(function(resolve,reject){
//          fetch(url,
//        {
//        method:'POST',
//        body:JSON.stringify(data),
//        headers: {
//            "Content-type": "application/json; charset=UTF-8"
//         }
//        })
//        .then(response => response.json())
//        .then(data => resolve(data))
//        .catch(err => reject(err));
//       });


//       }


//    put(url,data){

//        return new Promise(function(resolve,reject){
//         fetch(url,{
//            method:'PUT',
//            body:JSON.stringify(data),
//            headers:{
//               "Content-type": "application/json; charset=UTF-8" 
//            }
//         })
//         .then(response => response.json())
//         .then(data => resolve(data))
//         .catch(err => reject(err));
//        });


       
//    }

   
//    delete(url){

//        return new Promise(function(resolve,reject){
//            fetch(url,{
//               method:'DELETE' 
//            })
//            .then(response => resolve("Veri Silme işlemi başarılı"))
//            .catch(err => reject(err));
//           });
  
//    }
   


// }

// const request = new Request();
// let persons;
// const myServerUrl = "http://localhost:8080/api/persons";

// request.get(myServerUrl)
// .then(data => {
//   persons = data;
//   console.log(persons); // veri geldikten sonra yazdırmak için burada yapıldı.
// }).catch(err => console.log(err));

// // console.log(persons); Asenkrondur önce burası okunacağı için undefined der  



// EN SON ASENKRON OLARAK (ES7)
// Async ve Await kullanımı 

//    async function get(url){
     
//    let response = await fetch(url);
   
//    let responseData = await response.json();

//    return responseData; // promise olarak geri döner.

//     }



//     get("deneme.txt").then(data => console.log(data)).catch(err => console.log(err));
   





// await kelimesi ile bi promise in gerçekleşmesinin beklenmesi sağlanır.ve await sadece async function ların içinde çalışır




// Bir inputtaki gereksiz boşlukları sağ veya soldaki gibi silmek için o inputa .value.trim(); ile alınıp değişkene atanması daha sağlıklı olur 


////// !!!!!! ÇOK ÖNEMLİİ !!!!!
//
//       Eğerki bir js dosyası içinde basşka js dosyası kullanmak istiyorsak kullaniçinde kullanmak istediğimiz html e önce yazmalıyız.
//
//////  !!!!!! VERY İMPORTANT !!!!!




// Notlar
// indexOf ile kontrol yapıldığında -1 değer false anlamına gelir. 