"use client";

import { useState, useRef, useEffect } from "react";
import {
  Send,
  X,
  Search,
  Image,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react";
import CustomButton from "@/components/common/CustomButton";
import { Input } from "@/components/ui/input";

interface ChatMessage {
  id: string;
  sender: "user" | "other";
  text: string;
  image?: string;
  images?: string[];
  timestamp: Date;
  senderName: string;
  senderAvatar: string;
}

interface ChatUser {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  isOnline: boolean;
  unreadCount?: number;
}

const mockUsers: ChatUser[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    lastMessage: "See you next week",
    timestamp: "2:30 PM",
    isOnline: true,
    unreadCount: 0,
  },
  {
    id: "2",
    name: "Dr. Michael Brown",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    lastMessage: "Your prescription is ready",
    timestamp: "1:15 PM",
    isOnline: true,
    unreadCount: 3,
  },
  {
    id: "3",
    name: "Clinic Support",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Support",
    lastMessage: "We received your inquiry",
    timestamp: "12:00 PM",
    isOnline: false,
    unreadCount: 1,
  },
  {
    id: "4",
    name: "Dr. Emily Davis",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    lastMessage: "Please update medical history",
    timestamp: "Yesterday",
    isOnline: false,
    unreadCount: 5,
  },
];

const mockMessages: ChatMessage[] = [
  {
    id: "1",
    sender: "other",
    text: "Hello! How are you feeling today?",
    timestamp: new Date(Date.now() - 300000),
    senderName: "Dr. Sarah Johnson",
    senderAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    id: "2",
    sender: "user",
    text: "I'm doing well, thanks for asking!",
    timestamp: new Date(Date.now() - 240000),
    senderName: "You",
    senderAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=User",
  },
  {
    id: "3",
    sender: "other",
    text: "I wanted to check on your recent test results",
    timestamp: new Date(Date.now() - 180000),
    senderName: "Dr. Sarah Johnson",
    senderAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    id: "4",
    sender: "user",
    image: "https://picsum.photos/400/300?random=1",
    text: "Here are my test results",
    timestamp: new Date(Date.now() - 120000),
    senderName: "You",
    senderAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=User",
  },
];

