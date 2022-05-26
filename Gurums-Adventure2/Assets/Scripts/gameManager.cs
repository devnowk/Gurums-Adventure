using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class gameManager : MonoBehaviour
{
    public GameObject[] door = new GameObject[3]; // 클리어 해야 하는 미니 게임 문 받아옴
    public int level = 1; // 현재 클리어해야 하는 단계

    public static gameManager I; // 싱글톤
    void Awake()
    {
        I = this;
    }
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        Twinkle(); // MainScene에 있으면 문 반짝반짝 빛나게 하기
    }

    void Twinkle()
    {

    }
}
