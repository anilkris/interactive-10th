// State information database
const stateData = {
    'INRJ': {
        name: 'Rajasthan',
        capital: 'Jaipur',
        area: '342,239 km²',
        population: '68.5 million',
        language: 'Hindi, Rajasthani',
        founded: '1949',
        description: 'Known as the "Land of Kings", Rajasthan is famous for its royal palaces, forts, and desert landscapes.'
    },
    'INGJ': {
        name: 'Gujarat',
        capital: 'Gandhinagar',
        area: '196,244 km²',
        population: '60.4 million',
        language: 'Gujarati, Hindi',
        founded: '1960',
        description: 'Gujarat is known for its business-friendly environment, vibrant culture, and contributions to India\'s economy.'
    },
    'INMH': {
        name: 'Maharashtra',
        capital: 'Mumbai',
        area: '307,713 km²',
        population: '112.4 million',
        language: 'Marathi, Hindi',
        founded: '1960',
        description: 'The financial capital of India, Maharashtra is home to Bollywood and major industrial centers.'
    },
    'INKA': {
        name: 'Karnataka',
        capital: 'Bengaluru',
        area: '191,791 km²',
        population: '61.1 million',
        language: 'Kannada, Hindi',
        founded: '1956',
        description: 'Known as the "Silicon Valley of India", Karnataka is a major technology and innovation hub.'
    },
    'INKL': {
        name: 'Kerala',
        capital: 'Thiruvananthapuram',
        area: '38,852 km²',
        population: '33.4 million',
        language: 'Malayalam, Hindi',
        founded: '1956',
        description: 'Called "God\'s Own Country", Kerala is famous for its backwaters, spices, and high literacy rate.'
    },
    'INTN': {
        name: 'Tamil Nadu',
        capital: 'Chennai',
        area: '130,060 km²',
        population: '72.1 million',
        language: 'Tamil, Hindi',
        founded: '1969',
        description: 'Rich in culture and tradition, Tamil Nadu is known for its temples, classical dance, and literature.'
    },
    'INAP': {
        name: 'Andhra Pradesh',
        capital: 'Amaravati',
        area: '160,205 km²',
        population: '49.4 million',
        language: 'Telugu, Hindi',
        founded: '1956',
        description: 'Known for its historical heritage, spicy cuisine, and major pilgrimage sites.'
    },
    'INTG': {
        name: 'Telangana',
        capital: 'Hyderabad',
        area: '112,077 km²',
        population: '35.0 million',
        language: 'Telugu, Hindi',
        founded: '2014',
        description: 'The youngest state of India, known for its IT industry and rich cultural heritage.'
    },
    'INOR': {
        name: 'Odisha',
        capital: 'Bhubaneswar',
        area: '155,707 km²',
        population: '42.0 million',
        language: 'Odia, Hindi',
        founded: '1936',
        description: 'Famous for the Jagannath Temple in Puri and classical Odissi dance form.'
    },
    'INCT': {
        name: 'Chhattisgarh',
        capital: 'Raipur',
        area: '135,192 km²',
        population: '25.5 million',
        language: 'Hindi, Chhattisgarhi',
        founded: '2000',
        description: 'Rich in mineral resources and tribal culture, known for its forests and waterfalls.'
    },
    'INMP': {
        name: 'Madhya Pradesh',
        capital: 'Bhopal',
        area: '308,245 km²',
        population: '72.6 million',
        language: 'Hindi',
        founded: '1956',
        description: 'Called the "Heart of India", known for its wildlife sanctuaries and historical monuments.'
    },
    'INUP': {
        name: 'Uttar Pradesh',
        capital: 'Lucknow',
        area: '240,928 km²',
        population: '199.8 million',
        language: 'Hindi, Urdu',
        founded: '1950',
        description: 'The most populous state, home to the Taj Mahal and many historical cities.'
    },
    'INBR': {
        name: 'Bihar',
        capital: 'Patna',
        area: '94,163 km²',
        population: '104.1 million',
        language: 'Hindi, Bhojpuri',
        founded: '1912',
        description: 'An ancient center of learning, Bihar is rich in history and Buddhist heritage.'
    },
    'INJH': {
        name: 'Jharkhand',
        capital: 'Ranchi',
        area: '79,716 km²',
        population: '33.0 million',
        language: 'Hindi, Santali',
        founded: '2000',
        description: 'Known for its mineral wealth, tribal culture, and natural beauty.'
    },
    'INWB': {
        name: 'West Bengal',
        capital: 'Kolkata',
        area: '88,752 km²',
        population: '91.3 million',
        language: 'Bengali, Hindi',
        founded: '1947',
        description: 'Cultural capital of India, known for literature, arts, and intellectual heritage.'
    },
    'INAS': {
        name: 'Assam',
        capital: 'Dispur',
        area: '78,438 km²',
        population: '31.2 million',
        language: 'Assamese, Hindi',
        founded: '1947',
        description: 'Famous for tea gardens, silk production, and one-horned rhinoceros.'
    },
    'INAR': {
        name: 'Arunachal Pradesh',
        capital: 'Itanagar',
        area: '83,743 km²',
        population: '1.4 million',
        language: 'Hindi, English',
        founded: '1987',
        description: 'The "Land of Rising Sun", known for its pristine natural beauty and tribal diversity.'
    },
    'INNL': {
        name: 'Nagaland',
        capital: 'Kohima',
        area: '16,579 km²',
        population: '2.0 million',
        language: 'English, Nagamese',
        founded: '1963',
        description: 'Known for its vibrant tribal culture, festivals, and warrior traditions.'
    },
    'INMN': {
        name: 'Manipur',
        capital: 'Imphal',
        area: '22,327 km²',
        population: '2.9 million',
        language: 'Manipuri, Hindi',
        founded: '1972',
        description: 'Called the "Jewel of India", famous for classical dance and martial arts.'
    },
    'INMZ': {
        name: 'Mizoram',
        capital: 'Aizawl',
        area: '21,081 km²',
        population: '1.1 million',
        language: 'Mizo, Hindi',
        founded: '1987',
        description: 'Known for its scenic beauty, bamboo forests, and high literacy rate.'
    },
    'INTR': {
        name: 'Tripura',
        capital: 'Agartala',
        area: '10,486 km²',
        population: '3.7 million',
        language: 'Bengali, Tripuri',
        founded: '1972',
        description: 'Rich in tribal culture and known for its handloom and handicrafts.'
    },
    'INML': {
        name: 'Meghalaya',
        capital: 'Shillong',
        area: '22,429 km²',
        population: '3.0 million',
        language: 'English, Khasi',
        founded: '1972',
        description: 'The "Abode of Clouds", famous for living root bridges and heavy rainfall.'
    },
    'INSK': {
        name: 'Sikkim',
        capital: 'Gangtok',
        area: '7,096 km²',
        population: '0.6 million',
        language: 'Nepali, Hindi',
        founded: '1975',
        description: 'A small Himalayan state known for its monasteries and mountain views.'
    },
    'INHR': {
        name: 'Haryana',
        capital: 'Chandigarh',
        area: '44,212 km²',
        population: '25.4 million',
        language: 'Hindi, Haryanvi',
        founded: '1966',
        description: 'Known as India\'s sports hub and for its agricultural prosperity.'
    },
    'INPB': {
        name: 'Punjab',
        capital: 'Chandigarh',
        area: '50,362 km²',
        population: '27.7 million',
        language: 'Punjabi, Hindi',
        founded: '1966',
        description: 'The "Granary of India", known for agriculture, Sikhism, and vibrant culture.'
    },
    'INHP': {
        name: 'Himachal Pradesh',
        capital: 'Shimla',
        area: '55,673 km²',
        population: '6.9 million',
        language: 'Hindi, Pahari',
        founded: '1971',
        description: 'A popular hill station destination known for apple orchards and mountain tourism.'
    },
    'INUT': {
        name: 'Uttarakhand',
        capital: 'Dehradun',
        area: '53,483 km²',
        population: '10.1 million',
        language: 'Hindi, Garhwali',
        founded: '2000',
        description: 'Known as "Devbhoomi" (Land of Gods), famous for pilgrimage sites and hill stations.'
    },
    'INJK': {
        name: 'Jammu and Kashmir',
        capital: 'Srinagar (Summer), Jammu (Winter)',
        area: '222,236 km²',
        population: '12.5 million',
        language: 'Kashmiri, Urdu, Hindi',
        founded: '1947',
        description: 'Known as "Paradise on Earth", famous for its natural beauty and houseboats.'
    },
    'INLA': {
        name: 'Ladakh',
        capital: 'Leh',
        area: '59,146 km²',
        population: '0.3 million',
        language: 'Ladakhi, Hindi',
        founded: '2019',
        description: 'A high-altitude desert known for Buddhist monasteries and adventure tourism.'
    },
    'INDL': {
        name: 'Delhi',
        capital: 'New Delhi',
        area: '1,484 km²',
        population: '32.9 million',
        language: 'Hindi, Punjabi, English',
        founded: '1956',
        description: 'The national capital territory, seat of the Indian government and rich in history.'
    },
    'INCH': {
        name: 'Chandigarh',
        capital: 'Chandigarh',
        area: '114 km²',
        population: '1.1 million',
        language: 'Hindi, Punjabi',
        founded: '1966',
        description: 'A planned city and joint capital of Punjab and Haryana, known for modern architecture.'
    },
    'INGA': {
        name: 'Goa',
        capital: 'Panaji',
        area: '3,702 km²',
        population: '1.5 million',
        language: 'Konkani, Hindi',
        founded: '1987',
        description: 'Known for its beaches, Portuguese heritage, and vibrant nightlife.'
    },
    'INAN': {
        name: 'Andaman and Nicobar Islands',
        capital: 'Port Blair',
        area: '8,249 km²',
        population: '0.4 million',
        language: 'Hindi, English',
        founded: '1956',
        description: 'A group of islands known for pristine beaches, marine life, and historical significance.'
    },
    'INLD': {
        name: 'Lakshadweep',
        capital: 'Kavaratti',
        area: '32 km²',
        population: '0.06 million',
        language: 'Malayalam, Hindi',
        founded: '1956',
        description: 'The smallest union territory, known for coral reefs and lagoons.'
    },
    'INPY': {
        name: 'Puducherry',
        capital: 'Puducherry',
        area: '492 km²',
        population: '1.2 million',
        language: 'Tamil, French',
        founded: '1963',
        description: 'Former French colony known for its colonial architecture and spiritual centers.'
    },
    'INDH': {
        name: 'Dadra and Nagar Haveli and Daman and Diu',
        capital: 'Daman',
        area: '603 km²',
        population: '0.6 million',
        language: 'Gujarati, Hindi',
        founded: '2020',
        description: 'A union territory formed by merging two former Portuguese territories.'
    }
};

