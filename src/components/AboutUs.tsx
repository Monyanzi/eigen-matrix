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

        <Tabs defaultValue="team" className="w-full max-w-[1200px] mx-auto">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-8 bg-transparent p-0 mb-16">
            <TabsTrigger
              value="team"
              className="data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-lg bg-white border border-border h-20 text-lg font-medium transition-all duration-300 hover:border-navy/50"
            >
              Our Team
            </TabsTrigger>
            <TabsTrigger
              value="process"
              className="data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-lg bg-white border border-border h-20 text-lg font-medium transition-all duration-300 hover:border-navy/50"
            >
              Our Process
            </TabsTrigger>
            <TabsTrigger
              value="results"
              className="data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-lg bg-white border border-border h-20 text-lg font-medium transition-all duration-300 hover:border-navy/50"
            >
              Our Results
            </TabsTrigger>
          </TabsList>

          <div className="relative">
            <TabsContent value="team" className="mt-0 animate-in fade-in-50 slide-in-from-bottom-4 duration-500">
              <div className="grid lg:grid-cols-2 gap-16 items-center bg-white p-12 border border-border shadow-xl shadow-black/5">
                <div>
                   <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-12 bg-navy text-white flex items-center justify-center">
                        <Users className="w-6 h-6" />
                     </div>
                     <span className="text-sm font-bold tracking-widest uppercase text-navy/50">Why Us 01</span>
                  </div>

                  <h3 className="font-serif text-4xl text-navy mb-6 leading-tight">Deep Analytical Expertise</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                    Our consultants combine decades of Fortune 500 experience with advanced degrees in mathematics, economics, and engineering.
                  </p>
                  <div className="grid grid-cols-3 gap-8 mb-8 pb-8 border-b border-border">
                    <div>
                      <p className="font-mono text-4xl font-bold text-navy mb-2">75+</p>
                      <p className="text-sm text-muted-foreground uppercase tracking-wide">Years Combined</p>
                    </div>
                    <div>
                      <p className="font-mono text-4xl font-bold text-navy mb-2">12</p>
                      <p className="text-sm text-muted-foreground uppercase tracking-wide">Industries</p>
                    </div>
                    <div>
                      <p className="font-mono text-4xl font-bold text-navy mb-2">3</p>
                      <p className="text-sm text-muted-foreground uppercase tracking-wide">Continents</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    We speak the language of enterprise leadership because we've been in your position.
                  </p>
                </div>
                <div className="relative h-[500px] w-full bg-secondary/20 overflow-hidden">
                   <div className="absolute inset-0 bg-navy/10 mix-blend-multiply z-10" />
                   <img
                    src="https://images.pexels.com/photos/3862134/pexels-photo-3862134.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Professional team collaboration"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="process" className="mt-0 animate-in fade-in-50 slide-in-from-bottom-4 duration-500">
              <div className="grid lg:grid-cols-2 gap-16 items-center bg-white p-12 border border-border shadow-xl shadow-black/5">
                <div>
                   <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-12 bg-navy text-white flex items-center justify-center">
                        <Target className="w-6 h-6" />
                     </div>
                     <span className="text-sm font-bold tracking-widest uppercase text-navy/50">Why Us 02</span>
                  </div>

                  <h3 className="font-serif text-4xl text-navy mb-6 leading-tight">Mathematical Rigour</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                    Our proprietary frameworks are built on proven mathematical principles, not management fads.
                  </p>
                  <div className="space-y-8">
                    <div className="border-l-4 border-navy pl-6 group">
                      <h4 className="font-serif text-2xl text-navy mb-2 group-hover:translate-x-1 transition-transform">1. Discovery</h4>
                      <p className="text-muted-foreground text-lg">Deep data analysis to isolate your true value drivers</p>
                    </div>
                    <div className="border-l-4 border-navy/30 pl-6 group hover:border-navy transition-colors">
                      <h4 className="font-serif text-2xl text-navy mb-2 group-hover:translate-x-1 transition-transform">2. Design</h4>
                      <p className="text-muted-foreground text-lg">Custom frameworks tailored to your specific challenges</p>
                    </div>
                    <div className="border-l-4 border-navy/30 pl-6 group hover:border-navy transition-colors">
                      <h4 className="font-serif text-2xl text-navy mb-2 group-hover:translate-x-1 transition-transform">3. Delivery</h4>
                      <p className="text-muted-foreground text-lg">Hands-on implementation with measurable milestones</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-[500px] w-full bg-secondary/20 overflow-hidden">
                   <div className="absolute inset-0 bg-navy/10 mix-blend-multiply z-10" />
                   <img
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Strategic process visualization"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="results" className="mt-0 animate-in fade-in-50 slide-in-from-bottom-4 duration-500">
              <div className="grid lg:grid-cols-2 gap-16 items-center bg-white p-12 border border-border shadow-xl shadow-black/5">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-12 bg-navy text-white flex items-center justify-center">
                        <TrendingUp className="w-6 h-6" />
                     </div>
                     <span className="text-sm font-bold tracking-widest uppercase text-navy/50">Why Us 03</span>
                  </div>

                  <h3 className="font-serif text-4xl text-navy mb-6 leading-tight">Measurable Impact</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                    We deliver outcomes you can track, quantify, and present to your board with confidence.
                  </p>
                  <div className="grid grid-cols-2 gap-8 mb-8 pb-8 border-b border-border">
                    <div>
                      <p className="font-mono text-5xl font-bold text-navy mb-2">89%</p>
                      <p className="text-sm text-muted-foreground uppercase tracking-wide">Avg ROI Increase</p>
                    </div>
                    <div>
                      <p className="font-mono text-5xl font-bold text-navy mb-2">150+</p>
                      <p className="text-sm text-muted-foreground uppercase tracking-wide">Projects Delivered</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Every engagement includes clear KPIs, regular reporting, and post-implementation validation to ensure sustained results.
                  </p>
                </div>
                 <div className="relative h-[500px] w-full bg-secondary/20 overflow-hidden">
                   <div className="absolute inset-0 bg-navy/10 mix-blend-multiply z-10" />
                   <img
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Results and performance metrics"
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
