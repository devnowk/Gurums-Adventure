#pragma strict
var TrabParticlePrefab : GameObject;
private var timer : float;

function Start () {
	timer=0;
}

function Update () {

}

function OnTriggerEnter(other: Collider)
{
	{
		//other.gameObject.SendMessage("CatchBall", 1);
		//Destroy(gameObject);
		Instantiate(TrabParticlePrefab, transform.position, transform.rotation);
		yield WaitForSeconds(0.2);
		Application.LoadLevel("prologue");
	}
}