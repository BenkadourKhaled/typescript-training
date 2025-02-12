"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sports = ['Golf', 'Cricket', 'Tennis', 'Badminton', 'Swimming'];
for (var i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}
console.log('----------------');
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    if (sport == 'Cricket') {
        console.log(sport + ' << My Favorite !');
    }
    else {
        console.log(sport);
    }
}
