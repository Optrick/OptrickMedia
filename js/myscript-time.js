(function() {
"use strict";

document.addEventListener('DOMContentLoaded', function() {
  var curentTime = document.getElementById('current-time'),
      curentDate = document.getElementById('current-date');

  setInterval(function () {
    var d = new Date();

    var hours = d.getHours(),
        minutes = d.getMinutes(),
        month = formatMonth(d.getMonth()),
        date = d.getDate();

    if (hours === 0) {
      hours = 1;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    var sepClass = '';
    if (d.getSeconds() % 2 === 1) sepClass = 'trans';

    var sep = '<span class="' + sepClass + '">:</span>';

    curentTime.innerHTML = hours + sep + minutes;
    curentDate.textContent = 'Le ' + date + ' ' + month;
  }, 1000);

  function formatMonth(m) {
    m = parseInt(m, 10);

    if (m < 0) {
      m = 0;
    } else if (m > 11) {
      m = 11
    }
    var monthNames = [
      'Janvier', 'Février', 'Mars',
       'Avril', 'Mai', 'Juin', 'Juillet',
       'Aout', 'Septembre', 'Octobre',
       'Novembre', 'Décembre'
     ];
     return monthNames[m];
  }
});
})();
