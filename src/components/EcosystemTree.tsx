import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Info, Heart, Users, Leaf } from 'lucide-react';
import { EcosystemNode, getHealthColor, getHealthBadgeColor } from '@/utils/ecosystemData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface EcosystemTreeProps {
  node: EcosystemNode;
  level?: number;
  onNodeSelect?: (node: EcosystemNode) => void;
}

export const EcosystemTree: React.FC<EcosystemTreeProps> = ({ 
  node, 
  level = 0, 
  onNodeSelect 
}) => {
  const [isExpanded, setIsExpanded] = useState(level < 2);
  const hasChildren = node.children && node.children.length > 0;

  const getIndentClass = (level: number) => {
    return `ml-${Math.min(level * 6, 24)}`;
  };

  const getNodeIcon = (type: EcosystemNode['type']) => {
    switch (type) {
      case 'ecosystem': return '🌍';
      case 'habitat': return '🏞️';
      case 'species': return '🌱';
      case 'individual': return '🌿';
      default: return '🌱';
    }
  };

  const handleToggle = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleNodeClick = () => {
    onNodeSelect?.(node);
  };

  return (
    <div className="animate-grow">
      <div className={`${getIndentClass(level)} mb-2`}>
        <Card 
          className={`
            transition-all duration-300 hover:shadow-organic cursor-pointer
            ${level === 0 ? 'bg-gradient-forest text-primary-foreground' : ''}
            ${level === 1 ? 'bg-gradient-canopy border-primary/30' : ''}
            ${level >= 2 ? 'bg-card hover:bg-accent/50' : ''}
          `}
          onClick={handleNodeClick}
        >
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {hasChildren && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 hover:bg-accent/20"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggle();
                    }}
                  >
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Button>
                )}
                
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{node.icon || getNodeIcon(node.type)}</span>
                  <div>
                    <CardTitle className={`text-lg ${level === 0 ? 'text-primary-foreground' : ''}`}>
                      {node.name}
                    </CardTitle>
                    <CardDescription className={level === 0 ? 'text-primary-foreground/80' : ''}>
                      {node.type.charAt(0).toUpperCase() + node.type.slice(1)}
                    </CardDescription>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Badge 
                  variant="outline" 
                  className={getHealthBadgeColor(node.health)}
                >
                  <Heart className="h-3 w-3 mr-1" />
                  {node.health}
                </Badge>

                {node.population && (
                  <Badge variant="outline" className="bg-muted/10 border-muted/30">
                    <Users className="h-3 w-3 mr-1" />
                    {node.population}
                  </Badge>
                )}
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-0">
            <p className={`text-sm mb-3 ${level === 0 ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
              {node.description}
            </p>

            {node.characteristics && (
              <div className="flex flex-wrap gap-1">
                {node.characteristics.map((characteristic, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="text-xs bg-accent/20 hover:bg-accent/30"
                  >
                    <Leaf className="h-3 w-3 mr-1" />
                    {characteristic}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {hasChildren && isExpanded && (
        <div className="transition-all duration-300 ease-organic">
          {node.children?.map((childNode) => (
            <EcosystemTree
              key={childNode.id}
              node={childNode}
              level={level + 1}
              onNodeSelect={onNodeSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};