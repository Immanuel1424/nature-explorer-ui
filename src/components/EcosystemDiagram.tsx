import React, { useState } from 'react';
import { TreePine, Flower2, Bug, Bird, Sun, Cloud } from 'lucide-react';
import { EcosystemNode } from '@/utils/ecosystemData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface EcosystemDiagramProps {
  selectedNode: EcosystemNode | null;
}

export const EcosystemDiagram: React.FC<EcosystemDiagramProps> = ({ selectedNode }) => {
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);

  const layers = [
    {
      id: 'emergent',
      name: 'Emergent Layer',
      height: '25%',
      color: 'bg-gradient-to-b from-sky to-sky/70',
      icon: <Bird className="h-6 w-6" />,
      description: 'Tallest trees reaching above the canopy'
    },
    {
      id: 'canopy',
      name: 'Canopy Layer', 
      height: '35%',
      color: 'bg-gradient-canopy',
      icon: <TreePine className="h-6 w-6" />,
      description: 'Main tree crowns forming the forest roof'
    },
    {
      id: 'understory',
      name: 'Understory',
      height: '25%', 
      color: 'bg-gradient-to-b from-leaf to-leaf/80',
      icon: <Flower2 className="h-6 w-6" />,
      description: 'Smaller trees and shrubs below the canopy'
    },
    {
      id: 'floor',
      name: 'Forest Floor',
      height: '15%',
      color: 'bg-gradient-earth',
      icon: <Bug className="h-6 w-6" />,
      description: 'Ground layer with decomposers and small plants'
    }
  ];

  return (
    <div className="w-full h-full">
      <Card className="h-full bg-gradient-sky">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Sun className="h-5 w-5 animate-pulse-glow text-sun" />
                Forest Ecosystem Diagram
              </CardTitle>
              <CardDescription>
                Interactive visualization of forest layers
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Cloud className="h-6 w-6 text-sky animate-float" />
              <Sun className="h-6 w-6 text-sun animate-pulse-glow" />
            </div>
          </div>
        </CardHeader>

        <CardContent className="h-96 relative overflow-hidden">
          {/* Sky background */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky/30 to-transparent" />
          
          {/* Forest layers */}
          <div className="relative h-full flex flex-col-reverse">
            {layers.map((layer, index) => (
              <div
                key={layer.id}
                className={`
                  relative transition-all duration-500 cursor-pointer
                  ${layer.color} ${layer.height}
                  hover:scale-x-[1.02] hover:shadow-organic
                  ${hoveredLayer === layer.id ? 'z-10 brightness-110' : ''}
                  ${index === 0 ? 'rounded-b-lg' : ''}
                  ${index === layers.length - 1 ? 'rounded-t-lg' : ''}
                `}
                style={{ height: layer.height }}
                onMouseEnter={() => setHoveredLayer(layer.id)}
                onMouseLeave={() => setHoveredLayer(null)}
              >
                {/* Layer content */}
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-background/20 rounded-lg backdrop-blur-sm">
                      {layer.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white drop-shadow-lg">
                        {layer.name}
                      </h4>
                      <p className="text-sm text-white/80 drop-shadow">
                        {layer.description}
                      </p>
                    </div>
                  </div>

                  {/* Animated elements for visual appeal */}
                  <div className="flex gap-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className={`
                          w-2 h-2 rounded-full bg-white/40
                          animate-float opacity-60
                        `}
                        style={{
                          animationDelay: `${i * 0.5}s`,
                          animationDuration: `${3 + i}s`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Organic overlay patterns */}
                <div className="absolute inset-0 opacity-20">
                  {layer.id === 'canopy' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-sway" />
                  )}
                  {layer.id === 'understory' && (
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Selected node info overlay */}
          {selectedNode && (
            <div className="absolute top-4 right-4 max-w-xs">
              <Card className="bg-background/95 backdrop-blur-sm shadow-deep animate-grow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <span className="text-lg">{selectedNode.icon}</span>
                    {selectedNode.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground mb-2">
                    {selectedNode.description}
                  </p>
                  <div className="flex gap-1 flex-wrap">
                    <Badge variant="outline" className="text-xs">
                      {selectedNode.type}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {selectedNode.health}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};