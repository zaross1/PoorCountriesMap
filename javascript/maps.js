/*
Jason Mortensen
jasonmortensen@my.smccd.edu
CIS 114 OL
Final Programs
maps.js
12/17/2015
*/

// AIzaSyB_QSEKqMlbgwz8CFjbvHvmaOY7axMLiXw    -- Google developer api


var theMap = { // global object used to store map logic.


  // countries and country data
  countries: {
    "names": [{
      name: 'Congo',
      coor: {
        lat: -4,
        lng: 21.7
      },
      data: '<iframe id=\"theFrame\" name=\"theFrame\" frameBorder=\'no\' src=\"http://databank.worldbank.org/data/embed/Congo/id/3a5ae6a8?ti=n&ds=n&dd=y&tb=y&sh=y&dw=y&pr=y&inf=y&zm=y&theme=darkGrey&bdrClr=rgb(68,68,68)&bdrStyle=solid&bdrWidth=0px&exptypes=Excel,CSV,TabbedTxt\" width= \"350\"  height=\"350\"></iframe>'
    }, {
      name: "Malawi",
      coor: {
        lat: -13,
        lng: 34
      },
      data: '<iframe id=\"theFrame\" frameBorder=\'no\' src=\"http://databank.worldbank.org/data/embed/Malawi/id/62458cc2?ti=n&ds=n&dd=y&tb=y&sh=y&dw=y&pr=y&inf=y&zm=y&theme=darkGrey&bdrClr=rgb(68,68,68)&bdrStyle=solid&bdrWidth=0px&exptypes=Excel,CSV,TabbedTxt\" width= \"350\"  height=\"350\"></iframe>'
    }, {
      name: "Liberia",
      coor: {
        lat: 6.5,
        lng: -9.5
      },
      data: '<iframe frameBorder=\"no\" src=\"http://databank.worldbank.org/data/embed/Liberia/id/73e84408?ti=n&ds=n&dd=y&tb=y&sh=y&dw=y&pr=y&inf=y&zm=y&theme=darkGrey&bdrClr=rgb(68,68,68)&bdrStyle=solid&bdrWidth=0px&exptypes=Excel,CSV,TabbedTxt\" width= \"350\"  height=\"350\"></iframe>'
    }, {
      name: 'Burundi',
      coor: {
        lat: -3.3,
        lng: 30
      },
      data: '<iframe frameBorder=\'no\' src=\"http://databank.worldbank.org/data/embed/Burundi/id/60e3d346?ti=n&ds=n&dd=y&tb=y&sh=y&dw=y&pr=y&inf=y&zm=y&theme=darkGrey&bdrClr=rgb(68,68,68)&bdrStyle=solid&bdrWidth=0px&exptypes=Excel,CSV,TabbedTxt\" width= \"350\"  height=\"350\"></iframe>'
    }, {
      name: 'Niger',
      coor: {
        lat: 17.5,
        lng: 8
      },
      data: '<iframe frameBorder=\'no\' src=\"http://databank.worldbank.org/data/embed/nigerr/id/922a45e3?ti=n&ds=n&dd=y&tb=y&sh=y&dw=y&pr=y&inf=y&zm=y&theme=darkGrey&bdrClr=rgb(68,68,68)&bdrStyle=solid&bdrWidth=0px&exptypes=Excel,CSV,TabbedTxt\" width= \"350\"  height=\"350\"></iframe>'
    }, {
      name: "Mozambique",
      coor: {
        lat: -18.5,
        lng: 35
      },
      data: '<iframe frameBorder=\'no\' src=\"http://databank.worldbank.org/data/embed/Mozamb/id/c1b97202?ti=n&ds=n&dd=y&tb=y&sh=y&dw=y&pr=y&inf=y&zm=y&theme=darkGrey&bdrClr=rgb(68,68,68)&bdrStyle=solid&bdrWidth=0px&exptypes=Excel,CSV,TabbedTxt\" width= \"350\"  height=\"350\"></iframe>'
    }, {
      name: "Eritrea",
      coor: {
        lat: 15,
        lng: 39.5
      },
      data: '<iframe frameBorder=\'no\' src=\"http://databank.worldbank.org/data/embed/Eritrea/id/7e6c9805?ti=n&ds=n&dd=y&tb=y&sh=y&dw=y&pr=y&inf=y&zm=y&theme=darkGrey&bdrClr=rgb(68,68,68)&bdrStyle=solid&bdrWidth=0px&exptypes=Excel,CSV,TabbedTxt\" width= \"350\"  height=\"350\"></iframe>'
    }, {
      name: "Guinea",
      coor: {
        lat: 10,
        lng: -10
      },
      data: '<iframe frameBorder=\'no\' src=\"http://databank.worldbank.org/data/embed/Guinea/id/90c88c67?ti=n&ds=n&dd=y&tb=y&sh=y&dw=y&pr=y&inf=y&zm=y&theme=darkGrey&bdrClr=rgb(68,68,68)&bdrStyle=solid&bdrWidth=0px&exptypes=Excel,CSV,TabbedTxt\" width= \"350\"  height=\"350\"></iframe>'
    }, {
      name: "Madagascar",
      coor: {
        lat: -19,
        lng: 47
      },
      data: '<iframe frameBorder=\'no\' src=\"http://databank.worldbank.org/data/embed/Madagascar/id/b3667dad?ti=n&ds=n&dd=y&tb=y&sh=y&dw=y&pr=y&inf=y&zm=y&theme=darkGrey&bdrClr=rgb(68,68,68)&bdrStyle=solid&bdrWidth=0px&exptypes=Excel,CSV,TabbedTxt\" width= \"350\"  height=\"350\" ></iframe>'
    }]
  },

  initMap: function() { // initializes map and map-related logic
    'use strict';
    var begin = new google.maps.Map(document.getElementById('map'), { // creates a google map.
      center: {
        lat: 50,
        lng: 50
      }, // center of map, in terms of longitude and latitude
      zoom: 4 // zoom for map
    });
    var coordinates = {
      lat: 80,
      lng: 80
    }; // set of coordinates
    begin.panTo(coordinates); // sets long and lat of map to coordinates values

    function changeLoc(e) { // moves the map to new coordinates when country links are clicked, sets handlers for data table display.


      var country = e.target.id; // gets a reference to the country which was clicked on (changeLoc is called every time a country is clicked on)
      for (var j = 0, k = theMap.countries.names.length; j < k; j++) { // loops through country names

        if (theMap.countries.names[j].name == country) { // sets the coordinates of the map to the country clicked on.
          coordinates = theMap.countries.names[j].coor;

        }
      }


      var marker = new google.maps.Marker({ // creates a new marker for the country that was clicked on
        position: coordinates,
        map: begin,
        title: country,
      });

      marker.addListener('click', function() { // adds a listener to the marker which calls displayInfo
        displayInfo();
      });
      begin.panTo(coordinates); // sets google map position to the coordinates of the country clicked on

      function displayInfo() { // if the google map marker is clicked, this function is called, displaying country info in table.
        'use strict';

        var theData = null; // where the data will go
        console.log(country);
        for (var h = 0, k = theMap.countries.names.length; h < k; h++) { // loops through country names
          if (theMap.countries.names[h].name == country) { // assigns country data to theData
            theData = theMap.countries.names[h].data;

          }
        }

        $('#results').html(theData); // displays map data on html page


      }



    }
    for (var i = 0, n = theMap.countries.names.length; i < n; i++) { // assigns event handlers for all the country names
      $('#' + theMap.countries.names[i].name).click(changeLoc);
    }


  }

};

$(function() {
  'use strict';
  var info = null;
  var html = null;

  // country names, template data
  var countries = {
    "names": [{
      name: 'Congo'
    }, {
      name: "Malawi"
    }, {
      name: "Liberia"
    }, {
      name: 'Burundi'
    }, {
      name: 'Niger'
    }, {
      name: "Mozambique"
    }, {
      name: "Eritrea"
    }, {
      name: "Guinea"
    }, {
      name: "Madagascar"
    }]
  };
  // template
  info = "<ul>{{#names}}<li><a href='#' id={{name}}>{{name}}</a></li>{{/names}}</ul>";
  // converts template data to html
  html = Mustache.to_html(info, countries);

  $("#poor").html(html); // lists countries.










});
