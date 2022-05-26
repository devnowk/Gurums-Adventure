#pragma strict
private var direction : int;
private var random : int;

function Start () {
	yield WaitForSeconds(3.0);
	while(true){
		random = Random.value*2;
		if(random>0)
			break;
	}
	if(((transform.position.x>0)?transform.position.x:-transform.position.x)>
	((transform.position.z>0)?transform.position.z:-transform.position.z)){
		direction = (transform.position.x>0) ? -1 : 1;
	}
	else{
		direction = (transform.position.z>0) ? -3 : 3;
	}
}

function Update () {
	if(direction == 1||direction == -1){
		transform.position.x+=Time.deltaTime*direction*random;
	}
	else if(direction==3){
		transform.position.z+=Time.deltaTime*random;
	}
	else if(direction==-3){
		transform.position.z-=Time.deltaTime*random;
	}
}
function OnCollisionEnter(collisionInfo : Collision){
	direction = -direction;
}