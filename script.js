// Periodic Table Data
const elements = [
    { symbol: "H", name: "Hydrogen", atomicNumber: 1, atomicMass: 1.008, category: "nonmetal", period: 1, group: 1 },
    { symbol: "He", name: "Helium", atomicNumber: 2, atomicMass: 4.003, category: "noble-gas", period: 1, group: 18 },
    { symbol: "Li", name: "Lithium", atomicNumber: 3, atomicMass: 6.941, category: "alkali-metal", period: 2, group: 1 },
    { symbol: "Be", name: "Beryllium", atomicNumber: 4, atomicMass: 9.012, category: "alkaline-earth-metal", period: 2, group: 2 },
    { symbol: "B", name: "Boron", atomicNumber: 5, atomicMass: 10.81, category: "metalloid", period: 2, group: 13 },
    { symbol: "C", name: "Carbon", atomicNumber: 6, atomicMass: 12.01, category: "nonmetal", period: 2, group: 14 },
    { symbol: "N", name: "Nitrogen", atomicNumber: 7, atomicMass: 14.01, category: "nonmetal", period: 2, group: 15 },
    { symbol: "O", name: "Oxygen", atomicNumber: 8, atomicMass: 16.00, category: "nonmetal", period: 2, group: 16 },
    { symbol: "F", name: "Fluorine", atomicNumber: 9, atomicMass: 19.00, category: "halogen", period: 2, group: 17 },
    { symbol: "Ne", name: "Neon", atomicNumber: 10, atomicMass: 20.18, category: "noble-gas", period: 2, group: 18 },
    { symbol: "Na", name: "Sodium", atomicNumber: 11, atomicMass: 22.99, category: "alkali-metal", period: 3, group: 1 },
    { symbol: "Mg", name: "Magnesium", atomicNumber: 12, atomicMass: 24.31, category: "alkaline-earth-metal", period: 3, group: 2 },
    { symbol: "Al", name: "Aluminum", atomicNumber: 13, atomicMass: 26.98, category: "post-transition-metal", period: 3, group: 13 },
    { symbol: "Si", name: "Silicon", atomicNumber: 14, atomicMass: 28.09, category: "metalloid", period: 3, group: 14 },
    { symbol: "P", name: "Phosphorus", atomicNumber: 15, atomicMass: 30.97, category: "nonmetal", period: 3, group: 15 },
    { symbol: "S", name: "Sulfur", atomicNumber: 16, atomicMass: 32.07, category: "nonmetal", period: 3, group: 16 },
    { symbol: "Cl", name: "Chlorine", atomicNumber: 17, atomicMass: 35.45, category: "halogen", period: 3, group: 17 },
    { symbol: "Ar", name: "Argon", atomicNumber: 18, atomicMass: 39.95, category: "noble-gas", period: 3, group: 18 },
    { symbol: "K", name: "Potassium", atomicNumber: 19, atomicMass: 39.10, category: "alkali-metal", period: 4, group: 1 },
    { symbol: "Ca", name: "Calcium", atomicNumber: 20, atomicMass: 40.08, category: "alkaline-earth-metal", period: 4, group: 2 },
    { symbol: "Sc", name: "Scandium", atomicNumber: 21, atomicMass: 44.96, category: "transition-metal", period: 4, group: 3 },
    { symbol: "Ti", name: "Titanium", atomicNumber: 22, atomicMass: 47.87, category: "transition-metal", period: 4, group: 4 },
    { symbol: "V", name: "Vanadium", atomicNumber: 23, atomicMass: 50.94, category: "transition-metal", period: 4, group: 5 },
    { symbol: "Cr", name: "Chromium", atomicNumber: 24, atomicMass: 52.00, category: "transition-metal", period: 4, group: 6 },
    { symbol: "Mn", name: "Manganese", atomicNumber: 25, atomicMass: 54.94, category: "transition-metal", period: 4, group: 7 },
    { symbol: "Fe", name: "Iron", atomicNumber: 26, atomicMass: 55.85, category: "transition-metal", period: 4, group: 8 },
    { symbol: "Co", name: "Cobalt", atomicNumber: 27, atomicMass: 58.93, category: "transition-metal", period: 4, group: 9 },
    { symbol: "Ni", name: "Nickel", atomicNumber: 28, atomicMass: 58.69, category: "transition-metal", period: 4, group: 10 },
    { symbol: "Cu", name: "Copper", atomicNumber: 29, atomicMass: 63.55, category: "transition-metal", period: 4, group: 11 },
    { symbol: "Zn", name: "Zinc", atomicNumber: 30, atomicMass: 65.38, category: "transition-metal", period: 4, group: 12 },
    { symbol: "Ga", name: "Gallium", atomicNumber: 31, atomicMass: 69.72, category: "post-transition-metal", period: 4, group: 13 },
    { symbol: "Ge", name: "Germanium", atomicNumber: 32, atomicMass: 72.63, category: "metalloid", period: 4, group: 14 },
    { symbol: "As", name: "Arsenic", atomicNumber: 33, atomicMass: 74.92, category: "metalloid", period: 4, group: 15 },
    { symbol: "Se", name: "Selenium", atomicNumber: 34, atomicMass: 78.96, category: "nonmetal", period: 4, group: 16 },
    { symbol: "Br", name: "Bromine", atomicNumber: 35, atomicMass: 79.90, category: "halogen", period: 4, group: 17 },
    { symbol: "Kr", name: "Krypton", atomicNumber: 36, atomicMass: 83.80, category: "noble-gas", period: 4, group: 18 },
    { symbol: "Rb", name: "Rubidium", atomicNumber: 37, atomicMass: 85.47, category: "alkali-metal", period: 5, group: 1 },
    { symbol: "Sr", name: "Strontium", atomicNumber: 38, atomicMass: 87.62, category: "alkaline-earth-metal", period: 5, group: 2 },
    { symbol: "Y", name: "Yttrium", atomicNumber: 39, atomicMass: 88.91, category: "transition-metal", period: 5, group: 3 },
    { symbol: "Zr", name: "Zirconium", atomicNumber: 40, atomicMass: 91.22, category: "transition-metal", period: 5, group: 4 },
    { symbol: "Nb", name: "Niobium", atomicNumber: 41, atomicMass: 92.91, category: "transition-metal", period: 5, group: 5 },
    { symbol: "Mo", name: "Molybdenum", atomicNumber: 42, atomicMass: 95.96, category: "transition-metal", period: 5, group: 6 },
    { symbol: "Tc", name: "Technetium", atomicNumber: 43, atomicMass: 98.00, category: "transition-metal", period: 5, group: 7 },
    { symbol: "Ru", name: "Ruthenium", atomicNumber: 44, atomicMass: 101.07, category: "transition-metal", period: 5, group: 8 },
    { symbol: "Rh", name: "Rhodium", atomicNumber: 45, atomicMass: 102.91, category: "transition-metal", period: 5, group: 9 },
    { symbol: "Pd", name: "Palladium", atomicNumber: 46, atomicMass: 106.42, category: "transition-metal", period: 5, group: 10 },
    { symbol: "Ag", name: "Silver", atomicNumber: 47, atomicMass: 107.87, category: "transition-metal", period: 5, group: 11 },
    { symbol: "Cd", name: "Cadmium", atomicNumber: 48, atomicMass: 112.41, category: "transition-metal", period: 5, group: 12 },
    { symbol: "In", name: "Indium", atomicNumber: 49, atomicMass: 114.82, category: "post-transition-metal", period: 5, group: 13 },
    { symbol: "Sn", name: "Tin", atomicNumber: 50, atomicMass: 118.71, category: "post-transition-metal", period: 5, group: 14 },
    { symbol: "Sb", name: "Antimony", atomicNumber: 51, atomicMass: 121.76, category: "metalloid", period: 5, group: 15 },
    { symbol: "Te", name: "Tellurium", atomicNumber: 52, atomicMass: 127.60, category: "metalloid", period: 5, group: 16 },
    { symbol: "I", name: "Iodine", atomicNumber: 53, atomicMass: 126.90, category: "halogen", period: 5, group: 17 },
    { symbol: "Xe", name: "Xenon", atomicNumber: 54, atomicMass: 131.29, category: "noble-gas", period: 5, group: 18 },
    { symbol: "Cs", name: "Cesium", atomicNumber: 55, atomicMass: 132.91, category: "alkali-metal", period: 6, group: 1 },
    { symbol: "Ba", name: "Barium", atomicNumber: 56, atomicMass: 137.33, category: "alkaline-earth-metal", period: 6, group: 2 },
    { symbol: "La", name: "Lanthanum", atomicNumber: 57, atomicMass: 138.91, category: "lanthanide", period: 6, group: 3 },
    { symbol: "Ce", name: "Cerium", atomicNumber: 58, atomicMass: 140.12, category: "lanthanide", period: 6, group: null },
    { symbol: "Pr", name: "Praseodymium", atomicNumber: 59, atomicMass: 140.91, category: "lanthanide", period: 6, group: null },
    { symbol: "Nd", name: "Neodymium", atomicNumber: 60, atomicMass: 144.24, category: "lanthanide", period: 6, group: null },
    { symbol: "Pm", name: "Promethium", atomicNumber: 61, atomicMass: 145.00, category: "lanthanide", period: 6, group: null },
    { symbol: "Sm", name: "Samarium", atomicNumber: 62, atomicMass: 150.36, category: "lanthanide", period: 6, group: null },
    { symbol: "Eu", name: "Europium", atomicNumber: 63, atomicMass: 151.96, category: "lanthanide", period: 6, group: null },
    { symbol: "Gd", name: "Gadolinium", atomicNumber: 64, atomicMass: 157.25, category: "lanthanide", period: 6, group: null },
    { symbol: "Tb", name: "Terbium", atomicNumber: 65, atomicMass: 158.93, category: "lanthanide", period: 6, group: null },
    { symbol: "Dy", name: "Dysprosium", atomicNumber: 66, atomicMass: 162.50, category: "lanthanide", period: 6, group: null },
    { symbol: "Ho", name: "Holmium", atomicNumber: 67, atomicMass: 164.93, category: "lanthanide", period: 6, group: null },
    { symbol: "Er", name: "Erbium", atomicNumber: 68, atomicMass: 167.26, category: "lanthanide", period: 6, group: null },
    { symbol: "Tm", name: "Thulium", atomicNumber: 69, atomicMass: 168.93, category: "lanthanide", period: 6, group: null },
    { symbol: "Yb", name: "Ytterbium", atomicNumber: 70, atomicMass: 173.05, category: "lanthanide", period: 6, group: null },
    { symbol: "Lu", name: "Lutetium", atomicNumber: 71, atomicMass: 174.97, category: "lanthanide", period: 6, group: 3 },
    { symbol: "Hf", name: "Hafnium", atomicNumber: 72, atomicMass: 178.49, category: "transition-metal", period: 6, group: 4 },
    { symbol: "Ta", name: "Tantalum", atomicNumber: 73, atomicMass: 180.95, category: "transition-metal", period: 6, group: 5 },
    { symbol: "W", name: "Tungsten", atomicNumber: 74, atomicMass: 183.84, category: "transition-metal", period: 6, group: 6 },
    { symbol: "Re", name: "Rhenium", atomicNumber: 75, atomicMass: 186.21, category: "transition-metal", period: 6, group: 7 },
    { symbol: "Os", name: "Osmium", atomicNumber: 76, atomicMass: 190.23, category: "transition-metal", period: 6, group: 8 },
    { symbol: "Ir", name: "Iridium", atomicNumber: 77, atomicMass: 192.22, category: "transition-metal", period: 6, group: 9 },
    { symbol: "Pt", name: "Platinum", atomicNumber: 78, atomicMass: 195.08, category: "transition-metal", period: 6, group: 10 },
    { symbol: "Au", name: "Gold", atomicNumber: 79, atomicMass: 196.97, category: "transition-metal", period: 6, group: 11 },
    { symbol: "Hg", name: "Mercury", atomicNumber: 80, atomicMass: 200.59, category: "transition-metal", period: 6, group: 12 },
    { symbol: "Tl", name: "Thallium", atomicNumber: 81, atomicMass: 204.38, category: "post-transition-metal", period: 6, group: 13 },
    { symbol: "Pb", name: "Lead", atomicNumber: 82, atomicMass: 207.2, category: "post-transition-metal", period: 6, group: 14 },
    { symbol: "Bi", name: "Bismuth", atomicNumber: 83, atomicMass: 208.98, category: "post-transition-metal", period: 6, group: 15 },
    { symbol: "Po", name: "Polonium", atomicNumber: 84, atomicMass: 209.00, category: "metalloid", period: 6, group: 16 },
    { symbol: "At", name: "Astatine", atomicNumber: 85, atomicMass: 210.00, category: "halogen", period: 6, group: 17 },
    { symbol: "Rn", name: "Radon", atomicNumber: 86, atomicMass: 222.00, category: "noble-gas", period: 6, group: 18 },
    { symbol: "Fr", name: "Francium", atomicNumber: 87, atomicMass: 223.00, category: "alkali-metal", period: 7, group: 1 },
    { symbol: "Ra", name: "Radium", atomicNumber: 88, atomicMass: 226.00, category: "alkaline-earth-metal", period: 7, group: 2 },
    { symbol: "Ac", name: "Actinium", atomicNumber: 89, atomicMass: 227.00, category: "actinide", period: 7, group: 3 },
    { symbol: "Th", name: "Thorium", atomicNumber: 90, atomicMass: 232.04, category: "actinide", period: 7, group: null },
    { symbol: "Pa", name: "Protactinium", atomicNumber: 91, atomicMass: 231.04, category: "actinide", period: 7, group: null },
    { symbol: "U", name: "Uranium", atomicNumber: 92, atomicMass: 238.03, category: "actinide", period: 7, group: null },
    { symbol: "Np", name: "Neptunium", atomicNumber: 93, atomicMass: 237.00, category: "actinide", period: 7, group: null },
    { symbol: "Pu", name: "Plutonium", atomicNumber: 94, atomicMass: 244.00, category: "actinide", period: 7, group: null },
    { symbol: "Am", name: "Americium", atomicNumber: 95, atomicMass: 243.00, category: "actinide", period: 7, group: null },
    { symbol: "Cm", name: "Curium", atomicNumber: 96, atomicMass: 247.00, category: "actinide", period: 7, group: null },
    { symbol: "Bk", name: "Berkelium", atomicNumber: 97, atomicMass: 247.00, category: "actinide", period: 7, group: null },
    { symbol: "Cf", name: "Californium", atomicNumber: 98, atomicMass: 251.00, category: "actinide", period: 7, group: null },
    { symbol: "Es", name: "Einsteinium", atomicNumber: 99, atomicMass: 252.00, category: "actinide", period: 7, group: null },
    { symbol: "Fm", name: "Fermium", atomicNumber: 100, atomicMass: 257.00, category: "actinide", period: 7, group: null },
    { symbol: "Md", name: "Mendelevium", atomicNumber: 101, atomicMass: 258.00, category: "actinide", period: 7, group: null },
    { symbol: "No", name: "Nobelium", atomicNumber: 102, atomicMass: 259.00, category: "actinide", period: 7, group: null },
    { symbol: "Lr", name: "Lawrencium", atomicNumber: 103, atomicMass: 262.00, category: "actinide", period: 7, group: 3 },
    { symbol: "Rf", name: "Rutherfordium", atomicNumber: 104, atomicMass: 267.00, category: "transition-metal", period: 7, group: 4 },
    { symbol: "Db", name: "Dubnium", atomicNumber: 105, atomicMass: 270.00, category: "transition-metal", period: 7, group: 5 },
    { symbol: "Sg", name: "Seaborgium", atomicNumber: 106, atomicMass: 271.00, category: "transition-metal", period: 7, group: 6 },
    { symbol: "Bh", name: "Bohrium", atomicNumber: 107, atomicMass: 270.00, category: "transition-metal", period: 7, group: 7 },
    { symbol: "Hs", name: "Hassium", atomicNumber: 108, atomicMass: 277.00, category: "transition-metal", period: 7, group: 8 },
    { symbol: "Mt", name: "Meitnerium", atomicNumber: 109, atomicMass: 276.00, category: "transition-metal", period: 7, group: 9 },
    { symbol: "Ds", name: "Darmstadtium", atomicNumber: 110, atomicMass: 281.00, category: "transition-metal", period: 7, group: 10 },
    { symbol: "Rg", name: "Roentgenium", atomicNumber: 111, atomicMass: 280.00, category: "transition-metal", period: 7, group: 11 },
    { symbol: "Cn", name: "Copernicium", atomicNumber: 112, atomicMass: 285.00, category: "transition-metal", period: 7, group: 12 },
    { symbol: "Nh", name: "Nihonium", atomicNumber: 113, atomicMass: 286.00, category: "post-transition-metal", period: 7, group: 13 },
    { symbol: "Fl", name: "Flerovium", atomicNumber: 114, atomicMass: 289.00, category: "post-transition-metal", period: 7, group: 14 },
    { symbol: "Mc", name: "Moscovium", atomicNumber: 115, atomicMass: 290.00, category: "post-transition-metal", period: 7, group: 15 },
    { symbol: "Lv", name: "Livermorium", atomicNumber: 116, atomicMass: 293.00, category: "post-transition-metal", period: 7, group: 16 },
    { symbol: "Ts", name: "Tennessine", atomicNumber: 117, atomicMass: 294.00, category: "halogen", period: 7, group: 17 },
    { symbol: "Og", name: "Oganesson", atomicNumber: 118, atomicMass: 294.00, category: "noble-gas", period: 7, group: 18 }
];

