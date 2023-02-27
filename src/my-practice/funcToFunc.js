function makeAppendRowArray(firstRow) {
  return (contentObj) =>
    firstRow.map((value) => (contentObj[value] ? contentObj[value] : ''));
}

function patchHeadToData(getHead) {
  return (makeContentArr) => (contentObj) => {
    const head = getHead(contentObj);
    return [head].concat(makeContentArr(contentObj));
  };
}

function main() {
  const dataArr = ['first', 'last', 'phone'];
  const content = {
    id: 1,
    first: 'hi',
    last: 'gdf',
    phone: 'a',
  };
  const basic = makeAppendRowArray(dataArr);
  const patchId = patchHeadToData((content) => content.id);
  const result = patchId(basic)(content);
  console.log(result);
}

main();
