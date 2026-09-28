type RatingProps = {
  value: number
  reviews?: number
}

function Rating({ value, reviews }: RatingProps) {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="rating" aria-label={`Avaliação ${value} de 5`}>
      <span className="rating__stars" aria-hidden="true">
        {stars.map((star) => (
          <span key={star} className={star <= Math.round(value) ? 'on' : 'off'}>
            ★
          </span>
        ))}
      </span>
      <small>
        {value.toFixed(1).replace('.', ',')}
        {reviews !== undefined ? ` (${reviews})` : ''}
      </small>
    </div>
  )
}

export default Rating
