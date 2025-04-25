//import "./Netflix.css";
import styles from "./Netflix.module.css";
//import styled from 'styled-components';
export const SeriesCard = ({id,image,title,rating,genre,watchLink}) => {  // Destructure props properly
  const btn_style={
    padding: '1.2rem 2.4rem',
    border: 'none',
    fontSize: '1.6rem',
    backgroundColor: `${rating >=8.5 ? '#7dcea0':'#f7dc6f'}`,
    color: 'var(--btn-color)',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
  const ratingCls= rating>=8.5 ? styles.super_hit : styles.average;
    return (
      <li className = {styles.card} key={id}>
          <div>
            <img src={image} alt={title} height="20%" width="20%" />
          </div>
          <div className = {styles['card-content']}>
          <h2>Name: {title}</h2>
          <h3>Rating: <span className={`${styles.rating} ${ratingCls}`}>{rating}</span></h3>
          <h3>Genre: {genre}</h3>
          <p> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            minus tempora adipisci ab ullam natus dolorem, fuga debitis rerum
            eum est cumque odit repellat saepe illo blanditiis asperiores
            voluptates eveniet!
          </p>
          <a href={watchLink} target="_blank" rel="noopener noreferrer">
            <button style={btn_style}>Watch Now</button>
          </a>
        </div>
      </li>
    );
  };
  