'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Repository Schema
 */
var RepositorySchema = new Schema({
  name: {
      type: String,
      trim: true,
    },
    url : {
      type: String,
    },
    active : {
      type: Boolean,
      default: false
    },
    test : {
      type: Array,
      default: []
    },
    lastUpdata : {
      type: Date
    },
    lastCommit :{
      type: String
    }
});

mongoose.model('Repository', RepositorySchema);
