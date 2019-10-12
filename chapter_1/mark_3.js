function printChess(height, width) {
  let line = ''
  for (i = 0; i < height; i++) {
    for (j = 0; j < width; j++) {
      if (i % 2 == 0) {

        if (j % 2 == 0) {
          line = line + "#"
        } else {
          line = line + " "
        }

      } else {
        if (j % 2 == 0) {
          line = line + " "
        } else {
          line = line + "#"
        }

      }
    }
    line = line + "\n"
  }
  console.log(line);

}

printChess(8, 8)