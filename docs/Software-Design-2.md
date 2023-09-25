### Idea

- Web3 Ticketingsystem - Tokio Station

#### Functional Requirments

- WebApp allows you to buy Ticket
- WebApp shows Ticket with Details
- WebApp allows catch 5 Expieriences, each expierience is a Portal(diffrent shape)
- WebApp restricts every expierience with geolocation
- Smart Contract deployed on Shibuya
- Smart Contract allows to mint wild&crazy after 5 catched expieriences

#### Non Functional Requirments

- The App should have simple UI

### User Stories

#### Epic 1 - Traveler Story

- As a traveler, I want have a great story to tell my friends.
- As a traveler, I need a ticket to catch train.
- As a traveler, I want to collect tiny stories and share it.

#### Epic 2 - Station Story

- As a station, I want to be coolest in the world.
- As a station, I want to sell exciting tickets.
- As a station, I want to know

### Diagramms

#### Use Case Diagram

[TravelerStory](www.plantuml.com/plantuml/png/NOr12i9034NtEKNSrKKHRz2D9z0BZDEl4qWx9PCAlRqZIA6pISXx_FoXU31V9wMJ9qpWHOFCf7WvUsQJTt8UnH1Tyamkhk3R8f6lt3C_B7oWiBjdsuX2h7k7JDGvLBbKAYXdwWfGPmmUqoLcLKIlztFTVYu5gvRsUDzpap-e0ZJayBTnjQCX_xu1yxXE-WK0)  
![BuyerStory](http://www.plantuml.com/plantuml/png/NOr12i9034NtEKNSrKKHRz2D9z0BZDEl4qWx9PCAlRqZIA6pISXx_FoXU31V9wMJ9qpWHOFCf7WvUsQJTt8UnH1Tyamkhk3R8f6lt3C_B7oWiBjdsuX2h7k7JDGvLBbKAYXdwWfGPmmUqoLcLKIlztFTVYu5gvRsUDzpap-e0ZJayBTnjQCX_xu1yxXE-WK0)

[StationStory](www.plantuml.com/plantuml/png/LO-n3S9034LxJ_7faY856wHXWanmN0mvuPoZYn5Y2GegEkYOWBqOWOi4qb7vwLdFajlPNBBZABIoWKV692v44juPJ972VZ3q8R6te94ic30sK_1Oem4wSullJDEPoFayVuwesZAygk1zlrrggcQMXQ-lp8UefypFHqtq3T0q-4_AJL6NkZpKSkpp9ny0)  
![StationStory](http://www.plantuml.com/plantuml/png/LO-n3S9034LxJ_7faY856wHXWanmN0mvuPoZYn5Y2GegEkYOWBqOWOi4qb7vwLdFajlPNBBZABIoWKV692v44juPJ972VZ3q8R6te94ic30sK_1Oem4wSullJDEPoFayVuwesZAygk1zlrrggcQMXQ-lp8UefypFHqtq3T0q-4_AJL6NkZpKSkpp9ny0)

#### Class Diagram

[Contract](https://www.plantuml.com/plantuml/uml/LOwn3eCm34JtV8MxWHYxPKBgXo0tSQdLn46n0Q6g_rxeWhg-TtUwNWshpJcvYpqf4qm9MPon9V9mAs8LWu4B2LNXHTirlbt7qqCzg5MMqNKhLXJRJh0mhQ7COXvapdUgUqD29LGQ3ZVyPDDwM0f7ruraGowHKjEU8mUChF_HZ-j9udxt2m00)  
![Contract](http://www.plantuml.com/plantuml/png/LOwn3eCm34JtV8MxWHYxPKBgXo0tSQdLn46n0Q6g_rxeWhg-TtUwNWshpJcvYpqf4qm9MPon9V9mAs8LWu4B2LNXHTirlbt7qqCzg5MMqNKhLXJRJh0mhQ7COXvapdUgUqD29LGQ3ZVyPDDwM0f7ruraGowHKjEU8mUChF_HZ-j9udxt2m00)

#### Sequence Diagram

[Sequence Diagram](https://www.plantuml.com/plantuml/uml/TLBDRiCW3Bxp5Du3J3libiFKQjAEKxNk1Lpg9IW449XsVVjHMAGIaYFsz-CFUnSOFST9YoSUQ29m6fKHBXMLL0uDmodUo5ULG5elIbSwxPrRbbwFR3qTC_o0FTKgKtgyMyCU9Q_fY-mCps__wXr8hUGO80ps2cXGtn8bYDAzupAXo_tm06XqNFHom40lapBSyhKooOLjZX3k4Ig9PQeEUaiPBmUIeuqiLb29N4VkuEuUuFFZMrIDJPj0vbpmA-rDbaCvPXQWEOFpzXoJ1zkUU22_9PK3pvOp-L38culPVm7zEaLUaP4qVsmRN1df2GF1HT4Lf8s6DxQubDm-2VJKQlJgGW4mRrJaiwh864RuiNx-bEQcsj5dIfwy35u17jNBtnLWdR1CCaTitNU96IVz1m00)  
![Sequence Diagram](http://www.plantuml.com/plantuml/png/TLBDRiCW3Bxp5Du3J3libiFKQjAEKxNk1Lpg9IW449XsVVjHMAGIaYFsz-CFUnSOFST9YoSUQ29m6fKHBXMLL0uDmodUo5ULG5elIbSwxPrRbbwFR3qTC_o0FTKgKtgyMyCU9Q_fY-mCps__wXr8hUGO80ps2cXGtn8bYDAzupAXo_tm06XqNFHom40lapBSyhKooOLjZX3k4Ig9PQeEUaiPBmUIeuqiLb29N4VkuEuUuFFZMrIDJPj0vbpmA-rDbaCvPXQWEOFpzXoJ1zkUU22_9PK3pvOp-L38culPVm7zEaLUaP4qVsmRN1df2GF1HT4Lf8s6DxQubDm-2VJKQlJgGW4mRrJaiwh864RuiNx-bEQcsj5dIfwy35u17jNBtnLWdR1CCaTitNU96IVz1m00)
