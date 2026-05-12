import { useSyncExternalStore } from "react";

/** True after the first client commit. Use to defer `<video>` etc. so DOM is not mutated by extensions before hydration. */
export function useHasMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}
