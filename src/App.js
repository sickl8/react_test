import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import './App.css';
import MDEditor from '@uiw/react-md-editor';
import React, { useState } from 'react';


var md = `
\`\`\`js
var str = "idk"
console.log(str)
\`\`\`
`

function App() {
	const [value, setValue] = useState("**Hello world!!!**");
	return (
		<div className="App">
			<ReactMarkdown className="content"
				components={{
					code({ node, inline, className, children, ...props }) {
						const match = /language-(\w+)/.exec(className || '')
						if ((!inline && match) === false) {
							return <code className={className} {...props}>
								{children}
							</code>
						}
						return !inline && match ?
							(
								<SyntaxHighlighter children={String(children).replace(/\n$/, '')} PreTag="pre" language={match[1]} {...props} />
							)
							: (<pre><code className={className} {...props}>
								{children}
							</code></pre>)
					}
				}}
			>{md}</ReactMarkdown>
			<MDEditor
				value={value}
				onChange={setValue}
			/>
		</div>
	);
}

export default App;
