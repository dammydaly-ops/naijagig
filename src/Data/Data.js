/* ═══════════════════════════════════════════
   DATA
═══════════════════════════════════════════ */
import {
  FiGlobe, FiCode, FiLayout, FiSmartphone, FiBarChart2, FiShield, FiVideo,
  FiTrendingUp, FiImage, FiScissors, FiTool, FiZap, FiDroplet, FiSettings,
  FiCamera, FiMusic, FiFileText, FiBook, FiHome, FiBriefcase, FiHeart,
  FiSearch, FiUser, FiMessageSquare, FiStar, FiMapPin, FiPhone, FiMail,
  FiPlus, FiX, FiCheck, FiLogOut, FiGrid, FiList, FiChevronRight,
  FiAward, FiClock, FiPackage, FiEdit3, FiTrash2, FiArrowLeft,
  FiShoppingBag, FiTruck, FiCoffee, FiWind, FiSun, FiLayers,
  FiCheckCircle, FiAlertCircle, FiEye, FiMenu, FiSliders,
  FiPrinter, FiScissors as FiBarber, FiKey, FiDollarSign
} from "react-icons/fi";

import { GiSewingNeedle, GiCookingPot, GiCarWheel, GiWoodBeam, GiElectric } from "react-icons/gi";
import { MdOutlineCleaningServices, MdSecurity, MdOutlinePets } from "react-icons/md";
import { TbMassage, TbPlant2 } from "react-icons/tb";



