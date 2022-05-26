#pragma strict

var skin : GUISkin;
private var on : boolean;

function Success()
{
	on = true;
	yield WaitForSeconds(3.0);
	Application.LoadLevel("Chamirisa Memorial Hall3");
}

function OnGUI()
{
	if(on == true){
		GUI.skin = skin;
		var sw : int = Screen.width;
		var sh : int = Screen.height;
		var scoreText : String = "SUCCESS!";
		GUI.Label(Rect(sw/6,sh/3,sw*2/3,sh/3), scoreText, "success");
	}
}

function Start ()
{
	on = false;
}

function Update () {

}
