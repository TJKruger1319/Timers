function countDown(int) {
let intTimer = setInterval(function() {
        int--;
        if (int <= 0) {
            clearInterval(intTimer);
            console.log("DONE!")
        }
        else {
            console.log(int);
        }
            
    }, 1000);
}

function randomGame() {
    count = 1;
    let intTimer = setInterval(
        function() {
            int = Math.random();
            if (int > .75) {
                clearInterval(intTimer);
                console.log("It took " + count + " attempts.");
            } else {
                count++;
            }
        }
    )
}