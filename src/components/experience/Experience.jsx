import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import './experience.css';

const experienceData = [
  {
    title: 'AI & Data Science',
    skills: ['Machine Learning (Scikit-learn)', 'Deep Learning (CNN, LSTM)', 'Time-Series Forecasting', 'XGBoost, GridSearchCV', 'Model Evaluation & Tuning'],
  },
  {
    title: 'Generative AI & LLMs',
    skills: ['LangChain, RAG Pipelines', 'Prompt Engineering', 'OpenAI API (GPT-4o)', 'FAISS, Embeddings', 'Semantic Search'],
  },
  {
    title: 'Python & Tools',
    skills: ['Python (OOP, Pandas, NumPy)', 'Flask / Streamlit', 'Jupyter / PyCharm / VS Code', 'SQL (Joins, Subqueries)', 'Git, GitHub'],
  },
  {
    title: 'Cloud & Deployment',
    skills: ['AWS EC2 / S3', 'Flask App Deployment', 'Docker Basics', 'Power BI / Excel', 'Power Query, DAX'],
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Tech Toolbox</h5>
      <h2>Skills & Tools</h2>
      <div className="container experience__container">
        {experienceData.map((section, index) => (
          <motion.div
            key={section.title}
            className="experience__category"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6, type: 'spring' }}
            viewport={{ once: true }}
          >
            <h3>{section.title}</h3>
            <div className="experience__content">
              {section.skills.map((skill) => (
                <article key={skill} className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>{skill}</h4>
                </article>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
