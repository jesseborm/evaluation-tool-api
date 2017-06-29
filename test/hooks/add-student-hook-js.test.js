const assert = require('assert');
const addStudentHookJs = require('../../src/hooks/add-student-hook-js');

describe('\'add-student-hook.js\' hook', () => {
  it('runs the hook', () => {
    // A mock hook object
    const mock = {};
    // Initialize our hook with no options
    const hook = addStudentHookJs();

    // Run the hook function (which returns a promise)
    // and compare the resulting hook object
    return hook(mock).then(result => {
      assert.equal(result, mock, 'Returns the expected hook object');
    });
  });
});
