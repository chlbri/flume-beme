import { NodeEditor } from 'flume';
import { useLayoutEffect, useRef } from 'react';
import config from '../lib/flume';

function About(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    console.log('Dime', ref.current.clientHeight);
  }, []);
  return (
    <div ref={ref} className='flex h-screen items-center justify-center '>
      <div className='w-[80%] h-[65%] '>
        {/* About */}
        <NodeEditor
          portTypes={config.portTypes}
          nodeTypes={config.nodeTypes}
          defaultNodes={[
            {
              type: 'homepage',
              x: 190,
              y: -150,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default About;
