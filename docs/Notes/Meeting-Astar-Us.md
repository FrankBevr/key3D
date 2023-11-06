# Meeting Astar

## Recap

> Meeting 9:30 - 10:00, 18.10.2023

- RamenDAO - Key3D Project is a UseCase Project for DeStore
- zkEVM Docs will be realised soon (next week)
- zkEVM has a connection to the PolkadotNetwork (60seconds)
- zk is the Architecture.
- if zk, zk Logic has to be written in the Contract (Tornado Cash)
- Everything that deploys on Ethereum, deploys on Astar zkEVM
- **Backendwise we choose Foundry and Solidty for Key3D**
- **Frontend Focusing is good choice**
- Smoldot is out, because EVM.
- No reaction to zk Accounting, overengineered.
- No information about key3, asking organizer.
- Buisnesswise, hard times, goal is to survive.
- DappStaking sucesses are there but not easy to convince holders

**Todo**

- Follow up on realised Docs of Astar zkEVM (Frank)
- Follow up on good example dapp Staking Apps (Frank)
- Articulate idea more nicely (-)
- Scratch out a Frontend (Frank)

<details>

<summary>Notes: Frank</summary>

> Deadline for submissions: 23:59 JST, November 24

### Outline

| Heading    | Description  | Timefram |
| :--------- | :----------- | :------- |
| Intro      | Recap        | 15min    |
| Discussion | Implentation | 30min    |
| Outro      | Wildfire     | 15min    |

### Questions

#### Backend

**Ink or Solidity or both?**

**If ink?**

- chain extension
- verification
- cross contract call via xEVM
- _aftercomment Frank: ink is out_

**If solidity?**

- Small remix session.
  - _aftercomment Frank: asking pierre after docs realise_
- utitlities of polygon ZK EVM
  - _aftercomment Frank: nah, zk is the Architecture, if zk then in smart contract itself, but overengineered_
- Truffle, Hardhat, Foundry
  - _aftercomment Frank: lets lock foundry 🔒_

**If Both?**

- cross contract call via xEVM
  - _aftercomment Frank: possible but waay to overengineered 🔒_

### Implentation of Func Req.

| Funcional Requirment                        | Execution                                             | Notes                                                                                                               |
| :------------------------------------------ | :---------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------ |
| WebApp allows you to see Ramen              | AR via [MindAR](https://github.com/hiukim/mind-ar-js) | focus on nice rectancles, simple and nice                                                                           |
| WebApp allows you to share your expierience | share Button                                          | inspect complexity of recording, share button complexity unkown, share button complexity guessed medium difficulty  |
| WebApp allows you to own your expierience   | ERC721 / PSP 22                                       | We use ERC721 and a Creator Pattern of 2 roles, at least that my first thought                                      |
| SmartContract handles Buisness Logic        |                                                       | no zk stuff neededd, just something is great. Expect something breaks, because testnet is super fresh, suuper fresh |
| SmartContract allows simple Accounting      |                                                       | Accounting can be super simple                                                                                      |

| Non Funcional Requirment | Execution                         | Notes                                                 |
| :----------------------- | :-------------------------------- | :---------------------------------------------------- |
| WebApp has a simple UI   | Rely on the Destore Design System | Simple is fine but is has to be nice, css is importan |

#### Frontend

- smoldot? 🤤 If not Parity Daan likes to help
  - _aftercommetn Frank: Out, no ink_
- How simple we are allowed to hold it? (Non-Tech Peoples are in the judging)
  - _aftercomment Frank: Asking key3 Team_

#### General Question

- Good examples of dapp staking.
  - _aftercomment Frank: Toma will send link_
- Status of Competion.
  - _aftercomment Frank: Asking Key3 Team_
- Mitsubishi Intrestes in Investing in the Team.
  - _aftercomment Frank: Asking, currently bear market_
- How to sell it nicely, any reccomendation
  - _aftercomment Frank: not be spoken,_

### Lesson Learned

- Chose: Astar zkEVM
  - _aftercomment Frank: Its looked for key3 project 🔒_
- Use Case for DeStore
  - _aftercomment Frank: Destore Outcome will be a Blog Post and a UseCase Project_
- Launch next week
  - _aftercomment Frank: Super fresh everything is work in progress regardings zkEVM_
- Focusing on Frontend !?
  - _aftercomment Frank: Yes, good idea._
- if zk then utilize it in the smart contract logic
  - _aftercomment Frank: Not necessary, overengineered_
- foundry should work fine
  - _aftercomment Frank: Yeap_
- 1 Pitch, 1 Video, 1 MVP
  - _aftercomment Frank: Super important._
- DAPP Staking
  - _aftercomment Frank: Toma send some example, but mentioned is hard to pull of, you need a lot of conenction to bigger holders and so on._

**Todo**

- Next week hit up for docs for deployment and verification
  - _aftercomment Frank: Already wrote it down_

</details>
