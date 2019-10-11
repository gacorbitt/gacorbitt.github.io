function toggleMenu() {
    console.log(document.getElementById("hamburger").classList);
    document.getElementById("hamburger").classList.toggle("hide");
}





/*function loadDate(){
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    var dateObject = new Date();
    var day = days[dateObject.getDay()];
    var dateNumber =dateObject.getDate();
    var month = monthNames[dateObject.getMonth()];  
    var year = dateObject.getFullYear();
    
    document.getElementById("year").innerHTML = year; 
    document.getElementById("lastModified").innerHTML = day+", "+dateNumber+" "+month+" "+year;
    }