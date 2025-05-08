import React from "react";
// const optionDefault: IntersectionObserverInit = {
//   root: null,
//   rootMargin: "0px",
//   threshold: Array.from({ length: 1000 }, (_, i) => i / 1000),
// };
const useObservingElement = (option?: IntersectionObserverInit) => {
  // const newOption: IntersectionObserverInit = React.useMemo(
  //   () => ({
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: Array.from({ length: 1000 }, (_, i) => i / 1000),
  //     ...option,
  //   }),
  //   [option]
  // );
  const elementRef = React.useRef(null);
  const elementRefs = React.useRef<HTMLElement[]>([]);
  elementRefs.current = [];
  const [inView, setInView] = React.useState(false);
  const [inViews, setInViews] = React.useState<{
    [string: string]: boolean;
  }>({});
  const [targetTouched, setTargetTouched] = React.useState(false);
  const [targetsTouched, setTargetsTouched] = React.useState<{
    [string: string]: boolean;
  }>({});

  const addToRefs = (
    el: HTMLElement | null,
    id: string
    // optionEl?: IntersectionObserverInit
  ) => {
    if (el && !elementRefs.current.includes(el)) {
      el.setAttribute("id", id);
      elementRefs.current = [...elementRefs.current, el];
      // if (optionEl) {
      //   setOptions((prevOpt) => ({
      //     ...prevOpt,
      //     [id]: { ...newOption, ...optionEl },
      //   }));
      // } else {
      //   setOptions((prevOpt) => ({
      //     ...prevOpt,
      //     [id]: newOption,
      //   }));
      // }
    }
    // console.log(elementRefs.current);
    // }
  };

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

  const observings: IntersectionObserverCallback = React.useCallback(
    (entries) => {
      const entry = entries[0];
      const rect = entry.boundingClientRect;
      // console.log("TOP :", rect.top);
      // console.log("HEIGHT :", rect.height);
      // console.log("inView :", entry.isIntersecting);
      // console.log("RATIO:", (entry.intersectionRatio * 100).toFixed(2), "%");
      // console.log("RATIO:", entry.intersectionRatio);
      setInViews((prevInViews) => ({
        ...prevInViews,
        [entry.target.id]: entry.isIntersecting,
      }));
      if (entry.intersectionRatio > 0) {
        // console.log("CALc :", rect.top + rect.height);
        if (rect.top + rect.height <= rect.height && rect.top <= 0) {
          setTargetsTouched((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        } else {
          setTargetsTouched((prev) => ({
            ...prev,
            [entry.target.id]: false,
          }));
        }
      } else {
        setTargetsTouched((prev) => ({
          ...prev,
          [entry.target.id]: false,
        }));
      }
    },
    []
  );

  React.useLayoutEffect(() => {
    const observerSingle = new IntersectionObserver(observing, option);
    if (elementRef.current) {
      observerSingle.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observerSingle.unobserve(elementRef.current);
      }
    };
  }, [option, observing]);

  React.useLayoutEffect(() => {
    const observers: IntersectionObserver[] = [];
    if (elementRefs.current.length > 0) {
      elementRefs.current.forEach((el) => {
        const observer = new IntersectionObserver(observings, option);
        observers.push(observer);
        observer.observe(el);
      });
    }

    return () => {
      if (elementRefs.current.length > 0 && observers.length > 0) {
        observers.forEach((ob, i) => {
          ob.unobserve(elementRefs.current[i]);
        });
      }
    };
  }, [observings, option]);

  return {
    ref: elementRef,
    addToRefs,
    inView,
    targetTouched,
    inViews,
    targetsTouched,
  };
};

export default useObservingElement;
