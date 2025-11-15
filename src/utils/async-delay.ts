export async function asyncDelay(milliseconds: number) {
  if (milliseconds <= 0) return;

  await new Promise((resolve) => setTimeout(resolve, milliseconds));
}
