/**
 * HỒ VĂN DANH - PORTFOLIO INTERACTIVITY SCRIPT
 * Features:
 * 1. Mouse Spotlight (Hiệu ứng ánh sáng di chuyển theo con trỏ chuột)
 * 2. Full Bilingual System (Hệ thống song ngữ Tiếng Việt 🇻🇳 / English 🇬🇧)
 * 3. Interactive Architecture Showcase (Song ngữ)
 * 4. Terminal Code Copy & Clipboard Toast
 * 5. Dark / Light Mode Toggle
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mouse Spotlight Glow Effect
  initMouseSpotlight();

  // 2. Bilingual Engine (Song ngữ VI / EN)
  initBilingualEngine();

  // 3. Theme Management (Dark / Light Mode)
  initTheme();

  // 4. Mobile Navigation Toggle
  initMobileNav();

  // 5. Interactive Skills Filter
  initSkillsFilter();

  // 6. Interactive Architecture Diagram Showcase
  initArchitectureShowcase();

  // 7. Clipboard Actions & Terminal Copy
  initClipboardActions();

  // 8. Scroll Spy for Active Navigation Link
  initScrollSpy();
});

/* =========================================================
   1. MOUSE SPOTLIGHT GLOW EFFECT (Hiệu ứng rê chuột phát sáng)
   ========================================================= */
function initMouseSpotlight() {
  const cards = document.querySelectorAll('.spotlight-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--mouse-x', `-999px`);
      card.style.setProperty('--mouse-y', `-999px`);
    });
  });
}

/* =========================================================
   2. BILINGUAL ENGINE (VIETNAMESE 🇻🇳 & ENGLISH 🇬🇧)
   ========================================================= */
let currentLang = 'vi';

