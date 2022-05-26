#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider){
	if(other.gameObject.tag=="Player"&&Application.loadedLevelName=="Chamirisa Memorial Hall3"){
		Application.LoadLevel("Chamirisa Memorial Hall4");
	}
}