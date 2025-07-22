import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Package, 
  ClipboardList, 
  Wrench, 
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Assets",
      value: "1,247",
      icon: Package,
      trend: "+12%",
      description: "from last month"
    },
    {
      title: "Active Work Orders",
      value: "23",
      icon: ClipboardList,
      trend: "-8%",
      description: "from last week"
    },
    {
      title: "Pending Maintenance",
      value: "7",
      icon: Wrench,
      trend: "+3%",
      description: "urgent tasks"
    },
    {
      title: "System Uptime",
      value: "99.2%",
      icon: TrendingUp,
      trend: "+0.5%",
      description: "this month"
    }
  ];

  const recentWorkOrders = [
    { id: "WO-001", title: "HVAC Maintenance", status: "In Progress", priority: "High" },
    { id: "WO-002", title: "Elevator Inspection", status: "Pending", priority: "Medium" },
    { id: "WO-003", title: "Fire Safety Check", status: "Completed", priority: "High" },
    { id: "WO-004", title: "Lighting Repair", status: "In Progress", priority: "Low" },
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

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your facility management system</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.trend}</span> {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Work Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Work Orders</CardTitle>
          <CardDescription>Latest facility maintenance and repair tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentWorkOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{order.id}</span>
                    <span className="text-muted-foreground">•</span>
                    <span>{order.title}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getPriorityBadge(order.priority)}
                  {getStatusBadge(order.status)}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;