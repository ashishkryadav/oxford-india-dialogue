export const IMG = "https://www.oxfordindiaforum.com.jeinv.com/assets/images/";

export const REGISTER_URL = "https://cvent.me/9Mb8LP";
export const CONTACT_EMAIL = "sidharth.sethi.MBA22@said.oxford.edu";
export const EVENT_DATES = "26 – 27 June 2027";

export type Person = { name: string; title: string; photo: string };
export type Partner = { name: string; logo: string };
export type Photo = { src: string; alt: string };
export type Video = { name: string; url: string };
export type NewsItem = { title: string; url: string; source: string; date: string; image: string };
export type Session = { time: string; title: string; people: string; kind: string; isBreak: boolean };
export type Faq = { q: string; a: string };

const p = (dir: string, file: string, name: string, title: string): Person => ({
  name,
  title,
  photo: `${IMG}${dir}/${file}`,
});

export const guestOfHonour = p("speakers", "ajay-piramal.jpg", "Ajay Piramal", "Chairman, Piramal Group");

export const speakers: Person[] = [
  p("speakers", "s-somanath.jpg", "S. Somanath", "Former Chairperson, ISRO"),
  p("speakers", "kali-purie.jpg", "Kalli Purie", "Vice Chairperson, India Today Group"),
  p("speakers", "rajeev-chandrasekhar.jpg", "Rajeev Chandrasekhar", "Former Minister of Electronics & IT, Government of India"),
  p("speakers", "preetha-reddy.jpg", "Preetha Reddy", "Vice Chairperson, Apollo Hospitals"),
  p("speakers", "vikram-doraiswami.jpg", "Vikram Doraiswami", "High Commissioner of India to the UK"),
  p("speakers", "naushad-forbes.jpg", "Naushad Forbes", "Co-Chairperson, Forbes Marshall"),
  p("speakers", "ronnie-screwvala.jpg", "Ronnie Screwvala", "Co-founder, upGrad & Swades Foundation"),
  p("speakers", "priya-agarwal.jpeg", "Priya Agarwal", "Chairperson, Hindustan Zinc; Non-executive Director, Vedanta"),
  p("speakers", "shashwat-goenka.jpeg", "Shashwat Goenka", "Vice Chairperson, RP-Sanjiv Goenka Group"),
  p("speakers", "gauranga-das.jpg", "Gauranga Das", "Spiritual Leader"),
  p("speakers", "vijay-chauthaiwale.jpeg", "Vijay Chauthaiwale", "In-Charge, Foreign Affairs Department, BJP"),
  p("speakers", "sameer-chauhan.jpg", "Sameer Chauhan", "Director (CEO), UNICC"),
  p("speakers", "k-t-rama-rao.jpg", "K.T. Rama Rao", "President, BRS; Former Minister, Government of Telangana"),
  p("speakers", "rishabh-shroff.jpg", "Rishabh Shroff", "Partner, Cyril Amarchand Mangaldas"),
  p("speakers", "varun-chaudhary.jpg", "Varun Chaudhary", "Managing Director, CG Corp"),
  p("speakers", "sunil-munjal.jpg", "Sunil Kant Munjal", "Chairperson, Hero Enterprise"),
  p("speakers", "anurag-batra.jpg", "Annurag Batra", "Chairperson, BW Businessworld & exchange4media Group"),
  p("speakers", "karan-bilimoria.jpg", "Lord Karan Bilimoria", "Founder, Cobra Beer"),
  p("speakers", "chandrajit-banerjee.jpg", "Chandrajit Banerjee", "Director General, CII"),
  p("speakers", "rajiv-memani.jpg", "Rajiv Memani", "Chairman and CEO, EY India"),
];

