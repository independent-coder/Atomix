import { getTranslation, getElementName } from '../data/i18n.js';

export function initI18n() {
    let currentLang = localStorage.getItem('atomix-language') || 'en';
    
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('atomix-language', lang);
        document.documentElement.lang = lang;
        updateUI();
    }
    
    function getCurrentLanguage() {
        return currentLang;
    }
    
    function t(key) {
        return getTranslation(currentLang, key);
    }
    
    function getElementTranslation(symbol) {
        return getElementName(currentLang, symbol);
    }
    
    function updateUI() {
        // Update header
        updateHeader();
        
        // Update search and filters
        updateSearchAndFilters();
        
        // Update about section
        updateAboutSection();
        
        // Update glossary
        updateGlossary();
        
        // Update footer
        updateFooter();
        
        // Update language switcher
        updateLanguageSwitcher();
    }
    
    function updateHeader() {
        const titleElement = document.querySelector('header h1');
        const subtitleElement = document.querySelector('header .subtitle');
        
        if (titleElement) {
            titleElement.innerHTML = `<i class="fas fa-atom"></i> ${t('header.title')}`;
        }
        if (subtitleElement) {
            subtitleElement.textContent = t('header.subtitle');
        }
    }
    
    function updateSearchAndFilters() {
        // Update search placeholder
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.placeholder = t('search.placeholder');
        }
        
        // Update clear button
        const clearSearch = document.getElementById('clearSearch');
        if (clearSearch) {
            clearSearch.textContent = t('search.clear');
        }
        
        // Update category filter
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            // Update the "All Elements" option
            const allOption = categoryFilter.querySelector('option[value="all"]');
            if (allOption) {
                allOption.textContent = t('filters.all');
            }
        }
        
        // Update value display
        const valueDisplay = document.getElementById('valueDisplay');
        if (valueDisplay) {
            const atomicMassOption = valueDisplay.querySelector('option[value="atomicMass"]');
            const electronegativityOption = valueDisplay.querySelector('option[value="electronegativity"]');
            
            if (atomicMassOption) {
                atomicMassOption.textContent = t('filters.atomicMass');
            }
            if (electronegativityOption) {
                electronegativityOption.textContent = t('filters.electronegativity');
            }
        }
        
        // Update filter labels
        const categoryLabel = document.querySelector('label[for="categoryFilter"]');
        if (categoryLabel) {
            categoryLabel.textContent = t('filters.category');
        }
        
        const valueLabel = document.querySelector('label[for="valueDisplay"]');
        if (valueLabel) {
            valueLabel.textContent = t('filters.valueDisplay');
        }
    }
    
    function updateAboutSection() {
        const aboutTitle = document.querySelector('.about h2');
        const aboutDescription = document.querySelector('.about .description');
        const featuresTitle = document.querySelector('.features h3');
        const technicalTitle = document.querySelector('.technical h3');
        
        if (aboutTitle) {
            aboutTitle.textContent = t('about.title');
        }
        if (aboutDescription) {
            aboutDescription.textContent = t('about.description');
        }
        if (featuresTitle) {
            featuresTitle.textContent = t('about.features.title');
        }
        if (technicalTitle) {
            technicalTitle.textContent = t('about.technical.title');
        }
        
        // Update feature list
        const featureItems = document.querySelectorAll('.features li');
        const featureKeys = ['interactive', 'search', 'filtering', 'responsive', 'performance'];
        featureItems.forEach((item, index) => {
            if (featureKeys[index]) {
                item.textContent = t(`about.features.${featureKeys[index]}`);
            }
        });
        
        // Update technical description
        const techDescription = document.querySelector('.technical .description');
        const techPerformance = document.querySelector('.technical .performance');
        
        if (techDescription) {
            techDescription.textContent = t('about.technical.description');
        }
        if (techPerformance) {
            techPerformance.textContent = t('about.technical.performance');
        }
    }
    
    function updateGlossary() {
        const glossaryTitle = document.querySelector('#glossarySection h2');
        const glossaryToggle = document.querySelector('.glossary-toggle');
        
        if (glossaryTitle) {
            glossaryTitle.textContent = t('glossary.title');
        }
        if (glossaryToggle) {
            const isActive = document.getElementById('glossarySection').classList.contains('active');
            glossaryToggle.innerHTML = `<i class="fas fa-${isActive ? 'times' : 'book'}"></i> ${t(`glossary.${isActive ? 'close' : 'toggle'}`)}`;
        }
        
        // Define glossary structure with English keys
        const glossaryData = [
            { key: "Atomic Number", category: "elementCategories" },
            { key: "Atomic Mass", category: "elementCategories" },
            { key: "Electronegativity", category: "elementCategories" },
            { key: "Period", category: "elementCategories" },
            { key: "Group", category: "elementCategories" },
            { key: "Alkali Metals", category: "elementCategories" },
            { key: "Alkaline Earth Metals", category: "elementCategories" },
            { key: "Transition Metals", category: "elementCategories" },
            { key: "Post-Transition Metals", category: "elementCategories" },
            { key: "Metalloids", category: "elementCategories" },
            { key: "Nonmetals", category: "elementCategories" },
            { key: "Halogens", category: "elementCategories" },
            { key: "Noble Gases", category: "elementCategories" },
            { key: "Lanthanides", category: "elementCategories" },
            { key: "Actinides", category: "elementCategories" },
            { key: "Valence Electrons", category: "atomicProperties" },
            { key: "Ionization Energy", category: "atomicProperties" },
            { key: "Element", category: "chemicalConcepts" },
            { key: "Compound", category: "chemicalConcepts" },
            { key: "Molecule", category: "chemicalConcepts" },
            { key: "Isotope", category: "chemicalConcepts" },
            { key: "Ion", category: "chemicalConcepts" },
            { key: "Chemical Bond", category: "chemicalConcepts" },
            { key: "Periodic Law", category: "chemicalConcepts" }
        ];
        
        // Update all glossary terms using the data structure
        glossaryData.forEach(item => {
            const dtElements = document.querySelectorAll('.glossary-category dt');
            dtElements.forEach(dt => {
                // Store original key if not already stored
                if (!dt.dataset.glossaryKey) {
                    dt.dataset.glossaryKey = dt.textContent.trim();
                }
                
                // Update if this is the current term
                if (dt.dataset.glossaryKey === item.key) {
                    const termData = t(`glossary.terms.${item.key}`);
                    if (termData && termData.title) {
                        dt.textContent = termData.title;
                    }
                    
                    // Update the corresponding dd element
                    const dd = dt.nextElementSibling;
                    if (dd && dd.tagName === 'DD' && termData && termData.description) {
                        dd.textContent = termData.description;
                    }
                }
            });
        });
        
        // Update glossary category titles
        const categoryTranslations = {
            'Element Categories': 'glossary.categories.elementCategories',
            'Atomic Properties': 'glossary.categories.atomicProperties',
            'Chemical Concepts': 'glossary.categories.chemicalConcepts'
        };
        
        const categoryTitles = document.querySelectorAll('.glossary-category h4');
        categoryTitles.forEach(title => {
            const titleText = title.textContent.trim();
            const iconMatch = titleText.match(/<i[^>]*><\/i>\s*(.+)/);
            const categoryName = iconMatch ? iconMatch[1] : titleText;
            
            if (categoryTranslations[categoryName]) {
                const iconHtml = titleText.match(/<i[^>]*><\/i>/)?.[0] || '';
                const translatedCategory = t(categoryTranslations[categoryName]);
                title.innerHTML = `${iconHtml} ${translatedCategory}`;
            }
        });
    }
    
    function updateFooter() {
        const copyright = document.querySelector('.copyright');
        const madeBy = document.querySelector('.made-by');
        
        if (copyright) {
            copyright.textContent = t('footer.copyright');
        }
        if (madeBy) {
            const githubLink = madeBy.querySelector('a');
            madeBy.innerHTML = `${t('footer.madeBy')} `;
            if (githubLink) {
                madeBy.appendChild(githubLink);
            }
        }
        
        // Update footer description
        const footerDescription = document.querySelector('.footer-description');
        if (footerDescription) {
            footerDescription.textContent = t('footer.description');
        }
        
        // Update GitHub repository link
        const githubRepoLink = document.querySelector('.footer-link');
        if (githubRepoLink) {
            const icon = githubRepoLink.querySelector('i');
            githubRepoLink.innerHTML = '';
            if (icon) {
                githubRepoLink.appendChild(icon);
            }
            githubRepoLink.appendChild(document.createTextNode(' ' + t('footer.links.github')));
        }
        
        // Update footer section headings
        const sectionHeadings = document.querySelectorAll('.footer-heading');
        sectionHeadings.forEach(heading => {
            const text = heading.textContent.trim();
            if (text === 'Features') {
                heading.textContent = t('footer.sections.features');
            } else if (text === 'Technologies') {
                heading.textContent = t('footer.sections.technologies');
            } else if (text === 'Connect') {
                heading.textContent = t('footer.sections.connect');
            }
        });
        
        // Update footer feature list items
        const featureItems = document.querySelectorAll('.footer-section:nth-child(2) .footer-list li');
        featureItems.forEach(item => {
            const text = item.textContent.trim();
            const icon = item.querySelector('i');
            const translatedText = t(`footer.features.${text}`);
            if (translatedText && translatedText !== text) {
                item.innerHTML = '';
                if (icon) {
                    item.appendChild(icon);
                }
                item.appendChild(document.createTextNode(' ' + translatedText));
            }
        });
        
        // Update footer technology list items
        const techItems = document.querySelectorAll('.footer-section:nth-child(3) .footer-list li');
        techItems.forEach(item => {
            const text = item.textContent.trim();
            const icon = item.querySelector('i');
            const translatedText = t(`footer.technologies.${text}`);
            if (translatedText && translatedText !== text) {
                item.innerHTML = '';
                if (icon) {
                    item.appendChild(icon);
                }
                item.appendChild(document.createTextNode(' ' + translatedText));
            }
        });
        
        // Update social link titles
        const socialLinks = document.querySelectorAll('.social-link');
        socialLinks.forEach(link => {
            const title = link.getAttribute('title');
            if (title === 'GitHub') {
                link.setAttribute('title', t('footer.social.github'));
            } else if (title === 'My Website') {
                link.setAttribute('title', t('footer.social.website'));
            }
        });
    }
    
    function updateLanguageSwitcher() {
        const langSwitcher = document.getElementById('languageSwitcher');
        if (langSwitcher) {
            langSwitcher.value = currentLang;
        }
    }
    
    function formatCategory(category) {
        return t(`categories.${category}`);
    }
    
    function createLanguageSwitcher() {
        const switcher = document.createElement('select');
        switcher.id = 'languageSwitcher';
        switcher.innerHTML = `
            <option value="en">🇬🇧 English</option>
            <option value="fr">🇫🇷 Français</option>
        `;
        
        switcher.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
        
        return switcher;
    }
    
    return {
        setLanguage,
        getCurrentLanguage,
        t,
        getElementTranslation,
        formatCategory,
        updateUI,
        createLanguageSwitcher
    };
}
