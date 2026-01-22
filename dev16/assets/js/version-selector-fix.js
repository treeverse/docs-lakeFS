document.addEventListener('DOMContentLoaded', function() {
  var select = document.getElementById('version-selector');
  if (select) {
    var container = document.getElementById('version-selector-container');
    if (container) {
      container.appendChild(select);
    }
  }
});