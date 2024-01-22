interface ObserverFunction<T> {
  (data: T): void;
}

interface Observable<T> {
  observers: ObserverFunction<T>[];
  subscribe(observer: ObserverFunction<T>): void;
  unsubscribe(observer: ObserverFunction<T>): void;
  notify(data: T): void;
}

class ObservableImplementation<T> implements Observable<T> {
  observers: ObserverFunction<T>[] = [];

  subscribe(observer: ObserverFunction<T>): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: ObserverFunction<T>): void {
    this.observers = this.observers.filter((sub) => sub !== observer);
  }

  notify(data: T): void {
    this.observers.forEach((observer) => observer(data));
  }
}

const observable = new ObservableImplementation<any>();

export default observable;
