const allQuestions = [
  { 
    id: 1, question: "1) The software consists of……", 
    options: ["a) Program + documentation operating procedures.", "b) Program + hardware manuals.", "c) Instruction + hardware manuals.", "d) Set of programs."], 
    answer: "a" 
  },
  { 
    id: 2, question: "2) What is the difference between software engineering and computer science?", 
    options: ["a) Software engineering deals with hardware, while computer science deals with software", "b) Software engineering is concerned with the development and evolution of software systems, while computer science is concerned with the study of algorithms and data structures", "c) There is no difference.", "d) Computer science focuses on software engineering principles."], 
    answer: "b" 
  },
  { 
    id: 3, question: "3) What is the main goal of requirement engineering?", 
    options: ["a) Designing software interfaces", "b) Testing software products", "c) Finding out and analyzing the services and constraints that the system should provide", "d) Managing software projects"], 
    answer: "c" 
  },
  { 
    id: 4, question: "4) Which of the following is not users of a system requirements document?", 
    options: ["a) Client Engineer", "b) Software Engineer", "c) Client Manager", "d) System Architect"], 
    answer: "c" 
  },
  { 
    id: 5, question: "5) What is the primary difference between functional and not-functional requirements?", 
    options: ["a) Functional requirements are statements of services the system should provide, while not-functional requirements are statements of how the system should react to particular inputs", "b) Functional requirements are statements of services the system should provide, while not-functional requirements are statements of how the system should behave in particular situations", "c) Functional requirements are statements of services the system should provide, while not-functional requirements are statements of constraints on the services or functions offered by the system", "d) None of the mentioned"], 
    answer: "c" 
  },
  { 
    id: 6, question: "6) Which of the following is a concern of product requirements?", 
    options: ["a) Reliability", "b) Usability", "c) Security", "d) All of the mentioned"], 
    answer: "d" 
  },
  { 
    id: 7, question: "7) What is the main objective of Reuse-oriented software engineering?", 
    options: ["a) To develop software systems by building everything from scratch", "b) To reuse existing software components to reduce development time and cost", "c) To ignore previous work and start fresh in every project", "d) To reinvent the wheel for every project"], 
    answer: "b" 
  },
  { 
    id: 8, question: "8) Which of the following is NOT a characteristic of software engineering?", 
    options: ["a) Applying engineering principles to software development", "b) Focusing only on coding and implementation", "c) Using systematic approaches", "d) Incorporating knowledge from other disciplines"], 
    answer: "b" 
  },
  { 
    id: 9, question: "9) What does the term \"software process\" refer to?", 
    options: ["a) A set of activities that lead to the production of a software system", "b) The physical environment in which software development takes place", "c) The tools and technologies used in software development", "d) The documentation produced during software development"], 
    answer: "a" 
  },
  { 
    id: 10, question: "10) What does SDLC stand for?", 
    options: ["a) System Design Life Cycle", "b) Software Design Life Cycle", "c) Software Development Life Cycle", "d) System Development Life cycle"], 
    answer: "c" 
  },
  { 
    id: 11, question: "11) In Plan-driven processes, all of the process activities are planned in advance and progress is measured against this plan.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 12, question: "12) Software costs more to maintain than it does to develop.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 13, question: "13) The waterfall model is an example of an agile process.", 
    options: ["a) True", "b) False"], 
    answer: "b"
  },
  { 
    id: 14, question: "14) There is no ideal software process.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 15, question: "15) For large and complex systems, it is practically impossible to achieve requirements consistency and completeness.", 
    options: ["a) True", "b) False"], 
    answer: "a"
  },
  { 
    id: 16, question: "16) Development processes are less challenging than maintenance processes.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 17, question: "17) A prototype system is an example of 'change tolerance' approach.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 18, question: "18) What is software?", 
    options: ["a) Software is documentation and configuration of data.", "b) Software is a set of programs.", "c) Software is a set of programs, and documentation.", "d) None of the mentioned."], 
    answer: "c" 
  },
  { 
    id: 19, question: "19) Which of these software engineering activities are not a part of software processes?", 
    options: ["a) Software development", "b) Software dependence", "c) Software validation", "d) Software specification"], 
    answer: "b" 
  },
  { 
    id: 20, question: "20) What does the term \"software process\" refer to?", 
    options: ["a) A set of activities that lead to the production of a software system", "b) The physical environment in which software development takes place", "c) The tools and technologies used in software development", "d) The documentation produced during software development"], 
    answer: "a" 
  },
  { 
    id: 21, question: "21) What is the difference between software engineering and computer science?", 
    options: ["a) Computer science focuses on theory and fundamentals, while software engineering is concerned with the practicalities of developing and delivering useful software.", "b) Computer science is concerned with the practicalities of developing and delivering useful software, while software engineering focuses on theory and fundamentals.", "c) None of the mentioned."], 
    answer: "a" 
  },
  { 
    id: 22, question: "22) What are the two fundamental types of software product?", 
    options: ["a) System software and application software", "b) Freeware and shareware", "c) Open-source software and closed-source software", "d) Generic products and customized products"], answer: "d" },
  { 
    id: 23, question: "23) Confidentiality is a key ethical principle. This includes:", 
    options: ["a) Sharing all project details openly on social media.", "b) Protecting sensitive client information even after the project ends.", "c) Discussing project challenges with online forums anonymously.", "d) Disclosing project details to a competitor for personal gain."], answer: "b" },
  { 
    id: 24, question: "24) What does SDLC stand for?", 
    options: ["a) System Design Life Cycle", "b) Software Design Life Cycle", "c) Software Development Life Cycle", "d) System Development Life cycle"], 
    answer: "c" 
  },
  { 
    id: 25, question: "25) Agile methodologies typically:", 
    options: ["a) Have long-term fixed plans and schedules", "b) Require detailed documentation before starting development", "c) Embrace change, even late in development", "d) Avoid customer involvement until software delivery"], 
    answer: "c" 
  },
  { 
    id: 26, question: "26) The goal of software process models is to…………", 
    options: ["a) Manage risks.", "b) Produce high quality software.", "c) All of the mentioned."], 
    answer: "c" 
  },
  { 
    id: 27, question: "27) Software testing is one element of a broader topic that is often referred to as ……..", 
    options: ["a) Verification", "b) Validation", "c) Verification and Validation.", "d) None of these"], 
    answer: "c" 
  },
  { 
    id: 28, question: "28) Which of the following is an example of a reusable software component?", 
    options: ["a) Web services.", "b) .Net framework.", "c) J2EE.", "d) All of the mentioned."], 
    answer: "d" 
  },
  { 
    id: 29, question: "29) What is the main drawback of the waterfall model?", 
    options: ["a) Lack of customer involvement", "b) Inability to handle large projects", "c) Limited documentation", "d) Slow development process"], 
    answer: "a"
  },
  { 
    id: 30, question: "30) Which software engineering activity focuses on transforming requirements into an executable system?", 
    options: ["a) Testing", "b) Maintenance", "c) Implementation", "d) Analysis"], 
    answer: "c" 
  },
  { 
    id: 31, question: "31) Which one is the functional requirement?", 
    options: ["a) High performance of software.", "b) Find the basic salary of an employee.", "c) User friendly interface.", "d) Reliability of software."], 
    answer: "b" 
  },
  { 
    id: 32, question: "32) For custom software, evolution costs often exceed development costs.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 33, question: "33) SDLC is not a well-defined, structured sequence of stages in software engineering to develop the intended software product.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 34, question: "34) There are no universal software engineering methods and techniques that are suitable for all systems and all companies.", 
    options: ["a) True", "b) False"], 
    answer: "a"
  },
  { 
    id: 35, question: "35) The waterfall model is an example of an agile process.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 36, question: "36) The intermediate stages in a reuse-oriented process are the same of the waterfall model.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  {
    id: 37, question: "37) Change is inevitable in all large software projects.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 38, question: "38) A prototype system is an example of 'Change avoidance' approach.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  // mcqQuestions3
  { 
    id: 39, question: "39) What is software?", 
    options: ["a) Software is documentation and configuration of data.", "b) Software is a set of programs.", "c) A Software is a set of programs, and documentation.", "d) None of the mentioned."], 
    answer: "c" 
  },
  { 
    id: 40, question: "40) Which of these software engineering activities are not a part of software processes?", 
    options: ["a) Software development", "b) Software dependence", "c) Software validation", "d) Software specification"], 
    answer: "b" 
  },
  { 
    id: 41, question: "41) The software development process is:", 
    options: ["a) A rigid, step-by-step sequence of activities.", "b) A framework for planning, developing, deploying, and maintaining software.", "c) Entirely dependent on the programming language used.", "d) Not applicable in modern software engineering practices."], 
    answer: "b" 
  },
  { 
    id: 42, question: "42) What is the difference between software engineering and computer science?", 
    options: ["a) Computer science focuses on theory and fundamentals, while software engineering is concerned with the practicalities of developing and delivering useful software.", "b) Computer science is concerned with the practicalities of developing and delivering useful software, while software engineering focuses on theory and fundamentals.", "c) None of the mentioned."], 
    answer: "a" 
  },
  { 
    id: 43, question: "43) What is software engineering ethics?", 
    options: ["a) The principles that govern the behavior Of software engineers", "b) The study of computer ethics", "c) The principles that govern the behavior of computers", "d) All of the mentioned"], 
    answer: "a" 
  },
  { 
    id: 44, question: "44) What does the term \"competence\" mean in software engineering ethics?", 
    options: ["a) You should knowingly accept work that is outside your competence.", "b) You should not misrepresent your level of competence.", "c) You should be careful to ensure that the intellectual property of employers.", "d) All of the mentioned."], 
    answer: "b" 
  },
  { 
    id: 45, question: "45) Which of the following best describes a plan-driven approach to software development?", 
    options: ["a) Emphasizes flexibility and customer collaboration", "b) Involves detailed planning and predictable processes", "c) Focuses on rapid delivery of complete software products", "d) Prioritizes software development speed over all other factors"], 
    answer: "b" 
  },
  { 
    id: 46, question: "46) The waterfall model of software development is suitable when:", 
    options: ["a) The project is short.", "b) The best approach to use for projects with large development teams.", "c) There are no ambiguous requirements.", "d) All of the mentioned."], 
    answer: "d" 
  },
  { 
    id: 47, question: "47) Which of the following best describes the incremental development approach?", 
    options: ["a) Developing software in a single, large iteration.", "b) Developing software in small, manageable increments.", "c) Developing software without any planning or design.", "d) Developing software using a waterfall methodology"], 
    answer: "b" 
  },
  { 
    id: 48, question: "48) COTS stands for:", 
    options: ["a) Commercial Off-The-Shelf systems", "b) Commercial Off-The-Shelf states", "c) Commercial Off-The-System state", "d) None of the mentioned"], 
    answer: "a" 
  },
  { 
    id: 49, question: "49) What is the main objective of Reuse-oriented software engineering?", 
    options: ["a) To develop software systems by building everything from scratch.", "b) To reuse existing software components to reduce development time and cost.", "c) To ignore previous work and start fresh in every project", "d) To reinvent the wheel for every project"], 
    answer: "b" 
  },
  { 
    id: 50, question: "50) Requirement engineering process includes which of these steps?", 
    options: ["a) Feasibility study", "b) Requirement Gathering", "c) Software Requirement specification & Validation", "d) All mentioned above"], 
    answer: "d" 
  },
  { 
    id: 51, question: "51) Which process activity involves transforming software design specifications into executable code?", 
    options: ["a) Software deployment", "b) Software maintenance", "c) Software implementation", "d) Software documentation"], 
    answer: "c" 
  },
  { 
    id: 52, question: "52) Which of the following best describes 'Change tolerance'?", 
    options: ["a) This normally involves some form of incremental development.", "b) Proposed changes may be implemented in increments that have not yet been developed.", "c) The software process includes activities that can anticipate possible changes before significant rework is required.", "d) Both a, and b."], 
    answer: "d" 
  },
  // tfQuestions3
  { 
    id: 53, 
    question: "53) For custom software, evolution costs often exceed development costs.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 54, 
    question: "54) Examples of generic products of software are word processors and drawing packages.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 55, 
    question: "55) The waterfall model is a fundamental part of agile approaches.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 56, 
    question: "56) Late increments of the incremental development include the most important required functionality.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 57, 
    question: "57) In reuse-oriented software engineering, reused elements may be configured to adapt their behavior and functionality to a user's requirements.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 58, 
    question: "58) Development processes are less challenging than maintenance processes.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 59, 
    question: "59) Verification ensures that \"Are we building the product right?\"", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 60, 
    question: "60) Real software processes are interleaved sequences of technical and managerial activities with the overall goal of specifying, designing, implementing, and testing a software system.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 61, 
    question: "61) There are no universal software engineering methods and techniques that are suitable for all systems and all companies.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 62, 
    question: "62) Program testing, where the system is executed using simulated test data, is the principal validation technique.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  // mcqQuestions4
  { 
    id: 63, 
    question: "63) Which of the following is NOT a characteristic of software engineering?", 
    options: ["a) Applying engineering principles to software development.", "b) Focusing only on coding and implementation.", "c) Using systematic approaches.", "d) Incorporating knowledge from other disciplines."], 
    answer: "b" 
  },
  { 
    id: 64, 
    question: "64) What does the term \"software process\" refer to?", 
    options: ["a) A set of activities that lead to the production of a software system", "b) The physical environment in which software development takes place", "c) The tools and technologies used in software development", "d) The documentation produced during software development"], 
    answer: "a" 
  },
  { 
    id: 65, 
    question: "65) Which of the following is NOT a benefit of using a software development methodology?", 
    options: ["a) Improved communication and collaboration among stakeholders.", "b) Increased risk of project failure.", "c) Enhanced software quality.", "d) More efficient use of resources."], 
    answer: "b" 
  },
  { 
    id: 66, 
    question: "66) What are the two fundamental types of software product?", 
    options: ["a) System software and application software", "b) Freeware and shareware", "c) Open-source software and closed-source software", "d) Generic products and customized products"], 
    answer: "d" 
  },
  { 
    id: 67, 
    question: "67) Which of the following is/are considered as general issues that affect different types of software?", 
    options: ["a) Security", "b) Business change", "c) Heterogeneity", "d) All of the mentioned"], 
    answer: "d" 
  },
  { 
    id: 68, 
    question: "68) What is the first step in the software development lifecycle?", 
    options: ["a) System Design", "b) Coding", "c) System Testing", "d) Preliminary Investigation and Analysis"], 
    answer: "d" 
  },
  { 
    id: 69, 
    question: "69) What is the main drawback of the waterfall model?", 
    options: ["a) Difficulty of accommodating change", "b) Inability to handle large projects", "c) Limited documentation.", "d) Slow development process."], 
    answer: "a" 
  },
  { 
    id: 70, 
    question: "70) Which of the following is a key advantage of the incremental development approach?", 
    options: ["a) Easier to get customer feedback.", "b) More rapid delivery", "c) The cost of accommodating changing customer requirements is reduced.", "d) All of the mentioned."], 
    answer: "d" 
  },
  { 
    id: 71, 
    question: "71) COTS stands for:", 
    options: ["a) Commercial Off-The-Shelf systems", "b) Commercial Off-The-Shelf states", "c) Commercial Off-The-System state", "d) None of the mentioned"], 
    answer: "a" 
  },
  { 
    id: 72, 
    question: "72) Requirement engineering process includes which of these steps?", 
    options: ["a) Feasibility study", "b) Requirement Gathering", "c) Software Requirement specification & Validation", "d) All mentioned above"], 
    answer: "d" 
  },
  { 
    id: 73, 
    question: "73) Which software engineering activity focuses on transforming requirements into an executable system?", 
    options: ["a) Testing", "b) Maintenance", "c) Implementation", "d) Analysis"], 
    answer: "c" 
  },
  { 
    id: 74, 
    question: "74) What is the main goal of requirement engineering?", 
    options: ["a) Designing software interfaces", "b) Testing software products", "c) Finding out and analyzing the services and constraints that the system should provide.", "d) Managing software projects"], 
    answer: "c" 
  },
  { 
    id: 75, 
    question: "75) Which of the following is not a user of a user requirements document?", 
    options: ["a) Client Engineer", "b) Software Engineer", "c) Client Manager", "d) System Architect"], 
    answer: "b" 
  },
  { 
    id: 76, 
    question: "76) What is the primary difference between functional and non-functional requirements?", 
    options: ["a) Functional requirements are statements of services the system should provide...", "b) Functional requirements are statements of services the system should provide...", "c) Functional requirements are statements of services the system should provide, while non-functional requirements are statements of constraints...", "d) None of the mentioned."], 
    answer: "c" 
  },
  // tfQuestions4
  { 
    id: 77, 
    question: "77) It is often possible to identify which system components implement specific non-functional requirements.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 78, 
    question: "78) Non-functional requirements affect the overall architecture of a system.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 79, 
    question: "79) For large and complex systems, it is practically impossible to achieve consistency and completeness of requirements.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 80, 
    question: "80) Completeness of requirement means that requirements should not have contradictory definitions.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 81, 
    question: "81) Development processes are less challenging than maintenance processes.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 82, 
    question: "82) Change is inevitable in all large software projects.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 83, 
    question: "83) A prototype system is an example of 'Change tolerance' approach.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 84, 
    question: "84) Program testing, where the system is executed using simulated test data, is the principal validation technique.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 85, 
    question: "85) In incremental development, the customer can evaluate the system at an early stage to see if it delivers what is required.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 86, 
    question: "86) There is no ideal software process.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  // mcqQuestions5
  { 
    id: 87, 
    question: "1. Which of the following is NOT a software engineering activity?", 
    options: ["a) Software specification", "b) Software validation", "c) Software procurement", "d) Software evolution"], 
    answer: "c" 
  },
  { 
    id: 88, 
    question: "2. What's the difference between software engineering and computer science?", 
    options: ["a) Computer science focuses on theory and fundamentals, while software engineering is concerned with the practicalities of developing and delivering useful software.", "b) Computer science is concerned with the practicalities of developing and delivering useful software, while software engineering focuses on theory and fundamentals.", "c) None of the mentioned."], 
    answer: "a" 
  },
  { 
    id: 89, 
    question: "3. What is the most important difference between generic software product development and custom software development?", 
    options: ["a) Generic software products are sold to many customers, while custom software is cieveloped for a single customer.", "b) Generic software is always cheaper than custom software.", "c) Custom software is always of higher quality.", "d) There is no difference."], 
    answer: "a" 
  },
  { 
    id: 90, 
    image: "./images/25-28.png",
    question: "4. The following figure is an example of....... ", 
    options: ["a) Use case.", "b) Scenario.", "c) Sequence diagram.", "d) Class diagram."], 
    answer: "a" 
  },
  { 
    id: 91, 
    question: "5. COTS stands for..", 
    options: ["a) Commercial Off-The-Shelf systems", "b) Commercial Off-The-Shelf states", "c) Commercial Off-The-System state", "d) None of the mentioned"], 
    answer: "a" 
  },
  { 
    id: 92, 
    question: "6. What of the following share considered as general issues that affect different types of software", 
    options: ["a) a Security", "b) Business change", "c) Heterogeneity", "d) All of the mentioned"], 
    answer: "d" 
  },
  { 
    id: 93, 
    question: "7. Confidentiality is a key ethical principle. This includes:", 
    options: ["a) Sharing all project details openly on social media.", "b) Protecting sensitive client information even after the project ends.", "c) Discussing project challenges with online forums anonymously.", "d) Disclosing project details to a competitor for personal gain"], 
    answer: "b" 
  },
  { 
    id: 94, 
    image: "./images/25-8.png", 
    question: "8. The following figure describes ", 
    options: ["a) The waterfall model", "b) Incremental development.", "c) Reuse-oriented software engineering", "d) None of the mentioned."], 
    answer: "c" 
  },
  { 
    id: 95, 
    question: "9. Which of the following is a key advantage of the incremental development approach", 
    options: ["a) Easier to get customer feedback.", "b) More rapid delivery", "c) The cost of accommodating changing customer requirements is reduced.", "d) All of the mentioned."], 
    answer: "d" 
  },
  { 
    id: 96, 
    question: "10. What is the meaning of requirement elicitation in software engineering?", 
    options: ["a) Gathering of requirement.", "b) Understanding of requirement.", "c) Getting the requirements from client.", "d) All of the above"], 
    answer: "d" 
  },
  { 
    id: 97, 
    question: "11. Which software engineering activity focuses on transforming requirements into an executable system?", 
    options: ["a) Testing", "b) Maintenance", "c) implementation", "d) Analysis"], 
    answer: "c" 
  },
  { 
    id: 98, 
    question: "12. The general model of the design process could include..", 
    options: ["a) Design inputs.", "b) Design activities.", "c) Design outputs.", "d) All of the mentioned."], 
    answer: "d" 
  },
  { 
    id: 99, 
    question: "13. Software testing is one element of a broader topic that is often referred to as", 
    options: ["a) Verification", "b) Validation", "c) Verification and Validation", "d) None of these"], 
    answer: "c" 
  },
  { 
    id: 100, 
    question: "14. What is the main goal of requirement engineering?", 
    options: ["a) Designing software interfaces", "b) Testing software products", "c) finding out and analyzing the services and constraints that the system should provide.", "d) Managing software projects"], 
    answer: "c" 
  },
  { 
    id: 101, 
    question: "15. Which of the following is a concern of product requirements?", 
    options: ["a) Reliability", "b) Usability", "c) Security", "d) All of the mentioned"], 
    answer: "d" 
  },
  { 
    id: 102, 
    question: "16. Which of the following could define the SRS?", 
    options: ["a) It is the software requirements document.", "b) It is the software requirements specification.", "c) All of the mentioned", "d) None of the above"], 
    answer: "c" 
  },
  { 
    id: 103, 
    question: "17. The user and system requirements should be........", 
    options: ["a) Clear", "b) Complete", "c) Easy to understand.", "d) All of the mentioned."], 
    answer: "d" 
  },
  { 
    id: 104, 
    question: "18. Which of the following statements is best describes a structured natural language..............", 
    options: ["a) It is written in natural language on a standard form or template.", "b) It uses a language like a programming language, but with more abstract features to specify the requirements.", "c) It is graphical models supplemented by text annotations.", "d) All of the mentioned."], 
    answer: "a" 
  },
  { 
    id: 105, 
    question: "19. Which one of the following is not a step of requirement engineering?", 
    options: ["a) elicitation", "b) design", "c) analysis", "d) documentation"], 
    answer: "b" 
  },
  { 
    id: 106, 
    image: "./images/25-20.png",
    question: "20. The following figure represents........ ", 
    options: ["a) IEEE template", "b) Volere template", "c) Design description language.", "d) None of the mentioned"], 
    answer: "b" 
  },
  { 
    id: 107, 
    question: "21. How many activities are conducted in requirement engineering", 
    options: ["a) Three", "b) Four", "c) Five", "d) Six"], 
    answer: "b" 
  },
  { 
    id: 108, 
    question: "22. Which of the following could make the requirements elicitation a difficult process?", 
    options: ["a) Stakeholders often don't know what they want.", "b) Economic environment is dynamic.", "c) Business environment is dynamic", "d) All of the mentioned."], 
    answer: "d" 
  },
  { 
    id: 109, 
    question: "23. Effective interviewers with stakeholders should be......", 
    options: ["a) Open-minded.", "b) Willing to listen to stakeholders.", "c) Having the ability to prompt the interviewee.", "d) All of the mentioned."], 
    answer: "d" 
  },
  { 
    id: 110, 
    question: "24. ......is an observational technique, where the system the working analyst immerses himself or herself in environment.", 
    options: ["a) Ethnography", "b) Scenarios", "c) Interviewing", "d) None of the mentioned"], 
    answer: "a" 
  },
  { 
    id: 111, 
    question: "25. What does the term \"competence\" mean in software engineering ethics?", 
    options: ["a) You should knowingly accept work that is outside your competence.", "b) You should not misrepresent your level of competence.", "c) You should be careful to ensure that the intellectual property of employers.", "d) All of the mentioned."], 
    answer: "b" 
  },
  // tfQuestions5
  { 
    id: 112, 
    question: "1. For custom software, evolution costs often exceed development costs.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 113, 
    question: "2. SDLC is not a well-defined, structured sequence of stages in software engineering to develop the intended software product.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 114, 
    question: "3. There are no universal software engineering methods and techniques that are suitable for all systems and all companies.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 115, 
    question: "4. The agile model is the earliest SDLC approach that was used for software development.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 116, 
    question: "5. Development processes are less challenging than maintenance processes.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 117, 
    question: "6. Change is inevitable in all large software projects.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 118, 
    question: "7. A prototype system is an example of 'Change tolerance' approach.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 119, 
    question: "8. For large and complex systems, it is practically impossible to achieve requirements consistency and completeness.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 120, 
    question: "9. In agile-based approaches, it is preferred to collect user requirements incrementally and write these on cards as user stories.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 121, 
    question: "10. The IEEE standard document is considered an ideal SRS template for all applications.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 122, 
    question: "11. Ethnography could be considered as a complete approach for requirements elicitation.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 123, 
    question: "12. People usually find it easier to relate to real-life examples rather than abstract descriptions in requirements description.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 124, 
    question: "13. Interviews with stakeholders are normally a mixture of both closed and open interviews", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 125, 
    question: "14. Using structured specifications removes some of the problems of natural language specification.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 126, 
    question: "15. The intermediate stages in a reuse-oriented process are the same of the waterfall model,", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  // mcqQuestions6
 {
    id: 127, 
    question: "1. What is software?", 
    options: ["a) Software is documentation and configuration of data.", "b) Software is a set of programs.", "c) Software is a set of programs, and documentation.", "d) None of the mentioned."], 
    answer: "c" 
  },
  { 
    id: 128, 
    image: "./images/25-2.png",
    question: "2. The following figure describes ", 
    options: ["a) The waterfall model.", "b) Incremental development.", "c) Spiral model.", "d) None of the mentioned."], 
    answer: "a" 
  },
  { 
    id: 129, 
    question: "3. What does SDLC stand for?", 
    options: ["a) System Design Life Cycle", "b) Software Design Life Cycle", "c) Software Development Life Cycle", "d) System Development Life cycle"], 
    answer: "c" 
  },
  { 
    id: 130, 
    question: "4. What is the first step in the software development lifecycle?", 
    options: ["a) System Design", "b) Coding", "c) System Testing", "d) Preliminary Investigation and Analysis"], 
    answer: "d" 
  },
  { 
    id: 131, 
    question: "5. Which of these software engineering activities are not a part of software processes", 
    options: ["a) Software development", "b) Software dependence", "c) Software validation", "d) Software specification"], 
    answer: "b" 
  },
  { 
    id: 132, 
    question: "6. What does the term \"software process\" refer to?", 
    options: ["a) A set Of activities that lead to the production of a software system.", "b) The physical environment in which software development takes place.", "c) The tools and technologies used in software development.", "d) The documentation produced during software development."], 
    answer: "a" 
  },
  { 
    id: 133, 
    question: "7. What is the difference between software engineering and computer science?", 
    options: ["a) Software engineering deals with hardware, while computer science deals with software.", "b) Software engineering is concerned with the development and evolution Of software systems, while computer science is concerned with the study Of algorithms and data structures.", "c) There is no difference.", "d) Computer science focuses on software engineering principles."], 
    answer: "b" 
  },
  { 
    id: 134, 
    question: "8. Which of the following is NOT a benefit Of using a software development methodology?", 
    options: ["a) Improved communication and collaboration among stakeholders.", "b) Increased risk of project failure.", "c) Enhanced software quality.", "d) More efficient use of resources."], 
    answer: "b" 
  },
  { 
    id: 135, 
    question: "9. .......are application systems that include all necessary functionality and do not need to be connected to a network.", 
    options: ["a) Stand-alone applications", "b) Interactive transaction-based applications", "c) Data collection systems", "d) AN of the mentioned"], 
    answer: "a" 
  },
  { 
    id: 136, 
    image: "./images/25-35.png",
    question: "10. The following figure describes ", 
    options: ["a) a The waterfall model.", "b) Incremental development.", "c) Reuse-oriented software engineering.", "d) None of the mendoned."], 
    answer: "b" 
  },
  { 
    id: 137, 
    question: "11. COTS stands for", 
    options: ["a) Commercial Off-The-Shelf systems", "b) Commercial Off-The-Shelf states", "c) Commercial Off-The-System state", "d) None of the mentioned"], 
    answer: "a" 
  },
  { 
    id: 138, 
    question: "12. What is software engineering ethics?", 
    options: ["a) The principles that govern the behavior of software engineers", "b) The study of computer ethics", "c) The principles that govern the behavior of computers", "d) All of the mentioned"], 
    answer: "a" 
  },
  { 
    id: 139, 
    question: "13. Confidentiality is a key ethical principle. This includes:", 
    options: ["a) a Sharing all project details openly on social media.", "b) protecting sensitive client information even after the project ends.", "c) Discussing project challenges with online forums anonymously.", "d) Disclosing project details toa competitor for personal gain."], 
    answer: "b" 
  },
  { 
    id: 140, 
    question: "14. Software engineers should not use their technical skills to misuse Other people's computers. Here the term misuse refers to:", 
    options: ["a) Unauthorized access to computer material", "b) Unauthorized modification Of computer material", "c) dissemination/spreading of viruses or other malware", "d) All Of the mentioned"], 
    answer: "d" 
  },
  { 
    id: 141, 
    question: "15. The goal of software processes is to ....,.,", 
    options: ["a) Define a clear set of steps to perform.", "b) Allow for review of work.", "c) c Specify actions to perform in the next stage.", "d) d All of the mentioned."], 
    answer: "d" 
  },
  { 
    id: 142, 
    question: "16. process descriptions may also include:", 
    options: ["a) and Post-conditions", "b) Roles", "c) Products", "d) All of the mentioned"], 
    answer: "d" 
  },
  { 
    id: 143, 
    question: "17. The waterfall model of software development is suitable when", 
    options: ["a) The project is short.", "b) The best approach to use for projects with large development teams.", "c) There are no ambiguous requirements.", "d) All of the mentioned."], 
    answer: "d" 
  },
  { 
    id: 144, 
    question: "18. What is the main drawback of the waterfall model?", 
    options: ["a) Lack of customer involvement", "b) Inability to handle large projects", "c) Limited documentation", "d) Slow development process"], 
    answer: "a" 
  },
  { 
    id: 145, 
    question: "19. Which of the following software development approach is ngt applicable to projects that demand continuous maintenance?", 
    options: ["a) Agile development.", "b) DevOps deployment.", "c) The waterfall model.", "d) None of these."], 
    answer: "b" 
  },
  { 
    id: 146, 
    question: "20. Which of the following is true about non-functional requirements?", 
    options: ["a) They may define constraints on the system implementation.", "b) They are not directly concerned with the specific services delivered by the system to its users.", "c) Sometimes, they are more critical than individual functional requirements.", "d) All the mentioned."], 
    answer: "d" 
  },
  { 
    id: 147, 
    question: "21. Which of the following is an example of an ambiguous requirement?", 
    options: ["a) The software should be compatible with ios 17.4.1.", "b) The software should be fast.", "c) The software should be delivered by the end of the month.", "d) All of the mentioned."], 
    answer: "b" 
  },
  { 
    id: 148, 
    question: "22. A good software requirements having the following characteristic(s):", 
    options: ["a) Complete", "b) Consistent", "c) Clarity", "d) All of the above"], 
    answer: "d" 
  },
  { 
    id: 149, 
    question: "23. Which of the following is a functional requitement", 
    options: ["a) The system should allow users to log in using their email address or facebook account.", "b) The system Shall generate any report within minutes.", "c) The system shall encrypt user password.", "d) All of the mentioned"], 
    answer: "d" 
  },
  { 
    id: 150, 
    question: "24. Which of the following is a user of a user requitements document.", 
    options: ["a) Client engineer", "b) Software engineer", "c) Client Manager", "d) System Architect"], 
    answer: "b" 
  },
  { 
    id: 151, 
    question: "25. Which of the following best describes 'Change tolerance'?", 
    options: ["a) This normal}/ involves some form of incremental development.", "b) Proposed changes may be implemented in increments that have not yet been developed", "c) The software process includes activities that con anticipate possible changes before significant rework is required.", "d) both a, and b."], 
    answer: "d" 
  },
  { 
    id: 152, 
    question: "26. Software maintenance refers to:", 
    options: ["a) The initial development of a software system.", "b) Making changes to a software system after it has been deployed.", "c) Only fixing bugs in the software.", "d) Stopping the use of a software system that is no longer needed,"], 
    answer: "b" 
  },
  { 
    id: 153, 
    question: "27. Software testing is one element of a broader topic that is often referred to as", 
    options: ["a) Verification", "b) Validation", "c) Verification and Validation.", "d) None of these"], 
    answer: "c" 
  },
  { 
    id: 154, 
    question: "28. What are the different levels of Testing?", 
    options: ["a) Component testing", "b) System testing", "c) Acceptance testing", "d) All of the above"], 
    answer: "d" 
  },
  { 
    id: 155, 
    question: "29. Requirement engineering process includes which of these steps?", 
    options: ["a) feasibility study", "b) Requirement Gathering", "c) Software requirement specification g validation", "d) All mentioned above."], 
    answer: "d" 
  },
  { 
    id: 156, 
    question: "30. What is the meaning of requirement elicitation in software engineering?", 
    options: ["a) Gathering of requirement.", "b) Understanding of requitement.", "c) Getting the requirements from client.", "d) All mentioned above."], 
    answer: "d" 
  },
  { 
    id: 157, 
    question: "31. Which of the following is an example of a reusable software component?", 
    options: ["a) Web services.", "b) .Net framework.", "c) J2EE.", "d) All of the mentioned."], 
    answer: "d" 
  },
  { 
    id: 158, 
    question: "32. What are the two fundamental types of software product?", 
    options: ["a) System software and application software.", "b) Open-source software and closed-source software.", "c) Generic products and customized products.", "d) Freeware and shareware."], 
    answer: "c" 
  },
  { 
    id: 159, 
    question: "33. which of the following is a potential drawback of the incremental development approach?", 
    options: ["a) increments System structure tends to degrade as new increments are added.", "b) Limited opportunities for stakeholder involvement.", "c) Incompatibility with agile development methodologies.", "d) Inability to deliver a working product incrementally."], 
    answer: "a" 
  },
  { 
    id: 160, 
    question: "34............is an observational technique, where the system analyst immerses himself or herself in the working environment.", 
    options: ["a) Ethnography", "b) Scenarios", "c) Interviewing", "d) None of the mentioned"], 
    answer: "a" 
  },
  { 
    id: 161, 
    image: "./images/25-161.png",
    question: "35.following figure is an example of ", 
    options: ["a) Use case diagram.", "b) Scenario.", "c) Sequence diagram.", "d) Class diagram."], 
    answer: "a" 
  },
  { 
    id: 162, 
    question: "36. Effective interviewers with stakeholders should be........", 
    options: [
      "a) Open-minded.", 
      "b) Willing to listen to stakeholders.", 
      "c) Having the ability to prompt the interviewee.", 
      "d) All of the mentioned."
    ], 
    answer: "d" 
  },
  { 
    id: 163, 
    question: "37. Which of the following should be included in the scenario description.", 
    options: [
      "a) A description of the normal flow of events in the scenario.", 
      "b) A description of what can go wrong.", 
      "c) A description of the system state when the scenario finishes.", 
      "d) All of the mentioned"
    ], 
    answer: "d" 
  },
  { 
    id: 164, 
    question: "38. What is the purpose of requirements validation in software specification?", 
    options: [
      "a) To identify potential risks and develop strategies to mitigate them", 
      "b) To ensure that the requirements are complete, consistent, and correct.", 
      "c) To evaluate and prioritize the requirements based on their importance and feasibility.", 
      "d) To check if the requirements are technically feasible or not."
    ], 
    answer: "b" 
  },
  { 
    id: 165, 
    question: "39. Which of the following should be included in the scenario description.", 
    options: [
      "a) A description of the normal flow of events in the scenario.", 
      "b) A description of what can go wrong.", 
      "c) A description of the system state when the scenario finishes.", 
      "d) All of the mentioned"
    ], 
    answer: "b" 
  },
  { 
    id: 166, 
    question: "40. Which of the following is a potential drawback of reuse-oriented software engineering?", 
    options: [
      "a) Higher risks", 
      "b) Sometimes leads to a system that does not meet the real needs of users.", 
      "c) Increased development time due to extensive documentation.", 
      "d) All of the mentioned."
    ], 
    answer: "b" 
  },
  // tfQuestions6
  { 
    id: 167, 
    question: "1. SDLC is not a well-defined, structured sequence of stages in software engineering to develop the intended software product.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 168, 
    question: "2. User requirements contains more detailed descriptions of the software functions, services, and operational constraints.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 169, 
    question: "3. Requirements elicitation is a cyclic process.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 170, 
    question: "4. For systems with a long life, maintenance costs may be several times development costs.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 171, 
    question: "5. There are no universal software engineering methods and techniques that are suitable for all systems and all companies.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 172, 
    question: "6. In practice, most practical processes include elements of both plan-driven and agile approaches.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 173, 
    question: "7. The waterfall model is an example Of an agile process.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 174, 
    question: "8. In Plan-driven processes, all Of the process activities are planned in advance and progress is measured against this plan.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 175, 
    question: "9. The intermediate stages in a reuse-oriented process are the same Of the waterfall model.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 176, 
    question: "10. A prototype system is an example of 'Change avoidance' approach.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 177, 
    question: "11. For large and complex systems, it is practically impossible to achieve requirements consistency and completeness", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 178, 
    question: "12. Natural language is a way Of writing system requirements where the freedom of the requirements writer is limited.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 179, 
    question: "13. People usually find it easier to relate to abstract descriptions rather than real-life examples in requirements description.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 180, 
    question: "14. Conflicting requirements are common in requirement engineering, With each Client proposing his or her version is the right one.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 181, 
    question: "15. Requirements should not specify 'how' but should only specify 'what'.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 182, 
    question: "16. When writing natural language requirements, it is recommended to associate a rationale with each user requirement.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 183, 
    question: "17. In agile-based approaches, it is preferred to collect user requirements incrementally and write these on cards as stories.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 184, 
    question: "18. Non-functional requirements affect the overall architecture of a system.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 185, 
    question: "19. A single non-functional requirement may generate number of related functional requirements that define new system services that are required.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 186, 
    question: "20. Ethnography could be considered as a complete approach for requirements elicitation.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  // mcqQuestions7
  { 
    id: 187, question: "187) What is the advantage of reusing software components?", 
    options: ["a) It ensures better performance.", "b) It leads to faster delivery of the software.", "c) Full control over the system evolution", "d) All of the mentioned."], 
    answer: "b" 
  },
  { 
    id: 188, question: "188) The process of deriving the system requirements through observation of existing systems and discussions with potential users is called ………", 
    options: ["a) Feasibility study", "b) Requirements elicitation", "c) Requirements specification", "d) Requirements validation"], 
    answer: "b" 
  },
  { 
    id: 189, question: "189) What is the purpose of a feasibility study in requirement engineering?", 
    options: ["a) To assess the technical viability of the proposed system", "b) To estimate the project schedule and budget", "c) Both a, and b."], 
    answer: "c" 
  },
  { 
    id: 190, question: "190) Which of the following is an activity in the design phase of software development?", 
    options: ["a) Database design.", "b) Interface design.", "c) Architectural design.", "d) All of the mentioned.."],
    answer: "d" 
  },
  { 
    id: 191, question: "191) What are the different levels of Testing?", 
    options: ["a) Component testing.", "b) System testing.", "c) Acceptance testing.", "d) All of the above."], 
    answer: "d" 
  },
  { 
    id: 192, question: "192) Which one is/are the functional requirement?", 
    options: ["a) High performance of software.", "b) Find the basic salary of an employee.", "c) User friendly interface.", "d) Reliability of software."], 
    answer: "b" 
  },
  { 
    id: 193, question: "193) What is the purpose of a code of ethics in software engineering?", 
    options: ["a) To restrict the use of open-source software.", "b) To establish guidelines for ethical behavior in the field.", "c) To enforce software licensing agreements.", "d) To promote competition among software developers."], 
    answer: "b" 
  },

  // tfQuestions7
  { 
    id: 194, question: "194) Validation ensures \"Are we building the product, right?\"", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 195, question: "195) A prototype is 'Change avoidance’ approach.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 196, question: "196) The functional requirements specification of a system should be both complete and consistent.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 197, question: "197) Non-functional requirements can be safely ignored in modern software development projects.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 198, question: "198)A common problem with non-functional requirements is that users or customers often propose these requirements as general goals.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 199, 
    question: "9) Which of the following is NOT a characteristic of software engineering?",
    options: ["a) Applying engineering principles to software development.", "b) Focusing only on coding and implementation.", "c) Using systematic approaches.", "d) Incorporating knowledge from other disciplines."], 
    answer: "b" 
  },
  { 
    id: 200, 
    question: "11) Which of the following is NOT a software engineering activity?", 
    options: ["A) Software specification", "B) Software validation", "C) Software procurement", "D) Software evolution"], 
    answer: "C" 
  },
  { 
    id: 201, 
    question: "12) What are the two fundamental types of software product?", 
    options: ["a) System software and application software", "b) Freeware and shareware", "c) Open-source software and closed-source software", "d) Generic products and customized products"], 
    answer: "d" 
  },
  { 
    id: 202, 
    question: "13) What does the term 'competence' mean in software engineering ethics?", 
    options: ["a) You should knowingly accept work that is outside your competence.", "b) You should not misrepresent your level of competence.", "c) You should be careful to ensure that the intellectual property of employers.", "d) All of the mentioned ."], 
    answer: "b" 
  },
  { 
    id: 203, 
    question: "15) process descriptions may also include :", 
    options: ["a) Pre- and Post-conditions", "b) Roles", "c) Products", "d) All of the mentioned"], 
    answer: "d" 
  },
  { 
    id: 204, 
    question: "16) The goal of software process models is to…………", 
    options: ["a) Manage risks.", "b) Produce high quality software .", "c) All of the mentioned ."], 
    answer: "c" 
  },
  { 
    id: 205, 
    question: "17) What is the main drawback of the waterfall model?", 
    options: ["a) difficulty of accommodating change", "b) Inability to handle large projects", "c) Limited documentation.", "d) Slow development process ."], 
    answer: "a" 
  },
  { 
    id: 206, 
    question: "18) Which of the following is a key advantage of the incremental development approach", 
    options: ["a) Easier to get customer feedback.", "b) More rapid delivery", "c) The cost of accommodating changing customer requirements is reduced.", "d) All of the mentioned ."], 
    answer: "d" 
  },
  { 
    id: 207, 
    question: "23) Which of the following is an example of an ambiguous requirement?", 
    options: [
      "a) The software should be fast.", 
      "b) The software should be compatible with ios 17.4.1.", 
      "c) The software should be delivered by the end of the month.", 
      "d) All of the mentioned."
    ], 
    answer: "a" 
  },
  { 
    id: 208, 
    question: "13) What is the purpose of component analysis in reuse-oriented software engineering?", 
    options: [
      "a) To search for components to implement the specifications.", 
      "b) To enforce strict licensing agreements for the use of the component.", 
      "c) To consider the components that are reused and organize the framework to cater for this.", 
      "d) All of the mentioned"
    ], 
    answer: "a" 
  },
  { 
    id: 209, 
    question: "15) Which of the following is a potential drawback of the incremental development approach?", 
    options: [
      "a) System structure tends to degrade as new increments are added.", 
      "b) Limited opportunities for stakeholder involvement.", 
      "c) Incompatibility with agile development methodologies.", 
      "d) Inability to deliver a working product incrementally."
    ], 
    answer: "a" 
  },
  { 
    id: 210, 
    question: "16) What is the main objective of Reuse-oriented software engineering?", 
    options: [
      "a) To develop software systems by building everything from scratch.", 
      "b) To reuse existing software components to reduce development time and cost.", 
      "c) To ignore previous work and start fresh in every project", 
      "d) To reinvent the wheel for every project"
    ], 
    answer: "b" 
  },
  { 
    id: 211, 
    question: "18) What is the meaning of requirement elicitation in software engineering?", 
    options: [
      "a) Gathering of requirement.", 
      "b) Understanding of requirement.", 
      "c) Getting the requirements from client.", 
      "d) All of the above."
    ], 
    answer: "d" 
  },
  { 
    id: 212, 
    question: "19) What is the purpose of requirements validation in software specification?", 
    options: [
      "a) To identify potential risks and develop strategies to mitigate them", 
      "b) To ensure that the requirements are complete, consistent, and correct.", 
      "c) To evaluate and prioritize the requirements based on their importance and feasibility.", 
      "d) To check if the requirements are technically feasible or not."
    ], 
    answer: "b" 
  },
  { 
    id: 213, 
    question: "20) Which of the following best describes 'Change tolerance'?", 
    options: [
      "a) This normally involves some form of incremental development.", 
      "b) Proposed changes may be implemented in increments that have not yet been developed.", 
      "c) The software process includes activities that can anticipate possible changes before significant rework is required.", 
      "d) both a, and b."
    ], 
    answer: "d" 
  },
  { 
    id: 214, 
    question: "22) Which of the following is not users of a user requirements document.", 
    options: [
      "a) Client Engineer", 
      "b) Software Engineer", 
      "c) Client Manager", 
      "d) System Architect"
    ], 
    answer: "b" 
  },
  // --- Question 1: MCQ ---
  { 
    id: 215, 
    question: "1. What is software?", 
    options: ["a) Software is documentation and configuration of data.", "b) Software is a set of programs.", "c) Software is a set of programs, and documentation.", "d) None of the mentioned."], 
    answer: "c" 
  },
  { 
    id: 216, 
    question: "2. What are the essential attributes of good software?", 
    options: ["a) Software that is affordable.", "b) Software that is maintainable, dependable, and usable", "c) Software that is developed quickly.", "d) All of the mentioned"], 
    answer: "b" 
  },
  { 
    id: 217, 
    question: "3. Which of the following is NOT a software engineering activity?", 
    options: ["A) Software specification", "B) Software validation", "C) Software procurement", "D) Software evolution"], 
    answer: "C" 
  },
  { 
    id: 218, 
    image: "./images/25-4.png",
    question: "4. The following figure describes............", 
    options: ["a) The waterfall model.", "b) Incremental development.", "c) Reuse-oriented software engineering", "d) None of the mentioned."], 
    answer: "c" 
  },
  { 
    id: 219, 
    question: "5. What is the main focus of requirement engineering?", 
    options: ["a) Designing software interfaces.", "b) Testing software products.", "c) Understanding and defining what software is supposed to do.", "d) All of the mentioned"], 
    answer: "c" 
  },
  { 
    id: 220, 
    question: "6. Which of the following is an example of a user requirement?", 
    options: ["a) The system should store data in a relational database.", "b) The system should be compatible with the latest version of Java.", "c) The system should allow users to reset their passwords.", "d) All of the mentioned."], 
    answer: "c" 
  },
  { 
    id: 221, 
    question: "7. Which of the following is not a user of a user requirements document.", 
    options: ["a) Client Engineer", "b) Client Manager", "c) System Architect", "d) Software Engineer"], 
    answer: "d" 
  },
  { 
    id: 222, 
    question: "8. Functional requirements depend on", 
    options: ["a) The type of software being developed.", "b) The general approach taken by the organization when writing requirements.", "c) The expected users of the software.", "d) All of the mentioned."], 
    answer: "d" 
  },
  { 
    id: 223, 
    question: "9. Which one of the following is a functional requirement?", 
    options: ["a) Maintainability", "b) Portability", "c) Robustness", "d) None of the mentioned."], 
    answer: "d" 
  },
  { 
    id: 224, 
    question: "10. Which one is/are the functional requirement?", 
    options: ["a) High performance of a software.", "b) Find the basic salary of an employee.", "c) User friendly interface.", "d) Reliability of a software."], 
    answer: "b" 
  },
  { 
    id: 225, 
    question: "11. A good software requirements having the following characteristic(s):", 
    options: ["a) Complete", "b) Consistent", "c) Clarity", "d) All of the above"], 
    answer: "d" 
  },
  { 
    id: 226, 
    question: "12. Which of the following is an example of an ambiguous requirement?", 
    options: ["a) The software should be fast.", "b) The software should be compatible with ios 17.4.1.", "c) The software should be delivered by the end of the month.", "d) All of the mentioned."], 
    answer: "a" 
  },
  { 
    id: 227, 
    question: "13. Which of the following is true about non-functional requirements?", 
    options: ["a) They may define constraints on the system implementation.", "b) They are not directly concerned with the specific services delivered by the system to its users.", "c) Sometimes, they are more critical than individual functional requirements.", "d) All the mentioned."], 
    answer: "d" 
  },
  { 
    id: 228, 
    question: "14. Which of these is a non-functional requirement?", 
    options: ["a) User login functionality", "b) Data export capability", "c) System response time", "d) Report generation"], 
    answer: "c" 
  },
  { 
    id: 229, 
    question: "15. Which of the following is a concern of product requirements?", 
    options: ["a) Reliability", "b) Usability", "c) Security", "d) All of the mentioned"], 
    answer: "d" 
  },
  { 
    id: 230, 
    question: "16. Which of the following could define the SRS?", 
    options: ["a) It is the software requirements document.", "b) It is the software requirements specification.", "c) All of the mentioned", "d) None of the above"], 
    answer: "c" 
  },
  { 
    id: 231, 
    question: "17. Which of the following situations, software requirements document is considered an essential?", 
    options: ["a) When an outside contractor is developing the software system.", "b) When developing critical systems.", "c) When the system is to be developed through outsourcing.", "d) All of the mentioned."], 
    answer: "d" 
  },
  { 
    id: 232, 
    question: "18. The user and system requirements should be.......", 
    options: ["a) Clear", "b) Complete", "c) Easy to understand.", "d) All of the mentioned."], 
    answer: "d" 
  },
  { 
    id: 233, 
    question: "19. which of the following statements is best describes a structured natural language.............", 
    options: ["a) It is written in natural language on a standard form or template.", "b) It uses a language like a programming language, but with more abstract features to specify the requirements.", "c) It is graphical models supplemented by text annotations.", "d) All of the mentioned."], 
    answer: "a" 
  },
  { 
    id: 234, 
    question: "20. Which one of the following is not a step of requirement engineering?", 
    options: ["a) elicitation", "b) design", "c) analysis", "d) documentation"], 
    answer: "b" 
  },
  { 
    id: 235, 
    question: "21. Which of the following should be included when writing structured specifications?", 
    options: ["a) A description of its inputs and where these come from.", "b) A description of the side effects of the operation. ", "c) A description of the pre-conditions and post-conditions.", "d) All of the mentioned."], 
    answer: "d" 
  },
  { 
    id: 236, 
    image: "./images/25-22.png",
    question: "22. The following figure represents....", 
    options: ["a) IEEE template", "b) Volere template", "c) Design description language.", "d) None of the mentioned"], 
    answer: "b" 
  },
  { 
    id: 237, 
    question: "23. Effective interviewers with stakeholders should be........", 
    options: ["a) Open-minded.", "b) Willing to listen to stakeholders.", "c) Having the ability to prompt the interviewee.", "d) All of the mentioned."], 
    answer: "d" 
  },
  { 
    id: 238, 
    question: "24. The output of the requirement engineering process is", 
    options: ["a) Feasibility study", "b) Requirements document.", "c) Entity-relationship diagrams", "d) Decision tables"], 
    answer: "b" 
  },
  { 
    id: 239, 
    question: "25. How many activities are conducted in requirement engineering process?", 
    options: ["a) Three", "b) Four", "c) Five", "d) Six"], 
    answer: "b" 
  },
  { 
    id: 240, 
    question: "26. Arrange the tasks involved in requirements elicitation in an appropriate manner. i. Specification ii. Prioritization iii. Discovery iv. Classification", 
    options: ["a) iii, i, ii, iv", "b) iii, iv, ii, i", "c) iii, ii, iv, i", "d) ii, iii, iv, i"], 
    answer: "b" 
  },
  { 
    id: 241, 
    question: "27. Which technique is commonly used for eliciting requirements through group discussions?", 
    options: ["a) Prototyping", "b) Use case modeling", "c) Interviewing", "d) Data flow diagramming"], 
    answer: "c" 
  },
  { 
    id: 242, 
    image: "./images/25-28.png",
    question: "28. The following figure is an example of ........... ", 
    options: ["a) Use case.", "b) Scenario.", "c) Sequence diagram.", "d) Class diagram."], 
    answer: "a" 
  },
  { 
    id: 243, 
    question: "29. ...........is an observational technique, where the system analyst immerses himself or herself in the working environment.", 
    options: ["a) Ethnography", "b) Scenarios", "c) Interviewing", "d) None of the mentioned"], 
    answer: "a" 
  },
  { 
    id: 244, 
    question: "30. What is software engineering ethics?", 
    options: ["a) The principles that govern the behavior of software engineers", "b) The study of computer ethics", "c) The principles that govern the behavior of computers", "d) All of the mentioned"], 
    answer: "a" 
  },
  { 
    id: 245, 
    question: "31. Confidentiality is a key ethical principle. This includes:", 
    options: ["a) Sharing all project details openly on social media.", "b) Protecting sensitive client information even after the project ends.", "c) Discussing project challenges with online forums anonymously.", "d) Disclosing project details to a competitor for personal gain."], 
    answer: "b" 
  },
  { 
    id: 246, 
    question: "32. What does SDLC stand for?", 
    options: ["a) System Design Life Cycle", "b) Software Design Life Cycle", "c) Software Development Life Cycle", "d) System Development Life cycle"], 
    answer: "c" 
  },
  { 
    id: 247, 
    question: "33. process descriptions may also include:", 
    options: ["a) Pre- and Post-conditions", "b) Roles", "c) Products", "d) All of the mentioned"], 
    answer: "d" 
  },
  { 
    id: 248, 
    question: "34. What is the main drawback of the waterfall model?", 
    options: ["a) Lack of customer involvement", "b) Inability to handle large projects", "c) Limited documentation", "d) Slow development process"], 
    answer: "a" 
  },
  { 
    id: 249, 
    image: "./images/25-35.png",
    question: "35. The following figure describes..........", 
    options: ["a) The waterfall model.", "b) Incremental development.", "c) Reuse-oriented software engineering", "d) None of the mentioned."], 
    answer: "b" 
  },

  // --- Question 2: True or False ---
  { 
    id: 250, 
    question: "1. There is no ideal software process.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 251, 
    question: "2. The waterfall model is a fundamental part of agile approaches.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 252, 
    question: "3. In Plan-driven processes, all of the process activities are planned in advance and progress is measured against this plan.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 253, 
    question: "4. The intermediate stages in a reuse-oriented process are the same of the waterfall model.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 254, 
    question: "5. Real software processes are interleaved sequences of technical and managerial activities with the overall goal of specifying, designing, implementing, and testing a software system.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 255, 
    question: "6. Program testing, where the system is executed using simulated test data, is the principal validation technique.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 256, 
    question: "7. Development processes are less challenging than maintenance processes.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 257, 
    question: "8. Conflicting requirements are common in requirement engineering, with each client proposing his or her version is the right one.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 258, 
    question: "9. Non-functional requirements can be safely ignored in modern software development projects.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 259, 
    question: "10. Non-functional requirements affect the overall architecture of a system.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 260, 
    question: "11. In agile-based approaches, it is preferred to collect user requirements incrementally and write these on cards as user stories.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 261, 
    question: "12. The IEEE standard document is considered an ideal SRS template for all applications.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 262, 
    question: "13. Requirements should not specify 'how' but should only specify 'what'.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 263, 
    question: "14. Requirements elicitation is a cyclic process.", 
    options: ["a) True", "b) False"], 
    answer: "a" 
  },
  { 
    id: 264, 
    question: "15. It is often possible to identify which system components implement specific non-functional requirements.", 
    options: ["a) True", "b) False"], 
    answer: "b" 
  },
  { 
    id: 265, 
    image: "./images/24-00.png",
    question: "00. The following figure is an example of ", 
    options: ["a) Use case diagram.", "b) Scenario.", "c) Sequence diagram.", "d) Class diagram."], 
    answer: "a" 
  },
];
const QUESTIONS = [
  ...allQuestions

];

