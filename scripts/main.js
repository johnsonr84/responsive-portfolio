// Create a request variable and assign a new XMLHttpRequest object to it 
var request = new HMLHttpResquest()

//Open a new connection, using the GET request on the URL
request.open('GET', 'https://api.github.com/users/johnsonr84/repos', true)

request.onload = function () {
    //Begin accessing JSON data here
    var data = JSON.parse(this.response);
}

// Send request
request.send();