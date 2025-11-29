import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Settings2, Laptop } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
                    We help you define a clear path forward. By analysing market trends and your internal capabilities, we build a strategy that is not only ambitious but achievable. We focus on long-term value creation, ensuring your business is resilient and ready for the future.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-navy/80">
                      <div className="w-1.5 h-1.5 bg-navy rounded-full mr-3" />
                      Precise market positioning
                    </li>
                    <li className="flex items-center text-navy/80">
                      <div className="w-1.5 h-1.5 bg-navy rounded-full mr-3" />
                      Competitive landscape analysis
                    </li>
                    <li className="flex items-center text-navy/80">
                      <div className="w-1.5 h-1.5 bg-navy rounded-full mr-3" />
                      Long-term scenario planning
                    </li>
                  </ul>
                  <Button className="bg-navy hover:bg-navy-deep text-lg h-12 px-8 group" asChild>
                    <Link to="/services/strategy">
                      Define Your Strategy
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Link>
                  </Button>
                </div>
                <div className="bg-secondary/30 h-full min-h-[300px] flex items-center justify-center border border-navy/10 rounded-lg p-8">
                  <div className="text-center">
                     {/* Placeholder for visual aid */}
                    <div className="text-navy/40 font-mono text-sm">[Strategic Map Visualisation]</div>
                  </div>
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
                    Streamline your processes to deliver better results with fewer resources. We identify bottlenecks and inefficiencies, implementing systems that run smoothly and reliably. Our goal is to create an agile organisation capable of adapting to change.
                  </p>
                  <ul className="space-y-3 mb-8">
                     <li className="flex items-center text-navy/80">
                      <div className="w-1.5 h-1.5 bg-navy rounded-full mr-3" />
                      Process optimisation
                    </li>
                    <li className="flex items-center text-navy/80">
                      <div className="w-1.5 h-1.5 bg-navy rounded-full mr-3" />
                      Resource allocation modelling
                    </li>
                    <li className="flex items-center text-navy/80">
                      <div className="w-1.5 h-1.5 bg-navy rounded-full mr-3" />
                      Performance metric alignment
                    </li>
                  </ul>
                  <Button className="bg-navy hover:bg-navy-deep text-lg h-12 px-8 group" asChild>
                    <Link to="/services/operations">
                      Optimise Operations
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Link>
                  </Button>
                </div>
                <div className="bg-secondary/30 h-full min-h-[300px] flex items-center justify-center border border-navy/10 rounded-lg p-8">
                  <div className="text-center">
                    {/* Placeholder for visual aid */}
                    <div className="text-navy/40 font-mono text-sm">[Workflow Efficiency Graph]</div>
                  </div>
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
                    Embrace the digital tools that matter. We guide you through the modernisation of your infrastructure, ensuring technology serves your business goals rather than complicating them. From data analytics to automation, we help you stay ahead.
                  </p>
                   <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-navy/80">
                      <div className="w-1.5 h-1.5 bg-navy rounded-full mr-3" />
                      Digital transformation roadmap
                    </li>
                    <li className="flex items-center text-navy/80">
                      <div className="w-1.5 h-1.5 bg-navy rounded-full mr-3" />
                      Data leverage and analytics
                    </li>
                    <li className="flex items-center text-navy/80">
                      <div className="w-1.5 h-1.5 bg-navy rounded-full mr-3" />
                      Tech stack modernisation
                    </li>
                  </ul>
                  <Button className="bg-navy hover:bg-navy-deep text-lg h-12 px-8 group" asChild>
                    <Link to="/services/digital">
                      Accelerate Innovation
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Link>
                  </Button>
                </div>
                 <div className="bg-secondary/30 h-full min-h-[300px] flex items-center justify-center border border-navy/10 rounded-lg p-8">
                  <div className="text-center">
                     {/* Placeholder for visual aid */}
                    <div className="text-navy/40 font-mono text-sm">[Digital Integration Model]</div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};
