#!/usr/bin/env bash

set -f
IFS='
'

for app in $(ls /Applications | grep ".app")
do
  echo "Parsing ${app}"

  sdef-to-dts "/Applications/${app}" --output "./types/${app}.d.ts"
done

unset IFS
set +f
