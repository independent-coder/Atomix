export function initSearch(elementNodes, getElementTranslation) {
    function searchElements(searchTerm) {
        const term = searchTerm.toLowerCase();
        
        elementNodes.forEach(element => {
            const symbol = element.dataset.symbol.toLowerCase();
            const name = getElementTranslation(element.dataset.symbol).toLowerCase();
            const atomicNumber = element.dataset.atomicNumber;
            
            const matches = symbol.includes(term) || 
                           name.includes(term) || 
                           atomicNumber.includes(term);
            
            if (matches) {
                element.classList.remove('hidden');
            } else {
                element.classList.add('hidden');
            }
        });
    }

    function filterElements(selectedCategory) {
        elementNodes.forEach(element => {
            const elementCategory = element.dataset.category;
            
            if (selectedCategory === 'all' || elementCategory === selectedCategory) {
                element.classList.remove('hidden');
            } else {
                element.classList.add('hidden');
            }
        });
    }

    function clearSearchInput(searchInput, searchElements) {
        searchInput.value = '';
        searchElements('');
    }

    return {
        searchElements,
        filterElements,
        clearSearchInput
    };
}
