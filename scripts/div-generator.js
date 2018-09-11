(function () {    
    let counter = 0;
    const containerElement = document.querySelector('#dynamic-container');
    const counterElement = document.querySelector('#generator-counter');    

    function genenerateElement() {
        var aDiv = document.createElement('div');
        counter ++;
        aDiv.innerText = 'Div no.: ' + counter;
        aDiv.id = 'elemnet_'  + counter;
        containerElement.appendChild(aDiv);
    }
    
    function genenerateElements() {
        for (let i = 0; i < counterElement.value; i++) {
            genenerateElement();
        }
    }

    function clearElements() {
        containerElement.innerHTML = '';
        counter = 0;
    }

    document.getElementById("generator-button").addEventListener("click", genenerateElements);
    document.getElementById("clear-button").addEventListener("click", clearElements);
})();