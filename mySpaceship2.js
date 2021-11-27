function my_spaceship(directions) {
    var directions_length = directions.length;
    var upDirection = [];
    var rightDirection = [];
    var downDirection = [];
    var leftDirection = [];
    var endCoordinatesAndDirection = {
      x: 0,
      y: 0,
      direction: 'up'
    };
    // Arrays with possible directions
    // Note: there are 4 possible directions Left, Right, Up, Down. 
    for (var i = - 4 * directions_length; i <= 4 * directions_length; i += 4) {
      upDirection.push(i);
    }
    for (var i = -3 - 4 * directions_length; i <= 1 + 4 * directions_length; i += 4) {
      rightDirection.push(i);
    }
    for (var i = -2 - 4 * directions_length; i <= 2 + 4 * directions_length; i += 4) {
      downDirection.push(i);
    }
    for (var i = -1 - 4 * directions_length; i <= 3 + 4 * directions_length; i += 4) {
      leftDirection.push(i);
    }
    // Conditions to determine current direction
    var currentDirection = 0;
    for (var i = 0; i < directions.length; i++) {
      if (directions[i] === 'R') {
        currentDirection++;
      } else if (directions[i] === 'L') {
        currentDirection--;
      } else {
        // else it's Up or Down
        rocketAdvance(currentDirection);
      }
    }
  
    function rocketAdvance(currentDirection) {
    // These conditions determine the Advance of the rocket
      if (upDirection.includes(currentDirection)) {
        endCoordinatesAndDirection.y--;
      } else if (rightDirection.includes(currentDirection)) {
        endCoordinatesAndDirection.x++;
      } else if (downDirection.includes(currentDirection)) {
        endCoordinatesAndDirection.y++;
      } else if (leftDirection.includes(currentDirection)) {
        endCoordinatesAndDirection.x--;
      }
    }
    // This determines the final direction of the rocket
    if (upDirection.includes(currentDirection)) {
      endCoordinatesAndDirection.direction = 'up';
    } else if (rightDirection.includes(currentDirection)) {
      endCoordinatesAndDirection.direction = 'right';
    } else if (downDirection.includes(currentDirection)) {
      endCoordinatesAndDirection.direction = 'down';
    } else if (leftDirection.includes(currentDirection)) {
      endCoordinatesAndDirection.direction = 'left';
    }
   
    return '{x:' + endCoordinatesAndDirection.x + ', y:' + endCoordinatesAndDirection.y + ;
  }
  //console.log(my_spaceship('RAARA'));
