

var express = require("express");
var friendsArray = require("../app/data/friends.js");
var app = express();

module.exports = function(app) {
   app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });
};

	app.post("/api/friends", function(req, res){

	var newFriend = req.body;

	var magicMatch = {};


      for(var i = 0; i < newFriend.scores.length; i++) {
        if(newFriend.scores[i] == "1 >Strongly Disagree)") {
          newFriend.scores[i] = 1;
        } else if(newFriend.scores[i] == "4 >Strongly Agree)") {
          newFriend.scores[i] = 4;
        } else {
          newFriend.scores[i] = parseInt(newFriend.scores[i]);
        }
      }
      // compare the scores of newFriend w/database
      //greatest score difference is ten
      var magicMatchDifference = 10;

      for(var i = 0; i < friends.length; i++) {
        var totalDifference = 0;

        for(var index = 0; index < friendsArray[i].scores.length; index++) {
          var differenceOneScore = Math.abs(friendsArray[i].scores[index] - newFriend.scores[index]);
          totalDifference += differenceOneScore;
        }

        // if the totalDifference in scores is less than the best match so far
        // save that index and difference
        if (totalDifference < magicMatchDifference) {
          magicMatchIndex = i;
          magicMatchDifference = totalDifference;
        }
      }

      magicMatch = friendsArray[magicMatchIndex];

      // Places new user input in "database" array
      friendsArray.push(newFriend);

      // return match
      res.json(magicMatch);


  });







