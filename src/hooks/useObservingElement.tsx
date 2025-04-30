import React from "react";

const useObservingElement = (option?: IntersectionObserverInit) => {
  const newOption: IntersectionObserverInit = React.useMemo(
    () => ({
      root: null,
      // rootMargin: "96px",
      threshold: Array.from({ length: 1000 }, (_, i) => i / 1000),
      ...option,
    }),
    [option]
  );
  const elementRef = React.useRef(null);
  const [inView, setInView] = React.useState(false);
  const [targetTouched, setTargetTouched] = React.useState(false);

  const observing: IntersectionObserverCallback = React.useCallback(
    (entries) => {
      const entry = entries[0];
      const rect = entry.boundingClientRect;
      // console.log("TOP :", rect.top);
      // console.log("HEIGHT :", rect.height);
      // console.log("inView :", entry.isIntersecting);
      // console.log("RATIO:", (entry.intersectionRatio * 100).toFixed(2), "%");
      // console.log("RATIO:", entry.intersectionRatio);
      setInView(entry.isIntersecting);
      if (entry.intersectionRatio > 0) {
        // console.log("CALc :", rect.top + rect.height);
        if (rect.top + rect.height <= rect.height && rect.top <= 0) {
          setTargetTouched(true);
        } else {
          setTargetTouched(false);
        }
      } else {
        setTargetTouched(false);
      }
    },
    []
  );

  React.useLayoutEffect(() => {
    const observer = new IntersectionObserver(observing, newOption);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [newOption, observing]);

  return { inView, ref: elementRef, targetTouched };
};

export default useObservingElement;
