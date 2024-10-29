export interface NavLink {
    text: string;
    href: string;
}

export interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface PricingFeature {
    name: string;
    free: boolean;
    premium: boolean;
    tooltip?: string;
}

export interface PricingPlan {
    name: string;
    price: string;
    description: string;
    buttonText: string;
    highlighted?: boolean;
    dailyQuota: number;
}

export interface Objective {
    icon: React.ReactNode;
    title: string;
    description: string;
    details: string[];
    accuracy?: string;
  }
  
export interface Disease {
    name: string;
    description: string;
    accuracy: string;
    icon: React.ReactNode;
  }