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

I'm sure the provisioning and setup for some, most or all of these is simpler than

 - [Cloudfoundry](http://cloudfoundry.com)
 - [Heroku](http://heroku.com)
 - [Nodejitsu](http://nodejitsu.com) - It's important to know that nodejitsu only allows port 80.  Great security,
   but a little lacking in flexibility
 - [Openshift](http://openshift.com)
 - [Vagrant](http://vagrant.com)

To be fair it's a single instance and I didn't attach an EBS to it so that if it crashes I'll will have to manually
intervene.

## Provisioning

I don't want to make this a tutorial on setting up an ec2 as there are excellent tutorials that can a user through the
steps far better than I want to do here.  At a high level there are two main ways to create an instance

 - AWS UI Interface
 - Command line after installing the ec2 CLI tool set

For a blog I recommend using a the smallest cheapest instance possible (a micro-instance with 613 MB of memory) on RHEL.

A key pair is required to ssh to the server after it is running.  Rather than let Amazaon create that keypair I
recommend creating one locally as you will want to use and know the pass phrase.

## Security Groups

For the security groups open the following ports

 - 22 for SSH
 - 80 for HTTP
 - 443 for HTTPS
 - 7000 for github

Remember to modify the instance ip tables (or for the risk-takers disable it :-)

## Installation

With an ec2 instance a user is starting from scratch.  A complete install of [nodejs] is required.  The following
 command will get that done

    wget

After installing nodejs and npm the following modules need to be installed

	npm install wheat
	npm install stack
	npm install creationix

In order to run node as a child process run the following

    npm install forever

## HTTP & HTTPS

As mentioned above I actually setup SSL that forwards to port 80, but as a rule non-root users generated processes cannot listen on ports less than 1024.  Additionally, as a best practice
root users should not start processes (who wants to accidently delete their OS because the application did something unexpected). So no

    sudo /usr/bin/node app.js

A work-around is to add a port forwarding rule via `iptables`.  So generally the most I do is to turn off the iptables (after spending an hour trying to figure out why I can't see the server).

Follow the following steps ([Reference]())
 1. List the rules currently running on the NAT (Network Address Translation) table:

    sudo iptables -t nat -L


    Output:

    Chain INPUT (policy ACCEPT)
    target prot opt source destination

    Chain FORWARD (policy ACCEPT)
    target prot opt source destination

    Chain OUTPUT (policy ACCEPT)
    target prot opt source destination

 2. No rules present so now let's add a rule forwarding from external port 80 to internal port 8000.

    sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8000`


When I listed again, I saw a new PREROUTING chain:

[ec2-user@ip-XX-XXX-XX-X ~]$ sudo iptables -t nat -L

Chain PREROUTING (policy ACCEPT)
target prot opt source destination
REDIRECT tcp -- anywhere anywhere tcp dpt:http redir ports 8000
I checked my Node script, which was running on port 8000, and (yes!) it was responding on port 80.

## Fumbling

During my early attempts I screwed up a bunch of times. I removed busted rules by specifying the right table, the right chain, and the right line number, like so:

[ec2-user@ip-XX-XXX-XX-X ~]$ sudo iptables -t nat -D PREROUTING 1

This removed the first line from the `PREROUTING` chain in my nat table.

## Careful, now....

I did not do this myself but throughout this process I had a very strong feeling I should be very careful not to screw up port 22, which was my only way in.

## Acknowledgements:

- [@rckenned](http://twitter.com/rckenned),
- [@jrconlin](http://twitter.com/jrconlin),
- [@spullara](http://twitter.com/spullara),
- [@frozentux](http://twitter.com/frozentux) for <http://iptables.rlworkman.net/chunkyhtml>, which is a pretty definitive iptables tutorial.

dfgonzalez commented 2 years ago

Worked like a charm in aws, tha

## Starting The Server





Semantic Versioning