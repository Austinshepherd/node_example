const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100status=active');

// serialized URL
console.log(myUrl.href)


// Host (root domain)
console.log(myUrl.host);

//Hostname (does not get port)
console.log(myUrl.hostname);

//Pathname
//console.log(myUrl.pathname);

//serialized query
console.log(myUrl.search);