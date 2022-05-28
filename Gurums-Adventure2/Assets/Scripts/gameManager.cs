using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    public GameObject[] door = new GameObject[3]; // 클리어 해야 하는 미니 게임 문 받아옴
    public GameObject[] level_3_object; // 3단계에 active해야 하는 오브젝트
    public int level = 1; // 현재 클리어해야 하는 단계

    public static GameManager I; // 싱글톤
    void Awake()
    {
        I = this;
    }
    // Start is called before the first frame update
    void Start()
    {
        InvokeRepeating("Twinkle", 0f, 0.5f); // 씬이 로드되면 Twinkle 함수를 0.5초마다 반복
        if(level==3)
        {
            for(int i=0; i<level_3_object.Length; i++)
                level_3_object[i].gameObject.SetActive(true);
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void Twinkle() // 문 반짝이기
    {
        // Mathf.PingPong : 시간이 흐를수록 값을 증감시키는 함수
        // Color.Lerp : 색깔을 서서히 변경해줌
        door[level - 1].GetComponent<Renderer>().material.color = Color.Lerp(Color.gray, Color.yellow, Mathf.PingPong(Time.time, 1));
        door[level - 1].GetComponent<Renderer>().material.color = Color.Lerp(Color.yellow, Color.gray, Mathf.PingPong(Time.time, 1));
    }
}
