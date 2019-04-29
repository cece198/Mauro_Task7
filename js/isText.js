$('.button').on("click", function(){
    //alert("clicked the button");
    var input = $('#input').val(); //get valid input from id "input"
    //alert(input);
    if(!input){
        alert("Enter an input please");
        return;
    }
    if(isNaN(input)){
        var type = typeof input; //get type of input
        //alert("input is NOT a number, it is a " + type);
        $('#result').html("input is NOT a number, it is a " + type)
        return;
    }
    //alert("input is a number");
    $('#result').html("input is a number");
});