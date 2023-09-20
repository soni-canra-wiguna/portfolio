const HeroContent = () => {
  return (
    <div className="relative flex flex-col px-4 lg:px-10 text-center">
      <div className="absolute top-40 animate-blob left-40 blob-shad" />
      <div className="absolute right-10 top-10 z-[-1] w-40 animate-blob delay-200 h-40 bg-secondary filter blur-[50px] rounded-full opacity-70" />
      <h1 className="relative capitalize text-center xl:leading-[1.20] text-hero lg:text-8xl font-bold text-white mt-20">
        Inspiring the World with my{" "}
        <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          Design.
        </span>
      </h1>
      <p className="mt-6 tracking-wide text-gray-200/70 text-base">
        Menginspirasi Dunia dengan Desain ku dan menggebrak dunia dengan
        revolusi dari designku.
      </p>
    </div>
  )
}

export default HeroContent
