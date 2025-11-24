//A Promise is something that will complete later.

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done!");
  }, 2000);
});

myPromise.then(result => {
  console.log(result);
});

const myPromise01 = new Promise((resolve, reject) => {
  let success = false;

  if (success) {
    resolve("Everything is good!");
  } else {
    reject("Something went wrong!");
  }
});

myPromise01
  .then(result => console.log(result))
  .catch(error => console.log(error));


