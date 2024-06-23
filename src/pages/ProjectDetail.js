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
    <div className="project-detail-page-new">
      <nav className="breadcrumb-new">
        <div className="breadcrumb-left-new">
          <h1>Project Detail</h1>
        </div>
        <div className="breadcrumb-right-new">
          <Link to="/">Home</Link> / <span>{project.title}</span>
        </div>
      </nav>
      <div className="project-detail-new">
        <div className="detail-content-new">
          <div className="detail-info-container-new">
            <div className="detail-info-card-new">
              <h2>Project Information</h2>
              <hr />
              <div className="details-new">
                <p><strong>Category:</strong> {project.category}</p>
                <p><strong>Client:</strong> {project.client}</p>
                <p><strong>Project Date:</strong> {project.date}</p>
                <p><strong>Sebagai:</strong> {project.sebagai}</p>
              </div>
            </div>
            <br />
            <h3>Project Description</h3>
            <p dangerouslySetInnerHTML={{ __html: project.description }} />
          </div>
          <div className="project-media-new">
            {project.images && project.images.length > 0 && (
              <div className="project-slider-new">
                <Slider {...settings}>
                  {project.images.map((image, index) => (
                    <div key={index} className="project-detail-image-container-new">
                      <img 
                        src={image} 
                        className="project-detail-image-new" 
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
              <div className="project-video-new">
                <div className="video-container">
                  <iframe 
                    src={project.video} 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    title="Project Video"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          className="image-modal-new"
          overlayClassName="image-modal-overlay-new"
        >
          <div className="modal-content-new">
            <button onClick={closeModal} className="close-modal-button-new" aria-label="Close">
              <i className="bi bi-x" style={{ fontSize: '2rem', color: 'white' }}></i>
            </button>
            <div className="modal-slider-new">
              {project.images && project.images.length > 0 && (
                <Slider {...settings}>
                  {project.images.map((image, index) => (
                    <div key={index} className="modal-image-container-new">
                      <img src={image} alt={`Enlarged project ${index}`} className="enlarged-image-new" />
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