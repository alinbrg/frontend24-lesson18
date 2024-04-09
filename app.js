// 1. დაწერეთ for ციკლი, 0 დან 20 - მდე console.log ში დაბეჭდეთ ინდექსი i
// for (let i = 0; i <= 20; i++) {
// 	console.log(i);
// }
// 2. დაწერეთ while ციკლი 0 დან 30 - მდე console.log ში დაბეჭდეთ ინდექსი i
// let i = 0;
// while (i <= 30) {
// 	console.log(i);
// 	i++;
// }
// 3. დაწერეთ do while ციკლი 0 დან 40 - მდე console.log ში დაბეჭდეთ ინდექსი i
// let j = 0;
// do {
// 	console.log(j);
// 	j++;
// } while (j <= 40);
// 4. მოცემული გვაქვს მასივი const numbers = [1,2,5,7,8,10,23,24,26]. for ლუპის დახმარებით შეამოწმეთ მასივის ყველა ელემენტი და  კონსოლში გამოიტანეთ ამ მასივიდან მხოლოდ ლუწი რიცხვები.

const numbers = [1, 2, 5, 7, 8, 10, 23, 24, 26];
for (let i = 0; i < numbers.length; i++) {
	// console.log(numbers[i]);
	if (numbers[i] % 2 === 0) {
		// console.log(numbers[i]);
	}
}

// 5. გამოიყენეთ const currentDay = new Date().getDay(); ცვლადი;   currentDay ცვლადი გვაძლევს რეალურ კვირის დღეს რიცხვითი სახით 0 - არის კვირა, 1 - არის ორშაბათი და ასე შემდეგ.( 0 - 6 ამდე რიცხვს აბრუნებს სადაც 6 არის შაბათი, ყოველდღე სხვადასხვა მნიშვნელობას დაგიბრუნებთ) , დავწეროთ switch სადაც შევამოწმებთ currentDay-ს და 0 ის შემთხვევაში console.log ში გამოვიტანთ სიტყვას - კვირა, 1 ის შემთხვევაში - ორშაბათს და ასე შემდეგ 6 - შაბათი.
const currentDay = new Date().getDay();

// console.log(currentDay);

let day = "";
switch (currentDay) {
	case 0:
		day = "კვირა";
		break;
	case 1:
		day = "ორშაბათი";
		break;
	case 2:
		day = "სამშაბათი";
		break;
	case 3:
		day = "ოთხშაბათი";
		break;
	case 4:
		day = "ხუთშაბათი";
		break;
	case 5:
		day = "პარასკევი";
		break;
	case 6:
		day = "შაბათი";
		break;
	default:
		day = "არასწორი რიცხვი";
		break;
}

// console.log(day);

// scopes
// global
// block
//function

const test = "global test";
let quantity = 0;
// quantity++;

if (true) {
	let test = "block test";
	if (true) {
		let test = "inner if test";
		// console.log(test);
	}
	var test2 = "var test";
}

// console.log(test)

function print(message) {
	let test = message + "!!!!!!!!";
	console.log(test);
}

// print('test');
// print('test22');
// print('test333');
// print('test444');

function getCalculateDiscount(price, percent) {
	if (typeof price === "number" && typeof percent === "number") {
		const percentNumber = percent / 100;
		const discountedPrice = price - price * percentNumber;
		// console.log(discountedPrice);
		return discountedPrice;
		// console.log('test');
	} else {
		console.log("not numbers");
	}
}

let x = 100;
const price1 = getCalculateDiscount(x, 5);
const price2 = getCalculateDiscount(1000, 10);
const price3 = getCalculateDiscount(100, 20);

// console.log(price1);

function cityChanges(city) {
	let deliveryPrice = 0;
	switch (
		city
		// 	deliveryPrice
	) {
	}

	// 	point on map
}

function sum(a, b) {
	return a + b;
}

const sum1 = function (a, b) {
	return a + b;
};
// arrow function
const sum2 = (a, b) => {
	return a + b;
};

//
// console.log(sum(4, 5))
// console.log(sum1(4, 5))
// console.log(sum2(4, 5))

console.log(characters);

const forEachFn = (el, index, array) => {
	// console.log(el.name);
};
characters.forEach(forEachFn);

const studentsInGryffindor = characters.filter(
	(el) => el.house === "Gryffindor"
);

// console.log(studentsInGryffindor);

const firstStudentinGryffindor = characters.find(
	(el) => el.house === "Gryffindor"
);

// console.log(firstStudentinGryffindor);

const editedCharacters = characters.map((el) => {
	return {
		id: el.id,
		name: el.name,
		house: el.house,
		scholl: "Hogwarts",
	};
});

// console.log(editedCharacters);

const isEveryoneAlive = characters.every((el) => el.alive === true);
const isSomeoneAlive = characters.some((el) => el.alive === true);

// console.log(isSomeoneAlive);
