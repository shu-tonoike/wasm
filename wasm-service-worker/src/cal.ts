export const cal = (limit: number): number => {
  const isPrime: boolean[] = Array(limit + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let p = 2; p * p <= limit; p++) {
      if (isPrime[p]) {
        for (let i = p * p; i <= limit; i += p) {
          isPrime[i] = false;
        }
      }
    }

    const primes: number[] = [];
    for (let i = 2; i <= limit; i++) {
      if (isPrime[i]) {
        primes.push(i);
      }
    }
    return primes.length
}