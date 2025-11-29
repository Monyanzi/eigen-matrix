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

        <Tabs defaultValue="strategy" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-4 bg-transparent p-0 mb-12">
            <TabsTrigger
              value="strategy"
              className="data-[state=active]:bg-navy data-[state=active]:text-white bg-white border border-border h-14 text-lg font-medium transition-all duration-300 shadow-sm"
            >
              Strategic Vision
            </TabsTrigger>
            <TabsTrigger
              value="operations"
              className="data-[state=active]:bg-navy data-[state=active]:text-white bg-white border border-border h-14 text-lg font-medium transition-all duration-300 shadow-sm"
            >
              Operational Precision
            </TabsTrigger>
            <TabsTrigger
              value="digital"
              className="data-[state=active]:bg-navy data-[state=active]:text-white bg-white border border-border h-14 text-lg font-medium transition-all duration-300 shadow-sm"
            >
              Digital Future
            </TabsTrigger>
          </TabsList>

          <div className="bg-white border border-border p-8 md:p-12 shadow-sm min-h-[400px]">
            <TabsContent value="strategy" className="mt-0 animate-in fade-in-50 duration-500">
              <div className="grid md:grid-cols-2 gap-12 items-center h-full">
                <div>
                  <div className="w-12 h-12 bg-navy/10 flex items-center justify-center rounded-lg mb-6">
                    <BarChart3 className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="font-serif text-3xl text-navy mb-6">Charting the Course for Sustainable Growth</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Strategy without rigour is just ambition. We combine deep market intelligence with your internal data to build a roadmap that actually works. By identifying what truly drives your competitive advantage, we help you make bold bets with confidence, not hope.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-navy/80">
                      <div className="w-1.5 h-1.5 bg-navy rounded-full mr-3" />
                      Revenue driver identification
                    </li>
                    <li className="flex items-center text-navy/80">
                      <div className="w-1.5 h-1.5 bg-navy rounded-full mr-3" />
                      Competitive moat analysis
                    </li>
                    <li className="flex items-center text-navy/80">
                      <div className="w-1.5 h-1.5 bg-navy rounded-full mr-3" />
                      Scenario-based planning framework
                    </li>
                  </ul>
                </div>
                <div className="bg-secondary/30 h-full min-h-[300px] flex items-center justify-center border border-navy/10 rounded-lg p-8 overflow-hidden">
                  <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Strategic planning session" className="w-full h-full object-cover" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="operations" className="mt-0 animate-in fade-in-50 duration-500">
              <div className="grid md:grid-cols-2 gap-12 items-center h-full">
                <div>
                  <div className="w-12 h-12 bg-navy/10 flex items-center justify-center rounded-lg mb-6">
                    <Settings2 className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="font-serif text-3xl text-navy mb-6">Efficiency Without Compromise</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Most organisations operate at 60-70% efficiency. We help you unlock that hidden 30%. Through systematic process redesign and intelligent automation, we help you deliver better results with leaner teams. The result: lower costs, faster execution, and higher profit margins.
                  </p>
                  <ul className="space-y-3">
                     <li className="flex items-center text-navy/80">
                      <div className="w-1.5 h-1.5 bg-navy rounded-full mr-3" />
                      End-to-end process mapping
                    </li>
                    <li className="flex items-center text-navy/80">
                      <div className="w-1.5 h-1.5 bg-navy rounded-full mr-3" />
                      Organisational structure optimisation
                    </li>
                    <li className="flex items-center text-navy/80">
                      <div className="w-1.5 h-1.5 bg-navy rounded-full mr-3" />
                      KPI alignment and tracking
                    </li>
                  </ul>
                </div>
                <div className="bg-secondary/30 h-full min-h-[300px] flex items-center justify-center border border-navy/10 rounded-lg p-8 overflow-hidden">
                  <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Operational efficiency" className="w-full h-full object-cover" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="digital" className="mt-0 animate-in fade-in-50 duration-500">
              <div className="grid md:grid-cols-2 gap-12 items-center h-full">
                <div>
                  <div className="w-12 h-12 bg-navy/10 flex items-center justify-center rounded-lg mb-6">
                    <Laptop className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="font-serif text-3xl text-navy mb-6">Technology as a Catalyst</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Technology alone doesn't drive growth. The right technology, deployed strategically, does. We help you cut through the noise, identifying which digital investments will genuinely move your business forward. From data infrastructure to automation, we align tech with your business outcomes.
                  </p>
                   <ul className="space-y-3">
                    <li className="flex items-center text-navy/80">
                      <div className="w-1.5 h-1.5 bg-navy rounded-full mr-3" />
                      Business-driven technology strategy
                    </li>
                    <li className="flex items-center text-navy/80">
                      <div className="w-1.5 h-1.5 bg-navy rounded-full mr-3" />
                      Data and analytics infrastructure
                    </li>
                    <li className="flex items-center text-navy/80">
                      <div className="w-1.5 h-1.5 bg-navy rounded-full mr-3" />
                      Change management and adoption
                    </li>
                  </ul>
                </div>
                 <div className="bg-secondary/30 h-full min-h-[300px] flex items-center justify-center border border-navy/10 rounded-lg p-8 overflow-hidden">
                  <img src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Digital transformation" className="w-full h-full object-cover" />
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};
