var PlayMusic = require('playmusic');
var pm = new PlayMusic();
pm.login({email: "email@address.com", password: "password"}, function(err) {
    if(err) console.error(err);
    debugger;
    // place code here
})