/**
 * useCallback
 *
 * useCallback is a React Hook that lets you cache a function definition between re-renders.
 *
 * const cachedFn = useCallback(fn, dependencies)
 *
 * useCallback caches a function between re-renders until its dependencies change.
 *
 * In JavaScript, a function () {} or () => {} always creates a different function.
 *
 * NOTE: You should only rely on useCallback as a performance optimization.
 * If your code doesn’t work without it, find the underlying problem and
 * fix it first. Then you may add useCallback to improve performance.
 */
