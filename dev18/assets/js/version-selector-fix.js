document.addEventListener('DOMContentLoaded', function() {
  function moveVersionSelector() {
    var select = document.getElementById('version-selector');
    if (select) {
      var container = document.getElementById('version-selector-container');
      if (container && !container.contains(select)) {
        container.appendChild(select);
      }
    } else {
      // Retry if not found yet
      setTimeout(moveVersionSelector, 100);
    }
  }
  moveVersionSelector();
});