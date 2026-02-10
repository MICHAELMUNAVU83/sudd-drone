/**
 * SUDDDRONE Services Data
 * All service page content sourced from content.md and service_pages.md
 */
const SUDDDRONE_SERVICES = {
  'drone-cargo-delivery': {
    slug: 'drone-cargo-delivery',
    category: 'Humanitarian Logistics',
    title: 'Drone Cargo Delivery for Humanitarian Operations',
    shortDescription: 'We provide fast, secure, and reliable drone cargo delivery to reach vulnerable communities cut off by conflict, flooding, or poor infrastructure.',
    infoStats: [
      { label: 'Range', value: 'Long-Distance' },
      { label: 'Payload', value: 'Medical & Relief Supplies' }
    ],
    bannerImage: 'images/6912ef917baa3facb17a018e_Banner-6.jpg',
    bodyHtml: `
      <h2>Delivering Hope from Above</h2>
      <p>Access remains one of the greatest challenges facing humanitarian operations in South Sudan. Roads are often impassable, unsafe, or nonexistent. SUDDDRONE addresses this challenge through advanced drone cargo delivery systems designed for reliability and safety.</p>
      <h3>Precision in Humanitarian Logistics</h3>
      <p>Our drones transport essential supplies such as medicines, vaccines, food, and emergency equipment directly to areas that traditional transport cannot reach.</p>
      <p>Our core service capabilities include:</p>
      <ul>
        <li><strong>Medical Supply Delivery</strong> – Rapid transport of critical healthcare items</li>
        <li><strong>Emergency Response Support</strong> – Fast deployment during floods or conflict</li>
        <li><strong>Remote Community Access</strong> – Serving isolated populations</li>
        <li><strong>Risk Reduction</strong> – Minimizing human exposure to insecurity</li>
      </ul>
      <blockquote>"When roads fail, the sky becomes the safest route." — SUDDDRONE Operations Team</blockquote>
      <p>Beyond immediate delivery, our systems generate flight and delivery data to improve planning, accountability, and long-term logistics strategies.</p>
      <h4>Beyond the Horizon</h4>
      <p>As operations scale, SUDDDRONE will integrate agricultural support, infrastructure mapping, and security services—building a unified aerial ecosystem that supports national development and resilience.</p>
    `,
    prevSlug: 'security-surveillance',
    prevTitle: 'Security & Surveillance Services',
    nextSlug: 'agricultural-services',
    nextTitle: 'Agricultural Drone Services'
  },
  'agricultural-services': {
    slug: 'agricultural-services',
    category: 'Agriculture',
    title: 'Agricultural Drone Services for Smart Farming',
    shortDescription: 'We support farmers and institutions with drone-powered crop monitoring, precision spraying, and data-driven agricultural management to improve yields and food security.',
    infoStats: [
      { label: 'Coverage', value: 'Large-Scale Farmland' },
      { label: 'Output', value: 'Actionable Crop Data' }
    ],
    bannerImage: 'images/6912ef917baa3facb17a018e_Banner-6.jpg',
    bodyHtml: `
      <h2>A New Perspective on Agriculture</h2>
      <p>Agriculture remains the backbone of livelihoods in South Sudan, yet productivity is limited by traditional farming methods, limited data, and delayed intervention. SUDDDRONE introduces precision agriculture solutions that allow stakeholders to see, analyze, and act faster.</p>
      <h3>Precision for Productivity</h3>
      <p>Our agricultural drones collect high-resolution and multispectral data to detect crop stress, pest infestation, and nutrient deficiencies early—reducing losses and improving output.</p>
      <p>Our core service capabilities include:</p>
      <ul>
        <li><strong>Crop Health Monitoring</strong> – Early detection of stress and disease</li>
        <li><strong>Precision Spraying</strong> – Targeted application of fertilizers and pesticides</li>
        <li><strong>Land & Field Mapping</strong> – Accurate farm planning and assessment</li>
        <li><strong>Yield Estimation</strong> – Data-driven production forecasting</li>
      </ul>
      <blockquote>"Better data leads to better harvests." — SUDDDRONE Agriculture Team</blockquote>
      <p>All services are designed to work in collaboration with the Ministry of Agriculture, cooperatives, and development partners such as FAO.</p>
      <h4>Beyond the Horizon</h4>
      <p>As adoption grows, SUDDDRONE will integrate AI-driven analytics and farmer training programs to accelerate agricultural modernization nationwide.</p>
    `,
    prevSlug: 'drone-cargo-delivery',
    prevTitle: 'Drone Cargo Delivery',
    nextSlug: 'infrastructure-mapping',
    nextTitle: 'Mapping & Infrastructure Inspection'
  },
  'infrastructure-mapping': {
    slug: 'infrastructure-mapping',
    category: 'Infrastructure',
    title: 'Aerial Mapping, Surveying & Infrastructure Inspection',
    shortDescription: 'High-accuracy aerial data solutions for roads, bridges, construction sites, and energy infrastructure—delivered faster and safer than traditional methods.',
    infoStats: [
      { label: 'Accuracy', value: 'Survey-Grade Mapping' },
      { label: 'Use Case', value: 'Civil & Energy Infrastructure' }
    ],
    bannerImage: 'images/6912ef917baa3facb17a018e_Banner-6.jpg',
    bodyHtml: `
      <h2>Seeing Infrastructure Clearly</h2>
      <p>Manual inspections of infrastructure are costly, slow, and often unsafe. SUDDDRONE replaces these limitations with aerial mapping and inspection systems that provide high-resolution, measurable, and repeatable data.</p>
      <h3>Data You Can Build On</h3>
      <p>Our drones support engineers, planners, and decision-makers with accurate terrain models, structural visuals, and progress monitoring.</p>
      <p>Our core service capabilities include:</p>
      <ul>
        <li><strong>Road & Bridge Surveys</strong> – Planning, monitoring, and maintenance</li>
        <li><strong>Construction Progress Monitoring</strong> – Real-time aerial updates</li>
        <li><strong>Oil & Gas Inspections</strong> – Pipelines, flare sites, and facilities</li>
        <li><strong>Energy Infrastructure Assessment</strong> – Solar, hydro, and utilities</li>
      </ul>
      <blockquote>"Accurate data is the foundation of resilient infrastructure." — SUDDDRONE Infrastructure Team</blockquote>
      <p>Drone-based inspections significantly reduce risk exposure while improving documentation quality and turnaround time.</p>
      <h4>Beyond the Horizon</h4>
      <p>Future capabilities will include AI-assisted defect detection and long-term infrastructure monitoring programs.</p>
    `,
    prevSlug: 'agricultural-services',
    prevTitle: 'Agricultural Drone Services',
    nextSlug: 'security-surveillance',
    nextTitle: 'Security & Surveillance Services'
  },
  'security-surveillance': {
    slug: 'security-surveillance',
    category: 'Security',
    title: 'Aerial Security, Surveillance & Capacity Building',
    shortDescription: 'Drone-enabled surveillance solutions and training programs designed to support public safety, border monitoring, and critical facility protection.',
    infoStats: [
      { label: 'Coverage', value: 'Wide-Area Surveillance' },
      { label: 'Focus', value: 'Public Safety & Training' }
    ],
    bannerImage: 'images/6912ef917baa3facb17a018e_Banner-6.jpg',
    bodyHtml: `
      <h2>Enhancing Security from Above</h2>
      <p>Traditional ground-based surveillance is often limited in reach and speed. SUDDDRONE provides aerial intelligence solutions that enhance situational awareness while minimizing risk to personnel.</p>
      <h3>Technology with Responsibility</h3>
      <p>Our security services are delivered in close coordination with regulatory authorities and focus on support, intelligence, and training, not replacement of human judgment.</p>
      <p>Our core service capabilities include:</p>
      <ul>
        <li><strong>Facility & Border Surveillance</strong> – Wide-area monitoring</li>
        <li><strong>Event & Incident Monitoring</strong> – Real-time aerial support</li>
        <li><strong>Reconnaissance & Assessment</strong> – Tactical aerial insights</li>
        <li><strong>Training Programs</strong> – Capacity building for police and military units</li>
      </ul>
      <blockquote>"Strong security starts with clear visibility." — SUDDDRONE Security Team</blockquote>
      <p>A key pillar of this service is training local personnel, ensuring sustainable use of drone technology within national institutions.</p>
      <h4>Beyond the Horizon</h4>
      <p>SUDDDRONE aims to establish certified training programs and long-term partnerships that embed drone capability within national security frameworks.</p>
    `,
    prevSlug: 'infrastructure-mapping',
    prevTitle: 'Mapping & Infrastructure Inspection',
    nextSlug: 'drone-cargo-delivery',
    nextTitle: 'Drone Cargo Delivery'
  }
};
