import { useCallback, useState } from 'react';

type CounterProps = {
  initialCount: number;
  step: number;
  min?: number;
  max?: number;
};

export function Counter({ initialCount, step, min, max }: CounterProps) {
  const [count, setCount] = useState(() => initialCount);

  const handleIncrement = useCallback(() => {
    setCount(count => {
      const newCount = count + step;
      return (max === 0 || max) && max < newCount ? max : newCount;
    });
  }, [max, step]);

  const handleDecrement = useCallback(() => {
    setCount(count => {
      const newCount = count - step;
      return (min === 0 || min) && newCount < min ? min : newCount;
    });
  }, [min, step]);

  return (
    <>
      <button onClick={handleDecrement} disabled={!!((min === 0 || min) && count <= min)}>
        -
      </button>
      <output>{count}</output>
      <button onClick={handleIncrement} disabled={!!((max === 0 || max) && max <= count)}>
        +
      </button>
    </>
  );
}
