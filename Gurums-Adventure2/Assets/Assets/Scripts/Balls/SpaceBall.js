#pragma strict
var colorName : String;
var BallParticlePrefab : GameObject;
/*
function Success()
{
	enabled = false;
}*/

function OnTriggerEnter(other: Collider)
{
	//if(other.gameObject.tag=="Player"){
		Instantiate(BallParticlePrefab, transform.position, transform.rotation);
		//other.gameObject.SendMessage("CatchSpaceBall", 10);
		var gameController : GameObject = GameObject.FindWithTag("GameController");
		gameController.SendMessage("OnDestroyBall", colorName);
		Destroy(gameObject);
	//}
}

function Start () {

}

function Update () {

}