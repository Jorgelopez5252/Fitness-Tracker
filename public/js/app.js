$(document).ready(function() {
  $("#submit").click(function() {
    event.preventDefault();

    const duration = parseInt(
        $("#duration")
          .val()
          .trim()
      );
      if(isNaN(duration)){
          alert("Hey add a duration")
          return;
      }

    const workoutInput = {
      type: $("#exercise-type")
        .val()
        .trim(),
      name: $("#exercise-name")
        .val()
        .trim(),
      duration
    };

    console.log(workoutInput);

    $.ajax("/api/workout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(workoutInput)
    }).then(function() {
      console.log("new workout added");
      getExercise();
    });
  });

  function getExercise() {
    //ajax call with a get route//

    $.ajax("/all", {
      method: "GET"
    }).then(function(result) {
      console.log(result);
      //get values off of result and append to table
      $("#emptyDiv").empty();
      result.forEach(function(workout){
        var newExercise = $(
          `<div class="col exercise-col">
            <span id="">Exercise name:${workout.name}</span>
            <span id="">Excercise Type: ${workout.type}</span>
            <span id="">Duration: ${workout.duration}</span>
            </div>`
        );
        $("#emptyDiv").append(newExercise);
      })
        
      


      
    });
  }

  getExercise();
});
