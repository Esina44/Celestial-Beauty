import Image from "next/image";

export default function HomeSection() {
  return (
    <>
      <section>
        <div>
          <Image src="/home.png" alt="image" width={200} height={200}></Image>
        </div>
      </section>
    </>
  );
}
