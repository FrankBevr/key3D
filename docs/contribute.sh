#!/bin/bash

file_path="./.vitepress/config.ts"

# Check if the file exists
if [ -f "$file_path" ]; then
    # Add the new line above /*<CONTRIUBTION>*/ using sed
    sed -i '/\/\*<CONTRIUBTION>\*\//i\{ text: "MyContribution", link: "Notes\/MyContribution" },' "$file_path"
    echo "Line added successfully!"
else
    echo "File not found."
fi