const translations = {
  vi: {
    // Navigation
    nav_about: '<i class="fa-solid fa-user-tie"></i> Giới thiệu',
    nav_skills: '<i class="fa-solid fa-layer-group"></i> Kỹ năng',
    nav_arch: '<i class="fa-solid fa-diagram-project"></i> Kiến trúc Backend',
    nav_exp: '<i class="fa-solid fa-briefcase"></i> Kinh nghiệm & Dự án',
    nav_contact: '<i class="fa-solid fa-envelope"></i> Liên hệ',
    btn_cv: 'Tải CV',
    btn_hire: 'Tuyển dụng ngay',

    // Hero
    hero_status: 'Sẵn sàng cho thử thách mới • Full-time / Hybrid',
    hero_greeting: 'Xin chào, tôi là',
    hero_desc: 'Lập trình viên Backend tập trung vào hệ sinh thái <strong>C# / ASP.NET Core</strong> và kiến trúc phần mềm hướng dữ liệu. Có kinh nghiệm thực chiến phát triển các phân hệ <strong>Enterprise ERP</strong> quy mô lớn, xử lý sự kiện bất đồng bộ với <strong>Apache Kafka</strong>, đồng bộ dữ liệu thời gian thực qua <strong>SignalR</strong> và tối ưu hóa truy vấn phức tạp trên <strong>PostgreSQL & Apache AGE</strong>.',
    btn_view_projects: 'Xem dự án thực tế',
    btn_download_cv: 'Tải CV PDF',
    btn_send_email: 'Gửi Email trực tiếp',
    stat_exp: 'Năm kinh nghiệm thực chiến',
    stat_modules: 'Phân hệ Enterprise (ERP/GIS)',
    stat_code: 'Tư duy Clean Code & SOLID',

    // About
    tag_about: 'Tư Duy & Triết Lý',
    title_about: 'Nền Tảng Kỹ Thuật Cốt Lõi',
    desc_about: 'Không chỉ dừng lại ở các thao tác CRUD thông thường, tôi chú trọng xây dựng các giải pháp có kiến trúc rõ ràng, khả năng mở rộng tốt và giải quyết trọn vẹn nghiệp vụ doanh nghiệp.',
    card_title_1: 'Nghiệp Vụ Doanh Nghiệp Phức Tạp',
    card_desc_1: 'Trực tiếp thiết kế và hiện thực các module: Quản lý dự án thi công xây dựng, kế hoạch vốn & theo dõi giải ngân, quản lý hồ sơ thầu, sản lượng hợp đồng, quản trị nhân sự và ma trận phân quyền RBAC.',
    card_title_2: 'Kiến Trúc Clean Architecture & SOLID',
    card_desc_2: 'Phân tách rõ ràng các tầng Domain, Application, Infrastructure và Presentation. Áp dụng nhất quán Repository/Service Pattern, DTO Mapping và Dependency Injection giúp mã nguồn dễ đọc, dễ bảo trì và mở rộng.',
    card_title_3: 'Hệ Thống Event-Driven & Real-time',
    card_desc_3: 'Tách rời dịch vụ (Decoupling) bằng <strong>Apache Kafka</strong> để xử lý luồng bất đồng bộ, kết hợp <strong>SignalR Hubs</strong> để truyền tải các luồng thảo luận, cập nhật tiến độ công trình và cảnh báo tức thời.',
    card_title_4: 'Tối Ưu Dữ Liệu & Graph Queries',
    card_desc_4: 'Thành thạo <strong>PostgreSQL</strong> & <strong>SQL Server</strong> (Stored Procedures, Indexing). Ứng dụng <strong>Apache AGE</strong> để giải quyết bài toán truy vấn cây phân cấp thư mục tệp tin WebGIS và tăng tốc bằng <strong>Redis</strong>.',

    // Skills
    tag_skills: 'Tech Stack',
    title_skills: 'Kỹ Năng & Công Nghệ Thực Chiến',
    desc_skills: 'Bộ công cụ đã được tôi trực tiếp sử dụng để xây dựng các sản phẩm thực tế',
    filter_all: 'Tất cả',
    filter_backend: 'Backend & .NET',
    filter_db: 'Dữ liệu & Caching',
    filter_realtime: 'Event & Real-time',
    filter_arch: 'Kiến trúc & Design',
    filter_tools: 'DevOps & Công cụ',

    sk_sub_1: 'Ngôn ngữ chính & Nền tảng',
    sk_desc_1: 'ASP.NET Core Web API, ASP.NET MVC, Async/Await, LINQ, Dependency Injection, Middleware, Model Validation.',
    sk_sub_2: 'RESTful Services',
    sk_desc_2: 'Thiết kế API chuẩn RESTful, xử lý pipeline, custom exception middleware, lọc động theo chuyên đề.',
    sk_sub_3: 'RDBMS & Tối ưu hóa',
    sk_desc_3: 'Thiết kế lược đồ quan hệ, Stored Procedures báo cáo tồn kho/doanh số, indexing và tối ưu truy vấn dữ liệu lớn.',
    sk_sub_4: 'ORM & LINQ Queries',
    sk_desc_4: 'Code-First migrations, tracking vs no-tracking, eager loading, LINQ tối ưu tránh N+1 query, transactions.',
    sk_sub_5: 'Truy vấn đồ thị & Cây phân cấp',
    sk_desc_5: 'Tích hợp trên PostgreSQL để truy vấn cây phân cấp thư mục tệp tin WebGIS và các quan hệ cha-con đa cấp phức tạp.',
    sk_sub_6: 'Tăng tốc truy xuất dữ liệu',
    sk_desc_6: 'Áp dụng cơ chế Cache-Aside cho dữ liệu tra cứu lặp lại, giảm tải database và hạ độ trễ phản hồi API.',
    sk_sub_7: 'Event-Driven Architecture',
    sk_desc_7: 'Áp dụng Message Broker xử lý luồng giao tiếp dịch vụ bất đồng bộ, decoupling các module ERP và đảm bảo tin cậy dữ liệu.',
    sk_sub_8: 'Truyền thông Real-time',
    sk_desc_8: 'Triển khai SignalR Hubs cho cập nhật luồng thảo luận dự án, thông báo giải ngân tức thì và tiến độ công việc đa người dùng.',
    sk_sub_9: 'Nguyên lý & Mẫu thiết kế',
    sk_desc_9: 'Phân lớp rõ ràng, tuân thủ nguyên lý SOLID, Repository/Service Pattern, Clean Code, dễ dàng mở rộng và bàn giao mã nguồn.',
    sk_sub_10: 'Phân quyền & Bảo mật',
    sk_desc_10: 'Thiết kế phân quyền phòng ban, người dùng, vai trò (Roles) và quyền hạn chi tiết (Permissions) cho hệ thống ERP doanh nghiệp.',
    sk_sub_11: 'Đóng gói & Lưu trữ',
    sk_desc_11: 'Đóng gói ứng dụng chạy môi trường đồng nhất; tích hợp lưu trữ hồ sơ, bản vẽ và tài liệu hợp đồng lên Cloud S3.',
    sk_sub_12: 'Quy trình chuyên nghiệp',
    sk_desc_12: 'Quản lý phiên bản Git/GitHub theo nhánh tính năng, viết tài liệu kiểm thử API chi tiết qua Postman, Firebase basics.',

    // Architecture
    tag_arch: 'Sơ Đồ Luồng',
    title_arch: 'Mô Hình Kiến Trúc Hệ Thống Backend',
    desc_arch: 'Nhấp vào từng thành phần để xem chi tiết cách tôi tổ chức và tối ưu luồng dữ liệu',
    arch_client_sub: 'Web Dashboard / GIS UI',
    arch_api_sub: 'Clean Architecture Core',
    arch_bus_sub: 'Event Bus & Real-time Hub',
    arch_db_sub: 'Postgres, AGE, Redis, S3',

    // Experience
    tag_exp: 'Hành Trình Nghề Nghiệp',
    title_exp: 'Kinh Nghiệm & Dự Án Doanh Nghiệp',
    desc_exp: 'Các bài toán nghiệp vụ quy mô thực tế tôi đã trực tiếp tham gia xây dựng',
    exp_title_1: 'Enterprise ERP — Phân Hệ Quản Lý Dự Án Xây Dựng & Nhân Sự (HR)',
    exp_sum_1: 'Hệ thống ERP giải quyết trọn vẹn vòng đời dự án thi công xây dựng: từ kế hoạch vốn, giải ngân, quản lý hồ sơ thầu, nghiệm thu sản lượng hợp đồng đến phân quyền nhân sự đa tầng.',
    exp_duty_title: 'Trách nhiệm & Nghiệp vụ đã xây dựng:',
    exp1_li1: '<strong>Quản lý dự án thi công:</strong> Xây dựng API hồ sơ dự án, trạng thái thi công, báo cáo nhật trình, vấn đề phát sinh tại công trường và bộ lọc đa tiêu chí theo chuyên đề chuyên sâu.',
    exp1_li2: '<strong>Theo dõi giải ngân & Kế hoạch vốn:</strong> Xây dựng luồng API theo dõi kế hoạch phân bổ vốn, thống kê giải ngân theo từng giai đoạn và xuất báo cáo quản trị cấp cao.',
    exp1_li3: '<strong>Luồng hồ sơ & Văn bản dự án:</strong> Xử lý văn bản đi/đến, hồ sơ pháp lý công trình, tài liệu mời thầu, hợp đồng và bảo lãnh ngân hàng.',
    exp1_li4: '<strong>Sản lượng & Tiến độ lũy kế:</strong> Tính toán sản lượng công việc theo hợp đồng, hỗ trợ theo dõi tiến độ thi công thực tế so với cam kết hợp đồng.',
    exp1_li5: '<strong>Quản trị nhân sự & Phân quyền RBAC:</strong> Quản lý cơ cấu phòng ban, danh sách nhân sự, phân vai trò (Roles) và ma trận quyền hạn (Permissions) chặt chẽ.',
    exp1_li6: '<strong>Real-time & Message Queue:</strong> Tích hợp <strong>Apache Kafka</strong> để đồng bộ sự kiện giữa các module và <strong>SignalR</strong> cho thông báo đẩy/thảo luận trực tiếp trong từng dự án.',

    exp_title_2: 'WebGIS Solution — Hệ Thống Quản Lý Cây Tệp Tin Phân Cấp (Hierarchical Files)',
    exp_sum_2: 'Giải pháp API quản lý hệ thống tệp tin và lớp dữ liệu bản đồ địa lý theo mô hình cây thư mục phân cấp sâu cho dự án WebGIS.',
    exp_tech_title: 'Trách nhiệm & Điểm nhấn kỹ thuật:',
    exp2_li1: 'Xây dựng toàn bộ hệ thống Backend API quản lý tệp tin, lớp bản đồ và dữ liệu địa không gian có cấu trúc cha-con phức tạp.',
    exp2_li2: 'Ứng dụng <strong>Apache AGE</strong> (Graph Extension) kết hợp <strong>PostgreSQL</strong> để thực hiện các truy vấn đệ quy cây thư mục (hierarchical tree queries) cực kỳ nhanh chóng so với SQL truyền thống.',
    exp2_li3: 'Kết hợp bộ nhớ đệm <strong>Redis Caching</strong> và <strong>EF Core</strong> để giảm thiểu tối đa độ trễ phản hồi khi duyệt các cây thư mục dung lượng lớn.',

    exp_title_3: 'Internal Enterprise Resource Planning (ERP) System',
    exp_sum_3: 'Phát triển và tối ưu hóa hệ thống ERP nội bộ quản lý chuỗi cung ứng, kho vận và thống kê kinh doanh thời trang bán lẻ.',
    exp_result_title: 'Trách nhiệm & Kết quả:',
    exp3_li1: 'Tham gia đội ngũ Backend phát triển và duy trì các module lõi của hệ thống ERP sử dụng C# và ASP.NET Core.',
    exp3_li2: 'Thiết kế và tối ưu các <strong>SQL Server Stored Procedures</strong> phức tạp phục vụ thống kê xuất nhập tồn kho và báo cáo doanh số bán hàng đa chi nhánh.',
    exp3_li3: 'Xây dựng và tích hợp RESTful APIs kết nối dữ liệu giữa Web Dashboard và cơ sở dữ liệu nền.',
    exp3_li4: 'Tái cấu trúc (Refactor) các đoạn mã nguồn cũ theo chuẩn Clean Code, củng cố vững chắc tư duy OOP, SOLID và bất đồng bộ (async/await).',

    edu_school: 'TRƯỜNG CAO ĐẲNG KỸ THUẬT CAO THẮNG',
    edu_major: 'Chuyên Ngành: Công Nghệ Thông Tin',
    edu_desc: 'Được đào tạo bài bản về cấu trúc dữ liệu và giải thuật, lập trình hướng đối tượng (OOP), cơ sở dữ liệu quan hệ, mạng máy tính và phát triển phần mềm ứng dụng doanh nghiệp.',

    // Contact
    tag_contact: 'Kết Nối Trực Tiếp',
    contact_heading: 'Trao Đổi Cơ Hội Hợp Tác Kỹ Thuật',
    contact_lead: 'Tôi đang tìm kiếm cơ hội làm việc chính thức (Full-time / Hybrid) ở vị trí <strong>Backend Developer (.NET)</strong> trong một đội ngũ coi trọng chất lượng mã nguồn, nơi tôi có thể đóng góp năng lực xử lý nghiệp vụ thực chiến và không ngừng học hỏi từ các kỹ sư giàu kinh nghiệm.',
    label_email: 'Email Làm Việc',
    label_phone: 'Số Điện Thoại / Zalo',
    label_location: 'Địa Điểm',
    val_location: 'Gò Vấp, TP. Hồ Chí Minh',
    label_status: 'Trạng Thái Tuyển Dụng',
    val_status: '🟢 Có thể đi làm ngay',
    btn_email_now: 'Mở ứng dụng gửi Email ngay',
    btn_view_cv: 'Xem & Tải CV bản mới nhất',

    // Footer
    footer_copy: '© 2026 Hồ Văn Danh. Thiết kế hiện đại tối ưu cho GitHub Pages.',
    footer_built: 'Xây dựng bằng'
  },

  en: {
    // Navigation
    nav_about: '<i class="fa-solid fa-user-tie"></i> About',
    nav_skills: '<i class="fa-solid fa-layer-group"></i> Skills',
    nav_arch: '<i class="fa-solid fa-diagram-project"></i> Architecture',
    nav_exp: '<i class="fa-solid fa-briefcase"></i> Experience',
    nav_contact: '<i class="fa-solid fa-envelope"></i> Contact',
    btn_cv: 'Resume',
    btn_hire: 'Hire Me',

    // Hero
    hero_status: 'Open for Opportunities • Full-time / Hybrid',
    hero_greeting: 'Hello, I am',
    hero_desc: 'Backend Engineer specializing in <strong>C# / ASP.NET Core</strong> and data-intensive software architectures. Hands-on experience developing large-scale <strong>Enterprise ERP</strong> modules, event-driven messaging with <strong>Apache Kafka</strong>, real-time collaboration with <strong>SignalR</strong>, and complex graph querying on <strong>PostgreSQL & Apache AGE</strong>.',
    btn_view_projects: 'View Production Work',
    btn_download_cv: 'Download Resume (PDF)',
    btn_send_email: 'Send Direct Email',
    stat_exp: 'Years Production Experience',
    stat_modules: 'Enterprise Modules (ERP/GIS)',
    stat_code: 'Clean Code & SOLID Mindset',

    // About
    tag_about: 'Philosophy & Values',
    title_about: 'Core Engineering Competencies',
    desc_about: 'Beyond standard CRUD operations, I focus on building cleanly structured, maintainable, and high-performance solutions that solve complex enterprise business logic.',
    card_title_1: 'Complex Business Logic & ERP',
    card_desc_1: 'Designed and implemented end-to-end modules: Construction project lifecycle, capital planning, disbursement tracking, contract bidding workflows, HR management, and hierarchical RBAC permissions.',
    card_title_2: 'Clean Architecture & SOLID',
    card_desc_2: 'Strict separation of Domain, Application, Infrastructure, and Presentation layers. Consistent adoption of Repository/Service patterns, DTO mapping, and Dependency Injection for maintainable codebases.',
    card_title_3: 'Event-Driven & Real-time Systems',
    card_desc_3: 'Decoupling distributed workflows with <strong>Apache Kafka</strong> for asynchronous event processing, combined with <strong>SignalR Hubs</strong> for live discussion feeds and instant alert delivery.',
    card_title_4: 'Database & Graph Optimization',
    card_desc_4: 'Proficient in <strong>PostgreSQL</strong> & <strong>SQL Server</strong> (Stored Procedures, Indexing). Leveraged <strong>Apache AGE</strong> for deep recursive WebGIS tree structures accelerated by <strong>Redis</strong>.',

    // Skills
    tag_skills: 'Tech Stack',
    title_skills: 'Technical Skills & Production Tools',
    desc_skills: 'The battle-tested technologies applied directly across real enterprise systems',
    filter_all: 'All',
    filter_backend: 'Backend & .NET',
    filter_db: 'Data & Caching',
    filter_realtime: 'Event & Real-time',
    filter_arch: 'Architecture & Design',
    filter_tools: 'DevOps & Tools',

    sk_sub_1: 'Primary Language & Framework',
    sk_desc_1: 'ASP.NET Core Web API, ASP.NET MVC, Async/Await, LINQ, Dependency Injection, Middleware, Model Validation.',
    sk_sub_2: 'RESTful Services',
    sk_desc_2: 'RESTful API design, pipeline customization, centralized error handling middleware, specialized topic filters.',
    sk_sub_3: 'RDBMS & Query Optimization',
    sk_desc_3: 'Relational schema design, complex Stored Procedures for inventory/sales reporting, index tuning for high volume data.',
    sk_sub_4: 'ORM & LINQ Queries',
    sk_desc_4: 'Code-First migrations, tracking vs no-tracking, eager loading, LINQ queries optimized to prevent N+1 issues.',
    sk_sub_5: 'Graph & Recursive Hierarchies',
    sk_desc_5: 'Integrated with PostgreSQL for deep hierarchical file trees and parent-child graph traversals in WebGIS.',
    sk_sub_6: 'High-Speed In-Memory Caching',
    sk_desc_6: 'Cache-Aside pattern for repetitive lookups, reducing database pressure and ensuring sub-50ms API response times.',
    sk_sub_7: 'Event-Driven Architecture',
    sk_desc_7: 'Message Broker for decoupled asynchronous service communication across ERP workflows with high reliability.',
    sk_sub_8: 'Real-time WebSocket Delivery',
    sk_desc_8: 'SignalR Hubs for project team discussions, instant disbursement alerts, and multi-user live status updates.',
    sk_sub_9: 'Principles & Design Patterns',
    sk_desc_9: 'Layered architecture, SOLID principles, Repository/Service pattern, Clean Code standards for effortless maintenance.',
    sk_sub_10: 'Access Control & Security',
    sk_desc_10: 'Enterprise role-based and claims-based access control (RBAC), multi-level organizational permissions.',
    sk_sub_11: 'Containers & Cloud Storage',
    sk_desc_11: 'Docker containerization for environment consistency; secure cloud storage integration for contract blueprints via S3.',
    sk_sub_12: 'Professional Tooling',
    sk_desc_12: 'Git/GitHub feature-branch workflow, comprehensive API automated tests via Postman, Firebase fundamentals.',

    // Architecture
    tag_arch: 'System Flow',
    title_arch: 'Backend Architecture Blueprint',
    desc_arch: 'Click on any layer to explore how I structure and optimize data flows',
    arch_client_sub: 'Web Dashboard / GIS UI',
    arch_api_sub: 'Clean Architecture Core',
    arch_bus_sub: 'Event Bus & Real-time Hub',
    arch_db_sub: 'Postgres, AGE, Redis, S3',

    // Experience
    tag_exp: 'Career Journey',
    title_exp: 'Professional Experience & Projects',
    desc_exp: 'Enterprise production systems and real customer workflows built and shipped',
    exp_title_1: 'Enterprise ERP — Construction Project Management & HR Modules',
    exp_sum_1: 'Enterprise ERP system covering the full construction project lifecycle: capital planning, disbursement tracking, bidding dossiers, cumulative contract output, and multi-level HR roles.',
    exp_duty_title: 'Responsibilities & Engineering Scope:',
    exp1_li1: '<strong>Construction Project Lifecycle:</strong> Built APIs for project profiles, statuses, daily work reports, site issues, and custom topic-based query filters.',
    exp1_li2: '<strong>Disbursement & Capital Planning:</strong> Implemented capital plan tracking, milestone disbursement statistics, and executive reporting workflows.',
    exp1_li3: '<strong>Document & Dossier Workflows:</strong> Managed official dispatches, construction records, bidding packages, contracts, and bank guarantees.',
    exp1_li4: '<strong>Contract Volume & Cumulative Progress:</strong> Computed contract-based workload volumes and tracked on-site execution against contractual agreements.',
    exp1_li5: '<strong>HR Administration & RBAC:</strong> Built department trees, employee rosters, and fine-grained role/permission access control matrices.',
    exp1_li6: '<strong>Real-time & Message Queue:</strong> Integrated <strong>Apache Kafka</strong> for inter-service event synchronization and <strong>SignalR</strong> for live team discussions and push alerts.',

    exp_title_2: 'WebGIS Solution — Hierarchical File Management System',
    exp_sum_2: 'Backend API system managing deep hierarchical file and geospatial map layer trees for WebGIS solutions.',
    exp_tech_title: 'Responsibilities & Technical Highlights:',
    exp2_li1: 'Engineered backend APIs for hierarchical file repositories, map layers, and geospatial datasets with parent-child relationships.',
    exp2_li2: 'Leveraged <strong>Apache AGE</strong> (Graph Extension) with <strong>PostgreSQL</strong> to execute recursive tree and graph queries significantly faster than traditional SQL.',
    exp2_li3: 'Combined <strong>Redis Caching</strong> with EF Core to minimize response latency when navigating extensive directory trees.',

    exp_title_3: 'Internal Enterprise Resource Planning (ERP) System',
    exp_sum_3: 'Developed and optimized an internal retail ERP handling inventory, supply chain, and multi-branch sales analytics.',
    exp_result_title: 'Responsibilities & Key Achievements:',
    exp3_li1: 'Collaborated with backend engineers to maintain core business modules using C# and ASP.NET Core.',
    exp3_li2: 'Designed and optimized complex <strong>SQL Server Stored Procedures</strong> for multi-store inventory audits and revenue analytics.',
    exp3_li3: 'Engineered RESTful APIs connecting web dashboard UI with underlying relational databases.',
    exp3_li4: 'Refactored legacy code following Clean Code standards, strengthening OOP, SOLID principles, and asynchronous programming.',

    edu_school: 'CAO THANG TECHNICAL COLLEGE',
    edu_major: 'Major: Information Technology (Associate Degree)',
    edu_desc: 'Rigorous coursework in Data Structures & Algorithms, Object-Oriented Programming (OOP), Relational Databases, Computer Networks, and Enterprise Software Development.',

    // Contact
    tag_contact: 'Get In Touch',
    contact_heading: 'Let\'s Discuss Engineering Opportunities',
    contact_lead: 'I am actively seeking full-time <strong>Backend Developer (.NET)</strong> roles in an engineering-driven team that values code quality, where I can contribute to production systems and continuously learn from experienced architects.',
    label_email: 'Work Email',
    label_phone: 'Phone / Zalo',
    label_location: 'Location',
    val_location: 'Go Vap, Ho Chi Minh City, Vietnam',
    label_status: 'Availability',
    val_status: '🟢 Available Immediately',
    btn_email_now: 'Open Email Client Now',
    btn_view_cv: 'View & Download Resume',

    // Footer
    footer_copy: '© 2026 Ho Van Danh. Optimized for GitHub Pages deployment.',
    footer_built: 'Crafted with'
  }
};

