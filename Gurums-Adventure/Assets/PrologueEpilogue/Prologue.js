﻿#pragma strict

function Start ()
{

}

function Update ()
{
	if(transform.position.z > -2 && transform.position.z < 12.1)
	{
		transform.position.z += Time.deltaTime*0.6; 
	}else{
	ChangeScene();
	}
}

function ChangeScene()
{
	yield WaitForSeconds(0.3);
	Application.LoadLevel("Chamirisa Memorial Hall");
}