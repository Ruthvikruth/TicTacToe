var grid = [1,2,3,4,5,6,7,8,9];
var turn = 'X';

function grid1()
{
    if(document.getElementById("item1").innerHTML == '')
    {
        grid[0] = turn;
        document.getElementById("item1").innerHTML = turn;
        turn_computer();
    }
}

function grid2()
{
    if(document.getElementById("item2").innerHTML == '')
    {
        grid[1] = turn;
        document.getElementById("item2").innerHTML = turn;
        chosen = 2;
        turn_computer();
    }
}

function grid3()
{
    if(document.getElementById("item3").innerHTML == '')
    {
        grid[2] = turn;
        document.getElementById("item3").innerHTML = turn;
        chosen = 3;
        turn_computer();
    }
}

function grid4()
{
    if(document.getElementById("item4").innerHTML == '')
    {
        grid[3] = turn;
        document.getElementById("item4").innerHTML = turn;
        chosen = 4;
        turn_computer();
    }
}

function grid5()
{
    if(document.getElementById("item5").innerHTML == '')
    {
        grid[4] = turn;
        document.getElementById("item5").innerHTML = turn;
        chosen = 5;
        turn_computer();
    }
}

function grid6()
{
    if(document.getElementById("item6").innerHTML == '')
    {
        grid[5] = turn;
        document.getElementById("item6").innerHTML = turn;
        chosen = 6;
        turn_computer();
    }
}

function grid7()
{
    if(document.getElementById("item7").innerHTML == '')
    {
        grid[6] = turn;
        document.getElementById("item7").innerHTML = turn;
        chosen = 7;
        turn_computer();
    }
}

function grid8()
{
    if(document.getElementById("item8").innerHTML == '')
    {
        grid[7] = turn;
        document.getElementById("item8").innerHTML = turn;
        chosen = 8;
        turn_computer();
    }
}

function grid9()
{
    if(document.getElementById("item9").innerHTML == '')
    {
        grid[8] = turn;
        document.getElementById("item9").innerHTML = turn;
        chosen = 9;
        turn_computer();
    }
}

function turn_computer()
{
    if(document.getElementById("turn").innerHTML == "Player X Turn")
    {
        document.getElementById("turn").innerHTML = 'Player O Turn';
        turn = 'O';
    }
    else if(document.getElementById("turn").innerHTML == "Player O Turn")
    {
        document.getElementById("turn").innerHTML = 'Player X Turn';
        turn ='X';
    }

    if((grid[0] == grid[1] && grid[1] == grid[2] && grid[2] == 'X') || (grid[3] == grid[4] && grid[4] == grid[5] && grid[5] == 'X') || (grid[6] == grid[7] && grid[7] == grid[8] && grid[8] == 'X') || (grid[0] == grid[3] && grid[3] == grid[6] && grid[6] == 'X') || (grid[1] == grid[4] && grid[4] == grid[7] && grid[7] == 'X') || (grid[2] == grid[5] && grid[5] == grid[8] && grid[8] == 'X') || (grid[0] == grid[4] && grid[4] == grid[8] && grid[8] == 'X') || (grid[2] == grid[4] && grid[4] == grid[6] && grid[6] == 'X') )
    {
        document.getElementById("turn").innerHTML = 'Player X Won';
        return;
    }
    if((grid[0] == grid[1] && grid[1] == grid[2] && grid[2] == 'O') || (grid[3] == grid[4] && grid[4] == grid[5] && grid[5] == 'O') || (grid[6] == grid[7] && grid[7] == grid[8] && grid[8] == 'O') || (grid[0] == grid[3] && grid[3] == grid[6] && grid[6] == 'O') || (grid[1] == grid[4] && grid[4] == grid[7] && grid[7] == 'O') || (grid[2] == grid[5] && grid[5] == grid[8] && grid[8] == 'O') || (grid[0] == grid[4] && grid[4] == grid[8] && grid[8] == 'O') || (grid[2] == grid[4] && grid[4] == grid[6] && grid[6] == 'O'))
    {
        document.getElementById("turn").innerHTML = 'Player O Won';
        return;
    }

    counter = 0;
    for(let i = 0 ; i < 9 ; i++)
    {
        if(grid[i] != 'X' && grid[i] != 'O')
        {
            counter++;
        }
    }

    if(counter == 0)
    {
        document.getElementById("turn").innerHTML = 'It is a draw!';
    }
}

function Reset()
{
    document.getElementById("turn").innerHTML = 'Player X Turn';
    document.getElementById("item1").innerHTML = "";
    document.getElementById("item2").innerHTML = "";
    document.getElementById("item3").innerHTML = "";
    document.getElementById("item4").innerHTML = "";
    document.getElementById("item5").innerHTML = "";
    document.getElementById("item6").innerHTML = "";
    document.getElementById("item7").innerHTML = "";
    document.getElementById("item8").innerHTML = "";
    document.getElementById("item9").innerHTML = "";
    grid = [1,2,3,4,5,6,7,8,9];
    turn = 'X';
}