const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const moment = require('moment');
// Schema to create Post model
const thoughtSchema = new Schema(
  {
   thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
   },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a'),
    },
    username: {
      type: String,
      required: true,
    },
  
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `reactions` that gets the amount of reactions per thought
thoughtSchema
  .virtual('getReactions')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
