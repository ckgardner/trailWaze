 /*jshint esversion: 6 */
console.log('connected');
  
Vue.use(Vuetify);
var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        todaysDate: "",
        currentTemp: "75",
        hour2: "",
        hour3: "",
        hour4: "",
        day2: "",
        day3: "",
        day4: "",
        weatherImage: "./icons/weather/bkn.svg",
        seasonImage: "",
        popularTrailsStatus: "A little busy",
        parkingStatus: "As busy as it gets",
        shuttleStatus: "A little busy",
        entranceStatus: "A little busy",
        angelsStatus: "A little busy",
        riverStatus: "A little busy",
        parusStatus: "A little busy",
        kayentaStatus: "A little busy",
        VCStatus: "A little busy",
        museumStatus: "A little busy",
        RVStatus: "A little busy",
        springdaleStatus: "A little busy",
        zionStatus: "A little busy",
        springStatus: "A little busy",
        southStatus: "A little busy",
        walkinStatus: "A little busy",
        eastStatus: "A little busy",
        kolobStatus: "A little busy",

        drawer: false,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' },
        ],

        currentPage: "main", // main, trailsMain, parkingMain, shuttleMain, entranceMain
        titleColor: "#7E8959",

        displaySeasonImage: true,
        svgNotClicked: true,
        svgClicked: false,

        // border-bottom when selected
        hourly_selected: true,
        daily_selected: false,
        trails_selected: false,
        parking_selected: false,
        shuttles_selected: false,
        entrances_selected: false,
        // dynamic tab images
        homeTabImage: "./icons/home_green.svg",   // starts as solid image 
        trailsTabImage: "./icons/trails_outline_green.svg", // the rest start as no solid
        parkingTabImage: "./icons/parking_outline_blue.svg",
        shuttleTabImage: "./icons/zion_shuttle_outline_red.svg",
        entranceTabImage: "./icons/kolob_outline_yellow.svg"
        

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
            var fulldate = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + " " + hours + ":" + minutes + " " + TOD;
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

            this.hour2 = date.getHours() + 1;
            if (this.hour2 > 12){
                this.hour2-=12;
                TOD = "PM";
            }else{
                TOD = "AM";
            }
            this.hour2 = this.hour2 + " " + TOD;

            this.hour3 = date.getHours() + 3;
            if (this.hour3 > 12){
                this.hour3-=12;
                TOD = "PM";
            }else{
                TOD = "AM";
            }
            this.hour3 = this.hour3 + " " + TOD;

            this.hour4 = date.getHours() + 5;
            if (this.hour4 > 12){
                this.hour4-=12;
                TOD = "PM";
            }else{
                TOD = "AM";
            }
            this.hour4 = this.hour4 + " " + TOD;
            var day2 = date.getDay()+1;
            if (day2 > 6){
                day2 = 0; 
            }
            this.day2 = days[day2];

            var day3 = day2+1;
            if (day3 > 6){
                day3 = 0; 
            }
            this.day3 = days[day3];

            var day4 = day3+1;
            if (day4 > 6){
                day4 = 0; 
            }
            this.day4 = days[day4];
        },
        hourlySelected: function(){
            this.hourly_selected = true;
            this.daily_selected = false;
        },
        dailySelected: function(){
            this.hourly_selected = false;
            this.daily_selected = true;
        },
        trailsSelected: function(){
            this.trails_selected = true;
            this.parking_selected = false;
            this.shuttles_selected = false;
            this.entrances_selected = false;
        },
        parkingSelected: function(){
            this.trails_selected = false;
            this.parking_selected = true;
            this.shuttles_selected = false;
            this.entrances_selected = false;
        },
        shuttlesSelected: function(){
            this.trails_selected = false;
            this.parking_selected = false;
            this.shuttles_selected = true;
            this.entrances_selected = false;
        },
        entrancesSelected: function(){
            this.trails_selected = false;
            this.parking_selected = false;
            this.shuttles_selected = false;
            this.entrances_selected = true;
        },
        homeSelected: function() {
            this.trails_selected = false;
            this.parking_selected = false;
            this.shuttles_selected = false;
            this.entrances_selected = false;
        },
        popDetailed: function(){
            this.currentPage = "popDetailed";
            this.popDetailedStops();
        },
        parkDetailed: function(){
            this.currentPage = "parkDetailed";
        },
        shuttleDetailed: function(){
            this.currentPage = "shuttleDetailed";
        },
        entranceDetailed: function(){
            this.currentPage = "entranceDetailed";
        },
        backToHomeButton: function(){
            this.currentPage = "main";
        },
        backToTrails: function(){
            this.currentPage = "trailsMain";
        },
        backToParking: function(){
            this.currentPage = "parkingMain";
        },
        backToShuttles: function(){
            this.currentPage = "shuttleMain";
        },
        backToEntrances: function(){
            this.currentPage = "entranceMain";
        },
        changeToTrails: function(){
            this.currentPage = "trailsMain";
            console.log("trails clicked");
        },
        changeToMain: function(){
            this.currentPage = "main";
        },
        changeToParking: function(){
            this.currentPage = "parkingMain";
        },
        changeToShuttle: function(){
            this.currentPage = "shuttleMain";
        },
        changeToEntrance: function(){
            this.currentPage = "entranceMain";
        },
        svgCircleClicked: function(){
            console.log("svg clicked");
            if (this.svgNotClicked){
                this.svgNotClicked = false;
                this.svgClicked = true;
            }else{
                this.svgNotClicked = true;
                this.svgClicked = false;
            }
        },
        
        setStop: function(id, radius, stop){
            var c = document.getElementById(id);
            console.log(c);
            c.className = "background";
            var stopVal = Math.PI * radius * 2 * (stop/10);
            c.setAttribute("stroke-dasharray", stopVal + ", 3000");
            c.setAttribute("stroke-dashoffset", stopVal);
            c.className = "overlayLine";
        },

        randomStops: function(){
            this.setStop("entranceLine", 40, 5);
            this.setStop("shuttleLine", 60, 5);
            this.setStop("parkingLine", 80, 5);
            this.setStop("trailsLine", 100, 5);
            this.setStop("kayentaLine", 40, 5);
            this.setStop("parusLine", 60, 5);
            this.setStop("riverLine", 80, 5);
            this.setStop("angelsLine", 100, 5);
            this.setStop("zionLine", 80, 5);
            this.setStop("springLine", 100, 5);
            this.setStop("w1", 105, 5);
            this.setStop("w2", 105, 5);
            this.setStop("w3", 105, 5);
            this.setStop("w4", 105, 5);
            this.setStop("w5", 105, 5);
            this.setStop("w6", 105, 5);
            this.setStop("w7", 105, 5);
            this.setStop("w8", 105, 5);
            this.setStop("w9", 105, 5);
            this.setStop("w10", 105, 5);
            this.setStop("w11", 105, 5);
            this.setStop("w12", 105, 5);
            this.setStop("w13", 105, 5);
            this.setStop("w14", 105, 5);
            this.setStop("w15", 105, 5);
            this.setStop("w16", 105, 5);
            this.setStop("w17", 105, 5);
            this.setStop("w18", 105, 5);
            this.setStop("w19", 105, 5);
            this.setStop("w20", 105, 5);
            this.setStop("w21", 105, 5);
            this.setStop("w22", 105, 5);
            this.setStop("w23", 105, 5);
            this.setStop("w24", 105, 5);
            this.setStop("w25", 105, 5);
            this.setStop("w26", 105, 5);
            this.setStop("w27", 105, 5);
            this.setStop("w28", 105, 5);
        },
        getTitleColor: function() {
            switch(this.currentPage) {
                case 'parkingMain': this.titleColor = '#507282'; break;
                case 'shuttleMain': this.titleColor = '#B25538'; break;
                case 'entranceMain': this.titleColor = '#C9AC68'; break;
                default: this.titleColor = '#7E8959' //covers main page and if err.
            }
        },
        setTabImage: function() {
            this.resetTabImages();
            switch(this.currentPage){
                case 'main'        : this.homeTabImage     = './icons/home_green.svg'; break;
                case 'trailsMain'  : this.trailsTabImage   = './icons/trail_solid_green.svg'; break;
                case 'parkingMain' : this.parkingTabImage  = './icons/parking_solid_blue.svg'; break;
                case 'shuttleMain' : this.shuttleTabImage  = './icons/zion_shuttle_solid_red.svg'; break;
                case 'entranceMain': this.entranceTabImage = './icons/kolob_solid_yellow.svg'; break;
            }
        },
        resetTabImages: function() {
            this.homeTabImage = './icons/home_outline_green.svg';
            this.trailsTabImage = './icons/trails_outline_green.svg';
            this.parkingTabImage = './icons/parking_outline_blue.svg';
            this.shuttleTabImage = './icons/zion_shuttle_outline_red.svg';
            this.entranceTabImage = './icons/kolob_outline_yellow.svg';
        }

    },
    mounted() {
        this.getTodaysDate();
        this.getTitleColor();
        //this.randomStops();
    }
        
});


// THIS SECTION NEEDED TO REGISTER SERVICE WORKER //
window.onload = () => {
    'use strict';
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service-worker.js');
    }
};

