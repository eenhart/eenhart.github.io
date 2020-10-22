function loadPageSponsors() {
    shuffle()
}


function shuffle() {
    var container = document.getElementById("sponsors");
    var elementsArray = Array.prototype.slice.call(container.getElementsByClassName('sponsor-tile'));
      elementsArray.forEach(function(element){
        container.removeChild(element);
    })
    shuffleArray(elementsArray);
    elementsArray.forEach(function(element){
    container.appendChild(element);
  })
  }
  
  function shuffleArray(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}