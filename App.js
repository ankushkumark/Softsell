import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUpload, FaDollarSign, FaLock, FaClock, FaStar, FaRocket, FaComments } from 'react-icons/fa';

function App() {
  const [showChat, setShowChat] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I help you with selling your license?' }
  ]);

  const handleSend = () => {
    if (!userInput.trim()) return;
    const newMessages = [...messages, { sender: 'user', text: userInput }];
    let botReply = 'Sorry, I do not have an answer for that.';

    if (userInput.toLowerCase().includes('sell')) {
      botReply = "To sell your license, upload it and we'll handle the rest!";
    } else if (userInput.toLowerCase().includes('payment')) {
      botReply = 'Payments are made within 24 hours of approval.';
    } else if (userInput.toLowerCase().includes('safe') || userInput.toLowerCase().includes('secure')) {
      botReply = 'Yes, all transactions and data are fully secured.';
    }

    newMessages.push({ sender: 'bot', text: botReply });
    setMessages(newMessages);
    setUserInput('');
  };

  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <section className="bg-primary text-white text-center p-5">
        <h1 className="display-4">Sell Your Unused Software Licenses</h1>
        <p className="lead">Turn your unused software into cash instantly!</p>
        <button className="btn btn-light mt-3">Get a Quote</button>
      </section>

      {/* How It Works */}
      <section className="text-center p-5">
        <h2>How It Works</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <FaUpload size={50} className="mb-3" />
            <h5>Upload License</h5>
          </div>
          <div className="col-md-4">
            <FaStar size={50} className="mb-3" />
            <h5>Get Valuation</h5>
          </div>
          <div className="col-md-4">
            <FaDollarSign size={50} className="mb-3" />
            <h5>Get Paid</h5>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-light text-center p-5">
        <h2>Why Choose Us</h2>
        <div className="row mt-4">
          <div className="col-md-3">
            <FaStar size={40} className="mb-2" />
            <h5>Instant Valuation</h5>
            <p>Get accurate value instantly for your license.</p>
          </div>
          <div className="col-md-3">
            <FaLock size={40} className="mb-2" />
            <h5>Secure Process</h5>
            <p>Your data and transactions are completely safe.</p>
          </div>
          <div className="col-md-3">
            <FaRocket size={40} className="mb-2" />
            <h5>Trusted by Many</h5>
            <p>Thousands of happy users worldwide.</p>
          </div>
          <div className="col-md-3">
            <FaClock size={40} className="mb-2" />
            <h5>Fast Payments</h5>
            <p>Get paid within 24 hours after approval.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="text-center p-5">
        <h2>What Our Customers Say</h2>
        <div className="row mt-4">
          <div className="col-md-6">
            <blockquote className="blockquote">
              <p className="mb-0">"SoftSell helped me make money from my unused licenses effortlessly."</p>
              <footer className="blockquote-footer">Rahul Mehta, IT Manager, TechCorp</footer>
            </blockquote>
          </div>
          <div className="col-md-6">
            <blockquote className="blockquote">
              <p className="mb-0">"Very smooth experience. Got paid the next day!"</p>
              <footer className="blockquote-footer">Sneha Sharma, Freelancer</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-dark text-white p-5">
        <h2 className="text-center">Contact Us</h2>
        <form className="w-75 mx-auto mt-4">
          <div className="form-group mb-3">
            <label>Name</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="form-group mb-3">
            <label>Email</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="form-group mb-3">
            <label>Company</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="form-group mb-3">
            <label>License Type</label>
            <select className="form-control" required>
              <option value="">Select Type</option>
              <option>Windows</option>
              <option>Office</option>
              <option>Antivirus</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <label>Message</label>
            <textarea className="form-control" rows="3" required></textarea>
          </div>
          <button type="submit" className="btn btn-light">Submit</button>
        </form>
      </section>

      {/* Chat Button */}
      <button onClick={() => setShowChat(!showChat)} className="btn btn-primary position-fixed bottom-0 end-0 m-3 rounded-circle shadow" style={{ zIndex: 1000 }}>
        <FaComments size={24} />
      </button>

      {/* Chat Widget */}
      {showChat && (
        <div className="position-fixed bottom-0 end-0 m-3 p-3 bg-white border rounded shadow" style={{ width: '300px', zIndex: 1000 }}>
          <div className="chat-box" style={{ maxHeight: '300px', overflowY: 'auto' }}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`mb-2 ${msg.sender === 'bot' ? 'text-start' : 'text-end'}`}> <strong>{msg.sender === 'bot' ? 'Bot' : 'You'}:</strong> {msg.text} </div>
            ))}
          </div>
          <div className="input-group mt-2">
            <input
              type="text"
              className="form-control"
              placeholder="Ask something..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className="btn btn-primary" onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
