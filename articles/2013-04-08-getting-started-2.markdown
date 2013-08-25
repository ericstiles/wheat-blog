Title: Getting started... :  Wheat setup, part 2
Author: Eric Stiles
Date: Apr 3 2013 17:30:00 GMT-0500 (CST)
Categories: node,blog,wheat,ec2,aws
Email: stiles.eric@gmail.com

In this article I'll run through the setup of this blog on an ec2 instance with a cheap dns entry.

## PaaS

I've seen a number of articles on the use of various PaaS and spent some time, about an hour
each, reviewing them.  Ultimately, for my purposes I just directly provisioned an ec2 micro instance and within about
an hour had it updated and everything installed.  This may not be a fair assessment for other people as I had previously
spent a significant amount of time previously learning how to use the aws cli and had some simple shell scripts for
quickly setting up an instance.

I'm sure the provisioning and setup for some, most or all of the services below is easier than setting an ec2, but once I have a core
image I can use it for future provisioning.  The cost 

 - [Cloudfoundry](http://cloudfoundry.com)
 - [Heroku](http://heroku.com)
 - [Nodejitsu](http://nodejitsu.com) - It's important to know that nodejitsu only allows port 80.  Great security,
   but a little lacking in flexibility
 - [Openshift](http://openshift.com)
 - [Vagrant](http://vagrant.com)

To be fair the ec2 instance is a single instance and I didn't attach an EBS to it so that if it crashes I'll will have to manually
intervene, but I can grow this out later.

## Provisioning

This isn't a tutorial on setting up an ec2 as there are excellent tutorials that can walk a user through the
steps far better than I can do here.  At a high level there are two main ways to create an instance

 - AWS UI Interface
 - Command line after installing the ec2 CLI tool set

For a small blog such as this I recommend using a the smallest cheapest instance possible (a micro-instance with 613 MB of memory) on RHEL.  
The cheapest option runs about $6.44 a month over 3 years (Totaling $231.76).

A key pair is required to ssh to the server after it is running.  Amazon can create this for you or you can upload one.

## Security Groups

For the security groups open the following ports

 - 22 for SSH
 - 80 for HTTP
 - 443 for HTTPS
 - 7000 for github

Remember to modify the instance iptables configuration (or for the risk-takers disable it :-).  With Amazon's security groups iptables are not a 
strict security requirement, but some sort of port forwarding will be needed later.

## Installation

With an ec2 instance a user is starting from scratch.  A complete install of [nodejs] is required.  The following
 command will get that done

    wget http:////nodejs.org/dist/node-latest.tar.gz
    tar -zxvf node-latest.tar.gz
    rm -rf node-latest.tar.gz

Switch to the unzipped node folder and build the software.

    cd node-vX.X.X
    ./configure --prefix=/usr
    make
    make install

After installing nodejs and npm the following modules need to be installed

    npm install wheat
    npm install stack
    npm install creationix

In order to run node as a child process run the following

    npm install forever

## HTTP & HTTPS

As mentioned above I actually setup SSL that forwards to port 80, but as a rule non-root users generated processes
cannot listen on ports less than 1024.  Additionally, as a best practice root users should not start processes (who
wants to accidently delete their OS because the application did something unexpected).

    sudo /usr/bin/node app.js

A work-around is to add a port forwarding rule via `iptables`.  So generally the most I do is to turn off the iptables (after spending an hour trying to figure out why I can't see the server).

Follow the following steps ([Great Gist](https://gist.github.com/kentbrew/776580))

    sudo iptables -t nat -L

**Output:**
>Chain INPUT (policy ACCEPT)
>target prot opt source destination
>
>Chain FORWARD (policy ACCEPT)
>target prot opt source destination
>
>Chain OUTPUT (policy ACCEPT)
>target prot opt source destination

No rules present so now let's add a rule forwarding from external port 80 to internal port 8000.

    sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8000

Listed again there is a a new PREROUTING chain:

    sudo iptables -t nat -L

**Output:**
>Chain PREROUTING (policy ACCEPT)
>target prot opt source destination
>
>REDIRECT tcp -- anywhere anywhere tcp dpt:http redir ports 8000

Check the node server to confirm it is listening on port 8000, but is writing responses to port 80.
    
## Start Server

The one gap in the overall solution for wheat is the approach for a production release is to use a bare repository.  The
server code must be pushed to the server another way since the bare repository does not contain any files.

Additionally the **server.js** untouched as configured code must exist within the bare git repository as a file.  It makes it easier to go ahead and
keep the **logger.js** and **hook.js** files in the same location.

Following from the reference article [http://blog.davydewaele.be/node-powered-git-blog-with-wheat](http://blog.davydewaele.be/node-powered-git-blog-with-wheat)
use the **forever** module to start a child process for gith and wheat.

The start.sh script below follows the code structure below:

    #!/bin/sh

    SCRIPTPATH="${BASH_SOURCE[0]}"
    SCRIPTDIR="$(cd "$(dirname "${SCRIPTPATH}")" ; pwd)"
    GITREPO="wheat-blog.git"
    BLOGPATH=$SCRIPTDIR/../$GITREPO

    # Invoke the Forever module to start the Github server hook.
    $BLOGPATH/server/node_modules/forever/bin/forever \
    start \
    -al github-servicehook.log \
    -ao github-servicehook-out.log \
    -ae github-servicehook-err.log \
    $BLOGPATH/server/hook.js

    # Invoke the Forever module to start our blog.
    $BLOGPATH/server/node_modules/forever/bin/forever \
    start \
    -al wheat-blog-forever.log \
    -ao wheat-blog-out.log \
    -ae wheat-blog-err.log \
    $BLOGPATH/server/server.js

The stop.sh script is more generic in that it looks for all processes, excluding the grep search that contain ".js".
From there it grabs the PID and kills them, otherwise nothing is done and the user is made aware nothing exits.

    #!/bin/sh

    array=($(ps -ef | grep .[j]s | sed 's/\s\s*/ /g' | cut -d ' ' -f 2 ))
    printf "Stopping javascript processes\n"
    if [ "${#array[@]}" -gt "0" ]; then
      for i in "${array[@]}"
      do
        printf "...killing process("$i")\n"
        kill -9 $i
      done
    else
      printf "...no processes found to kill\n"
    fi

[git]: http://git-scm.com
[haml]: http://haml.info
[node.js]: http://nodejs.org/
[Octopress]: http://octopress.org
[Wheat]: http://github.com/creationix/wheat

