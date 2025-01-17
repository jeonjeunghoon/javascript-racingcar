## 🚀 기능 목록

### 유닛테스트

- [x] 무작위 값이 4 이상일 경우에만, 전진을 한다.
- [x] 에러 테스트
  - [x] 출력 메시지 확인
  - [x] 재입력을 받는지 여부 확인
- [x] 자동차 이름 유효성 검증
  - [x] 자동차 이름은 알파벳과 쉼표로만 구성되어 있다.
  - [x] 자동차 이름은 1자 이상 5자 이하만 입력할 수 있다.
  - [x] 자동차 이름들은 쉼표로 구분한다.
  - [x] 자동차의 이름은 중복될 수 없다.
  - [x] 이름들 가운데 혹은 양 끝에 쉼표가 여러 개일 때 예외 처리한다.
- [x] 전진 시도 횟수 유효성 검증
  - [x] 전진 시도 횟수는 숫자만 입력할 수 있다.
  - [x] 전진 시도 횟수는 1회 이상 10회 이하만 입력할 수 있다.
- [x] 스냅샷이 올바르게 저장된다.
- [x] 올바른 우승자가 도출되어야 한다.
- [x] 경주가 끝난 후 프로그램이 올바르게 종료되어야 한다.
- [x] 모두가 전진하지 못한 경우 예외 처리한다.

### UI

- [x] 입력
  - [x] 자동차 이름 입력
  - [x] 시도 횟수 입력
- [x] 출력
  - [x] 레이싱 실행 결과 출력
  - [x] 우승자 목록 출력

---

### 도메인

- [x] 사용자는 전진 시도 횟수를 입력할 수 있다.
- [x] 전진하는 조건은 0~9 사이에서 무작위 값을 구한 후 해당 값이 4 이상일 경우다.
- [x] 각 시도마다 모든 자동차가 전진을 시도한다.
- [x] 우승자를 도출한다.
