import Player from "../src/ts/Player";

test("create player object", () => {
  const player = new Player("", 0, 0);
  expect(player.url).toBe("");
  expect(player.x).toBe(0);
  expect(player.y).toBe(0);
});
