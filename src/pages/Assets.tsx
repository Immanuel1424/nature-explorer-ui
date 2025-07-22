import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Plus, 
  Package, 
  MapPin, 
  Calendar,
  Filter
} from "lucide-react";

const Assets = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const assets = [
    {
      id: "AST-001",
      name: "HVAC Unit - Building A",
      category: "HVAC",
      location: "Building A - Roof",
      status: "Operational",
      lastMaintenance: "2024-01-15",
      nextMaintenance: "2024-04-15"
    },
    {
      id: "AST-002",
      name: "Elevator #1",
      category: "Elevator",
      location: "Building A - Main",
      status: "Maintenance Required",
      lastMaintenance: "2023-12-20",
      nextMaintenance: "2024-02-20"
    },
    {
      id: "AST-003",
      name: "Fire Safety System",
      category: "Safety",
      location: "Building A - All Floors",
      status: "Operational",
      lastMaintenance: "2024-01-10",
      nextMaintenance: "2024-07-10"
    },
    {
      id: "AST-004",
      name: "Backup Generator",
      category: "Power",
      location: "Building A - Basement",
      status: "Operational",
      lastMaintenance: "2024-01-05",
      nextMaintenance: "2024-03-05"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Operational":
        return <Badge className="bg-green-100 text-green-800">Operational</Badge>;
      case "Maintenance Required":
        return <Badge variant="destructive">Maintenance Required</Badge>;
      case "Out of Service":
        return <Badge className="bg-red-100 text-red-800">Out of Service</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const filteredAssets = assets.filter(asset =>
    asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Assets</h1>
          <p className="text-muted-foreground">Manage your facility assets and equipment</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Asset
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search assets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Assets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssets.map((asset) => (
          <Card key={asset.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{asset.name}</CardTitle>
                </div>
                {getStatusBadge(asset.status)}
              </div>
              <CardDescription>{asset.id}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Package className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Category:</span>
                  <span>{asset.category}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Location:</span>
                  <span>{asset.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Next Maintenance:</span>
                  <span>{asset.nextMaintenance}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Details
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Schedule Maintenance
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Assets;