// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeEl = $('h2');

function showTime() {
  var hour = dayjs().get('hour');
  var minutes = dayjs().get('minutes');
  var seconds = dayjs().get('seconds');

  timeEl.text(`${hour} : ${minutes} : ${seconds}`);
  console.log(timeEl);
}


setInterval(showTime, 1000);




