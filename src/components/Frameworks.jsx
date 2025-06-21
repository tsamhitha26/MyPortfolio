import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        <Icon src="/assets/logos/css.svg" />
        <Icon src="/assets/logos/html.jpg" />
        <Icon src="/assets/logos/java.png" />
        <Icon src="/assets/logos/javascript.jpeg" />
        <Icon src="/assets/logos/Python.png" />
        <Icon src="/assets/logos/sql.png" />
      </OrbitingCircles>
      
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        <Icon src="/assets/logos/sql.png" />
        <Icon src="/assets/logos/Python.png" />
        <Icon src="/assets/logos/javascript.jpeg" />
        <Icon src="/assets/logos/java.png" />
        <Icon src="/assets/logos/html.jpg" />
        <Icon src="/assets/logos/css.svg" />
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
