#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(other:Collider){
	if(other.gameObject.tag=="Player"){
		yield WaitForSeconds(3);
		Application.LoadLevel("340");
	}
}