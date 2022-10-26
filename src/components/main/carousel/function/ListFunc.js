export const List = (arr1, arr2) => {
  return arr1.map((item, i) => {
    if (item.상호 === arr2[i].상호) {
      return Object.assign({}, item, arr2[i]);
    }
  });
};
