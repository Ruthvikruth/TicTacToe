This is a tic-tac-toe game developed using HTML, CSS and JS. The game play has two modes - a "VS Player" mode and "VS CPU" mode.

The individual files have individual purposes towards the successful working of the entire project.


-> index.html - The landing homepage where the player can choose his gameplay mode.

-> index.css - Styling for the index.html.

-> CPU.html - The frontend view for the user who choose the CPU game play mode.

-> TicTacToe.css - Styling the CPU.html and also Player.html.

-> CPU.js - Backend logic that makes the computer make a move when the player picks a grid in the box. It ensures
            to evaluate the proper working of the gamre. It also evaluates if the player or the CPU has won the game. Upon the 
            basis of win, it'll display the relevant statement. If none of the players have won and the grid is complete, it'll display
            as draw.
            
-> Player.html - The frontend part when the player chooses a "VS Player" mode. Almost similar to the appearance of CPU.html and the 
                 styling is enhanced by the TicTacToe.css.
                 
-> Player.js - The backend logic that changes the turn once a player makes a move. Just like in CPU.js, this file also ensures if there 
               is a win state or draw state during the game. 
