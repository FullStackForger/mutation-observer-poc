(function () {
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    const containerElement = document.querySelector('#dynamic-container');
  
    const mutationObserver = new MutationObserver(function (mutations) {        
        console.log('----------------------------------------')
        console.log('added nodes: ', mutations.length)
        mutations.forEach(function (mutation) {            
            console.log('element id: ' + mutation.target.getAttribute('id'), mutation);
        });
    });

    mutationObserver.observe(containerElement, {
        attributes: true,
        childList: true,
        characterData: true
    });
})();