
console.log("loaded js")
$(document).ready(function() {


    // $("#form-id").on("submit", function(event) {
        
    //     event.preventDefault();

    //     var newBurger = {
    //         burger_name: $("#burger-input").val().trim(),
    //         devoured: 0
    //     };
    //     console.log(newBurger);
    //     $.ajax("/api/burgers", {
    //         type: "POST",
    //         data: newBurger
    //     }).then(function() {
    //         console.log("added new burger");
            
    //         location.reload();
    //     });
    // });

    //add eatburger click evt to change devoured state from 0 to 1 

    $(".change-to-devoured").on("click", function(event) {
        var id = $(this).data("id");
        // var newSTATE = $(this).data("nowDevoured");
        console.log("ajax call to put")
        var newBurgerState = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(function() {
            // console.log("changed state to ", newSTATE);
            location.reload();
        }); 
    });

});
