// components/SolarSystemTable.jsx
export default function SolarSystemTable() {
  const data = [
    { name: 'Sol', distance: '-', diameter: '1.390.000' },
    { name: 'Mercurio', distance: '58.000.000', diameter: '4.880' },
    { name: 'Venus', distance: '108.000.000', diameter: '12.100' },
    { name: 'Tierra', distance: '150.000.000', diameter: '12.800' },
    { name: 'Marte', distance: '228.000.000', diameter: '6.800' },
    // { name: 'Ceres', distance: '420.000.000', diameter: '1.000' },
    { name: 'Jupiter', distance: '780.000.000', diameter: '143.000' },
    { name: 'Saturno', distance: '1.430.000.000', diameter: '120.000' },
    { name: 'Urano', distance: '2.870.000.000', diameter: '51.000' },
    { name: 'Neptuno', distance: '4.500.000.000', diameter: '49.000' },
    // { name: 'Plutón', distance: '4.900.000.000', diameter: '2.300' },
  ];

  return (
    <>
    <div className="table-wrapper">
      <table className="solar-table">
        <thead>
          <tr>
            <th>Planet</th>
            <th>Sun distance</th>
            <th>Diameter (km)</th>
          </tr>
        </thead>

        <tbody>
          {data.map(({ name, distance, diameter }, idx) => (
            <tr key={idx}>
              <td className="nowrap">{name}</td>
              <td className="nowrap">{distance}</td>
              <td className="nowrap">{diameter}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <style jsx>{`
        /* 1) Contenedor con scroll horizontal en móviles */
        .table-wrapper {
          overflow-x: auto;
          border-radius: 12px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }

        /* 2) Tabla básica */
        .solar-table {
          width: 100%;
          border-collapse: collapse;
          font-family: Verdana, sans-serif;
          font-size: 0.9rem;
          background-color: #fff;
          color: #333;
        }

        /* 3) Encabezado */
        .solar-table thead {
          background:rgb(115, 115, 115);
          color: #fff;
        }
        .solar-table th,
        .solar-table td {
          padding: 0.75rem 1rem;
          text-align: left;
        }

        /* 4) Rayado de filas y hover */
        .solar-table tbody tr:nth-child(even) {
          background: #f5f7fa;
        }
        .solar-table tbody tr:hover {
          background: #eaf3ff;
        }

        /* 5) No romper números largos */
        .nowrap {
          white-space: nowrap;
        }

        /* 6) Ajustes responsivos */
        @media (max-width: 640px) {
          .solar-table th,
          .solar-table td {
            padding: 0.5rem 0.75rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </>
  );
}
