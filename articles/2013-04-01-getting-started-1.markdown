Title: Getting started... :  Wheat setup, part 1
Author: Eric Stiles
Date: Apr 1 2013 17:30:00 GMT-0500 (CST)
Categories: node,blog,wheat
Email: stiles.eric@gmail.com


I've been wanting to learn node.js for awhile. With that in mind I've switched from [Octopress][] to [Wheat][] due to a growing interest in [node.js][] (lots of links :-). Wheat is a very simple
blogging platform that gets the job done by reading [haml][] markdown files stored in [git][].

##Choices

There are a number of choices some that to look at:

 - [Poet](http://jsantell.github.io/poet/)
 - [Scotch](https://github.com/techwraith/scotch)
 - [Blacksmith](http://blog.nodejitsu.com/introducing-blacksmith)
 - [Calipso](http://calip.so/)
 - [MVC-CMS](https://github.com/dpirek/nodejs-mvc-cms)

##Sounds like a lot of work...

Well, it depends.  Wheat, as most engines not named Wordpress are, is designed for coders to use.  The fun is in implementing the technology as much as publishing articles.  While I wasn't previously familiar with haml
understanding markdown was enough to get started. As node continues to gain momentum the focus will shift to offer simple OOTB functionality with a nice clean UI/UX on top, but for now

As a starting point I recommend the following article: "[Node Powered GIT Blog With Wheat](http://blog.ecommit-consulting.be/node-powered-git-blog-with-wheat)" where the author goes into detail steps on setting up a
new blog.  Since the article is written in wheat the author has been kind enough to provide his repository in github as a starting point for new users.

Unfortunately, it doesn't look like wheat is being maintained and the author is using a set of tools the he admittedly doesn't support. In the end, you can't be the simplicity of the tool as a foundation to modify it
as needed.

## Recommendations

One of the key points of the reference article above is that using post_hooks articles can be pushed to a bare repository where the node server is running.  For my implementation I want to push only published
articles to [github][] from my local repository.  From the sample articles it can be inferred that articles without the *.markdown extension are not published.  I have created a hidden folder under articles that is
ignore by git.  In the hidden folder I can create multiple draft articles as I complete an article I move it from "articles/hidden" to "articles".

For naming articles I like the Octopress convention YYYY-MM-DD-post-title.markdown.  This helps keep articles organized.

For new blogs based on the sample github repository above be aware that several configurations are hardcoded into the implementation
 - Wheat uses a hash for an email to pull a [gravatar][] image.  By default the authors id from his email is used.
 - Disqus is set up with the authors id
 - Twitter is setup with the

##References

- [thechangelog.com](http://thechangelog.com/wheat-blog-engine-for-node-js/)
- [Howtonode.org code](https://github.com/creationix/howtonode.org)
- [gith github webhooks for node](http://weblog.bocoup.com/introducing-gith-github-webhooks-for-node/)
- [GitHub Post Receive Hooks](https://help.github.com/articles/post-receive-hooks)
- [Wheat by creationix](https://github.com/creationix/wheat)
- [Node.JS library to read git repositories. ](https://github.com/creationix/node-git)
- [A simple CLI tool for ensuring that a given script runs continuously (i.e. forever) ](https://github.com/nodejitsu/forever)
- [Markdown reference](http://daringfireball.net/projects/markdown/basics)

[node.js]: http://nodejs.org/
[Wheat]: http://github.com/creationix/wheat