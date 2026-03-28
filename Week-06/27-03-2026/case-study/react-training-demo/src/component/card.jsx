function Card({ title, content, icon, isfeatured = false }) {
  return (
    <div style={{
      border: isfeatured ? '2px solid gold' : '1px solid #ccc',
      padding: '20px',
      borderRadius: '10px',
      margin: '10px',
      backgroundColor: isfeatured ? '#fff8dc' : '#f9f9f9',
      width: '250px'
    }}>
      {icon && <div style={{ fontSize: '30px' }}>{icon}</div>}
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default Card;