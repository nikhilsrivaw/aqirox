import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  ReferenceLine
} from "recharts";
import { 
  Users, 
  BarChart3, 
  GitBranch, 
  CheckCircle2, 
  Clock, 
  ArrowUpRight,
  MoreHorizontal,
  Search,
  MessageSquare,
  Phone,
  Mail,
  Zap,
  Truck,
  Database,
  ShieldCheck,
  Cpu,
  Globe,
  Layers,
  Code2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const initialData = [
  { name: "Mon", value: 400 },
  { name: "Tue", value: 300 },
  { name: "Wed", value: 600 },
  { name: "Thu", value: 800 },
  { name: "Fri", value: 500 },
  { name: "Sat", value: 900 },
  { name: "Sun", value: 1100 },
];

const leads = [
  { id: 1, name: "Arjun Sharma", company: "Sharma Exports", status: "Qualified", value: "₹45,000", lastActive: "2m ago" },
  { id: 2, name: "Priya Patel", company: "Patel Textiles", status: "In Progress", value: "₹1,20,000", lastActive: "15m ago" },
  { id: 3, name: "Rahul Verma", company: "Verma Logistics", status: "New", value: "₹32,000", lastActive: "1h ago" },
  { id: 4, name: "Ananya Iyer", company: "Iyer Solutions", status: "Qualified", value: "₹85,000", lastActive: "3h ago" },
];

const activities = [
  { id: 1, type: "call", text: "Call scheduled with Arjun Sharma", time: "Just now" },
  { id: 2, type: "mail", text: "Proposal sent to Priya Patel", time: "5m ago" },
  { id: 3, type: "deal", text: "New lead from Verma Logistics", time: "12m ago" },
];

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<"crm" | "analytics" | "pipeline" | "timesaver">("crm");
  const [liveActivities, setLiveActivities] = useState(activities);
  const [chartData, setChartData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update CRM activities
      const newActivity = {
        id: Date.now(),
        type: ["call", "mail", "deal"][Math.floor(Math.random() * 3)],
        text: [
          "Follow-up email sent to lead",
          "Meeting confirmed with client",
          "New inquiry from website",
          "Deal moved to Negotiation"
        ][Math.floor(Math.random() * 4)],
        time: "Just now"
      };
      setLiveActivities(prev => [newActivity, ...prev.slice(0, 2)]);

      // Update Analytics data for smooth transitions
      setChartData(prev => prev.map(item => ({
        ...item,
        value: Math.max(200, item.value + (Math.random() * 100 - 50))
      })));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const tabs = [
    { id: "crm", label: "Intelligent Workflows", icon: Zap },
    { id: "analytics", label: "Business Analytics", icon: BarChart3 },
    { id: "pipeline", label: "Operations SaaS", icon: GitBranch },
    { id: "timesaver", label: "Time Saver for SMBs", icon: Clock },
  ];

  return (
    <section className="py-16 md:py-24 bg-background border-b border-sand overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6"
          >
            <Zap className="h-3 w-3 fill-current" />
            The AQIROX Ecosystem
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-heading mb-6"
          >
            Software that works as hard as you do
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="body-large text-charcoal max-w-3xl mx-auto"
          >
            Most businesses struggle with fragmented tools that don't talk to each other. 
            AQIROX builds cohesive SaaS platforms that bridge the gap between your data and your decisions.
          </motion.p>
        </div>

        {/* Problem Section - SMB Oriented */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {[
            { 
              title: "The 'Excel' Ceiling", 
              problem: "Managing 500+ SKUs or 1000+ leads in spreadsheets is a recipe for errors.",
              solution: "Automated databases that update in real-time across your entire team."
            },
            { 
              title: "WhatsApp Chaos", 
              problem: "Critical business info is buried in chat histories and personal phones.",
              solution: "Centralized communication hubs that sync every conversation to the client profile."
            },
            { 
              title: "Growth Paralysis", 
              problem: "Afraid to take new orders because you don't know your true capacity.",
              solution: "Live operational dashboards that show exactly what your business can handle."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 md:p-8 bg-white border border-sand rounded-xl shadow-sm hover:shadow-md transition-all cursor-default"
            >
              <h4 className="font-bold text-zapier-black mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {item.title}
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-red-500 mb-1">The Friction</p>
                  <p className="text-sm text-charcoal">{item.problem}</p>
                </div>
                <div className="pt-4 border-t border-sand">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-green-600 mb-1">The AQIROX Way</p>
                  <p className="text-sm text-zapier-black font-medium">{item.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile preview card (visible below md only) */}
        <div className="md:hidden mb-12 p-8 rounded-2xl bg-zapier-black text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 mb-6">
              <Zap className="h-3 w-3 text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                Full Demo
              </span>
            </div>
            <h4 className="text-2xl font-bold mb-3 tracking-tight">
              Explore the full dashboard on desktop.
            </h4>
            <p className="text-sand/60 text-sm leading-relaxed">
              Our interactive product demo with live data, analytics, and workflows is
              built for a bigger screen. Open AQIROX on your laptop to see every feature
              in action.
            </p>
          </div>
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="hidden md:flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-zapier-black text-white shadow-lg scale-105"
                  : "bg-light-sand text-charcoal hover:bg-sand/30"
              }`}
            >
              <tab.icon className="h-5 w-5" />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="hidden md:block relative min-h-[600px] bg-off-white rounded-xl border border-sand shadow-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === "crm" && (
              <motion.div
                key="crm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 h-full grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                <div className="lg:col-span-2">
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-4 bg-white border border-sand rounded-sm px-4 py-2 w-full max-w-md shadow-sm">
                      <Search className="h-4 w-4 text-warm-gray" />
                      <input 
                        type="text" 
                        placeholder="Search leads..." 
                        className="bg-transparent border-none focus:ring-0 text-sm w-full"
                        readOnly
                      />
                    </div>
                    <Button className="bg-primary text-white rounded-sm hover:bg-primary/90 transition-all">Add Lead</Button>
                  </div>

                  <div className="space-y-4">
                    {leads.map((lead, i) => (
                      <motion.div
                        key={lead.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ x: 4, borderColor: "rgba(255, 79, 0, 0.3)" }}
                        className="bg-white p-6 rounded-sm border border-sand flex items-center justify-between hover:shadow-md transition-all group cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-light-sand flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            {lead.name[0]}
                          </div>
                          <div>
                            <h4 className="font-bold text-zapier-black">{lead.name}</h4>
                            <p className="text-sm text-charcoal">{lead.company} • <span className="text-warm-gray">{lead.lastActive}</span></p>
                          </div>
                        </div>
                        <div className="flex items-center gap-8">
                          <div className="hidden md:block text-right">
                            <p className="text-xs uppercase tracking-wider text-warm-gray mb-1">Value</p>
                            <p className="font-mono font-bold text-zapier-black">{lead.value}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                              lead.status === 'Qualified' ? 'bg-green-100 text-green-700' :
                              lead.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                              'bg-orange-100 text-orange-700'
                            }`}>
                              {lead.status}
                            </span>
                            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-light-sand"><Phone className="h-4 w-4" /></Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-light-sand"><Mail className="h-4 w-4" /></Button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-white border-l border-sand p-6 hidden lg:block">
                  <h4 className="font-bold text-sm uppercase tracking-widest text-warm-gray mb-6">Live Activity</h4>
                  <div className="space-y-6">
                    <AnimatePresence initial={false}>
                      {liveActivities.map((activity) => (
                        <motion.div
                          key={activity.id}
                          initial={{ opacity: 0, x: 20, height: 0 }}
                          animate={{ opacity: 1, x: 0, height: "auto" }}
                          exit={{ opacity: 0, x: -20, height: 0 }}
                          className="flex gap-4 overflow-hidden"
                        >
                          <div className="shrink-0 w-8 h-8 rounded-full bg-light-sand flex items-center justify-center">
                            {activity.type === 'call' && <Phone className="h-4 w-4 text-primary" />}
                            {activity.type === 'mail' && <Mail className="h-4 w-4 text-blue-500" />}
                            {activity.type === 'deal' && <Users className="h-4 w-4 text-green-500" />}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-zapier-black leading-tight mb-1">{activity.text}</p>
                            <p className="text-xs text-warm-gray">{activity.time}</p>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                  <div className="mt-12 p-4 bg-light-sand rounded-sm border border-sand">
                    <p className="text-xs font-bold text-primary uppercase mb-2">Pro Tip</p>
                    <p className="text-xs text-charcoal leading-relaxed">
                      Use "Smart Filters" to automatically categorize leads based on their activity score.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "analytics" && (
              <motion.div
                key="analytics"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 h-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {[
                    { label: "Total Revenue", value: "₹12,45,000", trend: "+14.2%", icon: BarChart3 },
                    { label: "Active Deals", value: "48", trend: "+5.1%", icon: GitBranch },
                    { label: "Conversion Rate", value: "24.5%", trend: "+2.3%", icon: CheckCircle2 },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="transition-all"
                    >
                      <Card className="border-sand shadow-none bg-white hover:shadow-lg transition-shadow h-full cursor-default">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <p className="text-sm text-charcoal">{stat.label}</p>
                            <stat.icon className="h-4 w-4 text-warm-gray" />
                          </div>
                          <div className="flex items-end justify-between">
                            <h3 className="text-3xl font-bold text-zapier-black tracking-tight">{stat.value}</h3>
                            <span className="text-green-600 text-sm font-bold flex items-center bg-green-50 px-2 py-0.5 rounded">
                              <ArrowUpRight className="h-4 w-4" /> {stat.trend}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-white p-8 rounded-sm border border-sand shadow-sm">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h4 className="font-bold text-lg">Revenue Growth</h4>
                      <p className="text-sm text-charcoal">Weekly performance comparison</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                        <span className="text-xs font-medium">Actual</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-sand" />
                        <span className="text-xs font-medium">Target</span>
                      </div>
                    </div>
                  </div>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData}>
                        <defs>
                          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ff4f00" stopOpacity={0.1}/>
                            <stop offset="95%" stopColor="#ff4f00" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eceae3" />
                        <XAxis 
                          dataKey="name" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: '#6b6b6b', fontSize: 12 }}
                        />
                        <YAxis 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: '#6b6b6b', fontSize: 12 }}
                          domain={[0, 1500]}
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#201515', 
                            border: 'none', 
                            borderRadius: '4px',
                            color: '#fff',
                            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'
                          }}
                          itemStyle={{ color: '#fff' }}
                        />
                        <ReferenceLine y={800} stroke="#c5c0b1" strokeDasharray="3 3" label={{ value: 'Target', position: 'right', fill: '#c5c0b1', fontSize: 10 }} />
                        <Area 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#ff4f00" 
                          strokeWidth={3}
                          fillOpacity={1} 
                          fill="url(#colorValue)" 
                          isAnimationActive={true}
                          animationDuration={1500}
                          animationEasing="ease-in-out"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "pipeline" && (
              <motion.div
                key="pipeline"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 h-full"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Inventory & Stock Section */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-xs uppercase tracking-widest text-warm-gray">Live Inventory</h4>
                      <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">4 Alerts</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        { item: "Raw Cotton (Grade A)", stock: "120kg", status: "Healthy", color: "bg-green-500" },
                        { item: "Polyester Yarn", stock: "15kg", status: "Low Stock", color: "bg-red-500" },
                        { item: "Packaging Boxes", stock: "450 units", status: "Healthy", color: "bg-green-500" },
                        { item: "Dyeing Chemicals", stock: "8L", status: "Critical", color: "bg-red-500" },
                      ].map((inv, i) => (
                        <motion.div 
                          key={i} 
                          whileHover={{ scale: 1.02, x: 4, borderColor: "rgba(255, 79, 0, 0.2)" }}
                          className="bg-white p-4 rounded-xl border border-sand shadow-sm transition-colors cursor-default"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <p className="text-sm font-bold text-zapier-black">{inv.item}</p>
                            <div className={`w-2 h-2 rounded-full ${inv.color}`} />
                          </div>
                          <div className="flex justify-between items-end">
                            <p className="text-xs text-warm-gray">Current: <span className="text-zapier-black font-bold">{inv.stock}</span></p>
                            <p className={`text-[10px] font-bold ${inv.status === 'Healthy' ? 'text-green-600' : 'text-red-500'}`}>{inv.status}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Order Lifecycle Section */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-xs uppercase tracking-widest text-warm-gray">Order Lifecycle (Real-time)</h4>
                      <div className="flex gap-2">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                          <span className="text-[10px] font-bold text-warm-gray">Processing</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          <span className="text-[10px] font-bold text-warm-gray">Dispatched</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { id: "#ORD-8821", client: "Sharma Exports", stage: "Quality Check", progress: 85, time: "2h remaining" },
                        { id: "#ORD-8822", client: "Patel Textiles", stage: "Packaging", progress: 60, time: "4h remaining" },
                        { id: "#ORD-8823", client: "Verma Logistics", stage: "Ready for Dispatch", progress: 100, time: "Awaiting Pickup" },
                        { id: "#ORD-8824", client: "Iyer Solutions", stage: "Production", progress: 30, time: "1d remaining" },
                      ].map((order, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ y: -5, scale: 1.02, borderColor: "rgba(255, 79, 0, 0.3)" }}
                          className="bg-white p-5 rounded-xl border border-sand shadow-sm transition-all cursor-default"
                        >
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <p className="text-[10px] font-bold text-primary mb-0.5">{order.id}</p>
                              <p className="text-sm font-bold text-zapier-black">{order.client}</p>
                            </div>
                            <span className="text-[10px] font-bold text-warm-gray bg-light-sand px-2 py-0.5 rounded">{order.time}</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-[10px] font-bold">
                              <span className="text-charcoal">{order.stage}</span>
                              <span className="text-zapier-black">{order.progress}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-light-sand rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${order.progress}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className={`h-full ${order.progress === 100 ? 'bg-green-500' : 'bg-blue-500'}`}
                              />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Logistics Snapshot */}
                    <div className="bg-zapier-black rounded-xl p-6 text-white">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-white/10 rounded-lg">
                            <Truck className="h-5 w-5 text-primary" />
                          </div>
                          <h5 className="font-bold text-sm">Logistics Overview</h5>
                        </div>
                        <span className="text-[10px] font-bold text-sand/50 uppercase tracking-widest">Live Tracking</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-white">12</p>
                          <p className="text-[10px] text-sand/60 font-bold uppercase">In Transit</p>
                        </div>
                        <div className="text-center border-x border-white/10">
                          <p className="text-2xl font-bold text-white">08</p>
                          <p className="text-[10px] text-sand/60 font-bold uppercase">Delivered Today</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-red-400">02</p>
                          <p className="text-[10px] text-sand/60 font-bold uppercase">Delayed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            {activeTab === "timesaver" && (
              <motion.div
                key="timesaver"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 h-full flex flex-col"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <motion.div 
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="bg-white p-8 rounded-xl border border-sand shadow-sm transition-all cursor-default"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                        <Clock className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Time Saved This Month</h4>
                        <p className="text-sm text-warm-gray font-medium">Across all automated workflows</p>
                      </div>
                    </div>
                    <div className="flex items-end gap-3 mb-4">
                      <span className="text-5xl font-bold text-zapier-black tracking-tighter">124h</span>
                      <span className="text-green-600 text-sm font-bold bg-green-50 px-2 py-1 rounded mb-1 flex items-center gap-1">
                        <ArrowUpRight className="h-4 w-4" /> +18%
                      </span>
                    </div>
                    <p className="text-sm text-charcoal leading-relaxed">
                      That's equivalent to <span className="font-bold text-zapier-black">15.5 full work days</span> reclaimed for strategic growth.
                    </p>
                  </motion.div>

                  <motion.div 
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="bg-white p-8 rounded-xl border border-sand shadow-sm transition-all cursor-default"
                  >
                    <h4 className="font-bold text-sm uppercase tracking-widest text-warm-gray mb-6">Top Time Savers</h4>
                    <div className="space-y-4">
                      {[
                        { task: "WhatsApp Follow-ups", saved: "42h", color: "bg-green-500" },
                        { task: "Invoice Generation", saved: "28h", color: "bg-blue-500" },
                        { task: "Lead Distribution", saved: "15h", color: "bg-orange-500" },
                        { task: "Data Syncing", saved: "12h", color: "bg-purple-500" },
                      ].map((item, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium text-zapier-black">{item.task}</span>
                            <span className="font-bold text-primary">{item.saved}</span>
                          </div>
                          <div className="h-1.5 w-full bg-light-sand rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${(parseInt(item.saved) / 42) * 100}%` }}
                              className={`h-full ${item.color}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <div className="flex-1 bg-zapier-black rounded-xl p-8 text-white flex items-center justify-between">
                  <div className="max-w-md">
                    <h4 className="text-xl font-bold mb-2">Ready to reclaim your time?</h4>
                    <p className="text-sand/60 text-sm mb-6">
                      Our intelligent workflows learn your patterns and suggest automations that fit your business style.
                    </p>
                    <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8">Configure Automations</Button>
                  </div>
                  <div className="hidden lg:block relative">
                    <div className="w-32 h-32 border-4 border-primary/20 rounded-full flex items-center justify-center animate-spin-slow">
                      <Zap className="h-12 w-12 text-primary fill-current" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 border-2 border-white/10 rounded-full" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>


        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { 
              icon: Clock, 
              title: "Save 10+ hours weekly", 
              desc: "Automate repetitive tasks like data entry and follow-ups." 
            },
            { 
              icon: CheckCircle2, 
              title: "Zero Data Loss", 
              desc: "Centralize all customer interactions in one secure place." 
            },
            { 
              icon: ArrowUpRight, 
              title: "Scale with Confidence", 
              desc: "Built-in intelligence helps you spot growth opportunities early." 
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex gap-4 p-4 rounded-xl hover:bg-light-sand/50 transition-colors cursor-default"
            >
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <feature.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="font-bold mb-2">{feature.title}</h4>
                <p className="text-sm text-charcoal">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
