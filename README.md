> **Experimental. We are just trying this.** [Disclaimer](DISCLAIMER.md) · Kaspa Testnet-10 only; tKAS has no value.
>
> **This is a pre-run. Pre-run 7.** It is not the Wednesday run. It is not the Tuesday run. It is not pre-run 1, 2, 3, 4, 5, or 6. A read does not start a runner.

# tn10-storm-2026-11-11-prerun-7

**Pre-run 7 of the Wednesday neuron.** The neuron stays [tn10-storm-2026-11-11](https://github.com/STP-KAS/tn10-storm-2026-11-11). This repo does not edit that repo, does not write `REVIEW_CLOSED`, and does not set or move a clock for it.

**Tuesday stays Tuesday.** [tn10-storm-2026-11-10](https://github.com/STP-KAS/tn10-storm-2026-11-10) is not edited from here. This pre-run does not send while a Tuesday or Wednesday runner is up.

**Pre-runs 1, 2, 3, and 4 failed and are closed. Pre-runs 5 and 6 finished and are closed.** Pre-run 1 is [tn10-storm-2026-11-11-prerun](https://github.com/STP-KAS/tn10-storm-2026-11-11-prerun). Pre-run 2 is [tn10-storm-2026-11-11-prerun-2](https://github.com/STP-KAS/tn10-storm-2026-11-11-prerun-2): HOLD-1 was met, then the runner was stopped mid-HOLD-2 to apply a scoring fix and its children died with it. Pre-run 3 is [tn10-storm-2026-11-11-prerun-3](https://github.com/STP-KAS/tn10-storm-2026-11-11-prerun-3): its runner stopped on the first scored minute with a scoping error (`readSub is not defined`). Pre-run 4 is [tn10-storm-2026-11-11-prerun-4](https://github.com/STP-KAS/tn10-storm-2026-11-11-prerun-4): HOLD-1 and HOLD-2 were met, HOLD-3 stayed under its offer, the one repair stopped the payment senders and did not start them again, and a git fetch error kept HOLD-3 and the runner's FAILED file off origin. Pre-run 5 is [tn10-storm-2026-11-11-prerun-5](https://github.com/STP-KAS/tn10-storm-2026-11-11-prerun-5): HOLD-1 and HOLD-2 were met; HOLD-3 and RETURN closed `NOT MET` after one repair pass each. Its HOLD-3 ceiling, about 118,000 submit-OK a minute, was the 2,000-coin payment pile, and its repairs restarted the payment senders on coins already spent in the mempool, with an uneven split. Pre-run 6 is [tn10-storm-2026-11-11-prerun-6](https://github.com/STP-KAS/tn10-storm-2026-11-11-prerun-6): HOLD-1 and HOLD-2 were met with a 6,000-coin pile dealt fairly over two senders, and both repairs handed the pools off with nothing killed. HOLD-3 closed `NOT MET` at 132,439–144,595 submit-OK a minute (the cap had moved from coins to the two public kaspads' submit loops), the family sender latched off on a one-way mempool skip during HOLD-3, and RETURN closed `NOT MET` only because every family had stopped. Their open, armed, halt, and failed files are history. They are not gates for this repo. This repo starts from pre-run 6's [locks/LOCKED.md](https://github.com/STP-KAS/tn10-storm-2026-11-11-prerun-6/blob/c527650/locks/LOCKED.md) at commit c527650, copied here as [locks/LOCKED.md](locks/LOCKED.md).

**What pre-run 7 changes.** Fresh hashes, because pre-run 6's genesis coins are spent. Three lines from pre-run 6's lock: (i) the family sender gets its own node, the desk's private TN10 node, which no payment sender submits to, and its mempool skip no longer applies to the families (pre-run 6's one-way skip stopped all sixteen for the rest of the run); a skip, if one is ever set, clears when the mempool falls back under the line and is dirt with its reason for every minute it covers; (ii) when every payment sender hands off at the repair, the deal takes the handed-off pools as the truth, the node view only drops coins it shows as spent and never adds, and no deal holds more coins than the preflight pile; (iii) the HOLD-3 limit moved from coins to nodes, so each kept public kaspad gets three payment senders, each its own process and connection, and a slow loop may catch up to three times its share instead of 1.25 times. The pile grows to 8,400 coins so each of the six senders holds 1,400. The runner passed an offline rehearsal on the desk against a stand-in with about 1-second submit loops before this live run. Every line from pre-runs 2–6 stays: no runner restart mid-run, children started detached, a family stall is logged and is not dirt, a full mempool returns the coin, the repair starts the missing senders, git retries with a local FAILED file, unique kaspads, the handoff repair. The offers, fees, abort line, and node lines are unchanged.

## What this measures

The question is what covenants do under different network circumstances: how they behave under congestion, and with competitors on the same network.

Some covenants use a basic transaction fee, and some use a priority fee. In part of the load, senders also pay an increased fee. Load is added in thirds: one-third, two-thirds, three-thirds, and four-thirds if that last step can be held.

## Why this matters

Covenants under load reveal behavior that steady-state testing cannot. The fee-rate differences and the load steps exist to surface that behavior. The playbook of fixes exists so a later run starts from ground that is already known.

## Sum-up

This pre-run is target-oriented. There is no T0, no public clock, no hash clock, and no latest minute. Nodes live, hashes first, then the families, then the senders step by step. The offers are the same offers. The machines are the same machines. The result here is a rehearsal reading. It is not Wednesday's count and it is not a number for Pulse.

| Machine | Paste | First sentence |
|---|---|---|
| Desk | [GO-DESK.md](GO-DESK.md) | DESK. I send on pre-run 7. I do not count. This is not Wednesday. |
| Mini | [GO-MINI.md](GO-MINI.md) | MINI. I count pre-run 7. I do not send. This is not Wednesday. |
| Bot | [GO-BOT.md](GO-BOT.md) | GROKBOT. I send payments on the pre-run 7 HOLD-4 only. I do not count. This is not Wednesday. |

[GO.md](GO.md) is the map. It does not start a machine. For pre-run 7 the operator does not paste. On 2026-11-11 he said to start everything, with no pastes, and to execute until successful. That instruction is the arm. The agents on the desk, Mini, and the bot start their own runners once the gates are facts. A sentence in chat still does not write `PRE-RUN-OPEN`: the desk runner writes it after its gates.

Roles and start gates are in [PLAYBOOK.md](PLAYBOOK.md). A read of that page does not arm a machine.

## Start gates, in order

Nothing below is a time. Each gate is a fact read from a node or from origin.

| Order | Gate | Who |
|---:|---|---|
| 1 | Mini's existing TN10 node is up from its own data, no wipe, `isSynced` true, DAA moving. Mini has notified Build and TN10 ops. | Mini |
| 2 | The desk's existing private TN10 node is up from its own data, started with PowerShell 7, no wipe, synced, DAA moving. | Desk |
| 3 | No Tuesday, Wednesday, pre-run 1, 2, 3, 4, 5, or 6 runner or waiter is in a process list. The lane is above the abort line. | Desk, bot |
| 4 | Hashes first. The desk pushes `hashes/SIXTEEN.md` with [tools/sixteen](tools/sixteen/README.md): sixteen rows and an On origin line. A sixteen-family path, not the old 8- or 32-family publisher. This file is not an arm and not a send, and it does not wait for the paste. | Desk |
| 5 | The operator's arm: his instruction to start everything. No paste. | Operator |
| 6 | The desk pushes `logs/PRE-RUN-OPEN.md` in this repo. | Desk |
| 7 | Mini pushes `logs/MINI-ARMED.md` in this repo. | Mini |
| 8 | Families, from the genesis bundle that wrote `hashes/SIXTEEN.md`, then payments: 1,013, 2,027, 3,040, the HOLD-4 minute at 4,053, then 1,013 again. | Desk; the bot in HOLD-4 only |

## What a decent result is

Decent is enough to stop opening another pre-run.

- `hashes/SIXTEEN.md` is on origin with sixteen rows and an On origin line before the first family submit.
- HOLD-1 met: three clean minutes of submit-OK within 10 percent of 1,013.
- The HOLD-4 minute has a desk file, a bot file or a legal `NO SEND`, and a Mini file with the matching sender mark.
- Cohort rows are in the files. No id, txid, key, seed, address, host, or port is in this repo.
- Wednesday's repo is untouched. Tuesday's repo is untouched. Pre-run 1's go files are untouched. The desk node process was not stopped.

Perfect is the same, with HOLD-2, HOLD-3, and RETURN each met or an honest `NOT MET` after one repair pass, and [logs/METHOD.md](logs/README.md) on origin.

A miss here stays in this repo. A next attempt is a new repo, and it starts from this repo's [locks/LOCKED.md](locks/LOCKED.md). This repo's pastes are not rewritten to match the result.

## What is already locked

[locks/LOCKED.md](locks/LOCKED.md) holds every line locked before and after pre-run 1, and the pre-run 7 section. A fix that works during this run is appended there.

## Targets

Targets: 1,013, then 2,027, then 3,040, then one observation minute at 4,053, then 1,013 again. Scored steps need three clean minutes, or they close `NOT MET` after one repair pass. HOLD-4 is the minute pinned in [plan/PLAN.md](plan/PLAN.md).

**Part of [tn-master](https://github.com/STP-KAS/tn-master).** The rule is [docs/NEURON.md](https://github.com/STP-KAS/tn-master/blob/main/docs/NEURON.md). This pre-run is its own row. It is not row 47.
