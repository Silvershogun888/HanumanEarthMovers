
export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
  image?: string;
}

export interface Project {
  id: string;
  client: string;
  location: string;
  description: string;
  params: string[];
  image: string;
  category: 'Agri' | 'Infrastructure' | 'Energy';
}

export interface FleetItem {
  name: string;
  quantity: number;
}
