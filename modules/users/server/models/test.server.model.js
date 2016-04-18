'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Test Schema
 */
var TestSchema = new Schema({
  numberTests: {
    type: Number,
    default: 0
  },
  testsPass : {
    type: Number,
    default: 0
  },
  exit_input : {
    type: String
  },
  timestamp : {
    type: Date
  }
});

mongoose.model('Test', TestSchema);
