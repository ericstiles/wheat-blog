#!/bin/bash

SCRIPTPATH="${BASH_SOURCE[0]}"
SCRIPTDIR="$(cd "$(dirname "${SCRIPTPATH}")" ; pwd)"
GITREPO="wheat-blog.git"
BLOGPATH=$SCRIPTDIR/../$GITREPO
#echo "Script path: ${SCRIPTDIR}/$(basename "${SCRIPTPATH}")" 

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
