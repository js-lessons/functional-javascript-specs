function loadUsers(userIds, load, done) {
  var users = [];

  for (var i = 0; i < userIds.length; i++) {
    load(userIds[i], function(user) {
      console.log(user);
    })

    users.push(load(userIds[i]));
  }
  done(users);
}

module.exports = loadUsers
