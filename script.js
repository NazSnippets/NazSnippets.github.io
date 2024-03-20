fetch("database.json")
  .then((response) => response.json())
  .then((db) => {
    let data = db.sort(function (a, b) {
      return b.score - a.score;
    });

    rankWinner(data);
    rankOthers(data);
  })
  .catch((error) => {
    console.error("Error loading data:", error);
  });

//////////////////////////////////

function rankWinner(data_local) {
  document.getElementById("img_0").src = data_local[0].dp_link;
  document.getElementById("name_0").innerText = data_local[0].name;
  document.getElementById("score_0").innerText = data_local[0].score;
}

function rankOthers(data_local) {
  for (let i = 1; i < data_local.length; i++) {
    let htmlcard = `
    <div class="box">
    <p class="rank">#${i + 1}</p>
    <div class="card card_${i}">
        <img src="${
          data_local[i].dp_link
        }" style="overflow: hidden; margin: 3px; float: left;height: 100px; width: 85px; border-radius: 20px;">
        <div class="card_content">
            <center>
                <div class="studentName name_${i}">${data_local[i].name}</div>
                <div class="studentScore score_${i}">${
      data_local[i].score
    }</div>
            </center>
        </div>
    </div>
</div>    
    `;
    document.getElementById("ranking").innerHTML += htmlcard;
  }
}
