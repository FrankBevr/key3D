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

[Contract](www.plantuml.com/plantuml/png/NOz1IWKn343tEKNTpQStwEg32o_WJgHqqgZ1j1sQT70KxsuH1yNjomilkQgbRgC8tDWB5NAR9AvWR4B1tRPgFQ4vG4cgxfxnbUokVO2djusfCrKaZRmzQN1gdUlpmoDuLXsKaz49__dOH0YDSd1hQp9NmF-m-5TSU1frb9Nw9RYzSGQ_ZYFQzntBoMOlxaau_vB2rIBsz7v4d8Lpi5pW4wvKy_pu2m00)  
![Contract](http://www.plantuml.com/plantuml/png/NOz1IWKn343tEKNTpQStwEg32o_WJgHqqgZ1j1sQT70KxsuH1yNjomilkQgbRgC8tDWB5NAR9AvWR4B1tRPgFQ4vG4cgxfxnbUokVO2djusfCrKaZRmzQN1gdUlpmoDuLXsKaz49__dOH0YDSd1hQp9NmF-m-5TSU1frb9Nw9RYzSGQ_ZYFQzntBoMOlxaau_vB2rIBsz7v4d8Lpi5pW4wvKy_pu2m00)

#### Sequence Diagram

[Sequence Diagram](www.plantuml.com/plantuml/png/hLFDZjCm4BxdAOOBN807w87TgWYf5quh8OvUUxgrEXu7puGIdXvlNDDOIiA5Msj_y_ryupoAcgH3eEwDdZ4Wz6GyTtq-zDRtXXKqcPz8c9h3FAO-ji0hFk_xleM5_ESGENDOxRfA1Hy-tT0xiEJjHU1v6E4f_qBjoat6jECx29xrdo3oeiYlhbcCdKpUiTN03ZYgFutm5kGShm8ErNYIHOT6Bd2A2V1Nxp5vP8i2aO6YdKg0VLMOnpfZZbKnonwAz8nsFPMDH6YryV2_Ec2yLdvqhS927sKD0ZQPt-CXHlhwvMazlp-18MghCmdlUciXDcMQ4f6TGBwjksn7bYCa_36WQ1vuDKEUBnlSCz3jsS-fZky2s2psi9x4o6LASuW3wnnMs7Rm7UKz1CDZ2Rqay-qSf-B227OGZG7Jjg1EtmaOvnAAe7GDvavTKbRuEPB3T9zQSbjQBaZfbin-zWwE894gxyPRFGfK1b5FT2D-MFSxuWRTFY6yeAhdbwezbOfkct5nBN6OEg-byDyuO6OoXVvZzuZiXa1_0000)  
![Sequence Diagram](http://www.plantuml.com/plantuml/png/hLFDZjCm4BxdAOOBN807w87TgWYf5quh8OvUUxgrEXu7puGIdXvlNDDOIiA5Msj_y_ryupoAcgH3eEwDdZ4Wz6GyTtq-zDRtXXKqcPz8c9h3FAO-ji0hFk_xleM5_ESGENDOxRfA1Hy-tT0xiEJjHU1v6E4f_qBjoat6jECx29xrdo3oeiYlhbcCdKpUiTN03ZYgFutm5kGShm8ErNYIHOT6Bd2A2V1Nxp5vP8i2aO6YdKg0VLMOnpfZZbKnonwAz8nsFPMDH6YryV2_Ec2yLdvqhS927sKD0ZQPt-CXHlhwvMazlp-18MghCmdlUciXDcMQ4f6TGBwjksn7bYCa_36WQ1vuDKEUBnlSCz3jsS-fZky2s2psi9x4o6LASuW3wnnMs7Rm7UKz1CDZ2Rqay-qSf-B227OGZG7Jjg1EtmaOvnAAe7GDvavTKbRuEPB3T9zQSbjQBaZfbin-zWwE894gxyPRFGfK1b5FT2D-MFSxuWRTFY6yeAhdbwezbOfkct5nBN6OEg-byDyuO6OoXVvZzuZiXa1_0000)
