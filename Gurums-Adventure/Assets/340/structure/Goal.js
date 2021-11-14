#pragma strict

private var timer : float;
var ch : GameObject;

function Start () {
	timer = 0;
}

function Update () {
	if(timer<3.0)
		timer+=Time.deltaTime;
}

function OnTriggerEnter(other: Collider){
	if(other.gameObject.tag=="Player"&&timer>2.5){
		other.rigidbody.AddForce(0,20,0,ForceMode.Impulse);
		yield WaitForSeconds(1.0);
		Application.LoadLevel("Chamirisa Memorial Hall2");
	}
}
/*function OnTriggerExit(other: Collider){
	if(other.gameObject.tag=="Player"&&timer>2.5){
	yield WaitForSeconds(0.5);
		gameObject.collider.isTrigger=false;
		other.enabled=false;
		Application.LoadLevel("Chamirisa Memorial Hall2");
	}
}*/