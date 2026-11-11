OBSERVATION

# HOLD-4, desk sender log, pre-run 7

> Counts only. The desk's sender log. It is not a chain count. Mini counts the chain.

The pinned minute is the first whole UTC minute whose start is at least 3 minutes after HOLD-3's On origin time. The rate in that minute is the reading.

Payment offer 4,053 tx/s at 150 sompi/gram, from 6 payment senders, 3 per kept public node (2 unique kaspads), each its own process and connection. Families offer 1.2 hop/s, 16 families live, one family-sender process and one builder, on the desk's private TN10 node, which takes no payment submit.

Payment pile: 8,400 coins on the payment key at the preflight, dealt evenly over the 6 senders before the first payment (last deal, start: 8,400 coins in all, 1,400 / 1,400 / 1,400 / 1,400 / 1,400 / 1,400, even). A deal never holds more coins than the preflight pile. A coin is re-used about once a second, so one sender's ceiling is about its pool per second.

## Hop rate per cohort, as built

Floor (families 1–13): 100 sompi/gram per hop. Double (families 14–16): 200 sompi/gram per hop. The rate rides on each hop line to the one builder.

## Funding coins, as read from the desk node

The funding coins were not one size. Sizes seen, whole tKAS (coins): 31 (1,169), 30 (971), 32 (870), 33 (635), 34 (429), 29 (372), 35 (321), 36 (191), 37 (88), 28 (77), 38 (61), 347 (22), and 59 more sizes. The fee is not called the whole cause.

## Minutes

| Minute (UTC) | Pay submit-OK | Attempts | Rejects, rate | Rejects, full | Other | Floor OK / att / rate rej / full rej / waiting | Double OK / att / rate rej / full rej / waiting | Family stalls logged | Family node mempool-high marks | Clean |
|---|---:|---:|---:|---:|---:|---|---|---:|---:|---|
| 2026-11-11T22:09 | 223,569 | 223,569 | 0 | 0 | 0 | 0 / 917 / 0 / 0 / 17 | 14 / 219 / 0 / 0 / 3 | 5 | 0 | yes |

A family stall is a coordinator mark: no hop of that family landed for a while. The family was still attempting. It is logged, and it does not make the minute dirty.

A mempool-high mark means the family node read a mempool at or over 90,000. In pre-run 7 that does not stop the families: the skip does not apply to them. A skip, if one were set, is dirt with its reason (node-skip-fam) for every minute it covers, and it clears when the mempool falls back under the line.

Within 10 percent means 218,862 to 267,498 submit-OK in the minute.

## Public nodes (local numbers)

Kept: 1, 5. The family sender is on the desk's private node, not on a kept public node. Both cohorts share that node.

Kept nodes are unique kaspads: each answered with its own node id at the preflight. 3 candidate endpoints passed the check and were 2 kaspads (node 4 is node 1; the second hostname was not used). 3 payment senders per kaspad.

| Node | Synced every sample | Last DAA | Pay submit-OK | Pay rejects | Dropped sockets | Answer ms, median |
|---:|---|---:|---:|---:|---:|---:|
| 1 | yes | 620986585 | 102,472 | 0 | 0 | 42 |
| 5 | yes | 620986585 | 121,097 | 0 | 0 | 36 |

## Payment senders

| Sender | Node | Pay submit-OK | Rejects | Minutes with a row |
|---|---:|---:|---:|---:|
| 1.1 | 1 | 33,013 | 0 | 1 of 1 |
| 1.2 | 1 | 34,738 | 0 | 1 of 1 |
| 1.3 | 1 | 34,721 | 0 | 1 of 1 |
| 5.1 | 5 | 40,563 | 0 | 1 of 1 |
| 5.2 | 5 | 39,963 | 0 | 1 of 1 |
| 5.3 | 5 | 40,571 | 0 | 1 of 1 |

## Hop submit to landing, per cohort

| Cohort | Landed of OK | Median ms | Slow tail (p95) ms |
|---|---:|---:|---:|
| floor | 0 of 0 | - | - |
| double | 13 of 14 | 1901 | 4082 |

Landing is the accepting block header time the desk's coordinator read. Waiting is submitted-OK not yet landed at the minute's end.
