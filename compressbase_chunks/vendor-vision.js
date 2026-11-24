// Vite preload helper extracted from vendor bundle
const J_ = function(e, t, r) {
    let n = Promise.resolve();
    if (t && t.length > 0) {
        let l = function(d) {
            return Promise.all(d.map(h => Promise.resolve(h).then(_ => ({ status: "fulfilled", value: _ }), _ => ({ status: "rejected", reason: _ }))));
        };
        n = l(t.map(d => r && import.meta && import.meta.resolve ? import.meta.resolve(d) : d));
    }
    return n.then(() => e()).catch(l => {
        if (typeof window !== 'undefined' && window.dispatchEvent && typeof CustomEvent !== 'undefined') {
            window.dispatchEvent(new CustomEvent("vite:preloadError", { payload: l }));
        }
        throw l;
    });
};

export { J_ as n };
