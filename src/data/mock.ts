// Placeholder mock data. TODO: replace with real API calls to Express backend.

export type MockQuestion = {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export const mockQuiz: MockQuestion[] = [
  {
    id: 1,
    question: "Which data structure uses LIFO order?",
    options: ["Queue", "Stack", "Linked List", "Tree"],
    correctIndex: 1,
    explanation: "A stack follows Last-In-First-Out (LIFO) ordering.",
  },
  {
    id: 2,
    question: "Time complexity of binary search on a sorted array?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correctIndex: 1,
    explanation: "Binary search halves the search space each step: O(log n).",
  },
  {
    id: 3,
    question: "Which protocol is used to send email?",
    options: ["HTTP", "FTP", "SMTP", "SSH"],
    correctIndex: 2,
    explanation: "SMTP (Simple Mail Transfer Protocol) delivers email between servers.",
  },
  {
    id: 4,
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Simple Question Language",
      "System Query Loop",
      "Server Query Link",
    ],
    correctIndex: 0,
    explanation: "SQL stands for Structured Query Language.",
  },
  {
    id: 5,
    question: "Which of these is NOT an OOP principle?",
    options: ["Encapsulation", "Inheritance", "Compilation", "Polymorphism"],
    correctIndex: 2,
    explanation: "Compilation is a build step, not an OOP principle.",
  },
];

export const mockLearning = {
  title: "Binary Search — Detailed Explanation",
  summary:
    "Binary search is an efficient algorithm to locate a target value within a sorted array by repeatedly dividing the search interval in half.",
  keyPoints: [
    "Requires a sorted input array.",
    "Runs in O(log n) time complexity.",
    "Uses two pointers: low and high.",
    "Compare the middle element to the target each step.",
  ],
  examples: [
    "Searching a dictionary word.",
    "Finding a page number in a book.",
    "Locating a value in a sorted database index.",
  ],
  notes: [
    "Fails on unsorted data — sort first if needed.",
    "Iterative implementation uses O(1) space; recursive uses O(log n).",
  ],
};

export type ChatMessage = {
  id: number;
  role: "user" | "assistant";
  content: string;
  time: string;
};

export const mockChat: ChatMessage[] = [
  {
    id: 1,
    role: "assistant",
    content: "Hi! I'm your AI tutor. Ask me anything about your studies.",
    time: "10:02 AM",
  },
  {
    id: 2,
    role: "user",
    content: "Can you explain deadlock in operating systems?",
    time: "10:03 AM",
  },
  {
    id: 3,
    role: "assistant",
    content:
      "A deadlock happens when two or more processes are waiting on each other's resources, so none can proceed. The four Coffman conditions are: mutual exclusion, hold-and-wait, no preemption, and circular wait.",
    time: "10:03 AM",
  },
];

export const suggestedPrompts = [
  "Explain Deadlock",
  "Explain Binary Search",
  "Summarize Operating System",
  "Generate Revision Notes",
];

export const testimonials = [
  {
    name: "Ananya S.",
    role: "CS Student",
    quote:
      "QuizGenius AI made revision feel effortless. The instant quizzes are gold before exams.",
  },
  {
    name: "Rahul K.",
    role: "Software Engineer",
    quote: "The AI tutor explains topics better than most textbooks. Love the clean UI.",
  },
  {
    name: "Meera P.",
    role: "Teacher",
    quote: "I generate practice sets for my class in seconds. A must-have tool.",
  },
];