// Initialize the periodic table
document.addEventListener('DOMContentLoaded', function() {
    const periodicTable = document.getElementById('periodicTable');
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');
    const categoryFilter = document.getElementById('categoryFilter');
    const tooltip = document.getElementById('tooltip');

    // Create the periodic table grid
    function createPeriodicTable() {
        periodicTable.innerHTML = '';
        
        // Create empty cells for proper layout
        for (let row = 1; row <= 10; row++) {
            for (let col = 1; col <= 18; col++) {
                const cell = document.createElement('div');
                cell.className = 'element-slot';
                cell.style.gridRow = row;
                cell.style.gridColumn = col;
                
                // Find element for this position
                const element = elements.find(el => {
                    // Main table elements with defined groups
                    if (el.period === row && el.group === col) return true;
                    
                    // Handle lanthanides (period 6, rows 8-9)
                    if (el.category === 'lanthanide' && !el.group) {
                        if (row === 8 && col >= 3 && col <= 16) {
                            return el.atomicNumber === 57 + (col - 3);
                        }
                        if (row === 9 && col >= 3 && col <= 16) {
                            return el.atomicNumber === 71 + (col - 3);
                        }
                    }
                    
                    // Handle actinides (period 7, rows 8-9)
                    if (el.category === 'actinide' && !el.group) {
                        if (row === 8 && col >= 3 && col <= 16) {
                            return el.atomicNumber === 89 + (col - 3);
                        }
                        if (row === 9 && col >= 3 && col <= 16) {
                            return el.atomicNumber === 103 + (col - 3);
                        }
                    }
                    
                    return false;
                });
                
                if (element) {
                    const elementDiv = createElement(element);
                    // Set grid position for the element
                    elementDiv.style.gridRow = row;
                    elementDiv.style.gridColumn = col;
                    periodicTable.appendChild(elementDiv);
                } else {
                    periodicTable.appendChild(cell);
                }
            }
        }
    }

    // Create individual element element
    function createElement(element) {
        const elementDiv = document.createElement('div');
        elementDiv.className = `element ${element.category}`;
        elementDiv.dataset.symbol = element.symbol;
        elementDiv.dataset.name = element.name;
        elementDiv.dataset.atomicNumber = element.atomicNumber;
        elementDiv.dataset.category = element.category;
        
        // Create a link wrapper for Wikipedia
        const elementLink = document.createElement('a');
        elementLink.href = `https://en.wikipedia.org/wiki/${element.name}`;
        elementLink.target = '_blank';
        elementLink.rel = 'noopener noreferrer';
        elementLink.style.cssText = 'text-decoration: none; color: inherit; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%;';
        
        elementLink.innerHTML = `
            <span class="atomic-number">${element.atomicNumber}</span>
            <span class="symbol">${element.symbol}</span>
            <span class="name">${element.name}</span>
            <span class="atomic-mass">${element.atomicMass.toFixed(3)}</span>
        `;
        
        // Add hover events for tooltip
        elementDiv.addEventListener('mouseenter', (e) => showTooltip(e, element));
        elementDiv.addEventListener('mouseleave', hideTooltip);
        elementDiv.addEventListener('mousemove', (e) => moveTooltip(e));
        
        // Prevent link click from interfering with hover
        elementLink.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        
        elementDiv.appendChild(elementLink);
        
        return elementDiv;
    }

    // Tooltip functions
    function showTooltip(event, element) {
        tooltip.innerHTML = `
            <h3>${element.name} (${element.symbol})</h3>
            <p><strong>Atomic Number:</strong> ${element.atomicNumber}</p>
            <p><strong>Atomic Mass:</strong> ${element.atomicMass.toFixed(3)}</p>
            <p><strong>Category:</strong> ${formatCategory(element.category)}</p>
            <p><strong>Period:</strong> ${element.period}</p>
            <p><strong>Group:</strong> ${element.group || 'N/A'}</p>
            <p style="margin-top: 0.5rem; color: #7c4dff; font-size: 0.8rem;">
                <i class="fas fa-external-link-alt"></i> Click to view Wikipedia
            </p>
        `;
        tooltip.classList.add('show');
        moveTooltip(event);
    }

    function hideTooltip() {
        tooltip.classList.remove('show');
    }

    function moveTooltip(event) {
        const x = event.pageX + 10;
        const y = event.pageY + 10;
        
        tooltip.style.left = x + 'px';
        tooltip.style.top = y + 'px';
        
        // Keep tooltip within viewport
        const rect = tooltip.getBoundingClientRect();
        if (rect.right > window.innerWidth) {
            tooltip.style.left = (event.pageX - rect.width - 10) + 'px';
        }
        if (rect.bottom > window.innerHeight) {
            tooltip.style.top = (event.pageY - rect.height - 10) + 'px';
        }
    }

    // Format category name
    function formatCategory(category) {
        return category.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }

    // Search functionality
    function searchElements() {
        const searchTerm = searchInput.value.toLowerCase();
        const elements = document.querySelectorAll('.element');
        
        elements.forEach(element => {
            const symbol = element.dataset.symbol.toLowerCase();
            const name = element.dataset.name.toLowerCase();
            const atomicNumber = element.dataset.atomicNumber;
            
            const matches = symbol.includes(searchTerm) || 
                           name.includes(searchTerm) || 
                           atomicNumber.includes(searchTerm);
            
            if (matches) {
                element.classList.remove('hidden');
            } else {
                element.classList.add('hidden');
            }
        });
    }

    // Filter functionality
    function filterElements() {
        const selectedCategory = categoryFilter.value;
        const elements = document.querySelectorAll('.element');
        
        elements.forEach(element => {
            const elementCategory = element.dataset.category;
            
            if (selectedCategory === 'all' || elementCategory === selectedCategory) {
                element.classList.remove('hidden');
            } else {
                element.classList.add('hidden');
            }
        });
    }

    // Clear search
    function clearSearchInput() {
        searchInput.value = '';
        searchElements();
    }

    // Event listeners
    searchInput.addEventListener('input', searchElements);
    clearSearch.addEventListener('click', clearSearchInput);
    categoryFilter.addEventListener('change', filterElements);

    // Initialize the table
    createPeriodicTable();
});

// Glossary toggle function
function toggleGlossary() {
    const glossarySection = document.getElementById('glossarySection');
    const toggleButton = document.querySelector('.glossary-toggle');
    
    if (glossarySection.classList.contains('active')) {
        glossarySection.classList.remove('active');
        toggleButton.innerHTML = '<i class="fas fa-book"></i> View Glossary';
    } else {
        glossarySection.classList.add('active');
        toggleButton.innerHTML = '<i class="fas fa-book-open"></i> Hide Glossary';
        
        // Smooth scroll to glossary
        setTimeout(() => {
            glossarySection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }
}