export const moderators: Person[] = [
  p("moderators", "shankar-vanavarayar.jpg", "Shankar Vanavarayar", "Educationist, Entrepreneur & Cultural Advocate"),
  p("moderators", "prachetas-bhatnagar.jpg", "Prachetas Bhatnagar", "Head of Strategy & Operations, Tony Blair Institute for Global Change"),
  p("moderators", "mitesh-kothari.jpg", "Mitesh Kothari", "Co-founder & Chief Creative Officer, White Rivers Media"),
  p("moderators", "meghna-das.jpg", "Meghna Das", "Head of International Programmes Impact, UNICEF UK"),
  p("moderators", "radhika-khosla.jpg", "Radhika Khosla", "Associate Professor, Smith School of Enterprise and Environment"),
  p("team", "kanksshi-agarwal.jpg", "Kanksshi Agarwal", "Convenor, Oxford India Dialogue"),
];

export const pastSpeakers: Person[] = [
  p("speakers", "k-annamalai.jpg", "Annamalai K", "State President, BJP (Tamil Nadu)"),
  p("speakers", "jayant-sinha.jpg", "Jayant Sinha", "Former Minister of State for Finance, Civil Aviation"),
  p("speakers", "mohandas-pai.jpg", "Mohandas Pai", "Chairman, Aarin Capital Partners and 3One4 Capital"),
  p("speakers", "ananya-birla.jpg", "Ananya Birla", "Businessperson"),
  p("speakers", "rohan-murthy.jpg", "Rohan Murty", "Founder and CTO, Soroco"),
  p("speakers", "harsh-jain.jpg", "Harsh Jain", "CEO & Co-Founder, Dream Sports and Dream11"),
  p("speakers", "sunjay-kapur.jpg", "Sunjay Kapur", "Chairman, Sona Comstar"),
  p("speakers", "christoph-tang.jpg", "Christoph Tang", "Professor of Cellular Pathology, University of Oxford"),
  p("speakers", "myles-allen.jpg", "Myles Allen", "Professor of Geosystem Science, University of Oxford"),
];

export const advisorsIndustry: Person[] = [
  p("speakers", "ananya-birla.jpg", "Ananya Birla", "Businessperson"),
  p("advisors", "vivek-agrawal.png", "Vivek Agarwal", "Country Director, India, Tony Blair Institute for Global Change"),
  p("speakers", "rishabh-shroff.jpg", "Rishabh Shroff", "Partner, Cyril Amarchand Mangaldas"),
  p("advisors", "boria-majumdar.jpg", "Boria Majumdar", "Prominent Sports Journalist"),
];

export const advisorsProfessors: Person[] = [
  p("speakers", "chas-bountra.jpg", "Chas Bountra", "Pro-Vice Chancellor for Innovation"),
  p("advisors", "dean-soumitra-dutta.jpg", "Soumitra Dutta", "Dean, Saïd Business School"),
  p("advisors", "maya-tudor.jpg", "Maya Tudor", "Professor of Politics and Public Policy, Blavatnik School of Government"),
  p("advisors", "harish-bhaskaran.jpg", "Harish Bhaskaran", "Associate Head of Division, Department of Materials"),
  p("advisors", "faisal-devji.jpg", "Faisal Devji", "Professor of Indian History"),
  p("advisors", "subir-sarkar.jpg", "Subir Sarkar", "Professor of Theoretical Physics"),
  p("advisors", "arjune-sen.jpg", "Arjune Sen", "Consultant Neurologist; Head, Oxford Epilepsy Research Group"),
  p("advisors", "ankhi-mukherjee.jpg", "Ankhi Mukherjee", "Professor of English and World Literatures; Tutorial Fellow, Wadham College"),
  p("advisors", "siddharth-arora.jpg", "Siddharth Arora", "Programme Director, Oxford India Centre for Sustainable Development"),
  p("advisors", "akshay-mangla.jpg", "Akshay Mangla", "Associate Professor of International Business"),
  p("advisors", "diwakar-acharya.jpg", "Diwakar Acharya", "Spalding Professor of Eastern Religions and Ethics"),
];

