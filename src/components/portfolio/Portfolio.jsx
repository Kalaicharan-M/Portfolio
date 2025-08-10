import "./portfolio.css";
import React from "react";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Legal Chatbot (IPC Query Assistant)",
      img: "https://github.com/Kalaicharan-M/LEGAL-CHATBOT-AI-Powered-IPC-Query-System-/raw/main/project%20images/Screenshot%202025-08-09%20161651.png",
      description: "AI-powered chatbot for answering Indian Penal Code (IPC) queries using FAISS vector search and hybrid LLM integration (LM Studio/OpenAI).",
      technologies: "FAISS | LangChain | Flask | OpenAI | LM Studio | Python",
      link: "https://github.com/Kalaicharan-M/LEGAL-CHATBOT-AI-Powered-IPC-Query-System-",
      github: "https://github.com/Kalaicharan-M/LEGAL-CHATBOT-AI-Powered-IPC-Query-System-"
    },
    {
      id: 2,
      title: "Demand Forecasting",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQge9keRs9U-AMEitW2rK-WsaMNiQAcX8PNog&s",
      description: "XGBoost time-series model with lag features and Fourier transforms, reducing forecast error by 22%.",
      technologies: "XGBoost | Pandas | Scikit-learn | GridSearchCV",
      link: "https://github.com/Kalaicharan-M/Demand-Forecasting",
      github: "https://github.com/Kalaicharan-M/Demand-Forecasting",
    },
    { 
      id: 3,
      title: "Phishing Detection & Classification",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrOFKZAfuWTaaJ_euDtO0uE2WqTbYsuCON8w&s",
      description: "Achieved 92% accuracy using CNN-LSTM, dropout, and ROC curve optimization.",
      technologies: "CNN | LSTM | TensorFlow | Keras | Python",
      link: "https://github.com/Kalaicharan-M/-Phishing-Detection-and-Classification",
      github: "https://github.com/Kalaicharan-M/-Phishing-Detection-and-Classification",
    },
    {
      id: 4,
      title: "HR Analytics Dashboard",
      img: "https://www.shutterstock.com/image-photo/accurate-forecasting-helps-us-plan-600nw-2362335857.jpg",
      description: "Interactive Power BI dashboard with slicers and DAX, reducing attrition by 18%.",
      technologies: "Power BI | DAX | Excel | Power Query",
      link: "https://github.com/Kalaicharan-M/HR-Analytics-Dashboard-for-Employee-Attrition",
      github: "https://github.com/Kalaicharan-M/HR-Analytics-Dashboard-for-Employee-Attrition",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
