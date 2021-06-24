# 210620_VoteClassing

VoteClassing 가이드

1. 메뉴얼
'Menual_VoteClassing.pdf' 파일을 읽으면 상세한 구동가이드를 받을 수 있습니다.

2. 구동방법
● 'npm i'를 터미널에 입력하여 구현에 필요한 패키지를 다운받아줍니다.
● 'npm run Mock'를 터미널에 입력하면 서버가 구현됩니다.
● 'npm run dev'를 터미널에 입력하면 자동으로 에뮬레이터 포트 변경 후, 안드로이드 세뮬레이터가 구동됩니다.

3. 데이터를 못받아 오는 경우

 - 서버가 구현되지 않은 경우
"npm run Mock"을 터미널에 입력하여 Mock서버를 생성해줍니다.

 - 에뮬레이터의 tcp가 다를경우
"adb -s emulator-5554 reverse tcp:3000 tcp:3000"를 터미널에 입력하여 에뮬레이터 tcp를 변경해줍니다.

4. 시간설정이 다른언어로 나오는 경우
기기의 기본언어로 나오기 때문에 기기언어 설정을 한국어로 하셔야합니다.
설정(Settings) - 시스템(System) - 언어(Language) - 한국어