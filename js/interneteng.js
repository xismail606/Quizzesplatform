const MCQ_DATA = [
  // Lecture 1: Introduction to Computer Networks
  { id: 1, question: "1) Which of the following is considered part of the 'Network Edge'?", options: ["A) Routers", "B) Switches", "C) End systems (Hosts)", "D) Fiber optic cables"], answer: "C" },
  { id: 2, question: "2) Protocols define the format and order of messages sent and received among network entities.", options: ["A) True", "B) False"], answer: "A" },
  { id: 3, question: "3) In DSL, data is transmitted over which existing infrastructure?", options: ["A) Cable TV lines", "B) Telephone lines", "C) Satellite links", "D) Power lines"], answer: "B" },
  { id: 4, question: "4) Packet-switching uses 'Store-and-Forward' transmission.", options: ["A) True", "B) False"], answer: "A" },
  { id: 5, question: "5) Which switching method reserves a dedicated end-to-end resource (circuit) for a call?", options: ["A) Packet switching", "B) Message switching", "C) Circuit switching", "D) Hybrid switching"], answer: "C" },
  { id: 6, question: "6) Frequency Division Multiplexing (FDM) shares the transmission medium by dividing it into different time slots.", options: ["A) True", "B) False"], answer: "B" },
  { id: 7, question: "7) What is the main advantage of packet switching over circuit switching?", options: ["A) Guaranteed bandwidth", "B) Lower delay", "C) Better sharing of resources (Efficient)", "D) Simplicity"], answer: "C" },
  { id: 8, question: "8) A Tier-1 ISP provides national and international coverage and connects directly to other Tier-1 ISPs.", options: ["A) True", "B) False"], answer: "A" },
  { id: 9, question: "9) What does RFC stand for in Internet standards?", options: ["A) Ready for Communication", "B) Request for Comments", "C) Router Forwarding Control", "D) Random Frequency Channel"], answer: "B" },
  { id: 10, question: "10) In packet switching, if the arrival rate to a link exceeds the link capacity for a period of time, packets will be queued.", options: ["A) True", "B) False"], answer: "A" },
  { id: 11, question: "11) Which access network is typically shared by many users in a neighborhood?", options: ["A) DSL", "B) Cable Network (HFC)", "C) Dial-up", "D) Enterprise LAN"], answer: "B" },
  { id: 12, question: "12) 'Statistical Multiplexing' is used in circuit switching.", options: ["A) True", "B) False"], answer: "B" },
  { id: 13, question: "13) What is the unit of data in packet switching?", options: ["A) Circuit", "B) Bit", "C) Packet", "D) Slot"], answer: "C" },
  { id: 14, question: "14) An IXP (Internet Exchange Point) is where different ISPs interconnect.", options: ["A) True", "B) False"], answer: "A" },
  { id: 15, question: "15) Guided media involves signals propagating in solid media like copper or fiber.", options: ["A) True", "B) False"], answer: "A" },
  { id: 16, question: "16) Which of the following is NOT an end system?", options: ["A) Smartphone", "B) Web Server", "C) Router", "D) Laptop"], answer: "C" },
  { id: 17, question: "17) TDM stands for Time Division Multiplexing.", options: ["A) True", "B) False"], answer: "A" },
  { id: 18, question: "18) What happens in circuit switching if a user does not send data during their reserved time?", options: ["A) The resource is given to another user", "B) The resource is wasted", "C) The transmission speed increases", "D) The connection is terminated"], answer: "B" },
  { id: 19, question: "19) Packet switching can allow more users to use the network compared to circuit switching.", options: ["A) True", "B) False"], answer: "A" },
  { id: 20, question: "20) The 'Network Core' is primarily a mesh of interconnected routers.", options: ["A) True", "B) False"], answer: "A" },

  // Lecture 2: Physical Media & Layering Models
  { id: 21, question: "1) Which twisted-pair category is commonly used for 10Gbps Ethernet?", options: ["A) Cat 3", "B) Cat 5", "C) Cat 6", "D) Cat 1"], answer: "C" },
  { id: 22, question: "2) Fiber optic cable is immune to electromagnetic interference (EMI).", options: ["A) True", "B) False"], answer: "A" },
  { id: 23, question: "3) What is the PDU (Protocol Data Unit) of the Transport Layer?", options: ["A) Frame", "B) Datagram/Packet", "C) Segment", "D) Bit"], answer: "C" },
  { id: 24, question: "4) The OSI model consists of 5 layers.", options: ["A) True", "B) False"], answer: "B" },
  { id: 25, question: "5) Which layer is responsible for routing datagrams from source to destination?", options: ["A) Physical Layer", "B) Network Layer", "C) Transport Layer", "D) Application Layer"], answer: "B" },
  { id: 26, question: "6) Encapsulation happens at the source, while Decapsulation happens at the destination.", options: ["A) True", "B) False"], answer: "A" },
  { id: 27, question: "7) Which layer in the Internet stack (TCP/IP) deals with bits 'on the wire'?", options: ["A) Link Layer", "B) Network Layer", "C) Physical Layer", "D) Presentation Layer"], answer: "C" },
  { id: 28, question: "8) Coaxial cable can carry multiple channels at different frequencies (broadband).", options: ["A) True", "B) False"], answer: "A" },
  { id: 29, question: "9) What is added to the data at each layer during encapsulation?", options: ["A) Payload", "B) Trailer only", "C) Header", "D) Nothing"], answer: "C" },
  { id: 30, question: "10) Radio is considered a 'Guided' transmission medium.", options: ["A) True", "B) False"], answer: "B" },
  { id: 31, question: "11) Which OSI layer is responsible for encryption and compression?", options: ["A) Session Layer", "B) Presentation Layer", "C) Application Layer", "D) Transport Layer"], answer: "B" },
  { id: 32, question: "12) Ethernet and WiFi operate at the Link Layer.", options: ["A) True", "B) False"], answer: "A" },
  { id: 33, question: "13) What is the correct order of the TCP/IP layers from top to bottom?", options: ["A) Network, Transport, Link, Physical, Application", "B) Application, Transport, Network, Link, Physical", "C) Physical, Link, Network, Transport, Application", "D) Application, Network, Transport, Link, Physical"], answer: "B" },
  { id: 34, question: "14) A switch usually processes up to the Link layer.", options: ["A) True", "B) False"], answer: "A" },
  { id: 35, question: "15) Twisted pair (TP) consists of two insulated copper wires.", options: ["A) True", "B) False"], answer: "A" },
  { id: 36, question: "16) Which media has the lowest error rate over long distances?", options: ["A) Twisted Pair", "B) Coaxial Cable", "C) Fiber Optic", "D) Radio"], answer: "C" },
  { id: 37, question: "17) In the OSI model, the Session layer is layer number 5.", options: ["A) True", "B) False"], answer: "A" },
  { id: 38, question: "18) IP (Internet Protocol) belongs to the Transport layer.", options: ["A) True", "B) False"], answer: "B" },
  { id: 39, question: "19) A router is considered a 'Layer 3' device.", options: ["A) True", "B) False"], answer: "A" },
  { id: 40, question: "20) Naming and addressing (like IP addresses) are used for encapsulation headers.", options: ["A) True", "B) False"], answer: "A" },

  // Lecture 3: Performance & HTTP
  { id: 41, question: "1) Which delay component depends on the distance between two routers?", options: ["A) Transmission delay", "B) Propagation delay", "C) Queuing delay", "D) Processing delay"], answer: "B" },
  { id: 42, question: "2) Transmission delay is calculated as L / R (Packet length / Link bandwidth).", options: ["A) True", "B) False"], answer: "A" },
  { id: 43, question: "3) Traffic intensity (L * a / R) should be greater than 1 for a stable network.", options: ["A) True", "B) False"], answer: "B" },
  { id: 44, question: "4) HTTP is a 'Stateless' protocol.", options: ["A) True", "B) False"], answer: "A" },
  { id: 45, question: "5) What does the HTTP status code '404' mean?", options: ["A) OK", "B) Moved Permanently", "C) Not Found", "D) Bad Request"], answer: "C" },
  { id: 46, question: "6) Non-persistent HTTP allows sending multiple objects over a single TCP connection.", options: ["A) True", "B) False"], answer: "B" },
  { id: 47, question: "7) Which delay is variable and depends on network congestion?", options: ["A) Processing delay", "B) Transmission delay", "C) Queuing delay", "D) Propagation delay"], answer: "C" },
  { id: 48, question: "8) Web Caching (Proxy Server) helps reduce response time for client requests.", options: ["A) True", "B) False"], answer: "A" },
  { id: 49, question: "9) What is RTT?", options: ["A) Real Transfer Time", "B) Round Trip Time", "C) Router Transmission Time", "D) Resource Transfer Technology"], answer: "B" },
  { id: 50, question: "10) HTTP uses UDP as its underlying transport protocol.", options: ["A) True", "B) False"], answer: "B" },
  { id: 51, question: "11) In the 'Conditional GET' mechanism, which header is used?", options: ["A) If-Modified-Since", "B) Date", "C) User-Agent", "D) Content-Type"], answer: "A" },
  { id: 52, question: "12) Throughput is the rate at which bits are actually transferred between sender and receiver.", options: ["A) True", "B) False"], answer: "A" },
  { id: 53, question: "13) A 'Cookie' is used by websites to keep track of user state.", options: ["A) True", "B) False"], answer: "A" },
  { id: 54, question: "14) What is the default port for HTTP?", options: ["A) 443", "B) 21", "C) 80", "D) 25"], answer: "C" },
  { id: 55, question: "15) Propagation delay is the time it takes to push all packet bits onto the link.", options: ["A) True", "B) False"], answer: "B" },
  { id: 56, question: "16) Packet loss occurs when a router's buffer is full.", options: ["A) True", "B) False"], answer: "A" },
  { id: 57, question: "17) What is the response status code for 'OK'?", options: ["A) 400", "B) 200", "C) 301", "D) 505"], answer: "B" },
  { id: 58, question: "18) A Proxy server acts as both a client and a server.", options: ["A) True", "B) False"], answer: "A" },
  { id: 59, question: "19) Packet delay = d_proc + d_queue + d_trans + d_prop.", options: ["A) True", "B) False"], answer: "A" },
  { id: 60, question: "20) Persistent HTTP without pipelining takes 2 RTTs for each referenced object.", options: ["A) True", "B) False"], answer: "B" },

  // Lecture 4: DNS, Email & FTP
  { id: 61, question: "1) What is the primary function of DNS?", options: ["A) Transferring files", "B) Translating hostnames to IP addresses", "C) Sending emails", "D) Web browsing"], answer: "B" },
  { id: 62, question: "2) DNS is a centralized database system.", options: ["A) True", "B) False"], answer: "B" },
  { id: 63, question: "3) Which DNS server is the last resort and contains the actual mapping?", options: ["A) Root DNS server", "B) TLD DNS server", "C) Authoritative DNS server", "D) Local DNS server"], answer: "C" },
  { id: 64, question: "4) FTP uses two parallel TCP connections: Control and Data.", options: ["A) True", "B) False"], answer: "A" },
  { id: 65, question: "5) Which protocol is used to send email messages from a client to a server?", options: ["A) POP3", "B) IMAP", "C) SMTP", "D) HTTP"], answer: "C" },
  { id: 66, question: "6) Telnet is more secure than SSH because it encrypts all data.", options: ["A) True", "B) False"], answer: "B" },
  { id: 67, question: "7) Which DNS query type puts the burden of name resolution on the queried name server?", options: ["A) Iterative", "B) Recursive", "C) Hierarchical", "D) Distributed"], answer: "B" },
  { id: 68, question: "8) The Top-Level Domain (TLD) server is responsible for .com, .org, and .edu.", options: ["A) True", "B) False"], answer: "A" },
  { id: 69, question: "9) What is the port number for SMTP?", options: ["A) 80", "B) 25", "C) 110", "D) 21"], answer: "B" },
  { id: 70, question: "10) POP3 is a 'Download-and-Delete' protocol by default.", options: ["A) True", "B) False"], answer: "A" },
  { id: 71, question: "11) Unlike POP3, IMAP allows users to organize emails into folders on the server.", options: ["A) True", "B) False"], answer: "A" },
  { id: 72, question: "12) FTP's 'Control' connection is 'Out-of-Band.'", options: ["A) True", "B) False"], answer: "A" },
  { id: 73, question: "13) What is the default port for FTP Control?", options: ["A) 20", "B) 21", "C) 22", "D) 23"], answer: "B" },
  { id: 74, question: "14) DNS uses TCP as its transport protocol for queries.", options: ["A) True", "B) False"], answer: "B" },
  { id: 75, question: "15) Mail Access Protocols (like POP3/IMAP) are used to pull mail from the server.", options: ["A) True", "B) False"], answer: "A" },
  { id: 76, question: "16) Which DNS record type contains the hostname to IP address mapping?", options: ["A) NS", "B) CNAME", "C) Type A", "D) MX"], answer: "C" },
  { id: 77, question: "17) SMTP uses persistent connections.", options: ["A) True", "B) False"], answer: "A" },
  { id: 78, question: "18) Local DNS servers (provided by ISP) are not strictly part of the DNS hierarchy.", options: ["A) True", "B) False"], answer: "A" },
  { id: 79, question: "19) SSH stands for Secure Shell.", options: ["A) True", "B) False"], answer: "A" },
  { id: 80, question: "20) DNS caching helps improve performance by reducing the number of queries to the hierarchy.", options: ["A) True", "B) False"], answer: "A" },

  // Lecture 5: Transport Layer & TCP/UDP
  { id: 81, question: "1) The Transport Layer provides logical communication between ______?", options: ["A) Hosts", "B) Routers", "C) Processes", "D) Links"], answer: "C" },
  { id: 82, question: "2) UDP is a connection-oriented, reliable protocol.", options: ["A) True", "B) False"], answer: "B" },
  { id: 83, question: "3) Which protocol is used for applications like streaming video or DNS where speed is more important than reliability?", options: ["A) TCP", "B) IP", "C) UDP", "D) FTP"], answer: "C" },
  { id: 84, question: "4) The TCP Three-Way Handshake involves SYN, SYN-ACK, and ACK messages.", options: ["A) True", "B) False"], answer: "A" },
  { id: 85, question: "5) What does 'Flow Control' in TCP prevent?", options: ["A) Network congestion", "B) Sender overflowing the receiver's buffer", "C) Packet loss due to noise", "D) Unauthorized access"], answer: "B" },
  { id: 86, question: "6) UDP does not have a 'Checksum' field in its header.", options: ["A) True", "B) False"], answer: "B" },
  { id: 87, question: "7) Which field in the TCP header is used to ensure data is reassembled in the correct order?", options: ["A) Port Number", "B) Sequence Number", "C) Window Size", "D) Checksum"], answer: "B" },
  { id: 88, question: "8) Multiplexing is the job of gathering data chunks from different sockets and adding headers.", options: ["A) True", "B) False"], answer: "A" },
  { id: 89, question: "9) What is the size of a TCP header (without options)?", options: ["A) 8 bytes", "B) 16 bytes", "C) 20 bytes", "D) 32 bytes"], answer: "C" },
  { id: 90, question: "10) TCP provides 'Cumulative Acknowledgments.'", options: ["A) True", "B) False"], answer: "A" },
  { id: 91, question: "11) In TCP, the 'Window Size' field is used for congestion control only.", options: ["A) True", "B) False"], answer: "B" },
  { id: 92, question: "12) UDP header size is 8 bytes.", options: ["A) True", "B) False"], answer: "A" },
  { id: 93, question: "13) What is the purpose of the 'Timeout' in RDT (Reliable Data Transfer)?", options: ["A) To stop the connection", "B) To retransmit lost packets", "C) To increase speed", "D) To check for errors"], answer: "B" },
  { id: 94, question: "14) A TCP socket is identified by a 4-tuple: (Source IP, Source Port, Dest IP, Dest Port).", options: ["A) True", "B) False"], answer: "A" },
  { id: 95, question: "15) UDP provides 'Best-Effort' delivery.", options: ["A) True", "B) False"], answer: "A" },
  { id: 96, question: "16) Which protocol uses 'Congestion Control' to prevent the network from becoming overloaded?", options: ["A) UDP", "B) IP", "C) TCP", "D) HTTP"], answer: "C" },
  { id: 97, question: "17) Retransmission in TCP can be triggered by a timeout or triple duplicate ACKs.", options: ["A) True", "B) False"], answer: "A" },
  { id: 98, question: "18) Transport layer protocols run in the core routers.", options: ["A) True", "B) False"], answer: "B" },
  { id: 99, question: "19) TCP is 'Full Duplex,' meaning data can flow in both directions simultaneously.", options: ["A) True", "B) False"], answer: "A" },
  { id: 100, question: "20) The initial sequence number in TCP is always zero.", options: ["A) True", "B) False"], answer: "B" },
  // Lecture 6: Transport Layer (Pipelining & TCP)
  { 
    id: 101, 
    question: "101) In Go-Back-N (GBN), what does the receiver do when it receives an out-of-order packet?", 
    options: ["A) Buffers it for later.", "B) Discards it and resends an ACK for the last in-order packet.", "C) Sends a NACK for the missing packet."], 
    answer: "B" 
  },
  { 
    id: 102, 
    question: "102) In Selective Repeat (SR), the sender retransmits all unacknowledged packets in the window upon a single timeout.", 
    options: ["A) True", "B) False"], 
    answer: "B" 
  },
  { 
    id: 103, 
    question: "103) Which flag in the TCP header is used to signal the start of a connection?", 
    options: ["A) ACK", "B) FIN", "C) SYN"], 
    answer: "C" 
  },
  { 
    id: 104, 
    question: "104) TCP sequence numbers are based on the number of segments sent, not the number of bytes.", 
    options: ["A) True", "B) False"], 
    answer: "B" 
  },
  { 
    id: 105, 
    question: "105) What is the primary purpose of the 'rwnd' (Receive Window) field in the TCP header?", 
    options: ["A) Congestion control.", "B) Flow control (to prevent overwhelming the receiver).", "C) Error detection."], 
    answer: "B" 
  },
  { 
    id: 106, 
    question: "106) Pipelining improves network utilization by allowing multiple 'in-flight' packets.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },
  { 
    id: 107, 
    question: "107) The TCP Three-Way Handshake involves which sequence of flags?", 
    options: ["A) SYN -> ACK -> SYN", "B) SYN -> SYN-ACK -> ACK", "C) SYN -> FIN -> ACK"], 
    answer: "B" 
  },
  { 
    id: 108, 
    question: "108) UDP provides ordered delivery and error correction.", 
    options: ["A) True", "B) False"], 
    answer: "B" 
  },
  { 
    id: 109, 
    question: "109) TCP Fast Retransmit is triggered after the sender receives how many duplicate ACKs?", 
    options: ["A) 1", "B) 2", "C) 3"], 
    answer: "C" 
  },
  { 
    id: 110, 
    question: "110) A cumulative ACK in TCP indicates that all bytes up to the sequence number have been received.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },
  { 
    id: 111, 
    question: "111) What is the maximum segment size (MSS) typically limited by?", 
    options: ["A) Application layer data.", "B) Maximum Transmission Unit (MTU) of the link layer.", "C) CPU speed."], 
    answer: "B" 
  },
  { 
    id: 112, 
    question: "112) Closing a TCP connection is typically a 4-way handshake process.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },
  { 
    id: 113, 
    question: "113) Which of these applications is more likely to use UDP?", 
    options: ["A) HTTP", "B) FTP", "C) VoIP (Voice over IP)"], 
    answer: "C" 
  },
  { 
    id: 114, 
    question: "114) The transport layer provides logical communication between hosts.", 
    options: ["A) True", "B) False"], 
    answer: "B" 
  },
  { 
    id: 115, 
    question: "115) In SR, if packet 2 is lost but 0, 1, and 3 are received, what does the receiver send for packet 3?", 
    options: ["A) ACK 1", "B) ACK 3", "C) NACK 2"], 
    answer: "B" 
  },
  { 
    id: 116, 
    question: "116) Retransmission in TCP can be caused by a timeout or triple duplicate ACKs.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },
  { 
    id: 117, 
    question: "117) What is the size of the standard TCP header without options?", 
    options: ["A) 8 bytes", "B) 20 bytes", "C) 40 bytes"], 
    answer: "B" 
  },
  { 
    id: 118, 
    question: "118) UDP header size is 16 bytes.", 
    options: ["A) True", "B) False"], 
    answer: "B" 
  },
  { 
    id: 119, 
    question: "119) Which field is used to detect bit-level errors in the segment?", 
    options: ["A) Sequence number", "B) Checksum", "C) Window size"], 
    answer: "B" 
  },
  { 
    id: 120, 
    question: "120) Full duplex data means bi-directional flow in the same connection.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },

  // Lecture 7: Network Layer - Data Plane
  { 
    id: 121, 
    question: "121) What is the 'Data Plane' function in a router?", 
    options: ["A) Planning the trip from source to destination.", "B) Moving packets from an input port to the appropriate output port (Forwarding).", "C) Managing routing protocols."], 
    answer: "B" 
  },
  { 
    id: 122, 
    question: "122) Routing is a local, per-router function.", 
    options: ["A) True", "B) False"], 
    answer: "B" 
  },
  { 
    id: 123, 
    question: "123) Which network type maintains connection state in every router along a path?", 
    options: ["A) Datagram networks.", "B) Virtual Circuit (VC) networks.", "C) Peer-to-peer networks."], 
    answer: "B" 
  },
  { 
    id: 124, 
    question: "124) Datagram networks forward packets based on the destination host address.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },
  { 
    id: 125, 
    question: "125) When matching a destination address, a router uses the:", 
    options: ["A) Shortest prefix.", "B) Longest prefix matching.", "C) Exact match only."], 
    answer: "B" 
  },
  { 
    id: 126, 
    question: "126) IPv4 datagram reassembly happens at every intermediate router.", 
    options: ["A) True", "B) False"], 
    answer: "B" 
  },
  { 
    id: 127, 
    question: "127) What is the primary motivation for NAT (Network Address Translation)?", 
    options: ["A) Speeding up the internet.", "B) Using a single IP address for multiple devices in a local network.", "C) Encrypting data packets."], 
    answer: "B" 
  },
  { 
    id: 128, 
    question: "128) IPv6 addresses are 64 bits long.", 
    options: ["A) True", "B) False"], 
    answer: "B" 
  },
  { 
    id: 129, 
    question: "129) What does 'MTU' stand for?", 
    options: ["A) Minimum Transfer Unit.", "B) Maximum Transfer Unit (largest possible link-level frame).", "C) Multi-Tier Unit."], 
    answer: "B" 
  },
  { 
    id: 130, 
    question: "130) DHCP allows a host to dynamically obtain an IP address from a network server.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },
  { 
    id: 131, 
    question: "131) Which organization manages IP address allocation and DNS?", 
    options: ["A) IEEE", "B) ICANN", "C) IETF"], 
    answer: "B" 
  },
  { 
    id: 132, 
    question: "132) IPv6 allows fragmentation at intermediate routers to speed up processing.", 
    options: ["A) True", "B) False"], 
    answer: "B" 
  },
  { 
    id: 133, 
    question: "133) What is 'Tunneling'?", 
    options: ["A) Encapsulating an IPv6 datagram as a payload in an IPv4 datagram.", "B) Creating a physical tunnel for cables.", "C) A method for increasing bandwidth."], 
    answer: "A" 
  },
  { 
    id: 134, 
    question: "134) A router examines header fields in all IP datagrams passing through it.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },
  { 
    id: 135, 
    question: "135) How many bytes is the typical IPv4 header?", 
    options: ["A) 10 bytes", "B) 20 bytes", "C) 40 bytes"], 
    answer: "B" 
  },
  { 
    id: 136, 
    question: "136) 10.0.0.0/8 is a range of private IP addresses.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },
  { 
    id: 137, 
    question: "137) What is the role of the 'TTL' (Time To Live) field in IP?", 
    options: ["A) To record the time sent.", "B) To prevent packets from circulating infinitely by being decremented at each router.", "C) To determine the speed of the link."], 
    answer: "B" 
  },
  { 
    id: 138, 
    question: "138) NAT violates the end-to-end argument.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },
  { 
    id: 139, 
    question: "139) Which field in IPv6 identifies datagrams in the same 'flow'?", 
    options: ["A) Next Header", "B) Flow Label", "C) Hop Limit"], 
    answer: "B" 
  },
  { 
    id: 140, 
    question: "140) CIDR (Classless InterDomain Routing) uses an arbitrary length for the subnet portion of an address.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },

  // Lecture 8: Network Layer - Control Plane
  { 
    id: 141, 
    question: "141) In graph abstraction, what do the edges represent?", 
    options: ["A) Routers.", "B) Communication links.", "C) IP addresses."], 
    answer: "B" 
  },
  { 
    id: 142, 
    question: "142) 'Good' paths in routing protocols always mean the fastest path.", 
    options: ["A) True", "B) False"], 
    answer: "B" 
  },
  { 
    id: 143, 
    question: "143) Which routing algorithm requires all routers to have complete topology and link cost info?", 
    options: ["A) Distance Vector (DV).", "B) Link State (LS) / Dijkstra.", "C) Path Vector."], 
    answer: "B" 
  },
  { 
    id: 144, 
    question: "144) Distance Vector algorithms are decentralized and iterative.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },
  { 
    id: 145, 
    question: "145) The Bellman-Ford equation is used in which algorithm?", 
    options: ["A) Dijkstra.", "B) Distance Vector.", "C) BGP."], 
    answer: "B" 
  },
  { 
    id: 146, 
    question: "146) Dijkstra's algorithm gives the forwarding table for the node it is run on.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },
  { 
    id: 147, 
    question: "147) What is the 'count-to-infinity' problem associated with?", 
    options: ["A) Link State algorithms.", "B) Distance Vector algorithms (when bad news travels slow).", "C) Hierarchical OSPF."], 
    answer: "B" 
  },
  { 
    id: 148, 
    question: "148) Poison reverse is used to solve routing loops in distance vector.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },
  { 
    id: 149, 
    question: "149) Scalable routing aggregates routers into regions known as:", 
    options: ["A) Subnets.", "B) Autonomous Systems (AS).", "C) LANs."], 
    answer: "B" 
  },
  { 
    id: 150, 
    question: "150) RIP (Routing Information Protocol) uses link-state logic.", 
    options: ["A) True", "B) False"], 
    answer: "B" 
  },
  { 
    id: 151, 
    question: "151) What is the distance metric used by RIP?", 
    options: ["A) Bandwidth.", "B) Hop count (max 15).", "C) Congestion."], 
    answer: "B" 
  },
  { 
    id: 152, 
    question: "152) OSPF (Open Shortest Path First) uses Dijkstra’s algorithm.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },
  { 
    id: 153, 
    question: "153) Which router is at the 'edge' of its own AS and connects to other ASes?", 
    options: ["A) Internal router.", "B) Gateway router.", "C) Backbone router."], 
    answer: "B" 
  },
  { 
    id: 154, 
    question: "154) Static routes change quickly over time.", 
    options: ["A) True", "B) False"], 
    answer: "B" 
  },
  { 
    id: 155, 
    question: "155) OSPF messages are carried directly over:", 
    options: ["A) TCP.", "B) UDP.", "C) IP."], 
    answer: "C" 
  },
  { 
    id: 156, 
    question: "156) Intra-AS routing protocols must be the same for all routers within that AS.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },
  { 
    id: 157, 
    question: "157) Hierarchical OSPF uses which area as the central connector for other areas?", 
    options: ["A) Area 1.", "B) Backbone.", "C) Boundary area."], 
    answer: "B" 
  },
  { 
    id: 158, 
    question: "158) Link State algorithms are generally more robust against incorrect path cost advertisements than Distance Vector.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },
  { 
    id: 159, 
    question: "159) In OSPF, advertisements are flooded to:", 
    options: ["A) Only neighbors.", "B) All routers in the entire AS.", "C) Only gateway routers."], 
    answer: "B" 
  },
  { 
    id: 160, 
    question: "160) A path is a sequence of routers that packets traverse from source to destination.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },

  // Lecture 9: Subnetting & BGP
  { 
    id: 161, 
    question: "161) What does VLSM stand for?", 
    options: ["A) Virtual Link Subnet Mask.", "B) Variable Length Subnet Mask.", "C) Valid Loop Subnet Management."], 
    answer: "B" 
  },
  { 
    id: 162, 
    question: "162) In FLSM, every subnet must have the same prefix length.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },
  { 
    id: 163, 
    question: "163) To support 320 hosts, how many bits must be borrowed for the host portion?", 
    options: ["A) 8 bits (254 hosts).", "B) 9 bits (510 hosts).", "C) 10 bits."], 
    answer: "B" 
  },
  { 
    id: 164, 
    question: "164) BGP (Border Gateway Protocol) is the de facto inter-domain routing protocol.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },
  { 
    id: 165, 
    question: "165) Which BGP connection is used to propagate reachability within an AS?", 
    options: ["A) eBGP.", "B) iBGP.", "C) OSPF."], 
    answer: "B" 
  },
  { 
    id: 166, 
    question: "166) BGP sessions exchange messages over a semi-permanent TCP connection.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },
  { 
    id: 167, 
    question: "167) What is the prefix length for a network with only 2 usable hosts (Point-to-Point)?", 
    options: ["A) /24", "B) /29", "C) /30"], 
    answer: "C" 
  },
  { 
    id: 168, 
    question: "168) The prefix 10.0.0.0/23 provides 510 usable host addresses.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },
  { 
    id: 169, 
    question: "169) Which BGP message is used to advertise new paths?", 
    options: ["A) OPEN", "B) UPDATE", "C) KEEPALIVE"], 
    answer: "B" 
  },
  { 
    id: 170, 
    question: "170) FLSM is more efficient than VLSM because it saves address space.", 
    options: ["A) True", "B) False"], 
    answer: "B" 
  },
  { 
    id: 171, 
    question: "171) What is the broadcast address for the subnet 192.168.1.0/25?", 
    options: ["A) 192.168.1.1", "B) 192.168.1.127", "C) 192.168.1.255"], 
    answer: "B" 
  },
  { 
    id: 172, 
    question: "172) BGP allows a subnet to advertise its existence to the rest of the Internet.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },
  { 
    id: 173, 
    question: "173) Which message reports errors in a previous BGP message?", 
    options: ["A) NOTIFICATION", "B) UPDATE", "C) KEEPALIVE"], 
    answer: "A" 
  },
  { 
    id: 174, 
    question: "174) iBGP is used to obtain reachability info from neighboring ASes.", 
    options: ["A) True", "B) False"], 
    answer: "B" 
  },
  { 
    id: 175, 
    question: "175) What is the subnet mask for a /23 prefix?", 
    options: ["A) 255.255.255.0", "B) 255.255.254.0", "C) 255.255.0.0"], 
    answer: "B" 
  },
  { 
    id: 176, 
    question: "176) Administrative autonomy allows each network admin to control routing in its own network.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },
  { 
    id: 177, 
    question: "177) BGP is described as a 'path vector' protocol because it advertises:", 
    options: ["A) Individual link costs.", "B) Sequences of ASes (paths) to a destination.", "C) Router hop counts."], 
    answer: "B" 
  },
  { 
    id: 178, 
    question: "178) A /30 subnet has 4 total IP addresses, but only 2 are usable for hosts.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },
  { 
    id: 179, 
    question: "179) In VLSM, the broadcast address always ends in which bit pattern relative to the host bits?", 
    options: ["A) All 0s.", "B) All 1s.", "C) 1010."], 
    answer: "B" 
  },
  { 
    id: 180, 
    question: "180) BGP is known as the 'glue that holds the Internet together.'", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },

  // Lecture 10: Link Layer & LANs
  { 
    id: 181, 
    question: "181) What is the PDU (Protocol Data Unit) of the Link Layer?", 
    options: ["A) Segment.", "B) Datagram.", "C) Frame."], 
    answer: "C" 
  },
  { 
    id: 182, 
    question: "182) Link layer services are implemented in the network core routers only.", 
    options: ["A) True", "B) False"], 
    answer: "B" 
  },
  { 
    id: 183, 
    question: "183) Which error detection technique can detect and correct single bit errors?", 
    options: ["A) Single bit parity.", "B) Two-dimensional bit parity.", "C) Standard Checksum."], 
    answer: "B" 
  },
  { 
    id: 184, 
    question: "184) CRC (Cyclic Redundancy Check) is widely used in Ethernet and WiFi.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },
  { 
    id: 185, 
    question: "185) What happens if two nodes transmit at the same time on a broadcast channel?", 
    options: ["A) The signals amplify each other.", "B) A collision occurs.", "C) The router buffers one of them."], 
    answer: "B" 
  },
  { 
    id: 186, 
    question: "186) TDMA (Time Division Multiple Access) allocates a fixed frequency band to each station.", 
    options: ["A) True", "B) False"], 
    answer: "B" 
  },
  { 
    id: 187, 
    question: "187) CSMA (Carrier Sense Multiple Access) 'listen before transmit' means:", 
    options: ["A) If the channel is busy, transmit immediately.", "B) If the channel is idle, transmit the entire frame.", "C) Always wait 10ms before sending."], 
    answer: "B" 
  },
  { 
    id: 188, 
    question: "188) CSMA/CD aborts transmissions quickly if a collision is detected to reduce wastage.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },
  { 
    id: 189, 
    question: "189) How long is a typical MAC address?", 
    options: ["A) 32 bits.", "B) 48 bits.", "C) 128 bits."], 
    answer: "B" 
  },
  { 
    id: 190, 
    question: "190) MAC addresses are hierarchical, meaning they depend on the subnet they are attached to.", 
    options: ["A) True", "B) False"], 
    answer: "B" 
  },
  { 
    id: 191, 
    question: "191) What is the purpose of the ARP (Address Resolution Protocol)?", 
    options: ["A) To find an IP address given a hostname.", "B) To determine a MAC address given an IP address.", "C) To route packets between LANs."], 
    answer: "B" 
  },
  { 
    id: 192, 
    question: "192) An ARP query is sent as a broadcast (destination MAC FF-FF-FF-FF-FF-FF).", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },
  { 
    id: 193, 
    question: "193) Which link layer technology uses 'Token Passing'?", 
    options: ["A) Ethernet.", "B) Token Ring / FDDI.", "C) WiFi."], 
    answer: "B" 
  },
  { 
    id: 194, 
    question: "194) Half-duplex means nodes at both ends can transmit, but not at the same time.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },
  { 
    id: 195, 
    question: "195) Where does the link layer 'adaptor' usually sit?", 
    options: ["A) In the OS kernel only.", "B) On a Network Interface Card (NIC) or a chip.", "C) In the web browser."], 
    answer: "B" 
  },
  { 
    id: 196, 
    question: "196) Error detection bits (EDC) are 100% reliable and never miss an error.", 
    options: ["A) True", "B) False"], 
    answer: "B" 
  },
  { 
    id: 197, 
    question: "197) In Ethernet's CSMA/CD, what is the 'Binary Backoff' used for?", 
    options: ["A) To increase transmission speed.", "B) To randomly wait before retransmitting after a collision.", "C) To encrypt the frame."], 
    answer: "B" 
  },
  { 
    id: 198, 
    question: "198) The Link Layer is responsible for moving a datagram from one node to a physically adjacent node.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  },
  { 
    id: 199, 
    question: "199) Which protocol is used locally to get a frame from one interface to another physically-connected interface?", 
    options: ["A) BGP", "B) MAC Protocol", "C) TCP"], 
    answer: "B" 
  },
  { 
    id: 200, 
    question: "200) ARP is a 'plug-and-play' protocol because nodes create tables without administrator intervention.", 
    options: ["A) True", "B) False"], 
    answer: "A" 
  }
];

const QUESTIONS = [
  ...MCQ_DATA
];