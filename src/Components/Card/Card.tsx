import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface CardProps {
  title: string;
  value: number;
  color: string;
  icon?: IconProp;
}

const Card = ({ title, value, color, icon }: CardProps) => (
    <div className="card" style={{ backgroundColor: color }}>
        <div className="card-content">
            <div className="icon">
                {icon && <FontAwesomeIcon icon={icon} />}
            </div>
            <div className="title">{title}</div>
            <div className="value">{value}</div>
        </div>
    </div>
);

export default Card;
