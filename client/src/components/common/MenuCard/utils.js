export const modifyName = (name) => {
  let nameTest = name.split(" ");
  let newname = nameTest.join("");
  newname = newname.toLowerCase();
  return newname;
}