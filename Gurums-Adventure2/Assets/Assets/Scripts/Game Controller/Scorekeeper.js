﻿#pragma strict

@HideInInspector
var score : int;
var skin : GUISkin;

function Success()
{
	enabled = false;
}

function OnGUI()
{
	GUI.skin = skin;
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	var scoreText : String = "SCORE: " + score.ToString();
	GUI.backgroundColor = Color.blue;
	GUI.Label(Rect(0,0,sw/2,sh/4), scoreText, "Score");
}

function Start () {

}

function Update () {

}
