const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

function showPanel(panelIndex, colorCode) {
    tabButtons.forEach(function(node) {
        node.style.backgroundColor = '';
        node.classList.remove('active');
    });
    tabButtons[panelIndex].style.backgroundColor = colorCode;
    tabButtons[panelIndex].classList.add('active');

    tabPanels.forEach(function(node) {
        node.style.display = 'none';
    });
    tabPanels[panelIndex].style.display = 'block';
    tabPanels[panelIndex].classList.add('active');
}

showPanel(0, '#ccc'); // Show the first tab by default

tabButtons.forEach(function(node, index) {
    node.addEventListener('click', function() {
        showPanel(index, '#ccc');
    });
});