use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn cal(limit: usize) -> usize {
    let mut is_prime = vec![true; limit + 1];
    is_prime[0] = false;
    is_prime[1] = false;

    for p in 2..=((limit as f64).sqrt() as usize) {
        if is_prime[p] {
            for i in (p * p..=limit).step_by(p) {
                is_prime[i] = false;
            }
        }
    }

    let primes: Vec<usize> = (2..=limit).filter(|&i| is_prime[i]).collect();
    primes.len()
}