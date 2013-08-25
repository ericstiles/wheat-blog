#!/bin/sh

array=($(ps -ef | grep .[j]s | sed 's/\s\s*/ /g' | cut -d ' ' -f 2 ))
#echo ${array[@]}
printf "Stopping javascript processes\n"
if [ "${#array[@]}" -gt "0" ]; then
  for i in "${array[@]}"
  do
    # do whatever on $i
    printf "...killing process("$i"):\n"
    #process="/proc/$i/cmdline"
    #echo $process
    #processName="`cat $process`"
    #echo "$procesName"
    kill -9 $i
  done
else
  printf "...no processes found to kill\n"
fi