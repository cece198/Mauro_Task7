$('.button').on("click", function(){
    //alert("clicked the button");
    var input = $('#input').val(); //get valid input from id "input"
    //alert(input);
    if(!input){
        alert("Enter an input please");
        return;
    }
    if(input === " "){
        //var type = typeof input; //get type of input
        //alert("input is NOT a number, it is a " + type);
        $('#result').html("This is not text")
        return;
    }
    //alert("input is a number");
    $('#result').html("This is text");
});