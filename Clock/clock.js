
        setInterval(() => {
            var a = new Date();
            document.getElementById('hrs').innerHTML = String(a.getHours()).padStart(2, '0');
            document.getElementById('min').innerHTML = String(a.getMinutes()).padStart(2, '0');
            document.getElementById('sec').innerHTML = String(a.getSeconds()).padStart(2, '0');
            
            var DAY = a.getDay();
            if(day == 0)
	            document.getElementById("day").innerHTML = "Sunday";
            else if(day == 1)
	            document.getElementById("day").innerHTML = "Monday";
            else if(day == 2)
	            document.getElementById("day").innerHTML = "Tueday";
            else if(day == 3)
	            document.getElementById("day").innerHTML = "Wednesday";
            else if(day == 4)
	            document.getElementById("demo").innerHTML = "Thursday";
            else if(day == 5)
	            document.getElementById("demo").innerHTML = "Friday";
            else if(day == 6)
	            document.getElementById("demo").innerHTML = "Saturday";

            document.getElementById('date').innerHTML= a.getDate();

            var MONTH = a.getMonth();
            if(MONTH == 0)
              document.getElementById('month').innerHTML = " January, ";
            else if(MONTH == 1)
              document.getElementById('month').innerHTML = " February, ";
            else if(MONTH == 2)
              document.getElementById('month').innerHTML = " March, ";
            else if(MONTH == 3)
              document.getElementById('month').innerHTML = " April, ";
            else if(MONTH == 4)
              document.getElementById('month').innerHTML = " May, ";
            else if(MONTH == 5)
              document.getElementById('month').innerHTML = " June, ";
            else if(MONTH == 6)
              document.getElementById('month').innerHTML = " July, ";
            else if(MONTH == 7)
              document.getElementById('month').innerHTML = " August, ";
            else if(MONTH == 8)
              document.getElementById('month').innerHTML = " September, ";
            else if(MONTH == 9)
              document.getElementById('month').innerHTML = " October, ";
            else if(MONTH == 10)
              document.getElementById('month').innerHTML = " November, ";
            else if(MONTH == 11)
              document.getElementById('month').innerHTML = " December, ";
          
            document.getElementById('year').innerHTML= a.getFullYear();
        }, 1000);
      

      