export const CATS = [
  { id: "all", label: "All", Icon: FiGlobe },
  // Tech
  { id: "dev", label: "Web Dev", Icon: FiCode, group: "Tech" },
  { id: "design", label: "UI/UX Design", Icon: FiLayout, group: "Tech" },
  { id: "mobile", label: "Mobile Dev", Icon: FiSmartphone, group: "Tech" },
  { id: "data", label: "Data Science", Icon: FiBarChart2, group: "Tech" },
  { id: "cyber", label: "Cybersecurity", Icon: FiShield, group: "Tech" },
  { id: "video", label: "Video Editing", Icon: FiVideo, group: "Tech" },
  { id: "seo", label: "SEO/Marketing", Icon: FiTrendingUp, group: "Tech" },
  { id: "graphics", label: "Graphics", Icon: FiImage, group: "Tech" },
  { id: "it", label: "IT Support", Icon: FiSettings, group: "Tech" },
  { id: "printing", label: "Printing", Icon: FiPrinter, group: "Tech" },
  // Trades
  { id: "tailor", label: "Tailors", Icon: FiScissors, group: "Trades" },
  { id: "cobbler", label: "Cobblers", Icon: FiPackage, group: "Trades" },
  { id: "welder", label: "Welders", Icon: FiTool, group: "Trades" },
  { id: "carpenter", label: "Carpenters", Icon: FiLayers, group: "Trades" },
  { id: "electrician", label: "Electricians", Icon: FiZap, group: "Trades" },
  { id: "plumber", label: "Plumbers", Icon: FiDroplet, group: "Trades" },
  { id: "mechanic", label: "Mechanics", Icon: FiSettings, group: "Trades" },
  { id: "painter", label: "Painters", Icon: FiEdit3, group: "Trades" },
  { id: "bricklayer", label: "Bricklayers", Icon: FiHome, group: "Trades" },
  { id: "roofing", label: "Roofing", Icon: FiHome, group: "Trades" },
  { id: "tiler", label: "Tilers", Icon: FiGrid, group: "Trades" },
  { id: "glazier", label: "Glaziers / Glass", Icon: FiEye, group: "Trades" },
  { id: "vulcanizer", label: "Vulcanizers", Icon: FiSettings, group: "Trades" },
  { id: "fumigator", label: "Fumigators", Icon: FiWind, group: "Trades" },
  // Creative
  { id: "photo", label: "Photography", Icon: FiCamera, group: "Creative" },
  { id: "makeup", label: "Makeup", Icon: FiSun, group: "Creative" },
  { id: "hair", label: "Hair Styling", Icon: FiBarber, group: "Creative" },
  { id: "catering", label: "Catering", Icon: FiCoffee, group: "Creative" },
  { id: "music", label: "Music/DJ", Icon: FiMusic, group: "Creative" },
  { id: "writing", label: "Writing", Icon: FiFileText, group: "Creative" },
  { id: "event", label: "Event Planning", Icon: FiStar, group: "Creative" },
  { id: "decorator", label: "Decorators", Icon: FiLayers, group: "Creative" },
  { id: "baking", label: "Baking/Pastry", Icon: FiCoffee, group: "Creative" },
  { id: "florist", label: "Florists", Icon: TbPlant2, group: "Creative" },
  { id: "beadwork", label: "Beadwork/Jewelry", Icon: FiAward, group: "Creative" },
  { id: "embroidery", label: "Embroidery", Icon: FiEdit3, group: "Creative" },
  // Professional
  { id: "legal", label: "Legal", Icon: FiBriefcase, group: "Professional" },
  { id: "accounting", label: "Accounting", Icon: FiDollarSign, group: "Professional" },
  { id: "teaching", label: "Tutoring", Icon: FiBook, group: "Professional" },
  { id: "health", label: "Healthcare", Icon: FiHeart, group: "Professional" },
  { id: "realestate", label: "Real Estate", Icon: FiHome, group: "Professional" },
  { id: "security", label: "Security", Icon: FiShield, group: "Professional" },
  { id: "logistics", label: "Logistics/Delivery", Icon: FiTruck, group: "Professional" },
  { id: "cleaning", label: "Cleaning", Icon: FiSun, group: "Professional" },
  { id: "laundry", label: "Laundry", Icon: FiSun, group: "Professional" },
  { id: "massage", label: "Massage Therapy", Icon: TbMassage, group: "Professional" },
  { id: "petcare", label: "Pet Care", Icon: FiHeart, group: "Professional" },
  { id: "driver", label: "Drivers/Haulage", Icon: FiTruck, group: "Professional" },
];

 export const SEED_ARTISANS = [
  {
    id: "a1", name: "Chukwuemeka Obi", role: "Full Stack Developer", category: "dev",
    location: "Lagos, NG", bio: "MERN stack specialist. 6 years building fintech and e-commerce platforms. Previously at Flutterwave.",
    rating: 4.9, reviews: 203, price: "₦50,000/project", tags: ["React", "Node.js", "MongoDB", "AWS"],
    verified: true, phone: "+234 812 111 2222",
    works: [{ title: "Fintech Dashboard", desc: "Payment analytics platform for 50k users", year: "2024" }, { title: "E-commerce App", desc: "Full React Native shopping app with Paystack", year: "2024" }],
    testimonials: [{ name: "Adaeze N.", text: "Emeka built our entire dashboard in 3 weeks. Clean code, great communication. 10/10.", rating: 5 }, { name: "Biodun A.", text: "Fixed a critical bug on our live app at midnight. Professional and skilled.", rating: 5 }]
  },
  {
    id: "a2", name: "Temi Adeyemi", role: "UI/UX Designer", category: "design",
    location: "Lagos, NG", bio: "Product designer with a love for clean, conversion-focused interfaces. 50+ products launched.",
    rating: 4.8, reviews: 167, price: "₦30,000/project", tags: ["Figma", "Prototyping", "Design Systems", "Branding"],
    verified: true, phone: "+234 803 222 3333",
    works: [{ title: "NeoBank App Design", desc: "Full redesign that increased conversions by 40%", year: "2024" }, { title: "Brand Identity", desc: "Visual identity for 12 Nigerian startups", year: "2024" }],
    testimonials: [{ name: "Kelechi M.", text: "Temi redesigned our app and our downloads tripled in a month. Absolutely brilliant.", rating: 5 }]
  },
  {
    id: "a3", name: "Mama Chisom Atelier", role: "Master Tailor", category: "tailor",
    location: "Surulere, Lagos", bio: "15 years crafting Ankara, Aso-Oke, and contemporary Nigerian fashion. Wedding specialist.",
    rating: 4.9, reviews: 312, price: "₦8,000/outfit", tags: ["Ankara", "Agbada", "Bridal", "Aso-ebi"],
    verified: true, phone: "+234 805 333 4444",
    works: [{ title: "Bridal Party (40 outfits)", desc: "Matching aso-ebi for full wedding party, delivered in 2 weeks", year: "2024" }],
    testimonials: [{ name: "Mrs. Okafor", text: "She made 40 aso-ebi pieces for my wedding. Every single one was perfect.", rating: 5 }]
  },
  {
    id: "a4", name: "Adaeze Hair Studio", role: "Hair Stylist", category: "hair",
    location: "Victoria Island, Lagos", bio: "Natural hair, braids, locs, and luxury weaves. 500+ happy clients. Walk-ins welcome.",
    rating: 5.0, reviews: 445, price: "₦3,500+", tags: ["Braids", "Natural", "Locs", "Weaves"],
    verified: true, phone: "+234 815 444 5555",
    works: [{ title: "Knotless Braids", desc: "Box braids, knotless, goddess — all lengths", year: "2024" }],
    testimonials: [{ name: "Chidinma E.", text: "Best knotless braids I've ever had. Still holding after 6 weeks!", rating: 5 }]
  },
  {
    id: "a5", name: "Kelechi Lens", role: "Photographer", category: "photo",
    location: "Lekki, Lagos", bio: "Wedding, events, and brand photography. Featured in TW Magazine. Drone shots available.",
    rating: 4.9, reviews: 189, price: "₦50,000/event", tags: ["Wedding", "Events", "Portrait", "Drone"],
    verified: true, phone: "+234 705 555 6666",
    works: [{ title: "Wedding Coverage", desc: "Full-day coverage + edited gallery within 2 weeks", year: "2024" }],
    testimonials: [{ name: "Ngozi & Emeka", text: "Our wedding photos were absolutely stunning. Kelechi captured every moment.", rating: 5 }]
  },
  {
    id: "a6", name: "Tunde Woodworks", role: "Carpenter", category: "carpenter",
    location: "Ikorodu, Lagos", bio: "Bespoke furniture, wardrobes, and kitchen cabinets. Premium hardwood. 10-year guarantee.",
    rating: 4.8, reviews: 156, price: "₦20,000+", tags: ["Furniture", "Cabinets", "Bespoke", "Hardwood"],
    verified: true, phone: "+234 901 666 7777",
    works: [{ title: "Custom Dining Set", desc: "8-seater solid oak dining table and chairs", year: "2024" }],
    testimonials: [{ name: "Dr. Bello", text: "Tunde built our entire home office. Quality that will last decades.", rating: 5 }]
  },
  {
    id: "a7", name: "Ibrahim Suleiman", role: "Cybersecurity Analyst", category: "cyber",
    location: "Abuja, NG", bio: "Ethical hacker and security consultant. Protect your business from cyber threats. OSCP certified.",
    rating: 4.7, reviews: 67, price: "₦80,000/audit", tags: ["Pentesting", "OSCP", "Network Security", "Compliance"],
    verified: true, phone: "+234 812 777 8888",
    works: [{ title: "Security Audit", desc: "Full penetration test for Lagos fintech startup", year: "2024" }],
    testimonials: [{ name: "CTO, PayNG", text: "Ibrahim found 12 critical vulnerabilities our team missed. Saved our company.", rating: 5 }]
  },
  {
    id: "a8", name: "Glamour by Ngozi", role: "Makeup Artist", category: "makeup",
    location: "Abuja, FCT", bio: "Bridal, editorial and everyday glam. Over 500 brides served. Gele tying included.",
    rating: 4.9, reviews: 521, price: "₦15,000+", tags: ["Bridal", "Editorial", "Gele", "HD Makeup"],
    verified: true, phone: "+234 907 888 9999",
    works: [{ title: "Bridal Glam", desc: "Full bridal makeup + gele for 200+ weddings", year: "2024" }],
    testimonials: [{ name: "Amaka O.", text: "I cried when I saw myself in the mirror on my wedding day. So beautiful.", rating: 5 }]
  },
  {
    id: "a9", name: "Bright Sparks Electric", role: "Electrician", category: "electrician",
    location: "Yaba, Lagos", bio: "Residential and commercial installations. Solar, inverters, and emergency repairs 24/7.",
    rating: 4.5, reviews: 98, price: "₦5,000+", tags: ["Solar", "Inverter", "Installation", "24/7"],
    verified: true, phone: "+234 812 999 0000",
    works: [{ title: "Solar Installation", desc: "5KVA solar system for Ikeja home", year: "2024" }],
    testimonials: [{ name: "Mr. Adewale", text: "Installed our solar system quickly and professionally. No NEPA stress anymore!", rating: 5 }]
  },
  {
    id: "a10", name: "Fatima Writes", role: "Content Writer", category: "writing",
    location: "Kano, NG", bio: "SEO content, copywriting, and brand storytelling for Nigerian and global brands.",
    rating: 4.8, reviews: 134, price: "₦5,000/article", tags: ["SEO", "Copywriting", "Blogging", "Brand Voice"],
    verified: false, phone: "+234 803 010 1011",
    works: [{ title: "SEO Blog Series", desc: "50-article series that ranked page 1 for fintech keywords", year: "2024" }],
    testimonials: [{ name: "CEO, TechNG", text: "Fatima's copy doubled our website conversions. She gets Nigerian audiences.", rating: 5 }]
  },
  {
    id: "a11", name: "Daniel Graphics", role: "Graphic Designer", category: "graphics",
    location: "Port Harcourt, NG", bio: "Brand identity, social media graphics, flyers, and motion design. Adobe Suite master.",
    rating: 4.7, reviews: 211, price: "₦8,000/design", tags: ["Branding", "Logo", "Motion", "Social Media"],
    verified: true, phone: "+234 805 111 2222",
    works: [{ title: "Brand Identity", desc: "Full brand kits for 30+ Nigerian businesses", year: "2024" }],
    testimonials: [{ name: "Blessing A.", text: "Daniel's logo for my business is so professional. Got compliments from day one.", rating: 5 }]
  },
  {
    id: "a12", name: "Iya Beji Kitchen", role: "Caterer", category: "catering",
    location: "Ikeja, Lagos", bio: "Authentic Nigerian cuisine for events. Minimum 50 guests. Jollof rice queen.",
    rating: 4.8, reviews: 267, price: "₦1,200/plate", tags: ["Jollof", "Events", "Yoruba", "Buffet"],
    verified: true, phone: "+234 803 222 3344",
    works: [{ title: "Wedding Catering", desc: "500-guest wedding buffet — full Nigerian spread", year: "2024" }],
    testimonials: [{ name: "Funke A.", text: "The jollof rice had people sneaking back for 4th helpings. Absolute legend!", rating: 5 }]
  },
  // New artisans
  {
    id: "a13", name: "Mama Tope Pastry", role: "Baker & Pastry Chef", category: "baking",
    location: "Ibadan, Oyo", bio: "Custom cakes, small chops, and pastries. Wedding cakes and celebration orders our specialty. 8 years experience.",
    rating: 4.9, reviews: 198, price: "₦15,000+", tags: ["Wedding Cakes", "Small Chops", "Puff-puff", "Custom Cakes"],
    verified: true, phone: "+234 805 400 5100",
    works: [{ title: "5-tier Wedding Cake", desc: "Fondant masterpiece for 300-guest wedding in Ibadan", year: "2024" }, { title: "Corporate Small Chops", desc: "Monthly supply for tech company office parties", year: "2024" }],
    testimonials: [{ name: "Mrs. Kehinde", text: "Her puff-puff alone made people want to stay all night. Absolutely delicious!", rating: 5 }, { name: "Ola T.", text: "The wedding cake was a work of art. Guests kept asking for her contact.", rating: 5 }]
  },
  {
    id: "a14", name: "Femi Stitches", role: "Embroidery & Beadwork Artist", category: "embroidery",
    location: "Enugu, NG", bio: "Custom embroidery on agbada, gele, and garments. Also handmade beaded jewelry and accessories.",
    rating: 4.8, reviews: 89, price: "₦5,000+", tags: ["Embroidery", "Beads", "Agbada", "Accessories"],
    verified: true, phone: "+234 706 300 4400",
    works: [{ title: "Hand-Embroidered Agbada", desc: "Gold-thread embroidery for senator's chieftaincy ceremony", year: "2024" }],
    testimonials: [{ name: "Chief Okafor", text: "My agbada had the most intricate embroidery anyone had ever seen. Femi is gifted.", rating: 5 }]
  },
  {
    id: "a15", name: "Chidi Vulcanize & Fix", role: "Vulcanizer & Auto Mechanic", category: "vulcanizer",
    location: "Oshodi, Lagos", bio: "Tyre puncture repair, pressure checks, wheel balancing, and minor auto repairs. Quick service, fair prices.",
    rating: 4.6, reviews: 312, price: "₦500+", tags: ["Tyres", "Puncture", "Wheel Balancing", "Car Repair"],
    verified: false, phone: "+234 901 550 6600",
    works: [{ title: "Fleet Tyre Service", desc: "Regular maintenance for 20-vehicle logistics company", year: "2024" }],
    testimonials: [{ name: "Oga Tunde", text: "Always there when I need him. Fixed my tyre at 11pm without complaint.", rating: 5 }]
  },
  {
    id: "a16", name: "Mama Adunni Laundry", role: "Laundry & Dry Cleaning", category: "laundry",
    location: "Surulere, Lagos", bio: "Professional laundry, ironing, and dry cleaning. Home pickup and delivery available. Agbada and wedding dress specialist.",
    rating: 4.7, reviews: 425, price: "₦500/item", tags: ["Dry Cleaning", "Agbada", "Home Pickup", "Bridal"],
    verified: true, phone: "+234 803 660 7700",
    works: [{ title: "Event Garment Service", desc: "Cleaned and pressed 60 outfits for wedding party the night before", year: "2024" }],
    testimonials: [{ name: "Bimpe A.", text: "Returned my designer agbada looking brand new. She knows her work.", rating: 5 }]
  },
  {
    id: "a17", name: "Kolade Fumigation Services", role: "Fumigator & Pest Control", category: "fumigator",
    location: "Lagos Island, Lagos", bio: "Comprehensive fumigation for homes, offices, and warehouses. Termites, bedbugs, cockroaches, rodents. Licensed and insured.",
    rating: 4.5, reviews: 143, price: "₦15,000/house", tags: ["Fumigation", "Termite", "Bedbugs", "Rodents"],
    verified: true, phone: "+234 812 770 8800",
    works: [{ title: "Warehouse Fumigation", desc: "Complete pest control for 5000sqm warehouse in Apapa", year: "2024" }],
    testimonials: [{ name: "Alhaji Musa", text: "Completely cleared our bedbug problem that two other companies couldn't fix.", rating: 5 }]
  },
  {
    id: "a18", name: "Sister Grace Cleaner", role: "Home & Office Cleaner", category: "cleaning",
    location: "Lekki, Lagos", bio: "Deep cleaning, post-event cleanup, and regular home maintenance. Trusted in 200+ homes across Lekki and VI.",
    rating: 4.8, reviews: 367, price: "₦5,000/visit", tags: ["Deep Clean", "Post-Event", "Home", "Office"],
    verified: true, phone: "+234 805 880 9900",
    works: [{ title: "Post-Wedding Venue Cleanup", desc: "Cleaned 500-person event hall overnight for morning corporate booking", year: "2024" }],
    testimonials: [{ name: "Mrs. Adeniran", text: "Grace cleaned my house so well my mother-in-law thought I had new furniture.", rating: 5 }]
  },
  {
    id: "a19", name: "Alhaji Bello Logistics", role: "Haulage & Delivery", category: "logistics",
    location: "Kano, NG", bio: "Trusted goods haulage and delivery across Northern Nigeria. Refrigerated van available for perishables. Bulk and single orders.",
    rating: 4.6, reviews: 91, price: "₦10,000+", tags: ["Haulage", "Delivery", "Kano", "Bulk Goods"],
    verified: true, phone: "+234 706 990 1010",
    works: [{ title: "Cross-State Haulage", desc: "Regular Lagos-Kano goods delivery for textile merchant", year: "2024" }],
    testimonials: [{ name: "Alhaja Zainab", text: "My goods always arrive on time and intact. Alhaji Bello is trustworthy.", rating: 5 }]
  },
  {
    id: "a20", name: "Nkechi Beadwork Studio", role: "Beadwork & Jewelry Maker", category: "beadwork",
    location: "Nnewi, Anambra", bio: "Handcrafted Igbo beaded jewelry, waist beads, necklaces, and bridal sets. Traditional and contemporary styles.",
    rating: 4.9, reviews: 156, price: "₦3,000+", tags: ["Waist Beads", "Bridal Set", "Igbo Jewelry", "Custom"],
    verified: true, phone: "+234 803 110 2020",
    works: [{ title: "Bridal Bead Set", desc: "Full bridal jewelry collection for Igbo traditional wedding", year: "2024" }],
    testimonials: [{ name: "Adaeze O.", text: "My traditional marriage beads were the most beautiful I've ever seen. Thank you Nkechi!", rating: 5 }]
  },
  {
    id: "a21", name: "Architect Seun Designs", role: "Architect & Building Designer", category: "realestate",
    location: "Abuja, FCT", bio: "Residential and commercial building design, renovation consulting, and 3D rendering. ARCON certified.",
    rating: 4.8, reviews: 64, price: "₦100,000+", tags: ["Architecture", "3D Render", "Renovation", "Commercial"],
    verified: true, phone: "+234 805 220 3030",
    works: [{ title: "5-Bedroom Duplex Design", desc: "Full architectural drawings and 3D renders for Abuja client", year: "2024" }],
    testimonials: [{ name: "Engr. Abubakar", text: "Seun's design for our office building exceeded all expectations. Clients are always impressed.", rating: 5 }]
  },
  {
    id: "a22", name: "DJ Kwame Vibes", role: "DJ & Music Producer", category: "music",
    location: "Lagos, NG", bio: "Professional DJ for weddings, clubs, concerts and corporate events. Also beats production and podcast mixing.",
    rating: 4.9, reviews: 234, price: "₦50,000/event", tags: ["Afrobeats", "Wedding DJ", "Club", "Beats"],
    verified: true, phone: "+234 812 330 4040",
    works: [{ title: "Lagos Celebrity Wedding", desc: "6-hour DJ set for 1000-guest luxury wedding at Eko Hotel", year: "2024" }],
    testimonials: [{ name: "Toyin A.", text: "Kwame kept the dance floor packed all night. Guests are still talking about it!", rating: 5 }]
  },
  {
    id: "a23", name: "Mama Blessing Florist", role: "Florist & Event Decorator", category: "florist",
    location: "Port Harcourt, NG", bio: "Fresh and artificial flower arrangements for weddings, burials, and events. Indoor plant sales too.",
    rating: 4.7, reviews: 112, price: "₦20,000+", tags: ["Flowers", "Weddings", "Events", "Indoor Plants"],
    verified: true, phone: "+234 903 440 5050",
    works: [{ title: "Church Wedding Décor", desc: "Full floral décor for 800-guest Catholic wedding ceremony", year: "2024" }],
    testimonials: [{ name: "Pastor Mrs. Eze", text: "The church looked like heaven itself. Absolutely breathtaking work.", rating: 5 }]
  },
  {
    id: "a24", name: "Uncle Mike IT Support", role: "IT Support & Computer Repair", category: "it",
    location: "Yenagoa, Bayelsa", bio: "Laptop repair, virus removal, network setup, CCTV installation, and IT consulting for small businesses.",
    rating: 4.5, reviews: 78, price: "₦3,000+", tags: ["Laptop Repair", "CCTV", "Network", "Virus Removal"],
    verified: false, phone: "+234 703 550 6060",
    works: [{ title: "Office Network Setup", desc: "Full LAN and WiFi setup for 30-person government office", year: "2024" }],
    testimonials: [{ name: "Mr. Dickson", text: "Fixed my laptop in 2 hours after another technician had it for 2 weeks. Excellent!", rating: 5 }]
  },
  {
    id: "a25", name: "Hajia Printing House", role: "Printer & Graphic Finisher", category: "printing",
    location: "Kaduna, NG", bio: "Business cards, banners, flyers, brochures, and branded merchandise. Fast turnaround. Pickup and delivery available.",
    rating: 4.6, reviews: 289, price: "₦1,500+", tags: ["Business Cards", "Banners", "Flyers", "Branding"],
    verified: true, phone: "+234 805 660 7070",
    works: [{ title: "Political Campaign Materials", desc: "500,000 flyers and 2,000 banners for governorship campaign", year: "2024" }],
    testimonials: [{ name: "Campaign Manager", text: "Delivered 500k flyers in 48 hours with perfect quality. Unbelievable turnaround.", rating: 5 }]
  },
];

