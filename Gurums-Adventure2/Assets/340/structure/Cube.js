#pragma strict

private var originalColor : Color;
private var theta : float;
private var timer : float;

function Start () {
	originalColor = renderer.material.color;//초기 색상
	theta = 1.5;
}

function Update () {
	/*if(alpha > 0){	
		transform.renderer.material.color.a-=alpha;
 		alpha -= Time.deltaTime*60;
 	}
 	/*else{
 		yield WaitForSeconds(1.0);
 		alpha = 1;
 	}*///update함수는 코루틴 안된다....
 	/*else{
 		timer+=Time.deltaTime;
 		if(timer>1.0)
 			alpha = 1;
 	}*/
}

function OnTriggerStay(collisionInfo : Collider){
		var level : float = Mathf.Sin(theta);
		theta-=Time.deltaTime;
		renderer.material.color = originalColor * level;
		if(theta<0){
			theta=0;
			gameObject.collider.isTrigger=true;
			timer+=Time.deltaTime;
			if(timer>0.5){
				renderer.material.color = originalColor;
				theta = 1.5;
				gameObject.collider.isTrigger=false;
			}
		}
}