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