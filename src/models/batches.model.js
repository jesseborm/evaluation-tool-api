// batches-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient

  const evaluationSchema = new Schema({
    date: { type: Date, required: true },
    color: { type: String, default: "grey" },
    remark: { type: String }
  })
  const studentSchema = new Schema({
    fullName: { type: String, required: true },
    picture: { type: String }, //, required: true
    evaluation: [evaluationSchema]
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
