
interface QuickReplyButtonsProps {
  onReply: (reply: string) => void;
}

const QuickReplyButtons = ({ onReply }: QuickReplyButtonsProps) => {
  const quickReplies = [
    { text: 'Show me Web projects', icon: '🚀' },
    { text: 'I want to talk to a human', icon: '👋' },
    { text: 'How do I start my project?', icon: '✨' }
  ];

  return (
    <div className="space-y-2">
      <p className="text-xs text-gray-500 mb-2">Quick replies:</p>
      {quickReplies.map((reply, index) => (
        <button
          key={index}
          onClick={() => onReply(reply.text)}
          className="w-full text-left px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 border border-gray-200 hover:border-gray-300"
        >
          <span className="text-sm text-gray-700 flex items-center space-x-2">
            <span>{reply.icon}</span>
            <span>{reply.text}</span>
          </span>
        </button>
      ))}
    </div>
  );
};

export default QuickReplyButtons;
