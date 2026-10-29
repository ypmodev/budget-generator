import textsTittle from "@/data/texts.json";

const Banner = () => {
  return (
    <section className="relative h-32 w-full overflow-hidden rounded-4xl bg-[url('/images/banner-bg.png')] bg-cover bg-center sm:h-40 md:h-48 lg:h-72">
      <h1 className="absolute inset-0 flex items-center justify-center px-4 text-center text-xl font-bold sm:text-2xl md:text-4xl lg:text-5xl">
        {textsTittle.bannerTitle}
      </h1>
    </section>
  );
};

export default Banner;
