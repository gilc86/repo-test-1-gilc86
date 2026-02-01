export interface NavItem {
  name: string;
  href: string;
  current: boolean;
}

export interface HeaderProps {
  logo: string;
  navItems: NavItem[];
}