export default function InvertFilterDefs() {
  return (
    <svg style={{ position: 'fixed', left: 0, top: 0, width: 0, height: 0 }}>
      <defs>
        <filter id="invert-filter" color-interpolation-filters="sRGB">
          <feColorMatrix
            type="matrix"
            values="
 0.574 -1.430 -0.144  0.000  1.000
-0.426 -0.430 -0.144  0.000  1.000
-0.426 -1.430  0.856  0.000  1.000
 0.000  0.000  0.000  1.000  0.000
"
          ></feColorMatrix>
        </filter>
      </defs>
    </svg>
  );
}
