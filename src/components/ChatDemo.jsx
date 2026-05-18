import React, { useState, useEffect, useRef } from 'react';
import { HfInference } from '@huggingface/inference';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import './ChatDemo.css';
import mascotImage from '../assets/profbot-mascot.png';

const ChatDemo = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Salut ! Je suis Profbot 🤖. Quelle notion de maths de 3ème veux-tu réviser aujourd\'hui ?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const fetchHuggingFaceResponse = async (userText) => {
    const apiKey = import.meta.env.VITE_HF_API_KEY;

    if (!apiKey || !apiKey.startsWith("hf_")) {
      return "⚠️ Pour que je puisse te répondre, il faut ajouter ta clé API Hugging Face (VITE_HF_API_KEY) valide dans le fichier .env et redémarrer le serveur local ! (La clé doit commencer par 'hf_')";
    }

    const hf = new HfInference(apiKey);
    const systemPrompt = "Tu es Profbot, un professeur de mathématiques bienveillant, STRICTEMENT et EXCLUSIVEMENT spécialisé dans le programme de la classe de 3ème au collège. RÈGLE ABSOLUE : Si l'utilisateur te pose une question sur une autre matière (français, histoire, etc.) ou sur des mathématiques qui ne sont pas du niveau 3ème (lycée, université, ou primaire), TU DOIS REFUSER de répondre. Dans ce cas, réponds très gentiment et avec douceur que tu es désolé, mais que tu es uniquement spécialisé pour aider les élèves de 3ème en mathématiques, et propose-lui de réviser des notions de son programme (Brevet, Pythagore, etc.). Pour les questions valides, tes réponses doivent être courtes, pédagogiques, encourageantes, utiliser des emojis et toujours en français. IMPORTANT : Utilise systématiquement la syntaxe LaTeX (encadrée par des symboles $ pour en ligne, ou $$ pour un bloc isolé) pour écrire toutes tes formules mathématiques afin qu'elles soient belles à lire.";

    try {
      const response = await hf.chatCompletion({
        model: 'Qwen/Qwen2.5-72B-Instruct',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userText }
        ],
        max_tokens: 250,
        temperature: 0.7
      });

      return response.choices[0].message.content.trim() || "Je n'ai pas pu générer de réponse, essaie de reformuler !";

    } catch (error) {
      console.error("Erreur HF SDK:", error);
      if (error.message.includes("loading")) {
        return "⏳ Mon cerveau est en train de démarrer (ça peut prendre environ 20 secondes la première fois). Merci de patienter un instant et de reposer ta question !";
      }
      if (error.message.includes("401") || error.message.includes("Unauthorized") || error.message.includes("Invalid credentials")) {
        return "❌ Clé API invalide. Vérifiez que vous avez bien copié votre token Hugging Face avec les droits 'Read'.";
      }
      //return `Oups ! Problème rencontré : ${error.message}.`;
      return `Oups ! Problème rencontré.`;
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: inputValue
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Appel à la véritable API Hugging Face
    const botResponseText = await fetchHuggingFaceResponse(userMessage.text);

    setMessages(prev => [
      ...prev,
      {
        id: prev.length + 1,
        sender: 'bot',
        text: botResponseText
      }
    ]);
    setIsTyping(false);
  };

  return (
    <section className="chat-demo-section" id="demo">
      <div className="chat-demo-header animate-fade-in-up">
        <h2>Découvre l'<span className="highlight">Interface du Bot</span> en action</h2>
        <p>Pose une question de maths, ton prof va te répondre !</p>
      </div>

      <div className="chat-container glass-panel animate-fade-in-up delay-100">
        <div className="chat-header">
          <div className="chat-bot-info">
            <img src={mascotImage} alt="Profbot" className="chat-avatar" />
            <div>
              <h3>Profbot (IA)</h3>
              <span className="status"><span className="status-dot"></span> Ton gentit prof de mathématique 3ème</span>
            </div>
          </div>
          <div className="chat-actions">
            <button className="icon-btn">⋮</button>
          </div>
        </div>

        <div className="chat-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message-wrapper ${msg.sender}`}>
              {msg.sender === 'bot' && <img src={mascotImage} alt="Profbot" className="message-avatar" />}
              <div className="message-bubble markdown-content">
                <ReactMarkdown
                  remarkPlugins={[remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                >
                  {msg.text}
                </ReactMarkdown>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="message-wrapper bot">
              <img src={mascotImage} alt="Profbot" className="message-avatar" />
              <div className="message-bubble typing-indicator">
                <span></span><span></span><span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="chat-input-area" onSubmit={handleSend}>
          <input
            type="text"
            placeholder="Pose ta question... (ex: Explique moi Pythagore)"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isTyping}
          />
          <button type="submit" className="send-btn" disabled={!inputValue.trim() || isTyping}>
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default ChatDemo;
