import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "internet-www",
  title: "Internet & World Wide Web",
  emoji: "🌐",
  category: "engineering",
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
