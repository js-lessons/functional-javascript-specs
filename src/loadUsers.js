function loadUsers(ids, load, done) {
  var completed = 0;
  var loaded = [];

  ids.forEach(function(id, index) {
    load(id, function(el) {
      loaded[index] = el;
      if (++completed === ids.length) return done(loaded);
    });
  });
}

module.exports = loadUsers;
