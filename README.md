# 정규표현식 with JavaScript

- Regular Expression
- 정규표현식이란 문자열을 검색하고 대체하는 데 사용 가능한 일종의 형식 언어(패턴)입니다.
- 사용 언어마다 동작하는 방식이 다르니 잘 확인하고 사용!

## 역할

1. 문자 검색 (Search)
2. 문자 대체 (Replace)
3. 문자 추출 (Extract)

## 테스트 사이트

https://regexr.com/

## 정규식 생성

```js
// 생성자
new RegExp('표현', '옵션')
new RegExp('[a-z]', 'gi')

// 리터럴
/표현/옵션
/[a-z]/gi
```