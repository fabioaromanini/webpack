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

### Vendor asset caching (section 5)
Major browsers use caching as a way to improve the velocity that pages take to load. With Webpack and code splitting, we can take advantage of it. First, the vendor (third party) code should be separated from the application source code, so that it won't be downloaded everytime the source code is updated.
