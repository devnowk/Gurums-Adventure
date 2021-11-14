#pragma strict
private var time : float;

function Start () {
	//time = 2.8;
}

function Update () {
}

function OnTriggerStay(){
	{
		transform.rotation *= Quaternion.AngleAxis(30.0*Time.deltaTime,Vector3(0,1,0));
		time-=Time.deltaTime;
	}	
}
/*function OnCollisionEnter(collisionInfo : Collision){
	if(collisionInfo.gameObject.tag=="Player")
		transform.rotation *= Quaternion.AngleAxis(30.0*Time.deltaTime, Vector3(0,1,0));
}*/