export const team: Person[] = [
  p("founders", "sidharth-sethi.jpg", "Sidharth Sethi", "Co-founder and Chairperson"),
  p("founders", "priyansh-gujarati.jpg", "Priyansh Gujarati", "Co-founder"),
  p("team", "kanksshi-agarwal.jpg", "Kanksshi Agarwal", "Convenor"),
  p("team", "archita-sarangi.jpg", "Archita Sarangi", "Co-Head, Partnerships"),
  p("team", "sai-teja.jpg", "Gamalla Sai Teja", "Co-Head, Partnerships"),
  p("team", "ishika-pandey.jpg", "Ishika Pandey", "Partnerships"),
  p("team", "mukul-sahni.jpg", "Mukul Sahni", "Partnerships"),
  p("team", "ajay-reddy.jpg", "Ajay Reddy Samala", "Co-Head, Speaker Outreach"),
  p("team", "shubham-mukkawar.jpg", "Shubham Mukkawar", "Co-Head, Speaker Outreach"),
  p("team", "jeeval-chadha.jpg", "Jeeval Chadha", "Events"),
  p("team", "rishabh-arora.jpg", "Rishabh Arora", "Events"),
  p("team", "vishishta-goyal.jpg", "Vishishta Goyal", "Events"),
  p("team", "pallavi-mahajan.jpg", "Pallavi Mahajan", "Events"),
  p("team", "anirudh-gupta.jpg", "Anirudh Gupta", "Sponsorship"),
  p("team", "jas-gill.jpg", "Jas Gill", "Sponsorship"),
  p("team", "abhay-kumar.jpg", "Abhay Kumar", "Sponsorship"),
  p("team", "taranpreet-singh.jpg", "Taranpreet Singh", "Sponsorship"),
  p("team", "ananya-singh.jpg", "Ananya Kumari Singh", "India Operations"),
  p("team", "khemani-headshot.jpg", "Devika Khemani", "India Operations"),
  p("team", "samir-headshot.jpg", "Samir Padival", "India Operations"),
  p("team", "sakshi-setia.jpg", "Sakshi Setia", "India Operations"),
  p("team", "avinash-kothuri.jpg", "Avinash Kothuri", "Talk Series"),
  p("team", "mohit-kukadia.jpg", "Mohit Kukadia", "Talk Series"),
  p("team", "jayant-vig.jpg", "Jayant Vig", "Talk Series"),
  p("team", "divya-shetty.jpg", "Divya Shetty", "Career Fair"),
  p("team", "snigdha-singh.jpg", "Snigdha Singh", "Career Fair"),
  p("team", "hitesh-dusseja.png", "Hitesh Dusseja", "Career Fair"),
  p("team", "oshil-bansal.jpg", "Oshil Bansal", "Career Fair"),
];

export const partners: Partner[] = (
  [
    ["India Today", "partners/india-today.svg"],
    ["CII", "partners/cii.svg"],
    ["USIA", "sponsors/usia.jpeg"],
    ["AIMA", "sponsors/aima.png"],
    ["Oxford India Centre", "common/oxford-india-center-logo.jpg"],
    ["UNICEF", "sponsors/unicef.png"],
    ["White Rivers Media", "sponsors/wrm.png"],
    ["YOSO", "sponsors/yoso.png"],
    ["Trilegal", "sponsors/trilegal.jpg"],
    ["TechDefence Labs", "sponsors/techdefencelabs.png"],
    ["INDUS", "sponsors/indus.jpeg"],
    ["Seventeen O Two", "sponsors/seventeenotwo.png"],
  ] as const
).map(([name, f]) => ({ name, logo: IMG + f }));

export const gallery: Photo[] = [1, 2, 3, 4, 22, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 19, 18, 21].map((n) => ({
  src: `${IMG}gallery/gallery-${n}.jpg`,
  alt: `Oxford India Dialogue — event photo ${n}`,
}));

