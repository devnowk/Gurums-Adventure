#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(other: Collider)
{
	if(other.gameObject.tag=="Player"){
		//Debug.Log("trigger!");
		other.gameObject.SendMessage("CatchBall", 1);
		Destroy(gameObject);
	}
}
