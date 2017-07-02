// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    console.log(hook);
    if (hook.data.fullName === undefined) return Promise.resolve(hook);

    return hook.app.service('batches').get(hook.id)
    // console.log(batch);
      .then((batch) => {
        const { students } = batch
        // hook.data.evaluation.color = "grey"
        hook.data.evaluation = [{}]
        // hook.data.evaluation.color = "grey"


        hook.data = {
          students: students.concat(hook.data)
        }
      })
    return Promise.resolve(hook); // is this the right place
  }
}
