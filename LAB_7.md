The problem I chose to work on was temperature conversion. <br>
<img src= "https://user-images.githubusercontent.com/70915926/113604772-b62ed680-9613-11eb-9ab7-dc23cc039ca3.png" width="70%"/>


For this assignment I reviewed the lecture slides and watched the lecture video as well. I also googled some scheme basics for clarification on certain topics and used [this website.](https://courses.cs.washington.edu/courses/cse341/03wi/scheme/basics.html) <br>

For the formulas I googled the temperature conversion for celsius to farenheit. The equation is (0°C × 9/5) + 32 = 32°F. In scheme the formula the way I implemented it reads like this: add, the result of multiplying the number inputed with the division of the numbers 9 and 5, with the number 32. 

The equation for converting fahrenheit to celsius is (32°F − 32) × 5/9 = 0°C. In scheme the formula reads like this: multiply, the result of subtracting the number inputed with 32, with the division of the numbers 5 and 9.

Although I could've used the decimal 1.8 in the formula for converting celsius to fahrenheit instead of 9/5, the formula for converting fahrenheit to celsius uses 5/9 and that is a repeating decimal so I used the fraction to keep things simple.

Here are the outputs for several temperatures. <br>
<img src= "https://user-images.githubusercontent.com/70915926/113605200-51c04700-9614-11eb-9266-cfc784f41285.png" width="90%"/>
