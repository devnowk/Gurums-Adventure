#pragma strict
@script RequireComponent(Scorekeeper)

var ballSE : AudioClip;
var switchInterval : float;
var rewardPoint : int;
var penaltyPoint : int;
var skin : GUISkin;

var ballColor = new Array();
ballColor[0] = "red";
ballColor[1] = "orange";
ballColor[2] = "yellow";
ballColor[3] = "green";
ballColor[4] = "blue";
ballColor[5] = "purple";

private var randomColor : int;
private var targetColor : String;

private var scorekeeper : Scorekeeper;
private var switchTimer : float;

private function GetTargetColorName() : String
{
	//randomColor = Math.floor(Mathf.random() * 5);
	randomColor = Random.Range(0,6);
	targetColor = ballColor[randomColor];
	return targetColor;
}

function Start ()
{
	scorekeeper = GetComponent(Scorekeeper) as Scorekeeper;
	targetColor = GetTargetColorName();
	switchTimer = switchInterval;
}

function Update () 
{
	switchTimer -= Time.deltaTime;
	if(switchTimer < 0.0)
	{
		targetColor = GetTargetColorName();
		switchTimer = switchInterval;
	}
}

function OnDestroyBall(ballColorName : String)
{
	if(ballColorName == targetColor)
	{
		audio.PlayOneShot(ballSE);
		scorekeeper.score += rewardPoint;
		
		if(scorekeeper.score >= 100)
		{
			BroadcastMessage("Success");
			enabled = false;	
		}
	}
	else
	{
		scorekeeper.score -= penaltyPoint;
	}
}

function OnGUI()
{
	GUI.skin = skin;
	if(switchTimer < 0.5)
		return;
		
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	var message : String = "Touch " + targetColor + " Balls";
	switch(randomColor) {

		case 0 : GUI.backgroundColor = Color.red;
		break;
		case 1 : GUI.backgroundColor = Color.yellow;
		break;
		case 2 : GUI.backgroundColor = Color.yellow;
		break;
		case 3 : GUI.backgroundColor = Color.green;
		break;
		case 4 : GUI.backgroundColor = Color.blue;
		break;
		case 5 : GUI.backgroundColor = Color.magenta;
		break;
	}

	GUI.Label(Rect(sw/2,0,sw/2,sh/4),message, "Message");
}
/*
function StartGame()
{
	enabled = true;
}
*/
