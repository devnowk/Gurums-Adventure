#pragma strict
private var time : float;

function Start () {
	time = 2.8;
}

function Update () {
}

function OnTriggerStay(){
	if(time>0){
		transform.rotation *= Quaternion.AngleAxis(30.0*Time.deltaTime,Vector3(0,0,-1));
		time-=Time.deltaTime;
	}
}