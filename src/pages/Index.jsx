import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Bare-Bones App</h1>
        <p className="text-xl mb-6">Start building your application here.</p>
        <Button size="lg">Get Started</Button>
      </section>
    </div>
  );
};

export default Index;