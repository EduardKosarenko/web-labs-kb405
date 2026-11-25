import { useEffect, useState } from 'react';

const inputClass =
  'w-full mt-1 mb-3 p-2 rounded border border-stone-400 dark:border-stone-600 dark:bg-stone-900';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 60000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div
            role="dialog"
            aria-modal="true"
            className="w-full max-w-md bg-white dark:bg-stone-800 p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-serif font-bold mb-3">Зворотний зв'язок</h2>
            <form action="https://formspree.io/f/YOUR_ENDPOINT" method="POST">
              <label>
                Ім'я
                <input type="text" name="name" required className={inputClass} />
              </label>
              <label>
                Email
                <input type="email" name="email" required className={inputClass} />
              </label>
              <label>
                Номер телефону
                <input type="tel" name="phone" className={inputClass} />
              </label>
              <label>
                Повідомлення
                <textarea name="message" rows="4" required className={inputClass} />
              </label>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-emerald-700 text-white hover:bg-emerald-800 cursor-pointer"
                >
                  Надіслати
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded border border-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700 cursor-pointer"
                >
                  Закрити
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;
