import "./boa-red-bar.css";

interface Props {
  loan: string;
}

function Boa_red_bar({ loan }: Props) {
  return (
    <ul className="boa-red-bar-ul">
      <li className="boa-red-bar-li">{loan}</li>
    </ul>
  );
}

export default Boa_red_bar;
