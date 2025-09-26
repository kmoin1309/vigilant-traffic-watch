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
      <header className="border-b border-border/20 backdrop-blur-md bg-background/95 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-primary shadow-glow">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight bg-gradient-primary bg-clip-text text-transparent">
                  AI Traffic Monitor
                </h1>
                <p className="text-sm text-muted-foreground font-medium">Real-time violation detection system</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Badge variant="outline" className="border-system-active/30 bg-system-active/10 text-system-active px-3 py-1.5 font-medium">
                <Activity className="h-3 w-3 mr-2" />
                System Online
              </Badge>
              <Button variant="professional" size="sm" className="font-medium">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-card border border-border/20">
          <img 
            src={heroImage} 
            alt="Traffic Control Center" 
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent flex items-center">
            <div className="px-12 py-10">
              <h2 className="text-4xl font-bold mb-4 tracking-tight leading-tight">Advanced Traffic Monitoring</h2>
              <p className="text-muted-foreground mb-8 max-w-lg text-lg leading-relaxed">
                AI-powered detection of traffic violations with real-time analysis, comprehensive audit trails, and explainable AI decisions.
              </p>
              <div className="flex items-center space-x-4">
                <Button variant="gradient" size="lg" className="font-semibold">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Live Feed
                </Button>
                <Button variant="professional" size="lg" className="font-medium">
                  View Dashboard
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="shadow-card border-border/20 hover:shadow-lg transition-all duration-300 group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-semibold tracking-wide">Total Violations</CardTitle>
              <div className="p-2 rounded-lg bg-violation-critical/10 group-hover:bg-violation-critical/15 transition-colors">
                <AlertCircle className="h-5 w-5 text-violation-critical" />
              </div>
            </CardHeader>
            <CardContent className="space-y-1">
              <div className="text-3xl font-bold tracking-tight">{systemStats.totalViolations}</div>
              <p className="text-sm text-muted-foreground font-medium">+12% from last week</p>
            </CardContent>
          </Card>

          <Card className="shadow-card border-border/20 hover:shadow-lg transition-all duration-300 group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-semibold tracking-wide">Active Cameras</CardTitle>
              <div className="p-2 rounded-lg bg-system-active/10 group-hover:bg-system-active/15 transition-colors">
                <Camera className="h-5 w-5 text-system-active" />
              </div>
            </CardHeader>
            <CardContent className="space-y-1">
              <div className="text-3xl font-bold tracking-tight">
                {systemStats.camerasOnline}/{systemStats.totalCameras}
              </div>
              <p className="text-sm text-muted-foreground font-medium">{systemStats.systemUptime} uptime</p>
            </CardContent>
          </Card>

          <Card className="shadow-card border-border/20 hover:shadow-lg transition-all duration-300 group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-semibold tracking-wide">Processing Rate</CardTitle>
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                <Activity className="h-5 w-5 text-primary" />
              </div>
            </CardHeader>
            <CardContent className="space-y-1">
              <div className="text-3xl font-bold tracking-tight">{systemStats.processingFPS} FPS</div>
              <p className="text-sm text-muted-foreground font-medium">Real-time analysis</p>
            </CardContent>
          </Card>

          <Card className="shadow-card border-border/20 hover:shadow-lg transition-all duration-300 group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-semibold tracking-wide">Avg Confidence</CardTitle>
              <div className="p-2 rounded-lg bg-success/10 group-hover:bg-success/15 transition-colors">
                <TrendingUp className="h-5 w-5 text-success" />
              </div>
            </CardHeader>
            <CardContent className="space-y-1">
              <div className="text-3xl font-bold tracking-tight">{(systemStats.avgConfidence * 100).toFixed(1)}%</div>
              <p className="text-sm text-muted-foreground font-medium">High accuracy</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="violations" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-card/50 backdrop-blur-sm border border-border/30 p-2 rounded-xl shadow-sm">
            <TabsTrigger 
              value="violations" 
              className="font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all rounded-lg"
            >
              Recent Violations
            </TabsTrigger>
            <TabsTrigger 
              value="feed"
              className="font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all rounded-lg"
            >
              Live Feed
            </TabsTrigger>
            <TabsTrigger 
              value="audit"
              className="font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all rounded-lg"
            >
              Audit Reports
            </TabsTrigger>
            <TabsTrigger 
              value="system"
              className="font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all rounded-lg"
            >
              System Health
            </TabsTrigger>
          </TabsList>

          <TabsContent value="violations" className="space-y-8">
            <Card className="shadow-card border-border/20 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center text-xl font-bold">
                  <div className="p-2 rounded-lg bg-warning/10 mr-3">
                    <AlertTriangle className="h-6 w-6 text-warning" />
                  </div>
                  Traffic Violations
                </CardTitle>
                <CardDescription className="text-base">
                  AI-detected traffic violations with evidence and explanations
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {violations.map((violation) => (
                    <div 
                      key={violation.id}
                      className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer hover:shadow-lg ${
                        selectedViolation === violation.id 
                          ? 'border-primary bg-primary/5 shadow-glow' 
                          : 'border-border/30 hover:border-border/60 bg-card/50'
                      }`}
                      onClick={() => setSelectedViolation(
                        selectedViolation === violation.id ? null : violation.id
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <Badge className={`${getSeverityColor(violation.severity)} px-3 py-1.5 text-sm font-semibold`}>
                            {violation.type}
                          </Badge>
                          <div className="space-y-2">
                            <div className="font-bold text-lg tracking-tight">{violation.id}</div>
                            <div className="flex items-center text-sm text-muted-foreground space-x-6">
                              <span className="flex items-center font-medium">
                                <Clock className="h-4 w-4 mr-2" />
                                {violation.timestamp}
                              </span>
                              <span className="flex items-center font-medium">
                                <MapPin className="h-4 w-4 mr-2" />
                                {violation.location}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Badge variant="outline" className="px-3 py-1.5 font-semibold">
                            {(violation.confidence * 100).toFixed(0)}% confidence
                          </Badge>
                          <Button variant="ghost" size="sm" className="h-10 w-10">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {selectedViolation === violation.id && (
                        <div className="mt-8 pt-6 border-t border-border/20">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-4">
                              <h4 className="font-bold text-lg">Evidence Image</h4>
                              <div className="bg-muted/20 rounded-xl p-8 aspect-video flex items-center justify-center border border-border/20">
                                <div className="text-center text-muted-foreground">
                                  <Camera className="h-12 w-12 mx-auto mb-4" />
                                  <div className="font-semibold text-lg">Evidence snapshot would display here</div>
                                  <div className="text-sm mt-2 font-medium">
                                    Camera: {violation.camera}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <h4 className="font-bold text-lg">AI Explanation</h4>
                              <div className="bg-accent/30 rounded-xl p-6 border border-border/20">
                                <p className="text-sm leading-relaxed font-medium">
                                  {violation.explanation}
                                </p>
                              </div>
                              <div className="flex space-x-3 pt-2">
                                <Button size="sm" variant="professional" className="font-semibold">
                                  <Download className="h-4 w-4 mr-2" />
                                  Export Evidence
                                </Button>
                                <Button size="sm" variant="outline" className="font-semibold">
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
            <Card className="shadow-card border-border/20 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="text-xl font-bold">Live Camera Feeds</CardTitle>
                <CardDescription className="text-base">Real-time monitoring of traffic intersections</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((feed) => (
                    <div key={feed} className="aspect-video bg-muted/20 rounded-xl p-8 flex items-center justify-center border border-border/20 hover:border-border/40 transition-all group">
                      <div className="text-center text-muted-foreground">
                        <Camera className="h-16 w-16 mx-auto mb-4 group-hover:text-primary transition-colors" />
                        <div className="font-bold text-lg">Camera Feed {feed}</div>
                        <div className="text-sm font-medium mt-1">Live monitoring active</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="audit">
            <Card className="shadow-card border-border/20 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="text-xl font-bold">Audit Reports</CardTitle>
                <CardDescription className="text-base">Comprehensive system analysis and compliance reports</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="p-6 border border-border/30 rounded-xl bg-card/50 hover:border-border/50 transition-all">
                    <h4 className="font-bold text-lg">Weekly Audit Report - Sept 20-26</h4>
                    <p className="text-sm text-muted-foreground mt-2 font-medium">
                      Model drift: 2.3% | Fairness score: 94.2% | Accuracy: 89.7%
                    </p>
                    <div className="mt-6 flex space-x-3">
                      <Button size="sm" variant="professional" className="font-semibold">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button size="sm" variant="outline" className="font-semibold">View Details</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system">
            <Card className="shadow-card border-border/20 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="text-xl font-bold">System Health Metrics</CardTitle>
                <CardDescription className="text-base">Real-time system performance and status monitoring</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center p-4 rounded-lg bg-card/50 border border-border/20">
                      <span className="font-semibold">CPU Usage</span>
                      <span className="text-success font-bold">34%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg bg-card/50 border border-border/20">
                      <span className="font-semibold">Memory Usage</span>
                      <span className="text-warning font-bold">72%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg bg-card/50 border border-border/20">
                      <span className="font-semibold">GPU Usage</span>
                      <span className="text-success font-bold">45%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg bg-card/50 border border-border/20">
                      <span className="font-semibold">Network Latency</span>
                      <span className="text-success font-bold">12ms</span>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center p-4 rounded-lg bg-card/50 border border-border/20">
                      <span className="font-semibold">Model Version</span>
                      <span className="font-bold">YOLOv8.2-traffic</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg bg-card/50 border border-border/20">
                      <span className="font-semibold">Last Update</span>
                      <span className="font-bold">2 days ago</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg bg-card/50 border border-border/20">
                      <span className="font-semibold">Inference Time</span>
                      <span className="text-success font-bold">42ms</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg bg-card/50 border border-border/20">
                      <span className="font-semibold">Storage Used</span>
                      <span className="font-bold">2.3 TB / 5.0 TB</span>
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