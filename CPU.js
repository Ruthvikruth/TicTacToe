var grid = [1,2,3,4,5,6,7,8,9],c_turn_choices = [1,2,3,4,5,6,7,8,9];
let chosen;

function filtering(val)
{
    return val != chosen;
}

function grid1()
{
    if(document.getElementById("item1").innerHTML == '')
    {
        grid[0] = 'X';
        document.getElementById("item1").innerHTML = "X";
        chosen = 1;
        turn_computer();
    }
}

function grid2()
{
    if(document.getElementById("item2").innerHTML == '')
    {
        grid[1] = 'X';
        document.getElementById("item2").innerHTML = "X";
        chosen = 2;
        turn_computer();
    }
}

function grid3()
{
    if(document.getElementById("item3").innerHTML == '')
    {
        grid[2] = 'X';
        document.getElementById("item3").innerHTML = "X";
        chosen = 3;
        turn_computer();
    }
}

function grid4()
{
    if(document.getElementById("item4").innerHTML == '')
    {
        grid[3] = 'X';
        document.getElementById("item4").innerHTML = "X";
        chosen = 4;
        turn_computer();
    }
}

function grid5()
{
    if(document.getElementById("item5").innerHTML == '')
    {
        grid[4] = 'X';
        document.getElementById("item5").innerHTML = "X";
        chosen = 5;
        turn_computer();
    }
}

function grid6()
{
    if(document.getElementById("item6").innerHTML == '')
    {
        grid[5] = 'X';
        document.getElementById("item6").innerHTML = "X";
        chosen = 6;
        turn_computer();
    }
}

function grid7()
{
    if(document.getElementById("item7").innerHTML == '')
    {
        grid[6] = 'X';
        document.getElementById("item7").innerHTML = "X";
        chosen = 7;
        turn_computer();
    }
}

function grid8()
{
    if(document.getElementById("item8").innerHTML == '')
    {
        grid[7] = 'X';
        document.getElementById("item8").innerHTML = "X";
        chosen = 8;
        turn_computer();
    }
}

function grid9()
{
    if(document.getElementById("item9").innerHTML == '')
    {
        grid[8] = 'X';
        document.getElementById("item9").innerHTML = "X";
        chosen = 9;
        turn_computer();
    }
}

function turn_computer()
{
    let counter = 0;
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

    c_turn_choices = c_turn_choices.filter(filtering);
    if((grid[0] == grid[1] && grid[1] == grid[2] && grid[2] == 'O') || (grid[3] == grid[4] && grid[4] == grid[5] && grid[5] == 'O') || (grid[6] == grid[7] && grid[7] == grid[8] && grid[8] == 'O') || (grid[0] == grid[3] && grid[3] == grid[6] && grid[6] == 'O') || (grid[1] == grid[4] && grid[4] == grid[7] && grid[7] == 'O') || (grid[2] == grid[5] && grid[5] == grid[8] && grid[8] == 'O') || (grid[0] == grid[4] && grid[4] == grid[8] && grid[8] == 'O') || (grid[2] == grid[4] && grid[4] == grid[6] && grid[6] == 'O'))
    {
        document.getElementById("turn").innerHTML = 'CPU Won';
        return;
    }
    if( (grid[0] == grid[1] && grid[1] == grid[2] && grid[2] == 'X') || (grid[3] == grid[4] && grid[4] == grid[5] && grid[5] == 'X') || (grid[6] == grid[7] && grid[7] == grid[8] && grid[8] == 'X') || (grid[0] == grid[3] && grid[3] == grid[6] && grid[6] == 'X') || (grid[1] == grid[4] && grid[4] == grid[7] && grid[7] == 'X') || (grid[2] == grid[5] && grid[5] == grid[8] && grid[8] == 'X') || (grid[0] == grid[4] && grid[4] == grid[8] && grid[8] == 'X') || (grid[2] == grid[4] && grid[4] == grid[6] && grid[6] == 'X') )
    {
        document.getElementById("turn").innerHTML = 'You Won ^_^';
        return;
    }

    let temp = Math.floor(Math.random() * c_turn_choices.length);
    grid[c_turn_choices[temp] - 1] = 'O';
    grid_id = "item" + c_turn_choices[temp];
    let c_turn = document.getElementById(grid_id);
    c_turn.innerHTML = 'O';
    chosen = c_turn_choices[temp];
    c_turn_choices = c_turn_choices.filter(filtering);
    document.getElementById("turn").innerHTML = 'Your Turn';
    if((grid[0] == grid[1] && grid[1] == grid[2] && grid[2] == 'O') || (grid[3] == grid[4] && grid[4] == grid[5] && grid[5] == 'O') || (grid[6] == grid[7] && grid[7] == grid[8] && grid[8] == 'O') || (grid[0] == grid[3] && grid[3] == grid[6] && grid[6] == 'O') || (grid[1] == grid[4] && grid[4] == grid[7] && grid[7] == 'O') || (grid[2] == grid[5] && grid[5] == grid[8] && grid[8] == 'O') || (grid[0] == grid[4] && grid[4] == grid[8] && grid[8] == 'O') || (grid[2] == grid[4] && grid[4] == grid[6] && grid[6] == 'O'))
    {
        document.getElementById("turn").innerHTML = 'CPU Won';
        return;
    }
    if( (grid[0] == grid[1] && grid[1] == grid[2] && grid[2] == 'X') || (grid[3] == grid[4] && grid[4] == grid[5] && grid[5] == 'X') || (grid[6] == grid[7] && grid[7] == grid[8] && grid[8] == 'X') || (grid[0] == grid[3] && grid[3] == grid[6] && grid[6] == 'X') || (grid[1] == grid[4] && grid[4] == grid[7] && grid[7] == 'X') || (grid[2] == grid[5] && grid[5] == grid[8] && grid[8] == 'X') || (grid[0] == grid[4] && grid[4] == grid[8] && grid[8] == 'X') || (grid[2] == grid[4] && grid[4] == grid[6] && grid[6] == 'X') )
    {
        document.getElementById("turn").innerHTML = 'You Won ^_^';
        return;
    }
}

function Reset()
{
    document.getElementById("turn").innerHTML = 'Your Turn';
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
    c_turn_choices = [1,2,3,4,5,6,7,8,9];
    turn = 'X';
}