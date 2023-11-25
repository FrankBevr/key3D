#!/bin/bash

databaseUrl="postgres://postgres:new_password@localhost:5432/key3d"

# Check if the database URL can be connected
psql "$databaseUrl" -c "\q"
#sudo -i -u postgres psql

if [[ $? -eq 0 ]]; then
  echo "Success! The command can run."
else
  echo "Error! The command cannot run."
fi
