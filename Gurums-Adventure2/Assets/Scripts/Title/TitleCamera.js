#pragma strict
private var timer : double;

function Start () {
	timer = 27.0;
}

function Update () {

	timer -= Time.deltaTime;
	if(timer >= 15.0)
	{
		if(transform.position.x > -19 && transform.position.x < 199)
			transform.position.x += Time.deltaTime*13.0;
	}
	else if(0.0 < timer && timer < 15.0){
		if(transform.position.x < 199 && transform.position.x > -18)
			transform.position.x -= Time.deltaTime*13.0; 
	}
	else if(timer <= 0.0){
		timer = 27.0;
	}
}