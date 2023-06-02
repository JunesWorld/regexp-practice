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
// const regexp = /the/gi
// console.log(str.match(regexp)) 

const regexp = /fox/gi
// console.log(regexp.test(str))

// replace = 원본데이터에 손상 x
// console.log(str.replace(regexp, 'AAA'))
// console.log(str)

// 원본 data 변경하려면? const -> let
// str = str.replace(regexp, 'AAA')
// console.log(str)