export default function Message() {
  const [selectedUser, setSelectedUser] = useState<ChatUser>(mockUsers[0]);
  const [messages, setMessages] = useState<ChatMessage[]>(mockMessages);
  const [messageText, setMessageText] = useState("");
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState<ChatUser[]>(mockUsers);
  const [viewingImage, setViewingImage] = useState<string | null>(null);
  const [viewingImages, setViewingImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleUserSelect = (user: ChatUser) => {
    setSelectedUser(user);
    // Clear unread count when user is selected
    setUsers((prevUsers) =>
      prevUsers.map((u) => (u.id === user.id ? { ...u, unreadCount: 0 } : u)),
    ); // Close mobile menu after selection
    setIsMobileMenuOpen(false);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      const newImages: string[] = [];

      fileArray.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newImages.push(reader.result as string);
          if (newImages.length === fileArray.length) {
            setSelectedImages((prev) => [...prev, ...newImages]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
    // Reset input to allow selecting the same files again
    event.target.value = "";
  };

  const handleRemoveImage = (index: number) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleImageClick = (imageUrl: string, allImages?: string[]) => {
    if (allImages && allImages.length > 1) {
      setViewingImages(allImages);
      setCurrentImageIndex(allImages.indexOf(imageUrl));
    } else {
      setViewingImages([imageUrl]);
      setCurrentImageIndex(0);
    }
    setViewingImage(imageUrl);
    setZoomLevel(1);
  };

  const handleCloseViewer = () => {
    setViewingImage(null);
    setViewingImages([]);
    setZoomLevel(1);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      // Scroll up - zoom in
      setZoomLevel((prev) => Math.min(prev + 0.25, 3));
    } else {
      // Scroll down - zoom out
      setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
    }
  };

  const handlePrevImage = () => {
    if (viewingImages.length > 1) {
      const newIndex =
        (currentImageIndex - 1 + viewingImages.length) % viewingImages.length;
      setCurrentImageIndex(newIndex);
      setViewingImage(viewingImages[newIndex]);
      setZoomLevel(1);
    }
  };

  const handleNextImage = () => {
    if (viewingImages.length > 1) {
      const newIndex = (currentImageIndex + 1) % viewingImages.length;
      setCurrentImageIndex(newIndex);
      setViewingImage(viewingImages[newIndex]);
      setZoomLevel(1);
    }
  };

  const handleSendMessage = () => {
    if (!messageText.trim() && selectedImages.length === 0) return;

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: messageText,
      images: selectedImages.length > 0 ? selectedImages : undefined,
      timestamp: new Date(),
      senderName: "You",
      senderAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=User",
    };

    setMessages([...messages, newMessage]);
    setMessageText("");
    setSelectedImages([]);

    // Simulate response
    setTimeout(() => {
      const response: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "other",
        text: "Thanks for your message! I'll get back to you soon.",
        timestamp: new Date(),
        senderName: selectedUser.name,
        senderAvatar: selectedUser.avatar,
      };
      setMessages((prev) => [...prev, response]);
    }, 1000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="flex h-[calc(100vh-130px)] gap-4 rounded-lg relative">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Users List */}
      <div
        className={`w-80 bg-white flex flex-col fixed lg:relative inset-y-0 left-0 z-50 lg:z-auto h-full transform transition-transform duration-300 lg:transform-none ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Mobile Header with Close Button */}
        <div className="lg:hidden p-4 border-b flex items-center justify-between">
          <h2 className="font-semibold text-lg">Messages</h2>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 hover:bg-gray-200 rounded-lg transition"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative w-full sm:max-w-sm mb-4 px-4 pt-4 lg:pt-0 lg:px-0">
          <Search className="absolute left-7 lg:left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 rounded-full bg-gray-50"
          />
        </div>
        <div className="flex-1 overflow-y-auto">
          {users.map((user) => (
            <button
              key={user.id}
              onClick={() => handleUserSelect(user)}
              className={`w-full px-4 py-3 flex items-center gap-3 border-b transition hover:bg-gray-50 ${
                selectedUser.id === user.id
                  ? "bg-primary/10 border-l-4 border-l-primary"
                  : ""
              }`}
            >
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full"
                />
                {user.isOnline && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                )}
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium text-sm">{user.name}</p>
                <p className="text-xs text-gray-500 truncate">
                  {user.lastMessage}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-xs text-gray-400">{user.timestamp}</span>
                {user.unreadCount && user.unreadCount > 0 ? (
                  <span className="bg-primary text-white text-xs font-semibold rounded-full h-5 min-w-5 px-1.5 flex items-center justify-center">
                    {user.unreadCount > 99 ? "99+" : user.unreadCount}
                  </span>
                ) : null}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 rounded-lg bg-gray-50 flex flex-col w-full lg:w-auto">
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 hover:bg-gray-200 rounded-lg transition"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <img
              src={selectedUser.avatar}
              alt={selectedUser.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">{selectedUser.name}</p>
              <p className="text-xs text-gray-500">
                {selectedUser.isOnline ? "Online" : "Offline"}
              </p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`flex gap-2 max-w-[calc(100vw-6rem)] sm:max-w-xs lg:max-w-md ${
                  msg.sender === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <img
                  src={msg.senderAvatar}
                  alt={msg.senderName}
                  className="w-8 h-8 rounded-full shrink-0"
                />
                <div
                  className={`${
                    msg.sender === "user"
                      ? "bg-primary text-white rounded-xl rounded-tr-none"
                      : "bg-gray-200 text-gray-900 rounded-xl rounded-tl-none"
                  } px-4 py-2`}
                >
                  {msg.image && (
                    <img
                      src={msg.image}
                      alt="Shared"
                      className="rounded-lg mb-2 w-full max-w-60 sm:max-w-xs max-h-64 object-cover cursor-pointer hover:opacity-90 transition"
                      onClick={() => handleImageClick(msg.image!)}
                    />
                  )}
                  {msg.images && msg.images.length > 0 && (
                    <div
                      className={`grid gap-2 mb-2 ${
                        msg.images.length === 1
                          ? "grid-cols-1"
                          : msg.images.length === 2
                            ? "grid-cols-2"
                            : "grid-cols-2"
                      }`}
                    >
                      {msg.images.map((imgUrl, idx) => (
                        <img
                          key={idx}
                          src={imgUrl}
                          alt={`Shared ${idx + 1}`}
                          className="rounded-lg w-full h-24 sm:h-32 object-cover cursor-pointer hover:opacity-90 transition"
                          onClick={() => handleImageClick(imgUrl, msg.images)}
                        />
                      ))}
                    </div>
                  )}
                  {msg.text && <p className="text-sm">{msg.text}</p>}
                  <p
                    className={`text-xs mt-1 ${
                      msg.sender === "user" ? "text-white/70" : "text-gray-500"
                    }`}
                  >
                    {formatTime(msg.timestamp)}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t space-y-3">
          {selectedImages.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {selectedImages.map((img, index) => (
                <div key={index} className="relative inline-block">
                  <img
                    src={img}
                    alt={`Preview ${index + 1}`}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <button
                    onClick={() => handleRemoveImage(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
          <div className="flex gap-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="p-2 bg-gray-200 hover:bg-gray-100 w-12 h-12 rounded-full transition flex items-center justify-center"
              aria-label="Attach image"
            >
              {/* <Paperclip className="w-5 h-5 text-gray-600" /> */}
              <Image className="w-6 h-6 text-gray-600" />
            </button>
            <Input
              type="text"
              placeholder="Type your message..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
              className="flex-1 rounded-full border-gray-300"
            />
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageSelect}
              className="hidden"
            />
            <CustomButton
              onClick={handleSendMessage}
              size="sm"
              className="w-20 h-12 rounded-full"
            >
              <Send className="w-5! h-5!" />
            </CustomButton>
          </div>
        </div>
      </div>

      {/* Image Lightbox Viewer */}
      {viewingImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center backdrop-blur-sm"
          onClick={handleCloseViewer}
        >
          <button
            onClick={handleCloseViewer}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition z-10"
            aria-label="Close viewer"
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="relative max-w-7xl max-h-screen p-8 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            onWheel={handleWheel}
          >
            <img
              src={
                viewingImages.length > 0
                  ? viewingImages[currentImageIndex]
                  : viewingImage
              }
              alt="Full view"
              className="max-w-full max-h-[90vh] object-contain transition-transform duration-200"
              style={{ transform: `scale(${zoomLevel})` }}
            />

            {/* Navigation Controls - Only show if multiple images */}
            {viewingImages.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/90 rounded-full px-4 py-2 shadow-lg">
                  <span className="text-sm font-medium">
                    {currentImageIndex + 1} / {viewingImages.length}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
