/** Декоратор, который привязывает аргументы к вызову функции */
export function partial(func: Function, ...args: any[]): Function{
  
  function wrapper(...kwargs: any[]){
    return func(...args, ...kwargs);
  }
  
  return wrapper;
}
