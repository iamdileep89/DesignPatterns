/*
This is a structural design pattern that acts as a surrogate or placeholder for another object to control access to it.

It is usually used in situations in which a target object is under constraints and may not be able to handle all its responsibilities efficiently. A proxy, in this case, usually provides the same interface to the client and adds a level of indirection to support controlled access to the target object to avoid undue pressure on it.

The proxy pattern can be very useful when working with network request-heavy applications to avoid unnecessary or redundant network requests.
*/

/*
In this example, we will use two new ES6 features, Proxy and Reflect. A Proxy object is used to define custom behaviour for fundamental operations of a JavaScript object (remember, function and arrays are also object in JavaScript). It is a constructor method that can be used to create a Proxy object. It accepts a target object that is to be proxied and a handler object that will define the necessary customisation.

*/

// Target
function networkFetch(url) {
  return `${url} - Response from network`;
}

// Proxy
// ES6 Proxy API = new Proxy(target, handler);
const cache = [];
const proxiedNetworkFetch = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const urlParam = args[0];
    if (cache.includes(urlParam)) {
      return `${urlParam} - Response from cache`;
    } else {
      cache.push(urlParam);
      return Reflect.apply(target, thisArg, args);
    }
  },
});

// usage
console.log(proxiedNetworkFetch('dogPic.jpg')); // 'dogPic.jpg - Response from network'
console.log(proxiedNetworkFetch('dogPic.jpg')); // 'dogPic.jpg - Response from cache'