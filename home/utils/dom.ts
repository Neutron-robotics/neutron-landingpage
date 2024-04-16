function inViewPort(el: any) {
    const rect = el.getBoundingClientRect();
  
    return (
      rect.bottom >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  
  export { inViewPort };
  