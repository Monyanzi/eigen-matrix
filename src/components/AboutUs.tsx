import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Target, TrendingUp } from 'lucide-react';

export const AboutUs = () => {
  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-navy mb-6">
            Why Eigen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Proven expertise, rigorous methodology, measurable outcomes.
          </p>
        </motion.div>

        <Tabs defaultValue="team" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-4 bg-transparent p-0 mb-12">
            <TabsTrigger
              value="team"
              className="data-[state=active]:bg-navy data-[state=active]:text-white bg-white border border-border h-14 text-lg font-medium transition-all duration-300 shadow-sm"
            >
              Our Team
            </TabsTrigger>
            <TabsTrigger
              value="process"
              className="data-[state=active]:bg-navy data-[state=active]:text-white bg-white border border-border h-14 text-lg font-medium transition-all duration-300 shadow-sm"
            >
              Our Process
            </TabsTrigger>
            <TabsTrigger
              value="results"
              className="data-[state=active]:bg-navy data-[state=active]:text-white bg-white border border-border h-14 text-lg font-medium transition-all duration-300 shadow-sm"
            >
              Our Results
            </TabsTrigger>
          </TabsList>

          <div className="bg-white border border-border p-8 md:p-12 shadow-sm min-h-[500px]">
            <TabsContent value="team" className="mt-0 animate-in fade-in-50 duration-500">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="w-12 h-12 bg-navy/10 flex items-center justify-center rounded-lg mb-6">
                    <Users className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="font-serif text-3xl text-navy mb-6">Deep Analytical Expertise</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Our consultants combine decades of Fortune 500 experience with advanced degrees in mathematics, economics, and engineering.
                  </p>
                  <div className="grid grid-cols-3 gap-6 mb-8 pb-8 border-b border-border">
                    <div>
                      <p className="font-mono text-3xl font-bold text-navy mb-1">75+</p>
                      <p className="text-sm text-muted-foreground uppercase tracking-wide">Years Combined</p>
                    </div>
                    <div>
                      <p className="font-mono text-3xl font-bold text-navy mb-1">12</p>
                      <p className="text-sm text-muted-foreground uppercase tracking-wide">Industries</p>
                    </div>
                    <div>
                      <p className="font-mono text-3xl font-bold text-navy mb-1">3</p>
                      <p className="text-sm text-muted-foreground uppercase tracking-wide">Continents</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    We speak the language of enterprise leadership because we've been in your position.
                  </p>
                </div>
                <div className="bg-secondary/30 h-full min-h-[400px] flex items-center justify-center border border-navy/10 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3862134/pexels-photo-3862134.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Professional team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="process" className="mt-0 animate-in fade-in-50 duration-500">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="w-12 h-12 bg-navy/10 flex items-center justify-center rounded-lg mb-6">
                    <Target className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="font-serif text-3xl text-navy mb-6">Mathematical Rigour</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Our proprietary frameworks are built on proven mathematical principles, not management fads.
                  </p>
                  <div className="space-y-6">
                    <div className="border-l-4 border-navy pl-6">
                      <h4 className="font-serif text-xl text-navy mb-2">1. Discovery</h4>
                      <p className="text-muted-foreground">Deep data analysis to isolate your true value drivers</p>
                    </div>
                    <div className="border-l-4 border-navy pl-6">
                      <h4 className="font-serif text-xl text-navy mb-2">2. Design</h4>
                      <p className="text-muted-foreground">Custom frameworks tailored to your specific challenges</p>
                    </div>
                    <div className="border-l-4 border-navy pl-6">
                      <h4 className="font-serif text-xl text-navy mb-2">3. Delivery</h4>
                      <p className="text-muted-foreground">Hands-on implementation with measurable milestones</p>
                    </div>
                  </div>
                </div>
                <div className="bg-secondary/30 h-full min-h-[400px] flex items-center justify-center border border-navy/10 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Strategic process visualization"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="results" className="mt-0 animate-in fade-in-50 duration-500">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="w-12 h-12 bg-navy/10 flex items-center justify-center rounded-lg mb-6">
                    <TrendingUp className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="font-serif text-3xl text-navy mb-6">Measurable Impact</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    We deliver outcomes you can track, quantify, and present to your board with confidence.
                  </p>
                  <div className="grid grid-cols-2 gap-8 mb-8 pb-8 border-b border-border">
                    <div>
                      <p className="font-mono text-4xl font-bold text-navy mb-2">89%</p>
                      <p className="text-sm text-muted-foreground uppercase tracking-wide">Avg ROI Increase</p>
                    </div>
                    <div>
                      <p className="font-mono text-4xl font-bold text-navy mb-2">150+</p>
                      <p className="text-sm text-muted-foreground uppercase tracking-wide">Projects Delivered</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Every engagement includes clear KPIs, regular reporting, and post-implementation validation to ensure sustained results.
                  </p>
                </div>
                <div className="bg-secondary/30 h-full min-h-[400px] flex items-center justify-center border border-navy/10 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Results and performance metrics"
                    className="w-full h-full object-cover"
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
