Title: Endeca Install Including CRS Setup
Author: Eric Stiles
Date: May 10 2013 17:30:00 GMT-0500 (CST)
Categories: endeca,oracle,atg,crs
Email: stiles.eric@gmail.com

My day job consists at various points of working with the [Oracle Commerce Stack](http://www.oracle.com/us/products/applications/atg/oracle-commerce-overviewwp-1667913.pdf)
 - [ATG]()
 - [Endeca]()
 - Integrating soon [WebCenter]()(formerly fatwire)

Over time I've played around with various installations of Endeca and ATG, but I've highlighted here an install of
Endeca implementing the ATG [Commerce Reference App](http://docs.oracle.com/cd/E36434_01/CRS.10-1-2/index.html).

## Support Matrix

Below are the two common versions of the Endeca suite and the corresponding ATG versions they work with.  The table
contains the zip files that need to be downloaded from Oracle.

I have previously tried to use v3.1.2 with ATG v10.1.2 and ran into issues.  After consulting with Oracle Production
Support it was pretty clear that the support versions are very specific.

### The Endeca Commerce Suite v3.1.1 supports ATG version 10.1.2

<table style="border:1px solid black;border-collapse:collapse;padding:5px;width:100%">
  <tr>
    <th style="border:1px solid black;padding:5px">Part Number</th>
    <th style="border:1px solid black;padding:5px">Name (for Linux x86-64)</th>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:5px">V33316-01</td>
    <td style="border:1px solid black;padding:5px">Oracle Endeca Platform Services 6.1.3</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:5px">V35739-01</td>
    <td style="border:1px solid black;padding:5px">Oracle Endeca Content Acquisition System 3.1.1</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:5px">V35740-01</td>
    <td style="border:1px solid black;padding:5px">Oracle Endeca Tools and Frameworks 3.1.1</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:5px">V35742-01</td>
    <td style="border:1px solid black;padding:5px">Oracle Endeca MDEX Engine 6.4.0</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:5px">V35744-01</td>
    <td style="border:1px solid black;padding:5px">Oracle Endeca Tools and Frameworks with Experience Manager 3.1.1</td>
  </tr>
</table>

### The Endeca Commerce Suite v3.1.2 supports ATG version 10.2

<table style="border:1px solid black;border-collapse:collapse;padding:5px;width:100%">
  <tr>
    <th style="border:1px solid black;padding:5px">Part Number</th>
    <th style="border:1px solid black;padding:5px">Name (for Linux x86-64)</th>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:5px">V37711-01</td>
    <td style="border:1px solid black;padding:5px">Oracle Endeca Content Acquisition System 3.1.2 for Linux x86-64</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:5px">V31157-01</td>
    <td style="border:1px solid black;padding:5px">Oracle Endeca Developer Studio 6.1.2 for Microsoft Windows (32-bit)</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:5px">V33822-01</td>
    <td style="border:1px solid black;padding:5px">Oracle Endeca Document Conversion 6.1.3 for Linux x86-64</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:5px">V37712-01</td>
    <td style="border:1px solid black;padding:5px">Oracle Endeca Tools and Frameworks 3.1.2 for Linux x86-64</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:5px">V37716-01</td>
    <td style="border:1px solid black;padding:5px">Oracle Endeca Tools and Frameworks with Experience Manager 3.1.2 for Linux x86-64</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:5px">V37714-01</td>
    <td style="border:1px solid black;padding:5px">Oracle Endeca MDEX Engine 6.4.1 for Linux x86-64</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:5px">V33316-01</td>
    <td style="border:1px solid black;padding:5px">Oracle Endeca Platform Services 6.1.3 for Linux x86-64</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:5px">V33595-01</td>
    <td style="border:1px solid black;padding:5px">Oracle Endeca Text Enrichment Quick Install Guide 5.0 for Generic Platform</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:5px">V33596-01</td>
    <td style="border:1px solid black;padding:5px">Oracle Endeca Text Enrichment with Sentiment Analysis Quick Install Guide 5.0 for Generic Platform</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:5px">V30430-01</td>
    <td style="border:1px solid black;padding:5px">Oracle Endeca Text Enrichment Installer 5.0 for Linux x86-64</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:5px">V33382-01</td>
    <td style="border:1px solid black;padding:5px">Oracle Endeca Commerce Business Intelligence Documentation 2.3 for Generic Platform</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:5px">V33388-01</td>
    <td style="border:1px solid black;padding:5px">Oracle Endeca Commerce Business Intelligence 2.3 for Linux x86-64</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:5px">V31170-01</td>
    <td style="border:1px solid black;padding:5px">Oracle Endeca Advanced JDBC Column Handler 6.1.2 for Generic Platform</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:5px">V31171-01</td>
    <td style="border:1px solid black;padding:5px">Oracle Endeca Relrank evaluator 2.1.2 for Generic Platform</td>
  </tr>
<table>

## Installation Steps

### MDEX Install
### Platform Services

After installing PlatformServices run the following command to recursively allow the owner to modify files:

    sudo chmod -R o+w  PlatformServices/

For testing purposes I chmod everything as a quick generic quick solution but a 
much better approach is to apply this command to files that get affected such as the log files.

### ToolsAndFrameworks

### Content Acquisition System (CAS)

If installing CAS, it is installed after installing ToolsAndFrameworks; perform the following modifications:

1. Navigate to$ENDECA_TOOLS_CONF/conf
2. Open webstudio.properties in a text editor
3. Locate the com.endeca.webstudio.hostname property and change the value from localhost to the fully qualified name of the machine running Workbench
Save and close webstudio.properties

### Document Conversion Module

This is needed since the Endeca Document Conversion Module converts source documents from a variety of file formats to text.  This needs to be installed as soon as we complete installing the PlatformServices
See the PlatformService Installation Guide under the section ‘After you install’ – Page No : 24

### Post Install

Run the following setup scripts

1. source ../endeca/MDEX/6.4.1/mdex\_setup\_sh.ini
2. source ../endeca/PlatformServices/workspace/setup/installer_sh.ini

## Endeca Services Startup Scripts

### Platform Services

#### Startup

**/appl/ecomm/endeca/PlatformServices/6.1.3/tools/server/bin/startup.sh**

On Success See Console Output Below:

    Using ENDECA_ROOT:      /appl/ecomm/endeca/PlatformServices/6.1.3
    Using ENDECA_CONF:      /appl/ecomm/endeca/PlatformServices/workspace
    Using CATALINA_BASE:   /appl/ecomm/endeca/PlatformServices/workspace
    Using CATALINA_HOME:   /appl/ecomm/endeca/PlatformServices/6.1.3/tools/server
    Using JRE_HOME:        /appl/ecomm/endeca/PlatformServices/6.1.3/j2sdk
    Using CLASSPATH:       /appl/ecomm/endeca/PlatformServices/6.1.3/tools/server/bin/bootstrap.jar

#### Shutdown

**/appl/ecomm/endeca/PlatformServices/6.1.3/tools/server/bin/shutdown.sh**

### ToolsAndFrameworks

**/appl/ecomm/endeca/ToolsAndFrameworks/3.1.2/server/bin/startup.sh**  
**/appl/ecomm/endeca/ToolsAndFrameworks/3.1.2/server/bin/shutdown.sh**

### CAS

**/appl/ecomm/endeca/CAS/3.1.2/bin/cas-service.sh**  
**/appl/ecomm/endeca/CAS/3.1.1/bin/cas-service-shutdown.sh**

## Deploy Discover Reference App

**/usr/local/endeca/ToolsAndFrameworks/3.1.1/deployment_template/bin/deploy.sh --app /usr/local/endeca/ToolsAndFrameworks/3.1.1/reference/discover-data/deploy.xml**

## Deploy CRS App

**/appl/ecomm/endeca/ToolsAndFrameworks/3.1.1/deployment_template/bin/deploy.sh --app /appl/ATG/ATG10.1.2/CommerceReferenceStore/Store/Storefront/deploy/deploy.xml**

## Initializing new Endeca application

1. Assume application folder is /appl/ecomm/endeca/apps/Discover
2. cd to appl/ecomm/apps/endeca/Discover/control
3. run ./initialize_services.sh

## Loading Content Into New Endeca application

1. ./load_baseline_test_data.sh
2. ./baseline_update.sh
3. ./promote_content.sh

## Change Logging Level

In the reference application (ie., /appl/ecomm/endeca/apps/Discover/config/script/logging.properties) change the property value java.util.logging.ConsoleHandler.level to one of the following (CONFIG, DEBUG, ERROR, FATAL, FINE, FINER, FINEST, INFO, SEVERE, WARN, WARNING)

## Issues and Resolution

### Perl Issues On Deploy

 - http://stackoverflow.com/questions/8328250/centos-64-bit-bad-elf-interpreter
 - yum install glibc.i686

### Startup issues

    ERROR [org.jboss.naming.Naming] (main) Could not start on port 1099 
    java.net.BindException: Address already in use: JVM_Bind at 
    java.net.PlainSocketImpl.socketBind(Native Method) at 
    java.net.PlainSocketImpl.bind(PlainSocketImpl.java:383)

Solution: [http://branchbird.com/blog/the-atg-endeca-integration-part-2-loading-your-mdex/](http://branchbird.com/blog/the-atg-endeca-integration-part-2-loading-your-mdex/)

1. First off, shut down the Endeca Workbench before starting the ATG processes.  While there are no explicit port conflicts (assuming all defaults are used), conflicts can still occur on port 1099, depending on your configuration.  If Workbench is started when you attempt to start your ATGPublishing instance, you may see the following error in the ATGPublishing server.log:
For connection refused on initialize services
Need to have platform services running
JDBC Driver Issue - No Resolution
SEVERE: The web application [/eac] registered the JBDC driver [org.apache.derby.jdbc.AutoloadedDriver40] but failed to unregister it when the web application was stopped. To prevent a memory leak, the JDBC Driver has been forcibly unregistered.


### Compatibility Issues

    ERROR   07/18/13 14:58:55.716 UTC (1374159535716)       DGRAPH  {dgraph} Requested output IR version '620' is 
    supported by this release of the software but not enabled. Use the --back_compat flag to enable the older IR version.
     WARN    07/18/13 14:58:55.716 UTC (1374159535716)       DGRAPH  {dgraph} Error processing HTTP exchange 
     4: Error:[MDEX] Failed to parse URL: '/graph?node=0&offset=0&nbins=10&irversion=620'

add to **DGraphDefaults.xml**

    <arg>--back_compat</arg>
    <arg>620</arg>

## CAS - Data Source

See message “CAS Console must be accessed through Workbench” at [https://forums.oracle.com/thread/2429464](https://forums.oracle.com/thread/2429464).  
This can occur if CAS is reinstalled. Check your ws-extensions.xml and casconsole.properties files, and ensure that they agree on the same shared-secret.

## Why Match option in Dgraph

**Why Match** is an option used in development that provides additional information 
to assist with debugging why a particular search returns the results it does. The 
whymatch warning indicates that the whymatch dgraph option has been deprecated as 
of MDEX 6.2.0. At this point, I wouldn't be too concerned about the warning. When 
you go to Production, though, make sure that you're not using that dgraph option, 
because it can have a negative performance impact.

For additional information, please refer to the following [Endeca documentation](http://docs.oracle.com/cd/E40176_01/MDEX.641/pdf/MDEXMigrationGuide.pdf#Page=17).

## Initializing New Endeca Application

 - ./initialize_services.sh
 - ./load_baseline_test_data.sh
 - ./baseline_update.sh
 - ./promote_content.sh

## Starting and Stopping Endeca Application

    ./eaccmd.sh stop --app Discover
    ./eaccmd.sh start --app Discover

## Endeca Reference App URLs

 - http://<server>:8006/discover/
 - http://<server>:8006/discover-authoring/
 - http://<server>:8888/endeca_jspref/controller.jsp

## Kill All Endeca Processes

**ps -ef | grep '[e]ndeca' | sed 's/\s\+/ /g' |cut -d' ' -f2 | xargs kill -9**

## Remove Endeca Application

    /appl/ecomm/endeca/apps/Discover/control/runcommand.sh --remove-app

### Adding the --app-config parameter

**--app-config /appl/ecomm/endeca/apps/Discover/config/script/AppConfig.xml**  

When running the "--remove-app" option for runcommand, you should be able to leave off the "--app-config" parameter, as the script will already have a reference point for where to find the AppConfig.  If it's not left off the app may not be removed successfully.  Oracle was able to reproduce this 
error.

If the app folder structure had been deleted, you could still delete the Endeca job definitions from the Endeca Application Controller (EAC) via the $ENDECA_ROOT/bin/eaccmd utility and the "remove-app" command. eaccmd allows you work directly against the job database in EAC, similar to how runcommand allows you to, but outside the context of the Deployment Template (DT). If you are using the DT, it's generally advised to use runcommand for operations like these as it will be aware of the full context of your deployed DT app, whereas eaccmd will only strictly know about what is in the EAC database. They are both different tools that allow you access to the EAC jobs via web service calls. Workbench is another tool that looks at the EAC database in order to display the jobs in the Admin Console.

See

 - [http://docs.oracle.com/cd/E28911_01/PlatformServices.612/pdf/EACGuide.pdf#page=51](http://docs.oracle.com/cd/E28911_01/PlatformServices.612/pdf/EACGuide.pdf#page=51)
 - [http://docs.oracle.com/cd/E36434_01/CRS.10-1-2/ATGCRSInstall/html/s0306removingtheendecaapplication01.html](http://docs.oracle.com/cd/E36434_01/CRS.10-1-2/ATGCRSInstall/html/s0306removingtheendecaapplication01.html)

Steps similar to above

1. Go to Tools and Frameworks/bin and execute eaccmd list-apps.
2. Navigate to the <App_Dir>\control directory.
3. runcommand --remove-app
4. List the current applications again by running eaccmd list-apps.
5. The selected application should no longer display.
6. Then, delete the application directory.

## Issues with CRS

1. Baseline Index
2. Search Box missing
3. Agent setup

