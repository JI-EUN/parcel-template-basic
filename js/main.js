console.log("Hello Parcel");

async function tset() {
  const promise = Promise.resolve(123);
  console.log(await promise);
}
tset();
