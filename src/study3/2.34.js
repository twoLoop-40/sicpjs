import { accumulate } from './index.js';
import { list, display } from 'sicp';

function hornerEval(coefficientSequence) {
  return (x) => {
    return accumulate(
      (thisCoefficient, higherTerms) => thisCoefficient + x * higherTerms,
      0,
      coefficientSequence
    );
  };
}

display(hornerEval(list(1, 3, 0, 5, 0, 1))(2));
