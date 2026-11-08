import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "cyber-hygiene",
  title: "Cyber Hygiene & Safety",
  emoji: "🛡️",
  category: "engineering",
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
