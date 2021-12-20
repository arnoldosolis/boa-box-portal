interface Props {
  loan: string;
}

function Boa_red_bar({ loan }: Props) {
  return (
    <ul
      style={{
        backgroundColor: "#dc1431",
        height: "60px",
        paddingLeft: "25px",
      }}
    >
      <li
        style={{
          color: "white",
          listStyleType: "none",
          paddingTop: "15px",
          fontSize: "22px",
        }}
      >
        {loan}
      </li>
    </ul>
  );
}

export default Boa_red_bar;
