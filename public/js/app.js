// Js file in your public folder for front end javascript - easiest to use jquery has an on-click function that pulls values off of your form on submit, builds an object with your values, does an AJAX call POST route to back end. Look at the cat activity js file in public folder as an example

const workouts = []


$(document).ready(function(){
    $("input.btn").click(function() {
        const workoutInput = document.getElementById(workout);
        console.log("I have been Clicked" + workoutInput);
    });
    
});

