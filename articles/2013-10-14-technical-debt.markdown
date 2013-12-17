Title: Technical Debt: Useful Jargon?
Date: October 14 2013 17:30:00 GMT-0500 (CST)
Categories: technical debt
Email: stiles.eric@gmail.com

I use the term technical debt as part of my casual conversation and as a lead in to detailed explanation of an issue that needs to be addressed for management or as a light talking point where the definition of the talking point is understood.

# Is Technical Debt A Good Term

Recently a coworker and I were discussing Technical Debt and the following article [http://www.fatvat.co.uk/2013/08/technical-debt-and-legacy-code.html](http://www.fatvat.co.uk/2013/08/technical-debt-and-legacy-code.html).
In the article the author suggests that people should stop using the term "Technical Debt" start discussing the problem
as the jargon term "Technical Debt" allows for poor quality and poor communication.

The article later transitions to discussing technical debt as an explanation for issues with legacy code and using the term lessens the ability to communicate on the
issues causing problems.

Valid points.  I think though there are some additional points to think about on Technical Debt.

# Historically Speaking

I’ve never heard the term technical debt used in the context of discussing legacy code.  I'm sure the primary reason is that I don't often work with legacy code and my
perspective is skewed to thinking differently about Ward's comments below:


> Another, more serious pitfall is the failure to consolidate. Although immature code may work fine and be completely acceptable to the customer, excess quantities
will make a program unmasterable, leading to extreme specialization of programmers and finally an inflexible product. Shipping first time code is like going into
debt. A little debt speeds development so long as it is paid back promptly with a rewrite. Objects make the cost of this transaction tolerable. The danger occurs
when the debt is not repaid. Every minute spent on not-quite-right code counts as interest on that debt. Entire engineering organizations can be brought to a
stand-still under the debt load of an unconsolidated implementation, object- oriented or otherwise.

The author suggests that what Ward is saying here is that the build up of technical debt starts when you ship something with an
incomplete understanding of the problem.  While a lack of understanding the problem as the solution is developed will create debt I
think Ward is really addressing a situation where the project is allowed to move forward under a known state where developers may incur debt
(not following a best practice or implementation of best possible solution) to meet other constraints such as a shipment date,  but it
doesn’t mean the problem isn’t understood.  The reason I believe this is based on the following set of sentences:

> A little debt speeds development so long as it is paid back promptly with a rewrite

The sentence implies that technical debt is taken knowing that the solution doesn’t map to the problem 100%.  The decision to address
issues with Legacy Code are very different other types of applications.

> The danger occurs when the debt is not repaid.

Unfortunately, a common situation is to incur debt as an immediate need without a plan to address the problem in the future.  The next business objective takes priority.  Interestingly, This iterative
cycle does create the Legacy Code problem statement the author addresses (Of course there are other negative inputs that can cause Legacy Code problems).

# TL;DR

Using the term "Technical Debt" can mask the problem and needs to be followed with the supporting problem statement, otherwise it could end up as a hallway conversation.  I
learned about the impact of Legacy code and that was a win for me.