function initBilingualEngine() {
  const langToggle = document.getElementById('langToggle');
  const langText = document.getElementById('langText');

  // Load saved language or default to 'vi'
  currentLang = localStorage.getItem('hvd_lang') || 'vi';
  applyLanguage(currentLang);

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'vi' ? 'en' : 'vi';
      applyLanguage(currentLang);
      localStorage.setItem('hvd_lang', currentLang);
    });
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    if (langText) {
      langText.textContent = lang === 'vi' ? 'EN' : 'VI';
    }

    const dict = translations[lang];
    if (!dict) return;

    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Re-render active architecture details in selected language
    if (window.updateArchDetailsLang) {
      window.updateArchDetailsLang(lang);
    }
  }
}

/* =========================================================
   3. THEME MANAGEMENT
   ========================================================= */
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const root = document.documentElement;

  const savedTheme = localStorage.getItem('hvd_theme') || 'dark';
  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = root.classList.contains('dark');
      const newTheme = isDark ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('hvd_theme', newTheme);
    });
  }

  function applyTheme(theme) {
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
      if (themeIcon) themeIcon.className = 'fa-solid fa-sun';
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
      if (themeIcon) themeIcon.className = 'fa-solid fa-moon';
    }
  }
}

/* =========================================================
   4. MOBILE NAVIGATION
   ========================================================= */
