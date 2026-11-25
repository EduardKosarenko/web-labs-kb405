import { useEffect, useState } from 'react';

const VARIANT = 11;

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('статус ' + response.status);
        }
        return response.json();
      })
      .then((data) => setReviews(data))
      .catch((err) => {
        console.error(err);
        setError('Не вдалося завантажити коментарі');
      });
  }, []);

  return (
    <section id="reviews" className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow md:col-span-3">
      <h2 className="text-2xl font-serif font-bold">Коментарі роботодавців</h2>
      <p className="text-sm text-stone-500 dark:text-stone-400 mb-3">Тестові дані з JSONPlaceholder</p>
      {error && <p>{error}</p>}
      <div className="grid gap-4 md:grid-cols-2">
        {reviews.map((review) => (
          <article
            key={review.id}
            className="p-4 rounded-lg border-2 border-stone-200 dark:border-stone-600 wrap-anywhere"
          >
            <h3 className="font-semibold">{review.name}</h3>
            <p className="text-sm text-stone-500 dark:text-stone-400 mb-2">{review.email}</p>
            <p>{review.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
