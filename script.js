function myButtonClickHandler(event) {
    var mySelect = document.getElementById('mySelect');
    var value = mySelect.value;
    document.location.href = "op" + value + ".html";
  }
