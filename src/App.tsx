import ServiceCard from "@/components/service-card"

const App = () => {
  return (
    <div>
      <ServiceCard
        title="SEO"
        description="Millora el posicionament als cercadors."
        basePrice={300}
      />
    </div>
  );
};
export default App;
