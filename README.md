# coding interview

# git clone 후 인터뷰 본인 이름으로 브랜치를 생성합니다.

# 코드를 작성후 본인 이름의 브랜치로 커밋 및 푸시 진행합니다.

# 인터뷰 내용
1. nestjs 를 활용하여 프로젝트를 생성합니다.
2. mqtt 활용한 메시지 request / response 기능을 구현합니다.
3. on / off 동작요청 기능을 구현합니다.
4. View page 를 활용하여 해당 기능을 테스트 해볼수 있게 구현합니다.
5. 해당 coding interview 를 깃에 업로드 합니다.

# mqtt 접속 정보
MQTT_HOST='mqtt://13.209.132.235' <br/>
MQTT_PORT='11885' <br/>
MQTT_USERNAME='kakaoVX_mqtt' <br/>
MQTT_PASSWORD='kakaoVX_mqtt123!@#' <br/>

# mqtt request / reponse 
| 모듈 동작 요청 |
|request|내용|설명|
|------|---|---|
|topic|spacetalk/request| 토픽을 활용하여 디바이스의 ON OFF 메시지를 보내는 기능 구현|
|message|{ "uuid":"000b9891-1e83-40a5-9a5b-2605129b77e6", "request":"on","devEui":"d02544fffefea317","data":{"channel":["3"]}}| 3번 채널의 모듈을 동작 on|

|response|내용|설명|
|------|---|---|
|topic|spacetalk/response| 토픽을 활용하여 메시지를 받는 기능 구현|
|message|{ "response": {"channel":"3", "moduleType":"airConditioner", powerState":"off","mode":"cool","temp":"23"}}| 모듈 상태값 받음 |



# 주의사항
1. AI 툴 사용을 금지합니다.
2. 공식 문서 사용을 적극 활용 하실 것을 추천 합니다. ( https://docs.nestjs.com/microservices/mqtt )
