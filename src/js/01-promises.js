/*
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const isOk = Math.random() > 0.5;

//     if (isOk) {
//       resolve('Done!');
//     } else {
//       reject('Error!');
//     }
//   }, 1000);
// });

// console.log(promise);

// promise
//   .then(result => {
//     console.log(promise);

//     console.log(result);
//   })
//   .catch(err => {
//     console.log(promise);

//     console.log(err);
//   });

/*
 * Ланцюжки промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

// promise
//   .finally(() => {
//     preloader.stop();
//   })
//   .then(result => {
//     console.log(promise);

//     console.log(result);

//     return 'Hello world!';
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(promise);

//     console.log(err);
//   });

// TODO: Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// console.log(promise);

// promise
//   .then(data => {
//     console.log(data); // '1'
//   })
//   .then(data => {
//     console.log(data); // undefined

//     return '2';
//   })
//   .then(data => {
//     console.log(data); // '2'
//   });

// TODO: Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   reject('error');
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);

//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error); // 'error'
//   });
