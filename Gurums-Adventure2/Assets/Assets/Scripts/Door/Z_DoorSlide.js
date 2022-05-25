#pragma strict

function Start () {

}

function Update () {
}

function OnTriggerStay(){
	if(transform.position.z<76&&transform.position.z>69.8)
		transform.position.z-= Time.deltaTime;//1/60씩 x값 이동 -> 자연스러운 자동문
	else if(transform.position.z>76&&transform.position.z<83.7)
		transform.position.z+= Time.deltaTime;
}