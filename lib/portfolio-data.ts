import { BookOpen, BriefcaseBusiness, FileText } from "lucide-react"

export const projects = [
  {
    title: "AI Procurement Price Intelligence",
    type: "ML / Forecasting",
    text: "A Random Forest system trained on 8,300+ supply chain records, paired with MCP-connected market signals for practical procurement decisions.",
    metric: "R² 0.85",
    href: "https://github.com/Hkrish098/supply-chain-price-prediction",
    demo: "https://supply-chain-price-prediction.vercel.app",
    image: "/projects/project-procurement.jpg",
    wide: true,
  },
  {
    title: "Sentio Bot",
    type: "RAG / Conversational AI",
    text: "A retrieval-native assistant for domain knowledge, tuned for high-confidence answers with strict prompt engineering and measurable retrieval quality.",
    metric: "98% hit rate",
    href: "https://github.com/Hkrish098/NEXORA-DIGITAL-SENSIOBOT",
    demo: "https://nexora-sentiobot.vercel.app",
    image: "/projects/project-sentio.jpg",
    wide: false,
  },
  {
    title: "OCI Prompt Playground",
    type: "Generative AI",
    text: "An interactive lab for testing token efficiency, prompt patterns, and agentic workflows with OCI Generative AI.",
    metric: "Agentic workflows",
    href: "https://github.com/Hkrish098/oci-prompt-playground",
    demo: "https://oci-prompt-playground.vercel.app",
    image: "/projects/project-oci.jpg",
    wide: false,
  },
  {
    title: "Mirage",
    type: "Responsible AI",
    text: "An adversarial image protection pipeline using data poisoning and blockchain-secured workflows to disrupt unauthorized model training.",
    metric: "36.33 dB PSNR",
    href: "https://github.com/Hkrish098/Mirage",
    demo: "https://mirage-ai.vercel.app",
    image: "/projects/project-mirage.jpg",
    wide: true,
  },
] as const

export const experience = [
  {
    company: "Tatvaops by EROEI Tech Pvt Ltd",
    role: "AI Engineer",
    period: "Jul 2026 — Present",
    location: "Bengaluru, KA",
    bullets: [
      "Building and shipping production GenAI systems across fleet optimization, conversational calculation, vision, and data analysis.",
    ],
  },
  {
    company: "Tatvaops by EROEI Tech Pvt Ltd",
    role: "AI/ML (GenAI) Intern",
    period: "Feb 2026 — Jul 2026",
    location: "Bengaluru, KA",
    bullets: [
      "TatvaConnect: optimized logistics with ML, integrated LLMs for conversational weight calculations, deployed SAM object detection, and configured MCP API integrations with CI/CD via GitHub Actions.",
      "Quotes-Comparison: engineered a VLM-driven quotation evaluation system with Supabase pipelines and automated cron deployments.",
      "Property Recommender Chatbot: built a custom RAG assistant with hybrid SLM/VLM architecture and strict prompt engineering.",
    ],
  },
] as const

export const focusAreas = [
  "Generative AI & RAG Systems",
  "Applied Machine Learning",
  "MLOps & Full-Stack Deployment",
] as const

export const services = [
  {
    title: "Applied Machine Learning",
    text: "From framing the problem to feature engineering, training, and honest evaluation, I build models that hold up on real data instead of only on a clean test split.",
  },
  {
    title: "Generative AI & Retrieval Systems",
    text: "Retrieval-native assistants, agentic workflows, and disciplined prompt engineering, designed so answers stay grounded, traceable, and measurably useful.",
  },
  {
    title: "ML Engineering & Deployment",
    text: "Supabase pipelines, cron jobs, and GitHub Actions deployments across Vercel and Render, so the work keeps running long after the demo.",
  },
] as const

