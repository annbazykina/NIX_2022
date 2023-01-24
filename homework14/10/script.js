let btn = document.querySelector('.remove-button');
let panes = document.querySelectorAll('.pane');

for(let pane of panes) {
    pane.prepend(btn.cloneNode(true));
    pane.firstChild.onclick = () => {
        return pane.remove();
    };
}
btn.remove();





