import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import projectDetails from '../data/projectDetails';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Modal from 'react-modal';
import 'bootstrap-icons/font/bootstrap-icons.css';

Modal.setAppElement('#root');

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectDetails.find((project) => project.id === parseInt(id));

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <p>Project not found.</p>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
  };

  const openModal = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <div>
      <nav className="breadcrumb">
        <div className="breadcrumb-left">
          <h1>Project Detail</h1>
        </div>
        <div className="breadcrumb-right">
          <Link to="/">Home</Link> / <span>Project Detail</span>
        </div>
      </nav>
      <div className="project-detail">
        <div className="detail-content">
          <div className="detail-info-container">
            <div className="detail-info-card">
              <h2>Project Information</h2>
              <hr />
              <div className="details">
                <p><strong>Category:</strong> {project.category}</p>
                <p><strong>Client:</strong> {project.client}</p>
                <p><strong>Project Date:</strong> {project.date}</p>
                <p><strong>Sebagai:</strong> {project.sebagai}</p>
              </div>
            </div>
            <br />
            <div className="detail-description">
              <h3>Project Description</h3>
              <div dangerouslySetInnerHTML={{ __html: project.description }} />
            </div>
          </div>
          <div className="project-media">
            {project.images && project.images.length > 0 && (
              <div className="project-slider">
                <Slider {...settings}>
                  {project.images.map((image, index) => (
                    <div key={index} className="project-detail-image-container">
                      <img 
                        src={image} 
                        className="project-detail-image" 
                        alt={`${project.title} screenshot ${index + 1}`} 
                        onClick={() => openModal(image)}
                        style={{ cursor: 'pointer' }}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            )}

            {project.video && (
              <div className="project-video">
                <video controls>
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        </div>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          className="image-modal"
          overlayClassName="image-modal-overlay"
        >
          <div className="modal-content">
            <button onClick={closeModal} className="close-modal-button" aria-label="Close">
              <i className="bi bi-x" style={{ fontSize: '2rem', color: 'white' }}></i>
            </button>
            <div className="modal-slider">
              {project.images && project.images.length > 0 && (
                <Slider {...settings}>
                  {project.images.map((image, index) => (
                    <div key={index} className="modal-image-container">
                      <img src={image} alt={`Enlarged project ${index}`} className="enlarged-image" />
                    </div>
                  ))}
                </Slider>
              )}
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ProjectDetail;