export const certifications = [
  {
    slug: "coursera-rag",
    title: "RAG Specialist",
    tag: "Specialization",
    issuer: "Coursera / DeepLearning.AI",
    image: "/certificates/coursera.png",
    description: "Building robust retrieval-augmented generation pipelines and vector integrations.",
    wide: true,
  },
  {
    slug: "jpmorgan-quantitative-research",
    title: "Quantitative Research",
    tag: "Job Simulation",
    issuer: "J.P. Morgan & Chase",
    image: "/certificates/JPMorganChase&Co.png",
    description: "Advanced simulations in quantitative analysis and mathematical modeling.",
    wide: false,
  },
  {
    slug: "zscaler-cloud-security",
    title: "Cloud Security",
    tag: "Virtual Internship",
    issuer: "Zscaler / EduSkills (AICTE)",
    image: "/certificates/Zscalar.png",
    description: "Cloud security fundamentals and zero-trust architecture practice.",
    wide: false,
  },
  {
    slug: "deloitte-stem",
    title: "STEM Job Simulation",
    tag: "Internship",
    issuer: "Deloitte",
    image: "/certificates/Deloitte.png",
    description: "Applied STEM problem-solving in a professional services context.",
    wide: false,
  },
  {
    slug: "uipath-rpa",
    title: "RPA Developer",
    tag: "Automation",
    issuer: "UiPath",
    image: "/certificates/UI_path.png",
    description: "Designing and implementing automated enterprise workflows.",
    wide: false,
  },
  {
    slug: "oracle-genai",
    title: "OCI 2025 Certified Generative AI Professional",
    tag: "GenAI Professional",
    issuer: "Oracle",
    image: "/certificates/Oracle.png",
    description: "Deploying and managing GenAI solutions on Oracle Cloud Infrastructure.",
    wide: true,
  },
] as const

export const notes = [
  {
    slug: "ai-agent-memory",
    title: "Beyond the Context Window: Why AI Agents Need Memory",
    type: "Technical blog · Hashnode",
    description: "A practical exploration of short-term, long-term, semantic, episodic, and procedural memory for production-grade AI agents.",
    href: "https://hashnode.com/edit/cmpctqeso00812dn8g10pfh3x",
    image: "/projects/project-sentio.jpg",
    wide: true,
  },
  {
    slug: "agentic-gauntlet",
    title: "The Agentic Gauntlet",
    type: "Technical blog · Hashnode",
    description: "From retrieval systems with amnesia to active, problem-solving concierge agents in LLM applications.",
    href: "https://nexora-sentiobot.hashnode.dev/the-agentic-gauntlet-from-amnesia-to-autonomy-in-llm-chatbots",
    image: "/projects/project-oci.jpg",
    wide: false,
  },
] as const

export function getCertification(slug: string) {
  return certifications.find((cert) => cert.slug === slug)
}

export const resources = [
  {
    icon: BriefcaseBusiness,
    title: "Certifications",
    text: "Credentials across cloud, AI, and modern engineering practice.",
    href: "/certifications",
  },
  {
    icon: FileText,
    title: "Technical papers",
    text: "Research exploring responsible, secure machine learning.",
    href: "/research",
  },
  {
    icon: BookOpen,
    title: "Notes & blog",
    text: "Writing about models, systems, and the lessons between them.",
    href: "/notes",
  },
] as const

export const skills = [
  ["Python", "python", "3776AB"],
  ["SQL", "databricks", "FF3621"],
  ["FastAPI", "fastapi", "009688"],
  ["Node.js", "nodedotjs", "5FA04E"],
  ["TypeScript", "typescript", "3178C6"],
  ["C++", "cplusplus", "00599C"],
  ["Streamlit", "streamlit", "FF4B4B"],
  ["TensorFlow", "tensorflow", "FF6F00"],
  ["PyTorch", "pytorch", "EE4C2C"],
  ["Scikit-learn", "scikitlearn", "F7931E"],
  ["Hugging Face", "huggingface", "FFD21E"],
  ["OpenCV", "opencv", "5C3EE8"],
  ["RAG", "", ""],
  ["Agentic AI", "", ""],
  ["Prompt Engineering", "", ""],
  ["LangChain", "langchain", "1C3C3C"],
  ["LangGraph", "", ""],
  ["Vector Databases", "", ""],
  ["Memory Engineering", "", ""],
  ["MLOps", "", ""],
  ["Git", "git", "F05032"],
  ["GitHub Actions", "githubactions", "2088FF"],
  ["Docker", "docker", "2496ED"],
  ["CI/CD", "", ""],
  ["VS Code", "visualstudiocode", "007ACC"],
  ["Jupyter Notebook", "jupyter", "F37626"],
  ["Google Colab", "googlecolab", "F9AB00"],
  ["UiPath", "uipath", "FA4616"],
] as const

export const education = {
  degree: "B.E., Computer Science & Engineering",
  school: "AMC Engineering College, Visvesvaraya Technological University (VTU)",
  period: "2022 — 2026 (Expected)",
  score: "CGPA 9.01 / 10.0",
} as const

export const achievements = [
  "Advanced through national rounds of Smart India Hackathon (SIH) and HackFest.",
  "Technical Coordinator / Volunteer for HackZion v1.0.",
  "Published multiple open-source ML and blockchain projects on GitHub.",
] as const

export const reveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
} as const
