function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    console.warn('Null or undefined arguments encountered. Returning default value.');
    return 0; // Or throw an error, or use a default value as appropriate
  }
  // ... more code, now safe to use a and b
}