const useInputValue = require('@rehooks/input-value');

function useBind(initState) {

    if (typeof initState !== 'object') {
        const obj = useInputValue(initState);
        return [obj.value, obj];
    }

    const state = {};
    const call = {};

    for (let key in initState) {
        const obj = useInputValue(initState[key]);
        state[key] = obj.value;
        call[key] = obj;
    }

    return [state, call];
}

module.exports = useBind;

