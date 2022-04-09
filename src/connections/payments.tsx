export async function makePayment() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return Math.random() > 0.4;
}
