export function initValueDisplay(elementNodes) {
    function formatTileValue(element, mode) {
        if (mode === 'electronegativity') {
            const en = window.electronegativityBySymbol?.[element.symbol];
            return en == null ? '—' : en.toFixed(2);
        }
        return element.atomicMass.toFixed(3);
    }

    function updateDisplayedValues(mode) {
        elementNodes.forEach(node => {
            const valueEl = node.querySelector('.atomic-mass');
            if (!valueEl) return;

            if (mode === 'electronegativity') {
                const en = node.dataset.electronegativity;
                valueEl.textContent = en ? Number(en).toFixed(2) : '—';
                return;
            }

            valueEl.textContent = Number(node.dataset.atomicMass).toFixed(3);
        });
    }

    return {
        formatTileValue,
        updateDisplayedValues
    };
}
