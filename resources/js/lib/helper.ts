export class Promiseify<T = any> extends Promise<T> {
    static get [Symbol.species]() {
        return Promise;
    }
    resolver!: (value?: T) => void;
    rejector!: (error: any) => void;
    constructor(
        executor?: (
            resolve: (value: T) => void,
            reject: (error: any) => any
        ) => void
    ) {
        let resolver: any;
        let rejector: any;
        super((resolve, reject) => {
            resolver = resolve;
            rejector = reject;
            executor?.(resolve, reject);
        });
        this.resolver = resolver;
        this.rejector = rejector;
    }
}
const refWait = new WeakMap<any, any>();
export function wait<
    Arg = undefined,
    ThisArg = undefined,
    Callback = (this: ThisArg, arg: Arg) => unknown,
    Return = Callback extends (this: any, arg: Arg) => infer R
        ? R extends Promise<infer T>
            ? T
            : R
        : unknown
>(
    opt:
        | number
        | {
              timeout: number;
              delay?: number;
              callback?: Callback;
              arg?: Arg;
              thisArg?: ThisArg;
          }
): Promise<Return> {
    const promise = new Promiseify();
    if (typeof opt == "number") {
        setTimeout(() => {
            promise.resolver();
        }, opt);
    } else if (opt.callback) {
        if (opt.delay) {
            clearTimeout(refWait.get(opt.callback));
            const id = setTimeout(() => {
                promise.resolver((opt.callback as any).apply(null, [opt.arg]));
            }, opt.timeout + opt.delay);
            refWait.set(opt.callback, id);
        } else {
            setTimeout(() => {
                promise.resolver((opt.callback as any).apply(null, [opt.arg]));
            }, opt.timeout);
        }
    } else {
        setTimeout(() => {
            promise.resolver();
        }, opt.timeout);
    }
    return promise;
}
