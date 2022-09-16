import calculate from '../logic/calculate';

describe('Caculator testing', () => {
  test('add two operations', () => {
    const input = {
      total: 5,
      next: 2,
      operation: "+",
    };
    const output= {
      total: "7",
      next: null,
      operation: null,
    }
    expect(calculate(input, "=")).toEqual(output);
  });
  test('multiply two operations', () => {
    const input = {
      total: 5,
      next: 2,
      operation: "x",
    };
    const output= {
      total: "10",
      next: null,
      operation: null,
    }
    expect(calculate(input, "=")).toEqual(output);
  });
  test('divide two operations', () => {
    const input = {
      total: 10,
      next: 2,
      operation: "-",
    };
    const output= {
      total: "8",
      next: null,
      operation: null,
    }
    expect(calculate(input, "=")).toEqual(output);
  });
  test('divide two operations', () => {
    const input = {
      total: 10,
      next: 2,
      operation: "÷",
    };
    const output= {
      total: "5",
      next: null,
      operation: null,
    }
    expect(calculate(input, "=")).toEqual(output);
  });
  test('Remaining two operations', () => {
    const input = {
      total: 2.4,
      next: 2,
      operation: "÷",
    };
    const output= {
      total: "1.2",
      next: null,
      operation: null,
    }
    expect(calculate(input, "=")).toEqual(output);
  });
  test('Remove all operations', () => {
    const input = {
      total: 2,
      next: null,
      operation: "+",
    };
    const output= {
      total: null,
      next: null,
      operation: null,
    }
    expect(calculate(input, "AC")).toEqual(output);
  });
  test('Add the dot', () => {
    const input = {
      total: 2,
      next: null,
      operation: "-",
    };
    const output= {
      total: 2,
      next: "0.",
      operation: "-",
    }
    expect(calculate(input, ".")).toEqual(output);
  });
  test('Add the dot', () => {
    const input = {
      total: 2,
      next: 2,
      operation: "+",
    };
    const output= {
      total: "4",
      next: null,
      operation: "-",
    }
    expect(calculate(input, "-")).toEqual(output);
  });
});
