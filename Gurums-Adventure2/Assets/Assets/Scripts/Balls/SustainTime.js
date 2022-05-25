#pragma strict

var sustainTime : float = 10.0;

function Start ()
{
	yield WaitForSeconds(sustainTime);
	
	Destroy(gameObject);
}

function Update () {

}
