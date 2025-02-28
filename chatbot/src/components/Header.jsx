// components/Header.jsx
import Expand from "../Icons/Expand";

const Header = ({ isExpanded, setIsExpanded, hasMessages, onClearChat }) => {
  return (
    <div className="flex items-center justify-between p-3 border-b border-gray-200 rounded-tr-2xl rounded-tl-2xl">
      <div className="flex items-center">
        <img src="/logo_placeholder.jpg" alt="logo" className="w-auto h-6" />
      </div>
      <div className="flex items-center space-x-2">
        {hasMessages && (
          <button
            className="px-2 py-1 text-sm text-red-500 hover:bg-gray-100 rounded-md hover:cursor-pointer"
            onClick={onClearChat}
            title="Clear chat history"
          >
            Clear
          </button>
        )}
        <button
          className="hover:text-gray-600 hover:cursor-pointer hover:bg-zinc-100 p-1"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Expand />
        </button>
      </div>
    </div>
  );
};

export default Header;