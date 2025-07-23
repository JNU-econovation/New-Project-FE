"use client";

export default function SendMessagePage() {
  const handleSendMessage = () => {
    if (typeof window === "undefined") return;
    window.ReactNativeWebView.postMessage(
      JSON.stringify({ type: "test", payload: "Hello from web!" })
    );
  };

  return <button onClick={handleSendMessage}>앱으로 메시지 보내기</button>;
}

//받기
("use client");

export default function ReceiveMessagePage() {
  const handleReceiveMessage = (event: MessageEvent) => {
    const data = JSON.parse(event.data);
    if (data.type === "test") {
      console.log("Received message from web:", data.payload);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("message", handleReceiveMessage);
  }, []);

  return <div>메시지를 기다리는 중...</div>;
}
