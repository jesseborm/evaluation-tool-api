// batches-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient

  const studentSchema = new mongooseClient.Schema({
    fullName: { type: String, required: true },
    picture: { type: String, required: true },
    evaluation: [evaluationSchema]
  })

  // better to use evaluationSchema as Object key=date and value=color.

  const evaluationSchema = new mongooseClient.Schema({
    date: { type: Date, required: true },
    color: { type: String },
    remark: { type: String }
  })

  const batches = new mongooseClient.Schema({
    batchNumber: { type: String, required: true },
    starts: { type: Date, required: true },
    ends: { type: Date, required: true },
    students: [studentSchema],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('batches', batches);
};
