import React, { useEffect, useState } from 'react'
import './style.css'
import FAQItem from './FAQItem'

const FAQ = () => {

    const faqs = [

        { id: 1, question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
        { id: 2, question: 'What is Node.js?', answer: 'Node.js is a runtime environment for executing JavaScript on the server.' },
        {
            "question": "What is JavaScript?",
            "answer": "JavaScript is a programming language used for web development."
        },

        {
            "id": 3,
            "question": "What is React?",
            "answer": "React is a JavaScript library for building user interfaces."
        },
        {
            "id": 4,
            "question": "What is Node.js?",
            "answer": "Node.js allows JavaScript to run on the server."
        },
        {
            "id": 5,
            "question": "What is JSX?",
            "answer": "JSX is a syntax extension for JavaScript used with React."
        },
        {
            "id": 6,
            "question": "What is useState in React?",
            "answer": "useState is a React Hook that lets you add state to functional components."
        },
        {
            "id": 7,
            "question": "What is Express.js?",
            "answer": "Express.js is a web framework for Node.js to build APIs and web apps."
        },
        {
            "id": 8,
            "question": "What is MongoDB?",
            "answer": "MongoDB is a NoSQL database that stores data in JSON-like documents."
        },

    ]

    return (
        <div className='container'>
            <h2>FAQ Componenets</h2>
            {faqs.map((faq, index) => (
                <FAQItem faq={faq} index={index} />
            )
            )}
        </div>
    )
}

export default FAQ
