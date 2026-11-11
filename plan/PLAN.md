> **Experimental. We are just trying this.** [Disclaimer](../DISCLAIMER.md) · This page does not start a machine. Pre-run 7. Not Wednesday. Not Tuesday. Not pre-run 1, 2, 3, 4, 5, or 6.

# Targets

There is no T0. There is no public clock. There is no latest minute. A scored target stays until three clean minutes land, or until one repair pass is done.

The hash file comes first and does not wait for the paste (see Order, step 2). Nothing else in this page starts until the gates are true: Mini's TN10 node is synced with DAA moving and Mini has notified Build and TN10 ops; the desk's private TN10 node is up from its own data (PowerShell 7, no wipe) and synced; no Tuesday, Wednesday, pre-run 1, 2, 3, 4, 5, or 6 runner is up; the operator has armed (no paste; see the README); and this repo's `logs/PRE-RUN-OPEN.md` is on origin.

## Order

1. **Nodes live.** Both TN10 nodes synced, DAA moving. No wipe.
2. **Hashes first.** [hashes/SIXTEEN.md](../hashes/README.md): sixteen rows, family label, cohort, sha256 of the lowercase hex covenant id, and an On origin line. It is written before the paste and is not an arm or a send. No On origin line, no family submit. The old 8- or 32-family publisher is not used.
3. **Families.** The sixteen covenant families start.
4. **Senders, step by step.** The payment offers below, in order.

| Order | Offer, tx/s | Who sends | File | Kind |
|---:|---:|---|---|---|
| 1 | 1,013 | desk | HOLD-1 | scored |
| 2 | 2,027 | desk | HOLD-2 | scored |
| 3 | 3,040 | desk | HOLD-3 | scored |
| 4 | 4,053 | desk, and the bot if a free synced node answers | HOLD-4 | observation |
| 5 | 1,013 | desk | RETURN | scored |

Sixteen families, offer 1.2 hop/s, boson, stagger 0, from the first family submit until RETURN closes. Families 1–13 pay 100 sompi/gram. Families 14–16 pay 200. Payments pay 150. The sixteen are one build, one family-sender process, one node. The rate is per family. In the one builder the rate rides on each hop, so a hop's fee is its mass times its family's rate ([tools/sixteen](../tools/sixteen/README.md#hop-fees)). A single rate for the process is not a fee difference. A second builder is not the fix. If the funding coins are not one size, the file says so and does not call the fee the whole cause.

A scored minute is clean when the desk's submit path is synced, that node's DAA is moving, submit-OK is within 10 percent, rejects are logged as rate or full, no sender-off, pool-low, node-drop, or proc-exit, and every family is still attempting, and no family-node skip is on (a skip is dirt with its reason for every minute it covers). A family STALL mark (no hop of that family landing for a while) is logged per minute. It is not dirt: the family is still attempting. A stall at the two-thirds rate is part of the congestion question. Mini's marks do not gate the next offer.

Payment senders use every public node that answers synced: three processes per kept unique kaspad, each its own connection (lock line (iii)). The desk keeps that set through HOLD-4. The family sender is on the desk's private TN10 node, which takes no payment submit (lock line (i)).

HOLD-4 opens when the desk's HOLD-3 file is on origin, met or `NOT MET`. The sample minute is the first whole UTC minute whose start is at least 3 minutes after that file's On origin time. The rate in that minute is the reading, including a rate under 3,040. If the path is not synced, the file still covers that minute and says so. The run does not open a later minute. This pinned minute is a target rule inside the run. It is not a public clock.

The bot uses one public node outside the desk's HOLD-3 set. The split stays in the local config. The config is not committed. No free synced node means the bot does not send.

The abort line stays **2,500 coins** and **18,000 usable tKAS**. Do not lower it. Do not spend a coin at or above 100,000 tKAS. If this pre-run would leave the lane under that line, do not start.

The desk node process is not stopped by this pre-run. No chain data is wiped on any machine.

The Wednesday pages stay as they are. Pre-run 1's pages stay as they are. This page is pre-run 7's page.

Locks: [locks/LOCKED.md](../locks/LOCKED.md).
