export interface TabProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}