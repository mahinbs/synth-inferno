
import { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import ChatMessage from './ChatMessage';
import QuickReplyButtons from './QuickReplyButtons';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface FloatingChatbotProps {
  onShowWebProjects?: () => void;
  onContactHuman?: () => void;
}

const FloatingChatbot = ({ onShowWebProjects, onContactHuman }: FloatingChatbotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [isVisible, setIsVisible] = useState(true); // Force visible for testing

  // Show chatbot after 1 second or on scroll (reduced for testing)
  useEffect(() => {
    console.log('FloatingChatbot - Component mounted');
    
    // Temporarily force immediate visibility for testing
    setIsVisible(true);
    console.log('FloatingChatbot - Forced visible for testing');
    
    const timer = setTimeout(() => {
      setIsVisible(true);
      console.log('FloatingChatbot - Timer triggered, setting visible');
    }, 1000); // Reduced to 1 second
    
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
        console.log('FloatingChatbot - Scroll triggered, setting visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Initialize with welcome message when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: '1',
        text: "Hi there! Need help choosing a project or service? I'm here to assist you! 👋",
        isBot: true,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
      console.log('FloatingChatbot - Welcome message added');
    }
  }, [isOpen, messages.length]);

  const handleQuickReply = (reply: string) => {
    console.log('FloatingChatbot - Quick reply selected:', reply);
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: reply,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setShowQuickReplies(false);

    // Add bot response after short delay
    setTimeout(() => {
      let botResponse = '';
      
      switch (reply) {
        case 'Show me Web projects':
          botResponse = "Great choice! I'll show you our web development projects. You can see our web applications, SaaS solutions, and more below. 🚀";
          if (onShowWebProjects) {
            setTimeout(() => onShowWebProjects(), 1000);
          }
          break;
        case 'I want to talk to a human':
          botResponse = "I'd love to connect you with our team! You can reach us through the contact form below or email us directly. We typically respond within 2-4 hours. 📧";
          if (onContactHuman) {
            setTimeout(() => onContactHuman(), 1000);
          }
          break;
        case 'How do I start my project?':
          botResponse = "Starting your project is easy! Here's our simple process: 1️⃣ Tell us about your idea 2️⃣ We provide a free consultation 3️⃣ Get your custom proposal 4️⃣ Start building! Ready to begin?";
          break;
        default:
          botResponse = "Thanks for your message! How else can I help you today?";
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setShowQuickReplies(true);
    }, 800);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    console.log('FloatingChatbot - Chat toggled, isOpen:', !isOpen);
  };

  console.log('FloatingChatbot - Rendering, isVisible:', isVisible, 'isOpen:', isOpen);

  if (!isVisible) {
    console.log('FloatingChatbot - Not visible, returning null');
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999]" style={{ zIndex: 9999 }}>
      {/* Chat Modal */}
      {isOpen && (
        <div className="mb-4 w-80 h-96 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 flex flex-col overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-3 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Chat Support</h4>
                  <p className="text-xs text-gray-500">We're here to help!</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </div>

          {/* Quick Replies */}
          {showQuickReplies && (
            <div className="border-t border-gray-100 p-3">
              <QuickReplyButtons onReply={handleQuickReply} />
            </div>
          )}
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
        style={{ zIndex: 9999 }}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
        )}
      </button>

      {/* Notification Dot */}
      {!isOpen && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      )}
    </div>
  );
};

export default FloatingChatbot;
