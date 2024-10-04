type Operand = number | string;

function combine(a: Operand, b: Operand): Operand {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  } else return 'Invalid Operands'
}