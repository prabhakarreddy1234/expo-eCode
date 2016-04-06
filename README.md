# Exponential-e code

### Instructions

```
$ npm install -g bower
$ bower install bootstrap
$ npm install            /* used for server side dependency management
$ bower install          /* used for client side dependency management
```

Please run MongoDB instance on your machine on port 27017 to run the application.
Use nodemon to run the node server under watch mode
When Node server and MongoDB instance are running then go to http://localhost:27017 to access the application

To run the tests use the command ###karma test

Possible future changes :

1. ES6 could be used. As few browsers doesnt support ES6 yet, we have to use tranpiler like Bable to transpile ES6 into ES5
2. Some bundling framework could be used  like browserify or webpack (for browser)
3. Could implement task runner to perform some tasks like build, copy, lint, transpile, bundle etc

### Sample data

| Supplier    | Product      | Price (£) |
| ------------|--------------|-----------|
| New Co Ltd  | Small wongle | 5         |
| New Co Ltd  | Large wongle | 8         |
| New Co Ltd  | Super wongle | 12        |
| Old Co Ltd  | Small wongle | 6         |
| Old Co Ltd  | Large wongle | 9         |
| Old Co Ltd  | Super wongle | 4         |

