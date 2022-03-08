import { useRef } from 'react';

function useMoveScrool(name: string) {
  const element = useRef<HTMLDivElement>(null);
  const onMoveToElement = () => {
    element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return { element, onMoveToElement, name };
}

export default useMoveScrool;
