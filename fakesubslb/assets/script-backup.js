
var c = 1;
var lol = []

for (var l = 1; l <= 5; l++) {
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
      <img src="https://yt3.ggpht.com/d9a59mphNqtkIMto8r3wv2STH9NcbM3n3wk-xsN8VN_Z5mm777ietx5dwvW8zUl0Rh-m7Z07=s176-c-k-c0x00ffffff-no-rj-mo" alt="" class="cimg">
      <div class="chnam">Loading</div>
      <div class="subscriberCount odometer">0</div>
      </div>`;
      $('.row_'+l).append(htmlcard);
      c += 1;
    }
}

function random(min, max){
  return Math.floor(Math.random()* (max-min) + min);
}

function updateData(q, data) {
  setTimeout(function () { 
    var cnb = q+1;


    $(".channel_"+cnb+" .cimg").attr("src",data.result[q].image);
    $(".channel_"+cnb+" .chnam").html(data.result[q].name);
    $(".channel_"+cnb+" .subscriberCount").html(Math.floor(data.result[q].SubscriberCount));


    if (lol[q] - data.result[q].SubscriberCount >= 0.5) {
      document.getElementById("card_thing_"+cnb+"").style.backgroundColor = "red";
      console.log("red")
      setTimeout(reset, 500)
    }
    if (lol[q] - data.result[q].SubscriberCount <= -0.5) {
      document.getElementById("card_thing_"+cnb+"").style.backgroundColor = "green";
      console.log("green")
      setTimeout(reset, 500)
    }

    setTimeout(idkpopdelay, 1000) 

    function idkpopdelay() {
      lol[q] = data.result[q].SubscriberCount
    }

function reset() {
  document.getElementById("card_thing_"+cnb+"").style.backgroundColor = "black";
}


    }, random(5 , 25)*1000);
}

function update(){
    $.getJSON("https://api.mixerno.space/api/youtube/estimated/all",(data)=>{

        data.result.sort(function(a,b){return b.SubscriberCount - a.SubscriberCount});

        for (var q = 0; q < 50; q++) {
          updateData(q, data)
        }
    });
}


update();
setInterval(update,10000);
setTimeout(function(){$('.loader').fadeOut(); $('.counters').fadeIn(1000);},1000)
setTimeout(function(){$('#loading').fadeOut(); $('.counters').fadeIn(1000);},1000)
