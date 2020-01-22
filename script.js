//Global variables
var friends = ['David', 'Alex', 'Pawel', 'Casper', 'Joseph'];
var locations = ['Kitchen', 'Bathroom', 'Living Room', 'Food Court', 'Car', 'Staircase', 'Bedroom', 'Bottom of the ocean', 'The arctic circle', 'Moon']
var weapons = ['Nuke', 'Fork', 'Toothpick', 'Shard of glass', 'Sponge', 'Towel', 'Coffee mug', 'Gun', 'Knife', 'Pencil', 'Shank', 'Dart', 'Fart', 'Spoon', 'Pillow', 'Hammer', 'Screwdriver', 'Chainsaw', 'Drill', 'Cucumber']


//Creating 100 h3's 
for (var i = 1; i < 101; i++) {
    var h3 = $('<h3 class="accused">Accusation ' + i + '</h3>');
    $('body').append(h3);
    
}


//creating a click function for h3's (works but not comepletly ...does not compute ACCUSSATION)
// This is what I am stuck on, how to connect the h3 with the alert correctly.
$('h3').click(function () {
    (num())
});


//created a counter for each click along with the alert
var num = counter();
function counter() {
    i = 0;
    return function() {
        i++;
        alert('Accusation ' + i + ': I accuse ' + friends[i % friends.length] + ', with the ' + weapons[i % weapons.length] + ' in the ' + locations[i % locations.length] + '!')
    }
}