function initMobileNav() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (!menuToggle || !navLinks) return;

  const links = navLinks.querySelectorAll('.nav-link');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-open');
    });
  });
}

/* =========================================================
   5. SKILLS FILTER
   ========================================================= */
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* =========================================================
   6. ARCHITECTURE SHOWCASE (Interactive & Bilingual)
   ========================================================= */
function initArchitectureShowcase() {
  const archNodes = document.querySelectorAll('.arch-node');
  const badgeEl = document.getElementById('archDetailBadge');
  const titleEl = document.getElementById('archDetailTitle');
  const descEl = document.getElementById('archDetailDesc');
  const featuresEl = document.getElementById('archDetailFeatures');

  let currentActiveTarget = 'info-api';

  const archData = {
    vi: {
      'info-client': {
        badge: 'Giao Diện Người Dùng',
        title: 'Client Layer & Real-time Subscriptions',
        desc: 'Bao gồm Web Dashboard quản trị dự án xây dựng và bản đồ số WebGIS. Giao tiếp qua RESTful APIs để truy xuất dữ liệu đồng bộ và duy trì kết nối WebSocket / SSE qua SignalR Client để nhận ngay các thông báo giải ngân, bình luận thảo luận và cập nhật tiến độ.',
        features: [
          'Kết nối an toàn qua HTTPS & WSS (SSL/TLS)',
          'Xác thực người dùng qua JWT Bearer Token',
          'Tự động kết nối lại (Auto-reconnect) SignalR khi mạng chập chờn'
        ]
      },
      'info-api': {
        badge: 'Tầng Xử Lý Chính',
        title: 'ASP.NET Core Web API (Clean Architecture)',
        desc: 'Thiết kế theo cấu trúc tách lớp nghiêm ngặt (Domain, Application, Infrastructure, Presentation). Application layer xử lý business use case, validation chặt chẽ với FluentValidation. DTO mapping tối ưu hóa payload gửi nhận và ngăn ngừa over-posting.',
        features: [
          'Dependency Injection & Repository Pattern chuẩn mực',
          'Custom Exception Middleware xử lý lỗi tập trung',
          'Lập trình bất đồng bộ tối đa với Async/Await không nghẽn thread'
        ]
      },
      'info-bus': {
        badge: 'Giao Tiếp Bất Đồng Bộ & Sự Kiện',
        title: 'Apache Kafka & SignalR Hubs',
        desc: 'Áp dụng Apache Kafka làm xương sống Event-Driven. Khi một hành động lớn xảy ra (phê duyệt giải ngân hoặc thay đổi kế hoạch vốn), event được đẩy lên Kafka Topic để các dịch vụ tiêu thụ bất đồng bộ mà không gây nghẽn luồng người dùng. SignalR Hub tiếp tục đẩy thông báo realtime tới phòng ban liên quan.',
        features: [
          'Tách rời module (Decoupling) tăng tính sẵn sàng',
          'Phát sóng thông báo theo Group/User trong SignalR',
          'Xử lý nền background task đảm bảo tin cậy dữ liệu'
        ]
      },
      'info-db': {
        badge: 'Tầng Dữ Liệu & Bộ Nhớ Đệm',
        title: 'PostgreSQL, Apache AGE, Redis & Amazon S3',
        desc: 'Sử dụng PostgreSQL lưu trữ dữ liệu nghiệp vụ quan hệ (RDBMS). Tích hợp Apache AGE để giải quyết bài toán duyệt cây thư mục hồ sơ và bản đồ WebGIS với tốc độ truy vấn đồ thị vượt trội. Redis đóng vai trò Cache-Aside giảm tải truy vấn lặp lại, còn Amazon S3 lưu trữ an toàn hồ sơ thầu, hợp đồng.',
        features: [
          'Apache AGE: Tối ưu đồ thị quan hệ cha-con nhiều cấp',
          'Redis Caching: Giảm độ trễ API dưới 50ms',
          'Amazon S3: Lưu trữ an toàn hồ sơ dự án & văn bản số'
        ]
      }
    },
    en: {
      'info-client': {
        badge: 'Presentation Layer',
        title: 'Client Layer & Real-time Subscriptions',
        desc: 'Web Dashboard for enterprise project management and WebGIS interactive map clients. Communicates via RESTful APIs for transactional data and maintains active WebSocket connections with SignalR for live disbursement updates, discussion threads, and instant notifications.',
        features: [
          'Secure communication over HTTPS & WSS (SSL/TLS)',
          'Stateless authentication via JWT Bearer tokens',
          'Automatic SignalR reconnection handling'
        ]
      },
      'info-api': {
        badge: 'Core Business Layer',
        title: 'ASP.NET Core Web API (Clean Architecture)',
        desc: 'Structured following strict Clean Architecture boundaries (Domain, Application, Infrastructure, Presentation). Application layer coordinates business use cases with FluentValidation. DTO mapping sanitizes incoming payloads and prevents over-posting.',
        features: [
          'Robust Dependency Injection & Repository / UnitOfWork',
          'Centralized Custom Exception Middleware',
          'Asynchronous non-blocking workflows with async/await'
        ]
      },
      'info-bus': {
        badge: 'Event Broker & Push',
        title: 'Apache Kafka & SignalR Hubs',
        desc: 'Apache Kafka forms the asynchronous messaging backbone. Domain events (e.g. Disbursement Approved) are published to Kafka topics for reliable consumer ingestion. SignalR Hub pushes instant updates to relevant project workspaces and stakeholders.',
        features: [
          'Decoupled inter-service communications',
          'Selective group and user targeted real-time push',
          'Fault-tolerant background task consumption'
        ]
      },
      'info-db': {
        badge: 'Data & Persistence',
        title: 'PostgreSQL, Apache AGE, Redis & Amazon S3',
        desc: 'PostgreSQL handles core transactional relational records. Apache AGE enables high-speed recursive graph traversal for deep WebGIS file directories. Redis serves as a Cache-Aside layer for hot lookups, and Amazon S3 provides cloud object storage for project dossiers.',
        features: [
          'Apache AGE: Optimized multi-level tree traversals',
          'Redis Caching: Sub-50ms API response latency',
          'Amazon S3: Resilient cloud storage for contracts and drawings'
        ]
      }
    }
  };

  function renderDetails(targetKey, lang) {
    const langDict = archData[lang] || archData['vi'];
    const data = langDict[targetKey];
    if (!data) return;

    if (badgeEl) badgeEl.textContent = data.badge;
    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.desc;

    if (featuresEl) {
      featuresEl.innerHTML = data.features
        .map(f => `<span><i class="fa-solid fa-check"></i> ${f}</span>`)
        .join('');
    }
  }

  // Hook for global language update
  window.updateArchDetailsLang = function(lang) {
    renderDetails(currentActiveTarget, lang);
  };

  // Initial selection
  archNodes[1]?.classList.add('active'); // ASP.NET Core API
  renderDetails(currentActiveTarget, currentLang);

  archNodes.forEach(node => {
    node.addEventListener('click', () => {
      archNodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');

      currentActiveTarget = node.getAttribute('data-target');
      renderDetails(currentActiveTarget, currentLang);
    });
  });
}

