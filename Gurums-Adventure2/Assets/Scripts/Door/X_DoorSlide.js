#pragma strict

function Start () {

}

function Update () {
	
}

function OnTriggerStay(){
	if(transform.position.x<90&&transform.position.x>85.3)
		transform.position.x-= Time.deltaTime;//1/60씩 x값 이동 -> 자연스러운 자동문
	else if(transform.position.x>90&&transform.position.x<95.7)
		transform.position.x+= Time.deltaTime;
}