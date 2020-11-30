import { useState } from 'react';
import Loader from 'react-loader-spinner'
import './styles.css';

export function Avatar({ img, bgColor }) {

    const [loading, setLoading] = useState(true);

    function onLoadImage() {
        setLoading(false);
    }

    return (
        <div className="img-wrapper">
            {loading && <Loader className="placeholder" type="Puff" color="#00000022" />}
            <img
                src={img}
                onLoad={() => onLoadImage()}
                style={{
                    display: (loading) ? 'none' : 'block',
                    opacity: img ? 1 : 0,
                }}
                alt="Imagem de profile" />
        </div>
    )

}