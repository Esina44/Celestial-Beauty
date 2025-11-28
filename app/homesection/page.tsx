import Image from "next/image";

export default function HomeSection() {
  return (
    <>
      <section>
        <div className="w-full">
          <Image
            src="/assets/homepicture.png"
            alt="home image"
            height={500}
            width={900}
            className="w-full h-auto"
          ></Image>
        </div>
      </section>
    </>
  );
}
