#pragma strict

function Start () {

}

function Update () {
	if(transform.position.x > -105 && transform.position.x < -74)
	{
		transform.position.x += Time.deltaTime*6.0; 
	}
	
	if(transform.position.y < 191 && transform.position.y > 175)
	{
		transform.position.y -= Time.deltaTime*3.0; 
	}
	
	if(transform.position.y <= 175 && transform.position.y > 171)
	{
		transform.position.y -= Time.deltaTime*3.0; 
	}
	
	if(transform.position.y <= 171)
	{
		Application.LoadLevel("Start2");
	}
	
}