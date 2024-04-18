const methodsContext = this;

export function debounce(func, wait) {
    let timeout;
    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }
  
  
  export function debounceEventHandler(func, wait) {
    const debounced = debounce(func, wait);
    return function (event) {
      event.persist();
      return debounced(event);
    };
  }