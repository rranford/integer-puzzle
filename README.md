# integer-puzzle
Node.js integer puzzle

Commandline application to take numeric input (N) and output a table of prime number.

Dependencies
------------
[Node] [NodeDownload]

Please note this application was developed on Windows 10

Install and Run
---------------

**Install**

run node.js command prompt terminal

clone this repo 

> git clone https://github.com/rranford/integer-puzzle.git

> npm install

**Run Tests**

To run test and watch for file modifications on the root whilst developing run the following command in the node.js command prompt terminal

> node node_modules\jasmine-node\bin\jasmine-node spec --autotest --watch .

**Run application**

To start:

> node main.js

To exit:

>"Ctrl+C"

Example output
--------------
<pre>
|      |    2 |    3 |    5 |
|    2 |    4 |    6 |   10 |
|    3 |    6 |    9 |   15 |
|    5 |   10 |   15 |   25 |
</pre>


Limitations and sweet spots
---------------------------

**Pleased With**
 - It runs
 - I stuck to test first
 - I ran the watch the whole time I was developing so saw immediate results
 

**Given more time / in hindsight**
 - Got in a hole with the cli testing, with more time, more experience I'd have tested that all and had all the console interaction in a serperate module
 - I'd may be start with the core functionality, the calculator, and provide user interaction later
 - This is my first project in node.js, I used this because is seemed the simplist way to get a working env for reproducible results, but the side effect of that has been a learning curve on the coding/testing side of things. Its been a great learning opportunity.

**General Comment**
 - Well I was aiming to implement a simple method to calculate the prime numbers one by one initially, getting the testing secure for that, this would have given me the opportunity to refactor the resulting function to make the algorithm work more efficiently for larger numbers.


License
-------

MIT

   [NodeDownload]: <https://nodejs.org/en/download/>
    
