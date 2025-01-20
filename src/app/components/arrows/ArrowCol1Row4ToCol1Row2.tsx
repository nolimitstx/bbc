export const ArrowCol1Row4ToCol1Row2 = () => (
  <svg width="100" height="400" style={{ overflow: 'visible' }}>
    <defs>
      <marker
        id="arrowhead-col1-row4-col1-row2"
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
      d="M 0 300 Q -40 200 0 100"
      stroke="black"
      strokeWidth="2"
      fill="none"
      markerEnd="url(#arrowhead-col1-row4-col1-row2)"
    />
  </svg>
);