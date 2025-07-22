import React from 'react';
import { TreePine, Leaf, Heart, Code, Github, Globe, Mail, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const About: React.FC = () => {
  const technologies = [
    { name: 'React 18', description: 'Modern React with hooks and functional components' },
    { name: 'TypeScript', description: 'Type-safe development for better reliability' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid styling' },
    { name: 'React Router DOM', description: 'Client-side routing for seamless navigation' },
    { name: 'Lucide React', description: 'Beautiful icons for enhanced user experience' },
    { name: 'Shadcn/ui', description: 'Accessible and customizable UI components' }
  ];

  const features = [
    {
      icon: <TreePine className="h-6 w-6 text-primary" />,
      title: 'Hierarchical Data Structure',
      description: 'Represents complex forest ecosystems as nested, interactive tree structures that mirror real ecological relationships.'
    },
    {
      icon: <Leaf className="h-6 w-6 text-leaf" />,
      title: 'Interactive Visualization',
      description: 'Explore ecosystem layers through dynamic diagrams and expandable tree views with smooth animations.'
    },
    {
      icon: <Heart className="h-6 w-6 text-destructive" />,
      title: 'Health Monitoring',
      description: 'Track and visualize the health status of different ecosystem components with color-coded indicators.'
    },
    {
      icon: <Code className="h-6 w-6 text-sky" />,
      title: 'Modern Architecture',
      description: 'Built with cutting-edge web technologies and best practices for performance and maintainability.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-sky py-8">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-8 flex justify-center">
            <div className="p-6 bg-gradient-forest rounded-3xl shadow-deep animate-float">
              <TreePine className="h-16 w-16 text-primary-foreground animate-sway" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-6 bg-gradient-forest bg-clip-text text-transparent">
            About EcoFilesystem
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            EcoFilesystem is an innovative web application that bridges the gap between technology and nature. 
            By visualizing forest ecosystems as hierarchical file structures, we make complex ecological 
            relationships accessible and understandable to everyone.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-16 bg-gradient-forest text-primary-foreground shadow-deep">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-4">Our Mission</CardTitle>
            <CardDescription className="text-primary-foreground/80 text-lg leading-relaxed">
              To foster a deeper understanding of forest ecosystems through interactive digital experiences, 
              helping people appreciate the intricate connections that sustain our natural world and inspiring 
              environmental stewardship through technology.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-forest bg-clip-text text-transparent">
            Key Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-background/70 backdrop-blur-sm border-primary/10 hover:shadow-organic transition-all duration-300 animate-grow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-canopy rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-forest bg-clip-text text-transparent">
            Built With Modern Technology
          </h2>
          
          <Card className="bg-background/70 backdrop-blur-sm border-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Technology Stack
              </CardTitle>
              <CardDescription>
                EcoFilesystem leverages cutting-edge web technologies to deliver a smooth, responsive experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-accent/20 rounded-lg border border-primary/10 hover:bg-accent/30 transition-colors duration-300"
                  >
                    <h4 className="font-semibold text-primary mb-2">{tech.name}</h4>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Environmental Impact */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-forest bg-clip-text text-transparent">
                Environmental Education
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Forests are among Earth's most complex and vital ecosystems. They provide oxygen, store carbon, 
                regulate water cycles, and support countless species. Understanding these intricate systems is 
                crucial for environmental conservation and sustainable development.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Supporting global environmental awareness</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-leaf/10 rounded-full">
                    <Users className="h-5 w-5 text-leaf" />
                  </div>
                  <span className="text-muted-foreground">Making science accessible to everyone</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-sky/10 rounded-full">
                    <Heart className="h-5 w-5 text-sky" />
                  </div>
                  <span className="text-muted-foreground">Inspiring environmental stewardship</span>
                </div>
              </div>
            </div>
            
            <Card className="bg-gradient-canopy text-primary-foreground shadow-deep">
              <CardHeader>
                <CardTitle className="text-2xl">Did You Know?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <Badge variant="secondary" className="mb-2 bg-primary-foreground/20">
                      Biodiversity
                    </Badge>
                    <p className="text-sm">Forests house 80% of terrestrial biodiversity</p>
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2 bg-primary-foreground/20">
                      Carbon Storage
                    </Badge>
                    <p className="text-sm">A single tree can absorb 48 lbs of CO₂ per year</p>
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2 bg-primary-foreground/20">
                      Oxygen Production
                    </Badge>
                    <p className="text-sm">One tree produces enough oxygen for two people daily</p>
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2 bg-primary-foreground/20">
                      Ecosystem Services
                    </Badge>
                    <p className="text-sm">Forests provide $150 billion in ecosystem services annually</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Get Involved */}
        <section className="text-center">
          <Card className="bg-background/70 backdrop-blur-sm border-primary/10">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Get Involved</CardTitle>
              <CardDescription className="text-lg">
                Join us in promoting environmental awareness through technology
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Whether you're an educator, developer, environmentalist, or simply someone who cares about 
                our planet, there are many ways to contribute to this project and spread awareness about 
                forest conservation.
              </p>
              
              <div className="flex gap-4 justify-center flex-wrap">
                <Button 
                  variant="outline" 
                  className="gap-2 bg-background/50 hover:bg-accent"
                >
                  <Github className="h-4 w-4" />
                  View Source Code
                </Button>
                
                <Button 
                  variant="outline"
                  className="gap-2 bg-background/50 hover:bg-accent"
                >
                  <Mail className="h-4 w-4" />
                  Contact Us
                </Button>
                
                <Button 
                  variant="outline"
                  className="gap-2 bg-background/50 hover:bg-accent"
                >
                  <Heart className="h-4 w-4" />
                  Support Conservation
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};