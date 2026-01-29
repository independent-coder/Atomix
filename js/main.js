import { elements, electronegativityBySymbol } from '../data/elements.js';
import { cacheDOM, createElement, createPeriodicTable, formatCategory } from './dom.js';
import { initTooltip } from './tooltip.js';
import { initSearch } from './search.js';
import { initValueDisplay } from './value-display.js';
import { initI18n } from './i18n.js';

// Make electronegativity globally available for modules
window.electronegativityBySymbol = electronegativityBySymbol;

// Initialize the periodic table
document.addEventListener('DOMContentLoaded', function() {
    const dom = cacheDOM();
    let elementNodes = [];

    // Check if device supports hover
    const supportsHover = !!(window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches);

    // Initialize i18n first
    const i18n = initI18n();
    
    // Store i18n globally for glossary toggle
    window.atomixI18n = i18n;
    
    // Initialize modules with i18n functions
    const tooltip = initTooltip(dom.tooltip, i18n.getElementTranslation, i18n.t);
    const search = initSearch(elementNodes, i18n.getElementTranslation);
    const valueDisplay = initValueDisplay(elementNodes);

    // Create element creator with all necessary dependencies
    const createElementWithDeps = (element) => 
        createElement(element, supportsHover, tooltip.showTooltip, tooltip.hideTooltip, tooltip.moveTooltip, 
                      (el) => valueDisplay.formatTileValue(el, dom.valueDisplay.value), i18n.formatCategory, i18n.getElementTranslation);

    // Create the periodic table
    elementNodes = createPeriodicTable(elements, createElementWithDeps, supportsHover, 
                                     tooltip.showTooltip, tooltip.hideTooltip, tooltip.moveTooltip,
                                     (el) => valueDisplay.formatTileValue(el, dom.valueDisplay.value), i18n.formatCategory, i18n.getElementTranslation);

    // Update search module with current element nodes
    Object.assign(search, initSearch(elementNodes, i18n.getElementTranslation));

    // Update value display module with current element nodes
    Object.assign(valueDisplay, initValueDisplay(elementNodes));

    // Initial value display update
    valueDisplay.updateDisplayedValues(dom.valueDisplay.value);

    // Event listeners
    dom.searchInput.addEventListener('input', (e) => search.searchElements(e.target.value));
    dom.clearSearch.addEventListener('click', () => search.clearSearchInput(dom.searchInput, search.searchElements));
    dom.categoryFilter.addEventListener('change', (e) => search.filterElements(e.target.value));
    dom.valueDisplay.addEventListener('change', (e) => valueDisplay.updateDisplayedValues(e.target.value));
    
    // Language switcher event
    dom.languageSwitcher.addEventListener('change', (e) => {
        i18n.setLanguage(e.target.value);
        
        // Re-render the periodic table with new language
        elementNodes = createPeriodicTable(elements, createElementWithDeps, supportsHover, 
                                         tooltip.showTooltip, tooltip.hideTooltip, tooltip.moveTooltip,
                                         (el) => valueDisplay.formatTileValue(el, dom.valueDisplay.value), i18n.formatCategory, i18n.getElementTranslation);
        
        // Update search module with new element nodes
        Object.assign(search, initSearch(elementNodes, i18n.getElementTranslation));
        
        // Update value display module with new element nodes
        Object.assign(valueDisplay, initValueDisplay(elementNodes));
        
        // Re-apply current value display
        valueDisplay.updateDisplayedValues(dom.valueDisplay.value);
    });
    
    // Initial UI update
    i18n.updateUI();
});

// Glossary toggle function (global function for HTML onclick)
window.toggleGlossary = function() {
    const glossarySection = document.getElementById('glossarySection');
    const toggleButton = document.querySelector('.glossary-toggle');
    
    if (glossarySection.classList.contains('active')) {
        glossarySection.classList.remove('active');
        toggleButton.innerHTML = '<i class="fas fa-book"></i> View Glossary';
    } else {
        glossarySection.classList.add('active');
        toggleButton.innerHTML = '<i class="fas fa-times"></i> Close Glossary';
    }
    
    // Update glossary text after toggle
    const i18n = window.atomixI18n;
    if (i18n) {
        i18n.updateUI();
    }
};
