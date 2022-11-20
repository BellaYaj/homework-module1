     //Create a time data funstion
        function currenttime() {
    //Declare variables
        var d= new Date(); //Get current date
        var hr = d.getMinutes(); //Get current hours
        var min = d.getMinutes(); //Get current minutes
        var sec = d.getSeconds(); //Get current seconds
        var ampm; //Declare empty variables to store AM or PM
    }
        //Add 0 to single digits for seconds
             if (sec < 10) { sec="0" + sec; } //Add 0 to single digits for minutes if (min < 10) { min="0" + min; } //Determine AM or
            PM string if (hr==12) { ampm="PM" ; //Set to PM } else if (hr> 12) {
            hr -= 12; //Deduct 12 from hours greater then 12 (military time)
            ampm = "PM"; //Set to PM
        } else {
            ampm = "AM"; //Set to AM
        }
        //Assemble time format to display
            var time = hr + ":" + min + ":" + sec + " " + ampm;
        //Display current local time and time zone on HTML elments
            document.getElementById("clock").innerText = time; //adding time
        //Run time data function every 1 second
            setInterval(currentTime, 1000); //setting timer
        //Initial run of time data function
            currentTime()