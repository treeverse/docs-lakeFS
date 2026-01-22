document.addEventListener('DOMContentLoaded', function() {
  console.log("@@@@@@@ INITIATED ADDING VERSION SELECTOR @@@@@@@");
  function moveVersionSelector() {
    console.log("11111111")
    var select = document.getElementById('version-selector');
    console.log("222222 ")
    if (select) {
      console.log("3333 SELECT!")
      var container = document.getElementById('version-selector-container');
      if (container && !container.contains(select)) {
        console.log("4444 CONTAINER!")
        container.appendChild(select);
      }
      console.log("5555 DONE!")
    } else {
      console.log("6666 NO SELECT, RETRYING...")
      // Retry if not found yet
      setTimeout(moveVersionSelector, 100);
    }
    console.log("7777 EXITING");
  }
  console.log("--- runn...")
  moveVersionSelector();
});
