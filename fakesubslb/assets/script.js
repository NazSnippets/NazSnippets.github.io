
var c = 1;
var lol = []

for (var l = 1; l <= 3; l++) {
  var htmlrow = `<div class="row_${l} row"></div>`;
  $('.counters').append(htmlrow);
    for (var t = 1; t <= 9; t++) {
      let number;
      if(c.toString().length == 1) {
          number = `<div class="cnb">0${c}</div>`
      } else {
            number = `<div class="cnb">${c}</div>`
      }

      var htmlcard = `<div class="channel_${c} card" id="card_thing_${c}">
      ${number}
      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" class="cimg">
      <div class="chnam" id="name_${c}">Loading</div>
      <div class="subscriberCount odometer" id="count_${c}">0</div>
      </div>`;
      $('.row_'+l).append(htmlcard);
      c += 1;
    }
}

function updateData(data) {
  for (var l = 1; l <= 28; l++) {
  
  document.getElementById(`name_${l}`).innerText = data[l].name;
  document.getElementById(`count_${l}`).innerText = data[l].clicks;
}
}


function update(){
  $.getJSON(`http://localhost:3000/api`,(data)=>{

      data.sort(function(a,b){return b.clicks - a.clicks});

      
        updateData(data)
  });

}

update()
setInterval(() => {
  update()
}, 6000);