// =========================================
// 1. CLOCK FUNCTION
// =========================================
function updateTime() {
  const now = new Date();
  const options = { 
    timeZone: 'Africa/Johannesburg', 
    weekday: 'short', 
    day: 'numeric', 
    month: 'short', 
    hour: '2-digit', 
    minute: '2-digit' 
  };
  const timeEl = document.getElementById('top-bar-time');
  if (timeEl) timeEl.textContent = now.toLocaleString('en-ZA', options);
}
updateTime();
setInterval(updateTime, 60000);

// =========================================
// 2. WINDOW CONTENT DATA
// =========================================
const portfolioData = {
  about: `
    <div class="profile-header">
      <img src="pic/pic.jpg" alt="Tshikota" class="profile-avatar" onerror="this.src='https://ui-avatars.com/api/?name=Tshikota+Fulufhedzeani&background=8b5cf6&color=fff&size=200'">
      <div class="profile-info">
        <h1>Tshikota Fulufhedzeani</h1>
        <p class="profile-subtitle">Information Technology Graduate | Data Processing & Databases</p>
        <p class="profile-location"><i class="ph ph-map-pin"></i> Vuwani, Limpopo, South Africa</p>
      </div>
    </div>
    <h2><i class="ph ph-user"></i> Professional Profile</h2>
    <p>Information Technology graduate (Diploma, Vaal University of Technology) with a strong foundation in databases, systems analysis and programming. Hands-on project experience in data cleaning, preprocessing and structured dataset analysis using SQL, Python, Pandas and NumPy.</p>
    <p>Currently on the Umuzi Experience Accelerator Programme, building workplace readiness. Detail-oriented and a structured problem-solver, seeking an entry-level role in data processing, data quality, database support or information management.</p>
    <h3><i class="ph ph-star"></i> Key Strengths</h3>
    <ul>
      <li>Attention to detail and data accuracy</li>
      <li>Analytical thinking & structured problem-solving</li>
      <li>Technical troubleshooting</li>
      <li>Communication and collaboration</li>
      <li>Quick to learn new systems and business processes</li>
    </ul>
  `,
  
  skills: `
    <h2><i class="ph ph-briefcase"></i> Technical Skills</h2>
    <h3><i class="ph ph-database"></i> Databases</h3>
    <ul><li>SQL, MySQL</li></ul>
    <h3><i class="ph ph-chart-bar"></i> Data Processing & Analysis</h3>
    <ul><li>Data cleaning, preprocessing, feature engineering</li><li>Data analysis and interpretation</li></ul>
    <h3><i class="ph ph-code"></i> Programming & Tools</h3>
    <ul><li>Python, Pandas, NumPy, Matplotlib</li><li>Git, GitHub, Visual Studio Code</li></ul>
    <h3><i class="ph ph-robot"></i> Machine Learning (Working Knowledge)</h3>
    <ul><li>Scikit-learn, TensorFlow, Keras</li><li>Classification models, model evaluation</li></ul>
    <h3><i class="ph ph-wifi-high"></i> Networking</h3>
    <ul><li>Network fundamentals, troubleshooting, and configuration</li><li>Understanding of LAN/WAN, TCP/IP, and network security basics</li></ul>
    <h3><i class="ph ph-folder"></i> Other Skills</h3>
    <ul><li>Microsoft Office: Excel (basic), Word, PowerPoint</li><li>Systems analysis and design, project management</li></ul>
  `,

  languages: `
    <h2><i class="ph ph-code"></i> Programming Languages</h2>
    <p>A breakdown of the core languages I use for development, data processing, and web technologies.</p>
    <div class="lang-grid">
      <div class="lang-card">
        <div class="lang-header"><span class="lang-name"><i class="ph ph-file-sql" style="color:#007AFF;"></i> SQL</span><span class="lang-level">Advanced</span></div>
        <div class="progress-track"><div class="progress-fill" style="width: 85%;"></div></div>
      </div>
      <div class="lang-card">
        <div class="lang-header"><span class="lang-name"><i class="ph ph-file-py" style="color:#FFCC00;"></i> Python</span><span class="lang-level">Advanced</span></div>
        <div class="progress-track"><div class="progress-fill" style="width: 80%;"></div></div>
      </div>
      <div class="lang-card">
        <div class="lang-header"><span class="lang-name"><i class="ph ph-file-js" style="color:#FFCC00;"></i> JavaScript</span><span class="lang-level">Intermediate</span></div>
        <div class="progress-track"><div class="progress-fill" style="width: 70%;"></div></div>
      </div>
      <div class="lang-card">
        <div class="lang-header"><span class="lang-name"><i class="ph ph-file-html" style="color:#FF3B30;"></i> HTML & CSS</span><span class="lang-level">Intermediate</span></div>
        <div class="progress-track"><div class="progress-fill" style="width: 75%;"></div></div>
      </div>
      <div class="lang-card">
        <div class="lang-header"><span class="lang-name"><i class="ph ph-file-java" style="color:#FF3B30;"></i> Java</span><span class="lang-level">Intermediate</span></div>
        <div class="progress-track"><div class="progress-fill" style="width: 65%;"></div></div>
      </div>
    </div>
  `,

  projects: `
    <h2><i class="ph ph-rocket-launch"></i> Technical Projects</h2>
    
    <h3><i class="ph ph-bowl-food"></i> VUT Student Food Ordering System</h3>
    <p><strong>Technologies:</strong> Web Development, JavaScript, SQL, UI/UX Design</p>
    <ul>
      <li>Developed a campus-specific food ordering platform tailored for Vaal University of Technology (VUT) students, streamlining the meal procurement process similar to Uber Eats.</li>
      <li>Implemented a location-based feature allowing students to accurately specify their exact building or block for efficient, targeted delivery.</li>
      <li>Integrated a flexible payment selection module, enabling users to choose their preferred method of payment before securely finalizing and placing their order.</li>
    </ul>

    <h3><i class="ph ph-brain"></i> Depression Prediction Using Machine Learning</h3>
    <p><strong>Technologies:</strong> Python, Pandas, NumPy, Scikit-learn</p>
    <ul>
      <li>Cleaned, preprocessed and engineered features from a structured dataset to prepare it for model training and testing.</li>
      <li>Built classification models using Logistic Regression, Random Forest and Neural Networks.</li>
      <li>Evaluated models using accuracy, precision, recall and F1-score to compare performance and identify patterns in the data.</li>
    </ul>
    
    <h3><i class="ph ph-chat-centered-text"></i> Medical AI Chatbot</h3>
    <p><strong>Technologies:</strong> Python, TensorFlow, Scikit-learn, Tkinter</p>
    <ul>
      <li>Developed a prototype chatbot that helps users with symptom-related queries.</li>
      <li>Preprocessed structured data and trained a machine-learning model for disease prediction.</li>
      <li>Built a graphical user interface with Tkinter.</li>
    </ul>
  `,

  education: `
    <h2><i class="ph ph-graduation-cap"></i> Education & Training</h2>
    <h3>Diploma in Information Technology</h3>
    <p><strong>Vaal University of Technology (VUT)</strong></p>
    <p>Relevant modules: Database Systems, Systems Analysis and Design, Information Systems, Programming, Data Structures, Project Management</p>
    <h3>Umuzi – Experience Accelerator Programme</h3>
    <p><strong>6 months | In progress</strong></p>
    <p>Work-integrated learning programme developing technical skills, communication, collaboration and workplace readiness.</p>
    <h3>Umuzi – Technical Business Support</h3>
    <p><strong>2 weeks</strong></p>
    <p>Training in structured problem-solving and workplace-oriented digital skills for technical support environments.</p>
    <h3>Umuzi – Design Thinking Challenge</h3>
    <p><strong>2 weeks</strong></p>
    <p>Worked on improving access to healthcare services: conducted user research, helped develop user personas, and tested proposed solutions using user feedback.</p>
  `,

  certifications: `
    <h2><i class="ph ph-certificate"></i> Certifications</h2>
    <p>Professional certifications validating my technical expertise and commitment to continuous learning. Click "View" to see the certificate, or "Download" to save it.</p>
    
    <div class="cert-grid">
      <!-- Cert 1 -->
      <div class="cert-card">
        <div class="cert-header">
          <div class="cert-icon"><i class="ph ph-network"></i></div>
          <div class="cert-info">
            <h4>CCNAv7: Introduction to Networks</h4>
            <p>Cisco Networking Academy • Nov 2023</p>
          </div>
        </div>
        <div class="cert-actions">
          <a href="CCNA_Intro_Networks.pdf" target="_blank" class="cert-btn view"><i class="ph ph-eye"></i> View</a>
          <a href="CCNA_Intro_Networks.pdf" download class="cert-btn download"><i class="ph ph-download-simple"></i> Download</a>
        </div>
      </div>

      <!-- Cert 2 -->
      <div class="cert-card">
        <div class="cert-header">
          <div class="cert-icon"><i class="ph ph-broadcast"></i></div>
          <div class="cert-info">
            <h4>CCNAv7: Switching, Routing & Wireless</h4>
            <p>Cisco Networking Academy • Jul 2024</p>
          </div>
        </div>
        <div class="cert-actions">
          <a href="CCNA_Switching_Routing_Wireless.pdf" target="_blank" class="cert-btn view"><i class="ph ph-eye"></i> View</a>
          <a href="CCNA_Switching_Routing_Wireless.pdf" download class="cert-btn download"><i class="ph ph-download-simple"></i> Download</a>
        </div>
      </div>

      <!-- Cert 3 -->
      <div class="cert-card">
        <div class="cert-header">
          <div class="cert-icon"><i class="ph ph-robot"></i></div>
          <div class="cert-info">
            <h4>A 360° View of Generative AI</h4>
            <p>Completed Course</p>
          </div>
        </div>
        <div class="cert-actions">
          <a href="Gen_AI_360_View.pdf" target="_blank" class="cert-btn view"><i class="ph ph-eye"></i> View</a>
          <a href="Gen_AI_360_View.pdf" download class="cert-btn download"><i class="ph ph-download-simple"></i> Download</a>
        </div>
      </div>

      <!-- Cert 4 -->
      <div class="cert-card">
        <div class="cert-header">
          <div class="cert-icon"><i class="ph ph-shield-check"></i></div>
          <div class="cert-info">
            <h4>Responsible Use of Gen AI</h4>
            <p>Completed Course</p>
          </div>
        </div>
        <div class="cert-actions">
          <a href="Responsible_Use_Gen_AI.pdf" target="_blank" class="cert-btn view"><i class="ph ph-eye"></i> View</a>
          <a href="Responsible_Use_Gen_AI.pdf" download class="cert-btn download"><i class="ph ph-download-simple"></i> Download</a>
        </div>
      </div>

      <!-- Cert 5 -->
      <div class="cert-card">
        <div class="cert-header">
          <div class="cert-icon"><i class="ph ph-code"></i></div>
          <div class="cert-info">
            <h4>Learn HTML and CSS</h4>
            <p>Scrimba • Completed</p>
          </div>
        </div>
        <div class="cert-actions">
          <a href="Scrimba_HTML_CSS.pdf" target="_blank" class="cert-btn view"><i class="ph ph-eye"></i> View</a>
          <a href="Scrimba_HTML_CSS.pdf" download class="cert-btn download"><i class="ph ph-download-simple"></i> Download</a>
        </div>
      </div>
    </div>
  `,

  contact: `
    <h2><i class="ph ph-envelope"></i> Contact Information</h2>
    <p><i class="ph ph-envelope-simple"></i> <strong>Email:</strong> <a href="mailto:Fulufhedzeani@gmail.com">Fulufhedzeani@gmail.com</a></p>
    <p><i class="ph ph-phone"></i> <strong>Phone:</strong> <a href="tel:+27736235027">073 623 5027</a> / <a href="tel:+27794207066">079 420 7066</a></p>
    <p><i class="ph ph-map-pin"></i> <strong>Location:</strong> Vuwani, Limpopo, South Africa</p>
    <p><i class="ph ph-translate"></i> <strong>Languages:</strong> English, Tswana, Tsonga, Zulu, Pedi</p>
    <p><i class="ph ph-car"></i> <strong>Driver's Licence:</strong> Code 10</p>
    
    <h3><i class="ph ph-linkedin-logo"></i> Professional Links</h3>
    <p><a href="https://www.linkedin.com/in/fulufhedzeani-tshikota" target="_blank"><i class="ph ph-linkedin-logo"></i> LinkedIn Profile</a></p>
    <p><a href="https://github.com/vhakota" target="_blank"><i class="ph ph-github-logo"></i> GitHub Profile</a></p>
    
    <h3><i class="ph ph-users"></i> References</h3>
    <p><strong>Miss Rivonia Muthambi</strong><br>Supervisor, Environmental Engineering (Mentor), Sibanye-Stillwater<br><i class="ph ph-phone"></i> 078 951 9726</p>
    <p><strong>Mr Robert Mbedzi</strong><br>Lecturer (Mentor), Vaal University of Technology<br><i class="ph ph-phone"></i> 071 421 0420</p>
    
    <a href="Tshikota_Fulufhedzeani_CV.pdf" target="_blank" class="resume-btn"><i class="ph ph-download-simple"></i> Download Full CV (PDF)</a>
  `,

  cv: `
    <h2><i class="ph ph-file-text"></i> Full Curriculum Vitae</h2>
    <p>Below is a live preview of my CV. You can scroll through it here, or download it using the button below.</p>
    
    <!-- Embedded PDF Viewer -->
    <div class="pdf-container">
      <embed src="Tshikota_Fulufhedzeani_CV.pdf" type="application/pdf" width="100%" height="100%">
    </div>
    
    <a href="Tshikota_Fulufhedzeani_CV.pdf" target="_blank" class="resume-btn"><i class="ph ph-download-simple"></i> Download Full CV (PDF)</a>
  `
};

// =========================================
// 3. WINDOW FUNCTIONS
// =========================================
const mainWindow = document.getElementById('main-window');
const windowTitle = document.getElementById('window-title');
const windowBody = document.getElementById('window-body');

function openWindow(section) {
  const titles = {
    about: 'About Me', 
    skills: 'Skills', 
    languages: 'Languages',
    projects: 'Projects', 
    education: 'Education', 
    certifications: 'Certifications',
    contact: 'Contact', 
    cv: 'My CV.pdf'
  };
  
  windowTitle.textContent = titles[section] || 'File';
  windowBody.innerHTML = portfolioData[section];
  
  mainWindow.style.display = 'flex';
  mainWindow.style.animation = 'none';
  
  setTimeout(() => {
    mainWindow.style.animation = 'windowOpen 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
  }, 10);
}

function closeWindow() {
  mainWindow.style.opacity = '0';
  mainWindow.style.transform = 'translate(-50%, -45%) scale(0.96)';
  
  setTimeout(() => {
    mainWindow.style.display = 'none';
    mainWindow.style.opacity = '1';
    mainWindow.style.transform = '';
  }, 300);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeWindow();
});