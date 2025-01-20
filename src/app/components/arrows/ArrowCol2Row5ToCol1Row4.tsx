export const ArrowCol2Row5ToCol1Row4 = () => (
  <svg width="200" height="500" style={{ overflow: 'visible' }}>
    <defs>
      <marker
        id="arrowhead-col2-row5-col1-row4"
        markerWidth="10"
        markerHeight="7"
        refX="5"
        refY="3.5"
        orient="auto"
      >
        <polygon points="0 0, 10 3.5, 0 7" fill="black" />
      </marker>
    </defs>
    <path
      d="M 100 400 Q 50 350 0 300"
      stroke="black"
      strokeWidth="2"
      fill="none"
      markerEnd="url(#arrowhead-col2-row5-col1-row4)"
    />
  </svg>
);