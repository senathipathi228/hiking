$("ul").on("click","li",function(){
   $(this).toggleClass("strike"); 
});
$("ul").on("click","span",function(event){
   $(this).parent().fadeOut(500,function(){
              $(this).remove();
   });
    event.stopPropagation();
});
$("input[type='text']").keypress(function(e){
   if(e.which===13){
       var newTodo=$(this).val();
       $(this).val("");
       $("ul").append("<li><span><i class='fa fa-trash-o' style='font-size: 40px;'></i></span> "+newTodo+"</li>");
   } 
});
$(".fa-pencil").click(function(){
   $("input").fadeToggle("1000"); 
});