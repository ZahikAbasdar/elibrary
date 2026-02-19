/* ============================================================
   PCTE E-Library Management System
   script.js — Core Application Logic
   Designed by Zaidd
   ============================================================ */

/* ─── SEMESTER-WISE BOOK DATABASE ────────────────────────────
   Covers: B.Tech CSE, ME, CE, BCA  (Sem 1–8 / 1–6 for BCA)
   Each book has:
     coverUrl  — Open Library / OpenStax cover image
     readUrl   — Free legal read / PDF link (archive.org, OpenStax, etc.)
   ──────────────────────────────────────────────────────────── */
const BOOKS = [

  /* ══════════════════════════════════════════════════════════
     B.Tech CSE
     ══════════════════════════════════════════════════════════ */

  /* CSE Semester 1 */
  { id:101, branch:"CSE", sem:1, title:"Engineering Mathematics I",     author:"B.S. Grewal",          category:"Mathematics",   isbn:"978-8174091956", available:true,  color:"#1a3a5c", issues:88,
    coverUrl:"https://covers.openlibrary.org/b/id/8231432-M.jpg",
    readUrl:"https://archive.org/details/higher-engineering-mathematics-b.s.grewal-42nd-edition" },

  { id:102, branch:"CSE", sem:1, title:"Engineering Physics",           author:"R.K. Gaur & S.L. Gupta", category:"Physics",     isbn:"978-8121903455", available:true,  color:"#1a2a4a", issues:72,
    coverUrl:"https://covers.openlibrary.org/b/id/10775422-M.jpg",
    readUrl:"https://archive.org/details/engineeringphysics_rk_gaur" },

  { id:103, branch:"CSE", sem:1, title:"Engineering Chemistry",         author:"Jain & Jain",           category:"Chemistry",    isbn:"978-8121901482", available:true,  color:"#2a1a4a", issues:65,
    coverUrl:"https://covers.openlibrary.org/b/id/8226197-M.jpg",
    readUrl:"https://archive.org/details/engineering-chemistry-jain-jain" },

  { id:104, branch:"CSE", sem:1, title:"C Programming Language",       author:"Kernighan & Ritchie",    category:"Programming",  isbn:"978-0131103627", available:false, color:"#1a3a1a", issues:95,
    coverUrl:"https://covers.openlibrary.org/b/id/8235150-M.jpg",
    readUrl:"https://archive.org/details/cprogramminglang00kern" },

  /* CSE Semester 2 */
  { id:201, branch:"CSE", sem:2, title:"Engineering Mathematics II",    author:"B.S. Grewal",           category:"Mathematics",  isbn:"978-8174091963", available:true,  color:"#1a3a5c", issues:79,
    coverUrl:"https://covers.openlibrary.org/b/id/8231432-M.jpg",
    readUrl:"https://archive.org/details/higher-engineering-mathematics-b.s.grewal-42nd-edition" },

  { id:202, branch:"CSE", sem:2, title:"Discrete Mathematics",         author:"Kenneth H. Rosen",       category:"Mathematics",  isbn:"978-0073383095", available:true,  color:"#1a2535", issues:84,
    coverUrl:"https://covers.openlibrary.org/b/id/8228693-M.jpg",
    readUrl:"https://archive.org/details/discretemathematics_rosen" },

  { id:203, branch:"CSE", sem:2, title:"Digital Electronics",          author:"Morris Mano",            category:"Electronics",  isbn:"978-8131702703", available:true,  color:"#2a2a1a", issues:77,
    coverUrl:"https://covers.openlibrary.org/b/id/8228522-M.jpg",
    readUrl:"https://archive.org/details/digitaldesign_mano" },

  { id:204, branch:"CSE", sem:2, title:"Data Structures Using C",      author:"Yedidyah Langsam",       category:"Programming",  isbn:"978-8131714041", available:false, color:"#1a3535", issues:91,
    coverUrl:"https://covers.openlibrary.org/b/id/9109532-M.jpg",
    readUrl:"https://archive.org/details/datastructuresal00lang" },

  /* CSE Semester 3 */
  { id:301, branch:"CSE", sem:3, title:"Object Oriented Programming C++","author":"Balaguruswamy",      category:"Programming",  isbn:"978-007133347",  available:true,  color:"#1a2a3a", issues:88,
    coverUrl:"https://covers.openlibrary.org/b/id/8236327-M.jpg",
    readUrl:"https://archive.org/details/objectoriented-programming-with-c-balagurusamy" },

  { id:302, branch:"CSE", sem:3, title:"Database Management Systems",   author:"Ramez Elmasri",         category:"Database",     isbn:"978-0136086208", available:true,  color:"#2a1a2a", issues:82,
    coverUrl:"https://covers.openlibrary.org/b/id/8231488-M.jpg",
    readUrl:"https://archive.org/details/fundamentalsofdatabasesystems-7thedition" },

  { id:303, branch:"CSE", sem:3, title:"Computer Organization",         author:"Carl Hamacher",         category:"Architecture", isbn:"978-0071263511", available:false, color:"#1a3a2a", issues:75,
    coverUrl:"https://covers.openlibrary.org/b/id/8228568-M.jpg",
    readUrl:"https://archive.org/details/computerorganiza0000hamc" },

  { id:304, branch:"CSE", sem:3, title:"Theory of Computation",         author:"Michael Sipser",        category:"Theory",       isbn:"978-1133187790", available:true,  color:"#3a1a1a", issues:69,
    coverUrl:"https://covers.openlibrary.org/b/id/8236200-M.jpg",
    readUrl:"https://archive.org/details/introductiontoth0000sips" },

  /* CSE Semester 4 */
  { id:401, branch:"CSE", sem:4, title:"Operating Systems",             author:"Abraham Silberschatz",  category:"Systems",      isbn:"978-0470128725", available:true,  color:"#1a1a3a", issues:93,
    coverUrl:"https://covers.openlibrary.org/b/id/8236313-M.jpg",
    readUrl:"https://archive.org/details/operating-system-concepts-9th-edition_202009" },

  { id:402, branch:"CSE", sem:4, title:"Analysis of Algorithms",        author:"T.H. Cormen",           category:"Algorithms",   isbn:"978-0262033848", available:false, color:"#1a2a3a", issues:97,
    coverUrl:"https://covers.openlibrary.org/b/id/8231455-M.jpg",
    readUrl:"https://archive.org/details/introductiontoal00corm" },

  { id:403, branch:"CSE", sem:4, title:"Computer Networks",             author:"Andrew Tanenbaum",      category:"Networks",     isbn:"978-0132126953", available:true,  color:"#1a3535", issues:86,
    coverUrl:"https://covers.openlibrary.org/b/id/8231482-M.jpg",
    readUrl:"https://archive.org/details/computernetworks0000tane_x3i4" },

  { id:404, branch:"CSE", sem:4, title:"Software Engineering",          author:"Roger Pressman",        category:"Engineering",  isbn:"978-0078022128", available:true,  color:"#2a1a1a", issues:74,
    coverUrl:"https://covers.openlibrary.org/b/id/8228685-M.jpg",
    readUrl:"https://archive.org/details/softwareengineer00pres" },

  /* CSE Semester 5 */
  { id:501, branch:"CSE", sem:5, title:"Compiler Design",               author:"Alfred V. Aho",         category:"Systems",      isbn:"978-0321486813", available:true,  color:"#1a3a4a", issues:68,
    coverUrl:"https://covers.openlibrary.org/b/id/8228606-M.jpg",
    readUrl:"https://archive.org/details/compilers-principles-techniques-tools-2nd-edition" },

  { id:502, branch:"CSE", sem:5, title:"Artificial Intelligence",       author:"Stuart Russell",        category:"AI/ML",        isbn:"978-0136042594", available:false, color:"#2a3a1a", issues:89,
    coverUrl:"https://covers.openlibrary.org/b/id/8228536-M.jpg",
    readUrl:"https://archive.org/details/artificialintell00russ" },

  { id:503, branch:"CSE", sem:5, title:"Web Technologies",              author:"Chris Bates",           category:"Web",          isbn:"978-0470017616", available:true,  color:"#1a2a1a", issues:71,
    coverUrl:"https://covers.openlibrary.org/b/id/10889643-M.jpg",
    readUrl:"https://archive.org/details/webtechnologies_bates" },

  { id:504, branch:"CSE", sem:5, title:"Python Programming",            author:"Mark Lutz",             category:"Programming",  isbn:"978-1449355739", available:true,  color:"#3a2a1a", issues:92,
    coverUrl:"https://covers.openlibrary.org/b/id/8231500-M.jpg",
    readUrl:"https://archive.org/details/learningpython0000lutz" },

  /* CSE Semester 6 */
  { id:601, branch:"CSE", sem:6, title:"Machine Learning",              author:"Tom M. Mitchell",       category:"AI/ML",        isbn:"978-0070428072", available:true,  color:"#1a3a1a", issues:94,
    coverUrl:"https://covers.openlibrary.org/b/id/8228680-M.jpg",
    readUrl:"https://archive.org/details/machinelearning00mitc" },

  { id:602, branch:"CSE", sem:6, title:"Cloud Computing",               author:"Rajkumar Buyya",        category:"Cloud",        isbn:"978-0470887998", available:false, color:"#1a2a4a", issues:81,
    coverUrl:"https://covers.openlibrary.org/b/id/9778051-M.jpg",
    readUrl:"https://archive.org/details/cloudcomputing_buyya" },

  { id:603, branch:"CSE", sem:6, title:"Information Security",          author:"William Stallings",     category:"Security",     isbn:"978-0134527338", available:true,  color:"#2a1a3a", issues:76,
    coverUrl:"https://covers.openlibrary.org/b/id/8228672-M.jpg",
    readUrl:"https://archive.org/details/cryptographynetw0000stal" },

  { id:604, branch:"CSE", sem:6, title:"Mobile Computing",              author:"Raj Kamal",             category:"Mobile",       isbn:"978-0070669185", available:true,  color:"#3a1a2a", issues:64,
    coverUrl:"https://covers.openlibrary.org/b/id/10506023-M.jpg",
    readUrl:"https://archive.org/details/mobilecomputing_raj_kamal" },

  /* CSE Semester 7 */
  { id:701, branch:"CSE", sem:7, title:"Big Data Analytics",            author:"Seema Acharya",         category:"Data Science", isbn:"978-0071074124", available:true,  color:"#1a3a3a", issues:78,
    coverUrl:"https://covers.openlibrary.org/b/id/10519023-M.jpg",
    readUrl:"https://archive.org/details/bigdataanalytics_seema" },

  { id:702, branch:"CSE", sem:7, title:"Deep Learning",                 author:"Ian Goodfellow",        category:"AI/ML",        isbn:"978-0262035613", available:false, color:"#2a2a3a", issues:96,
    coverUrl:"https://covers.openlibrary.org/b/id/9003571-M.jpg",
    readUrl:"https://archive.org/details/deeplearning_ian_goodfellow" },

  { id:703, branch:"CSE", sem:7, title:"Internet of Things",            author:"Arshdeep Bahga",        category:"IoT",          isbn:"978-0996025546", available:true,  color:"#1a4a2a", issues:73,
    coverUrl:"https://covers.openlibrary.org/b/id/10778432-M.jpg",
    readUrl:"https://archive.org/details/internetofthings_bahga" },

  /* CSE Semester 8 */
  { id:801, branch:"CSE", sem:8, title:"Blockchain Technology",         author:"Chandramouli Subramanian", category:"Blockchain", isbn:"978-9389325386", available:true, color:"#2a1a4a", issues:67,
    coverUrl:"https://covers.openlibrary.org/b/id/10871230-M.jpg",
    readUrl:"https://archive.org/details/blockchain-technology-chandramouli" },

  { id:802, branch:"CSE", sem:8, title:"Software Project Management",   author:"Bob Hughes",            category:"Management",   isbn:"978-0077122799", available:true,  color:"#1a2a2a", issues:58,
    coverUrl:"https://covers.openlibrary.org/b/id/8228710-M.jpg",
    readUrl:"https://archive.org/details/softwareprojectm00hugh" },

  /* ══════════════════════════════════════════════════════════
     B.Tech Mechanical Engineering (ME)
     ══════════════════════════════════════════════════════════ */

  /* ME Semester 1 */
  { id:1001, branch:"ME", sem:1, title:"Engineering Drawing",           author:"N.D. Bhatt",            category:"Drawing",      isbn:"978-9385750670", available:true,  color:"#3a1a1a", issues:82,
    coverUrl:"https://covers.openlibrary.org/b/id/8228554-M.jpg",
    readUrl:"https://archive.org/details/engineeringdrawing_nd_bhatt" },

  { id:1002, branch:"ME", sem:1, title:"Engineering Mechanics",         author:"R.K. Bansal",           category:"Mechanics",    isbn:"978-8131808900", available:true,  color:"#2a1a1a", issues:77,
    coverUrl:"https://covers.openlibrary.org/b/id/8228590-M.jpg",
    readUrl:"https://archive.org/details/engineeringmechanics_bansal" },

  { id:1003, branch:"ME", sem:1, title:"Engineering Mathematics I",     author:"B.S. Grewal",           category:"Mathematics",  isbn:"978-8174091956", available:false, color:"#1a3a5c", issues:88,
    coverUrl:"https://covers.openlibrary.org/b/id/8231432-M.jpg",
    readUrl:"https://archive.org/details/higher-engineering-mathematics-b.s.grewal-42nd-edition" },

  /* ME Semester 2 */
  { id:1101, branch:"ME", sem:2, title:"Thermodynamics",                author:"P.K. Nag",              category:"Thermal",      isbn:"978-0070151413", available:true,  color:"#3a2a1a", issues:75,
    coverUrl:"https://covers.openlibrary.org/b/id/8228700-M.jpg",
    readUrl:"https://archive.org/details/engineeringthermodynamics_nag" },

  { id:1102, branch:"ME", sem:2, title:"Material Science",              author:"V. Raghavan",           category:"Materials",    isbn:"978-8120324558", available:true,  color:"#2a3a1a", issues:68,
    coverUrl:"https://covers.openlibrary.org/b/id/8228640-M.jpg",
    readUrl:"https://archive.org/details/materialscienceengineering_raghavan" },

  /* ME Semester 3 */
  { id:1201, branch:"ME", sem:3, title:"Strength of Materials",         author:"R.K. Bansal",           category:"Mechanics",    isbn:"978-8131808962", available:true,  color:"#3a3a1a", issues:84,
    coverUrl:"https://covers.openlibrary.org/b/id/8228590-M.jpg",
    readUrl:"https://archive.org/details/strengthofmaterials_bansal" },

  { id:1202, branch:"ME", sem:3, title:"Fluid Mechanics",               author:"Frank White",           category:"Fluid",        isbn:"978-0073398273", available:false, color:"#1a2a3a", issues:79,
    coverUrl:"https://covers.openlibrary.org/b/id/8228572-M.jpg",
    readUrl:"https://archive.org/details/fluidmechanics0000whit" },

  /* ME Semester 4 */
  { id:1301, branch:"ME", sem:4, title:"Machine Design",                author:"V.B. Bhandari",         category:"Design",       isbn:"978-0070965164", available:true,  color:"#2a2a2a", issues:73,
    coverUrl:"https://covers.openlibrary.org/b/id/8228632-M.jpg",
    readUrl:"https://archive.org/details/introductiontomachinedesign_bhandari" },

  { id:1302, branch:"ME", sem:4, title:"Manufacturing Technology",      author:"P.N. Rao",              category:"Manufacturing",isbn:"978-0070531697", available:true,  color:"#3a1a2a", issues:66,
    coverUrl:"https://covers.openlibrary.org/b/id/8228644-M.jpg",
    readUrl:"https://archive.org/details/manufacturingtechnology_pnrao" },

  /* ME Semester 5 */
  { id:1401, branch:"ME", sem:5, title:"Heat & Mass Transfer",          author:"J.P. Holman",           category:"Thermal",      isbn:"978-0071072540", available:true,  color:"#4a1a1a", issues:71,
    coverUrl:"https://covers.openlibrary.org/b/id/8228580-M.jpg",
    readUrl:"https://archive.org/details/heattransfer0000holm" },

  { id:1402, branch:"ME", sem:5, title:"Theory of Machines",            author:"S.S. Rattan",           category:"Mechanics",    isbn:"978-0070648111", available:false, color:"#1a4a1a", issues:62,
    coverUrl:"https://covers.openlibrary.org/b/id/8228656-M.jpg",
    readUrl:"https://archive.org/details/theoryofmachines_rattan" },

  /* ME Semester 6 */
  { id:1501, branch:"ME", sem:6, title:"IC Engines",                    author:"V. Ganesan",            category:"Automotive",   isbn:"978-0070151345", available:true,  color:"#2a3a2a", issues:58,
    coverUrl:"https://covers.openlibrary.org/b/id/8228624-M.jpg",
    readUrl:"https://archive.org/details/internalcombustionengines_ganesan" },

  { id:1502, branch:"ME", sem:6, title:"Robotics",                      author:"K.S. Fu",               category:"Robotics",     isbn:"978-0070226258", available:true,  color:"#1a1a4a", issues:54,
    coverUrl:"https://covers.openlibrary.org/b/id/8228662-M.jpg",
    readUrl:"https://archive.org/details/robotics_fu_gonzalez" },

  /* ME Semester 7 */
  { id:1601, branch:"ME", sem:7, title:"Automobile Engineering",        author:"R.B. Gupta",            category:"Automotive",   isbn:"978-8174091017", available:true,  color:"#3a2a2a", issues:49,
    coverUrl:"https://covers.openlibrary.org/b/id/8228546-M.jpg",
    readUrl:"https://archive.org/details/automobileengineering_gupta" },

  { id:1602, branch:"ME", sem:7, title:"Finite Element Method",         author:"Tirupathi Chandrupatla", category:"Design",       isbn:"978-0130801685", available:false, color:"#2a1a3a", issues:45,
    coverUrl:"https://covers.openlibrary.org/b/id/8228568-M.jpg",
    readUrl:"https://archive.org/details/introductiontofem_chandrupatla" },

  /* ME Semester 8 */
  { id:1701, branch:"ME", sem:8, title:"Industrial Engineering",        author:"O.P. Khanna",           category:"Management",   isbn:"978-8174090140", available:true,  color:"#1a3a3a", issues:42,
    coverUrl:"https://covers.openlibrary.org/b/id/8228596-M.jpg",
    readUrl:"https://archive.org/details/industrialengineering_khanna" },

  /* ══════════════════════════════════════════════════════════
     B.Tech Civil Engineering (CE)
     ══════════════════════════════════════════════════════════ */

  /* CE Semester 1 */
  { id:2001, branch:"CE", sem:1, title:"Engineering Drawing",           author:"N.D. Bhatt",            category:"Drawing",      isbn:"978-9385750670", available:true,  color:"#4a3a1a", issues:76,
    coverUrl:"https://covers.openlibrary.org/b/id/8228554-M.jpg",
    readUrl:"https://archive.org/details/engineeringdrawing_nd_bhatt" },

  { id:2002, branch:"CE", sem:1, title:"Engineering Mathematics I",     author:"B.S. Grewal",           category:"Mathematics",  isbn:"978-8174091956", available:true,  color:"#1a3a5c", issues:81,
    coverUrl:"https://covers.openlibrary.org/b/id/8231432-M.jpg",
    readUrl:"https://archive.org/details/higher-engineering-mathematics-b.s.grewal-42nd-edition" },

  /* CE Semester 2 */
  { id:2101, branch:"CE", sem:2, title:"Surveying Vol I",               author:"B.C. Punmia",           category:"Surveying",    isbn:"978-8131100268", available:true,  color:"#3a4a1a", issues:69,
    coverUrl:"https://covers.openlibrary.org/b/id/8228688-M.jpg",
    readUrl:"https://archive.org/details/surveying_bc_punmia" },

  { id:2102, branch:"CE", sem:2, title:"Building Materials",            author:"P.C. Varghese",         category:"Materials",    isbn:"978-8120350564", available:false, color:"#4a2a1a", issues:62,
    coverUrl:"https://covers.openlibrary.org/b/id/8228616-M.jpg",
    readUrl:"https://archive.org/details/buildingmaterials_varghese" },

  /* CE Semester 3 */
  { id:2201, branch:"CE", sem:3, title:"Structural Analysis",           author:"S.S. Bhavikatti",       category:"Structures",   isbn:"978-8122432466", available:true,  color:"#1a4a3a", issues:73,
    coverUrl:"https://covers.openlibrary.org/b/id/8228696-M.jpg",
    readUrl:"https://archive.org/details/structuralanalysis_bhavikatti" },

  { id:2202, branch:"CE", sem:3, title:"Fluid Mechanics",               author:"Frank White",           category:"Fluid",        isbn:"978-0073398273", available:true,  color:"#1a2a3a", issues:68,
    coverUrl:"https://covers.openlibrary.org/b/id/8228572-M.jpg",
    readUrl:"https://archive.org/details/fluidmechanics0000whit" },

  /* CE Semester 4 */
  { id:2301, branch:"CE", sem:4, title:"Geotechnical Engineering",      author:"B.C. Punmia",           category:"Geotechnical", isbn:"978-8131100176", available:true,  color:"#4a4a1a", issues:65,
    coverUrl:"https://covers.openlibrary.org/b/id/8228688-M.jpg",
    readUrl:"https://archive.org/details/soilmechanicsfoundations_punmia" },

  { id:2302, branch:"CE", sem:4, title:"Concrete Technology",           author:"M.S. Shetty",           category:"Construction", isbn:"978-8121900287", available:false, color:"#2a4a1a", issues:59,
    coverUrl:"https://covers.openlibrary.org/b/id/8228612-M.jpg",
    readUrl:"https://archive.org/details/concretetechnology_shetty" },

  /* CE Semester 5 */
  { id:2401, branch:"CE", sem:5, title:"Design of Steel Structures",    author:"L.S. Negi",             category:"Structures",   isbn:"978-0070473492", available:true,  color:"#1a3a4a", issues:56,
    coverUrl:"https://covers.openlibrary.org/b/id/8228608-M.jpg",
    readUrl:"https://archive.org/details/designofsteelstructures_negi" },

  { id:2402, branch:"CE", sem:5, title:"Environmental Engineering",     author:"S.K. Garg",             category:"Environment",  isbn:"978-8174090843", available:true,  color:"#1a4a2a", issues:52,
    coverUrl:"https://covers.openlibrary.org/b/id/8228576-M.jpg",
    readUrl:"https://archive.org/details/environmentalengineering_garg" },

  /* CE Semester 6 */
  { id:2501, branch:"CE", sem:6, title:"Transportation Engineering",    author:"L.R. Kadiyali",         category:"Transport",    isbn:"978-8174090690", available:true,  color:"#3a3a2a", issues:48,
    coverUrl:"https://covers.openlibrary.org/b/id/8228648-M.jpg",
    readUrl:"https://archive.org/details/trafficengineeringandtransportplanning_kadiyali" },

  { id:2502, branch:"CE", sem:6, title:"Irrigation Engineering",        author:"B.C. Punmia",           category:"Water",        isbn:"978-8131100213", available:false, color:"#1a4a4a", issues:44,
    coverUrl:"https://covers.openlibrary.org/b/id/8228688-M.jpg",
    readUrl:"https://archive.org/details/irrigationandwater_punmia" },

  /* CE Semester 7 */
  { id:2601, branch:"CE", sem:7, title:"Foundation Engineering",        author:"Arora & Bindra",        category:"Geotechnical", isbn:"978-8176110069", available:true,  color:"#4a2a2a", issues:41,
    coverUrl:"https://covers.openlibrary.org/b/id/8228560-M.jpg",
    readUrl:"https://archive.org/details/foundationengineering_arora" },

  /* CE Semester 8 */
  { id:2701, branch:"CE", sem:8, title:"Construction Project Management","author":"Chitkara",           category:"Management",   isbn:"978-0074633151", available:true,  color:"#2a4a2a", issues:37,
    coverUrl:"https://covers.openlibrary.org/b/id/8228604-M.jpg",
    readUrl:"https://archive.org/details/constructionprojectmanagement_chitkara" },

  /* ══════════════════════════════════════════════════════════
     BCA  (6 Semesters)
     ══════════════════════════════════════════════════════════ */

  /* BCA Semester 1 */
  { id:3001, branch:"BCA", sem:1, title:"Fundamentals of Computers",    author:"E. Balaguruswamy",      category:"Computers",    isbn:"978-0071072601", available:true,  color:"#1a2a4a", issues:86,
    coverUrl:"https://covers.openlibrary.org/b/id/8236327-M.jpg",
    readUrl:"https://archive.org/details/fundamentalsofcomputers_balaguruswamy" },

  { id:3002, branch:"BCA", sem:1, title:"C Programming",               author:"Yashavant Kanetkar",    category:"Programming",  isbn:"978-8183331630", available:true,  color:"#2a1a3a", issues:91,
    coverUrl:"https://covers.openlibrary.org/b/id/10889643-M.jpg",
    readUrl:"https://archive.org/details/letusprograminc_kanetkar" },

  { id:3003, branch:"BCA", sem:1, title:"Mathematics for BCA",         author:"P.K. Mittal",           category:"Mathematics",  isbn:"978-8120342781", available:false, color:"#1a3a1a", issues:74,
    coverUrl:"https://covers.openlibrary.org/b/id/8231432-M.jpg",
    readUrl:"https://archive.org/details/mathematicsforbca_mittal" },

  /* BCA Semester 2 */
  { id:3101, branch:"BCA", sem:2, title:"Data Structures",             author:"Seymour Lipschutz",      category:"Programming",  isbn:"978-0070148482", available:true,  color:"#1a3535", issues:88,
    coverUrl:"https://covers.openlibrary.org/b/id/9109532-M.jpg",
    readUrl:"https://archive.org/details/datastructures0000lips" },

  { id:3102, branch:"BCA", sem:2, title:"Numerical Methods",           author:"S.S. Sastry",            category:"Mathematics",  isbn:"978-8120336000", available:true,  color:"#2a3a1a", issues:69,
    coverUrl:"https://covers.openlibrary.org/b/id/8228668-M.jpg",
    readUrl:"https://archive.org/details/introductiontonu0000sast" },

  { id:3103, branch:"BCA", sem:2, title:"Digital Electronics",         author:"Morris Mano",            category:"Electronics",  isbn:"978-8131702703", available:false, color:"#2a2a1a", issues:63,
    coverUrl:"https://covers.openlibrary.org/b/id/8228522-M.jpg",
    readUrl:"https://archive.org/details/digitaldesign_mano" },

  /* BCA Semester 3 */
  { id:3201, branch:"BCA", sem:3, title:"DBMS",                        author:"Ramez Elmasri",          category:"Database",     isbn:"978-0136086208", available:true,  color:"#2a1a2a", issues:83,
    coverUrl:"https://covers.openlibrary.org/b/id/8231488-M.jpg",
    readUrl:"https://archive.org/details/fundamentalsofdatabasesystems-7thedition" },

  { id:3202, branch:"BCA", sem:3, title:"Java Programming",            author:"Herbert Schildt",        category:"Programming",  isbn:"978-0071808552", available:true,  color:"#1a4a2a", issues:87,
    coverUrl:"https://covers.openlibrary.org/b/id/8228584-M.jpg",
    readUrl:"https://archive.org/details/javacompleteref_schildt" },

  { id:3203, branch:"BCA", sem:3, title:"Operating Systems",           author:"Abraham Silberschatz",   category:"Systems",      isbn:"978-0470128725", available:false, color:"#1a1a3a", issues:78,
    coverUrl:"https://covers.openlibrary.org/b/id/8236313-M.jpg",
    readUrl:"https://archive.org/details/operating-system-concepts-9th-edition_202009" },

  /* BCA Semester 4 */
  { id:3301, branch:"BCA", sem:4, title:"Computer Networks",           author:"Andrew Tanenbaum",       category:"Networks",     isbn:"978-0132126953", available:true,  color:"#1a3535", issues:81,
    coverUrl:"https://covers.openlibrary.org/b/id/8231482-M.jpg",
    readUrl:"https://archive.org/details/computernetworks0000tane_x3i4" },

  { id:3302, branch:"BCA", sem:4, title:"Web Design & HTML",           author:"Ivan Bayross",           category:"Web",          isbn:"978-8183331081", available:true,  color:"#1a2a1a", issues:75,
    coverUrl:"https://covers.openlibrary.org/b/id/10889643-M.jpg",
    readUrl:"https://archive.org/details/webdesignhtml_bayross" },

  { id:3303, branch:"BCA", sem:4, title:"Software Engineering",        author:"Roger Pressman",         category:"Engineering",  isbn:"978-0078022128", available:true,  color:"#2a1a1a", issues:70,
    coverUrl:"https://covers.openlibrary.org/b/id/8228685-M.jpg",
    readUrl:"https://archive.org/details/softwareengineer00pres" },

  /* BCA Semester 5 */
  { id:3401, branch:"BCA", sem:5, title:"Python Programming",          author:"Mark Lutz",              category:"Programming",  isbn:"978-1449355739", available:false, color:"#3a2a1a", issues:93,
    coverUrl:"https://covers.openlibrary.org/b/id/8231500-M.jpg",
    readUrl:"https://archive.org/details/learningpython0000lutz" },

  { id:3402, branch:"BCA", sem:5, title:"Artificial Intelligence",     author:"Stuart Russell",         category:"AI/ML",        isbn:"978-0136042594", available:true,  color:"#2a3a1a", issues:85,
    coverUrl:"https://covers.openlibrary.org/b/id/8228536-M.jpg",
    readUrl:"https://archive.org/details/artificialintell00russ" },

  { id:3403, branch:"BCA", sem:5, title:"Computer Graphics",           author:"Donald Hearn",           category:"Graphics",     isbn:"978-0135309247", available:true,  color:"#3a1a3a", issues:66,
    coverUrl:"https://covers.openlibrary.org/b/id/8228568-M.jpg",
    readUrl:"https://archive.org/details/computergraphics_hearn" },

  /* BCA Semester 6 */
  { id:3501, branch:"BCA", sem:6, title:"Cloud Computing",             author:"Rajkumar Buyya",         category:"Cloud",        isbn:"978-0470887998", available:true,  color:"#1a2a4a", issues:79,
    coverUrl:"https://covers.openlibrary.org/b/id/9778051-M.jpg",
    readUrl:"https://archive.org/details/cloudcomputing_buyya" },

  { id:3502, branch:"BCA", sem:6, title:"Mobile App Development",     author:"Reto Meier",              category:"Mobile",       isbn:"978-1118387771", available:true,  color:"#3a3a1a", issues:72,
    coverUrl:"https://covers.openlibrary.org/b/id/10506023-M.jpg",
    readUrl:"https://archive.org/details/professionalandroiddevelopment_meier" },

  { id:3503, branch:"BCA", sem:6, title:"Project Management",          author:"Harold Kerzner",         category:"Management",   isbn:"978-1118022276", available:false, color:"#1a4a3a", issues:55,
    coverUrl:"https://covers.openlibrary.org/b/id/8228710-M.jpg",
    readUrl:"https://archive.org/details/projectmanagement_kerzner" },
];
/* ─── AUTO-GENERATE WORKING READER LINKS USING ISBN ───────────────── */

