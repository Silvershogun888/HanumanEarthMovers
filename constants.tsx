
import { HardHat, Tractor, Construction, Truck, ShieldCheck, Award } from 'lucide-react';
import React from 'react';
import { Service, Project, FleetItem } from './types';

export const COMPANY_NAME = "Hanuman Earth Movers";
export const TAGLINE = "Earth Movers & Construction Limited";
export const LOGO_URL = "https://i.imgur.com/DPmN001.png";

export const SERVICES: Service[] = [
  {
    id: 'agri',
    title: 'Agri Infrastructure',
    description: 'Preparation of bush lands and modernization of agriculture.',
    icon: 'Tractor',
    details: ['Bush clearance', 'Land preparation', 'Irrigation systems', 'Reservoirs'],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'infra',
    title: 'Infrastructure Development',
    description: 'Execution of government and private organization projects.',
    icon: 'Construction',
    details: ['Road development', 'Substation preparation', 'Building construction', 'Earthworks'],
    image: 'https://i.imgur.com/YZBAMG5.jpeg'
  },
  {
    id: 'hiring',
    title: 'Equipment Hiring',
    description: 'One of Zambia\'s largest equipment hiring establishments.',
    icon: 'Truck',
    details: ['Excavators (10-31T)', 'TLBs', 'Graders', 'Compactors'],
    image: 'https://i.imgur.com/6rAIqvw.jpeg'
  }
];

export const AGRI_ASSETS = [
  {
    image: "https://i.imgur.com/98CeCXs.jpeg",
    name: "Industrial Land Clearing",
    description: "Large-scale bush clearance and terrain preparation using heavy-duty dozers to transform raw land into productive agricultural zones."
  },
  {
    image: "https://i.imgur.com/jDaOpkW.jpeg",
    name: "Irrigation Systems",
    description: "Complete design and implementation of sophisticated irrigation networks, ensuring optimal water distribution for high-yield farming."
  },
  {
    image: "https://i.imgur.com/l1L83UZ.jpeg",
    name: "Field Modernization",
    description: "Advanced leveling and soil stabilization projects aimed at modernizing traditional farm layouts for mechanized efficiency."
  },
  {
    image: "https://i.imgur.com/uTbhSY8.jpeg",
    name: "Water Reservoirs",
    description: "Construction of massive on-site water storage facilities and dams to support year-round agricultural operations in any climate."
  }
];

export const INFRA_ASSETS = [
  {
    image: "https://i.imgur.com/4dSO4cc.jpeg",
    name: "Road Network Development",
    description: "Precision grading and earthworks for national highway projects and industrial access roads, ensuring durable foundations for heavy transport."
  },
  {
    image: "https://i.imgur.com/YZBAMG5.jpeg",
    name: "Industrial Substation Prep",
    description: "Specialized site leveling and foundation trenching for high-voltage electrical substations and large-scale utility infrastructure."
  },
  {
    image: "https://i.imgur.com/jDaOpkW.jpeg",
    name: "Utility Trenching",
    description: "High-volume excavation for underground utilities, pipelines, and fiber optic networks utilizing our specialized excavator fleet."
  },
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    name: "Building Foundations",
    description: "Critical earthmoving and base preparation for commercial buildings and industrial complexes, meeting strict engineering tolerances."
  }
];

