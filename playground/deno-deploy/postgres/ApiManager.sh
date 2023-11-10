#!/bin/bash

BLUE='\033[0;34m'
ORANGE='\033[0;33m'
NC='\033[0m' # No Color
URL="https://dbkey3d-ckm5wf0r8hc7.deno.dev/todos"

while true
do
    echo -e "${BLUE}1. Display Current URL${NC}"
    echo -e "${BLUE}2. Change URL${NC}"
    echo -e "${BLUE}3. Get Todos${NC}"
    echo -e "${BLUE}4. Get Todos (Raw JSON)${NC}"
    echo -e "${BLUE}5. Get Todo by ID${NC}"
    echo -e "${BLUE}6. Post Todo${NC}"
    echo -e "${BLUE}7. Display Required Tools${NC}"
    echo -e "${BLUE}8. Exit${NC}"
    echo -e "${BLUE}Please enter your choice: ${NC}"
    read choice
    echo

    case $choice in
        1)
            echo -e "${ORANGE}Current URL: $URL${NC}"
            echo
            ;;
        2)
            echo -e "${BLUE}Please enter new URL: ${NC}"
            read new_url
            URL=$new_url
            ;;
        3)
            echo -e "${ORANGE}$(curl -s -X GET $URL | jq -r '.[] | "\(.id)\t\(.title)"')${NC}"
            echo
            ;;
        4)
            echo -e "${ORANGE}$(curl -s -X GET $URL)${NC}"
            echo
            ;;
        5)
            echo -e "${BLUE}Please enter the ID of the Todo: ${NC}"
            read id
            echo
            echo -e "${ORANGE}$(curl -s -X GET $URL | jq -r ".[] | select(.id==$id) | \"\(.id)\t\(.title)\"")${NC}"
            echo
            ;;
        6)
            echo -e "${BLUE}Please enter some text: ${NC}"
            read text
            curl -X POST -d "\"$text\"" $URL
            echo
            ;;
        7)
            echo -e "${ORANGE}Required Tools:${NC}"
            echo -e "${ORANGE}1. curl${NC}"
            echo -e "${ORANGE}2. jq${NC}"
            echo
            ;;
        8)
            exit
            ;;
        *)
            echo -e "${BLUE}Invalid choice${NC}"
            ;;
    esac
done