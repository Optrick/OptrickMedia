(function() {


    document.querySelector('img.preview').addEventListener('click', function(e) {
        var lowRes = e.target.src;
        var imgOverlay = document.querySelector('.overlay');
        var highRes = document.createElement('img');
        var theSpinner = document.createElement('img');

        imgOverlay.style.display = 'block';
        highRes.className = 'bgImg';
        highRes.src = lowRes.substr(0, lowRes.length-7) + '.jpg';
        imgOverlay.appendChild(highRes);

        theSpinner.className = 'spinner';
        theSpinner.src = 'img/hexagone.png';
        imgOverlay.appendChild(theSpinner);

        highRes.addEventListener('load', function() {
            theSpinner.parentNode.removeChild(theSpinner);
        });

        //remove the theOverlay if click 
        imgOverlay.addEventListener('click', function() {
            if(imgOverlay) {
                imgOverlay.parentNode.removeChild(imgOverlay);
            }
        }, false)
        
    }, false);


})(); //self executing function