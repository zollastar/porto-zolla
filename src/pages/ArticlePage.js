import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import articleDetails from '../data/articleDetails';

const ArticlePage = () => {
    const { id } = useParams();
    const article = articleDetails.find(article => article.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!article) {
        return <p>Article not found.</p>;
    }

    return (
        <div className="article-page-new">
            <nav className="breadcrumb-new">
                <div className="breadcrumb-left-new">
                    <h1>Article</h1>
                </div>
                <div className="breadcrumb-right-new">
                    <Link to="/">Home</Link> / <span>{article.title}</span>
                </div>
            </nav>
            <div className="article-container-new">
                <h1 className="article-title-new">{article.title}</h1>
                <p className="article-meta-new">Posted on {article.date}, by Zolla Perdana Putra Harahap</p>
                <img src={article.image} alt={article.title} className="article-image-new" />
                <div 
                    className="article-content-new" 
                    dangerouslySetInnerHTML={{ __html: article.content }} 
                />
            </div>
        </div>
    );
};

export default ArticlePage;