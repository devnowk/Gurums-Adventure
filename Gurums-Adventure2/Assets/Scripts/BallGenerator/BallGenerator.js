#pragma strict

var intervalMin : float = 0.5;
var intervalMax : float = 1.5;

var redBallPrefab : GameObject;
var orangeBallPrefab : GameObject;
var yellowBallPrefab : GameObject;
var greenBallPrefab : GameObject;
var blueBallPrefab : GameObject;
var purpleBallPrefab : GameObject;

private var prefab : GameObject;

function Success()
{
	enabled = false;
}

function Start ()
{
	enabled = true;

	while(enabled == true)
	{
		yield WaitForSeconds(Random.Range(intervalMin, intervalMax));
		var btime : float = Random.value;
		if(btime < 0.166)
		{
			prefab = redBallPrefab;
		}
		else if(btime < 0.332)
		{
			prefab = orangeBallPrefab;
		}
		else if(btime < 0.498)
		{
			prefab = yellowBallPrefab;
		}
		else if(btime < 0.664)
		{
			prefab = greenBallPrefab;
		}
		else if(btime < 0.83)
		{
			prefab = blueBallPrefab;
		}
		else
		{
			prefab = purpleBallPrefab;
		}
		
		
		var theta : float = Random.Range(0.0, Mathf.PI * 2.0);
		var position : Vector3 = Vector3(Mathf.Cos(theta), 0.0, Mathf.Sin(theta))*6.0;
		position.y = 3.0;
		
		Instantiate(prefab, position, Quaternion.identity);
	}
}

function Update () 
{

}
