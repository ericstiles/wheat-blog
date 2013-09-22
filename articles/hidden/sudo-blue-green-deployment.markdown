Title: A Node powered Git blog using Wheat
Author: Eric Stiles
Date: Thu Apr 11 2013 23:30:00 GMT-0500 (EST)
Categories: deployments, lean
Email: stiles.eric@gmail.com

Our company recently rolls out major changes to a key application introducing a new integrations and 
new functionality within the application in a big bang approach.  Our Business and 3rd party system 
integrator like introducing new feature in groups over three or four major releases a year.

# "We're Old School And We Like It That Way"

This approach can leave our developers and operations in a risky position of trying to deploy an 
application overnight with everyone on-call to immediately react to found issues in production issues until , 
at 4 in the morning, we decided to rollback, address issues the next day with only a few hours of sleep, 
and try again the next night.

# Rock and a Hard Place

I was put in charge of our next release and as we prepped there was clear indicators based on the timing of teams 
with their implementations that we were not going to be able to introduce new functionality overnight as we were 
previously doing.  Multiple applications needed an hour for deployment across their environments.  The DBAs needed to
 complete a backup as part of their process and the 3rd party QA carved out their time in the process for testing 
 once the production deployment was complete.
 
 
 
 
With 
multiple deployment 
processes each

So the 



