/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/
type StringOrNumberArray = (string | number)[];

function getPromise<T>(): Promise<T> {
  return new Promise((resolve) => {
    resolve(['Text', 50] as unknown as T);
  });
}

const promise = getPromise<StringOrNumberArray>();

getPromise()
.then((data) => {
  console.log(data);
});

export {};