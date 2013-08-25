Title: Endeca Install Including CRS Setup
Author: Eric Stiles
Date: Aug 1 2013 17:30:00 GMT-0500 (CST)
Categories: endeca,oracle,atg,crs
Email: stiles.eric@gmail.com

My day job consists at various points of working with the [Oracle Commerce Stack](http://www.oracle.com/us/products/applications/atg/oracle-commerce-overviewwp-1667913.pdf)
 - [ATG]()
 - [Endeca]()
 - Integrating soon [WebCenter]()(formerly fatwire)

Over time I've played around with various installations of Endeca and ATG, but I've highlighted here an install of
Endeca implementing the ATG [Commerce Reference App](http://docs.oracle.com/cd/E36434_01/CRS.10-1-2/index.html).

## Support Matrix

Below are the two common versions of the Endeca suite and the corresponding ATG versions they work with.

 - The Endeca Commerce Suite v3.1.1 supports ATG version 10.1.2
 - The Endeca Commerce Suite v3.1.2 supports ATG version 10.2

I have previously tried to use v3.1.2 with ATG v10.1.2 and ran into issues.  After consulting with Oracle Production
Support it was pretty clear that the support versions are very specific.

## Installation Steps
1.  Step 1: MDEX Install
2.  Step 2: Platform Services


Step 3: CAS
Step 4: Document Conversion
Step 5: Post Install
Endeca Services Startup Scripts
Deploy Discover Reference App
Deploy CRS App
Initializing new Endeca application
Change Logging Level
Enabling SSL security in the Application Controller
Issues and Resolution
Perl Issues On Deploy
Startup issues
CAS - Data Source
Why Match option in Dgraph
Platform Services Handling Multiple Applications
Endeca Reference App URLs
Commands for initializing and starting new Endeca application
Kill All Endeca Processes
Remove Endeca Application
Bash
Make source variables available to all
Sudoers access
Questions
Links
Additional Steps Related To CRS Install Related To Endeca
Documentation To Review
Steps To Run
ATG Agent Setup
Create a new app based on Discover

Oracle Documentation
http://www.oracle.com/technetwork/indexes/documentation/endecaguidedsearch-1552767.html
Endeca Information Access Administrator’s Guide
http://docs.oracle.com/cd/E35638_01/Common.621/pdf/IAPAdminGuide.pdf
Endeca Performance Tuning Guide
http://docs.oracle.com/cd/E28910_01/MDEX.622/pdf/PerfTuningGuide.pdf
Endeca 3.1.1
Download Files For Endeca Commerce Suite 3.1.1 For ATG 10.1.2
Part Number
Name (for Linux x86-64)
V33316-01
Oracle Endeca Platform Services 6.1.3
V35739-01
Oracle Endeca Content Acquisition System 3.1.1
V35740-01
Oracle Endeca Tools and Frameworks 3.1.1
V35742-01
Oracle Endeca MDEX Engine 6.4.0
V35744-01
Oracle Endeca Tools and Frameworks with Experience Manager 3.1.1

Download Files For Endeca Commerce Suite 3.1.2 For ATG 10.2
Part Number
Name
V37711-01
Oracle Endeca Content Acquisition System 3.1.2 for Linux x86-64
V31157-01
Oracle Endeca Developer Studio 6.1.2 for Microsoft Windows (32-bit)
V33822-01
Oracle Endeca Document Conversion 6.1.3 for Linux x86-64
V37712-01
Oracle Endeca Tools and Frameworks 3.1.2 for Linux x86-64
-V37716-01
Oracle Endeca Tools and Frameworks with Experience Manager 3.1.2 for Linux x86-64
-V37714-01
Oracle Endeca MDEX Engine 6.4.1 for Linux x86-64
-V33316-01
Oracle Endeca Platform Services 6.1.3 for Linux x86-64
V33595-01
Oracle Endeca Text Enrichment Quick Install Guide 5.0 for Generic Platform
V33596-01
Oracle Endeca Text Enrichment with Sentiment Analysis Quick Install Guide 5.0 for Generic Platform
V30430-01
Oracle Endeca Text Enrichment Installer 5.0 for Linux x86-64
V33382-01
Oracle Endeca Commerce Business Intelligence Documentation 2.3 for Generic Platform
V33388-01
Oracle Endeca Commerce Business Intelligence 2.3 for Linux x86-64
V31170-01
Oracle Endeca Advanced JDBC Column Handler 6.1.2 for Generic Platform
V31171-01
Oracle Endeca Relrank evaluator 2.1.2 for Generic Platform

Installation
Step 1: MDEX Install
Step 2: Platform Services
After installing PlatformServices run the following command to recursively allow the owner to modify files:
sudo chmod -R o+w  PlatformServices/
While this solution is a generic quick solution a much better approach is to apply this command to files that get affected:
Log files
Step 3: CAS



If you are going to install the Content Acquisition System (CAS) after ToolsAndFrameworks,perform the following modifications:




Navigate to$ENDECA_TOOLS_CONF/conf
Open webstudio.properties in a text editor
Locate the com.endeca.webstudio.hostname property and change the value from localhost to the fully qualified name of the machine running Workbench
Save and close webstudio.properties
Step 4: Document Conversion
Document conversion module installer (see below 3.1.2 for zip file number)
This is needed for us since the Endeca Document Conversion Module converts source documents from a variety of file formats to text.  This needs to be installed as soon as we complete installing the PlatformServices
See the PlatformService Installation Guide under the section ‘After you install’ – Page No : 24
Step 5: Post Install
Setup scripts post install
source /appl/ecomm/endeca/MDEX/6.4.1/mdex_setup_sh.ini
source /appl/ecomm/endeca/PlatformServices/workspace/setup/installer_sh.ini
Endeca Services Startup Scripts
Platform Services
/appl/ecomm/endeca/PlatformServices/6.1.3/tools/server/bin/startup.sh
On Success See Console Output Below:

Using ENDECA_ROOT:      /appl/ecomm/endeca/PlatformServices/6.1.3
Using ENDECA_CONF:      /appl/ecomm/endeca/PlatformServices/workspace
Using CATALINA_BASE:   /appl/ecomm/endeca/PlatformServices/workspace
Using CATALINA_HOME:   /appl/ecomm/endeca/PlatformServices/6.1.3/tools/server
Using CATALINA_TMPDIR: /appl/ecomm/endeca/PlatformServices/workspace/temp
Using JRE_HOME:        /appl/ecomm/endeca/PlatformServices/6.1.3/j2sdk
Using CLASSPATH:       /appl/ecomm/endeca/PlatformServices/6.1.3/tools/server/bin/bootstrap.jar

/appl/ecomm/endeca/PlatformServices/6.1.3/tools/server/bin/shutdown.sh
ToolsAndFrameworks
/appl/ecomm/endeca/ToolsAndFrameworks/3.1.2/server/bin/startup.sh
/appl/ecomm/endeca/ToolsAndFrameworks/3.1.2/server/bin/shutdown.sh
CAS
/appl/ecomm/endeca/CAS/3.1.2/bin/cas-service.sh
/appl/ecomm/endeca/CAS/3.1.1/bin/cas-service-shutdown.sh
JBoss
/appl/ecomm/jboss-eap-5.1/jboss-as/bin/run.sh -c ATGProduction -b 0.0.0.0
Deploy Discover Reference App
/usr/local/endeca/ToolsAndFrameworks/3.1.1/deployment_template/bin/deploy.sh --app /usr/local/endeca/ToolsAndFrameworks/3.1.1/reference/discover-data/deploy.xml
/appl/ecomm/endeca/ToolsAndFrameworks/3.1.2/deployment_template/bin/deploy.sh --app /appl/ecomm/endeca/ToolsAndFrameworks/3.1.2/reference/discover-data/deploy.xml
Deploy CRS App
/appl/ecomm/endeca/ToolsAndFrameworks/3.1.1/deployment_template/bin/deploy.sh --app /appl/ATG/ATG10.1.2/CommerceReferenceStore/Store/Storefront/deploy/deploy.xml
Initializing new Endeca application
Assume application folder is /appl/ecomm/endeca/apps/Discover
cd to appl/ecomm/apps/endeca/Discover/control
run ./initialize_services.sh

Starting new Endeca application
./load_baseline_test_data.sh
./baseline_update.sh
./promote_content.sh
Change Logging Level
In the reference application (ie., /appl/ecomm/endeca/apps/Discover/config/script/logging.properties) change the property value java.util.logging.ConsoleHandler.level to one of the following (CONFIG, DEBUG, ERROR, FATAL, FINE, FINER, FINEST, INFO, SEVERE, WARN, WARNING)
Enabling SSL security in the Application Controller
SSL in the Application Controller is disabled by default.
To enable SSL security (between the client and the EAC Central Server, between the Central Server and an Agent, or between Agents), you need to do the following:
Enable the SSL version of the appropriate Application Controller WAR file (eac-ssl.war replaces eac.war for the Central Server, and eac-agent-ssl.war replaces eac-agent.war for the Agent).
Modify the server.xml file for the Tomcat that is hosting the Application Controller.  For details on enabling SSL security in the Application Controller, see the Endeca Security Guide.
Issues and Resolution
Perl Issues On Deploy
http://stackoverflow.com/questions/8328250/centos-64-bit-bad-elf-interpreter
yum install glibc.i686
Startup issues
ERROR [org.jboss.naming.Naming] (main) Could not start on port 1099 java.net.BindException: Address already in use: JVM_Bind at java.net.PlainSocketImpl.socketBind(Native Method) at java.net.PlainSocketImpl.bind(PlainSocketImpl.java:383)
Solution: http://branchbird.com/blog/the-atg-endeca-integration-part-2-loading-your-mdex/
First off, shut down the Endeca Workbench before starting the ATG processes.  While there are no explicit port conflicts (assuming all defaults are used), I’ve found that conflicts can still occur on port 1099, depending on your configuration.  If Workbench is started when you attempt to start your ATGPublishing instance, you may see the following error in the ATGPublishing server.log:
For connection refused on initialize services
Need to have platform services running
JDBC Driver Issue - No Resolution
SEVERE: The web application [/eac] registered the JBDC driver [org.apache.derby.jdbc.AutoloadedDriver40] but failed to unregister it when the web application was stopped. To prevent a memory leak, the JDBC Driver has been forcibly unregistered.


add
<arg>--back_compat</arg>
<arg>620</arg>

 ERROR   07/18/13 14:58:55.716 UTC (1374159535716)       DGRAPH  {dgraph}
     Requested output IR version '620' is supported by this release of the so
 ftware but not enabled. Use the --back_compat flag to enable the older IR ve
 rsion.
 WARN    07/18/13 14:58:55.716 UTC (1374159535716)       DGRAPH  {dgraph}
     Error processing HTTP exchange 4: Error:[MDEX] Failed to parse URL: '/gr
 aph?node=0&offset=0&nbins=10&irversion=620'
 ERROR   07/18/13 21:19:22.160 UTC (1374182362160)       DGRAPH  {dgraph}
     Requested output IR version '620' is supported by this release of the so
 ftware but not enabled. Use the --back_compat flag to enable the older IR ve
 rsion.
 WARN    07/18/13 21:19:22.160 UTC (1374182362160)       DGRAPH  {dgraph}
     Error processing HTTP exchange 5: Error:[MDEX] Failed to parse URL: '/gr
 aph?node=0&offset=0&nbins=10&irversion=620'

CAS - Data Source
See message “CAS Console must be accessed through Workbench”
https://forums.oracle.com/thread/2429464
This can occur if CAS is reinstalled. Check your ws-extensions.xml and casconsole.properties files, and ensure that they agree on the same shared-secret.



Why Match option in Dgraph
Why Match is an option used in development that provides additional information to assist with debugging why a particular search returns the results it does.
The whymatch warning indicates that the whymatch dgraph option has been deprecated as of MDEX 6.2.0. At this point, I wouldn't be too concerned about the warning. When you go to Production, though, make sure that you're not using that dgraph option, because it can have a negative performance impact.
For additional information, please refer to the following Endeca documentation.
docs.oracle.com/cd/E40176_01/MDEX.641/pdf/MDEXMigrationGuide.pdf#Page=17
Oracle Endeca Commerce
MDEX Engine Migration Guide
Required changes in version 6.2.0
"Why Did It Match changes"
docs.oracle.com/cd/E40176_01/MDEX.641/pdf/AdvDevGuide.pdf#Page=133
Oracle Endeca Commerce
MDEX Engine Advanced Development Guide
"Why Match performance impact"
Platform Services Handling Multiple Applications
If the platform services is handling application and an issue occurs with one single application, can we start and stop that application

SEVERE: The web application [/discover] appears to have started a thread named [
Thread-7] but has failed to stop it. This is very likely to create a memory leak
.
Jul 17, 2013 11:32:49 AM org.apache.catalina.loader.WebappClassLoader clearThrea
dLocalMap
SEVERE: The web application [/discover] created a ThreadLocal with key of type [
java.lang.ThreadLocal] (value [java.lang.ThreadLocal@43320bcf]) and a value of t
ype [com.endeca.infront.assembler.event.request.RequestEvent] (value [{endeca:en
eTime=56, endeca:assemblyStartTimestamp=1374076077774, @type=AssemblerRequestEve
nt, endeca:contentPath=/browse, endeca:relRankStrategy=nterms,maxfield,exact,sta
tic(product.analytics.conversion_rate,descending)
        , endeca:sessionId=B278A5D0087C29B0A34EEC5458F7FBB0, endeca:requestType=
T, endeca:recordNames=[Zx1, EOS 5D Mark II, body, HR10 & Tenba Xpress: Medium Po
uch, Black/Teal, Digital IXUS 85 IS, Z980, FUN Flash Single Use Camera, 1+1 Pack
, Prima Super 130U Date, EOS 5D Mark II + EF 24-105mm f4L IS USM, QuickCamAr Cha
t for Skype, Digital IXUS 80 IS, 15x50 IS, Cyber-shot T70, Black], endeca:numRec
ords=5616, endeca:assemblyFinishTimestamp=1374076078225, endeca:sortKey=[product
.analytics.total_sales|Ascending], endeca:spotlights=[Top Rated Products], endec
a:siteRootPath=/pages}]) but failed to remove it when the web application was st
opped. This is very likely to create a memory leak.
Jul 17, 2013 11:32:49 AM org.apache.catalina.core.ApplicationContext log
INFO: Closing Spring root WebApplicationContext
Jul 17, 2013 11:32:49 AM org.apache.catalina.loader.WebappClassLoader clearRefer
encesThreads
SEVERE: The web application [/assembler-authoring] appears to have started a thr
ead named [Thread-61] but has failed to stop it. This is very likely to create a
 memory leak.
Jul 17, 2013 11:32:50 AM org.apache.coyote.http11.Http11Protocol destroy
INFO: Stopping Coyote HTTP/1.1 on http-8006

To restart an application run
./eaccmd.sh stop --app Discover
./eaccmd.sh start --app Discover
Endeca Reference App URLs
http://drcapl0028347:8006/discover/
http://drcapl0028347:8006/discover-authoring/
http://drcapl0028347:8888/endeca_jspref/controller.jsp
Commands for initializing and starting new Endeca application
./initialize_services.sh
./load_baseline_test_data.sh
./baseline_update.sh
./promote_content.sh
Kill All Endeca Processes
 ps -ef | grep '[e]ndeca' | sed 's/\s\+/ /g' |cut -d' ' -f2 | xargs kill -9
Remove Endeca Application
/appl/ecomm/endeca/apps/Discover/control/runcommand.sh --remove-app --app-config /appl/ecomm/endeca/apps/Discover/config/script/AppConfig.xml
When you run the "--remove-app" option for runcommand, you should be able to leave off the "--app-config" parameter, as the script will already have a reference point for where to find the AppConfig.
If you try running without the --app-config parameter, does this work successfully? I was able to reproduce your error by running your command, and when I remove the explicit appconfig setting the app gets removed as expected.
$ENDECA_ROOT/bin/eaccmd utility
If the app folder structure had been deleted, you could still delete the Endeca job definitions from the Endeca Application Controller (EAC) via the $ENDECA_ROOT/bin/eaccmd utility and the "remove-app" command. eaccmd allows you work directly against the job database in EAC, similar to how runcommand allows you to, but outside the context of the Deployment Template (DT). If you are using the DT, it's generally advised to use runcommand for operations like these as it will be aware of the full context of your deployed DT app, whereas eaccmd will only strictly know about what is in the EAC database. They are both different tools that allow you access to the EAC jobs via web service calls. Workbench is another tool that looks at the EAC database in order to display the jobs in the Admin Console.
http://docs.oracle.com/cd/E28911_01/PlatformServices.612/pdf/EACGuide.pdf#page=51
http://docs.oracle.com/cd/E36434_01/CRS.10-1-2/ATGCRSInstall/html/s0306removingtheendecaapplication01.html
Steps similar to above
Go to Tools and Frameworks/bin and execute eaccmd list-apps.
Navigate to the <App_Dir>\control directory.
runcommand --remove-app
List the current applications again by running eaccmd list-apps.
The selected application should no longer display.
Then, delete the application directory.
Bash
Make source variables available to all
http://stackoverflow.com/questions/307120/how-to-i-export-a-system-scope-environment-variable-in-bash
Sudoers access
/etc/sudoer
ets04uga ALL=(ALL)      NOPASSWD: ALL
Questions
Difference between Forge and CAS?
Forge is the ingestion process
CAS is the aquisition of data
Difference in deploying Forge and CAS?
Links
http://quest4atg.blogspot.com/
Additional Steps Related To CRS Install Related To Endeca
Documentation To Review
docs.oracle.com/cd/E40176_01/MDEX.641/pdf/MDEXMigrationGuide.pdf#Page=17
Oracle Endeca Commerce
MDEX Engine Migration Guide
Required changes in version 6.2.0
"Why Did It Match changes"
docs.oracle.com/cd/E40176_01/MDEX.641/pdf/AdvDevGuide.pdf#Page=133
Oracle Endeca Commerce
MDEX Engine Advanced Development Guide
"Why Match performance impact"
https://forums.oracle.com/thread/2489491
Change components debug logging to true:
/atg/search/repository/BulkLoader/
/atg/commerce/endeca/index/ProductCatalogSimpleIndexingAdmin/
Steps To Run
Run ProductCatalogSimpleIndexingAdmin is not mentioned in the CRS installation guide.
It is outlined in the ATG Endeca Integration Guide
http://docs.oracle.com/cd/E36434_01/Platform.10-1-2/ATGEndecaIntegrationGuide/ATGEndecaIntegrationGuide.pdf
ATG Endeca Integration Guide
p.6 of the PDF says:
Manually Starting the Indexing Process
To manually start an indexing job, log in to ATG Dynamo Administration for the appropriate ATG server instance and navigate to  /atg/commerce/endeca/index/ProductCatalogSimpleIndexingAdmin component.
From here, you can click Baseline Index to start a baseline index, or Partial Index to start a partial update.
ATG Agent Setup
Source Repository
Destination Repository
/atg/commerce/catalog/ProductCatalog
/atg/commerce/catalog/ProductCatalog_production
/atg/commerce/claimable/ClaimableRepository
/atg/commerce/claimable/ClaimableRepository_production
/atg/commerce/pricing/priceLists/SecurePriceLists
/atg/commerce/pricing/priceLists/PriceLists_production
/atg/multisite/SiteRepository
/atg/multisite/SiteRepository_production
/atg/seo/SEORepository
/atg/seo/SEORepository_production
/atg/store/stores/StoreRepository
/atg/store/stores/StoreRepository_production
/atg/userprofiling/PersonalizationRepository
/atg/userprofiling/PersonalizationRepository_production

There is additional information in the following sections:
"Managing the Process"
p. 15 of the PDF
"ProductCatalogSimpleIndexingAdmin"
p.28 of the PDF


 15 /appl/ecomm/endeca
$ sudo chmod -R  755  ToolsAndFrameworks/
 16 /appl/ecomm/endeca
$ sudo chown s481830:user MDEX/
 17 /appl/ecomm/endeca
$ sudo chown -R s481830:user MDEX/
 18 /appl/ecomm/endeca
$ sudo chown -R s481830:user PlatformServices/
 19 /appl/ecomm/endeca
$ sudo chown -R s481830:user ToolsAndFrameworks/
 20 /appl/ecomm/endeca
$ sudo chown -R s481830:user apps/
 21 /appl/ecomm/endeca
$ ll

Create a new app based on Discover
http://quest4atg.blogspot.com/2013/01/setting-up-application-based-on.html






Questions
1. Setting up multipe MDEX
2. Setting up multiple dgraph (digidx processes)
3. EAC management of multiple dgraph
4. HEB.com implementation of Endeca
5. CRS implementation of Endeca
