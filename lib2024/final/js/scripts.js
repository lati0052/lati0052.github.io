// SEQUENCE OF JS
// 1) User Interacts 
// 2) Event happens 
// 3) Function is Called
// 4) Script runs 



// window is the keyword targeting current browser
// window.onload asks the browser to wait for the page to load and then run the function(called init in this case)
window.onload = init;
// this is done to avoid complications of function running without having the elements ready and rendered

// function name-of-function will create a function in js file
// function must have a opening curly brace and a closing one {} similar to css
// the name of a function is followed by brackets ()

// function createBox() {

// }

function init() {
// JQuery function attached to the submit event of the form with id "form"
	$('#loadTable').click(function (e) {
		// e.preventDefualt to avoid the form being submitted to page specified in action attribute 
   		 e.preventDefault();
   		 // fadeIn is a jQuery function to fadeIn an element 
   		 $(".overlay-container").fadeIn(1000, function(){
   		 		// call the createTableFromJSON function
   		 		createTableFromJSON();
		   		 // fadeOut is a jQuery function to fadeOut an element 
   		 		$('.overlay-container').delay(500).fadeOut(500);
   		 })
	});
}

function createTableFromJSON() {
        var myBooks = [
            {
                "Time": "9:00 - 11:00",
                "Monday": "Communications 1",
                "Tuesday": "Client Services",
                "Wednesday": "Special Collections"
                "Thursday": "Directed Research Seminar"
                "Friday": "Client Services"
            },
            {
                "Time": "11:00 - 12:30",
                "Monday": "Reference",
                "Tuesday": "Internet App",
                "Wednesday": "Library Software"
                "Thursday": "French"
                "Friday": "Reference"
            },
            {
                "Time": "14:00 - 15:00",
                "Monday": "Acquisitions",
                "Tuesday": "General Elective",
                "Wednesday": "Marketing"
                "Thursday": "Emerging Library Tech"
                "Friday": "Library Software"
            },
            {
                "Time": "15:30 - 17:30",
                "Monday": "French",
                "Tuesday": "French",
                "Wednesday": "Acquisitions"
                "Thursday": "Subject Analysis"
                "Friday": "Internet App"
            },
        ]
        // EXTRACT VALUE FOR HTML HEADER. 
        // ('Student ID', 'Name', 'Email' and 'Marks')
        var col = [];
        for (var i = 0; i < myBooks.length; i++) {
            for (var key in myBooks[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        // this loops through the Mybooks object
        for (var i = 0; i < myBooks.length; i++) {

        	// create a row for each object row and add to the end of the table
            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
				// create a cell for each object column and add to the end of the row
                var tabCell = tr.insertCell(-1);
                // add HTML data to the TableCell
                // select i'th value from mybooks 
                // then select the element with key equal to col[j] from the value selected before 
                // Eg: mybooks[0][col[0]], mybooks[0][col[1]], mybooks[0][col[2]]
                // col[0] = Student ID, col[1] = Name, col[3] = Email
                // mybooks[0][col[0]] = 1, mybooks[0][col[1]] = John Doe
                tabCell.innerHTML = myBooks[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("schedule_table");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }
// To show and hide mobile menu when .ham is clicked
function showHideMobileMenu() {

	var mobileNav = document.querySelector('.mobile-nav');

	// in a if statement == is used to compare two value, if the values matches then the condition is true
	// an if statement is followed by an else statement which runs when the given condition is not met
	if(mobileNav.style.display=="block") {
		mobileNav.style.display="none";
	} else {
		mobileNav.style.display="block";
	}
}
