export const ArrowCol3Row4ToCol2Row5 = () => (
  <svg width="300" height="500" style={{ overflow: 'visible' }}>
    <defs>
      <marker
        id="arrowhead-col3-row4-col2-row5"
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
      d="M 200 300 Q 150 350 100 400"
      stroke="black"
      strokeWidth="2"
      fill="none"
      markerEnd="url(#arrowhead-col3-row4-col2-row5)"
    />
  </svg>
);