export default function InfoTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Scientific Name</th>
          <th>Common Name</th>
          <th>Bloom</th>
          <th>Life</th>
          <th>Form</th>
          <th>Sun</th>
          <th>Soil</th>
          <th>Additional Details</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item["SCIENTIFIC NAME"]}>
            <td>{item["SCIENTIFIC NAME"].replace("\u01ab", "")}</td>
            <td>{item["COMMON NAME"]}</td>
            <td>{item["BLOOM"]}</td>
            <td>{item["LIFE"]}</td>
            <td>{item["FORM"]}</td>
            <td>{item["SUN"]}</td>
            <td>{item["SOIL"]}</td>
            <td>{item["ADDITIONAL DETAILS \u017e"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
