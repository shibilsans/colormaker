

//type 1

// const getcolor = ()=>{
//     const randumNumber =Math.floor(Math.random()*16777215); 
//     const randomcod ="#" +randumNumber.toString(16);
//     document.body.style.backgroundColor =randomcod;
// }

// document.getElementById('btn').addEventListener("click",getcolor);

// getcolor();

//type2

const butt = document.getElementById("btn");

 butt.addEventListener("click", getcolor);

function getcolor () {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomcod = "#" + randomNumber.toString(16);
    const colorElement = document.getElementById("color").innerText = randomcod;
    navigator.clipboard.writeText(randomcod);

    document.body.style.backgroundColor = randomcod;
    butt.style.backgroundColor = randomcod;
}


//jquery

// $(document).ready(function(){
//     $("#btn").mouseenter(function(){
//         var randumNumber=Math.floor(Math.random()*16777215);
//         var randomcod ="#"+randumNumber.toString(16);
//         $("#color").text(randomCode);
//         $("body").css("backgroundColor",randomcod);
//         $("#btn").css("backgroundColor",randomcod);
//     });
// });

