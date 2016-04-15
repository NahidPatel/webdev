/**
 * Created by muaazsalagar on 3/29/16.
 */

"use strict"

module.exports = function (mongoose) {

    var userSchema = mongoose.Schema({

        username: String,
        password: String,
        firstName: String,
        lastName: String,
        emails: [String],
        phones: [String],
        roles: [String]

    }, {collection: 'assignment.user'});

    // returning Schema
    return userSchema;


}