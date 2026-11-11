// family-fees.mjs: pre-run 7's hop fee per family. Families 1-13 (floor) pay 100 sompi per gram. Families 14-16
// (double) pay 200. Payments pay 150. Genesis (built once by hash-sixteen.mjs) stays at 200. Locked: not loosened here.
export const FLOOR_RATE = 100;
export const DOUBLE_RATE = 200;
export const PAY_RATE = 150;
export const GENESIS_RATE = 200;
export function familyRate(family) {
  const f = Number(family);
  if (Number.isInteger(f) && f >= 1 && f <= 13) return FLOOR_RATE;
  if (Number.isInteger(f) && f >= 14 && f <= 16) return DOUBLE_RATE;
  throw new Error("family " + family + " is not 1..16");
}
export const cohortOfFamily = (family) => (familyRate(family) === FLOOR_RATE ? "floor" : "double");
// The family list in a run config must say the same rates. Returns [] when it does, else the families that differ.
export function feeTableMisses(families) {
  return (families || []).filter((f) => Number(f.fee_sompi_per_gram) !== familyRate(f.family)).map((f) => Number(f.family));
}
// The one hop line for the builder: the rate rides on each hop, so one builder process carries both cohorts.
export const hopLine = (key, coin, nonce, family) => `hop ${key} ${coin.txid} ${coin.index} ${coin.amount} ${nonce} ${familyRate(family)}`;
