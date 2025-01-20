const CurvedArrowheadMarker = ({ markerId }: { markerId: string }) => (
  <defs>
    <marker
      id={markerId}
      markerWidth="8"
      markerHeight="8"
      refX="7"
      refY="4"
      orient="auto"
    >
      <polygon
        points="0,0 8,4 0,8"
        fill="white"
        stroke="black"
        strokeWidth="0.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </marker>
  </defs>
);
/**
 * (col2,row1) → (col3,row2)
 *  (100,0)    → (200,100)
 */
export const ArrowCol2Row1ToCol3Row2 = () => (
  <svg width="300" height="200" style={{ overflow: 'visible' }}>
    <CurvedArrowheadMarker markerId="ah-col2r1-col3r2" />

    {/* Black outline under */}
    <path
      d="M 100 0 Q 150 -20 200 100"
      stroke="black"
      strokeWidth="8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* White arrow body on top */}
    <path
      d="M 100 0 Q 150 -20 200 100"
      stroke="white"
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      markerEnd="url(#ah-col2r1-col3r2)"
    />
  </svg>
);

/**
 * (col3,row2) → (col3,row4)
 *  (200,100)  → (200,300)
 */
export const ArrowCol3Row2ToCol3Row4 = () => (
  <svg width="300" height="400" style={{ overflow: 'visible' }}>
    <CurvedArrowheadMarker markerId="ah-col3r2-col3r4" />

    <path
      d="M 200 100 Q 300 200 200 300"
      stroke="black"
      strokeWidth="8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M 200 100 Q 300 200 200 300"
      stroke="white"
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      markerEnd="url(#ah-col3r2-col3r4)"
    />
  </svg>
);

/**
 * (col3,row4) → (col2,row5)
 *  (200,300)  → (100,400)
 */
export const ArrowCol3Row4ToCol2Row5 = () => (
  <svg width="300" height="500" style={{ overflow: 'visible' }}>
    <CurvedArrowheadMarker markerId="ah-col3r4-col2r5" />

    <path
      d="M 200 300 Q 250 380 100 400"
      stroke="black"
      strokeWidth="8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M 200 300 Q 250 380 100 400"
      stroke="white"
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      markerEnd="url(#ah-col3r4-col2r5)"
    />
  </svg>
);

/**
 * (col2,row5) → (col1,row4)
 *  (100,400)  → (0,300)
 */
export const ArrowCol2Row5ToCol1Row4 = () => (
  <svg width="200" height="500" style={{ overflow: 'visible' }}>
    <marker id="ah-col2r5-col1r4" markerWidth="8" markerHeight="8" refX="1" refY="4" orient="auto"><polygon points="0,0 8,4 0,8" fill="white" stroke="black" stroke-width="0.5" stroke-linejoin="round" stroke-linecap="round"></polygon></marker>

    <path
      d="M 100 400 Q -50 380 0 300"
      stroke="black"
      strokeWidth="8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M 100 400 Q -50 380 0 300"
      stroke="white"
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      markerEnd="url(#ah-col2r5-col1r4)"
    />
  </svg>
);

/**
 * (col1,row4) → (col1,row2)
 *  (0,300)    → (0,100)
 */
export const ArrowCol1Row4ToCol1Row2 = () => (
  <svg width="100" height="400" style={{ overflow: 'visible' }}>
    <CurvedArrowheadMarker markerId="ah-col1r4-col1r2" />

    <path
      d="M 0 300 Q -80 200 0 100"
      stroke="black"
      strokeWidth="8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M 0 300 Q -80 200 0 100"
      stroke="white"
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      markerEnd="url(#ah-col1r4-col1r2)"
    />
  </svg>
);

/**
 * (col1,row2) → (col2,row1)
 *  (0,100)    → (100,0)
 */
export const ArrowCol1Row2ToCol2Row1 = () => (
  <svg width="200" height="200" style={{ overflow: 'visible' }}>
    <marker id="ah-col1r2-col2r1" markerWidth="8" markerHeight="8" refX="1" refY="4" orient="auto"><polygon points="0,0 8,4 0,8" fill="white" stroke="black" stroke-width="0.5" stroke-linejoin="round" stroke-linecap="round"></polygon></marker>

    <path
      d="M 0 100 Q 50 -20 100 0"
      stroke="black"
      strokeWidth="8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M 0 100 Q 50 -20 100 0"
      stroke="white"
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      markerEnd="url(#ah-col1r2-col2r1)"
    />
  </svg>
);