// DOM elements
const states = document.querySelectorAll('.state');
const stateInfo = document.getElementById('state-info');

// Add click event listeners to all states
states.forEach(state => {
    state.addEventListener('click', function(event) {
        // Remove selected class from all states
        states.forEach(s => s.classList.remove('selected'));
        
        // Add selected class to clicked state
        this.classList.add('selected');
        
        // Get state ID and data
        const stateId = this.id;
        const data = stateData[stateId];
        
        if (data) {
            displayStateInfo(data);
        }
        
        // Prevent event bubbling
        event.stopPropagation();
    });
    
    // Add hover effects with state name tooltip
    state.addEventListener('mouseenter', function(event) {
        const stateId = this.id;
        const data = stateData[stateId];
        
        if (data) {
            // Create tooltip
            const tooltip = document.createElement('div');
            tooltip.id = 'tooltip';
            tooltip.style.cssText = `
                position: fixed;
                background: #2c3e50;
                color: white;
                padding: 8px 12px;
                border-radius: 6px;
                font-size: 14px;
                font-weight: bold;
                pointer-events: none;
                z-index: 1000;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                transform: translate(-50%, -100%);
                margin-top: -10px;
            `;
            tooltip.textContent = data.name;
            document.body.appendChild(tooltip);
            
            // Position tooltip
            const updateTooltipPosition = (e) => {
                tooltip.style.left = e.clientX + 'px';
                tooltip.style.top = e.clientY + 'px';
            };
            
            updateTooltipPosition(event);
            this.addEventListener('mousemove', updateTooltipPosition);
        }
    });
    
    state.addEventListener('mouseleave', function() {
        const tooltip = document.getElementById('tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    });
});

// Function to display state information
function displayStateInfo(data) {
    stateInfo.innerHTML = `
        <h3>${data.name}</h3>
        <p>${data.description}</p>
        <div class="state-details">
            <h4>Quick Facts:</h4>
            <ul>
                <li><strong>Capital:</strong> ${data.capital}</li>
                <li><strong>Area:</strong> ${data.area}</li>
                <li><strong>Population:</strong> ${data.population}</li>
                <li><strong>Primary Language:</strong> ${data.language}</li>
                <li><strong>Established:</strong> ${data.founded}</li>
            </ul>
        </div>
    `;
}

// Initialize the map
document.addEventListener('DOMContentLoaded', function() {
    console.log('Interactive India Map loaded successfully!');
    
    // Add welcome animation
    const mapContainer = document.querySelector('.map-container');
    mapContainer.style.opacity = '0';
    mapContainer.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        mapContainer.style.transition = 'all 0.8s ease';
        mapContainer.style.opacity = '1';
        mapContainer.style.transform = 'translateY(0)';
    }, 100);
});

// Add keyboard navigation support
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        // Remove selection from all states
        states.forEach(s => s.classList.remove('selected'));
        
        // Reset info panel
        stateInfo.innerHTML = `
            <h3>Click on a state to see information</h3>
            <p>Select any state on the map to view its details.</p>
        `;
    }
});

// Add search functionality (bonus feature)
function searchState(stateName) {
    const stateEntry = Object.entries(stateData).find(([id, data]) => 
        data.name.toLowerCase().includes(stateName.toLowerCase())
    );
    
    if (stateEntry) {
        const [stateId, data] = stateEntry;
        const stateElement = document.getElementById(stateId);
        
        if (stateElement) {
            // Remove previous selections
            states.forEach(s => s.classList.remove('selected'));
            
            // Select found state
            stateElement.classList.add('selected');
            displayStateInfo(data);
            
            // Scroll to map
            document.querySelector('.map-container').scrollIntoView({
                behavior: 'smooth'
            });
            
            return true;
        }
    }
    return false;
}

// Export search function for potential external use
window.searchState = searchState;
