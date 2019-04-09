function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function remove(id) {
  let elem = document.getElementById(id);
  return elem.parentNode.removeChild(elem);
}