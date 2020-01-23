//Global variables
var friends = ['David', 'Alex', 'Pawel', 'Casper', 'Joseph'];
var locations = ['Kitchen', 'Bathroom', 'Living Room', 'Food Court', 'Car', 'Staircase', 'Bedroom', 'Bottom of the ocean', 'The arctic circle', 'Moon']
var weapons = ['Nuke', 'Fork', 'Toothpick', 'Shard of glass', 'Sponge', 'Towel', 'Coffee mug', 'Gun', 'Knife', 'Pencil', 'Shank', 'Dart', 'Fart', 'Spoon', 'Pillow', 'Hammer', 'Screwdriver', 'Chainsaw', 'Drill', 'Cucumber']


//Creating 100 h3's 
for (var i = 1; i < 101; i++) {
    var h3 = $('<h3 class="accused">Accusation ' + i + '</h3>');
    $('body').append(h3);
    //appending click listiner
    $(h3).click(function (e) {
        //getting h3 text content for the alert box
        var x = e.target.textContent
        var num = accusation();
        //creating the accusation text for the alert box
        function accusation() {
            return function () {
                alert(x + ': I accuse ' + friends[i % friends.length] + ', with the ' + weapons[i % weapons.length] + ' in the ' + locations[i % locations.length] + '!')
            }
        }
        //incrementing i for the alert box
        i++
        //invoking accusation function
        num();
    });
}
