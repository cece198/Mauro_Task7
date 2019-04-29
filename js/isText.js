$('.btn').on("click", function(){
    //alert("clicked the button");
    var input = $('#input').val(); //get valid input from id "input"

    if(!input){
        alert("Enter an input please");
        return;
    }
    if($.trim(input) === ''){
        alert("input is NOT text");
        return;
    }
    alert("input is text");
    $('#tasks').append(input);
});