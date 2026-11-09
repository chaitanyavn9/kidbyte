import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "internet-www",
  title: "Internet & World Wide Web",
  emoji: "🌐",
  category: "engineering",
  narrative: {
    "5-7": [
      { heading: "Imagine sending a letter to a friend in another city…", text: "You write the letter, put it in an envelope, write the address, and the post office carries it there. The internet works the same way — except it delivers millions of letters (called packets) in milliseconds instead of days." },
      { heading: "The internet is wires and wireless signals", text: "Computers around the world are connected by physical cables (even under oceans!) and wireless radio signals. When you visit a website, your request travels through these cables to reach a computer (server) that stores that website." },
      { heading: "How does your computer find a website?", text: "Every website has an address — like a house number. When you type www.google.com, a special phone book (called DNS) looks up the number and sends you to the right place.", diagramId: "dns-flow" },
      { heading: "Breaking messages into packets", text: "Big messages would clog the internet if sent whole. So they're broken into small pieces called packets. Each packet travels independently and they're reassembled at the other end — like getting a jigsaw puzzle in separate envelopes.", diagramId: "internet-packets" },
      { heading: "In your daily life…", text: "Every YouTube video, WhatsApp message, and Google search is packets travelling across the internet. The internet works because every computer agrees to follow the same rules — called protocols." },
    ],
    "8-10": [
      { heading: "The internet vs the World Wide Web", text: "The internet is the physical infrastructure — cables, routers, and protocols that connect billions of devices. The World Wide Web (WWW) is a service that runs ON the internet — websites and web pages accessed via HTTP. Email, gaming, and video calls also use the internet but are NOT the web." },
      { heading: "IP addresses — the internet's postal system", text: "Every device on the internet has an IP address (like 142.250.80.46 for Google). Your router has one public IP. DNS translates human-readable domain names (google.com) into these IP numbers so your computer knows where to send requests.", diagramId: "dns-flow" },
      { heading: "Packets and TCP/IP", text: "Data is broken into packets (1500 bytes each), each labelled with source and destination IPs. TCP ensures reliable delivery — it tracks all packets and re-sends any that go missing. UDP skips the tracking for speed (used in video calls and games).", diagramId: "internet-packets" },
      { heading: "HTTPS — the secure web", text: "HTTP sends data in plain text — anyone watching could read it. HTTPS adds TLS encryption — your browser and the server agree on a secret key and encrypt everything. The padlock icon in your browser means HTTPS is active." },
    ],
    "11-14": [
      { heading: "The layered model — TCP/IP stack", text: "The internet is organised into 4 layers: Application (HTTP, DNS, SMTP), Transport (TCP, UDP), Network (IP routing), and Link (Ethernet, WiFi). Each layer handles one aspect of communication and passes data to the layer below/above." },
      { heading: "DNS — the internet's phonebook", text: "When you type a URL, your computer asks a DNS resolver for the IP. The resolver walks the DNS hierarchy: root servers → TLD servers (.com) → authoritative nameservers → returns the A record. Results are cached (TTL) to speed up future requests.", diagramId: "dns-flow" },
      { heading: "TCP — reliable delivery in a noisy network", text: "TCP uses a 3-way handshake (SYN, SYN-ACK, ACK) to establish connections. It numbers every byte sent and receives acknowledgements. Congestion control (slow start, AIMD) prevents the network from flooding. HTTP/1.1 uses persistent TCP connections; HTTP/3 uses QUIC over UDP.", diagramId: "internet-packets" },
      { heading: "Routing — how packets find their way", text: "Routers use routing tables to decide the next hop for each packet. BGP (Border Gateway Protocol) is the protocol that lets internet service providers share route information with each other — it's the glue holding the internet's autonomous systems together." },
    ],
    "15-18": [
      { heading: "BGP and the internet's physical structure", text: "The internet is ~70,000 Autonomous Systems (ISPs, cloud providers, universities), each managing their own IP blocks. BGP lets ASes advertise reachable prefixes to peers. BGP hijacking (accidentally or maliciously announcing someone else's prefixes) can reroute global traffic — it happened to YouTube in 2008." },
      { heading: "TLS 1.3 — modern secure communication", text: "TLS 1.3 reduces handshake to 1 round-trip (from 2 in TLS 1.2). Key exchange uses ECDHE (Elliptic Curve Diffie-Hellman Ephemeral) — perfect forward secrecy, so compromising the server key doesn't decrypt old sessions. AEAD ciphers (AES-GCM, ChaCha20-Poly1305) encrypt and authenticate simultaneously.", diagramId: "internet-packets" },
      { heading: "HTTP/2 and HTTP/3 — protocol evolution", text: "HTTP/1.1: one request per TCP connection (pipelining helps but head-of-line blocking remains). HTTP/2: multiplexed streams over one TCP connection + header compression (HPACK). HTTP/3: QUIC over UDP — eliminates TCP head-of-line blocking, 0-RTT resumption, built-in TLS 1.3.", diagramId: "dns-flow" },
      { heading: "CDNs and edge computing", text: "Content Delivery Networks (Cloudflare, Akamai, AWS CloudFront) replicate content to hundreds of PoPs (Points of Presence) globally. Your DNS lookup is answered by the nearest PoP — latency drops from 100ms to 5ms. Edge computing extends this — running code at the PoP, milliseconds from the user." },
    ],
  },
  story: {
    "5-7": "The Internet is like a giant invisible web connecting computers all around the world! When you watch a YouTube video, the video travels through this web all the way from a computer far away to yours. The World Wide Web (websites like Google) lives on this Internet!",
    "8-10": "The Internet is a global network of billions of computers connected by cables, fibre, and wireless signals. The World Wide Web (WWW) is the system of websites that use the Internet — websites are stored on powerful computers called servers, and when you type a URL, your browser fetches that webpage. TCP/IP is the language all devices use to communicate.",
    "11-14": "The Internet uses the TCP/IP protocol suite. IP (Internet Protocol) assigns each device an address (IPv4: 192.168.1.1 / IPv6: 2001:db8::1). TCP (Transmission Control Protocol) guarantees reliable delivery by breaking data into packets, numbering them, and re-requesting lost ones. DNS translates domain names (google.com) to IP addresses. HTTP/HTTPS is the application protocol used by web browsers.",
    "15-18": "The Internet is built on the OSI 7-layer model (Physical → Data Link → Network → Transport → Session → Presentation → Application) or the TCP/IP 4-layer model (Link → Internet → Transport → Application). Key protocols: IP provides hop-by-hop routing via BGP (Border Gateway Protocol) across autonomous systems (ASes); TCP provides reliable byte-stream delivery with 3-way handshake (SYN → SYN-ACK → ACK), flow control (sliding window), and congestion control (CUBIC/BBR algorithms). UDP is connectionless — lower latency, used by DNS, video calls, gaming. TLS (Transport Layer Security) encrypts TCP connections: RSA/ECDH key exchange, AES-GCM bulk encryption, SHA-256 MAC. HTTP/1.1 uses persistent connections; HTTP/2 adds multiplexed streams and header compression (HPACK); HTTP/3 (QUIC over UDP) eliminates head-of-line blocking. DNS hierarchy: root servers (13 addresses, 600+ anycast nodes) → TLD servers (.com, .in) → authoritative servers → resolver cache. LAN connectivity: Ethernet (IEEE 802.3) via switches; Wi-Fi (IEEE 802.11ax / Wi-Fi 6) using OFDMA for multi-user. IP subnetting: a /24 subnet gives 254 hosts; CIDR notation replaces classful addressing.",
  },
  analogy: {
    "5-7": "The Internet is like a postal system for data — messages travel through cables and reach computers anywhere in the world.",
    "8-10": "Think of the Internet as roads and the WWW as shops on those roads — you need the roads (Internet) to reach the shops (websites).",
    "11-14": "TCP/IP is like a phone call with guaranteed delivery — TCP ensures every message arrives and nothing is missed.",
    "15-18": "The OSI model is like the postal system: physical layer = trucks, network layer = addresses and routing, transport layer = tracking numbers and delivery confirmation.",
  },
  photo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&fit=crop",
  photoAlt: "Fiber optic cables and network switches representing internet infrastructure",
  keyFacts: [
    { emoji: "🌐", label: "Internet vs WWW", value: "Internet = pipes; WWW = websites", detail: "The Internet is the physical network. The Web (WWW) is websites that use it." },
    { emoji: "📦", label: "Packets", value: "Data split into ~1,500 byte chunks", detail: "Every file, email, and video is broken into packets that travel independently." },
    { emoji: "🏠", label: "IP Address", value: "IPv4: 4 numbers (192.168.1.1)", detail: "Every device on the internet has an IP address. IPv6 uses 128 bits for more addresses." },
    { emoji: "🔤", label: "DNS", value: "Translates domain names to IPs", detail: "google.com → 142.250.80.46. DNS is the internet's phone book." },
    { emoji: "🔒", label: "HTTPS", value: "TLS encrypts your connection", detail: "HTTPS means data is encrypted between your browser and the server. HTTP is unencrypted." },
    { emoji: "📡", label: "Speed", value: "Fibre: 1 Gbps+ (1 billion bits/s)", detail: "Light travels through fibre optic cables at 200,000 km/s — 2/3 the speed of light." },
  ],
  funFact: "The World Wide Web was invented by Sir Tim Berners-Lee in 1989 at CERN. It was originally designed just to help scientists share research papers — it grew slightly bigger than expected!",
  dos: [
    "Configure TCP/IP settings for your network: IP, Subnet Mask, Default Gateway, DNS",
    "Use HTTPS websites — the padlock icon means data is encrypted",
    "Set up bookmarks and browser extensions for productivity",
    "Test network connectivity: ping → nslookup → traceroute",
  ],
  donts: [
    "Don't share personal information on HTTP (unencrypted) websites",
    "Don't click pop-ups claiming your computer has a virus",
    "Don't use public Wi-Fi for banking without a VPN",
    "Don't ignore SSL certificate warnings — they indicate potential attacks",
  ],
  quiz: [
    {
      for: "5-7",
      question: "What is the Internet?",
      choices: ["A giant network connecting computers worldwide", "A type of computer", "A storage device"],
      correct: 0,
      explanation: "The Internet connects billions of computers — it's the world's biggest network!",
    },
    {
      for: "8-10",
      question: "What does DNS do?",
      choices: [
        "Translates domain names like google.com into IP addresses computers can use",
        "Stores all websites",
        "Encrypts your internet traffic",
      ],
      correct: 0,
      explanation: "DNS is the Internet's phone book — it converts human-readable names into IP addresses.",
    },
    {
      for: "11-14",
      question: "What is the difference between HTTP and HTTPS?",
      choices: [
        "HTTPS encrypts data using TLS — HTTP sends data in plain text anyone can intercept",
        "HTTPS is faster than HTTP",
        "HTTPS is only for shopping websites",
      ],
      correct: 0,
      explanation: "TLS encryption in HTTPS means even if your data is intercepted, it's unreadable. Essential for passwords, payments, and any sensitive data.",
    },
    {
      for: "15-18",
      question: "What does the TCP 3-way handshake establish?",
      choices: [
        "A reliable connection with agreed sequence numbers before data transfer begins (SYN → SYN-ACK → ACK)",
        "An encrypted TLS session",
        "A DNS resolution",
      ],
      correct: 0,
      explanation: "The handshake synchronizes sequence numbers between client and server, establishing the state needed for reliable byte-stream delivery — TCP won't send data until this completes.",
    },
    {
      for: "15-18",
      question: "Why does HTTP/3 use UDP instead of TCP?",
      choices: [
        "QUIC (over UDP) eliminates TCP head-of-line blocking — a lost packet only stalls its own stream, not all multiplexed streams",
        "UDP is faster because it skips error checking entirely",
        "HTTP/3 is designed only for video streaming",
      ],
      correct: 0,
      explanation: "In HTTP/2 over TCP, a single lost packet stalls all multiplexed streams. HTTP/3's QUIC implements reliable delivery per-stream over UDP, so one loss only pauses that stream.",
    },
  ],
};

export default lesson;
