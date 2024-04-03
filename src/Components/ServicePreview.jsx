import Image from "next/image";

export default function ServicePreview({ title, description, imageUrl, serviceUrl }) {
  return (
    <div className="bg-gray-100 p-2 sm:rounded-lg w-full shadow-md text-right min-h-[450px]">
      <div className="relative overflow-hidden w-full h-[300px] mb-2">
        <Image
          src={imageUrl}
          alt="בית ספר לנהיגה"
          className="object-cover object-center select-none pointer-events-none sm:rounded-lg"
          fill
        />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {/* <a href={serviceUrl} className="text-main-blue">
        קרא עוד
      </a> */}
    </div>
  );
}


 