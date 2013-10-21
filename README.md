Wheat Blog 
==========

[Wheat-blog](http://ericstil.es) running on an ec2 server.

## Documentation

Check out the [github project](https://github.com/creationix/wheat) for guides and documentation.  I've forked the code and have been adding some new
functionality such as a tag cloud and and author page.  The package.json is pulling from my [github wheat project](http://github.com/ericstiles/wheat)
rather than a published npm module

```json
"dependencies": {
  "cluster": ">=0.6.4",
  "forever": ">=0.10.0",
  "connect": ">=2.4.3",
  "creationix": "~0.3.1",
  "stack": "~0.1.0",
  "wheat": "git://github.com/ericstiles/wheat.git"
}
```

## Folder Structure

Since I'm working on this project without publishing to npm the working folder structure is a little different than may be
expected.  With the standard install everything is managed in a bare git repository.  I've separated out articles in the bare
repository with a cloned repository of the my wheat fork (blog-server) and created a symbolic link to be clear what is in the
repository.

* articles -> wheat-blog.git/
* blog-server
* wheat-blog.git

## License
(The MIT License)
