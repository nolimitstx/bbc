export const ArrowCol2Row1ToCol3Row2 = () => (
  <svg width="300" height="200" style={{ overflow: 'visible' }}>
    <defs>
      <marker
        id="arrowhead-col2-row1-col3-row2"
        markerWidth="12"
        markerHeight="12"
        refX="8"
        refY="6"
        orient="auto"
      >
        <polygon
          points="0 0, 12 6, 0 12"
          fill="white"
          stroke="black"
          strokeWidth="1"  // Thinner black outline on arrowhead
        />
      </marker>
    </defs>

    {/* Bottom (black outline) stroke */}
    <path
      d="M 100 0 Q 200 -50 200 100"
      stroke="black"
      strokeWidth="8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Top (white) stroke */}
    <path
      d="M 100 0 Q 200 -50 200 100"
      stroke="white"
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      markerEnd="url(#arrowhead-col2-row1-col3-row2)"
    />
  </svg>
);