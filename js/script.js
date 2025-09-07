
        // Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        const html = document.documentElement;

        function setTheme(theme) {
            html.setAttribute('data-theme', theme);
            themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
            localStorage.setItem('theme', theme);
        }

        // Initialize theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);

        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });

        // Mobile Menu
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');

        mobileMenuBtn.addEventListener('click', () => {
        const isActive = navLinks.classList.contains('active');
    
        if (isActive) {
            // Closing menu
            navLinks.classList.remove('active');
            mobileMenuBtn.textContent = '☰';
            document.body.classList.remove('menu-open');
        } else {
            // Opening menu
            navLinks.classList.add('active');
            mobileMenuBtn.textContent = '✕';
            document.body.classList.add('menu-open');
        }
});

        // Close mobile menu when clicking on a link
        navLinks.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                navLinks.classList.remove('active');
                mobileMenuBtn.textContent = '☰';
                document.body.classList.remove('menu-open');
            }
        });

       

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Navbar scroll effect
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            const currentScrollY = window.scrollY;

            if (currentScrollY > 100) {
                nav.style.transform = lastScrollY > currentScrollY ? 'translateY(0)' : 'translateY(-100%)';
            } else {
                nav.style.transform = 'translateY(0)';
            }

            lastScrollY = currentScrollY;
        });

        // Form submission
        document.querySelector('.contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            const submitBtn = e.target.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent! ✓';
                submitBtn.style.background = 'linear-gradient(135deg, #48bb78, #38a169)';
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    e.target.reset();
                }, 2000);
            }, 1000);
        });

        // Add some interactive hover effects
        document.querySelectorAll('.project-card, .about-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Project Modal Functionality
        const projectModal = document.getElementById('projectModal');
        const modalClose = document.getElementById('modalClose');
        const projectCards = document.querySelectorAll('.project-card');

        // Project data
        const projectData = {
            ytPlaylist: {
                // icon: '🛒',
                title: 'Youtube Playlist',
                description: 'Display Youtube Playlist of various channel.',
                features: [
                    'Drop down menu for various catagory',
                    'Sort ascending and descending order specially for video views'
                ],
                tags: ['HTML','CSS','JavaScript','Python'],
                liveDemo: 'https://djcoder-git.github.io/YoutubePlaylist/',
                sourceCode: '#'
            },
            fcy: {
                // icon: '📊',
                title: 'Foreign Exchange Rate',
                description: 'Display current foreign exchange rate',
                features: [
                    'Dislay current foreign exchange rate',
                    'It uses Nepal Rastra Bank fcy API'
                ],
                tags: ['HTML','CSS','JavaScript','API'],
                liveDemo: 'https://djcoder-git.github.io/ForeignExchangeRate/',
                sourceCode: '#'
            },
            iNi: {
                // icon: '📱',
                title: 'iNi Cinemas movie update',
                description: 'Movie details from iNi cinemas',
                features: [
                    'Can view movie list Now Showing, Coming Soon and Next Release',
                    'Can view large poster and movie youtube trailer'
                ],
                tags: ['HTML','CSS','JavaScript','Python'],
                liveDemo: 'https://djcoder-git.github.io/iniCinemas/',
                sourceCode: '#'
            },
            update: {
                 // icon: '🤖',
                title: 'News update from various source',
                description: 'News update, movies in cinema hall, Vegetable price, Petrol price',
                // features: [
                //     'Natural language understanding and processing',
                //     'Context-aware conversations'
                // ],
                tags: ['HTML','CSS','JavaScript','Python'],
                liveDemo: '#',
                sourceCode: '#'
            },
            goldsilver: {
                 // icon: '⛓️',
                title: 'Display current gold & silver price',
                description: 'Display current gold & silver price',
                // features: [
                //     'Multi-chain cryptocurrency support',
                //     'Secure key management and storage',
                //     'DeFi protocol integration',
                //     'NFT collection and trading',
                //     'Staking and yield farming',
                //     'Transaction history and analytics',
                //     'Hardware wallet integration',
                //     'Cross-chain bridge functionality'
                // ],
                tags: ['HTML','CSS','JavaScript','API'],
                liveDemo: '#',
                sourceCode: '#'
            },
            data: {
                // icon: '🌐',
                title: 'All about data analytics',
                description: 'Under construction',
                // features: [
                //     'Real-time messaging and video calls',
                //     'Content sharing with rich media support',
                //     'Community groups and forums',
                //     'Advanced privacy and security settings',
                //     'AI-powered content recommendations',
                //     'Live streaming capabilities',
                //     'Event planning and management',
                //     'Mobile and desktop applications'
                // ],
                // tags: ['HTML','CSS'],
                liveDemo: '#',
                sourceCode: '#'
            }
        };

        // Add project to class mapping
            const projectClassMap = {
            ytPlaylist: 'project-1',
            fcy: 'project-2',
            iNi: 'project-3',
            update: 'project-4',
            goldsilver: 'project-5',
            data: 'project-6'
            };

        // Open modal when project card is clicked
        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                const projectId = card.getAttribute('data-project');
                const project = projectData[projectId];
                
                if (project) {
                    // ADD THIS: Handle background image class
                    const modalHeader = document.querySelector('.modal-header');
                    // Remove all existing project classes
                    modalHeader.className = 'modal-header';
                    // Add the specific project class
                    if (projectClassMap[projectId]) {
                        modalHeader.classList.add(projectClassMap[projectId]);
                    }
                    
                    // Your existing modal content population
                    document.getElementById('modalIcon').textContent = project.icon;
                    document.getElementById('modalTitle').textContent = project.title;
                    document.getElementById('modalDescription').textContent = project.description;
                    
                    // Populate features
                    const featuresList = document.getElementById('modalFeatures');
                    featuresList.innerHTML = project.features.map(feature => `<li>${feature}</li>`).join('');
                    
                    // Populate tags
                    const tagsContainer = document.getElementById('modalTags');
                    tagsContainer.innerHTML = project.tags.map(tag => `<span class="modal-tag">${tag}</span>`).join('');
                    
                    // Set links
                    document.getElementById('liveDemo').href = project.liveDemo;
                    document.getElementById('sourceCode').href = project.sourceCode;
                    
                    // Show modal
                    projectModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        // Close modal functionality
        function closeModal() {
            projectModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        modalClose.addEventListener('click', closeModal);

        // Close modal when clicking outside
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                closeModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && projectModal.classList.contains('active')) {
                closeModal();
            }
        });

        // Parallax effect for hero background
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroBackground = document.querySelector('.hero::before');
            if (heroBackground) {
                document.querySelector('.hero').style.transform = `translateY(${scrolled * 0.5}px)`;
            }

        });
