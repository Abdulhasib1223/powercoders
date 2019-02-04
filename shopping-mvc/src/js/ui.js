/**
 * Create the controller to run the application.
 */
function domContentLoaded() {
  new Controller();
}

if (document.readyState === 'loading') {
  //dom content loaded has not fired yet.
  document.addEventListener('DOMContentLoaded', function () {
    domContentLoaded();
  })
} else {
  domContentLoaded();
}
