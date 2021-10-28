var request = new XMLHttpRequest();

// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
// request.onload = function () {
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response)

//   if (request.status >= 200 && request.status < 400) {
//     data.forEach((movie) => {
//       console.log(movie.title)
//     })
//   } else {
//     console.log('error')
//   }
// }

request.send();

function getCreatorFromSearch() {
  let searchValue = document.getElementById("searchlink").value;
  let creator_name = searchValue.split("/")[3];
  window.sessionStorage.setItem("creator_name", creator_name);
  document.search_box.action = "CreatorPage.html";
}

function set_creator_name() {
  //alert(sessionStorage.getItem('creator_name'))
  document.getElementById("creator_name").innerHTML =
    sessionStorage.getItem("creator_name");
}

function showBets() {
  var x = document.getElementById("live");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
