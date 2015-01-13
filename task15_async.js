//function loadUsers(userIds, load, done) {
  //var users = [],
    //loadedUsers = {};

  //userIds.forEach(function(i) {
    //load(i, function(user) {
      //loadedUsers[i] = user;

      //if (Object.keys(loadedUsers).length === userIds.length) {
        //done(userIds.map(function(id) {
          //return loadedUsers[id];
        //}));
      //}
    //});
  //});
//}

//module.exports = loadUsers

function loadUsers(userIds, load, done) {
  var completed = 0
  var users = []

  userIds.forEach(function(id, index) {
    load(id, function(user) {
      users[index] = user
      if (++completed === userIds.length) return done(users)
    });
  });
}

module.exports = loadUsers
