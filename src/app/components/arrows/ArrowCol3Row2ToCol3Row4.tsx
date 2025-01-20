export const ArrowCol3Row2ToCol3Row4 = () => (
  <svg width="300" height="400" style={{ overflow: 'visible' }}>
    <defs>
      <marker
        id="arrowhead-col3-row2-col3-row4"
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
      d="M 200 100 Q 240 200 200 300"
      stroke="black"
      strokeWidth="2"
      fill="none"
      markerEnd="url(#arrowhead-col3-row2-col3-row4)"
    />
  </svg>
);
