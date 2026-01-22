document.addEventListener('DOMContentLoaded', function() {
  var select = document.getElementById('version-selector');
  if (select) {
    fetch('/versions.json')
      .then(response => response.json())
      .then(versions => {
        versions.forEach(version => {
          var option = document.createElement('option');
          option.value = version.version;
          option.textContent = version.title;
          if (version.aliases && version.aliases.includes('latest')) {
            option.selected = true; // or check current URL
          }
          select.appendChild(option);
        });
        select.addEventListener('change', function() {
          var selectedVersion = select.value;
          var currentPath = window.location.pathname;
          var newUrl = '/' + selectedVersion + currentPath;
          window.location.href = newUrl;
        });
      })
      .catch(err => console.error('Failed to load versions.json', err));
  }
});
