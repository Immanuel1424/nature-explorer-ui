export interface EcosystemNode {
  id: string;
  name: string;
  type: 'ecosystem' | 'habitat' | 'species' | 'individual';
  icon: string;
  description: string;
  children?: EcosystemNode[];
  health: 'excellent' | 'good' | 'moderate' | 'poor';
  population?: number;
  characteristics?: string[];
}

export const ecosystemData: EcosystemNode = {
  id: 'temperate-forest',
  name: 'Temperate Forest Ecosystem',
  type: 'ecosystem',
  icon: '🌲',
  description: 'A diverse woodland ecosystem with deciduous and coniferous trees',
  health: 'good',
  children: [
    {
      id: 'canopy-layer',
      name: 'Canopy Layer',
      type: 'habitat',
      icon: '🌳',
      description: 'The uppermost layer of the forest, home to many species',
      health: 'excellent',
      children: [
        {
          id: 'oak-grove',
          name: 'Oak Grove',
          type: 'species',
          icon: '🌳',
          description: 'Majestic oak trees forming the forest canopy',
          health: 'excellent',
          population: 45,
          characteristics: ['Deciduous', 'Long-lived', 'Acorn producer'],
          children: [
            {
              id: 'oak-1',
              name: 'Ancient Oak',
              type: 'individual',
              icon: '🌳',
              description: '200-year-old oak tree',
              health: 'excellent',
              characteristics: ['Height: 25m', 'Diameter: 1.5m', 'Age: 200 years']
            },
            {
              id: 'oak-2',
              name: 'Young Oak',
              type: 'individual',
              icon: '🌱',
              description: '15-year-old oak sapling',
              health: 'good',
              characteristics: ['Height: 8m', 'Diameter: 0.3m', 'Age: 15 years']
            }
          ]
        },
        {
          id: 'maple-grove',
          name: 'Sugar Maple Stand',
          type: 'species',
          icon: '🍁',
          description: 'Beautiful maples with seasonal color changes',
          health: 'good',
          population: 32,
          characteristics: ['Deciduous', 'Maple syrup producer', 'Colorful autumn foliage'],
          children: [
            {
              id: 'maple-1',
              name: 'Champion Maple',
              type: 'individual',
              icon: '🍁',
              description: 'Largest maple in the grove',
              health: 'excellent',
              characteristics: ['Height: 22m', 'Diameter: 1.2m', 'Age: 150 years']
            }
          ]
        }
      ]
    },
    {
      id: 'understory',
      name: 'Understory Layer',
      type: 'habitat',
      icon: '🌿',
      description: 'Mid-level vegetation beneath the main canopy',
      health: 'good',
      children: [
        {
          id: 'dogwood-cluster',
          name: 'Flowering Dogwood',
          type: 'species',
          icon: '🌸',
          description: 'Small flowering trees in the understory',
          health: 'good',
          population: 28,
          characteristics: ['Spring flowering', 'Wildlife food source', 'Shade tolerant'],
          children: [
            {
              id: 'dogwood-1',
              name: 'Blooming Dogwood',
              type: 'individual',
              icon: '🌸',
              description: 'Dogwood in full spring bloom',
              health: 'excellent',
              characteristics: ['Height: 6m', 'Age: 25 years', 'Currently flowering']
            }
          ]
        },
        {
          id: 'hazelnut-shrubs',
          name: 'Hazelnut Shrubs',
          type: 'species',
          icon: '🌰',
          description: 'Nut-producing shrubs providing wildlife food',
          health: 'excellent',
          population: 67,
          characteristics: ['Nut producer', 'Wildlife habitat', 'Fast growing']
        }
      ]
    },
    {
      id: 'forest-floor',
      name: 'Forest Floor',
      type: 'habitat',
      icon: '🍄',
      description: 'Ground level ecosystem rich in decomposers and small plants',
      health: 'moderate',
      children: [
        {
          id: 'fern-colony',
          name: 'Christmas Fern Colony',
          type: 'species',
          icon: '🌿',
          description: 'Evergreen ferns carpeting the forest floor',
          health: 'good',
          population: 156,
          characteristics: ['Evergreen', 'Spore reproduction', 'Shade loving'],
          children: [
            {
              id: 'fern-patch-1',
              name: 'Dense Fern Patch',
              type: 'individual',
              icon: '🌿',
              description: 'Thick cluster of mature ferns',
              health: 'excellent',
              characteristics: ['Coverage: 25m²', 'Frond count: ~200', 'Age: 8 years']
            }
          ]
        },
        {
          id: 'mushroom-network',
          name: 'Mycorrhizal Network',
          type: 'species',
          icon: '🍄',
          description: 'Fungal networks connecting tree roots',
          health: 'excellent',
          population: 1,
          characteristics: ['Symbiotic', 'Nutrient exchange', 'Underground network'],
          children: [
            {
              id: 'honey-mushroom',
              name: 'Honey Mushroom Colony',
              type: 'individual',
              icon: '🍄',
              description: 'Large fungal organism spanning several trees',
              health: 'excellent',
              characteristics: ['Network span: 100m²', 'Age: ~50 years', 'Root connections: 15 trees']
            }
          ]
        }
      ]
    }
  ]
};

export const getHealthColor = (health: EcosystemNode['health']): string => {
  switch (health) {
    case 'excellent': return 'text-primary';
    case 'good': return 'text-leaf';
    case 'moderate': return 'text-sun';
    case 'poor': return 'text-destructive';
    default: return 'text-muted-foreground';
  }
};

export const getHealthBadgeColor = (health: EcosystemNode['health']): string => {
  switch (health) {
    case 'excellent': return 'bg-primary/10 text-primary border-primary/20';
    case 'good': return 'bg-leaf/10 text-leaf border-leaf/20';
    case 'moderate': return 'bg-sun/10 text-earth border-sun/20';
    case 'poor': return 'bg-destructive/10 text-destructive border-destructive/20';
    default: return 'bg-muted/10 text-muted-foreground border-muted/20';
  }
};