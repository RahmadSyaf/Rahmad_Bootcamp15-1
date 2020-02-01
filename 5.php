<?php
function print_square($row)
{
  for ($i = 1; $i <= $row; $i++) {
    for ($j = 1; $j <= $row; $j++) {
      if (
        $i == 1 || $i == $row ||
        $j == 1 || $j == $row
      )
        print("*");
      else
        print("&nbsp&nbsp");
    }
    echo "<br>";
  }
}
print_square(3);



// Sumber ilmu
// https://www.codepolitan.com/mencetak-beragam-pola-dengan-konsep-perulangan-1
