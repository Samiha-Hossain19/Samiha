// Get the modal
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//category show hide
function showCategory() {
  var show = document.getElementById("category");
  if (show.style.display === "none") {
    show.style.display = "block";
  } else {
    show.style.display = "none";
  }
}

//form validation
function valiadateForm() {
  var title = document.getElementById("title").value;
  var url = document.getElementById("url").value;
  var category = document.getElementById("category").value;

  var urlPattern =
    /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.){1,}[a-zA-Z0-9-]+(\/.*)?$/;
  //conditions
  if (title == "") {
    alert("Please enter a title");
    return false;
  } else if (title.length > 30) {
    alert("Title must be less than 30 characters");
    return false;
  }

  if (url == "") {
    alert("Please enter a url");
    return false;
  } else if (!urlPattern.test(url)) {
    alert("Please enter valid url.");
  }

  if (category == "") {
    alert("Please enter a category");
    return false;
  }

  return true;
}
//show data
function showData() {
  var table;
  if (localStorage.getItem("table") == null) {
    table = [];
  } else {
    table = JSON.parse(localStorage.getItem("table"));
  }
  var html = "";
  table.forEach(function (element, index) {
    html += "<tr>";
    html += "<tr>" + element.category + "</tr>";
    html += "<tr>" + element.title + "</tr>";
    html += "<tr>" + element.url + "</tr>";
    html += "</tr>";
  });
  document.querySelector("#crudTable tbody").innerHTML = html;
}
document.onload = showData();
//Add Data
function AddData() {
  if (valiadateForm() == true) {
    var title = document.getElementById("title").value;
    var url = document.getElementById("url").value;
    var category = document.getElementById("category").value;

    var table;
    if (localStorage.getItem("table") == null) {
      table = [];
    } else {
      table = JSON.parse(localStorage.getItem("table"));
    }

    table.push({
      title: title,
      url: url,
      category: category,
    });
    localStorage.setItem("table", JSON.stringify(table));
    showData();
    document.getElementById("title").value = "";
    document.getElementById("url").value = "";
    document.getElementById("category").value = "";
  }
}
