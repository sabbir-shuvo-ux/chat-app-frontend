import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = ({ user }) => {
  const productId = import.meta.env.VITE_PRODUCT_ID;
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId={productId}
        username={user.username}
        secret={user.secret}
        height="100%"
      />
    </div>
  );
};

export default ChatsPage;
