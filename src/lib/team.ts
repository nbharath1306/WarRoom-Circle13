export interface TeamMember {
  id: string;
  name: string;
  role: string;
  status: 'available' | 'building' | 'in_class' | 'away' | 'offline';
  statusMessage: string;
  lastActive: string;
  avatar: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '001',
    name: 'N. BHARATH',
    role: 'FOUNDER // COMMANDER',
    status: 'building',
    statusMessage: 'OPTIMIZING_CORE_OPS',
    lastActive: '2M_AGO',
    avatar: 'NB'
  },
  {
    id: '002',
    name: 'AKHIL VIPIN NAIR',
    role: 'CORE_OPERATIVE // ARCHITECT',
    status: 'available',
    statusMessage: 'DESIGNING_SYSTEM_FLOW',
    lastActive: '5M_AGO',
    avatar: 'AV'
  },
  {
    id: '003',
    name: 'G K HARJITH ADITHYHA',
    role: 'CORE_OPERATIVE // STRATEGIST',
    status: 'available',
    statusMessage: 'REVIEWING_INTEL',
    lastActive: '15M_AGO',
    avatar: 'GH'
  },
  {
    id: '004',
    name: 'PRASEEDA P RAO',
    role: 'CORE_OPERATIVE // ANALYST',
    status: 'in_class',
    statusMessage: 'CS301_LECTURE',
    lastActive: '1H_AGO',
    avatar: 'PR'
  }
];

export const getMemberStatusColor = (status: TeamMember['status']) => {
  switch (status) {
    case 'available': return 'bg-status-active';
    case 'building': return 'bg-c13-red';
    case 'in_class': return 'bg-status-warning';
    case 'away': return 'bg-status-warning';
    case 'offline': return 'bg-text-tertiary';
    default: return 'bg-text-tertiary';
  }
};
