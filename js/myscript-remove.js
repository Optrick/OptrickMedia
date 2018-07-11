(function() {




    document.querySelector('.grid-remove').addEventListener('click', function(e) {
        if(e.target.tagName === 'IMG') {
            var howmany = this.querySelectorAll('li').length;
            if (howmany > 1) {
                var removeTarget = e.target.parentNode;
                removeTarget.parentNode.removeChild(removeTarget);
            }else {
                var photoTitle = e.target.alt;
                document.querySelector('#color p').innerHTML = "<p>You don't have choice anymore! <br>" + photoTitle + "</p>"
            }   //howmany
        }   // check to see that IMg is clicked
    }, false); //how the event is register (bubbling)


})(); //self executing function