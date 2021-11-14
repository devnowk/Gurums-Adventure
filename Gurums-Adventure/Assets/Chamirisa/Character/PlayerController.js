#pragma strict

private var ball : int = 0;

function CatchBall(amount : int)
{
	ball += amount;
}

function CatchWhiteBall()
{
	if(ball == 6)
	{
		Application.LoadLevel("336");
	}
}