export const TESTIMONIALS = [
  { name: "Chidi Okonkwo", role: "Startup Founder, Lagos", text: "Found my web developer and designer on NijaGig. Launched in 3 weeks. The talent in Nigeria is world-class — NijaGig just makes it accessible.", rating: 5 },
  { name: "Aisha Mohammed", role: "Bride, Abuja", text: "Booked my tailor, makeup artist, and caterer all from NijaGig. My wedding was flawless. Every vendor delivered exactly as promised.", rating: 5 },
  { name: "Emeka Nwosu", role: "Product Manager, Lagos", text: "Needed a cybersecurity audit urgently. Found a certified professional in 20 minutes. NijaGig is the LinkedIn we actually needed.", rating: 5 },
  { name: "Tolani Badmus", role: "Event Planner, Lagos", text: "I use NijaGig for every single event. Caterers, photographers, decorators — all verified, all professional. My clients are always impressed.", rating: 5 },
  { name: "Dr. Yusuf Bello", role: "Physician, Kano", text: "Found a reliable plumber and electrician through NijaGig. Both showed up on time, which is rare. The platform is a game changer for Nigeria.", rating: 5 },
  { name: "Sade Oduya", role: "Fashion Designer, Lagos", text: "Hired a graphic designer for my brand identity. The quality was agency-level at a fraction of the price. NijaGig is genuinely changing lives.", rating: 5 },
  { name: "Uchenna Obiora", role: "Restaurant Owner, Enugu", text: "Found my baker, event decorator and DJ all in one place. My restaurant launch party was the talk of Enugu. NijaGig saved me so much stress.", rating: 5 },
  { name: "Maryam Yakubu", role: "Mother & Entrepreneur, Kano", text: "I hired a cleaner, a laundry woman and a home cook all from NijaGig. These women changed my life. Real talent, real Nigerians.", rating: 5 },
  { name: "Barrister Ekene", role: "Lawyer, Abuja", text: "The beadwork artist I found made my wife's traditional wedding jewelry. She literally cried tears of joy. I'll never use anyone else.", rating: 5 },
];