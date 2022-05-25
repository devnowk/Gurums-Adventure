#pragma strict
var skin : GUISkin;

function Start () {

}

function Update () {
	
	if(Input.GetButtonDown("Jump"))
	{
		Application.LoadLevel("Start");	
	}
}

function OnGUI()
{
	GUI.skin = skin;
	
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	
	GUI.Label(Rect(sw/5,sh*2/7,sw*3/5,sh*2/7), "구름이의  차관  대모험", "Title");
	GUI.Label(Rect(0,sh/2,sw,sh/2), "Press  Space  to  Start", "Start");
}