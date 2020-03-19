 /*jshint esversion: 6 */
console.log('connected');
// Start of functions for the SVG circle
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
  
function setStop(id, radius, stop){
    var c = document.getElementById(id);
    c.className = "background";
    var stopVal = Math.PI * radius * 2 * (stop/10);
    c.setAttribute("stroke-dasharray", stopVal + ", 3000");
    c.setAttribute("stroke-dashoffset", stopVal);
    c.className = "overlayLine";
}
  
function randomStops(){
    setStop("line1", 20, getRandomIntInclusive(1, 10));
    setStop("line2", 30, getRandomIntInclusive(1, 10));
    setStop("line3", 40, getRandomIntInclusive(1, 10));
    setStop("line4", 50, getRandomIntInclusive(1, 10));
}
randomStops();
// End of functions for SVG circle
  
Vue.use(Vuetify);
var app = new Vue({
    el: '#app',
    data: {
        todaysDate: "",
        currentTemp: "75",
        currentTempImage: "lightning_outline.png",
        seasonImage: "",
        popularTrailsStatus: "A little busy",
        parkingStatus: "As busy as it gets",
        shuttleStatus: "A little busy",
        entranceStatus: "A little busy",

        displaySeasonImage: true,

    },
    methods: {
        getTodaysDate: function () {
            var date = new Date();
            var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var hours = date.getHours();
            var TOD;
            if (hours > 12){
                hours-=12;
                TOD = "PM";
            }else{
                TOD = "AM";
            }
            var minutes = date.getMinutes();
            if (minutes < 10){
                minutes = "0" + date.getMinutes();
            }
            var fulldate = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDay() + " " + hours + ":" + minutes + " " + TOD;
            this.todaysDate = fulldate;
            var month = date.getMonth() + 1;
            if (month > 6 & month < 9){
                this.seasonImage = "'images/summer.png'";
            }else if(month > 9 & month < 12){
                this.seasonImage = "'images/fall.png'";
            }else if(month > 12 | month < 3){
                this.seasonImage = "'images/winter.png'";
            }else{
                this.seasonImage = "'images/spring.png'";
            }
        },
        hourlySelected: function(){
            console.log("Hourly selected");
        },
        dailySelected: function(){
            console.log("Daily selected");
        }
    },
    mounted() {
        this.getTodaysDate();
    }
        
});


// THIS SECTION NEEDED TO REGISTER SERVICE WORKER //
window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
                 .register('./sw.js');
    }
};

