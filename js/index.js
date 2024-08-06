document.addEventListener('DOMContentLoaded', function() {
    var firstBtn = document.getElementById("buttonOne");
    var secondBtn = document.getElementById("buttonTwo");
    var firstBox = document.getElementById("firstBox");
    var secondBox = document.getElementById("secondBox");

    firstBtn.addEventListener('click', function(event) {
        event.stopPropagation(); 
        showOnlyOneBox(firstBox);
    });

    secondBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        showOnlyOneBox(secondBox);
    });

    document.addEventListener('click', function(event) {
        // Hide the first box if visible and clicked outside
        if (!firstBox.classList.contains('hide') && !firstBox.contains(event.target) && event.target !== firstBtn )  {
            firstBox.classList.add('hide');
        }

        // Hide the second box if visible and clicked outside
        if (!secondBox.classList.contains('hide') && !secondBox.contains(event.target) && event.target !== secondBtn) {
            secondBox.classList.add('hide');
        }
    });

    // Function to show only one box at a time
    function showOnlyOneBox(boxToShow) {
        // Hide both boxes
        firstBox.classList.add('hide');
        secondBox.classList.add('hide');

        // Show the selected box
        boxToShow.classList.remove('hide');
    }
});