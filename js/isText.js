$('.button').on("click", function(){
    //alert("clicked the button");
    var input = $('#input').val(); //get valid input from id "input"
    //alert(input);
    if(!input){
        alert("Enter an input please");
        return;
    }
    if(typeof input === 'string'){
        //var type = typeof input; //get type of input
        //alert("input is NOT a number, it is a " + type);
        $('#result').html("Yes, this is text")
        return;
    }
    //alert("input is a number");
    $('#result').html("No, this is NOT text");
});