#pragma strict

function OnTriggerEnter(other: Collider)
{
	other.gameObject.SendMessage("CatchWhiteBall");
}

function Start () {

}

function Update () {

}