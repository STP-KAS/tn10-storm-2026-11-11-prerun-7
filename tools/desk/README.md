> **Experimental. We are just trying this.** [Disclaimer](../../DISCLAIMER.md) · Kaspa Testnet-10 only. No key, id, address, host, or port in these files.

# Desk runner, pre-run 6

- `preflight.mjs`: read-only. Desk node synced, UTXO index, DAA moving; family lane against the abort line; payment pile count; every bundle funding coin live; each public node checked (version, synced, DAA gap, UTXO index, answer time, node id). Two hostnames that answer with one node id are one kaspad: the lowest local number is kept, the other is dropped as same-kaspad. A node whose id cannot be read is dropped. Writes the kept list to the private run folder (the id only as a short private hash). Prints counts only.
- `desk-runner.mjs --mode open`: gates, then `logs/PRE-RUN-OPEN.md` once. Not a send.
- `desk-runner.mjs --mode run`: gates (`PRE-RUN-OPEN` and `MINI-ARMED` on origin, a payment pile of at least 4,000 coins), the sixteen genesis transactions from the published bundle (`tools/sixteen/submit-sixteen.mjs`), the families on kit16 and the patched builder (100/200 per hop), the even deal of the payment pile, then the payment offers, the HOLD-4 minute, RETURN, and `logs/METHOD.md`. A missing gate is `HELD` and an exit, never a wait.
- `pay2.mjs`: one payment sender per kept kaspad, fee 150, the offer split evenly and paced on the clock, change re-used at once.
- `paypool.mjs`: the pool rules both of them use (below).

The runner starts its children detached (WMI), outside its own process tree, so they survive the parent. It is never restarted mid-run. A family STALL is logged per minute and is not dirt.

## Pre-run 5 lessons in this runner

- **The pile is sized for HOLD-3.** A payment coin is re-used about once a second (its change is spent again as soon as the batch that made it is done), so one sender's ceiling is about its pool per second. Pre-run 5's 2,000 coins capped two senders at about 118,000 a minute, under HOLD-3's 164,160–200,640. The run is held (`pile-short`) under 4,000 coins. The runner logs the pile, the deal, and the HOLD-3 and HOLD-4 share per sender before the first payment.
- **A free coin is read from the mempool too.** A coin spent by a mempool transaction is not free, even if the UTXO index still lists it. An unspent output of one of our mempool transactions is a coin (an unconfirmed change tip). The desk node's mempool and each kept node's mempool are read.
- **The deal is even and checked.** Before the first payment the runner deals the free coins round-robin in outpoint order over the senders and writes one private lane file each (`POOL_SPLIT`). Each sender loads its lane, checks it against the node view, and logs what it loaded; the runner reads that back (`POOL_LOADED`).
- **The repair hands off, it does not kill.** The one payment-sender repair writes `control/PAY-HANDOFF-<n>`. Each sender finishes the batch in flight, writes its exact pool (tips included) to a private handoff file, logs `PAY_HANDOFF`, and exits. Only a sender that has not handed off in 30 seconds is killed, and then its last 5-second snapshot is used. The runner waits until every stopped process is gone, waits 3 seconds for the last submits to reach the desk node, checks the handed-off pools against the node view (spent coins dropped, fresh tips kept), merges them with the node's free set, deals them again, and starts the senders. It logs `REPAIR_RESTART` with how many run again and the pool each loaded.
- **The rate is paced on the clock.** A loop that takes a little over a second still sends the share for the time that passed, so a minute is not 59 loops of the share.
- **One build per payment.** One-in one-out payments of one key have one mass. The fee-sizing draft is built for the first coin and every 64th after, the largest mass seen is used, and the fee stays mass times 150.

## Pre-run 4 lessons kept

- **Repair restarts the senders.** A sender named in the list but no longer alive is started again; the list alone never counts as running. The repair checks each one's `PAY_START`.
- **Git errors do not hide a dead run.** Every git call has a time limit. A fetch is tried three times. A HOLD file, `METHOD.md`, or `FAILED.md` push is retried. A count file is written to the run folder before its push. If the run fails, `logs/FAILED.local.md` is written in the run folder first, then pushed with retries. If origin still refuses, the runner leaves a marker for the operator, who publishes that file.
- **Unique kaspads.** The kept list comes from the preflight above. One payment sender per kaspad.
