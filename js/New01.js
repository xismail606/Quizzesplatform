const mcqData = [
  // Lecture 1: Introduction to Internet Engineering and Network Components
  {
    id: 1,
    question: "1) What is the unit of measure for a communication link's transmission rate?",
    options: ["A) Kilobytes per minute", "B) Hertz", "C) Bits per second", "D) Packets per second"],
    answer: "C"
  },
  {
    id: 2,
    question: "2) End systems, such as desktop PCs, are also known as:",
    options: ["A) Routers", "B) Hosts", "C) Links", "D) Packet switches"],
    answer: "B"
  },
  {
    id: 3,
    question: "3) Which device's primary function is to forward chunks of data (packets)?",
    options: ["A) Server", "B) Router", "C) Host", "D) Modem"],
    answer: "B"
  },
  {
    id: 4,
    question: "4) Which of the following is an example of a 'nontraditional' computing device connected to the Internet?",
    options: ["A) Desktop PC", "B) Linux workstation", "C) Server", "D) Smartphone"],
    answer: "D"
  },
  {
    id: 5,
    question: "5) In the Client/Server model, what is the server's primary role?",
    options: ["A) To request services", "B) To provide services", "C) To store data temporarily", "D) To communicate directly with links"],
    answer: "B"
  },
  {
    id: 6,
    question: "6) What is the main advantage of Packet Switching over Circuit Switching?",
    options: ["A) Guaranteed dedicated path", "B) Zero packet loss", "C) Line efficiency and rate flexibility", "D) Lower hardware complexity"],
    answer: "C"
  },
  {
    id: 7,
    question: "7) Which network topology requires terminators at both ends of the main cable?",
    options: ["A) Star", "B) Ring", "C) Mesh", "D) Bus"],
    answer: "D"
  },
  {
    id: 8,
    question: "8) The term 'Intranet' refers to:",
    options: ["A) A public network accessible to everyone", "B) The same infrastructure as the global Internet", "C) A private network used by a single organization", "D) A global network of networks"],
    answer: "C"
  },
  {
    id: 9,
    question: "9) If the central device in a Star topology network fails, what is the consequence?",
    options: ["A) Only the central device is affected", "B) Data automatically reroutes through other paths", "C) The entire network fails", "D) The network switches to peer-to-peer mode"],
    answer: "C"
  },
  {
    id: 10,
    question: "10) The Mesh topology is favored in applications requiring high reliability because it offers:",
    options: ["A) Low initial cost", "B) Easy scalability", "C) High fault tolerance and multiple paths", "D) Dedicated connection for all users"],
    answer: "C"
  },

  // Lecture 2: Internet Architecture and Protocol Layers
  {
    id: 11,
    question: "1) What is the main function of protocols in computer networks?",
    options: ["A) Define physical cable standards", "B) Define message format, order, and actions", "C) Convert data to ASCII", "D) Manage hardware components"],
    answer: "B"
  },
  {
    id: 12,
    question: "2) Which device is located at the central office to convert DSL analog signals to digital data?",
    options: ["A) Router", "B) Modem", "C) DSLAM", "D) Access point"],
    answer: "C"
  },
  {
    id: 13,
    question: "3) Which organization is responsible for developing and publishing Internet standards (RFCs)?",
    options: ["A) IEEE", "B) ISO", "C) W3C", "D) IETF"],
    answer: "D"
  },
  {
    id: 14,
    question: "4) Which type of cable is characterized by high cost, low attenuation, and suitability for long-distance, high-speed transmission?",
    options: ["A) Twisted pair", "B) Coaxial", "C) Fiber optic", "D) UTP"],
    answer: "C"
  },
  {
    id: 15,
    question: "5) In the context of the OSI model, which layer is responsible for logical addressing and routing?",
    options: ["A) Data Link Layer", "B) Transport Layer", "C) Physical Layer", "D) Network Layer"],
    answer: "D"
  },
  {
    id: 16,
    question: "6) What does the concept of 'Store-and-Forward' mean in packet switching?",
    options: ["A) Packets are forwarded immediately upon arrival", "B) A router must receive the entire packet before transmitting it to the next link", "C) Packets are stored indefinitely", "D) Only part of the packet is stored and forwarded"],
    answer: "B"
  },
  {
    id: 17,
    question: "7) Which layer in the protocol stack is responsible for providing end-to-end logical communication between processes?",
    options: ["A) Data Link", "B) Network", "C) Application", "D) Transport"],
    answer: "D"
  },
  {
    id: 18,
    question: "8) The 'Encapsulation' process in networking involves:",
    options: ["A) Removing headers as data moves up the stack", "B) Adding headers and trailers to the application data as it moves down the stack", "C) Translating protocols between different layers", "D) Encrypting the data payload only"],
    answer: "B"
  },
  {
    id: 19,
    question: "9) The network core is primarily composed of:",
    options: ["A) Clients and servers", "B) Access networks and DSLAMS", "C) Interconnected routers", "D) End systems and modems"],
    answer: "C"
  },
  {
    id: 20,
    question: "10) Which layer of the OSI model deals specifically with physical transmission characteristics such as cable type, voltage, and bit rate?",
    options: ["A) Data Link Layer", "B) Network Layer", "C) Physical Layer", "D) Transport Layer"],
    answer: "C"
  },

  // Lecture 3: Core Performance Metrics and HTTP Protocol
  {
    id: 21,
    question: "1) What is the term for the actual rate at which bits are transferred between a sender and a receiver?",
    options: ["A) Bandwidth", "B) Propagation speed", "C) Throughput", "D) Transmission rate"],
    answer: "C"
  },
  {
    id: 22,
    question: "2) What is the default port number used by the HTTP protocol?",
    options: ["A) 21", "B) 23", "C) 25", "D) 80"],
    answer: "D"
  },
  {
    id: 23,
    question: "3) Which source of packet delay is calculated as (Packet Length/Link Bandwidth)?",
    options: ["A) Propagation delay", "B) Queuing delay", "C) Processing delay", "D) Transmission delay"],
    answer: "D"
  },
  {
    id: 24,
    question: "4) An HTTP response code of 404 indicates what status?",
    options: ["A) OK", "B) Bad Request", "C) Not Found", "D) Internal Server Error"],
    answer: "C"
  },
  {
    id: 25,
    question: "5) What is the phenomenon that occurs when a packet arrives at a router whose buffer (queue) is completely full?",
    options: ["A) Increased transmission delay", "B) Packet loss", "C) Decreased propagation delay", "D) Increased bandwidth"],
    answer: "B"
  },
  {
    id: 26,
    question: "6) HTTP operates over which transport layer protocol to ensure reliable data delivery?",
    options: ["A) UDP", "B) IP", "C) TCP", "D) ICMP"],
    answer: "C"
  },
  {
    id: 27,
    question: "7) The total nodal delay is the sum of which four components?",
    options: ["A) Sending, receiving, processing, storing", "B) Processing, queuing, transmission, propagation", "C) Client, server, router, link", "D) Header, trailer, data, error"],
    answer: "B"
  },
  {
    id: 28,
    question: "8) The bottleneck link in a network path is defined as the link that:",
    options: ["A) Has the highest bandwidth", "B) Limits the overall end-to-end throughput", "C) Is physically the longest", "D) Experiences the least amount of queuing delay"],
    answer: "B"
  },
  {
    id: 29,
    question: "9) Why is HTTP considered a 'Stateless Protocol'?",
    options: ["A) It uses UDP for transfer", "B) It supports only one user at a time", "C) The server maintains no information about past client requests", "D) It encrypts all communications"],
    answer: "C"
  },
  {
    id: 30,
    question: "10) What is the main performance benefit of using Persistent HTTP over Non-Persistent HTTP?",
    options: ["A) It removes the need for TCP", "B) It requires fewer DNS lookups", "C) It reduces RTT overhead by reusing a single TCP connection for multiple objects", "D) It eliminates queuing delay at the router"],
    answer: "C"
  },

  // Lecture 4: Application Layer Services
  {
    id: 31,
    question: "1) What is the main purpose of the Domain Name System (DNS)?",
    options: ["A) Transfer files", "B) Send emails", "C) Translate hostnames to IP addresses", "D) Secure network connections"],
    answer: "C"
  },
  {
    id: 32,
    question: "2) Which protocol is used for sending (pushing) email messages between mail servers?",
    options: ["A) POP3", "B) IMAP", "C) SMTP", "D) HTTP"],
    answer: "C"
  },
  {
    id: 33,
    question: "3) What HTTP status code is sent in response to a Conditional GET request if the cached object is still valid?",
    options: ["A) 200 OK", "B) 404 Not Found", "C) 304 Not Modified", "D) 500 Internal Error"],
    answer: "C"
  },
  {
    id: 34,
    question: "4) Which DNS record type maps a human-readable hostname to its official IP address?",
    options: ["A) MX", "B) NS", "C) A", "D) CNAME"],
    answer: "C"
  },
  {
    id: 35,
    question: "5) Telnet is considered insecure for remote login because it transmits data:",
    options: ["A) Using SSH", "B) Encrypted with a weak algorithm", "C) In plain text (unencrypted)", "D) Only via UDP"],
    answer: "C"
  },
  {
    id: 36,
    question: "6) What is the benefit of using a Web Cache (Proxy Server)?",
    options: ["A) Increased server processing time", "B) Reduced client response time and less traffic on the access link", "C) Guaranteed security for all transactions", "D) Faster physical transmission delay"],
    answer: "B"
  },
  {
    id: 37,
    question: "7) The email protocol IMAP offers which key advantage over POP3?",
    options: ["A) Faster download speed", "B) Keeps all messages stored on the server for synchronization", "C) Automatically deletes messages after client retrieval", "D) Works without an internet connection"],
    answer: "B"
  },
  {
    id: 38,
    question: "8) The query sent by a client host to its Local DNS Server is typically:",
    options: ["A) Iterative", "B) Recursive", "C) Conditional", "D) Authoritative"],
    answer: "B"
  },
  {
    id: 39,
    question: "9) An Iterative DNS query is characterized by:",
    options: ["A) The requesting server demanding the final answer", "B) The requesting server forwarding the request to a sequence of servers", "C) The responding server providing the address of another server (referral)", "D) The requesting host querying the root server directly"],
    answer: "C"
  },
  {
    id: 40,
    question: "10) Which of the following is the secure, encrypted alternative protocol used for remote access instead of Telnet?",
    options: ["A) FTP", "B) HTTP", "C) POP3", "D) SSH"],
    answer: "D"
  },

  // Lecture 5: Transport Layer (TCP and UDP)
  {
    id: 41,
    question: "1) What is the main function of the Transport Layer?",
    options: ["A) Routing", "B) Multiplexing applications", "C) Physical transmission", "D) Logical addressing"],
    answer: "B"
  },
  {
    id: 42,
    question: "2) Which transport protocol is connectionless and provides unreliable service?",
    options: ["A) TCP", "B) UDP", "C) FTP", "D) SMTP"],
    answer: "B"
  },
  {
    id: 43,
    question: "3) What is the size of the UDP header?",
    options: ["A) 4 bytes", "B) 8 bytes", "C) 16 bytes", "D) 20 bytes"],
    answer: "B"
  },
  {
    id: 44,
    question: "4) Which mechanism does UDP use to detect if a segment has been corrupted during transmission?",
    options: ["A) Sequence numbers", "B) Acknowledgements", "C) Flow control", "D) Checksum"],
    answer: "D"
  },
  {
    id: 45,
    question: "5) What is the range of well-known port numbers (Well-known ports)?",
    options: ["A) 1024-65535", "B) 0-1023", "C) 49152-65535", "D) 1-1000"],
    answer: "B"
  },
  {
    id: 46,
    question: "6) Which process uses port numbers and IP addresses to deliver an incoming segment to the correct application process on the receiving host?",
    options: ["A) Multiplexing", "B) Routing", "C) Demultiplexing", "D) Segmentation"],
    answer: "C"
  },
  {
    id: 47,
    question: "7) Which type of application is most likely to use UDP due to its tolerance for data loss but need for low delay?",
    options: ["A) Email (SMTP)", "B) File transfer (FTP)", "C) Video streaming", "D) Web browsing (HTTP)"],
    answer: "C"
  },
  {
    id: 48,
    question: "8) The identity of a unique TCP connection (socket) is defined by a 4-tuple consisting of:",
    options: ["A) Source IP, Destination IP, Protocol, MAC Address", "B) Source IP, Source Port, Destination IP, TCP Header Size", "C) Source IP, Source Port, Destination IP, Destination Port", "D) Protocol, Port Number, Sequence Number, Checksum"],
    answer: "C"
  },
  {
    id: 49,
    question: "9) What is the primary function of the three-way handshake in TCP?",
    options: ["A) Data flow control", "B) Connection establishment", "C) Connection termination", "D) Error detection"],
    answer: "B"
  },
  {
    id: 50,
    question: "10) In the Reliable Data Transfer protocol (rdt3.0), what crucial mechanism is introduced specifically to handle the loss of packets or acknowledgements?",
    options: ["A) Sequence numbers", "B) Checksum", "C) Timer", "D) Flow control"],
    answer: "C"
  }
];
const QUESTIONS = [
  ...mcqData
];