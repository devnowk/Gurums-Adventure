#pragma strict

function Start () {
	
}

function Update () {

}

function OnTriggerStay(other : Collider){
	if(other.gameObject.tag=="Player"){
		//other.SendMessage("PositionUp");
		if(gameObject.transform.position.y<21.3)
			gameObject.transform.position.y+=Time.deltaTime;
	}
}