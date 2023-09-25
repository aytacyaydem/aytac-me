'use client';
import Typewriter from 'typewriter-effect';
import hljs from 'highlight.js';
import 'highlight.js/styles/night-owl.css';
import { useState } from 'react';

hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));

const Hero = () => {
  const [codeValue, setCodeValue] = useState('');
  return (
    <div className="flex flex-col">
      <pre>
        <code className="block whitespace-pre-wrap overflow-x-auto">
          <div
            className={`javascript px-4 py-4 rounded-md w-full overflow-x-auto ${
              codeValue.length > 0 ? 'shadow-black shadow-lg' : ''
            }`}
            id="otherDiv"
          ></div>
        </code>
      </pre>

      <div className="font-medium text-md" id="code">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay(30)
              .typeString(`const me = {\n`)
              .typeString(
                '&#9;<span style="margin-left:12px;">name: "Aytaç Sinan Yaydem",</span>\n',
              )
              .typeString(
                '&#9;<span style="margin-left:12px;">location: "Istanbul, Turkey",</span>\n',
              )
              .typeString('&#9;<span style="margin-left:12px;">experience: "3+ years"</span>\n')
              .typeString(
                '&#9;<span style="margin-left:12px;">favoriteTools: ["Javascript", "React.js", "Next.js", "Node.js", "React Native", \n"MongoDB", "GraphQL", ...andOtherTools],</span>\n',
              )
              .typeString('}')
              .start();
          }}
          options={{
            onCreateTextNode: (a, b) => {
              let target = document.getElementById('otherDiv') as HTMLElement;
              let otherTarget = document.getElementById('code') as HTMLElement;
              hljs.highlightElement(target as HTMLElement);
              target.innerHTML += a;
              otherTarget.innerHTML = '';
              setCodeValue((prev: string) => prev + a);
              return null;
            },
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
