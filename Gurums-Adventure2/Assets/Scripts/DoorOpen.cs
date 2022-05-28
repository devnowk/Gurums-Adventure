using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DoorOpen : MonoBehaviour
{
    public int doorType = 0; // 0:회전문, 1:자동문
    public float maxAngle = 96; // 최대 열리는 각도(회전문 96)
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {

    }
    private void OnTriggerStay(Collider other)
    {
        if (other.tag == "Player" && doorType == 0) // 회전문 앞에 서면 문 열림
            PushDoor();
    }
    void PushDoor()
    {
        if(transform.localEulerAngles.y < maxAngle)
            transform.rotation *= Quaternion.AngleAxis(0.5f, Vector3.up); // y축 방향으로 회전
        //Debug.Log(transform.localEulerAngles.y);
    }
}
