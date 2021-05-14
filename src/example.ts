const concat = (str1: string, str2: string): string => `${str1} ${str2}`;
concat('Hello ', 'World');

interface HomeTask {
  howIDoIt: string;
  simeArray: Array<string | number>;
}

interface HomeTaskWithData extends HomeTask {
  withData: Array<HomeTask>;
}

const myHometask: HomeTaskWithData = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

interface MyArray<T> {
  [N: number]: T;

  reduce<U>(fn: (acc: U, curr: T, index: number, arr: T[]) => U, initVal: U): U[];
}

const testArr: MyArray<number> = [1, 2, 3, 4];
const test = testArr.reduce((acc, curr) => acc + curr, 0);
const test2 = testArr.reduce((acc, curr, i) => ({ [i]: curr }), {});

const stringArr: MyArray<string> = ['a', 'b', 'c'];
const testString = stringArr.reduce((acc, curr) => `${acc}${curr}`, '');

// eslint-disable-next-line
console.log(myHometask, test, test2, testString);
