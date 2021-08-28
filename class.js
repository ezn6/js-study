'use strict';
// Object-oriendted programming
// class: template
// object: instance of a class(템플릿을 이용하여 실제로 데이터를 넣어서 이용 하는것)
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

//1. Class declararations
class Person {
    //constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }
    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}
const test = new Person('ellie', 20);
console.log(test.name)
console.log(test.age)
test.speak();


//2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {
        //return this.age; X
        return this._age;
    }
    set age(value) {
        //this.age = value; X

        // if (value < 0){
        //     throw Error('age can not be negavite');
        // }
        this._age = value < 0 ? 0 : value;
    }
}
// constructor에 있는 this.age는 getter을 호출하게 된다.

// this.age = age
// 여기서 =age 값을 할당 하는 순간 age의 setter을 호출하게된다.

// 근데 setter은 this.age = value이므로 
// =value를 할당하는순간 age의 또 setter을 호출하므로
// return this._age;
// 이런식으로 getter와 setter을설정한다.
const user1 = new User('Steve', 'Jobs', -1);
console.log(user1.age); //0


//3. Fields (public, private)
//Too soon! 너무 최근개념이라 아직 잘 사용하진 않는..
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField); //2
console.log(experiment.privateField); //undefined

//4. Static properties and methods
//Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumer) {
        this.articleNumer = articleNumer;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
//console.log(article1.publisher) //undefined
console.log(Article.publisher); //Dream Coding
//static값을 호출하려면 object이름 말고 class이름으로 호출하기
Article.printPublisher(); //Dream Coding
console.log(article1.articleNumer); //1


//5. Inheritance 상속
//a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color!`);
    }
    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape { }
class Triangle extends Shape {
    draw() {
        super.draw(); //부모함수에 있는 내용 그대로 가져오기:super
        console.log('🔺'); //이건 재정의 함수
    }
    getArea() { //override
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue')
console.log(rectangle.getArea()); //400
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea()); //200


//6. Class checking : instanceOf
//왼쪽object가 오른쪽class의 인스턴스 인지 아닌지 판단
console.log(rectangle instanceof Rectangle) //true
console.log(triangle instanceof Rectangle) //false
console.log(triangle instanceof Triangle) //true
console.log(triangle instanceof Shape)//true
console.log(triangle instanceof Object)//true
