var connection = require("./connection.js");

function generateQuestionMarks(num) {
    var array = [];
    for (var i = 0; i < num; i++) {
        array.push("?");
    }
    return array.toString();
};

//i don't understand what is happening in this function...
function translateSql(obj) {
    var array = [];
    for (var key in obj) {
        array.push(key + "=" + obj[key]);
    }
    return array.toString();
}

var orm = {
    selectAll: function (tableName, cb) {
        var queryString = "SELECT * FROM " + tableName;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            //why cb here? what does it mean?
            cb(result);
        });
    },

    //don't understand this function either...
    insertOne: function (tableName, cols, vals, cb) {
        var queryString = "INSERT INTO " + tableName + " (" + cols.toString() + ") " + "VALUES (" + generateQuestionMarks(vals.length) + ") ";
        console.log(queryString);
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function (tableName) {
        var queryString = "UPDATE" + tableName + " SET " + translateSql(objColVals) + " WHERE " + condition;
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;
