export function cacheDOM() {
    return {
        periodicTable: document.getElementById('periodicTable'),
        searchInput: document.getElementById('searchInput'),
        clearSearch: document.getElementById('clearSearch'),
        categoryFilter: document.getElementById('categoryFilter'),
        valueDisplay: document.getElementById('valueDisplay'),
        languageSwitcher: document.getElementById('languageSwitcher'),
        tooltip: document.getElementById('tooltip')
    };
}

export function createElement(element, supportsHover, showTooltip, hideTooltip, moveTooltip, formatTileValue, formatCategory, getElementTranslation) {
    const elementDiv = document.createElement('div');
    elementDiv.className = `element ${element.category}`;
    elementDiv.dataset.symbol = element.symbol;
    elementDiv.dataset.name = element.name;
    elementDiv.dataset.atomicNumber = element.atomicNumber;
    elementDiv.dataset.atomicMass = element.atomicMass;
    elementDiv.dataset.category = element.category;
    
    // Add hover events for tooltip
    if (supportsHover) {
        elementDiv.addEventListener('mouseenter', (e) => showTooltip(e, element, formatCategory));
        elementDiv.addEventListener('mouseleave', hideTooltip);
        elementDiv.addEventListener('mousemove', (e) => moveTooltip(e));
    }
    
    // Create a link wrapper for Wikipedia
    const elementLink = document.createElement('a');
    elementLink.href = `https://en.wikipedia.org/wiki/${element.name}`;
    elementLink.target = '_blank';
    elementLink.rel = 'noopener noreferrer';
    elementLink.style.cssText = 'text-decoration: none; color: inherit; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%;';
    
    elementLink.innerHTML = `
        <span class="atomic-number">${element.atomicNumber}</span>
        <span class="symbol">${element.symbol}</span>
        <span class="name">${getElementTranslation(element.symbol)}</span>
        <span class="atomic-mass">${formatTileValue(element)}</span>
    `;
    
    // Prevent link click from interfering with hover
    elementLink.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    
    elementDiv.appendChild(elementLink);
    
    return elementDiv;
}

export function createPeriodicTable(elements, createElement, supportsHover, showTooltip, hideTooltip, moveTooltip, formatTileValue, formatCategory, getElementTranslation) {
    const { periodicTable } = cacheDOM();
    periodicTable.innerHTML = '';
    const fragment = document.createDocumentFragment();
    
    // Create empty cells for proper layout
    for (let row = 1; row <= 10; row++) {
        for (let col = 1; col <= 18; col++) {
            const cell = document.createElement('div');
            cell.className = 'element-slot';
            fragment.appendChild(cell);
        }
    }
    
    // Precompute element positions for O(1) lookup
    const elementByPosition = new Map();
    for (const el of elements) {
        if (el.period && el.group) {
            elementByPosition.set(`${el.period}-${el.group}`, el);
            continue;
        }

        if (el.category === 'lanthanide' && !el.group) {
            elementByPosition.set(`6-${3 + (el.atomicNumber - 57)}`, el);
            continue;
        }

        if (el.category === 'actinide' && !el.group) {
            elementByPosition.set(`7-${3 + (el.atomicNumber - 89)}`, el);
            continue;
        }
    }
    
    // Create elements in correct positions
    for (const [key, element] of elementByPosition) {
        const [period, group] = key.split('-').map(Number);
        const index = (period - 1) * 18 + (group - 1);
        const existingCell = fragment.children[index];
        
        if (existingCell && existingCell.className === 'element-slot') {
            const elementDiv = createElement(element, supportsHover, showTooltip, hideTooltip, moveTooltip, formatTileValue, formatCategory, getElementTranslation);
            
            // Store electronegativity in dataset for value display
            const en = window.electronegativityBySymbol?.[element.symbol];
            elementDiv.dataset.electronegativity = en == null ? '' : String(en);
            
            fragment.replaceChild(elementDiv, existingCell);
        }
    }
    
    periodicTable.appendChild(fragment);
    
    return periodicTable.querySelectorAll('.element');
}

export function formatCategory(category) {
    return category.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}
