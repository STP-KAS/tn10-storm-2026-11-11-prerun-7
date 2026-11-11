> **Experimental. We are just trying this.** [Disclaimer](DISCLAIMER.md) · Kaspa Testnet-10 only; tKAS has no value.
>
> **This is the playbook for pre-run 7.** It is not Wednesday. It is not Tuesday. It is not pre-run 1, 2, 3, 4, 5, or 6. It does not start a machine and it does not arm one. A read of this page is not a paste.

# Playbook

This page states who does what, and the gates before each machine may start, so Mini, the desk (Build), and the bot do not guess. The plan is [plan/PLAN.md](plan/PLAN.md), the locks are [locks/LOCKED.md](locks/LOCKED.md), and the pastes are the three go files. This page does not override them.

Pre-run 1 is [tn10-storm-2026-11-11-prerun](https://github.com/STP-KAS/tn10-storm-2026-11-11-prerun). Pre-run 2 is [tn10-storm-2026-11-11-prerun-2](https://github.com/STP-KAS/tn10-storm-2026-11-11-prerun-2). Pre-run 3 is [tn10-storm-2026-11-11-prerun-3](https://github.com/STP-KAS/tn10-storm-2026-11-11-prerun-3). Pre-run 4 is [tn10-storm-2026-11-11-prerun-4](https://github.com/STP-KAS/tn10-storm-2026-11-11-prerun-4). Those four failed and are closed. Pre-run 5 is [tn10-storm-2026-11-11-prerun-5](https://github.com/STP-KAS/tn10-storm-2026-11-11-prerun-5). Pre-run 6 is [tn10-storm-2026-11-11-prerun-6](https://github.com/STP-KAS/tn10-storm-2026-11-11-prerun-6). Those two finished through RETURN and are closed. Their files are history. None of them is a live gate here.

## Oversight

TN10 ops oversees this rehearsal end to end: Mini, the desk (Build), and the bot. TN10 only. Never mainnet. Keep disk safe. Do not edit the Tuesday repo, the Wednesday repo, or pre-run 1's, 2's, 3's, 4's, or 5's go files. Do not write `REVIEW_CLOSED`.

For pre-run 7 the operator does not paste. On 2026-11-11 he said to start everything, with no pastes, and to execute until successful. That instruction is the arm. The agents on the desk, Mini, and the bot start their own runners once the gates are facts. A sentence in chat still does not write `PRE-RUN-OPEN`: the desk runner writes it after its gates. Oversight does not arm a machine by itself.

What oversight checks:

- Nodes: the existing TN10 process is the one that is up on Mini and on the desk, data is not wiped, each node is synced with DAA moving before we count or send. The desk node is started with PowerShell 7, never Windows PowerShell 5.1. `KaspaPublicNode` is not started. The desk devnet is left alone.
- Hashes: `hashes/SIXTEEN.md` with sixteen family rows and an On origin line, before the first family submit. Not the old 8- or 32-family publisher. No On origin line, no send. The covenant id stays off the repo.
- Senders: one family-sender on the desk, payments only as the plan allows, the bot only in the HOLD-4 minute on a leftover synced public node, or a legal `NO SEND`. No second runner. No waiter left over from a dead run.
- Files: desk, Mini, and bot each write only their own folder in this repo. HOLD-4 is the pinned minute after desk HOLD-3 is on origin.
- Disk and abort: do not start if the lane would fall under 2,500 coins or 18,000 usable tKAS. Do not print balances or secrets.

## Start gates

There is no clock. Each gate is a fact read from a node or from origin, in this order.

1. **Mini node synced.** Existing TN10 kaspad, existing data, no wipe. `isSynced` true, DAA moving. Mini notifies Build and TN10 ops.
2. **Desk node synced.** Existing private TN10 kaspad, existing data, loopback only, started with `pwsh`. No wipe. Synced, DAA moving.
3. **No other runner.** No Tuesday, Wednesday, pre-run 1, 2, 3, 4, 5, or 6 runner or waiter on any machine. Lane above the abort line.
4. **Hashes.** The desk pushes `hashes/SIXTEEN.md` with [tools/sixteen](tools/sixteen/README.md): sixteen rows and an On origin line. It is not an arm and not a send, and it does not wait for the paste.
5. **Arm.** The operator's instruction to start everything. No paste. The agents start the runners.
6. **Open.** The desk pushes `logs/PRE-RUN-OPEN.md` here. Mini then pushes `logs/MINI-ARMED.md` here.
7. **Families, then senders.** The genesis transactions come from the bundle that wrote `hashes/SIXTEEN.md`. Nothing rebuilds it. Families start. Then 1,013, 2,027, 3,040, the HOLD-4 minute, and RETURN.

## Who does what

| Who | Role | When to start | What not to do |
|---|---|---|---|
| **Desk (Build)** | Sends the sixteen families and the payment offers. Does not count the chain. Publishes `hashes/SIXTEEN.md` first, then `logs/PRE-RUN-OPEN.md`, then `counts/desk/` as each step closes. | After gates 1–4. First sentence: `DESK. I send on pre-run 7. I do not count. This is not Wednesday.` No family submit before `hashes/SIXTEEN.md` has an On origin line and `MINI-ARMED` is on origin. | Do not start from a chat sentence. Do not count. Do not stop or wipe the desk TN10 node. Do not use Windows PowerShell 5.1 or start `KaspaPublicNode`. Do not touch the desk devnet. Do not use the 8- or 32-family publisher. Do not drop a HOLD-3 node to free one for the bot. Do not start a second runner. |
| **Mini** | The only chain counter. Does not send, mine, or hold a key. Publishes `logs/MINI-ARMED.md` after `PRE-RUN-OPEN` is on origin here, then `counts/mini/` when the matching desk file is on origin. | Node synced and Build notified first. Arms only after the operator pastes [GO-MINI.md](GO-MINI.md) and this repo's `PRE-RUN-OPEN` is on origin. First sentence: `MINI. I count pre-run 7. I do not send. This is not Wednesday.` | Do not send. Do not wipe chain data. Do not resume pre-run 1 or start its runner tasks or Tuesday's. Do not count before the gate file. |
| **Bot (TN10 ops)** | Sends payments in the HOLD-4 minute only, on one leftover synced public node outside the desk HOLD-3 set, or publishes a legal `NO SEND`. Publishes `counts/bot/HOLD-4.md`. Does not count the chain. No local node. | After the operator pastes [GO-BOT.md](GO-BOT.md). Sends only after `PRE-RUN-OPEN`, `hashes/SIXTEEN.md`, and desk `counts/desk/HOLD-3.md` are on origin here, in the pinned HOLD-4 minute. First sentence: `GROKBOT. I send payments on the pre-run 7 HOLD-4 only. I do not count. This is not Wednesday.` Stops on this repo's `logs/BOT-HALT.md` or `logs/FAILED.md`. | Do not send on HOLD-1, HOLD-2, HOLD-3, or RETURN. Do not start a second waiter. Do not treat chat or a pre-run 1, 2, 3, 4, 5, or 6 file as the start. |

## Status when this repo was opened

Not a gate. A status line, so nobody guesses.

- Mini: existing TN10 kaspad 2.1.0 up since 2026-11-11T07:31:03Z, no wipe, synced, DAA moving. Pre-run 6's Mini counter had exited after its RETURN file; nothing of pre-run 6 runs on Mini.
- Desk: existing private TN10 kaspad 2.1.0 up since 2026-11-11T07:44:58Z with `pwsh`, no wipe, synced, DAA moving. It is not stopped for this pre-run. No pre-run 6 runner or child is running.
- Box: no local TN10 node. No bot waiter running. Pre-run 6's waiter had finished after its NO SEND file.
- Hashes: `hashes/SIXTEEN.md` is absent. Pre-run 6's genesis coins are spent. Keys without a genesis coin get one fresh coin each from the family lane (key 0) before the build.
- Payment pile: pre-run 6's 6,000 coins are still on the payment key. Pre-run 7 tops it up from the family lane to 8,400, one lane coin per transaction at 150 sompi/gram, so six senders hold 1,400 each: HOLD-3's share is 507 a second per sender, HOLD-4's 676. The lane stays above the abort line with margin.
- Nodes: the TN10 resolver and every candidate endpoint answered as the same two public kaspads that pre-run 6 kept. No third public kaspad was found. That is why lock line (iii) adds senders per kaspad rather than kaspads.
- Family node: the desk's private TN10 node (lock line (i)). It is a unique synced kaspad, it takes no payment submit, and the locks do not bar it: they say the families share one node set, not that it is public. The two public kaspads stay whole for the payments, which is where HOLD-3's limit sat in pre-run 6.
- Runner: a no-undef lint, then offline rehearsals on the desk against a local stand-in with about 1-second submit loops. The readings are recorded in this page in a later commit, before `PRE-RUN-OPEN`.
- Known risks, not fixed mid-run:
  - The signed one-in one-out inclusion line on TN10 is about 3,040–3,080 a second. HOLD-3 sits on it, and HOLD-4 at 4,053 is above it for this payment shape. Submit-OK can run ahead of inclusion; Mini's files carry what the chain accepted.
  - The rehearsal models a limit per connection. If a public kaspad's limit is per node rather than per connection, three senders on it will not lift HOLD-3, and the minutes will show that.
  - The family node's hops enter the network through the desk node's outbound peers (it listens on loopback only), which is slower to spread than a public node. That is data for the congestion question, not a fault.
  - Unique kaspads: the bot is expected to write `NO SEND` and `no-free-node` unless another kaspad is free and synced in its pass.
- Arm: the operator's instruction to start everything, and on 2026-11-11 to keep going, keep experimenting, and spend what the run needs. Nothing has sent from this repo.

## Offline rehearsals, recorded before `PRE-RUN-OPEN`

Two rehearsals ran side by side on the desk on 2026-11-11, from 21:17Z, with this repo's desk runner, pay sender, and kit17. Each used a local stand-in for the two public kaspads whose connections answer in about 1-second submit loops (about 1,000 submits a second per connection), a local stand-in for the payment key's coins, and a local origin. They sent nothing to the network. The family sender, builder, and coordinator ran against the stand-in.

- Rehearsal A: three senders per kaspad (six), pile 8,400, the family skip line at 90,000 for the test, a stand-in mempool over the line for 70 seconds in HOLD-1, node 5 unsynced until the repair restart, and 1,000 phantom coins listed on the payment key after 150 seconds that could not be spent.
  - (i): `NODE_SKIP node=fam reason=mempool_90k` at 21:18:05Z and `NODE_SKIP_CLEAR` at 21:19:15Z when the mempool read under the line. Minutes 21:18 and 21:19 carried `node-skip-fam:mempool_90k`; 21:20 did not. The families attempted again after the clear.
  - (ii): at the HOLD-1 repair all six senders handed off 1,400 each. The node view listed 9,400 coins (the 1,000 phantoms too). The deal was 8,400, `truth=handoff`, `handed_unlisted_kept=0`, none over the pile, 1,400 each. No phantom coin was ever tried.
  - (iii): HOLD-1 `MET` after the repair (60,755, 60,796, 60,784), HOLD-2 `MET` (121,498, 121,560, 121,554), HOLD-3 `MET` (182,465, 182,307, 182,469; about 91,200 per sender in three minutes), HOLD-4 observation 245,972, RETURN `MET` (60,838, 60,808, 60,821), then METHOD. The start deal was 8,400 over six senders, 1,400 each, and every sender logged `PAY_START` at the first start.
- Rehearsal B, the control: one sender per kaspad (two), same pile, same stand-in loops, skip line 0. HOLD-1 `MET` (60,819, 60,431, 60,852). HOLD-2 `NOT MET` after one repair: 103,377–109,458 a minute against 121,620. HOLD-3 `NOT MET` after one repair: 100,800–109,200 a minute against 182,400. It was stopped after its HOLD-3 file, before its HOLD-4 minute, since it had shown what it was for. Under a limit per connection, two senders cannot hold HOLD-3; six can.
- What the rehearsal does not prove: whether a public kaspad's limit is per connection or per node. If it is per node, three senders on it will not lift HOLD-3 live, and the minutes will show that.

## When something breaks

Append a worked fix to [locks/LOCKED.md](locks/LOCKED.md) in the form that page shows, and a repair line to `logs/FIXES.md`. If the run dies before RETURN, write `logs/FAILED.md`, stop every runner and waiter, and do not resume. The next attempt is a new repo that starts from this repo's lock file. Do not rewrite the go files in this repo to match the result.
