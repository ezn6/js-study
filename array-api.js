// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(',');
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',');
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result); //[5, 4, 3, 2, 1]
    console.log(array); //[5, 4, 3, 2, 1]
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result); //[3,4,5]
    console.log(array); //[1, 2, 3, 4, 5]
    //cf. splice는 배열 자체를 수정하고, slice는 배열의 원하는 부분만 새로 얻어올수 있다.
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    const result = students.find((student) => student.score === 90);
    console.log(result); //Student {name: 'C', age: 30, enrolled: true, score: 90}
    //배열에서의 콜백함수: 리턴값 첫번째로 true가 되는곳에서 배열의 요소값이 리턴된다.
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result); //[Student, Student, Student] (A,C,E의 3개)
    //조건에 맞는 요소(true가 나오는요소)들만이 모여 배열로 리턴된다.
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
    // const result = students.map((student) => student.score * 2); -->> 점수 2배로 맵핑하고 싶을때.
    console.log(result); //[45, 80, 90, 66, 88]
    //콜백함수로 가져오고싶은 정보만 가져와서 맵핑하여 배열로 리턴.
}

// Q8. check if there is a student with the score lower than 50
{
    //console.clear();
    const result = students.some((student) => student.score < 50);
    console.log(result); //true
    //배열의 모든 요소를 다 검사하는데, 하나라도 콜백함수 조건에 맞는 요소가 있다면 true리턴

    const result2 = students.every((student) => student.score >= 50);
    //배열의 모든 요소가 조건을 모두 충족해야 true 리턴
    console.log(result2); //false

    const result3 = !students.every((student) => student.score >= 50);
    console.log(result3); //true (students 앞의 느낌표) ==>>>> 가장 첫번째 some api와 동일한 결과를 나타내기 위해 느낌표 사용
}
//console.clear();
// Q9. compute students' average score(평균🚗🚖🚌)
{
    // const test = students.reduce((prev, curr) => {
    //     console.log('--------');
    //     console.log(prev);
    //     console.log(curr);
    //     return curr;
    // });
    // console.log(test); //A,B B,C C,D D,E,E ==>>모든 배열의 아이템을 순차적으로 전달받아야 해서 5개 출력해야 해서? 아마도 마지막엔 E 혼자만 출력되는듯 하다...

    const result = students.reduce((prev, curr) => {
        // console.log('-----@@---');
        // console.log(prev);
        // console.log(curr);
        return prev + curr.score
    }, 0); // 이런식으로 0으로 initial value를 설정하는순간 첫번째 prev값은 0부터 시작한다.
    const result2 = students.reduce((prev, curr) => prev + curr.score, 0);
    //🚩all elements in an arry, 누적된 값을 전달한다, 뭔가 함께 모아놓을때 쓴다...
    //리턴 하는 값이 다음 값에서 prev 값으로 쓰인다.
    console.log(result / students.length); //73.8
    console.log(result2 / students.length); //73.8
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
        .map((student) => student.score)
        .filter((score) => score >= 50)
        .join();
    console.log(result); //'80,90,66,88'
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
        .map((student) => student.score)
        .sort((a, b) => b - a) //점수가 큰 순서
        //점수 낮은순서는 a - b 를 하면 된다.
        .join();
    console.log(result); //'90,88,80,66,45'
}