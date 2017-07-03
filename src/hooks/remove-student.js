// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations

    if ( hook.data.remove === undefined) return Promise.resolve(hook)

      return hook.app.service('batches').get(hook.id).then((batch) =>{

        students = batch.students.filter((stud) => {
          return stud._id != hook.data.student
        })
        hook.data.students = students
       })


    return Promise.resolve(hook);
  };
};
