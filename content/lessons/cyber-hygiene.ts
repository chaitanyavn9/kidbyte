import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "cyber-hygiene",
  title: "Cyber Hygiene & Safety",
  emoji: "🛡️",
  category: "engineering",
  narrative: {
    "5-7": [
      { heading: "You wash your hands to stay healthy — computers need cleaning too", text: "Just like you wash your hands to protect yourself from germs, there are habits that protect your computer and your personal information online. These habits are called cyber hygiene — good online health practices." },
      { heading: "Strong passwords are like strong locks", text: "A simple password like '1234' is like leaving your front door unlocked. A strong password is long, random, and different for every website. Hackers try millions of common passwords automatically — a long random one takes them billions of years to crack.", diagramId: "password-strength" },
      { heading: "Watch out for fake messages", text: "Some bad people send fake emails or messages pretending to be your bank, your school, or even a friend — trying to trick you into clicking links or sharing your password. This is called phishing. The rule: never click links in unexpected messages.", diagramId: "phishing-warning" },
      { heading: "In your daily life…", text: "Use a different password for every important account. Never share passwords with friends. Don't click links in emails even if they look official — go directly to the website instead. Enable two-factor authentication (a second check by text or app) on important accounts." },
    ],
    "8-10": [
      { heading: "Personal information is valuable — and attackers want it", text: "Your email login, bank password, and home address are worth money to criminals. Data breaches expose millions of passwords every year. If you use the same password everywhere and one site gets hacked, all your accounts are compromised. This is why password hygiene matters." },
      { heading: "What makes a strong password?", text: "Length is the most important factor — a 16-character password of random words is exponentially harder to crack than a 8-character 'complex' one. Never use birthdays, names, or dictionary words. Use a password manager (1Password, Bitwarden) to generate and store random passwords for each site.", diagramId: "password-strength" },
      { heading: "Phishing — social engineering attacks", text: "Phishing emails impersonate trusted organisations to steal credentials. Red flags: sender email doesn't match the company (g00gle.com vs google.com), urgent language ('Your account will be deleted!'), suspicious links (hover to see the real URL), requests for passwords. Real companies never ask for your password by email.", diagramId: "phishing-warning" },
      { heading: "Two-factor authentication (2FA)", text: "2FA adds a second verification step: something you know (password) + something you have (phone/security key). Even if your password is stolen, the attacker can't login without the second factor. TOTP apps (Google Authenticator, Authy) are more secure than SMS 2FA (SIM-swapping attacks)." },
    ],
    "11-14": [
      { heading: "The threat model — who is after your data?", text: "Opportunistic attackers: scan the internet for unpatched systems, easy passwords. Targeted attackers: specifically after you or your organisation. Nation-state actors: sophisticated attacks on critical infrastructure. Most people face opportunistic attacks — basic hygiene defeats 99% of these." },
      { heading: "Password security — entropy and cracking", text: "Password entropy = log₂(charset_size^length). '123456': ~20 bits (cracked in milliseconds). 'correct horse battery staple': ~44 bits (four random words). Random 16-char mix: ~95 bits (centuries to crack with current hardware). Password managers generate maximum-entropy random passwords.", diagramId: "password-strength" },
      { heading: "Phishing anatomy and defence", text: "Spear phishing: targeted at a specific person using personal information from LinkedIn/social media. Pretexting: creates a believable scenario ('IT department: your password expires today'). Defence: check sender domain carefully, use email filtering (SPF/DKIM/DMARC), call back via known number to verify requests.", diagramId: "phishing-warning" },
      { heading: "HTTPS, certificates, and trust", text: "HTTPS encrypts traffic and authenticates the server via a TLS certificate signed by a Certificate Authority (CA). Browsers trust ~150 root CAs. Certificate Transparency logs allow anyone to detect fraudulently issued certificates. HSTS (HTTP Strict Transport Security) forces HTTPS even if you type http://." },
    ],
    "15-18": [
      { heading: "Credential stuffing and breached password databases", text: "Have I Been Pwned contains 12+ billion leaked credentials. Attackers buy breach data and try leaked email/password combinations on every website automatically (credential stuffing). Defence: unique passwords everywhere, monitor HIBP alerts, use passkeys (WebAuthn) where available — phishing-resistant by design." },
      { heading: "Password hashing — how sites store your password", text: "Sites must never store plaintext passwords. Proper storage: bcrypt/scrypt/Argon2id with per-user salt. These are intentionally slow (100ms per check) to make offline cracking infeasible. md5(password) without salt is negligent — rainbow tables precompute every hash. LinkedIn's 2012 breach used unsalted SHA-1 — 90% cracked within hours.", diagramId: "password-strength" },
      { heading: "Advanced phishing — MitM and session hijacking", text: "Adversary-in-the-middle (AiTM) phishing proxies the real site — capturing session tokens even when 2FA is used. Evilginx2 is a popular AiTM framework. Defence: hardware security keys (FIDO2/U2F) are phishing-proof — the browser verifies the origin domain during authentication, so credentials are never sent to a fake site.", diagramId: "phishing-warning" },
      { heading: "Zero-trust security model", text: "Traditional security: trust the corporate network, distrust the internet. Zero-trust: verify every request regardless of network location. Identity + device health + context = access decision. Implemented via SSO (Single Sign-On), device certificates, continuous verification. Essential in the cloud era where the 'perimeter' no longer exists." },
    ],
  },
  story: {
    "5-7": "Staying safe online is just like washing your hands — you do it every day to stay healthy! Never tell strangers your name, school, or where you live. If something online makes you feel scared or uncomfortable, tell a trusted adult.",
    "8-10": "Cyber hygiene means keeping yourself safe online. Use strong passwords (mix letters, numbers, symbols), enable two-factor authentication (2FA), keep software updated, and be careful what you click. Viruses are hidden programs that can damage your computer or steal your information.",
    "11-14": "Cyber threats include: Malware (viruses, worms, trojans, ransomware), Phishing (fake emails/websites stealing credentials), Man-in-the-Middle (MITM) attacks on unencrypted connections, and Social Engineering (tricking people into giving access). Protection: strong unique passwords + password manager, 2FA, up-to-date OS/antivirus, firewall, careful clicking, and regular backups.",
    "15-18": "The cyber threat landscape spans: (1) Malware — viruses (attach to programs), worms (self-propagate via network), ransomware (AES-encrypts files, demands Bitcoin), spyware (keyloggers); (2) Network attacks — packet sniffing on unencrypted Wi-Fi, ARP poisoning for MITM, DNS spoofing; (3) Web vulnerabilities — XSS (Cross-Site Scripting injects JavaScript), SQL Injection (manipulates DB queries via unsanitised input), CSRF (Cross-Site Request Forgery); (4) Social engineering — pretexting, spear phishing (targeted with personal details), vishing (voice phishing). Defences: principle of least privilege (PoLP), network segmentation, Zero Trust architecture (never trust, always verify), WAF (Web Application Firewall), IDS/IPS, certificate pinning, CSP headers, parameterised queries for SQL, bcrypt/Argon2 for password hashing. Browser hardening: disable Flash/Java, uBlock Origin, HTTPS-Everywhere, check certificate chains. Ethical hacking and responsible disclosure are legitimate career paths — OWASP Top 10 is the standard vulnerability checklist.",
  },
  analogy: {
    "5-7": "Cyber hygiene is like locking your house — you don't leave the door open just because nothing bad has happened yet.",
    "8-10": "A strong password is like a good lock — a simple one (like '1234') is like a padlock you can open with a hairpin.",
    "11-14": "Cyber security is like medieval castle defence — multiple layers: moat (firewall), thick walls (encryption), guards (antivirus), and drawbridge (authentication).",
    "15-18": "Zero Trust security is like an airport — everyone gets checked at every checkpoint, no matter who they are, because a trusted insider can be compromised.",
  },
  photo: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=700&fit=crop",
  photoAlt: "Digital padlock on a circuit board representing cybersecurity",
  keyFacts: [
    { emoji: "🔐", label: "Password Length", value: "12+ characters recommended", detail: "An 8-char password can be cracked in hours. 12+ chars takes years." },
    { emoji: "🎣", label: "Phishing", value: "#1 attack vector (36% of breaches)", detail: "Most hacks start with a fake email tricking someone into clicking a link." },
    { emoji: "🔄", label: "Update Frequency", value: "Patch within 14 days", detail: "Most malware exploits known vulnerabilities — patching fixes them." },
    { emoji: "📱", label: "2FA", value: "Blocks 99.9% of automated attacks", detail: "Two-factor authentication stops almost all account takeover attempts." },
    { emoji: "💸", label: "Cybercrime Cost", value: "$8 trillion globally in 2023", detail: "If cybercrime were a country, it would be the 3rd largest economy." },
    { emoji: "🔑", label: "Password Manager", value: "Stores 100s of unique passwords", detail: "Using a password manager means every site gets a unique, strong password." },
  ],
  funFact: "The 2017 WannaCry ransomware attack infected 300,000 computers in 150 countries in just 4 days, costing $4–8 billion in damages — exploiting a Windows vulnerability that Microsoft had patched 2 months earlier but millions hadn't applied!",
  dos: [
    "Use a password manager — unique 20+ character passwords for every site",
    "Enable 2FA everywhere — especially email and banking",
    "Keep OS and browser updated — most attacks exploit known, patched vulnerabilities",
    "Back up data: 3-2-1 rule (3 copies, 2 media types, 1 offsite)",
  ],
  donts: [
    "Don't reuse passwords — one breach exposes all your accounts",
    "Don't click links in unexpected emails even from known senders (phishing)",
    "Don't connect to public Wi-Fi for sensitive tasks without a VPN",
    "Don't disable Windows Defender/firewall for performance",
  ],
  quiz: [
    {
      for: "5-7",
      question: "What should you do if someone online asks for your home address?",
      choices: ["Tell a trusted adult immediately and don't give the address", "Give it only if they seem nice", "Post it publicly"],
      correct: 0,
      explanation: "Never share personal information online — always tell a trusted adult if someone makes you uncomfortable.",
    },
    {
      for: "8-10",
      question: "What makes a password strong?",
      choices: [
        "A mix of uppercase letters, lowercase letters, numbers, and symbols — at least 12 characters",
        "Using your birthday",
        "Using your pet's name",
      ],
      correct: 0,
      explanation: "Long, random passwords with mixed character types are exponentially harder to crack.",
    },
    {
      for: "11-14",
      question: "What is phishing?",
      choices: [
        "Fake emails or websites designed to trick you into entering your login credentials",
        "A type of antivirus software",
        "A network firewall attack",
      ],
      correct: 0,
      explanation: "Phishing creates convincing fakes of real websites — always check the URL bar, not just the page appearance.",
    },
    {
      for: "15-18",
      question: "Why is SQL Injection dangerous and how is it prevented?",
      choices: [
        "Unsanitised input can terminate and modify SQL queries — prevented by parameterised queries/prepared statements",
        "It injects malware via USB drives",
        "It's a type of network packet attack",
      ],
      correct: 0,
      explanation: "If a login form builds SQL as `SELECT * FROM users WHERE name='${input}'`, entering `' OR 1=1 --` bypasses authentication. Parameterised queries treat input as data, never code.",
    },
    {
      for: "15-18",
      question: "What is the principle of least privilege (PoLP)?",
      choices: [
        "Users and processes are granted only the minimum access rights needed to perform their function — limiting blast radius of compromises",
        "Administrators should not use admin accounts for daily work",
        "Giving all users equal permissions",
      ],
      correct: 0,
      explanation: "PoLP limits what an attacker can do if they compromise one account or process. A web server shouldn't have database admin rights; a user app shouldn't run as root.",
    },
  ],
};

export default lesson;
