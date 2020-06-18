"use strict";

let language_Input = document.getElementById("language_input");
let Language_Btn = document.getElementById("language_btn");
let language_Option1 = document.getElementById("language1");
let language_Option2 = document.getElementById("language2");
let language_Option3 = document.getElementById("language3");
let language_Option4 = document.getElementById("language4");
let screen_Alert = document.getElementById("screen_btn");
let screen_body = document.getElementById("body");
let pop_screen = document.getElementById("pop_screen");

let body_elem = document.getElementsByTagName("body");


let ok_button = document.getElementById("ok_btn");
let close_button = document.getElementById("close_btn");

language_Input.addEventListener("click", drop_down);
Language_Btn.addEventListener("click", drop_down);
language_Option1.addEventListener("click", function () {
  language_Input.value = language_Option1.value;
  drop_down();
});

language_Option2.addEventListener("click", function () {
  language_Input.value = language_Option2.value;
  drop_down();
});
language_Option3.addEventListener("click", function () {
  language_Input.value = language_Option3.value;
  drop_down();
});
language_Option4.addEventListener("click", function () {
  language_Input.value = language_Option4.value;
  drop_down();
});

//pop up box number 1
screen_Alert.addEventListener("click", pop_up_box);
ok_button.addEventListener("click", pop_up_box_hide);
close_button.addEventListener("click", pop_up_box_hide);
pop_screen.addEventListener("click",pop_up_box_hide,false);


//pop box number 2

let flag = false;

let originalAlert = window.alert;
window.alert = function (args) {
  document.querySelector("html").classList.add("darkenPage");
  setTimeout(function () {
    originalAlert(args);
    document.querySelector("html").classList.remove("darkenPage");
    flag = true;
  });
};

$(window).click(function(){
  if(flag === true){window.alert =function(){}
  }
  flag = false
  window.alert = function (args) {
    document.querySelector("html").classList.add("darkenPage");
    setTimeout(function () {
      originalAlert(args);
      document.querySelector("html").classList.remove("darkenPage");
      flag = true;
    });
  };


})

/*
body_elem.addEventListener(click, function(){
if(alert.){


}


})
*/

//event functions
function drop_down() {
  let d_list = document.getElementsByClassName("drop_down_list");
  if (d_list[0].style.display != "none") {
    d_list[0].style.display = "none";
  } else {
    d_list[0].style.display = "block";
  }
}

function pass_Value() {
  if (document.getElementById("language1").selected === true) {
    language_Input.value = document.getElementById("language1").value;
    language_Input.textContent = document.getElementById(
      "language1"
    ).textContent;
  }
}

//pop up box

function pop_up_box() {
  document.getElementsByClassName("pop_up")[0].style.display = "block";
}

function pop_up_box_hide(event) {
  event.stopPropagation();

  document.getElementsByClassName("pop_up")[0].style.display = "none";
  //let eventDetails = "Event Name = " + event.type
}

