- radha does the workshop
- polka is parrel
- there a many blokchains
- blockchains are heterogenous
- in polkadot js we cann see all chains
- there is a xcm dashboard
- some people sending stuff from a to b
- simple words: polkadot is aset of blockhains that work together and talk to each other
- 6 key feautres

  - connects network together
  - handles heavy traffic at scale
  - inudstry leading security
  - emaböes cistp, ,ade üöattpr,s bioöt fpr specific apps
  - on chain governance
  - self upgrade

- what is ahppenin on parachains

  - Astar example
  - under extrinsics we can see what they developing
  - f.e. dapp staking
  - bitgreen example
  - ist a carbon credit chain
  - carbon credit is a pallet
  - acala example
  - a defi chain
  - oracle, dex, tresutry, stuff ...

- there is a governace
- you can see it via polkadot js
- governance refernda

- self upgrade is cool
- like phone

- founders are gavin, robert, peter

- it creates blocks, there is a finality gadget
- if transaction has to be sure than it has to be in the finalise block

- all blockahi are distrubuted
- telemetry.polkadot.io
- there is astar, the run in japan, europe, us

summarize

- built on custom blockchain, to build apps together

- hwo?
- layer 1, ethereum, solan, bitcoin
- 48 parachains, is the same 48 layer 1 blockchain,
- all blocks are added to polkadot blockchains

- moonbeam does ethereum
- there is a eheteurm pallet

polkadot architecture

- relay chain layer 0
- parachains layer 1
- brigedes
- interlay is bitcoin
- there is a cosmos bridge

terminoly

- validators =
- network staking list of a validators
- validators protecting parachains
- validators assigend to each inviuslad parachain on polkadot
- valis get shuffeld each minute
- you wanna attack astar, you need to know ahead of ahead of time the selected validator
- lets go to staking
- see all vaildators
- attack all of them
- you have a hard time
- these validaots

- lets look astar
- they have collaotr
- they have 49 collators
- collatoras listen in transaction, collect them and send them to validoats
- collators packaing blocks

- validators and collators
- validator part of polkadot
- collator part of parachain

architecture = relay chain,

- parachain state
- state root, see [picture](https://i.ibb.co/4S05S9t/image.png)
- a state transition [picture](https://i.ibb.co/Dz0DSCB/image.png)
- its a merkle tree
- oproof of validity = the block (list of state stnasition) + the values in the parchain, ..

there is nomiteated proof of staking

-

change to example

- staking
- stake your dot,
- each active note has stake
- 2,5 mio dot
- stake is uniformly spread,
- on other proof of stake, its not so uniformyl
- nomiated proof of stake, ha maximaize toal amout at stake, maximate the sake behind the minally staked validaotr, minimize the variance fo the stake in set

- netowrk decise where you stake is heading towards.

- hybrid consensu
- probailistic finalte babe, guaratees liveness
- dertemistic finalty with grandpa
-

the case for parachains

- overhead = it takes a lot of effort to build a blockchain
- isolation ..
- security ..

there is substrate

- lets builda blockahins
- substrate frame palletes and drag and drop in your runtime

There are 3 cor

- wasm, grandpa, lip2p
- runtime < webassembly < conesusn < libp2p2

lets built one

- substrate node template
- switch to dev node
- send ferdi to something
- lets go to extrinics
- it has balances,
- it has grandpa
- sudo, it gives you full permission
- system, stuffy
- template module, tow sampel function cause error, doSomething
- look at network
- now do caus error
- network,
- if wanna build own blockahins use substrate node template
- its really customizeable

- [There is a bunch of stuff](https://github.com/poladot/polkadot-sdk)
- in frrames folders i can add it directly

- there is nice [thingy](https://i.ibb.co/pRw3gRX/image.png)

- polkadot is subset of polkadot,
- substrate-collectable-pallet sacha [linko](https://github.com/sacha-l/substrate-collectables-workshop)
- built with substrate [linko picture](https://i.ibb.co/bWN6VYm/image.png)

code is law
its future proof, now i have to jump of
