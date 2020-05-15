$(document).ready(function(){
    $('.panel_heading').on('click',function(){
        var i = $(this).next();
        $('.panel_description').not(i).slideUp();
        $(this).next().slideToggle();        
    });
});