/* =========================================================
   7. CLIPBOARD ACTIONS & TOAST
   ========================================================= */
function initClipboardActions() {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  let toastTimer;

  function showToast(message) {
    if (!toast || !toastMsg) return;
    clearTimeout(toastTimer);
    toastMsg.textContent = message;
    toast.classList.add('show');
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // Terminal Copy Button
  const terminalCopyBtn = document.getElementById('terminalCopyBtn');
  const terminalCode = document.getElementById('terminalCode');
  if (terminalCopyBtn && terminalCode) {
    terminalCopyBtn.addEventListener('click', () => {
      const codeText = terminalCode.innerText;
      copyToClipboard(codeText, currentLang === 'vi' ? 'Đã sao chép mã nguồn C#!' : 'C# Code snippet copied!');
    });
  }

  // Copy email hero button
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = copyEmailBtn.getAttribute('data-email');
      copyToClipboard(email, (currentLang === 'vi' ? 'Đã sao chép Email: ' : 'Copied Email: ') + email);
    });
  }

  // Copy small buttons in contact
  const copySmallBtns = document.querySelectorAll('.copy-small-btn');
  copySmallBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-copy');
      copyToClipboard(text, (currentLang === 'vi' ? 'Đã sao chép: ' : 'Copied: ') + text);
    });
  });

  function copyToClipboard(text, successMsg) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg);
      }).catch(() => {
        fallbackCopy(text, successMsg);
      });
    } else {
      fallbackCopy(text, successMsg);
    }
  }

  function fallbackCopy(text, successMsg) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(successMsg);
    } catch (err) {
      showToast(text);
    }
    document.body.removeChild(textArea);
  }
}

/* =========================================================
   8. SCROLL SPY FOR NAVIGATION
   ========================================================= */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
