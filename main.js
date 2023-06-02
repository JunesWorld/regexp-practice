const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// g = 대소문자 구분 / gi = 구분 x

// 생성자 함수를 통한 정규식
// const regexp = new RegExp('the', 'gi')

// 리터럴 방식(선호!)
const regexp = /the/gi
console.log(str.match(regexp)) 

//  const regexp = /fox/gi
// console.log(regexp.test(str))

// replace = 원본데이터에 손상 x
// console.log(str.replace(regexp, 'AAA'))
// console.log(str)

// 원본 data 변경하려면? const -> let
// str = str.replace(regexp, 'AAA')
// console.log(str)

/**
 * 플래그 옵션
 */

// g = 전체 영역에서 검색
// m = 줄 마다 시작하고 끝나는 부분을 해석하겠다.

// .(기호(but, 정규표현식으로 표현되는 기호))을 찾고 싶을 때는 앞에 이스케이프 문자(\) 붙여주기! 
// $ = 문자데이터 끝부분에 마침표 기호가 있는지 일치 시키는 패턴
console.log(str.match(/\.$/gim))

/**
 * 패턴(표현1)
 */

// d로 끝나는 부분
console.log(
  str.match(/d$/gm)
)

// t로 시작하는 부분(대소문자 구분 x = i)
console.log(
  str.match(/^t/gim)
)

// . 모든 문자
// http 출력 
console.log(
  str.match(/h..p/g)
)

// | 또는
// /fox|dog/ = fox
// /fox|dog/g = fox, dog
console.log(
  str.match(/fox|dog/g)
)

// ? 있거나 없거나
// http https
console.log(
  str.match(/http?/g)
)

// 연속일치
console.log(
  str.match(/d{2}/g)
)

// 2개 이상 연속일치
console.log(
  str.match(/d{2,}/g)
)

// 2개이상 3개이하
// \w : 숫자를 포함한 영어 알파벳
// \b : 경계를 만들어줌
console.log(
  str.match(/\b\w{2,3}\b/g)
)

// 숫자 하나 이상 연속
// 연속적인 모든 문자 [가-힣]
console.log(
  str.match(/[0-9]{1,}/g)
)

// 소문자 f로 시작하는 모든 단어 찾기
console.log(
  str.match(/\bf\w{1,}\b/g)
)

// 공백 + 줄바꿈 찾기 = \s
console.log(
  str.match(/\s/g)
)

// 활용! 공백 제거
// const h = `   the hello  world   !`
// console.log(
//   h.replace(/\s/g, '')
// )


// Email ID만 찾기 = 앞쪽 일치
console.log(
  str.match(/.{1,}(?=@)/g)
)

// 뒤쪽 일치
console.log(
  str.match(/(?<=@).{1,}/g)
)