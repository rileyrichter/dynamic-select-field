// On document ready, let's fetch some data
window.addEventListener("DOMContentLoaded", (event) => {
  const handleError = (response) => {
    if (!response.ok) {
      throw Error(` ${response.status} ${response.statusText}`);
    } else {
      return response.json();
    }
  }; //handler function that throws any encountered error

  fetch("https://v1.nocodeapi.com/rileyrichter/webflow/NnKUjAGJbxMrlPle")
    .then(handleError) // skips to .catch if error is thrown
    .then((data) => {
      data.items
        .forEach((item) => {
          let x = document.getElementById("category");
          var option = document.createElement("option");
          option.text = item.name;
          option.value = item._id;
          x.add(option);
          let id = item._id;
          let name = item.name;
        })
        .catch(function writeError(err) {
          // catches the error and logs it
        })
        .finally(() => {
          // removes the loading element
        });
    });
});
