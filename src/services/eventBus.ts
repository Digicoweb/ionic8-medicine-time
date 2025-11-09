// services/eventBus.ts
type Callback<T = any> = (payload: T) => void;

const listeners: Record<string, Callback[]> = {};

export function emit<T = any>(event: string, payload: T): void {
  if (listeners[event]) {
    listeners[event].forEach(cb => cb(payload));
  }
}

export function on<T = any>(event: string, cb: Callback<T>): () => void {
  if (!listeners[event]) listeners[event] = [];
  listeners[event].push(cb);

  // unsubscribe function
  return () => {
    listeners[event] = listeners[event].filter(f => f !== cb);
  };
}
