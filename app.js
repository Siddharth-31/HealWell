 // Disease Information Data
        const diseases = [
            {
                name: "Diabetes",
                icon: "🩸",
                imagePath: "images/diabetes.png",
                gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                description: "High blood sugar levels affecting how your body uses glucose for energy.",
                symptoms: ["Excessive thirst", "Frequent urination", "Fatigue", "Blurred vision"],
                prevention: ["Healthy weight", "Regular exercise", "Balanced diet", "Limit processed foods"],
                whatToDo: ["Monitor blood sugar", "Take medications", "Follow diet plan", "Regular checkups"]
            },
            {
                name: "Hypertension",
                icon: "💓",
                imagePath: "images/hypertension.png",
                gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                description: "High blood pressure that can lead to serious health complications.",
                symptoms: ["Headaches", "Shortness of breath", "Chest pain", "Dizziness"],
                prevention: ["Reduce sodium", "Regular exercise", "Healthy weight", "Manage stress"],
                whatToDo: ["Take medications", "Monitor BP", "Follow DASH diet", "Regular checkups"]
            },
            {
                name: "Heart Disease",
                icon: "❤️",
                imagePath: "images/heart-disease.png",
                gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                description: "Conditions affecting heart structure and function.",
                symptoms: ["Chest pain", "Shortness of breath", "Fatigue", "Irregular heartbeat"],
                prevention: ["Heart-healthy diet", "Exercise", "Don't smoke", "Control cholesterol"],
                whatToDo: ["Take heart medications", "Follow cardiac diet", "Gentle exercise", "Emergency plan"]
            },
            {
                name: "Obesity",
                icon: "⚖️",
                imagePath: "images/obesity.png",
                gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                description: "Excessive body fat that increases risk of health problems.",
                symptoms: ["Excess weight", "Difficulty breathing", "Joint pain", "Sleep apnea"],
                prevention: ["Balanced diet", "Physical activity", "Portion control", "Adequate sleep"],
                whatToDo: ["Consult nutritionist", "Exercise plan", "Track food intake", "Medical supervision"]
            },
            {
                name: "Depression",
                icon: "🧠",
                imagePath: "images/depression.png",
                gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
                description: "Mental health disorder with persistent sadness and loss of interest.",
                symptoms: ["Persistent sadness", "Loss of interest", "Fatigue", "Sleep problems"],
                prevention: ["Regular exercise", "Social connections", "Stress management", "Adequate sleep"],
                whatToDo: ["Seek professional help", "Take medications", "Therapy sessions", "Build support network"]
            },
            {
                name: "Osteoporosis",
                icon: "🦴",
                imagePath: "images/osteoporosis.png",
                gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
                description: "Bone disease causing weak and brittle bones.",
                symptoms: ["Back pain", "Loss of height", "Stooped posture", "Bone fractures"],
                prevention: ["Calcium-rich diet", "Vitamin D", "Exercise", "Avoid smoking"],
                whatToDo: ["Calcium supplements", "Bone density tests", "Fall prevention", "Physical therapy"]
            },
            {
                name: "Asthma",
                icon: "🫁",
                imagePath: "images/asthma.png",
                gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
                description: "Respiratory condition where airways narrow and swell.",
                symptoms: ["Wheezing", "Shortness of breath", "Chest tightness", "Coughing"],
                prevention: ["Avoid triggers", "Regular exercise", "Clean environment", "Get vaccinated"],
                whatToDo: ["Use inhalers", "Identify triggers", "Action plan", "Regular doctor visits"]
            },
            {
                name: "Arthritis",
                icon: "🦵",
                imagePath: "images/arthritis.png",
                gradient: "linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)",
                description: "Joint inflammation causing pain and stiffness.",
                symptoms: ["Joint pain", "Stiffness", "Swelling", "Reduced mobility"],
                prevention: ["Healthy weight", "Regular exercise", "Protect joints", "Balanced diet"],
                whatToDo: ["Anti-inflammatory meds", "Physical therapy", "Hot/cold therapy", "Gentle exercises"]
            },
            {
                name: "Kidney Disease",
                icon: "🫘",
                imagePath: "images/kidney-disease.png",
                gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                description: "Progressive loss of kidney function affecting waste removal.",
                symptoms: ["Fatigue", "Swelling", "Urination changes", "Nausea"],
                prevention: ["Control blood pressure", "Manage diabetes", "Healthy diet", "Stay hydrated"],
                whatToDo: ["Follow renal diet", "Monitor fluid intake", "Take medications", "Regular lab tests"]
            },
            {
                name: "Stroke",
                icon: "🧠",
                imagePath: "images/stroke.png",
                gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
                description: "Interrupted blood supply to brain causing brain cell death.",
                symptoms: ["Sudden numbness", "Confusion", "Trouble speaking", "Severe headache"],
                prevention: ["Control blood pressure", "Don't smoke", "Exercise regularly", "Healthy diet"],
                whatToDo: ["Call emergency", "Note symptom time", "Keep person calm", "Hospital treatment"]
            },
            {
                name: "Cancer",
                icon: "🎗️",
                imagePath: "images/cancer.png",
                gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
                description: "Abnormal cell growth with potential to invade other body parts.",
                symptoms: ["Weight loss", "Fatigue", "Pain", "Skin changes"],
                prevention: ["Don't smoke", "Healthy diet", "Exercise", "Regular screenings"],
                whatToDo: ["Follow treatment plan", "Attend appointments", "Manage side effects", "Emotional support"]
            },
            {
                name: "Alzheimer's Disease",
                icon: "🧠",
                imagePath: "images/alzheimers.png",
                gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
                description: "Progressive brain disorder destroying memory and thinking skills.",
                symptoms: ["Memory loss", "Confusion", "Difficulty planning", "Language problems"],
                prevention: ["Mental stimulation", "Physical exercise", "Social engagement", "Healthy diet"],
                whatToDo: ["Safe environment", "Establish routines", "Memory aids", "Caregiver support"]
            },
            {
                name: "Liver Disease",
                icon: "🫀",
                imagePath: "images/liver-disease.png",
                gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                description: "Conditions affecting liver function including hepatitis and cirrhosis.",
                symptoms: ["Jaundice", "Abdominal pain", "Swelling", "Dark urine"],
                prevention: ["Limit alcohol", "Healthy diet", "Exercise", "Get vaccinated"],
                whatToDo: ["Avoid alcohol", "Prescribed diet", "Take medications", "Regular monitoring"]
            },
            {
                name: "Thyroid Disorders",
                icon: "🦋",
                imagePath: "images/thyroid.png",
                gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                description: "Conditions affecting thyroid gland function.",
                symptoms: ["Weight changes", "Fatigue", "Heart rate changes", "Temperature sensitivity"],
                prevention: ["Balanced diet", "Regular checkups", "Stress management", "Avoid smoking"],
                whatToDo: ["Take medications", "Blood tests", "Monitor symptoms", "Dietary adjustments"]
            },
            {
                name: "Chronic Fatigue Syndrome",
                icon: "😴",
                imagePath: "images/chronic-fatigue.png",
                gradient: "linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)",
                description: "Complex disorder with extreme fatigue that doesn't improve with rest.",
                symptoms: ["Severe fatigue", "Sleep problems", "Muscle pain", "Headaches"],
                prevention: ["Stress management", "Gradual exercise", "Good sleep hygiene", "Balanced diet"],
                whatToDo: ["Pace activities", "Prioritize rest", "Gentle exercise", "Support groups"]
            }
        ];

        let currentDiseaseIndex = 0;

        // Function to populate disease carousel
        function populateDiseases() {
            const slider = document.getElementById('diseaseSlider');
            const dotsContainer = document.getElementById('carouselDots');
            
            diseases.forEach((disease, index) => {
                const card = document.createElement('div');
                card.className = 'disease-card';
                
                card.innerHTML = `
                    <div class="disease-image" style="background: ${disease.gradient}; position: relative; overflow: hidden;">
                        <img src="${disease.imagePath}" alt="${disease.name}" style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; opacity: 0.8;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="disease-icon-fallback" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: none; align-items: center; justify-content: center; font-size: 5rem; color: white; background: ${disease.gradient};">
                            ${disease.icon}
                        </div>
                        <div class="disease-counter">${index + 1} / ${diseases.length}</div>
                    </div>
                    <div class="disease-content">
                        <h3>${disease.name}</h3>
                        <p>${disease.description}</p>
                        <div class="disease-info-grid">
                            <div class="symptoms">
                                <h4>Common Symptoms</h4>
                                <ul>
                                    ${disease.symptoms.map(symptom => `<li>${symptom}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="prevention">
                                <h4>Prevention</h4>
                                <ul>
                                    ${disease.prevention.map(measure => `<li>${measure}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="what-to-do">
                                <h4>What to Do</h4>
                                <ul>
                                    ${disease.whatToDo.map(action => `<li>${action}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                `;
                
                slider.appendChild(card);

                // Create dot for navigation
                const dot = document.createElement('div');
                dot.className = 'dot';
                if (index === 0) dot.classList.add('active');
                dot.onclick = () => goToDisease(index);
                dotsContainer.appendChild(dot);
            });
        }

        // Carousel navigation functions
        function nextDisease() {
            currentDiseaseIndex = (currentDiseaseIndex + 1) % diseases.length;
            updateCarousel();
        }

        function prevDisease() {
            currentDiseaseIndex = (currentDiseaseIndex - 1 + diseases.length) % diseases.length;
            updateCarousel();
        }

        function goToDisease(index) {
            currentDiseaseIndex = index;
            updateCarousel();
        }

        function updateCarousel() {
            const slider = document.getElementById('diseaseSlider');
            const dots = document.querySelectorAll('.dot');
            
            slider.style.transform = `translateX(-${currentDiseaseIndex * 100}%)`;
            
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentDiseaseIndex);
            });
        }

        // Auto-play carousel 
        function startAutoPlay() {
            setInterval(() => {
                nextDisease();
            }, 10000); 
        }

        // Touch/swipe support for mobile
        function setupTouchSupport() {
            const carousel = document.querySelector('.disease-carousel');
            let startX = 0;
            let endX = 0;

            carousel.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
            });

            carousel.addEventListener('touchend', (e) => {
                endX = e.changedTouches[0].clientX;
                handleSwipe();
            });

            function handleSwipe() {
                const threshold = 50;
                const diff = startX - endX;

                if (Math.abs(diff) > threshold) {
                    if (diff > 0) {
                        nextDisease();
                    } else {
                        prevDisease();
                    }
                }
            }
        }

        // Theme toggle functionality
        function toggleTheme() {
            const body = document.body;
            const button = document.querySelector('.theme-toggle');
            
            if (body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
                button.innerHTML = '🌙 Dark Mode';
                localStorage.setItem('theme', 'light');
            } else {
                body.setAttribute('data-theme', 'dark');
                button.innerHTML = '☀️ Light Mode';
                localStorage.setItem('theme', 'dark');
            }
        }

        // Load saved theme
        function loadTheme() {
            const savedTheme = localStorage.getItem('theme');
            const button = document.querySelector('.theme-toggle');
            
            if (savedTheme === 'dark') {
                document.body.setAttribute('data-theme', 'dark');
                button.innerHTML = '☀️ Light Mode';
            }
        }

        // Smooth scrolling for navigation links
        function setupSmoothScrolling() {
            const links = document.querySelectorAll('a[href^="#"]');
            
            links.forEach(link => {
                link.addEventListener('click', function(e) {
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
        }

        // Modal functionality
        function showAboutModal() {
            document.getElementById('aboutModal').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeAboutModal() {
            document.getElementById('aboutModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            populateDiseases();
            loadTheme();
            setupSmoothScrolling();
            setupTouchSupport();
            startAutoPlay();
            
            // Setup modal close functionality
            const modal = document.getElementById('aboutModal');
            const closeBtn = document.querySelector('.close');
            
            closeBtn.onclick = closeAboutModal;
            
            window.onclick = function(event) {
                if (event.target === modal) {
                    closeAboutModal();
                }
            }
        });

        // Chatbot functionality
        const healthKnowledgeBase = {
            'diabetes symptoms': 'Common symptoms of diabetes include excessive thirst, frequent urination, fatigue, blurred vision, slow healing wounds, and unexplained weight loss. If you experience these symptoms, consult a healthcare provider for proper testing.',
            'heart disease prevention': 'To prevent heart disease: maintain a heart-healthy diet rich in fruits and vegetables, exercise regularly (30 minutes daily), avoid smoking, limit alcohol consumption, manage stress, and get regular health checkups.',
            'high blood pressure': 'If you have high blood pressure: take prescribed medications as directed, monitor your blood pressure regularly, follow a low-sodium diet (DASH diet), exercise regularly, maintain a healthy weight, limit alcohol, and manage stress.',
            'water intake': 'Generally, aim for 8 glasses (64 ounces) of water daily, but individual needs vary based on activity level, climate, and overall health. Listen to your body and drink when thirsty. Fruits and vegetables also contribute to hydration.',
            'depression signs': 'Signs of depression include persistent sadness, loss of interest in activities, fatigue, sleep problems, difficulty concentrating, appetite changes, feelings of worthlessness, and thoughts of self-harm. Seek professional help if experiencing these symptoms.',
            'sleep quality': 'To improve sleep quality: maintain a consistent sleep schedule, create a comfortable sleep environment, avoid screens before bedtime, limit caffeine and alcohol, exercise regularly (but not close to bedtime), and practice relaxation techniques.',
            'obesity prevention': 'Prevent obesity by maintaining a balanced diet with proper portion sizes, engaging in regular physical activity, limiting processed foods and sugary drinks, eating plenty of fruits and vegetables, and getting adequate sleep.',
            'asthma management': 'Manage asthma by using prescribed inhalers correctly, identifying and avoiding triggers, maintaining a clean environment, getting vaccinated against respiratory infections, and having an asthma action plan.',
            'stress management': 'Manage stress through regular exercise, meditation or deep breathing, maintaining social connections, getting adequate sleep, eating a balanced diet, and seeking professional help when needed.',
            'healthy diet': 'A healthy diet includes plenty of fruits and vegetables, whole grains, lean proteins, healthy fats (like olive oil and nuts), limited processed foods, reduced sodium and sugar intake, and adequate hydration.'
        };

        function toggleChatbot() {
            const chatbot = document.getElementById('chatbotContainer');
            const toggle = document.getElementById('chatbotToggle');
            
            if (chatbot.style.display === 'none' || chatbot.style.display === '') {
                chatbot.style.display = 'flex';
                toggle.style.display = 'none';
            } else {
                chatbot.style.display = 'none';
                toggle.style.display = 'block';
            }
        }

        function askQuickQuestion(question) {
            const input = document.getElementById('chatbotInput');
            input.value = question;
            sendChatbotMessage();
        }

        function sendChatbotMessage() {
            const input = document.getElementById('chatbotInput');
            const message = input.value.trim();
            
            if (message === '') return;
            
            // Add user message
            addChatbotMessage(message, 'user');
            input.value = '';
            
            // Generate bot response
            setTimeout(() => {
                const response = generateBotResponse(message);
                addChatbotMessage(response, 'bot');
            }, 500);
        }

        function handleChatbotKeypress(event) {
            if (event.key === 'Enter') {
                sendChatbotMessage();
            }
        }

        function addChatbotMessage(message, sender) {
            const messagesContainer = document.getElementById('chatbotMessages');
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${sender}`;
            messageDiv.textContent = message;
            
            messagesContainer.appendChild(messageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        function generateBotResponse(userMessage) {
            const message = userMessage.toLowerCase();
            
            // Check for keywords in the knowledge base
            for (const [key, response] of Object.entries(healthKnowledgeBase)) {
                if (message.includes(key.split(' ')[0]) && message.includes(key.split(' ')[1] || key.split(' ')[0])) {
                    return response;
                }
            }
            
            // Disease-specific responses
            if (message.includes('diabetes')) {
                return 'Diabetes is a condition where blood sugar levels are too high. Common symptoms include excessive thirst, frequent urination, and fatigue. Prevention includes maintaining a healthy weight, regular exercise, and a balanced diet. Always consult a healthcare provider for proper diagnosis and treatment.';
            }
            
            if (message.includes('heart') || message.includes('cardiac')) {
                return 'Heart health is crucial for overall well-being. Maintain a heart-healthy lifestyle with regular exercise, a balanced diet low in saturated fats, no smoking, limited alcohol, and stress management. Regular checkups can help detect issues early.';
            }
            
            if (message.includes('blood pressure') || message.includes('hypertension')) {
                return 'High blood pressure often has no symptoms but can lead to serious complications. Management includes medication compliance, a low-sodium diet, regular exercise, maintaining healthy weight, and stress reduction. Monitor your blood pressure regularly.';
            }
            
            if (message.includes('weight') || message.includes('obesity')) {
                return 'Maintaining a healthy weight involves balancing calories consumed with calories burned through physical activity. Focus on a diet rich in fruits, vegetables, and whole grains, combined with regular exercise. Consult a healthcare provider for personalized advice.';
            }
            
            if (message.includes('exercise') || message.includes('fitness')) {
                return 'Regular physical activity is essential for good health. Aim for at least 150 minutes of moderate-intensity exercise per week, including both cardio and strength training. Start slowly and gradually increase intensity. Consult a doctor before starting any new exercise program.';
            }
            
            if (message.includes('mental health') || message.includes('depression') || message.includes('anxiety')) {
                return 'Mental health is as important as physical health. Signs of mental health issues include persistent sadness, anxiety, changes in sleep or appetite, and loss of interest in activities. Don\'t hesitate to seek professional help from a mental health provider.';
            }
            
            if (message.includes('nutrition') || message.includes('diet')) {
                return 'A balanced diet includes a variety of foods: fruits, vegetables, whole grains, lean proteins, and healthy fats. Limit processed foods, excess sugar, and sodium. Stay hydrated and consider consulting a nutritionist for personalized dietary advice.';
            }
            
            if (message.includes('sleep')) {
                return 'Quality sleep is essential for health. Adults need 7-9 hours per night. Maintain a consistent sleep schedule, create a comfortable sleep environment, avoid screens before bed, and limit caffeine. If you have persistent sleep problems, consult a healthcare provider.';
            }
            
            // General health responses
            if (message.includes('symptom') || message.includes('sick') || message.includes('pain')) {
                return 'If you\'re experiencing concerning symptoms, it\'s important to consult with a healthcare professional for proper evaluation and diagnosis. Don\'t ignore persistent or severe symptoms. This chatbot provides general information only and cannot replace professional medical advice.';
            }
            
            if (message.includes('emergency') || message.includes('urgent')) {
                return '🚨 For medical emergencies, call your local emergency number immediately (911 in the US, 102 in India). Signs of emergency include chest pain, difficulty breathing, severe bleeding, loss of consciousness, or signs of stroke. Don\'t delay seeking immediate medical attention.';
            }
            
            // Default response
            return 'I understand you\'re asking about health-related topics. While I can provide general health information, I recommend consulting with a qualified healthcare professional for personalized medical advice. Is there a specific health topic you\'d like to know more about? You can also try the quick questions above for common health topics.';
        }

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            const isDark = document.body.getAttribute('data-theme') === 'dark';
            
            if (window.scrollY > 100) {
                if (isDark) {
                    header.style.background = 'rgba(30, 41, 59, 0.95)';
                } else {
                    header.style.background = 'rgba(255, 255, 255, 0.95)';
                }
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = 'var(--white)';
                header.style.backdropFilter = 'none';
            }

        });
