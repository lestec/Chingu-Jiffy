// Runs jQuery
$(document).ready(function() {
  var buzzer = $("#buzzer")[0];
  var count = parseInt($("#num").html());
  var breakTime = parseInt($("#breakNum").html());
  // console.log(count);
  $("#reset").hide();

  $("#start").click(function() {
    var counter = setInterval(timer, 1000);
    count *= 60;
    breakTime *= 60;
    function timer() {
      $(
        "#start, #add5Clock, #minus5Clock, #minus5Break, #add5Break, #breakNum, #title1, #title2"
      ).hide();
      $("#timeType").show();
      $("#timeType").html("Session Time: ");
      count -= 1;
      if (count === 0) {
        clearInterval(counter);
        buzzer.play();

        // Starts the break timer.
        var startBreak = setInterval(breakTimer, 1000);
        $("#num").hide();
      }
      if (count % 60 >= 10) {
        $("#num").html(Math.floor(count / 60) + ":" + count % 60);
      } else {
        $("#num").html(Math.floor(count / 60) + ":" + "0" + count % 60);
      }

      function breakTimer() {
        $("#timeType").html("Break Time: ");
        $("#breakNum").show();
        $("#timeType").show();
        breakTime -= 1;
        if (breakTime === 0) {
          clearInterval(startBreak);
          buzzer.play();
          $("#reset").show();
          $("#breakNum, #timeType").hide();
        }
        if (breakTime % 60 >= 10) {
          $("#breakNum").html(
            Math.floor(breakTime / 60) + ":" + breakTime % 60
          );
        } else {
          $("#breakNum").html(
            Math.floor(breakTime / 60) + ":" + "0" + breakTime % 60
          );
        }
      }
    }
  });

  /* Sets up the "reset" button */
  $("#reset").click(function() {
    count = 5;
    breakTime = 5;
    $("#num").html(count);
    $("#breakNum").html(breakTime);
    $(
      "#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #num, #title1, #title2"
    ).show();
    $("#reset, #timeType").hide();
  });

  /* Sets up the "minus" 5 button on the SESSION time */
  $("#minus5Clock").click(function() {
    if (count > 5) {
      count -= 5;
      $("#num").html(count);
      // console.log(count);
    }
  });

  /* Sets up the "plus" 5 button on the SESSION time */
  $("#add5Clock").click(function() {
    count += 5;
    $("#num").html(count);
    // console.log(count);
  });

  /* Sets up the "minus" 5 button on the BREAK time */
  $("#minus5Break").click(function() {
    if (breakTime > 5) {
      breakTime -= 5;
      $("#breakNum").html(breakTime);
      // console.log(count);
    }
  });

  /* Sets up the "plus" 5 button on the BREAK time */
  $("#add5Break").click(function() {
    if (breakTime < 15) {
      breakTime += 5;
      $("#breakNum").html(breakTime);
      // console.log(count);
    }
  });
});
