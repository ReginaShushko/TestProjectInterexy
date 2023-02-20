// eslint-disable-next-line no-restricted-globals
const ctx: Worker = self as any;

ctx.addEventListener("message", (event) => {
    let sum = 0;
    for (let index = 0; index < 1000000000; index++) {
        sum += index;
    }

    postMessage(sum);
})

export default null as any;