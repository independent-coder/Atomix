# Changelog

All notable changes to Atomix will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [v2.0.1] - 2026-01-28

### Added
- **IPA Transcription**: Added /ˈætəmɪks/ pronunciation guide under the main title
- **Responsive IPA Styling**: Proper scaling of IPA text across all device sizes
- **Monospace Font**: Used Courier New for accurate phonetic transcription display

### Enhanced
- **Visual Hierarchy**: Improved header layout with proper spacing for IPA text
- **Typography**: Enhanced readability with appropriate letter spacing and opacity

## [v2.0.0] - 2026-01-28

### Major Release - Complete Internationalization & Refactoring

### Added
- **Complete Internationalization (i18n) System**
  - Full French and English language support
  - All 118 element names translated to French
  - Complete UI translation for all interface elements
  - Dynamic language switching without page reload
  - Persistent language preference in localStorage
  - Language switcher dropdown with flag emojis
- **Comprehensive Content Translation**
  - Header and navigation elements
  - Search placeholders and controls
  - Filter labels and options
  - About section with features and technical details
  - Complete glossary with 24+ chemistry terms
  - Footer with all sections and links
  - Tooltips and interactive elements
- **Enhanced Search Functionality**
  - Search supports both English and French element names
  - Real-time multilingual search results
  - Consistent search behavior across languages

### Changed
- **Complete Code Refactoring**
  - Split monolithic `script.js` into modular architecture
  - Created focused modules: `dom.js`, `tooltip.js`, `search.js`, `value-display.js`, `i18n.js`, `main.js`
  - Separated data into dedicated files: `elements.js`, `i18n.js`
  - Improved code maintainability and readability
  - Better separation of concerns
- **Performance Optimizations**
  - Optimized DOM manipulation and event handling
  - Improved tooltip performance with requestAnimationFrame throttling
  - Enhanced mobile interaction performance
  - Reduced memory footprint
- **UI/UX Improvements**
  - Consistent styling across all controls and buttons
  - Improved contrast for better accessibility
  - Enhanced hover states and transitions
  - Unified dropdown styling
  - Better responsive design

### Enhanced
- **Visual Design**
  - Improved atomic mass/electronegativity contrast
  - Consistent button styling across the interface
  - Enhanced glassmorphism effects
  - Smoother animations and transitions
- **Accessibility**
  - Better keyboard navigation support
  - Improved screen reader compatibility
  - Enhanced color contrast ratios
  - Proper ARIA labels and semantic HTML

### Educational Features
- **Multilingual Glossary**
  - 24+ chemistry terms with detailed definitions
  - Complete French translations
  - Structured data format for easy maintenance
  - Dynamic category translations
- **Enhanced Learning Experience**
  - Bilingual chemistry education
  - Consistent terminology across languages
  - Improved tooltip content with translations

### Technical Improvements
- **Modular Architecture**
  - ES6 modules for better code organization
  - Clean dependency injection
  - Improved error handling
  - Better debugging capabilities
- **Build System**
  - Optimized asset loading
  - Improved development workflow
  - Better source organization

### Fixed
- **Tooltip Performance Issues**
  - Fixed tooltip display problems
  - Improved event handling
  - Better positioning calculations
- **Mobile Interaction Bugs**
  - Fixed touch event handling
  - Improved mobile responsiveness
  - Better performance on mobile devices
- **CSS Styling Issues**
  - Fixed contrast problems with atomic values
  - Corrected dropdown styling inconsistencies
  - Improved responsive design

### Cross-Platform
- **Enhanced Mobile Support**
  - Better touch interactions
  - Improved performance on mobile devices
  - Consistent experience across all platforms
- **Desktop Improvements**
  - Enhanced keyboard navigation
  - Better accessibility features
  - Improved performance

---

## [v1.0.1] - 2026-01-26

### Fixed
- **SEO Tags**: Fixed many SEO tags issues

## [v1.0.0] - 2026-01-26

### Added
- **Complete Periodic Table**: All 118 chemical elements with accurate positioning
- **Interactive Elements**: Click-to-open Wikipedia links for each element
- **Advanced Search**: Real-time search by name, symbol, or atomic number
- **Category Filtering**: Filter elements by chemical categories
- **Hover Tooltips**: Detailed element information on mouse hover
- **Comprehensive Glossary**: Chemistry terms and concepts with slide-down interface
- **Dark Theme**: Sleek, modern dark interface with glassmorphism effects
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Professional transitions and micro-interactions
- **Color-Coded Categories**: Visual distinction between element types
- **Glowing Effects**: Subtle glow and shadow effects throughout

### Features
- **Element Data**: Complete atomic properties for all elements
- **Wikipedia Integration**: Direct links to detailed element information
- **Touch-Friendly**: Optimized for mobile and tablet interactions
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Performance**: Lightweight and efficient implementation

### Technical
- **Vanilla JavaScript**: No external dependencies except Font Awesome
- **Modern CSS3**: Advanced styling with animations and effects
- **HTML5**: Semantic markup and modern structure
- **Cross-Browser Support**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+

### Design
- **Glassmorphism**: Beautiful blur and transparency effects
- **Gradient Backgrounds**: Modern gradient designs throughout
- **Premium Buttons**: Enhanced button styling with shimmer effects
- **Interactive Glossary**: Animated category cards with hover effects
- **Professional Typography**: Optimized font hierarchy and spacing

### Categories
- **Alkali Metals**: Group 1 elements
- **Alkaline Earth Metals**: Group 2 elements
- **Transition Metals**: Groups 3-12 elements
- **Metalloids**: Elements with intermediate properties
- **Post-Transition Metals**: Metals to the right of transition metals
- **Nonmetals**: Elements lacking metallic properties
- **Halogens**: Group 17 elements
- **Noble Gases**: Group 18 elements
- **Lanthanides**: f-block elements 57-71
- **Actinides**: f-block elements 89-103

### Bug Fixes
- **Element Positioning**: Fixed missing elements in the periodic table grid
- **Responsive Layout**: Resolved stacking issues on small screens
- **Button Alignment**: Fixed filter button alignment with search bar
- **Dropdown Icon**: Prevented icon jumping on hover interactions
- **Lanthanides/Actinides**: Proper display of f-block elements

### Documentation
- **Complete README**: Comprehensive installation and usage guide
- **Changelog**: Detailed version history and changes
- **Git Ignore**: Proper exclusion files for development

---

## Development Notes

### Architecture
- **Modular Structure**: Clean separation of HTML, CSS, and JavaScript
- **Element Data**: Centralized element information in JavaScript array
- **Responsive Grid**: CSS Grid with flexible layout system
- **Event Handling**: Efficient event delegation and management

### Performance Optimizations
- **Lazy Loading**: Elements rendered on demand
- **Efficient Search**: Optimized filtering algorithms
- **Smooth Animations**: Hardware-accelerated CSS transitions
- **Minimal Dependencies**: Lightweight implementation

### Future Enhancements
- **3D Element Models**: Interactive atomic structures
- **Quiz Mode**: Educational testing features
- **Element Comparison**: Side-by-side element analysis
- **Real-time Data**: Live element information updates
- **Multi-language Support**: Internationalization features

---

Made with ❤️ for chemistry enthusiasts and educators everywhere.