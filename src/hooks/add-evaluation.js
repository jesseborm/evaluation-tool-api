// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    // if (hook.data.evaluation === undefined) return Promise.resolve(hook);
    console.log(hook.data);


    return hook.app.service('batches').get(hook.id)
    // console.log(batch);
      .then((batch) => {
        const { students } = batch
        const student = students
        .find(stud => stud._id.toString() === hook.data.studentId.toString())
        const { evaluation } = student
        console.log(evaluation);


    //     // hook.data.evaluation.color = "grey"
    //     hook.data.evaluation = [{}]
    //     // hook.data.evaluation.color = "grey"
    //
    //
        hook.data = {
          evaluation: evaluation.concat(hook.data.evaluation)
        }
        console.log(hook.data);
      })


    return Promise.resolve(hook);
  };
};
