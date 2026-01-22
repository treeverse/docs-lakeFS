document.addEventListener('DOMContentLoaded', function() {
  console.log('Version selector script loaded');
  var select = document.getElementById('version-selector');
  console.log('Select element:', select);
  if (select) {
    console.log('Fetching /versions.json');
    fetch('/versions.json')
      .then(response => {
        console.log('Fetch response status:', response.status);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(versions => {
        console.log('Versions loaded:', versions);
        versions.forEach(version => {
          console.log('Adding version:', version);
          var option = document.createElement('option');
          option.value = version.version;
          option.textContent = version.title;
          if (version.aliases && version.aliases.includes('latest')) {
            option.selected = true;
          }
          select.appendChild(option);
        });
        console.log('Options added, adding event listener');
        select.addEventListener('change', function() {
          var selectedVersion = select.value;
          var currentPath = window.location.pathname;
          var newUrl = '/' + selectedVersion + currentPath;
          console.log('Redirecting to:', newUrl);
          window.location.href = newUrl;
        });
        console.log('Event listener added');
      })
      .catch(err => {
        console.error('Failed to load versions.json', err);
      });
  } else {
    console.log('Select element not found');
  }
});
