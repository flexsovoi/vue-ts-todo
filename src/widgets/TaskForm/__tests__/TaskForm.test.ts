import { describe, vi } from 'vitest';

describe('Task Form', () => {
  const mockEvent = {
    preventDefault: vi.fn(),
    target: {
      taskName: 'Test Task',
      taskLevel: 'HIGH',
    },
  } as unknown as Event;
});
