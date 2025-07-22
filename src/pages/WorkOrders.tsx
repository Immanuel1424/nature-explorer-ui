import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Plus, 
  ClipboardList,
  User,
  Calendar,
  Filter,
  CheckCircle,
  Clock,
  AlertTriangle
} from "lucide-react";

const WorkOrders = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const workOrders = [
    {
      id: "WO-001",
      title: "HVAC Maintenance - Building A",
      description: "Routine maintenance and filter replacement for HVAC unit",
      assignee: "John Smith",
      priority: "High",
      status: "In Progress",
      createdDate: "2024-01-20",
      dueDate: "2024-01-25",
      category: "HVAC"
    },
    {
      id: "WO-002",
      title: "Elevator Inspection",
      description: "Monthly safety inspection for elevator #1",
      assignee: "Sarah Johnson",
      priority: "Medium",
      status: "Pending",
      createdDate: "2024-01-22",
      dueDate: "2024-01-30",
      category: "Elevator"
    },
    {
      id: "WO-003",
      title: "Fire Safety System Check",
      description: "Quarterly fire safety system inspection and testing",
      assignee: "Mike Davis",
      priority: "High",
      status: "Completed",
      createdDate: "2024-01-18",
      dueDate: "2024-01-24",
      category: "Safety"
    },
    {
      id: "WO-004",
      title: "Lighting Repair - Floor 3",
      description: "Replace faulty LED fixtures in conference room",
      assignee: "Lisa Wilson",
      priority: "Low",
      status: "In Progress",
      createdDate: "2024-01-21",
      dueDate: "2024-01-28",
      category: "Electrical"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="w-3 h-3 mr-1" />Completed</Badge>;
      case "In Progress":
        return <Badge className="bg-blue-100 text-blue-800"><Clock className="w-3 h-3 mr-1" />In Progress</Badge>;
      case "Pending":
        return <Badge className="bg-yellow-100 text-yellow-800"><AlertTriangle className="w-3 h-3 mr-1" />Pending</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "High":
        return <Badge variant="destructive">{priority}</Badge>;
      case "Medium":
        return <Badge className="bg-orange-100 text-orange-800">{priority}</Badge>;
      case "Low":
        return <Badge variant="secondary">{priority}</Badge>;
      default:
        return <Badge variant="outline">{priority}</Badge>;
    }
  };

  const filteredWorkOrders = workOrders.filter(wo =>
    wo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    wo.assignee.toLowerCase().includes(searchTerm.toLowerCase()) ||
    wo.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Work Orders</h1>
          <p className="text-muted-foreground">Manage maintenance tasks and assignments</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create Work Order
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search work orders..."
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

      {/* Work Orders List */}
      <div className="space-y-4">
        {filteredWorkOrders.map((workOrder) => (
          <Card key={workOrder.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ClipboardList className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle className="text-lg">{workOrder.title}</CardTitle>
                    <CardDescription>{workOrder.id}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getPriorityBadge(workOrder.priority)}
                  {getStatusBadge(workOrder.status)}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">{workOrder.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Assignee:</span>
                    <span>{workOrder.assignee}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Created:</span>
                    <span>{workOrder.createdDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Due:</span>
                    <span>{workOrder.dueDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClipboardList className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Category:</span>
                    <span>{workOrder.category}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  {workOrder.status !== "Completed" && (
                    <Button size="sm">
                      Mark Complete
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WorkOrders;