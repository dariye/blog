'use strict';
function ready(fn) {
  if (document.readState != 'loading') {
    fn();
  }else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}


function timeDifference(rawTime) {
    var now = new Date();
    var time = new Date( rawTime );
    var diff = now - time;
    var days = Math.floor(diff / 1000 / 60 / (60 * 24));

    var date_diff = new Date( diff );
    var sDate = "";
    if (days !== 0) {
        var years = Math.floor( days / 365 );
        if (years !== 0) {
            sDate += years + " year";
            sDate += (years > 1) ? "s " : " ";
            days = days % 365;
        }

        var months = Math.floor( days / 30 );
        if (months !== 0 ) {
            sDate += months + " month";
            sDate += (months > 1) ? "s " : " ";
        } else if (years === 0) {
            sDate += days + " d "+ date_diff.getHours() + " h";
        }
      } else {
          sDate += date_diff.getHours() + " h " + date_diff.getMinutes() + " min";
      }
      return sDate;
        }

var app = function() {
  

  /*
   * Update time of post
   */

  var dates = document.getElementsByClassName('time-published');
  
  for(var i = 0; i < dates.length; i++){  
    var date = dates[i].innerText;
    var publishedAt = timeDifference(date);
    dates[i].innerText = publishedAt;
    dates[i].style.display = 'block';
  }
}

ready(app);
