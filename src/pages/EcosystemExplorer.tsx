import React, { useState } from 'react';
import { Search, Filter, Info, BarChart3, Settings } from 'lucide-react';
import { EcosystemTree } from '@/components/EcosystemTree';
import { EcosystemDiagram } from '@/components/EcosystemDiagram';
import { ecosystemData, EcosystemNode } from '@/utils/ecosystemData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const EcosystemExplorer: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<EcosystemNode | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterHealth, setFilterHealth] = useState<string>('all');

  const handleNodeSelect = (node: EcosystemNode) => {
    setSelectedNode(node);
  };

  const getFilteredData = (data: EcosystemNode): EcosystemNode => {
    const filterNode = (node: EcosystemNode): EcosystemNode | null => {
      const matchesSearch = searchTerm === '' || 
        node.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        node.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        node.characteristics?.some(char => char.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesHealth = filterHealth === 'all' || node.health === filterHealth;

      if (!matchesSearch && !matchesHealth) {
        // If this node doesn't match but might have matching children, check children
        if (node.children) {
          const filteredChildren = node.children.map(filterNode).filter(Boolean) as EcosystemNode[];
          if (filteredChildren.length > 0) {
            return { ...node, children: filteredChildren };
          }
        }
        return null;
      }

      const filteredChildren = node.children?.map(filterNode).filter(Boolean) as EcosystemNode[] | undefined;
      return { ...node, children: filteredChildren };
    };

    return filterNode(data) || data;
  };

  const getEcosystemStats = (node: EcosystemNode): { total: number, byType: Record<string, number>, byHealth: Record<string, number> } => {
    const stats = {
      total: 0,
      byType: {} as Record<string, number>,
      byHealth: {} as Record<string, number>
    };

    const countNode = (n: EcosystemNode) => {
      stats.total++;
      stats.byType[n.type] = (stats.byType[n.type] || 0) + 1;
      stats.byHealth[n.health] = (stats.byHealth[n.health] || 0) + 1;
      
      n.children?.forEach(countNode);
    };

    countNode(node);
    return stats;
  };

  const stats = getEcosystemStats(ecosystemData);
  const filteredData = getFilteredData(ecosystemData);

  return (
    <div className="min-h-screen bg-gradient-sky py-8">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-forest bg-clip-text text-transparent">
            Ecosystem Explorer
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Navigate through the temperate forest ecosystem and discover the intricate relationships 
            between different species, habitats, and environmental factors.
          </p>
        </div>

        {/* Controls */}
        <Card className="mb-8 bg-background/70 backdrop-blur-sm border-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Exploration Controls
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 items-end flex-wrap">
              <div className="flex-1 min-w-[200px]">
                <label className="text-sm font-medium mb-2 block">Search Ecosystem</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search species, characteristics, or descriptions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-background/50"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Filter by Health</label>
                <div className="flex gap-2">
                  {['all', 'excellent', 'good', 'moderate', 'poor'].map((health) => (
                    <Button
                      key={health}
                      variant={filterHealth === health ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilterHealth(health)}
                      className={filterHealth === health ? "bg-gradient-canopy" : ""}
                    >
                      {health.charAt(0).toUpperCase() + health.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tree View */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="tree" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-background/50">
                <TabsTrigger value="tree" className="gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Hierarchy View
                </TabsTrigger>
                <TabsTrigger value="diagram" className="gap-2">
                  <Info className="h-4 w-4" />
                  Layer Diagram
                </TabsTrigger>
              </TabsList>

              <TabsContent value="tree" className="mt-6">
                <Card className="bg-background/70 backdrop-blur-sm border-primary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Ecosystem Hierarchy</CardTitle>
                        <CardDescription>
                          Explore the forest structure from ecosystem level down to individual organisms
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {stats.total} Total Nodes
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="max-h-[70vh] overflow-y-auto">
                    <EcosystemTree 
                      node={filteredData} 
                      onNodeSelect={handleNodeSelect}
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="diagram" className="mt-6">
                <EcosystemDiagram selectedNode={selectedNode} />
              </TabsContent>
            </Tabs>
          </div>

          {/* Info Panel */}
          <div className="space-y-6">
            {/* Selected Node Details */}
            {selectedNode ? (
              <Card className="bg-background/70 backdrop-blur-sm border-primary/10 animate-grow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">{selectedNode.icon}</span>
                    {selectedNode.name}
                  </CardTitle>
                  <CardDescription>
                    {selectedNode.type.charAt(0).toUpperCase() + selectedNode.type.slice(1)} Details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedNode.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Health Status</label>
                      <Badge variant="outline" className="mt-1 w-full justify-center">
                        {selectedNode.health}
                      </Badge>
                    </div>
                    
                    {selectedNode.population && (
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Population</label>
                        <Badge variant="outline" className="mt-1 w-full justify-center">
                          {selectedNode.population}
                        </Badge>
                      </div>
                    )}
                  </div>

                  {selectedNode.characteristics && (
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Characteristics
                      </label>
                      <div className="flex flex-wrap gap-1">
                        {selectedNode.characteristics.map((char, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {char}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedNode.children && (
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Contains
                      </label>
                      <p className="text-sm text-muted-foreground">
                        {selectedNode.children.length} sub-component{selectedNode.children.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-background/70 backdrop-blur-sm border-primary/10">
                <CardHeader>
                  <CardTitle>Select a Node</CardTitle>
                  <CardDescription>
                    Click on any element in the ecosystem to view detailed information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Start exploring by clicking on the ecosystem components in the hierarchy view. 
                    Each node contains detailed information about species, health status, and characteristics.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Ecosystem Statistics */}
            <Card className="bg-background/70 backdrop-blur-sm border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Ecosystem Statistics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    By Type
                  </label>
                  <div className="space-y-2">
                    {Object.entries(stats.byType).map(([type, count]) => (
                      <div key={type} className="flex justify-between items-center">
                        <span className="text-sm capitalize">{type}</span>
                        <Badge variant="outline" className="text-xs">
                          {count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Health Distribution
                  </label>
                  <div className="space-y-2">
                    {Object.entries(stats.byHealth).map(([health, count]) => (
                      <div key={health} className="flex justify-between items-center">
                        <span className="text-sm capitalize">{health}</span>
                        <Badge variant="outline" className="text-xs">
                          {count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};