import React from 'react';
import { TreePine, Leaf, Sprout, Flower, ArrowRight, Heart, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: <TreePine className="h-8 w-8 text-primary" />,
      title: "Hierarchical Visualization",
      description: "Explore forest ecosystems through intuitive tree-like structures, from entire forests down to individual organisms.",
      color: "bg-primary/5 hover:bg-primary/10"
    },
    {
      icon: <Leaf className="h-8 w-8 text-leaf" />,
      title: "Interactive Ecosystem Map",
      description: "Navigate through different forest layers and discover the relationships between various species and habitats.",
      color: "bg-leaf/5 hover:bg-leaf/10"
    },
    {
      icon: <Sprout className="h-8 w-8 text-sun" />,
      title: "Real-time Health Monitoring",
      description: "Track the health status of different ecosystem components with visual indicators and detailed metrics.",
      color: "bg-sun/5 hover:bg-sun/10"
    },
    {
      icon: <Globe className="h-8 w-8 text-sky" />,
      title: "Environmental Impact",
      description: "Understanding forest ecosystems helps us appreciate and protect our natural environments.",
      color: "bg-sky/5 hover:bg-sky/10"
    }
  ];

  const stats = [
    { label: "Forest Layers", value: "4", icon: <TreePine className="h-5 w-5" /> },
    { label: "Species Tracked", value: "150+", icon: <Leaf className="h-5 w-5" /> },
    { label: "Ecosystem Health", value: "Good", icon: <Heart className="h-5 w-5" /> },
    { label: "Data Points", value: "1,000+", icon: <Globe className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-sky">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="p-6 bg-gradient-forest rounded-3xl shadow-deep animate-float">
              <TreePine className="h-16 w-16 text-primary-foreground animate-sway" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold mb-6 bg-gradient-forest bg-clip-text text-transparent">
            Welcome to EcoFilesystem
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Discover the intricate beauty of forest ecosystems through an interactive digital interface. 
            Explore hierarchical relationships between species, habitats, and environmental factors in our 
            temperate forest ecosystem.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-gradient-canopy text-primary-foreground shadow-leaf hover:shadow-deep transition-all duration-300 gap-2"
              onClick={() => onNavigate('explorer')}
            >
              Explore Ecosystem
              <ArrowRight className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-accent/50 transition-all duration-300"
              onClick={() => onNavigate('about')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="text-center bg-background/70 backdrop-blur-sm border-primary/10 hover:shadow-organic transition-all duration-300 animate-grow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-2">
                  <div className="p-3 bg-gradient-canopy rounded-full text-primary-foreground">
                    {stat.icon}
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold text-primary">
                  {stat.value}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-forest bg-clip-text text-transparent">
            Discover Nature's Network
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the interconnected relationships within forest ecosystems through our 
            innovative visualization tools and comprehensive data mapping.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`
                ${feature.color} border-primary/10 transition-all duration-500 hover:shadow-deep
                cursor-pointer group animate-grow
              `}
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => onNavigate('explorer')}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-background/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
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

      {/* Call to Action */}
      <section className="container mx-auto px-6 py-20">
        <Card className="max-w-4xl mx-auto bg-gradient-forest text-primary-foreground shadow-deep">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-6">
              <div className="flex gap-2">
                <Flower className="h-8 w-8 animate-float" style={{ animationDelay: '0s' }} />
                <TreePine className="h-10 w-10 animate-sway" style={{ animationDelay: '1s' }} />
                <Leaf className="h-8 w-8 animate-float" style={{ animationDelay: '2s' }} />
              </div>
            </div>
            
            <CardTitle className="text-3xl mb-4">
              Ready to Explore?
            </CardTitle>
            
            <CardDescription className="text-primary-foreground/80 text-lg mb-8">
              Dive into our interactive ecosystem explorer and discover the fascinating world 
              of forest hierarchies, species relationships, and environmental connections.
            </CardDescription>
            
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-background text-foreground hover:bg-accent transition-all duration-300 gap-2"
              onClick={() => onNavigate('explorer')}
            >
              Start Exploring
              <ArrowRight className="h-5 w-5" />
            </Button>
          </CardHeader>
        </Card>
      </section>
    </div>
  );
};