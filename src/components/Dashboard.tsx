import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AlertCircle, 
  Camera, 
  Activity, 
  TrendingUp, 
  Shield, 
  Play,
  Download,
  Eye,
  Clock,
  MapPin,
  AlertTriangle
} from "lucide-react";
import heroImage from "@/assets/traffic-control-hero.jpg";

const Dashboard = () => {
  const [selectedViolation, setSelectedViolation] = useState<string | null>(null);

  const violations = [
    {
      id: "V001",
      type: "Signal Jump",
      timestamp: "2024-09-26 14:32:15",
      camera: "CAM-INT-001",
      location: "5th Ave & Main St",
      confidence: 0.94,
      severity: "critical",
      evidence: "/evidence/signal-jump-001.jpg",
      explanation: "Vehicle crossed stop line 2.3 seconds after red signal activation. High confidence detection based on motion vectors and signal state.",
      bbox: { x: 245, y: 180, w: 120, h: 80 }
    },
    {
      id: "V002", 
      type: "Wrong Way",
      timestamp: "2024-09-26 14:28:42",
      camera: "CAM-INT-002", 
      location: "Broadway & 1st St",
      confidence: 0.87,
      severity: "warning",
      evidence: "/evidence/wrong-way-002.jpg",
      explanation: "Vehicle movement direction opposite to designated lane flow. Detection confirmed through trajectory analysis over 3 second window.",
      bbox: { x: 180, y: 220, w: 110, h: 75 }
    },
    {
      id: "V003",
      type: "Lane Deviation",
      timestamp: "2024-09-26 14:25:18", 
      camera: "CAM-INT-003",
      location: "Park Ave & 3rd St",
      confidence: 0.76,
      severity: "info",
      evidence: "/evidence/lane-deviation-003.jpg",
      explanation: "Vehicle crossed lane boundary for extended period. Lower confidence due to partial occlusion.",
      bbox: { x: 320, y: 160, w: 95, h: 65 }
    }
  ];

  const systemStats = {
    totalViolations: 247,
    activeViolations: 12,
    camerasOnline: 18,
    totalCameras: 20,
    avgConfidence: 0.89,
    processingFPS: 24.3,
    systemUptime: "99.7%"
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-gradient-danger text-white';
      case 'warning': return 'bg-warning text-warning-foreground';
      case 'info': return 'bg-primary text-primary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  AI Traffic Monitor
                </h1>
                <p className="text-sm text-muted-foreground">Real-time violation detection system</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="border-system-active text-system-active">
                <Activity className="h-3 w-3 mr-1" />
                System Active
              </Badge>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-8 shadow-card">
          <img 
            src={heroImage} 
            alt="Traffic Control Center" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent flex items-center">
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-2">Advanced Traffic Monitoring</h2>
              <p className="text-muted-foreground mb-4 max-w-md">
                AI-powered detection of traffic violations with real-time analysis and comprehensive audit trails.
              </p>
              <Button className="bg-gradient-primary hover:shadow-glow transition-all">
                <Play className="h-4 w-4 mr-2" />
                Watch Live Feed
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Violations</CardTitle>
              <AlertCircle className="h-4 w-4 text-violation-critical" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStats.totalViolations}</div>
              <p className="text-xs text-muted-foreground">+12% from last week</p>
            </CardContent>
          </Card>

          <Card className="shadow-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Cameras</CardTitle>
              <Camera className="h-4 w-4 text-system-active" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {systemStats.camerasOnline}/{systemStats.totalCameras}
              </div>
              <p className="text-xs text-muted-foreground">{systemStats.systemUptime} uptime</p>
            </CardContent>
          </Card>

          <Card className="shadow-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Processing Rate</CardTitle>
              <Activity className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStats.processingFPS} FPS</div>
              <p className="text-xs text-muted-foreground">Real-time analysis</p>
            </CardContent>
          </Card>

          <Card className="shadow-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Confidence</CardTitle>
              <TrendingUp className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{(systemStats.avgConfidence * 100).toFixed(1)}%</div>
              <p className="text-xs text-muted-foreground">High accuracy</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="violations" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-card border border-border/50">
            <TabsTrigger value="violations">Recent Violations</TabsTrigger>
            <TabsTrigger value="feed">Live Feed</TabsTrigger>
            <TabsTrigger value="audit">Audit Reports</TabsTrigger>
            <TabsTrigger value="system">System Health</TabsTrigger>
          </TabsList>

          <TabsContent value="violations" className="space-y-6">
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-warning" />
                  Traffic Violations
                </CardTitle>
                <CardDescription>
                  AI-detected traffic violations with evidence and explanations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {violations.map((violation) => (
                    <div 
                      key={violation.id}
                      className={`p-4 rounded-lg border transition-all cursor-pointer hover:shadow-md ${
                        selectedViolation === violation.id ? 'border-primary shadow-glow' : 'border-border/50'
                      }`}
                      onClick={() => setSelectedViolation(
                        selectedViolation === violation.id ? null : violation.id
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Badge className={getSeverityColor(violation.severity)}>
                            {violation.type}
                          </Badge>
                          <div>
                            <div className="font-medium">{violation.id}</div>
                            <div className="flex items-center text-sm text-muted-foreground space-x-4">
                              <span className="flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {violation.timestamp}
                              </span>
                              <span className="flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                {violation.location}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">
                            {(violation.confidence * 100).toFixed(0)}% confidence
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {selectedViolation === violation.id && (
                        <div className="mt-4 pt-4 border-t border-border/30">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-medium mb-2">Evidence Image</h4>
                              <div className="bg-muted/30 rounded-lg p-4 aspect-video flex items-center justify-center">
                                <div className="text-center text-muted-foreground">
                                  <Camera className="h-8 w-8 mx-auto mb-2" />
                                  Evidence snapshot would display here
                                  <div className="text-xs mt-1">
                                    Camera: {violation.camera}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">AI Explanation</h4>
                              <div className="bg-accent/50 rounded-lg p-4">
                                <p className="text-sm leading-relaxed">
                                  {violation.explanation}
                                </p>
                              </div>
                              <div className="mt-4 flex space-x-2">
                                <Button size="sm" variant="outline">
                                  <Download className="h-3 w-3 mr-1" />
                                  Export
                                </Button>
                                <Button size="sm" variant="outline">
                                  View Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="feed">
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle>Live Camera Feeds</CardTitle>
                <CardDescription>Real-time monitoring of traffic intersections</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((feed) => (
                    <div key={feed} className="aspect-video bg-muted/30 rounded-lg p-4 flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <Camera className="h-12 w-12 mx-auto mb-2" />
                        <div className="font-medium">Camera Feed {feed}</div>
                        <div className="text-sm">Live monitoring active</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="audit">
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle>Audit Reports</CardTitle>
                <CardDescription>Comprehensive system analysis and compliance reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border border-border/50 rounded-lg">
                    <h4 className="font-medium">Weekly Audit Report - Sept 20-26</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Model drift: 2.3% | Fairness score: 94.2% | Accuracy: 89.7%
                    </p>
                    <div className="mt-3 flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Download className="h-3 w-3 mr-1" />
                        Download PDF
                      </Button>
                      <Button size="sm" variant="outline">View Details</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system">
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle>System Health Metrics</CardTitle>
                <CardDescription>Real-time system performance and status monitoring</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>CPU Usage</span>
                      <span className="text-success">34%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Memory Usage</span>
                      <span className="text-warning">72%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GPU Usage</span>
                      <span className="text-success">45%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Network Latency</span>
                      <span className="text-success">12ms</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Model Version</span>
                      <span>YOLOv8.2-traffic</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Last Update</span>
                      <span>2 days ago</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Inference Time</span>
                      <span className="text-success">42ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Storage Used</span>
                      <span>2.3 TB / 5.0 TB</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;