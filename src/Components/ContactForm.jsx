import { useState } from 'react';
import { sendEmail } from "@/utils/helpers";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    tel: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await sendEmail(formData);
    setFormData({
      name: '',
      tel: '',
    })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full max-w-[500px] py-8 px-2 ">
      <div>
        <label htmlFor="name" className="block pb-1 text-sm font-medium text-gray-700">שם</label>
        <input required type="text" name="name" id="name" className="py-1 block w-full rounded-md border-gray-300 shadow-sm" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="tel" className="block pb-1 text-sm font-medium text-gray-700">טלפון</label>
        <input required type="tel" name="tel" id="tel" className="py-1 block w-full rounded-md border-gray-300 shadow-sm" value={formData.tel} onChange={handleChange} />
      </div>

      <button type="submit" className="w-full mt-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-main-blue focus:outline-none">
        שלח
      </button>

    </form>
  );
}
