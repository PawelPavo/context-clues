//Global arrays 
var friends = ['David', 'Alex', 'Pawel', 'Casper', 'Joseph'];
var locations = ['Kitchen', 'Bathroom', 'Living Room', 'Food Court', 'Car', 'Staircase', 'Bedroom', 'Bottom of the ocean', 'The arctic circle', 'Moon']
var weapons = ['Nuke', 'Fork', 'Toothpick', 'Shard of glass', 'Sponge', 'Towel', 'Coffee mug', 'Gun', 'Knife', 'Pencil', 'Shank', 'Dart', 'Fart', 'Spoon', 'Pillow', 'Hammer', 'Screwdriver', 'Chainsaw', 'Drill', 'Cucumber']

//Creating 100 h3's 
for (var i = 1; i < 101; i++) {
    var h3 = $('<h3 class="accused">Accusation ' + i + '</h3>');
    $('body').append(h3);
    $(h3).click(accuse(i)) //invoking the closure function for i
}

//Accusation function with closure
function accuse() {
    var friendText = friends[i % friends.length]
    var weaponText = weapons[i % weapons.length]
    var locationText = locations[i % locations.length]
    //Text for Alert message
    var textAlert = 'Accusation ' + i + ': I accuse ' + friendText + ', with the ' + weaponText + ' in the ' + locationText + '!'
    return function () {
        alert(textAlert)
    }
}