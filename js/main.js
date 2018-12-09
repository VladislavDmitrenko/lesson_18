
var sample = ['Lorem ipsum', 'Blanditiis, eaque', 'Iure, quis', 'Iure, voluptatum','Maxime, veniam', 'Inventore, a', 'Eius, qui', 'Accusantium, amet', 'Nemo,eos', 'Vero, quos'] // тот же самый массив

function filterItems(query) {
  return sample.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}
console.log(filterItems('o'));




function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();
  var hours = date.getHours();
  var minutes = date.getMinutes();

  return year + ' ' + monthNames[monthIndex] + ' ' + day + ' ' + ' ' + hours + ' hours ' + minutes + ' minutes';
}

console.log(formatDate(new Date()));
 
    function timenow(date){
    var now = new Date(), 
    ampm = 'am', 
    h = now.getHours(), 
    m = now.getMinutes(), 
    s = now.getSeconds();
    if(h >= 12){
        if(h > 12) h -= 12;
        ampm = 'pm';
    }

    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;
    return now.toLocaleDateString() + ' ' + h + ':' + m + ':' + s + ' ' + ampm;
}
console.log(timenow(new Date()));


