export const ArrowCol1Row2ToCol2Row1 = () => (
  <svg width="200" height="200" style={{ overflow: 'visible' }}>
    <defs>
      <marker
        id="arrowhead-col1-row2-col2-row1"
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
      d="M 0 100 Q 50 50 100 0"
      stroke="black"
      strokeWidth="2"
      fill="none"
      markerEnd="url(#arrowhead-col1-row2-col2-row1)"
    />
  </svg>
);