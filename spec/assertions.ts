import { AssertionError } from "https://deno.land/std@0.92.0/testing/asserts.ts";

export function assertGreaterThanOrEqual(
  actual: number,
  expected: number,
  msg?: string
): void {
  if (actual < expected) {
    if (!msg) {
      msg = `actual: "${actual}" expected to be greater or equal  than: "${expected}"`;
    }
    throw new AssertionError(msg);
  }
}

export function assertLesserThanOrEqual(
  actual: number,
  expected: number,
  msg?: string
): void {
  if (actual > expected) {
    if (!msg) {
      msg = `actual: "${actual}" expected to be lesser or equal than: "${expected}"`;
    }
    throw new AssertionError(msg);
  }
}

export function assertGreaterThan(
  actual: number,
  expected: number,
  msg?: string
): void {
  if (actual <= expected) {
    if (!msg) {
      msg = `actual: "${actual}" expected to be greater than : "${expected}"`;
    }
    throw new AssertionError(msg);
  }
}

export function assertLesserThan(
  actual: number,
  expected: number,
  msg?: string
): void {
  if (actual >= expected) {
    if (!msg) {
      msg = `actual: "${actual}" expected to be lesser than : "${expected}"`;
    }
    throw new AssertionError(msg);
  }
}
