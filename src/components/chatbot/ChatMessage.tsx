
interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}>
      <div className={`max-w-xs px-3 py-2 rounded-lg ${
        message.isBot 
          ? 'bg-gray-100 text-gray-800 rounded-tl-none' 
          : 'bg-blue-600 text-white rounded-tr-none'
      }`}>
        <p className="text-sm leading-relaxed">{message.text}</p>
        <p className={`text-xs mt-1 ${
          message.isBot ? 'text-gray-500' : 'text-blue-100'
        }`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
