// $(function() {
//     //(header)//c-button--global-menu
//     $(".p-hamburger_button").click(function() {
//        $(".hamburger_btn").addClass("is-open");
//        $("body").addClass("is-open");
//    })
//     $(".is-hamburger").click(function() {
//        $(".hamburger_btn").removeClass("is-open")
//        $("body").removeClass("is-open")
//     })
//  });
$(function() {
    //(header)//c-button--global-menu
    $(".p-hamburger_button").click(function() {
       $("body").addClass("nav-open");
       $(".p-hamburger").addClass("nav-open");
       $(".global-nav").addClass("nav-open");
   })
    $(".is-hamburger").click(function() {
       $("body").removeClass("nav-open")
       $(".p-hamburger").removeClass("nav-open")
       $(".global-nav").removeClass("nav-open")
    })
 });

 
  
   
   
   
   
   
   
   
   
   
   
 
 
 