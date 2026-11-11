> **Experimental. We are just trying this.** [Disclaimer](../../DISCLAIMER.md) · Counts only. No key, seed, txid, covenant id, address, host, or port.
>
> The desk's sender log for pre-run 7. It is not a chain count. It is not Wednesday's count.

# Desk sender log

The files are absent until each step closes. None is written before `hashes/SIXTEEN.md` has an On origin line.

| File | Target |
|---|---|
| HOLD-1.md | 1,013 tx/s |
| HOLD-2.md | 2,027 tx/s |
| HOLD-3.md | 3,040 tx/s |
| HOLD-4.md | one observation minute at 4,053 tx/s. The first line is `OBSERVATION` |
| RETURN.md | 1,013 tx/s again |

A row is submit-OK, attempts, rejects split into rate and full, and the waiting count per cohort. Each file also states the hop rate per cohort as built (100 for families 1–13, 200 for families 14–16) and whether the funding coins were one size, as read from the node. If they were not, it gives the sizes seen, rounded to whole tKAS, and does not call the fee the whole cause. A size is never guessed. Public nodes are local numbers. The paste is [GO-DESK.md](../../GO-DESK.md).