export const videos: Video[] = (
  [
    ["Rohan Murty", "https://youtu.be/Kpgy4EjBzoQ"],
    ["Mohandas Pai", "https://www.youtube.com/watch?v=ATW3o6Vh0HI"],
    ["Jayant Sinha", "https://youtu.be/wRcaytivuJw"],
    ["Harsh Jain", "https://www.youtube.com/watch?v=aofF7x74GLo"],
    ["Ananya Birla", "https://youtu.be/7k7GydPh50c"],
    ["Aditya Ghosh", "https://youtu.be/LWRMd1LdGXg"],
    ["Sunjay Kapur", "https://youtu.be/ZygwWmOr4es"],
    ["Dia Mirza", "https://youtu.be/MUKDVIY04wk"],
    ["Pankaj Gupta", "https://www.youtube.com/watch?v=4gF_dnGkvVg"],
    ["Elizabeth Kiss", "https://www.youtube.com/watch?v=sobMe8X1Tr0"],
  ] as const
).map(([name, url]) => ({ name, url }));

const IT = "https://www.indiatoday.in/";
const newsImages = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
export const news: NewsItem[] = (
  [
    ["Oxford India Forum inaugural event highlights: Celebrating India's achievements", "business/story/oxford-india-forum-inaugural-event-highlights-celebrating-indias-achievements-2560031-2024-06-29"],
    ["Want to be world's greenest airline, Akasa Air's Aditya Ghosh at Oxford India Forum", "business/story/want-to-be-greenest-airline-in-the-world-akasa-airs-aditya-ghosh-at-oxford-india-forum-2559886-2024-06-28"],
    ["Harsh Jain shares why India's cultural DNA gives startups winning edge", "business/video/harsh-jain-shares-why-indias-cultural-dna-gives-startups-winning-edge-2559190-2024-06-27"],
    ["Harsh Jain urges regulatory oversight for fantasy gaming", "business/story/oxford-india-forum-harsh-jain-dream11-ceo-urges-regulatory-oversight-for-fantasy-gaming-2559170-2024-06-27"],
    ["We bank the unbanked, says Ananya Birla", "business/story/we-bank-the-unbanked-says-ananya-birla-founder-svatantra-microfin-at-oxford-india-forum-2559208-2024-06-27"],
    ["Dia Mirza calls for systemic change, individual responsibility in climate fight", "environment/story/dia-mirza-calls-for-systemic-change-individual-responsibility-in-climate-fight-2558918-2024-06-27"],
    ["'If India has to grow…': Pankaj Gupta shares mantra", "business/story/oxford-india-forum-pankaj-gupta-success-mantra-improvement-investment-growth-2559845-2024-06-28"],
    ["India's growth to be most exciting in next 5 years, says Mohandas Pai", "business/story/indias-growth-to-be-most-exciting-in-next-5-years-says-mohandas-pai-at-oxford-india-forum-2559091-2024-06-27"],
    ["AI redefining humanity's relationship with words, says Rohan Murty", "business/story/ai-redefining-humanitys-relationship-with-words-says-rohan-murty-at-oxford-india-forum-2558930-2024-06-27"],
    ["Sunjay Kapur on future of EVs and biggest challenges", "business/story/oxford-india-forum-sunjay-kapur-on-future-of-evs-in-india-infrastructure-challenges-2559815-2024-06-28"],
    ["Jayant Sinha calls for 'Net Zero' development model", "business/story/jayant-sinha-calls-for-net-zero-development-model-at-oxford-india-forum-2558990-2024-06-27"],
  ] as const
).map(([title, path], i) => ({
  title,
  url: IT + path,
  source: "India Today",
  date: path.slice(-10),
  image: `${IMG}gallery/gallery-${newsImages[i]}.jpg`,
}));

const s = (time: string, title: string, people: string, kind = "Discussion"): Session => ({
  time,
  title,
  people,
  kind,
  isBreak: kind === "Break",
});

