# Webpack

Webpack is a build tool intended to provide ways of working with javascript modules.
This is an important feature due to the increasing amount of client side-rendering.

### Bundle and Loaders (sections 2 and 3)
Basically, webpack will load the javascript entry file to your project, and assemble a single javascript file with your whole application,
so you'll be able to load that file as a script in a html document.
Also, before assembling the single file - which we will call *bundle* - webpack may summon loaders like babel,
that will be applied to files that match a pattern designated by the user. This loader will **preprocess** the project,
generating a build suitable for production, transpiling the language, asserting relative paths, creating stylesheets,
injecting images, loading variables etc.

### Codesplitting (section 4)
Webpack may also split your code into several js pieces, thus, decreasing the amount of code you need to execute/download
when accessing a specific part of your project (your login page, for instance, does not require your home page code).
While this increases the amount of requests, it will decrease the size of those requests. If a key page of your application is often accessed,
it's access time may be reduced if it only requires you to download a small amount of code!

### Cache (section 5)
Major browsers use caching as a way to improve the velocity that pages take to load. With Webpack and code splitting, we can take
advantage of it. First, the vendor (third party) code should be separated from the application source code, so that it won't be
downloaded everytime the application's main code is updated (i.e., if you update a feature and still use the same libs, there is
no need to download once again the same old libs code). After that, you should ensure that the cached version of the user is up 
to date, and for that, chunk hash is used. Chunk hash is a string related to the content of the file. Whenever two file haves
exaclty the same content, their hash will be the same. This hash is then appended to the file name, so that the name also
identifies the version of the file (i.e., vendor.h12kj3712k3g83gjk44h.js). This technique is called *cache-busting*.

### html-webpack-plugin (section 5)
As you split the code into many different scripts, every single one of those scripts must be referenced in your application index.html.
While you can do it manually, it's very error-prone and tedious. In order to solve this, there is a plugin called "html-webpack-plugin",
that will generate a new index.html from a template every time you build the application. Every script generated from the build will
be automatically inserted in this HTML!

### webpack-dev-server (section 6)
Webpack-dev-server is a middleware between a webpack build output and the client. It will watch the source code, and everytime a change ocurr, it will update the
individual module that was altered, therefore, resulting in a faster build. Also, when using the dev-server, there is no need to manually open a html file.
Instead, it will serve the files to requests directed to a specific port on the localhost.
