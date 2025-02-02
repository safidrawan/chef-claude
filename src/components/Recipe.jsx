import ReactMarkdown from "react-markdown"
export default function Recipe(props) {
  function removeThinkSection(response) {
    return response.replace(/<think>[\s\S]*?<\/think>/g, '').trim();
  }

  const AIrecipe = removeThinkSection(props.recipe)
  return (
    <section>
      <ReactMarkdown>
     {AIrecipe}

      </ReactMarkdown>
    </section>
  );
}
