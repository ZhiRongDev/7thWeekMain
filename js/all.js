$(document).ready(function() {
    $('.layout-MenuToggle').on('click', function(e){
       e.preventDefault();
       $('.layout-Navbar').toggleClass('active');
   });
 });