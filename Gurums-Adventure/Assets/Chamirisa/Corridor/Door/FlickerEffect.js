#pragma strict

private var originalColor : Color;

function Start () {
	originalColor = renderer.material.color;//초기 색상
}

function Update () {
	var level : float = Mathf.Abs(Mathf.Sin(Time.time*10));
	renderer.material.color = originalColor * level;
}