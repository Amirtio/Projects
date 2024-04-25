function deleteSelectedOptions() {
  let selectElement = document.getElementById("options");
  let selectedOptions = [];
  for (let i = 0; i < selectElement.options.length; i++) {
    if (selectElement.options[i].selected) {
      selectedOptions.push(selectElement.options[i].value);
    }
  }

  fetch(url + "?id=" + selectedOptions[0], {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      selectedOptions.forEach((option) => {
        let optionElement = selectElement.querySelector(
          'option[value="' + option + '"]'
        );
        if (optionElement) {
          optionElement.remove();
        }
      });
      console.log("Options deleted successfully!");
      alert(data.message);
    })
    .catch((error) => {
      console.error("There was a problem with your fetch operation:", error);
    });
}
