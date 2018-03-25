# Webpack

Webpack is a build tool intended to provide ways to work with javascript modules.
This is an important feature due to the increasing amount of client side-rendering.

It will take an entry point, and assemble a single javascript file with your whole application,
so that you'll be able to load that file as a script in a html document.
Also, before assembling the single file - which will call *bundle* - webpack may summon loaders,
like babel, that will be applied to a pattern of files designated by the user.
