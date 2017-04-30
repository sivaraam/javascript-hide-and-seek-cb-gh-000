function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  debugger;
  var rankedLists = document.querySelectorAll(".ranked-list");

  for (let listIndex = 0; listIndex < rankedLists.length; listIndex++) {
    let listItems = rankedLists[listIndex].children;

    for (let listItemIndex = 0; listItemIndex < listItems.length; listItemIndex++)
      listItems[listItemIndex].innerHTML = parseInt(listItems[listItemIndex].innerHTML) + n;
  }
}

function deepestChild() {
  var root = document.querySelector('div#grand-node');
  //debugger;

  function findDeepest(element, currMax) {
    if(element) {
      if(element.children.length != 0)  {
        let deepestChildFromElement = null;
        let depth = 0;

        for(let index=0; index<element.children.length; index++) {
          let [deepestChild, max] = findDeepest(element.children[index], currMax+1);
          if(max > currMax) {
            deepestChildFromElement = deepestChild;
            depth = max;
          }
        }
        return [deepestChildFromElement, depth];
      }
      else {
        return [element, currMax];
      }
    }
    return [null, currMax];
  }

  var [deepestChild, depth] = findDeepest(root, 0)
  console.log(deepestChild);
  return deepestChild;
}
