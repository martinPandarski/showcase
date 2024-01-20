import { useEffect } from "react";
import Prism from "prismjs";

const Comments = ({ code }: { code: string }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <pre>
      <code className="language-javascript code">{code}</code>
    </pre>
  );
};

export default Comments;
