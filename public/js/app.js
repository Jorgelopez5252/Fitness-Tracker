

$(document).ready(function(){
    $("#submit").click(function() {
        event.preventDefault();

        const workoutInput = {
            type:  $("#exercise-type").val().trim(),
            name: $("#exercise-name").val().trim(),
            duration: parseInt( $("#duration").val().trim())
        }


        console.log(workoutInput);

        $.ajax("/api/workout", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            data: JSON.stringify(workoutInput)
        }).then(function () {
            console.log("new workout added");
        });
    });

function getExercise () {
//ajax call with a get route//

$.ajax("/all", {
    method: "GET",
}).then(function (result) {
console.log(result);
//get values off of result and append to table 






});
    
    
};

getExercise();

});