export const agendaDay1: Session[] = [
  s("09:00 – 09:05", "Inaugural Address: Vision, Partners, and Purpose", "Archita Sarangi (Co-Head, Partnerships)", "Opening remarks"),
  s("09:05 – 09:35", "Why stop at the Moon? How India's space missions are rewriting space innovation", "S. Somanath (Former Chairperson, ISRO)"),
  s("09:35 – 10:15", "A Blueprint of Social Conscience: India's role in a new multi-polar world", "Gauranga Das · Vijay Chauthaiwale · Moderator: Annurag Batra"),
  s("10:15 – 10:35", "Coffee break", "", "Break"),
  s("10:35 – 11:10", "Unlocking the $5 trillion economy — activating engines of growth", "Rajiv Memani · Naushad Forbes · Moderator: Shankar Vanavarayar"),
  s("11:10 – 11:35", "Climate Innovation & Industry: Powering India's energy future", "Priya Agarwal · Moderator: Radhika Khosla"),
  s("11:35 – 12:05", "Cultural Capital: Investing in the arts & creativity as a pillar of democratic growth", "Sunil Kant Munjal · Moderator: Chas Bountra"),
  s("12:05 – 12:40", "Unlocking the FTA (UK – India) & beyond", "Lord Karan Bilimoria · Chandrajit Banerjee · Moderator: Faisal Devji"),
  s("12:40 – 13:00", "Lessons in building a South Asian multinational", "Varun Chaudhary (Managing Director, CG Corp)"),
  s("13:00 – 14:00", "Lunch", "", "Break"),
  s("14:00 – 14:45", "India @100 — a developed, confident, compassionate nation", "Guest of Honour Ajay Piramal · Moderator: Vivek Agarwal", "Spotlight session"),
  s("14:45 – 15:05", "Legal reforms and policy changes for India's next decade of growth", "Rishabh Shroff · Moderator: Kanksshi Agarwal"),
  s("15:05 – 15:25", "Coffee break", "", "Break"),
  s("15:25 – 15:55", "Sustainable growth & demographic dividend: Unlocking wealth creation for India's youth", "Shashwat Goenka · Moderator: Meghna Das"),
  s("15:55 – 16:25", "Disrupting sectors: Storytelling, skilling, rural empowerment to entrepreneurship", "Ronnie Screwvala · Moderator: Mitesh Kothari"),
  s("16:25 – 16:55", "Bridges across centuries: Leadership lessons for the algorithm age", "Kalli Purie · Moderator: Kanksshi Agarwal"),
  s("16:55 – 17:35", "AI is India's strategic moment: Building innovation, shaping the global order", "Rajeev Chandrasekhar · Vikram Doraiswami · Sameer Chauhan · Moderator: Prachetas Bhatnagar"),
  s("17:35 – 17:40", "Empowering India's youth", "Ketan Deshpande (Founder, FUEL)", "Closing"),
];

export const agendaDay2: Session[] = [
  s("19:00 – 20:00", "Reception", "Ayaan Agnihotri · Vijay Raghavan", "Reception"),
  s("20:00 – 22:30", "Gala dinner", "Annurag Batra · Anuj Gupta", "Gala"),
];

export const faqs: Faq[] = [
  { q: "Where will the Dialogue be hosted?", a: "Saïd Business School, Park End Street, Oxford OX1 1HP." },
  {
    q: "What is the easiest way to get to Oxford from London?",
    a: "Public transport to Park End Street. The venue is adjacent to Oxford railway station, with direct mainline services from London Paddington and Birmingham; from Heathrow take the fast train to Paddington. The X70 coach runs from Heathrow and Gatwick to Oxford city centre, a short walk from the venue. Oxford also has five Park & Ride sites.",
  },
  {
    q: "Are there reduced train fares for delegates?",
    a: "Yes. In conjunction with GWR, delegates receive a preferred rate from London Paddington: £15 return in Standard Class, £30 return in First Class. Book via GWR Conference Booking (Plan Journey → Conference and Accommodation → Oxford). You must be able to show confirmation of attendance when travelling.",
  },
  {
    q: "Is there parking at Saïd Business School?",
    a: "We don't recommend travelling by car and cannot offer on-site parking (accessibility arrangements can be made on request). Nearby car parks: Oxpens (OX1 1RQ), Worcester Street (OX1 2BQ), Gloucester Green (OX1 2BN). For Sat Nav use OX1 1HP.",
  },
];
