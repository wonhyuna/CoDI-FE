import './review.css';
const ReviewItem = ({id, userName, evaluation, symptom, content}) =>{
  return(
    <div className="ReviewItem">
      <div className="reviewItemInfo">
        <span className='reviewItemUserName'>{userName}님</span>
        <span className='reviewItemEvaluation'>[별점: {evaluation}/5]</span>
      </div>
    </div>
  )
}
export default ReviewItem;