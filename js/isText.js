$('.btn').on("click", function(){
    //alert("clicked the button");
    var input = $('#input').val(); //get valid input from id "input"
    //alert(input);
    if(!input){
        alert("Enter an input please");
        return;
    }
    if(input === " "){
        //var type = typeof input; //get type of input
        alert("input is NOT text");
        return;
    }
    alert("input is text");
    $('#tasks').append(input);
});