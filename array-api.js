// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(',');
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = '๐, ๐ฅ, ๐, ๐';
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
    //cf. splice๋ ๋ฐฐ์ด ์์ฒด๋ฅผ ์์ ํ๊ณ , slice๋ ๋ฐฐ์ด์ ์ํ๋ ๋ถ๋ถ๋ง ์๋ก ์ป์ด์ฌ์ ์๋ค.
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
    console.log(result); //Studentย {name: 'C', age: 30, enrolled: true, score: 90}
    //๋ฐฐ์ด์์์ ์ฝ๋ฐฑํจ์: ๋ฆฌํด๊ฐ ์ฒซ๋ฒ์งธ๋ก true๊ฐ ๋๋๊ณณ์์ ๋ฐฐ์ด์ ์์๊ฐ์ด ๋ฆฌํด๋๋ค.
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result); //[Student, Student, Student] (A,C,E์ 3๊ฐ)
    //์กฐ๊ฑด์ ๋ง๋ ์์(true๊ฐ ๋์ค๋์์)๋ค๋ง์ด ๋ชจ์ฌ ๋ฐฐ์ด๋ก ๋ฆฌํด๋๋ค.
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
    // const result = students.map((student) => student.score * 2); -->> ์ ์ 2๋ฐฐ๋ก ๋งตํํ๊ณ  ์ถ์๋.
    console.log(result); //[45, 80, 90, 66, 88]
    //์ฝ๋ฐฑํจ์๋ก ๊ฐ์ ธ์ค๊ณ ์ถ์ ์ ๋ณด๋ง ๊ฐ์ ธ์์ ๋งตํํ์ฌ ๋ฐฐ์ด๋ก ๋ฆฌํด.
}

// Q8. check if there is a student with the score lower than 50
{
    //console.clear();
    const result = students.some((student) => student.score < 50);
    console.log(result); //true
    //๋ฐฐ์ด์ ๋ชจ๋  ์์๋ฅผ ๋ค ๊ฒ์ฌํ๋๋ฐ, ํ๋๋ผ๋ ์ฝ๋ฐฑํจ์ ์กฐ๊ฑด์ ๋ง๋ ์์๊ฐ ์๋ค๋ฉด true๋ฆฌํด

    const result2 = students.every((student) => student.score >= 50);
    //๋ฐฐ์ด์ ๋ชจ๋  ์์๊ฐ ์กฐ๊ฑด์ ๋ชจ๋ ์ถฉ์กฑํด์ผ true ๋ฆฌํด
    console.log(result2); //false

    const result3 = !students.every((student) => student.score >= 50);
    console.log(result3); //true (students ์์ ๋๋ํ) ==>>>> ๊ฐ์ฅ ์ฒซ๋ฒ์งธ some api์ ๋์ผํ ๊ฒฐ๊ณผ๋ฅผ ๋ํ๋ด๊ธฐ ์ํด ๋๋ํ ์ฌ์ฉ
}
//console.clear();
// Q9. compute students' average score(ํ๊ท ๐๐๐)
{
    // const test = students.reduce((prev, curr) => {
    //     console.log('--------');
    //     console.log(prev);
    //     console.log(curr);
    //     return curr;
    // });
    // console.log(test); //A,B B,C C,D D,E,E ==>>๋ชจ๋  ๋ฐฐ์ด์ ์์ดํ์ ์์ฐจ์ ์ผ๋ก ์ ๋ฌ๋ฐ์์ผ ํด์ 5๊ฐ ์ถ๋ ฅํด์ผ ํด์? ์๋ง๋ ๋ง์ง๋ง์ E ํผ์๋ง ์ถ๋ ฅ๋๋๋ฏ ํ๋ค...

    const result = students.reduce((prev, curr) => {
        // console.log('-----@@---');
        // console.log(prev);
        // console.log(curr);
        return prev + curr.score
    }, 0); // ์ด๋ฐ์์ผ๋ก 0์ผ๋ก initial value๋ฅผ ์ค์ ํ๋์๊ฐ ์ฒซ๋ฒ์งธ prev๊ฐ์ 0๋ถํฐ ์์ํ๋ค.
    const result2 = students.reduce((prev, curr) => prev + curr.score, 0);
    //๐ฉall elements in an arry, ๋์ ๋ ๊ฐ์ ์ ๋ฌํ๋ค, ๋ญ๊ฐ ํจ๊ป ๋ชจ์๋์๋ ์ด๋ค...
    //๋ฆฌํด ํ๋ ๊ฐ์ด ๋ค์ ๊ฐ์์ prev ๊ฐ์ผ๋ก ์ฐ์ธ๋ค.
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
        .sort((a, b) => b - a) //์ ์๊ฐ ํฐ ์์
        //์ ์ ๋ฎ์์์๋ a - b ๋ฅผ ํ๋ฉด ๋๋ค.
        .join();
    console.log(result); //'90,88,80,66,45'
}