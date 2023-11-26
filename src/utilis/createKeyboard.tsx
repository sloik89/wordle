export function createKeybord() {
  const letters = "QWERTYUIOPASDFGHJKLZXCVBNM";

  let arr = new Array(letters.length).fill("").map((elem, idx) => {
    elem = letters[idx];
    return elem;
  });
  //   changing element in array to enter
  arr.splice(20, 0, "enter");
  arr[arr.length] = "back";
  return arr;
}
