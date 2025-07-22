import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Calendar,
  Wrench,
  AlertTriangle,
  CheckCircle,
  Clock
} from "lucide-react";

const Maintenance = () => {
  const maintenanceSchedule = [
    {
      id: "MS-001",
      asset: "HVAC Unit - Building A",
      type: "Preventive",
      frequency: "Quarterly",
      lastCompleted: "2024-01-15",
      nextDue: "2024-04-15",
      status: "Scheduled",
      estimatedHours: 4
    },
    {
      id: "MS-002",
      asset: "Elevator #1",
      type: "Inspection",
      frequency: "Monthly",
      lastCompleted: "2023-12-20",
      nextDue: "2024-01-25",
      status: "Overdue",
      estimatedHours: 2
    },
    {
      id: "MS-003",
      asset: "Fire Safety System",
      type: "Preventive",
      frequency: "Semi-annual",
      lastCompleted: "2024-01-10",
      nextDue: "2024-07-10",
      status: "Scheduled",
      estimatedHours: 6
    },
    {
      id: "MS-004",
      asset: "Backup Generator",
      type: "Inspection",
      frequency: "Monthly",
      lastCompleted: "2024-01-05",
      nextDue: "2024-02-05",
      status: "Due Soon",
      estimatedHours: 3
    }
  ];

  const upcomingTasks = [
    {
      id: "MT-001",
      title: "Elevator Safety Inspection",
      asset: "Elevator #1",
      dueDate: "2024-01-25",
      priority: "High",
      type: "Inspection"
    },
    {
      id: "MT-002",
      title: "Generator Load Test",
      asset: "Backup Generator",
      dueDate: "2024-02-05",
      priority: "Medium",
      type: "Preventive"
    },
    {
      id: "MT-003",
      title: "HVAC Filter Replacement",
      asset: "HVAC Unit - Building A",
      dueDate: "2024-02-10",
      priority: "Low",
      type: "Preventive"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Scheduled":
        return <Badge className="bg-blue-100 text-blue-800"><Clock className="w-3 h-3 mr-1" />Scheduled</Badge>;
      case "Due Soon":
        return <Badge className="bg-yellow-100 text-yellow-800"><AlertTriangle className="w-3 h-3 mr-1" />Due Soon</Badge>;
      case "Overdue":
        return <Badge variant="destructive"><AlertTriangle className="w-3 h-3 mr-1" />Overdue</Badge>;
      case "Completed":
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="w-3 h-3 mr-1" />Completed</Badge>;
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
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Maintenance</h1>
          <p className="text-muted-foreground">Schedule and track preventive maintenance</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Schedule Maintenance
        </Button>
      </div>

      {/* Upcoming Tasks */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Maintenance Tasks</CardTitle>
          <CardDescription>Tasks due in the next 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingTasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Wrench className="h-4 w-4 text-primary" />
                    <span className="font-medium">{task.title}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span>{task.asset}</span> • <span>Due: {task.dueDate}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getPriorityBadge(task.priority)}
                  <Badge variant="outline">{task.type}</Badge>
                  <Button size="sm" variant="outline">
                    Create Work Order
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Maintenance Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Maintenance Schedule</CardTitle>
          <CardDescription>Preventive maintenance schedule for all assets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {maintenanceSchedule.map((schedule) => (
              <div key={schedule.id} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Wrench className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">{schedule.asset}</h3>
                      <p className="text-sm text-muted-foreground">{schedule.id}</p>
                    </div>
                  </div>
                  {getStatusBadge(schedule.status)}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Type:</span>
                    <br />
                    <span>{schedule.type}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Frequency:</span>
                    <br />
                    <span>{schedule.frequency}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Last Completed:</span>
                    <br />
                    <span>{schedule.lastCompleted}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Next Due:</span>
                    <br />
                    <span>{schedule.nextDue}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Est. Hours:</span>
                    <br />
                    <span>{schedule.estimatedHours}h</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button size="sm" variant="outline">
                    Edit Schedule
                  </Button>
                  <Button size="sm" variant="outline">
                    View History
                  </Button>
                  {schedule.status === "Due Soon" || schedule.status === "Overdue" ? (
                    <Button size="sm">
                      Create Work Order
                    </Button>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Maintenance;