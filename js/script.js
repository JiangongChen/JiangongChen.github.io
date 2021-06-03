function locationHashChanged() {
  $(".collapse").collapse('hide');
}

window.onhashchange = locationHashChanged;