export const HIRING_ASSETS = [
  {
    image: "https://i.imgur.com/3lbtwrS.jpeg",
    name: "Heavy-Duty Excavators",
    description: "Our premium fleet of 20-31 ton excavators is optimized for massive earth-moving, deep trenching, and complex site clearances."
  },
  {
    image: "https://i.imgur.com/DjDfrtF.jpeg",
    name: "Precision Motor Graders",
    description: "Advanced grading solutions for industrial road development and site leveling, ensuring surgical precision in surface preparation."
  },
  {
    image: "https://i.imgur.com/iy08IY1.jpeg",
    name: "Multi-Purpose TLBs",
    description: "Versatile Backhoe Loaders (Tractor-Loader-Backhoes) perfect for utility work, urban construction, and agile material handling."
  },
  {
    image: "https://i.imgur.com/6rAIqvw.jpeg",
    name: "Vibratory Soil Compactors",
    description: "High-capacity compactors designed for maximum soil stabilization and asphalt durability in large-scale infrastructure projects."
  },
  {
    image: "https://i.imgur.com/KGGy3QP.jpeg",
    name: "Heavy Duty Dozer",
    description: "Robust bulldozers for efficient land clearing and heavy earth moving operations."
  },
  {
    image: "https://i.imgur.com/sV3fkwN.jpeg",
    name: "Articulated Dump Truck",
    description: "High-capacity articulated dump trucks for transporting materials across rough terrain."
  },
  {
    image: "https://i.imgur.com/Dg8179p.jpeg",
    name: "Front End Loader",
    description: "Versatile loaders for material handling, truck loading, and site cleanup."
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    client: 'Mansa Sugar Ltd',
    location: 'Chembe, Luapula',
    category: 'Agri',
    description: 'USD $30 Million venture for sugar plant infrastructure.',
    params: ['Land Preparation', 'Roads', 'Reservoirs', 'Storage Facilities'],
    image: 'https://i.imgur.com/XMmtNXB.jpeg'
  },
  {
    id: 'p2',
    client: 'Lake Agro Industries',
    location: 'Serenje',
    category: 'Agri',
    description: 'Land clearing and farm development for 2,000 hectares.',
    params: ['Central Pivots', 'Warehouse Construction', 'Electrical Works'],
    image: 'https://picsum.photos/seed/lakeagro/800/600'
  },
  {
    id: 'infra-road',
    client: 'National Road Development',
    location: 'Copperbelt / Lusaka',
    category: 'Infrastructure',
    description: 'Extensive road network preparation and civil works utilizing our heavy excavator and grader fleet to ensure durable industrial connectivity.',
    params: ['Earthworks', 'Culvert Installation', 'Base Preparation', 'Grading'],
    image: 'https://i.imgur.com/4dSO4cc.jpeg'
  },
  {
    id: 'infra-substation',
    client: 'Industrial Substation Prep',
    location: 'Zambia Energy Grid',
    category: 'Infrastructure',
    description: 'Precision site leveling and foundation preparation for high-voltage substations and heavy industrial complexes.',
    params: ['Site Leveling', 'Foundations', 'Trenching', 'Structural Steel'],
    image: 'https://i.imgur.com/YZBAMG5.jpeg'
  },
  {
    id: 'p3',
    client: 'Sterling and Wilson',
    location: '54 MW Solar Plant, Zambia',
    category: 'Energy',
    description: 'Contractor for land development and trenching for solar site.',
    params: ['Topsoil removal: 20,000 CBM', 'Rock excavation: 9,500 CBM', 'Trench Works: 30 KMS'],
    image: 'https://picsum.photos/seed/solar/800/600'
  }
];

export const FLEET: FleetItem[] = [
  { name: 'Backhoe Loader', quantity: 10 },
  { name: 'Vibratory Compactor', quantity: 4 },
  { name: 'Excavators', quantity: 20 },
  { name: 'Grader', quantity: 2 },
  { name: 'Lowbed Trucks', quantity: 3 },
  { name: 'Frontend Loaders', quantity: 2 },
  { name: 'Bulldozers', quantity: 2 },
  { name: 'Support Vehicles', quantity: 9 }
];

export const QUALITY_PILLARS = [
  { title: 'Customer Satisfaction', description: 'Delighting customers by identifying future needs today.' },
  { title: 'Total Involvement', description: 'Quality is a shared responsibility at every level.' },
  { title: 'Measurement', description: 'Using data to measure the right things from customer feedback.' },
  { title: 'Systematic Support', description: 'Aligning TQM with organizational systems like HR and Finance.' },
  { title: 'Continuous Improvement', description: 'Prevention costs 100x less than clean up.' }
];
