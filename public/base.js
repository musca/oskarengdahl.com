document.addEventListener("click", function (event) {
  if (event.target.matches(".hello")) {
    event.preventDefault()
    window.location.href = "mailto:" + event.target.innerHTML.split('').reverse().join('')
  }
}, false);

const selection = document.getSelection();

document.addEventListener('selectionchange', () => {
  if (selection.focusNode.data == "moc.lhadgnerakso@olleh") {
    const adress = selection.focusNode.data.split('').reverse().join('');
    const targetEl = document.querySelector(".hello");
    targetEl.innerHTML = adress;
    targetEl.href = "mailto:" + adress;
    targetEl.classList.remove("hello");
  }  
});