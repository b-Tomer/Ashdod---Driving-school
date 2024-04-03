import Image from 'next/image';

export default function TestimonialCard({ imageUrl, name, text }) {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 m-4">
      <div className="flex justify-center items-center">
        <Image
          src={imageUrl}
          alt={name}
          width={120}
          height={120}
          className="rounded-full"
        />
      </div>
      <div className="text-center mt-4">
        <p className="font-bold">{name}</p>
        <blockquote className="mt-2 text-gray-600">
          &ldquo;{text}&rdquo;
        </blockquote>
      </div>
    </div>
  );
}

