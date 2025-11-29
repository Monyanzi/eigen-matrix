import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Settings2, Laptop } from "lucide-react";
import { motion } from "framer-motion";

export const StrategicFrameworks = () => {
  return (
    <section className="py-24 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-navy mb-6">
            Strategic Frameworks
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Our methodology simplifies the complex, providing clear pathways to sustainable growth.
          </p>
        </motion.div>

        <Tabs defaultValue="strategy" className="w-full max-w-[1200px] mx-auto">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-8 bg-transparent p-0 mb-16">
            <TabsTrigger
              value="strategy"
              className="data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-lg bg-white border border-border h-20 text-lg font-medium transition-all duration-300 hover:border-navy/50"
            >
              Strategic Vision
            </TabsTrigger>
            <TabsTrigger
              value="operations"
              className="data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-lg bg-white border border-border h-20 text-lg font-medium transition-all duration-300 hover:border-navy/50"
            >
              Operational Precision
            </TabsTrigger>
            <TabsTrigger
              value="digital"
              className="data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-lg bg-white border border-border h-20 text-lg font-medium transition-all duration-300 hover:border-navy/50"
            >
              Digital Future
            </TabsTrigger>
          </TabsList>

          <div className="relative">
            <TabsContent value="strategy" className="mt-0 animate-in fade-in-50 slide-in-from-bottom-4 duration-500">
              <div className="grid lg:grid-cols-2 gap-16 items-center bg-white p-12 border border-border shadow-xl shadow-black/5">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-navy text-white flex items-center justify-center">
                       <BarChart3 className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-bold tracking-widest uppercase text-navy/50">Core Competency 01</span>
                  </div>

                  <h3 className="font-serif text-4xl text-navy mb-6 leading-tight">Charting the Course for <br/>Sustainable Growth</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                    Strategy without rigour is just ambition. We combine deep market intelligence with your internal data to build a roadmap that actually works. By identifying what truly drives your competitive advantage, we help you make bold bets with confidence.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center text-navy font-medium">
                      <div className="w-2 h-2 bg-accent rounded-full mr-4" />
                      Revenue driver identification
                    </li>
                    <li className="flex items-center text-navy font-medium">
                      <div className="w-2 h-2 bg-accent rounded-full mr-4" />
                      Competitive moat analysis
                    </li>
                    <li className="flex items-center text-navy font-medium">
                      <div className="w-2 h-2 bg-accent rounded-full mr-4" />
                      Scenario-based planning framework
                    </li>
                  </ul>
                </div>
                <div className="relative h-[500px] w-full bg-secondary/20 overflow-hidden">
                    <div className="absolute inset-0 bg-navy/10 mix-blend-multiply z-10" />
                    <img
                        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Strategic planning session"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="operations" className="mt-0 animate-in fade-in-50 slide-in-from-bottom-4 duration-500">
              <div className="grid lg:grid-cols-2 gap-16 items-center bg-white p-12 border border-border shadow-xl shadow-black/5">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-navy text-white flex items-center justify-center">
                       <Settings2 className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-bold tracking-widest uppercase text-navy/50">Core Competency 02</span>
                  </div>

                  <h3 className="font-serif text-4xl text-navy mb-6 leading-tight">Efficiency Without <br/>Compromise</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                    Most organisations operate at 60-70% efficiency. We help you unlock that hidden 30%. Through systematic process redesign and intelligent automation, we help you deliver better results with leaner teams. The result: lower costs, faster execution, and higher profit margins.
                  </p>
                  <ul className="space-y-4">
                     <li className="flex items-center text-navy font-medium">
                      <div className="w-2 h-2 bg-accent rounded-full mr-4" />
                      End-to-end process mapping
                    </li>
                    <li className="flex items-center text-navy font-medium">
                      <div className="w-2 h-2 bg-accent rounded-full mr-4" />
                      Organisational structure optimisation
                    </li>
                    <li className="flex items-center text-navy font-medium">
                      <div className="w-2 h-2 bg-accent rounded-full mr-4" />
                      KPI alignment and tracking
                    </li>
                  </ul>
                </div>
                <div className="relative h-[500px] w-full bg-secondary/20 overflow-hidden">
                    <div className="absolute inset-0 bg-navy/10 mix-blend-multiply z-10" />
                    <img
                        src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Operational efficiency"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="digital" className="mt-0 animate-in fade-in-50 slide-in-from-bottom-4 duration-500">
              <div className="grid lg:grid-cols-2 gap-16 items-center bg-white p-12 border border-border shadow-xl shadow-black/5">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-12 bg-navy text-white flex items-center justify-center">
                        <Laptop className="w-6 h-6" />
                     </div>
                     <span className="text-sm font-bold tracking-widest uppercase text-navy/50">Core Competency 03</span>
                  </div>

                  <h3 className="font-serif text-4xl text-navy mb-6 leading-tight">Technology as a <br/>Catalyst</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                    Technology alone doesn't drive growth. The right technology, deployed strategically, does. We help you cut through the noise, identifying which digital investments will genuinely move your business forward. From data infrastructure to automation, we align tech with your business outcomes.
                  </p>
                   <ul className="space-y-4">
                    <li className="flex items-center text-navy font-medium">
                      <div className="w-2 h-2 bg-accent rounded-full mr-4" />
                      Business-driven technology strategy
                    </li>
                    <li className="flex items-center text-navy font-medium">
                      <div className="w-2 h-2 bg-accent rounded-full mr-4" />
                      Data and analytics infrastructure
                    </li>
                    <li className="flex items-center text-navy font-medium">
                      <div className="w-2 h-2 bg-accent rounded-full mr-4" />
                      Change management and adoption
                    </li>
                  </ul>
                </div>
                 <div className="relative h-[500px] w-full bg-secondary/20 overflow-hidden">
                    <div className="absolute inset-0 bg-navy/10 mix-blend-multiply z-10" />
                    <img
                        src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Digital transformation"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};