BOOKS.forEach(book => {

  if (book.isbn) {

    // OpenLibrary reader using ISBN
    book.readUrl = `https://openlibrary.org/isbn/${book.isbn}`;

  }

});


/* ─── Transaction Log ─────────────────────────────────────── */
let TRANSACTIONS = [
  { id:'T001', student:'Zahik Abas',   book:'Introduction to Algorithms', type:'issued',   date:'2026-01-15', due:'2027-01-29', avatar:'AS', color:'#e0a84c' },
  { id:'T002', student:'Anmol Sharma',    book:'Operating Systems',          type:'issued',   date:'2026-01-14', due:'2027-01-28', avatar:'PV', color:'#4caf82' },
  { id:'T003', student:'Kabir',     book:'Python Programming',         type:'issued',   date:'2026-01-13', due:'2027-01-27', avatar:'RK', color:'#4a90d9' },
  { id:'T004', student:'Shubham',     book:'Machine Learning',           type:'issued',   date:'2026-01-12', due:'2027-01-26', avatar:'NS', color:'#d94a90' },
  { id:'T005', student:'Parshant',    book:'Data Structures Using C',    type:'returned', date:'2026-01-11', due:'2027-01-25', avatar:'AP', color:'#90d94a' },
];

/* ─── PARTICLES ───────────────────────────────────────────── */
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  window.addEventListener('resize', resize); resize();
  for (let i = 0; i < 55; i++) {
    particles.push({ x:Math.random()*W, y:Math.random()*H, r:Math.random()*1.5+0.4, vx:(Math.random()-0.5)*0.35, vy:(Math.random()-0.5)*0.35, alpha:Math.random()*0.5+0.1 });
  }
  function draw() {
    ctx.clearRect(0,0,W,H);
    const isLight = document.body.getAttribute('data-theme')==='light';
    particles.forEach(p => {
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = isLight ? `rgba(100,70,10,${p.alpha*0.5})` : `rgba(201,168,76,${p.alpha*0.6})`;
      ctx.fill();
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0||p.x>W) p.vx*=-1;
      if(p.y<0||p.y>H) p.vy*=-1;
    });
    requestAnimationFrame(draw);
  }
  draw();
}

