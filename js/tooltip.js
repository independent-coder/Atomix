export function initTooltip(tooltipElement, getElementTranslation, t) {
    let tooltipRaf = 0;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let lastMouseClientX = 0;
    let lastMouseClientY = 0;
    let tooltipWidth = 0;
    let tooltipHeight = 0;

    function hideTooltip() {
        tooltipElement.classList.remove('show');
        if (tooltipRaf) {
            cancelAnimationFrame(tooltipRaf);
            tooltipRaf = 0;
        }
        tooltipWidth = 0;
        tooltipHeight = 0;
    }

    function moveTooltip(event) {
        lastMouseX = event.pageX;
        lastMouseY = event.pageY;
        lastMouseClientX = event.clientX;
        lastMouseClientY = event.clientY;

        if (tooltipRaf) return;
        tooltipRaf = requestAnimationFrame(() => {
            tooltipRaf = 0;

            let x = lastMouseX + 10;
            let y = lastMouseY + 10;

            if (tooltipWidth) {
                if (lastMouseClientX + 10 + tooltipWidth > window.innerWidth) {
                    x = lastMouseX - tooltipWidth - 10;
                }
            }
            if (tooltipHeight) {
                if (lastMouseClientY + 10 + tooltipHeight > window.innerHeight) {
                    y = lastMouseY - tooltipHeight - 10;
                }
            }

            tooltipElement.style.left = x + 'px';
            tooltipElement.style.top = y + 'px';
        });
    }

    function showTooltip(event, element, formatCategory) {
        const en = window.electronegativityBySymbol?.[element.symbol];
        const elementName = getElementTranslation(element.symbol);
        tooltipElement.innerHTML = `
            <h3>${elementName} (${element.symbol})</h3>
            <p><strong>${t('tooltips.atomicNumber')}:</strong> ${element.atomicNumber}</p>
            <p><strong>${t('tooltips.atomicMass')}:</strong> ${element.atomicMass.toFixed(3)}</p>
            <p><strong>${t('tooltips.electronegativity')}:</strong> ${en == null ? t('tooltips.notAvailable') : en.toFixed(2)}</p>
            <p><strong>${t('tooltips.category')}:</strong> ${formatCategory(element.category)}</p>
            <p><strong>${t('tooltips.period')}:</strong> ${element.period}</p>
            <p><strong>${t('tooltips.group')}:</strong> ${element.group || t('tooltips.notAvailable')}</p>
            <p style="margin-top: 0.5rem; color: #7c4dff; font-size: 0.8rem;">
                <i class="fas fa-external-link-alt"></i> ${t('tooltips.clickToView')}
            </p>
        `;
        tooltipElement.classList.add('show');
        const rect = tooltipElement.getBoundingClientRect();
        tooltipWidth = rect.width;
        tooltipHeight = rect.height;
        moveTooltip(event);
    }

    return {
        showTooltip: (event, element, formatCategory) => showTooltip(event, element, formatCategory),
        hideTooltip: () => hideTooltip(),
        moveTooltip: (event) => moveTooltip(event)
    };
}
