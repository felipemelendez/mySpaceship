function my_spaceship(course) {

    var x = 0;
    var y = 0;
    var direction = 'up'; //starting point for ship

    i = 0;

    while (i < course.length) {
        if (course[i] === "R") {
            if (direction === 'up') ((direction) = 'right');
            else if (direction === 'right') ((direction) = 'down');
            else if (direction === 'down') ((direction) = 'left');
            else if (direction === 'left') ((direction) = 'up');
        };
        if (course[i] === "L") {
            if (direction === 'up') ((direction) = 'left');
            else if (direction === 'left') ((direction) = 'down');
            else if (direction === 'down') ((direction) = 'right');
            else if (direction === 'right') ((direction) = 'up');
        };
        if (course[i] === "A") {
            if (direction === 'up') (y--);
            else if (direction === 'right') (x++);
            else if (direction === 'down') (y++);
            else if (direction === 'left') (x--);
        };
        i++;
    };
    let position = "{x: " + x + ", y: " + y + ", direction: '" + direction +"'}";
    
    return position;
}

console.log(my_spaceship('RAALALL'));
