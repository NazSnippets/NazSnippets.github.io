
var c = 1;
var lol = []

for (var l = 1; l <= 3; l++) {
  var htmlrow = `<div class="row_${l} row"></div>`;
  $('.counters').append(htmlrow);
    for (var t = 1; t <= 10; t++) {
      let number;
      if(c.toString().length == 1) {
          number = `<div class="cnb">0${c}</div>`
      } else {
            number = `<div class="cnb">${c}</div>`
      }

      var htmlcard = `<div class="channel_${c} card" id="card_thing_${c}">
      ${number}
      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" class="cimg" id="img_${c}">
      <div class="chnam" id="name_${c}">Loading</div>
      <div class="subscriberCount odometer" id="count_${c}">0</div>
      </div>`;
      $('.row_'+l).append(htmlcard);
      c += 1;
    }
}

function updateData(data) {
  for (var l = 1; l <= 30; l++) {
  
  document.getElementById(`name_${l}`).innerText = data[l-1].name || "error";
  document.getElementById(`count_${l}`).innerText = data[l-1].clicks || "80085";
  document.getElementById(`img_${l}`).src = data[l-1].img || "" ;
}
}
function update(){
  $.getJSON('https://864f6096-6d82-402a-8bc2-fb91f19ecf42-00-32w787p1fps9i.picard.replit.dev/api',(data)=>{

      data.sort(function(a,b){return b.clicks - a.clicks});
        updateData(data)
  });
}

update()
setInterval(() => {
  update()
}, 2500);