// src/data/terms.js

export const LAST_UPDATED = "April 18, 2026";
export const VERSION = "2.1";

export const SECTIONS = [
  {
    id: "welcome",
    number: "01",
    emoji: "👋",
    title: "Welcome to MindMates",
    tagline: "You belong here.",
    color: "#6D4AFF",
    content: [
      {
        type: "intro",
        text: "MindMates is a social platform built around the idea that the best connections happen when people meet through what they love — their skills, passions, and curiosity.",
      },
      {
        type: "paragraph",
        text: "By creating an account or using any MindMates service (web, mobile, or API), you agree to these Terms & Conditions. These terms form a legal agreement between you and MindMates Technologies Pvt. Ltd.",
      },
      {
        type: "highlight",
        text: "If you are under 18 years of age, you must have a parent or guardian's consent to use this platform.",
      },
      {
        type: "paragraph",
        text: "We've worked hard to make these terms easy to read. Still have questions? Email us at shanmugapriyancse582@gmail.com and a real human will get back to you.",
      },
    ],
  },
  {
    id: "responsibilities",
    number: "02",
    emoji: "🤝",
    title: "Your Responsibilities",
    tagline: "Keep it kind. Keep it real.",
    color: "#3E8EFF",
    content: [
      {
        type: "paragraph",
        text: "MindMates thrives on trust. Every member plays a role in maintaining a safe, respectful, and genuinely useful community.",
      },
      {
        type: "list",
        title: "You agree to:",
        items: [
          "Provide accurate information in your profile, including your real name, skills, and location",
          "Treat every member with respect, regardless of background, beliefs, or skill level",
          "Use the platform only for lawful purposes, consistent with applicable Indian and international law",
          "Report content or behaviour that violates these terms using our in-app reporting tools",
          "Keep your login credentials secure and notify us immediately of any unauthorised access",
        ],
      },
      {
        type: "list",
        title: "You agree NOT to:",
        items: [
          "Create fake profiles, impersonate others, or misrepresent your identity or skills",
          "Send unsolicited messages, spam, or bulk connection requests",
          "Scrape, harvest, or extract data from MindMates for any commercial purpose",
          "Use automated bots, scripts, or tools to interact with the platform",
          "Post content designed to deceive, manipulate, or defraud other members",
        ],
        variant: "danger",
      },
    ],
  },
  {
    id: "connections",
    number: "03",
    emoji: "🔗",
    title: "Connections & Interactions",
    tagline: "Real relationships, no guarantees.",
    color: "#17B26A",
    content: [
      {
        type: "paragraph",
        text: "MindMates uses your profile — including your listed skills, interests, and location — to suggest connections and communities that may be valuable to you.",
      },
      {
        type: "cards",
        items: [
          {
            icon: "🎯",
            title: "Interest-Based Matching",
            text: "Our algorithm surfaces people who share your passions and professional goals.",
          },
          {
            icon: "📍",
            title: "Location Context",
            text: "Optional location sharing helps you find local events, mentors, and collaborators.",
          },
          {
            icon: "💡",
            title: "Skill Discovery",
            text: "The more skills you add, the better your connection recommendations become.",
          },
        ],
      },
      {
        type: "highlight",
        text: "MindMates facilitates connections — but we do not guarantee any specific outcomes, partnerships, employment, or results from using the platform.",
      },
      {
        type: "paragraph",
        text: "You are solely responsible for decisions you make based on interactions with other members. Always exercise your own judgment when meeting people online or in person.",
      },
    ],
  },
  {
    id: "messaging",
    number: "04",
    emoji: "💬",
    title: "Messaging & Content",
    tagline: "Share thoughtfully.",
    color: "#F59E0B",
    content: [
      {
        type: "paragraph",
        text: "When you post, message, or share content on MindMates, you retain ownership of what you create. However, you grant us a limited licence to display and distribute your content within the platform.",
      },
      {
        type: "paragraph",
        text: "We will never sell your content to advertisers or use it for any purpose other than operating and improving MindMates.",
      },
      {
        type: "list",
        title: "Content that is never permitted:",
        items: [
          "Hate speech, harassment, or content targeting individuals based on identity",
          "Sexual, violent, or exploitative content of any kind",
          "Misinformation, fraudulent schemes, or impersonation",
          "Malware, phishing links, or anything designed to compromise user security",
          "Content that violates another person's intellectual property rights",
        ],
        variant: "danger",
      },
      {
        type: "highlight",
        text: "Content that violates these rules will be removed. Repeated violations will result in account suspension or permanent termination.",
      },
    ],
  },
  {
    id: "privacy",
    number: "05",
    emoji: "🔐",
    title: "Privacy & Data Usage",
    tagline: "Your data works for you, not against you.",
    color: "#6D4AFF",
    content: [
      {
        type: "paragraph",
        text: "Privacy is not an afterthought at MindMates — it's a core design principle. Here's a plain-language summary of how your data is used.",
      },
      {
        type: "cards",
        items: [
          {
            icon: "📍",
            title: "Location Data",
            text: "Used only for suggesting nearby people and events. Never sold or shared with advertisers.",
          },
          {
            icon: "🛠️",
            title: "Skills & Interests",
            text: "Power your matching results. You can update or remove them at any time from your profile.",
          },
          {
            icon: "💬",
            title: "Messages",
            text: "Encrypted in transit. We do not read your private conversations for advertising purposes.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "For a complete breakdown of what we collect, how it is stored, and your rights under the Digital Personal Data Protection Act (DPDPA) 2023, please read our full Privacy Policy.",
      },
      {
        type: "link",
        text: "Read the full Privacy Policy →",
        href: "/privacy-policy",
      },
    ],
  },
  {
    id: "account",
    number: "06",
    emoji: "⚙️",
    title: "Account Management",
    tagline: "You're always in control.",
    color: "#3AAFA9",
    content: [
      {
        type: "paragraph",
        text: "Your MindMates account belongs to you. We believe in full user autonomy when it comes to your profile and data.",
      },
      {
        type: "list",
        title: "You can at any time:",
        items: [
          "Update your name, bio, skills, location, and profile photo",
          "Change your email address or password via account settings",
          "Adjust your notification preferences and privacy controls",
          "Download a complete export of all your personal data",
          "Permanently delete your account — all data is removed within 30 days",
        ],
      },
      {
        type: "highlight",
        text: "Account deletion is permanent and irreversible. Export your data before deleting if you wish to retain a copy.",
      },
      {
        type: "paragraph",
        text: "Accounts that have been inactive for more than 24 months may be deactivated after prior notification via your registered email address.",
      },
    ],
  },
  {
    id: "termination",
    number: "07",
    emoji: "🚫",
    title: "Termination",
    tagline: "We take misuse seriously.",
    color: "#EF4444",
    content: [
      {
        type: "paragraph",
        text: "MindMates reserves the right to suspend or permanently terminate accounts that violate these Terms & Conditions, with or without prior notice, depending on the severity of the violation.",
      },
      {
        type: "list",
        title: "Grounds for termination include:",
        items: [
          "Repeated or severe violations of our content or conduct policies",
          "Fraudulent, deceptive, or illegal activity on the platform",
          "Harassment, threats, or abuse directed at other members or staff",
          "Attempts to compromise platform security or other users' accounts",
          "Court orders or regulatory requirements mandating account removal",
        ],
        variant: "danger",
      },
      {
        type: "paragraph",
        text: "If you believe your account was suspended in error, you can appeal within 14 days by emailing shanmugapriyancse582@gmail.com with your account details and a description of the situation.",
      },
    ],
  },
  {
    id: "liability",
    number: "08",
    emoji: "⚖️",
    title: "Limitation of Liability",
    tagline: "Honest about what we can and cannot promise.",
    color: "#6B7280",
    content: [
      {
        type: "paragraph",
        text: "MindMates is provided 'as is' and 'as available' without warranties of any kind, either express or implied.",
      },
      {
        type: "list",
        title: "We do not warrant that:",
        items: [
          "The platform will be uninterrupted, error-free, or completely secure at all times",
          "Any specific connection, opportunity, or outcome will result from using MindMates",
          "Content posted by other users is accurate, complete, or appropriate",
          "The platform will meet every specific requirement you may have",
        ],
      },
      {
        type: "paragraph",
        text: "To the maximum extent permitted by law, MindMates and its directors, employees, and partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform.",
      },
      {
        type: "highlight",
        text: "Nothing in these terms limits liability that cannot be excluded by law, including liability for fraud or personal injury caused by our negligence.",
      },
    ],
  },
  {
    id: "updates",
    number: "09",
    emoji: "🔄",
    title: "Updates to Terms",
    tagline: "We'll always tell you first.",
    color: "#8B5CF6",
    content: [
      {
        type: "paragraph",
        text: "As MindMates grows and as laws evolve, we may need to update these Terms & Conditions from time to time.",
      },
      {
        type: "list",
        title: "When we make changes:",
        items: [
          "We will notify you via in-app notification and/or email at least 14 days before changes take effect",
          "The 'Last Updated' date at the top of this page will reflect every revision",
          "Material changes will be highlighted clearly so you know exactly what's different",
          "You may close your account before changes take effect if you do not agree",
        ],
      },
      {
        type: "highlight",
        text: "Continued use of MindMates after the effective date of any update constitutes your acceptance of the revised Terms.",
      },
      {
        type: "paragraph",
        text: "These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Tamil Nadu, India.",
      },
    ],
  },
];