/* ─── THEME ───────────────────────────────────────────────── */
function initTheme() {
  const saved = localStorage.getItem('pcte-theme') || 'dark';
  document.body.setAttribute('data-theme', saved);
  updateThemeIcon(saved);
}
function toggleTheme() {
  const cur = document.body.getAttribute('data-theme') || 'dark';
  const next = cur==='dark'?'light':'dark';
  document.body.setAttribute('data-theme', next);
  localStorage.setItem('pcte-theme', next);
  updateThemeIcon(next);
}
function updateThemeIcon(theme) {
  const sun = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
  const moon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  document.querySelectorAll('.theme-toggle-btn').forEach(btn => btn.innerHTML = theme==='dark' ? sun : moon);
}

/* ─── SCROLL REVEAL ───────────────────────────────────────── */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting) {
        setTimeout(()=>e.target.classList.add('visible'), +(e.target.dataset.delay||0));
        obs.unobserve(e.target);
      }
    });
  }, { threshold:0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ─── TOAST ───────────────────────────────────────────────── */
let toastContainer = null;
function showToast(msg, type='success') {
  if(!toastContainer) { toastContainer=document.createElement('div'); toastContainer.className='toast-container'; document.body.appendChild(toastContainer); }
  const icons = {
    success:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="15" height="15"><polyline points="20 6 9 17 4 12"/></svg>`,
    error:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="15" height="15"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    info:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="15" height="15"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`
  };
  const t = document.createElement('div'); t.className=`toast ${type}`;
  t.innerHTML=`<div class="toast-icon">${icons[type]||icons.info}</div><span class="toast-msg">${msg}</span>`;
  toastContainer.appendChild(t);
  setTimeout(()=>{ t.classList.add('hiding'); setTimeout(()=>t.remove(),320); }, 3200);
}

/* ─── COUNTER ANIMATION ───────────────────────────────────── */
function animateCounter(el, target, duration=1400) {
  let start=null;
  function step(ts) {
    if(!start) start=ts;
    const p = Math.min((ts-start)/duration,1);
    el.textContent = Math.round((1-Math.pow(1-p,3))*target);
    if(p<1) requestAnimationFrame(step); else el.textContent=target;
  }
  requestAnimationFrame(step);
}

/* ─── DONUT CHART ─────────────────────────────────────────── */
function buildDonut(svgEl, segments) {
  const R=48,cx=56,cy=56; let angle=-Math.PI/2;
  const total = segments.reduce((s,x)=>s+x.value,0);
  svgEl.setAttribute('viewBox','0 0 112 112'); svgEl.setAttribute('width','112'); svgEl.setAttribute('height','112');
  segments.forEach(seg => {
    const a = (seg.value/total)*2*Math.PI*0.97;
    const x1=cx+R*Math.cos(angle), y1=cy+R*Math.sin(angle);
    const x2=cx+R*Math.cos(angle+a), y2=cy+R*Math.sin(angle+a);
    const path = document.createElementNS('http://www.w3.org/2000/svg','path');
    path.setAttribute('d',`M ${cx} ${cy} L ${x1} ${y1} A ${R} ${R} 0 ${a>Math.PI?1:0} 1 ${x2} ${y2} Z`);
    path.setAttribute('fill',seg.color); path.setAttribute('opacity','0.85');
    svgEl.appendChild(path); angle+=a+0.05;
  });
  const c=document.createElementNS('http://www.w3.org/2000/svg','circle');
  c.setAttribute('cx',cx); c.setAttribute('cy',cy); c.setAttribute('r','28'); c.setAttribute('fill','var(--navy-2)');
  svgEl.appendChild(c);
  const txt=document.createElementNS('http://www.w3.org/2000/svg','text');
  txt.setAttribute('x',cx); txt.setAttribute('y',cy+2); txt.setAttribute('text-anchor','middle'); txt.setAttribute('dominant-baseline','middle');
  txt.setAttribute('fill','var(--cream)'); txt.setAttribute('font-size','10'); txt.setAttribute('font-family','Cormorant Garamond,serif'); txt.setAttribute('font-weight','700');
  txt.textContent=total; svgEl.appendChild(txt);
}

/* ════════════════════════════════════════════════════════════
   PAGE: GALLERY  — Semester-wise with branch/sem filters
   ════════════════════════════════════════════════════════════ */
function initGallery() {
  const grid = document.getElementById('book-grid');
  if(!grid) return;
  const searchEl     = document.getElementById('search-input');
  const branchBtns   = document.querySelectorAll('.branch-btn');
  const semBtns      = document.querySelectorAll('.sem-btn');
  const countEl      = document.getElementById('result-count');
  let activeBranch   = 'ALL';
  let activeSem      = 0;   // 0 = all sems
  let query          = '';

  function getFiltered() {
    return BOOKS.filter(b => {
      const matchBranch = activeBranch==='ALL' || b.branch===activeBranch;
      const matchSem    = activeSem===0        || b.sem===activeSem;
      const matchSearch = !query || b.title.toLowerCase().includes(query) || b.author.toLowerCase().includes(query);
      return matchBranch && matchSem && matchSearch;
    });
  }

  function render() {
    const filtered = getFiltered();
    if(countEl) countEl.textContent = `${filtered.length} book${filtered.length!==1?'s':''} found`;
    grid.innerHTML='';
    if(!filtered.length) {
      grid.innerHTML=`<div class="empty-state"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg><p>No books match your filters.</p></div>`;
      return;
    }
    filtered.forEach((book, i) => {
      const available = book.available;
      const card = document.createElement('div');
      card.className='book-card reveal';
      card.dataset.delay = Math.min(i*50, 400);

      // Cover: use real image with fallback to colour placeholder
      const coverHTML = `
        <div class="book-cover-wrap">
          <img class="book-cover-img"
            src="${book.coverUrl}"
            alt="${book.title}"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
            loading="lazy"/>
          <div class="book-cover-placeholder" style="display:none;background:linear-gradient(160deg,${book.color},${book.color}cc);">
            <div class="book-spine"></div>
            <span class="bk-title">${book.title}</span>
            <span class="bk-author">${book.author}</span>
          </div>
        </div>`;

      card.innerHTML = `
        <div class="book-card-inner">
          <div class="book-front">
            ${coverHTML}
            <div class="book-meta">
              <div class="book-branch-badge">${book.branch} · Sem ${book.sem}</div>
              <div class="book-title-card">${book.title}</div>
              <div class="book-author-card">${book.author}</div>
              <div class="book-status ${available?'available':'issued'}">
                <span class="status-dot"></span>${available?'Available':'Issued'}
              </div>
            </div>
          </div>
          <div class="book-back">
            <span class="back-label">${book.branch} &nbsp;·&nbsp; Semester ${book.sem}</span>
            <div class="back-title">${book.title}</div>
            <div class="back-author">by ${book.author}</div>
            <span class="back-cat">${book.category}</span>
            <div class="back-divider"></div>
            <div class="back-isbn">ISBN: ${book.isbn}</div>
            <div class="back-actions">
              <a class="btn-sm btn-sm-read" href="${book.readUrl}" target="_blank" rel="noopener">
                📖 Read Online
              </a>
              <button class="btn-sm btn-sm-gold ${available?'':'disabled'}"
                onclick="handleIssueFromGallery(${book.id},this)"
                ${available?'':'disabled'}>
                ${available?'Issue':'Issued'}
              </button>
            </div>
          </div>
        </div>`;
      grid.appendChild(card);
    });
    initReveal();
  }

  // Branch buttons
  branchBtns.forEach(btn => {
    btn.addEventListener('click', ()=>{
      branchBtns.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      activeBranch = btn.dataset.branch;
      activeSem = 0;
      // reset sem buttons
      semBtns.forEach(b=>b.classList.remove('active'));
      document.querySelector('.sem-btn[data-sem="0"]')?.classList.add('active');
      render();
    });
  });

  // Sem buttons
  semBtns.forEach(btn => {
    btn.addEventListener('click', ()=>{
      semBtns.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      activeSem = +btn.dataset.sem;
      render();
    });
  });

  // Search
  searchEl?.addEventListener('input', e=>{
    query = e.target.value.toLowerCase();
    render();
  });

  render();
}

/* Issue from gallery */
function handleIssueFromGallery(bookId, btn) {
  const book = BOOKS.find(b=>b.id===bookId);
  if(!book||!book.available) return;
  book.available=false;
  btn.textContent='Issued'; btn.classList.add('disabled'); btn.disabled=true;
  const inner = btn.closest('.book-card-inner');
  const st = inner?.querySelector('.book-status');
  if(st){ st.className='book-status issued'; st.innerHTML='<span class="status-dot"></span>Issued'; }
  TRANSACTIONS.unshift({ id:'T'+Date.now(), student:'Student', book:book.title, type:'issued', date:new Date().toISOString().slice(0,10), due:'', avatar:'ST', color:'#c9a84c' });
  showToast(`"${book.title}" issued! 🎉`,'success');
  updateDashCounts();
}

/* ════════════════════════════════════════════════════════════
   PAGE: DASHBOARD
   ════════════════════════════════════════════════════════════ */
function initDashboard() {
  const totalEl  = document.getElementById('count-total');
  if(!totalEl) return;
  updateDashCounts();
  ['count-total','count-issued','count-avail','count-members'].forEach(id=>{
    const el=document.getElementById(id);
    if(!el) return;
    const v = id==='count-members'?247:+el.textContent||0;
    animateCounter(el, id==='count-total'?BOOKS.length : id==='count-issued'?BOOKS.filter(b=>!b.available).length : id==='count-avail'?BOOKS.filter(b=>b.available).length : 247);
  });
  const barEl = document.getElementById('bar-chart');
  if(barEl) buildBarChart(barEl);
  const donutEl = document.getElementById('donut-chart');
  if(donutEl) {
    const issued = BOOKS.filter(b=>!b.available).length;
    const avail  = BOOKS.filter(b=>b.available).length;
    buildDonut(donutEl,[{value:avail,color:'#4caf82'},{value:issued,color:'#e05a5a'}]);
    const avEl=document.getElementById('avail-pct'), isEl=document.getElementById('issued-pct');
    if(avEl) avEl.textContent=`${Math.round(avail/BOOKS.length*100)}%`;
    if(isEl) isEl.textContent=`${Math.round(issued/BOOKS.length*100)}%`;
  }
  renderActivity();
}

function updateDashCounts() {
  const t=document.getElementById('count-total'), is=document.getElementById('count-issued'), av=document.getElementById('count-avail');
  if(t)  t.textContent  = BOOKS.length;
  if(is) is.textContent = BOOKS.filter(b=>!b.available).length;
  if(av) av.textContent = BOOKS.filter(b=>b.available).length;
}

function buildBarChart(container) {
  const months=['Jan','Feb','Mar','Apr','May','Jun']; const data=[38,62,55,78,68,91];
  const colors=['bar-blue','bar-gold','bar-green','bar-red','bar-purple','bar-cyan'];
  const max=Math.max(...data); container.innerHTML='';
  months.forEach((m,i)=>{
    const wrap=document.createElement('div'); wrap.className='bar-wrap';
    const bar=document.createElement('div'); bar.className=`bar ${colors[i]}`; bar.style.height='0%'; bar.style.width='100%';
    wrap.appendChild(bar);
    const label=document.createElement('span'); label.className='bar-label'; label.textContent=m;
    wrap.appendChild(label); container.appendChild(wrap);
    setTimeout(()=>{ bar.style.height=`${(data[i]/max)*100}%`; },300+i*100);
  });
}

function renderActivity() {
  const listEl=document.getElementById('activity-list'); if(!listEl) return;
  listEl.innerHTML='';
  const badgeMap={issued:'badge-issued',returned:'badge-returned',added:'badge-added'};
  TRANSACTIONS.slice(0,8).forEach(tx=>{
    const li=document.createElement('div'); li.className='activity-item';
    li.innerHTML=`
      <div class="activity-avatar" style="background:${tx.color}">${tx.avatar}</div>
      <div class="activity-info"><div class="activity-name">${tx.student}</div><div class="activity-book">"${tx.book}"</div></div>
      <span class="activity-badge ${badgeMap[tx.type]||''}">${tx.type}</span>
      <span class="activity-time">${tx.date}</span>`;
    listEl.appendChild(li);
  });
}

/* ════════════════════════════════════════════════════════════
   PAGE: ISSUE / RETURN
   ════════════════════════════════════════════════════════════ */
function initIssuePage() {
  const bookSelect  = document.getElementById('book-select');
  const studentInput= document.getElementById('student-name');
  const issueBtn    = document.getElementById('issue-btn');
  const returnBtn   = document.getElementById('return-btn');
  const previewEl   = document.getElementById('book-preview');
  const confirmOvrl = document.getElementById('confirm-overlay');
  if(!bookSelect) return;

  // Group books by branch for the dropdown
  const branches = ['CSE','ME','CE','BCA'];
  branches.forEach(br=>{
    const sems = [...new Set(BOOKS.filter(b=>b.branch===br).map(b=>b.sem))].sort((a,b)=>a-b);
    sems.forEach(sem=>{
      const grp = document.createElement('optgroup');
      grp.label = `${br} — Semester ${sem}`;
      BOOKS.filter(b=>b.branch===br&&b.sem===sem).forEach(book=>{
        const opt=document.createElement('option');
        opt.value=book.id;
        opt.textContent=`${book.title} (${book.available?'✓ Available':'✗ Issued'})`;
        grp.appendChild(opt);
      });
      bookSelect.appendChild(grp);
    });
  });

  bookSelect.addEventListener('change',()=>{
    const book=BOOKS.find(b=>b.id===+bookSelect.value);
    if(!book||!previewEl) return;
    previewEl.innerHTML=`
      <div class="book-preview-thumb-ph" style="background:linear-gradient(160deg,${book.color},${book.color}cc);">
        <span style="font-size:0.5rem;font-family:var(--font-display);position:relative;z-index:1;text-align:center;">${book.title.slice(0,15)}</span>
      </div>
      <div>
        <div class="book-preview-title">${book.title}</div>
        <div class="book-preview-author">by ${book.author}</div>
        <div style="font-size:0.7rem;color:var(--text-muted);margin-top:2px;">${book.branch} · Sem ${book.sem}</div>
        <div class="book-preview-status ${book.available?'available':'issued'}">${book.available?'● Available':'● Currently Issued'}</div>
      </div>`;
    previewEl.classList.add('visible');
    if(issueBtn)  issueBtn.disabled  = !book.available;
    if(returnBtn) returnBtn.disabled = book.available;
  });

  issueBtn?.addEventListener('click',()=>{
    const book=BOOKS.find(b=>b.id===+bookSelect.value);
    const student=studentInput?.value.trim()||'Student';
    if(!book||!book.available){ showToast('Book not available!','error'); return; }
    if(!student){ showToast('Please enter student name.','error'); return; }
    book.available=false;
    TRANSACTIONS.unshift({ id:'T'+Date.now(), student, book:book.title, type:'issued', date:new Date().toISOString().slice(0,10), due:new Date(Date.now()+14*864e5).toISOString().slice(0,10), avatar:student.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase(), color:'#c9a84c' });
    showConfirmModal(`"${book.title}" issued to ${student}`);
    renderIssueTable(); updateDashCounts();
    bookSelect.dispatchEvent(new Event('change'));
  });

  returnBtn?.addEventListener('click',()=>{
    const book=BOOKS.find(b=>b.id===+bookSelect.value);
    if(!book||book.available){ showToast('Book is not currently issued!','error'); return; }
    book.available=true;
    TRANSACTIONS.unshift({ id:'T'+Date.now(), student:'Student', book:book.title, type:'returned', date:new Date().toISOString().slice(0,10), due:'', avatar:'ST', color:'#4caf82' });
    showConfirmModal(`"${book.title}" returned successfully`);
    renderIssueTable(); updateDashCounts();
    bookSelect.dispatchEvent(new Event('change'));
  });

  function showConfirmModal(msg) {
    if(!confirmOvrl){ showToast(msg); return; }
    const el=confirmOvrl.querySelector('.confirm-msg'); if(el) el.textContent=msg;
    confirmOvrl.classList.add('show');
    setTimeout(()=>confirmOvrl.classList.remove('show'),2800);
  }

  confirmOvrl?.addEventListener('click',e=>{ if(e.target===confirmOvrl) confirmOvrl.classList.remove('show'); });
  renderIssueTable();
}

function renderIssueTable() {
  const tbody=document.getElementById('issue-table-body'); if(!tbody) return;
  tbody.innerHTML='';
  const badgeMap={issued:'badge-issued',returned:'badge-returned',added:'badge-added'};
  TRANSACTIONS.slice(0,12).forEach(tx=>{
    const tr=document.createElement('tr');
    tr.innerHTML=`<td>${tx.id}</td><td>${tx.student}</td><td>${tx.book}</td><td><span class="activity-badge ${badgeMap[tx.type]||''}">${tx.type}</span></td><td>${tx.date}</td><td>${tx.due||'—'}</td>`;
    tbody.appendChild(tr);
  });
}

/* ─── LANDING PAGE stats ──────────────────────────────────── */
function initLandingCounters() {
  document.querySelectorAll('.stat-number[data-target]').forEach(el=>{
    const obs=new IntersectionObserver(entries=>{
      if(entries[0].isIntersecting){ animateCounter(el,+el.dataset.target); obs.unobserve(el); }
    }); obs.observe(el);
  });
}

/* ─── ACTIVE NAV ──────────────────────────────────────────── */
function setActiveNav() {
  const page = window.location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-item').forEach(link=>{
    const href=link.getAttribute('href');
    if(href && page.includes(href.replace('.html',''))){ link.classList.add('active'); }
  });
}

/* ─── INIT ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.year').forEach(el=>el.textContent=new Date().getFullYear());
  const dateEl=document.getElementById('dash-date');
  if(dateEl) dateEl.textContent=new Date().toLocaleDateString('en-IN',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
  initTheme(); initParticles(); initReveal(); setActiveNav(); initLandingCounters();
  initGallery(); initDashboard(); initIssuePage();
  document.querySelectorAll('.theme-toggle-btn').forEach(btn=>btn.addEventListener('click',toggleTheme));
  document.querySelector('.main-content')?.classList.add('page-enter');
});
