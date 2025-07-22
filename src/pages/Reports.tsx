import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Download, 
  FileText,
  TrendingUp,
  Calendar,
  DollarSign
} from "lucide-react";

const Reports = () => {
  const reportTypes = [
    {
      title: "Asset Performance Report",
      description: "Comprehensive analysis of asset uptime, maintenance costs, and performance metrics",
      icon: BarChart3,
      lastGenerated: "2024-01-20",
      frequency: "Monthly"
    },
    {
      title: "Work Order Summary",
      description: "Summary of completed, pending, and overdue work orders with cost analysis",
      icon: FileText,
      lastGenerated: "2024-01-22",
      frequency: "Weekly"
    },
    {
      title: "Maintenance Cost Analysis",
      description: "Detailed breakdown of maintenance expenses by asset category and time period",
      icon: DollarSign,
      lastGenerated: "2024-01-15",
      frequency: "Monthly"
    },
    {
      title: "Compliance Report",
      description: "Safety inspections, certifications, and regulatory compliance tracking",
      icon: TrendingUp,
      lastGenerated: "2024-01-18",
      frequency: "Quarterly"
    }
  ];

  const quickStats = [
    {
      title: "Total Work Orders",
      value: "156",
      period: "This Month",
      trend: "+12%"
    },
    {
      title: "Maintenance Costs",
      value: "$23,450",
      period: "This Month",
      trend: "-8%"
    },
    {
      title: "Asset Uptime",
      value: "99.2%",
      period: "This Month",
      trend: "+0.5%"
    },
    {
      title: "Completed Tasks",
      value: "142",
      period: "This Month",
      trend: "+18%"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports</h1>
          <p className="text-muted-foreground">Analytics and reporting for facility management</p>
        </div>
        <Button>
          <FileText className="w-4 h-4 mr-2" />
          Generate Custom Report
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={stat.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                  {stat.trend}
                </span> {stat.period}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Available Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Available Reports</CardTitle>
          <CardDescription>Generate and download facility management reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reportTypes.map((report, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-start gap-3">
                  <report.icon className="h-8 w-8 text-primary mt-1" />
                  <div className="flex-1">
                    <h3 className="font-medium text-lg mb-2">{report.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{report.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Last: {report.lastGenerated}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-4 w-4" />
                        <span>{report.frequency}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                      <Button size="sm">
                        Generate New
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
          <CardDescription>Recently generated reports available for download</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { name: "Work Order Summary - January 2024", date: "2024-01-22", type: "PDF", size: "2.3 MB" },
              { name: "Asset Performance Report - Q4 2023", date: "2024-01-20", type: "Excel", size: "4.1 MB" },
              { name: "Maintenance Cost Analysis - December 2023", date: "2024-01-15", type: "PDF", size: "1.8 MB" },
              { name: "Compliance Report - Q4 2023", date: "2024-01-18", type: "PDF", size: "3.2 MB" }
            ].map((report, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">{report.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {report.type} • {report.size} • Generated on {report.date}
                    </p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-1" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;