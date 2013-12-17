Title: Technical Debt: eCommerce Roadmap
Date: October 14 2013 17:30:00 GMT-0500 (CST)
Categories: eCommerce
Email: stiles.eric@gmail.com

What does it take to stand up a new eCommerce program for a company?

eCommerce Roadmap

•	1)Business Vision Roadmap
o	The business needs to define the direction that the ecommerce program needs to move towards
•	2)Technical Roadmap
o	Given the business vision the technical solution can be developed.  The enterprise architecture team is the foundation of this solution.
o	Problems with HEB
•	There is no technical roadmap
•	HEB is asking the Vendor for the solution
•	EA should be heavily involved.  They are not involved in critical meetings
•	Key points of the roadmap to be completed before the Vendor is brought onsite
o	ISD (Speed FC) is only to define the attributes that are needed by the vendor
o	Product Catalog
•	Before involving the vendor
•	Customer Facing Hierarchy
•	For HEB, this should not be in Product Master.  This will need to be managed as a hierarchy that products should sit in.  The business should manage this hierarchy as close to the customer facing solution as possible
•
o	Inventory Management
o	Pricing Engine
o	Promotions Engine
o	Business workflows for CRUD and review and approval process
•	Business
o	Paul has experience
o	Rest of team is still learning
o	Vision is Amazon has a world-class site.  Its good to have a goal
•	The existing processes will not support this vision.  Do not have the resources to support the vision
•	Need to bring in a business process consultant that can help define process requirements.  These requirements will drive the technical solution.
•	Deriving a process has several factors
•	Time to market
•	Security
•	Optimizing resources
•	Pull some notes from Meijer trip for here
•	Try to analyze how other vendors are merchandising
•	Online marketing strategy
o	Speed FC is not part of business solution implementation.  They are only providing technical solution.  They don’t care where data is maintained or how it is maintained.  They just want to get the data into their system/solution as efficiently as possible.
o	The retailer should develop the business processing to drive the vendor
o	Once a business flow is developed, plan for the resources now.  The market is very tight and the resources may not be available when you need them (Very Critical)
•	The eCommerce team should have its own vertical business
o	President/Vice-President
o	Director
o	Program Manager
o	Manager
o	Architect
•	Integration Architect is huge
o	Technical Leads
o	Developers
•	Business Merchandising
o	HEB’s current weak spot
o	Need a business process consultant onsite to help develop process
•	Sapient
•	Mapping Events
•	OMS – Order Management System
o	Should look at using a marketplace solution.  There are many standard workflows
o	Should look at having a fulfillment process consultant brought in
•	Niche skill
•	They will study
•	existing fulfillment requirements in the store
•	online fulfillment processes (not good right now)
•	May not have many companies share fulfillment processes since this is critical and unique piece that is company specific.
•	Want to be able to get the items from the warehouse to the store to the customer as efficiently as possible.
•	Coms requirements are be defined by what Speed FC needs in January and what can be done for a January release
•	This will create an unstable long-term solution
•	Development Methodology
o	Sprint model requires heavy involvement with the business
•	Too many people are brand new to ecommerce, don’t understand
•	BCC Requirements
o	BCC – there is not a focus on BCC requirements (Sapient can help with this).  Workflow approval is where the big work should be done
o	Speed FC is only worried about the bringing up the storefront
o	Managing attributes of items is simple
o	Part of the solution is to understand how quickly an approval process can be completed
•	Integration Tracks
o	Need at least one person with some experience
o	Speed FC is not worried about aggregating information for the feed.  This is the retailers responsibility to provide a solution
o	Speed FC needs 6 feeds
•	Product feed
•	Product Locator feed
•	Store Specific Assortment feed
•	LISTEN for the rest of the list – lost time
o	Speed FC is trying to resolve how to map this solution to the Endeca pipeline so that it can be ingested as quickly as possible
o	With all 6/7 feeds what the flow going to be
•	Need a list of various use cases
•	What happens if a product is de-activated from being sold online?  What is the flow going to be to let the ecommerce team going to know
•	If there are errors on the ecommerce site Speed FC won’t care.  How will we get this
•	All possible solutions and flows
o	What is the order of a flow
•	Price Change
•	Inventory Change
•	Expired Coupons
o	Ramesh needs to say that this information needs to flow to the storefront
•	Speed FC is not worried about the dependency of the feeds and the flow of information.  ISD is Speed FC requirement.  Speed needs to define repository definitions based on the ISD
•	Integrations team doesn’t understand the complete flow
•	ICC can’t develop solution based on ISD
•	They are working on how CRUD requirements for products (17:10 left)
•	Integration architect needs to understand and ask questions
o	Spell out technical requirements
o	Do not need the vendor for this solution development
o	Listen for the Endeca Statement
•	The Speed FC recommendation is based on ingesting
o	The message is that we started with the review exercise
•	Need to understand the definition of
•	Product
•	UPC
•	CTS did this previously because no one was doing this.
•	They sat with ICC to review each and every attribute that was being sent to the store to understand what is being sent and see what they needed
•	Peter had a previous direction that ICC resources were scarce and they wouldn’t be able to complete changes specifically for the ecommerce effort so we needed to make the maximum use of the existing feeds,  but should have created new feeds
o	With variables needed
o	And timings specific to the eCommerce ingestion process
•	EA
•	Need an eCommerce Architect
•	Their input is the business vision.
•	They need to drive technical solutions not the executives.
•	Executives don’t fully understand the technical implication of the decision.  Soon down the line the CFH will be pulled out of PM tool and cost more money
o	Example if the Grid Unit Testing Framework.  Throw-away code that cost 300K.  Won’t be used moving forward
•	2000 – Widpro built custom BCC (1st solution) for Best Buy (PCMS – Product Catalog Management System).  Sold to ATG
•	All clients that we are familiar with BCC.  Makes more sense to use BCC since the framework will take of the necessary events for the process.
•	Keeping the CFH in PM means that the event management will still need to be coded for the CFH in ATG.  So management is in two places.
•	JCPenny’s – used a custom tool built from scratch (by Infosys) before moving to BCC.  Didn’t have a workflow.
•	Looked at managing CFH in Endeca, but Endeca can’t be the source.  Endeca doesn’t have the workflow.  Endeca strength is the indexing of the solution
•	Sprint model won’t work  as ground up development methodology.  Need a linear approach initially and then can transition to a sprint model.
