import React from 'react';
import { useNavigate } from 'react-router-dom';

const articles = [
  { id: 1, date: '10 Mei 2024', title: 'Behind the Success: The Power of a Great Team', image: '/img/article 1.jpg', text: 'Di balik kesuksesan sebuah proyek yang luar biasa, terdapat sebuah tim yang luar biasa pula...' },
  { id: 2, date: '18 Mei 2024', title: 'Memahami Artificial Intelligence (AI): Teknologi Cerdas yang Mengubah Dunia', image: '/img/article 2.png' },
  { id: 3, date: '2 Juni 2024', title: 'Mengoptimalkan Kinerja Perangkat Lunak dengan Pemrograman Berbasis AI', image: '/img/article 5.png' },
  { id: 4, date: '7 Juni 2024', title: 'From Zero to Hero: Panduan Video Editing secara Otodidak', image: '/img/article 4.jpg' },
  { id: 5, date: '15 Juni 2024', title: 'Membangun Karir di Bidang E-commerce: Peluang Menjanjikan di Era Digital', image: '/img/article 3.jpg' },
  { id: 6, date: '17 Juni 2024', title: 'Perkembangan Software Editing Video: Apa yang Baru di Adobe Premiere Pro 2024?', image: '/img/article 6.png' },
];

const Articles = () => {
  const navigate = useNavigate();

  const handleArticleClick = (id) => {
    navigate(`/article/${id}`);
  };

  return (
    <section id="articles" className="articles-section py-10 bg-white w-full">
      <div className="w-full px-4">
      <h2 className="text-3xl font-bold mb-7 relative after:content-[''] after:w-12 after:h-[3px] after:bg-blue-500 after:absolute after:left-0 after:-bottom-3">Articles</h2>
          <p className="text-base mb-10 text-gray-500">Berikut ini adalah kumpulan tulisan yang dirancang untuk memberikan informasi terkini dan relevan, serta menggali topik-topik penting yang dapat membantu memahami perkembangan terbaru. Bacalah dan temukan berbagai pandangan yang dapat memperkaya pengetahuan serta memperluas perspektif.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className={`article-box ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''} w-full`}
              onClick={() => handleArticleClick(article.id)}
            >
              <div className="aspect-ratio-box w-full">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
              </div>
              <div className="article-content p-4 w-full">
                <p className="article-date text-gray-500">{article.date}</p>
                <h2 className="article-title text-2xl font-bold mb-2">{article.title}</h2>
                {index === 0 && <p className="article-text mb-4">{article.text}</p>}
                {index === 0 && <a href="#" className="read-more text-blue-500">Read More</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
