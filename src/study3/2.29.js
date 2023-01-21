import { list, head, tail, is_number as isNumber, display } from 'sicp';

function makeMobile(left, right) {
  return list(left, right);
}

function makeBranch(length, structure) {
  return list(length, structure);
}

function leftBranch(mobile) {
  return head(mobile);
}

function rightBranch(mobile) {
  return head(tail(mobile));
}

function branchLength(branch) {
  return head(branch);
}

function branchStructure(branch) {
  return head(tail(branch));
}

function isBranch(mobileOrBranch) {
  return isNumber(head(mobileOrBranch));
}

function totalWeight(mobile) {
  if (isBranch(mobile)) {
    const structure = branchStructure(mobile);
    return isNumber(structure) ? structure : totalWeight(structure);
  } else {
    return totalWeight(leftBranch(mobile)) + totalWeight(rightBranch(mobile));
  }
}

function isBalanced(mobile) {
  if (isBranch(mobile)) {
    return true;
  } else {
    const left = leftBranch(mobile);
    const right = rightBranch(mobile);
    const leftWeight = totalWeight(left);
    const rightWeight = totalWeight(right);
    return (
      isBalanced(left) &&
      isBalanced(right) &&
      leftWeight * branchLength(right) === rightWeight * branchLength(left)
    );
  }
}

const aMobile = makeMobile(
  makeBranch(1, makeMobile(makeBranch(2, 3), makeBranch(3, 2))),
  makeBranch(3, 15)
);

display(totalWeight(aMobile));
display(isBalanced(aMobile));
