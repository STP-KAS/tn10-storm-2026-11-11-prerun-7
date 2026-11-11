> **Experimental. We are just trying this.** [Disclaimer](../DISCLAIMER.md) · Kaspa Testnet-10 only; tKAS has no value. Pre-run 7.

# Lessons, pre-run 7

> Written by the operator after RETURN closed. [METHOD.md](METHOD.md) is the desk runner's own summary and is not rewritten. The payment figures below are the desk's submit-OK and the Mini counter's reads. They are not inclusion counts.

## What happened

Every step closed on its first three minutes, with no repair. The runner was not restarted, nothing was killed, and every count file reached origin on the first try. No `FAILED` file was written.

| Step | Offer, tx/s | Desk head | Desk submit-OK per scored minute | Desk file on origin (UTC) |
|---|---:|---|---|---|
| HOLD-1 | 1,013 | MET | 60,764 / 60,976 / 60,696 | 21:57:13Z |
| HOLD-2 | 2,027 | MET | 121,515 / 121,851 / 121,504 | 22:01:13Z |
| HOLD-3 | 3,040 | MET | 182,331 / 182,657 / 182,945 | 22:05:13Z |
| HOLD-4 | 4,053 | OBSERVATION | 223,569 (pinned minute 22:09Z) | 22:10:14Z |
| RETURN | 1,013 | MET | 60,777 / 60,799 / 60,668 | 22:14:13Z |

The bot filed `NO SEND no-free-node` for HOLD-4: every answering public endpoint in its list was one of the desk's two kept kaspads.

## What this does and does not show

- **Submit-OK is not inclusion.** In HOLD-3 the desk's two public kaspads accepted about 182,000 payment submits a minute. Mini's node log, over the same minutes, shows blocks carrying about 120,000 to 150,000 transactions a minute in all (that block-level figure counts a transaction once per block that carries it, and includes other users' load). Blocks in those minutes looked close to full. So the step met its offer as a submit rate, but the network did not take all of it in the same minutes.
- **The congestion question got a real answer for the covenants.** With payments at 150 sompi/gram, the floor families (100) almost stopped landing from HOLD-2 on, and the double families (200) landed only a few hops a minute; both came back in RETURN. Desk coordinator reads, landed of submit-OK per cohort: HOLD-1 floor 1,244 of 1,244 and double 320 of 320 (medians about 1.4–1.6 s); HOLD-2 floor 4 of 11 and double 13 of 15 (medians 21–28 s); HOLD-3 floor 37 of 48 and double 18 of 20; HOLD-4 floor 0 and double 13 of 14; RETURN floor 267 of 269 and double 202 of 202 (medians about 2.2 s). Families are chained, so one hop waiting in the mempool holds that family still. Paying double the floor did not keep a covenant moving against a heavier payment load at 1.5 times the floor; it kept a few hops moving.
- **Mini could not count HOLD-3, HOLD-4, or RETURN.** Its node kept taking blocks and headers, but stopped validating the UTXO set from about 22:02Z (`0 UTXO-validated blocks` in its log for most ten-second windows), so the counter read 909 non-coinbase transactions in the first HOLD-3 minute and nothing after. Its files for those steps list the minutes as not read. The `MET` at the top of Mini's files repeats the desk's head; it is not Mini's own verdict.
- **Two kaspads were enough for 3,040 submit-OK a minute** once each had three sender processes (lock line iii). Pre-run 6 stalled at 132,439–144,595 a minute on the same two kaspads with one sender each. Answer times stayed 34–42 ms median, with no rejects and no dropped sockets.
- The skip fix (lock line i) did its job: the family node read a mempool over 90,000 once in HOLD-3, logged it as a mark, and all sixteen families kept attempting to the end.
- The handoff deal (lock line ii) was not exercised live, because no repair was needed.

## What limited throughput

On the submit side, nothing in this run hit a limit up to 4,053: HOLD-4's pinned minute read 223,569, inside 10 percent of its offer. The limit that shows is downstream: block space on TN10 in those minutes, and a counting node (Mini) that could not keep its virtual chain up under the load. A higher offer would add more mempool, not more inclusion.

## What a pre-run 8 would change (not opened)

1. Count inclusion, not only submit: a counting node that keeps up under load (Mini's node fell behind), or a second counter, so HOLD-3 and higher have a chain figure.
2. Make the covenant question the headline: run the payment load at a level the blocks can take, and step the family fee (for example 100, 200, 300 against payments at 150) to find where a covenant keeps moving.
3. Give the bot a real chance in HOLD-4: a third unique kaspad that the desk does not keep, or the bot stays a `NO SEND` by design.
4. Mini's head should be its own verdict from what it read, or say plainly that it repeats the desk.
