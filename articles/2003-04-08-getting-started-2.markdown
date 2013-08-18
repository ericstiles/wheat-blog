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


 - Cloudfoundry
 - Openshift
 - Heroku
 - Nodejitsu
 - Openshift
 - Vagrant

To be fair it's a single instance and I didn't attach an EBS to it so that if it crashes I'll will have to manually
intervene.

## Provisioning

## Security Groups

## Installation

## HTTP & HTTPS

## Starting The Server